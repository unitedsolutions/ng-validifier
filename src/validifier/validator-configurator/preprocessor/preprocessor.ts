import * as _ from 'lodash';

export default (settings, control, configs, validatorDeclaration) => {
  let {preprocessor} = validatorDeclaration;
  
  if(!_.isPlainObject(configs)) {
    configs = {validator: configs};
  }
  
  if(preprocessor) {
    let {validatorConfigs} = settings;
    
    if(validatorConfigs) {
      let {validatorName} = validatorDeclaration;
      var baseConfigs = validatorConfigs[validatorName];
      _.extend(configs, {baseConfigs});
    }

    configs.validator = preprocessor(control, configs.validator, baseConfigs);
  }

  return configs;
};
