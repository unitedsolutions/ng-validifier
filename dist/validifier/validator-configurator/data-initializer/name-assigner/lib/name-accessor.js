import * as _ from 'lodash';
export default function (control) {
    var controls = control._parent.controls;
    var controlNames = _.keys(controls);
    for (var _i = 0, controlNames_1 = controlNames; _i < controlNames_1.length; _i++) {
        var controlName = controlNames_1[_i];
        if (controls[controlName] === control) {
            return controlName;
        }
    }
};
//# sourceMappingURL=name-accessor.js.map