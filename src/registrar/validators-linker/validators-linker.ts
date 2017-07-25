import {Validators}          from '@angular/forms';
import validatorConfigurator from '../validator-configurator/validator-configurator';

export default validators => {
  return validators.map(validatorDeclaration => {
    let {validatorNamePrefixed} = validatorDeclaration;
    let configurator = validatorConfigurator(validatorDeclaration);
    return Validators[validatorNamePrefixed] = configurator;
  });
};
