import * as _ from 'lodash';
import dependencyNamesTransformer from './dependency-names-transformer/dependency-names-transformer';
import dependentTracker from './dependent-tracker/dependent-tracker';
import dependentRegistrar from './dependent-registrar/dependent-registrar';
export default function (control, dependencyNames) {
    dependencyNames = dependencyNamesTransformer(dependencyNames, control);
    _.each(dependencyNames, function (dependencyName) {
        dependentTracker(dependencyName, control);
        dependentRegistrar(dependencyName, control);
    });
    return dependencyNames;
};
//# sourceMappingURL=preprocessor.js.map