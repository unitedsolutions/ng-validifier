import { dependencyDependentsMap } from '../../_lib/vars';
export default function (_parent) {
    var formDependencyDependentsMap = dependencyDependentsMap.get(_parent);
    if (!formDependencyDependentsMap) {
        dependencyDependentsMap.set(_parent, formDependencyDependentsMap = {});
    }
    return formDependencyDependentsMap;
};
//# sourceMappingURL=form-dependency-map-getter.js.map