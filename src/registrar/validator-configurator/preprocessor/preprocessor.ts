import _ from 'lodash';

export default (control, configs, validatorDeclaration) => {
  let {preprocessor} = validatorDeclaration;
  
  if(!_.isPlainObject(configs)) {
    configs = {validator: configs};
  }
  
  if(preprocessor) {
    configs.validator = preprocessor(control, configs.validator);
  }

  return configs;
};
