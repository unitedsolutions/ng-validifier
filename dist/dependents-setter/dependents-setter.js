import * as _ from 'lodash';
export default function (control, newDependents) {
    var validify = control.validify;
    var dependents = validify.dependents;
    if (!_.isArray(newDependents)) {
        newDependents = [newDependents];
    }
    if (!dependents) {
        _.set(validify, 'dependents', dependents = []);
    }
    dependents.push.apply(dependents, newDependents);
};
//# sourceMappingURL=dependents-setter.js.map