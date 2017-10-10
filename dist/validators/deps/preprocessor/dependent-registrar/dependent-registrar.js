import dependentsSetter from '../../../../dependents-setter/dependents-setter';
import dependencyRequestRegistrar from './dependency-request-registrar/dependency-request-registrar';
export default function (dependencyName, control) {
    var dependencyControl = control._parent.controls[dependencyName];
    if (dependencyControl) {
        return dependentsSetter(dependencyControl, control);
    }
    dependencyRequestRegistrar(dependencyName, control);
};
//# sourceMappingURL=dependent-registrar.js.map