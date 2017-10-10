import { dependencyRequests } from '../../../../../_lib/vars';
export default function (dependencyName, control) {
    var _parent = control._parent;
    var formDependencyRequests = dependencyRequests.get(_parent);
    if (!formDependencyRequests) {
        dependencyRequests.set(_parent, formDependencyRequests = {});
    }
    var dependents = formDependencyRequests[dependencyName];
    if (!dependents) {
        dependents = formDependencyRequests[dependencyName] = [];
    }
    dependents.push(control);
};
//# sourceMappingURL=dependency-request-registrar.js.map