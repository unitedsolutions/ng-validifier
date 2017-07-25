import {NgModule}             from '@angular/core';
import validatorsPreprocessor from './validators-preprocessor/validators-preprocessor';
import validatorsLinker       from './validators-linker/validators-linker';
import directivesGenerator    from './directives-generator/directives-generator';
import internalValidators     from '../validators/validators';

export default (validators?) => {
  validators = internalValidators.concat(validators || []);
  validators = validatorsPreprocessor(validators);
  validators = validatorsLinker(validators);
  let directives = directivesGenerator(validators);
  
  @NgModule({
    declarations: directives, 
    exports: directives
  }) class ValidatorModule {}
  
  return ValidatorModule;
};
