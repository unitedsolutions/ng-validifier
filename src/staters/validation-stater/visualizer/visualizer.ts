import * as _           from 'lodash';
import delayCalculator  from './_lib/delay-calculator';
import errorsVisualizer from './errors-visualizer/errors-visualizer';

export default function() {
  if(!this.silent) {
    setTimeout(() => {
      let {control, dependents = [], errorConfigs} = this;
      let delay = delayCalculator(this.settings, errorConfigs);
      
      clearTimeout(errorConfigs.visualizationTimeout);
      
      errorConfigs.visualizationTimeout = setTimeout(() => {
        dependents.unshift(control);
        _.each(dependents, control => {
          let {validify} = control;
          
          _.extend(validify, {silent: false, ignoreDependents: false});
          _.each(validify.errors, _.partial(errorsVisualizer, this.settings, _));
        })
      }, delay);
    });
  }
}
