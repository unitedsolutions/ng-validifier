import errorsContainerBuilder from './errors-container-builder/errors-container-builder';
import asyncContainerBuilder  from './async-container-builder/async-container-builder';

export default (control, validatorDeclaration) => {
  errorsContainerBuilder(control);
  asyncContainerBuilder(control, validatorDeclaration);
};
