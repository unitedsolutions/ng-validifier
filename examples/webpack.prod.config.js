let path = require('path');
let fs = require('fs');
let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let baseConfigs = require('./webpack.config');
let nodeModules = path.join(process.cwd(), 'node_modules');
let realNodeModules = fs.realpathSync(nodeModules);
let genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');
let ENV = process.env.NODE_ENV = process.env.ENV = 'production';
let {NoEmitOnErrorsPlugin, DefinePlugin, LoaderOptionsPlugin} = webpack;
let {CommonsChunkPlugin, UglifyJsPlugin} = webpack.optimize;

module.exports = webpackMerge(baseConfigs, {
  devtool: 'source-map',

  plugins: [
    new NoEmitOnErrorsPlugin(),
    new UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new CommonsChunkPlugin({
      "minChunks": 2,
      "async": "common"
    }),
    new CommonsChunkPlugin({
      "name": [
        "inline"
      ],
      "minChunks": null
    }),
    new CommonsChunkPlugin({
      "name": [
        "vendor"
      ],
      "minChunks": (module) => {
        return module.resource && 
               (module.resource.startsWith(nodeModules) || 
                module.resource.startsWith(genDirNodeModules) || 
                module.resource.startsWith(realNodeModules));
      },
      "chunks": [
        "main"
      ]
    })
  ]
});
