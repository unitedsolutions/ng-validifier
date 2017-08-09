import * as _              from 'lodash';
import dataInitializer     from './data-initializer/data-initializer';
import dependentsRegistrar from './dependents-registrar/dependents-registrar';
import preprocessor        from './preprocessor/preprocessor';
import elementsInitializer from './elements-initializer/elements-initializer';
import errorGenerator      from './error-generator/error-generator';
import validatorBuilder    from './validator-builder/validator-builder';

export default (settings, validatorDeclaration) => {
  let dataNames = ['async', 'checkbox', 'validatorName', 'directiveNamePrefixed'];
  dataNames.push('validatorNamePrefixed', 'messager');
  let supplementalData = _.pick(validatorDeclaration, dataNames);
  let configurator = (control, configs, el) => {
    dataInitializer(settings, control, el);
    dependentsRegistrar(control);
    configs = preprocessor(control, configs, validatorDeclaration);
    elementsInitializer(settings, control, validatorDeclaration);
    errorGenerator(settings, control, configs, validatorDeclaration);
    return validatorBuilder(settings, control, configs, validatorDeclaration);
  };

  return _.extend(configurator, supplementalData);
};
