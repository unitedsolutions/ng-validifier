import * as _ from 'lodash';
export default function (dependencyNames) {
    return dependencyNames.map(function (dependencyName) {
        return _.upperFirst(_.lowerCase(dependencyName));
    }).join(', ');
};
//# sourceMappingURL=dependency-names-stringifier.js.map