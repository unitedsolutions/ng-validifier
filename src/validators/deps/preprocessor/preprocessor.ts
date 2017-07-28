import _                          from 'lodash';
import dependencyNamesTransformer from './dependency-names-transformer/dependency-names-transformer';
import dependentTracker           from './dependent-tracker/dependent-tracker';
import dependentRegistrar         from './dependent-registrar/dependent-registrar';

export default (control, dependencyNames) => {
  dependencyNames = dependencyNamesTransformer(dependencyNames, control);

  _.each(dependencyNames, dependencyName => {
    dependentTracker(dependencyName, control);
    dependentRegistrar(dependencyName, control);
  });

  return dependencyNames;
};
