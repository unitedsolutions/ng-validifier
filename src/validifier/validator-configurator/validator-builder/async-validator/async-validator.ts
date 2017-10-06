import * as _                     from 'lodash';
import validationStatusNormalizer from '../_lib/validation-status-normalizer';
import initialDataSetter          from './initializer/initial-data-setter/initial-data-setter';
import requestsNullifier          from './initializer/requests-nullifier/requests-nullifier';
import initialVisualizer          from './initializer/initial-visualizer/initial-visualizer';
import finalDataSetter            from './finalizer/final-data-setter/final-data-setter';
import finalVisualizer            from './finalizer/final-visualizer/final-visualizer';

export default (settings, control, configs, validatorDeclaration) => {
  if(control.validValue === control.value) {
    return Promise.resolve();
  }   
  
  let {validatorName, validatorNamePrefixed, validator} = validatorDeclaration;
  let {validify} = control;
  let {asyncProgressVisualizer, errors, validationStater} = validify;
  let errorConfigs = errors[validatorName];
  let validationId = _.uniqueId();

  if(control.invalidValue === control.value) {
    let error = {[validatorNamePrefixed]: true};
    validationStater.set(validatorName, error).visualize();
    return Promise.resolve(error);
  }
  
  initialDataSetter(control, validatorName);
  requestsNullifier(control, validatorName, validationId);
  initialVisualizer(control, validatorName);
  
  clearTimeout(errorConfigs.asyncDebounceTimeout);
  
  errorConfigs.asyncDebounceTimeout = setTimeout(() => {
    if(validify.sync) {
      return asyncProgressVisualizer.container(false);
    }
    
    asyncProgressVisualizer.pending(true);
    
    validator(control, configs.validator, configs.baseConfigs).then(validationStatus => {
      if(errorConfigs.requests[validationId]) {
        return;
      }

      validationStatus = validationStatusNormalizer(settings, validationStatus);
      finalDataSetter(control, validatorDeclaration, validationStatus);
      finalVisualizer(settings, control, validatorName, validationStatus);      
    });
  }, settings.asyncDebounceTime);
  
  return Promise.resolve({[validatorNamePrefixed]: true});
};
