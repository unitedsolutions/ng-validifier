import * as _                from 'lodash';
import {NgModule}            from '@angular/core';
import {HttpClientModule}    from '@angular/common/http';
import prefixer              from '../_lib/prefixer';
import validatorConfigurator from '../validator-configurator/validator-configurator';
import directivesGenerator   from '../directives-generator/directives-generator';

export default (settings, validators) => {
  validators = validators.map(validator => {
    let {validatorName, directiveName} = validator;
    let validatorNamePrefixed = prefixer(settings, validatorName);
    let directiveNamePrefixed = prefixer(settings, directiveName);
    _.extend(validator, {validatorNamePrefixed, directiveNamePrefixed});
    return validatorConfigurator(settings, validator);
  });
  
  let directives = directivesGenerator(validators);

  @NgModule({
    imports: [HttpClientModule],
    declarations: directives, 
    exports: directives
  }) class ValidatorModule {}
  
  return ValidatorModule;    
};
