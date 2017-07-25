import _ from 'lodash';

export default function(validatorName, validationStatus) {
  let {silent, errors} = this.control.validify;
  let errorConfigs = errors[validatorName];
  
  _.extend(this, {silent, dependents: undefined});
  errorConfigs.status = validationStatus;
  
  if(!silent) {
    _.extend(this, {errorConfigs});
  }
  
  return this;
}
