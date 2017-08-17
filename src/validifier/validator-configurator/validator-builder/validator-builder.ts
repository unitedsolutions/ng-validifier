import syncValidator  from './sync-validator/sync-validator';
import asyncValidator from './async-validator/async-validator';

export default (settings, control, configs, validatorDeclaration) => {
  return () => {
    if(validatorDeclaration.async) {
      return asyncValidator(settings, control, configs, validatorDeclaration);
    }
    
    return syncValidator(settings, control, configs, validatorDeclaration);
  }
};
