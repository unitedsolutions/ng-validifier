export default (control, validatorName) => {
  let {validify} = control;

  control.validValue = control.invalidValue = null;
  validify.asyncStatuses[validatorName] = true;
  validify.sync = false;  
};
