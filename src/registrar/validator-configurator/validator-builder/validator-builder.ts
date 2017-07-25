import syncValidator  from './sync-validator/sync-validator';
import asyncValidator from './async-validator/async-validator';

export default (control, configs, validatorDeclaration) => {
  return () => {
    if(validatorDeclaration.async) {
      return asyncValidator(control, configs, validatorDeclaration);
    }
    
    return syncValidator(control, configs, validatorDeclaration);
  }
};
