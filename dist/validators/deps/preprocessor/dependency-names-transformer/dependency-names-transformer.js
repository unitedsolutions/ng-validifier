import strArrayifier from './_lib/str-arrayifier';
export default function (dependencyNames, control) {
    var controlName = control.controlName;
    dependencyNames = strArrayifier(dependencyNames, ',');
    if (dependencyNames.indexOf(controlName) !== -1) {
        throw new Error("[" + controlName + "] cannot depend on itself");
    }
    return dependencyNames;
};
//# sourceMappingURL=dependency-names-transformer.js.map