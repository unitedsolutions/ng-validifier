import _ from 'lodash';

export default (control, validatorDeclaration, validationStatus) => {
  let {errors, value, validify} = control;
  let {asyncStatuses, errors: _errors} = validify;
  let {validatorName, validatorNamePrefixed} = validatorDeclaration;
  
  _errors[validatorName].requests = {};
  validify.sync = false;
  asyncStatuses[validatorName] = false;
  
  if(!validationStatus) {
    errors = _.omit(errors, [validatorNamePrefixed]);
  }
  
  _.extend(errors, validationStatus);
  
  if(_.isEmpty(errors)) {
    control.validValue = value;
    errors = '';
  } else {
    control.invalidValue = value;
  }
  
  control.setErrors(errors);
};
