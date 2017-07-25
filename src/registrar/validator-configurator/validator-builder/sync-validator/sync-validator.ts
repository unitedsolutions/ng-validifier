import validationStatusNormalizer from '../_lib/validation-status-normalizer';

export default (control, configs, validatorDeclaration) => {
  let {validify} = control;
  let {validationStater} = validify;
  let {validator, validatorName} = validatorDeclaration;
  let validationStatus = validator(control, configs.validator);
  
  if(validationStatus) {
    validify.sync = true;
  }
  
  validationStater.set(validatorName, validationStatus).updateDependents().visualize();
  return validationStatusNormalizer(validationStatus);
};
