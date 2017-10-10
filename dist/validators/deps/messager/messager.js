import dependencyNamesStringifier from './_lib/dependency-names-stringifier';
export default function (control, dependencyNames) {
    var controlNameProper = control.controlNameProper;
    dependencyNames = dependencyNamesStringifier(dependencyNames);
    return controlNameProper + " depends on " + dependencyNames;
};
//# sourceMappingURL=messager.js.map