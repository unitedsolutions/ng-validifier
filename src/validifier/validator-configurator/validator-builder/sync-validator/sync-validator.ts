import validationStatusNormalizer from '../_lib/validation-status-normalizer';

export default (settings, control, configs, validatorDeclaration) => {
  let {validify} = control;
  let {validationStater} = validify;
  let {validator, validatorName} = validatorDeclaration;
  let validationStatus = validator(control, configs.validator, configs.baseConfigs);
  
  if(validationStatus) {
    validify.sync = true;
  }
  
  validationStater.set(validatorName, validationStatus).updateDependents().visualize();
  return validationStatusNormalizer(settings, validationStatus);
};
