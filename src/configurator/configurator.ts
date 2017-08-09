import * as _                     from 'lodash';
import {NgModule}                 from '@angular/core';
import internalValidators         from '../validators/validators';
import prefixer                   from './_lib/prefixer';
import {settings as mainSettings} from '../_lib/vars';
import validatorConfigurator      from './validator-configurator/validator-configurator';
import directivesGenerator        from './directives-generator/directives-generator';

export default (settings, validators = []) => {
  settings = _.extend({}, mainSettings, settings);
  validators = internalValidators.concat(validators);
  validators = validators.map(validator => {
    let {validatorName, directiveName} = validator;
    let validatorNamePrefixed = prefixer(settings, validatorName);
    let directiveNamePrefixed = prefixer(settings, directiveName);
    _.extend(validator, {validatorNamePrefixed, directiveNamePrefixed});
    return validatorConfigurator(settings, validator);
  });
  
  let directives = directivesGenerator(validators);
  
  @NgModule({
    declarations: directives, 
    exports: directives
  }) class ValidatorModule {}
  
  return ValidatorModule;
};
