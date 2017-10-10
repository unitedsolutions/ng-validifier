import * as _ from 'lodash';
import nameAccessor from './lib/name-accessor';
export default function (control) {
    var controlName = control.controlName;
    if (!controlName) {
        controlName = nameAccessor(control);
        _.extend(control, {
            controlName: controlName,
            controlNameProper: _.upperFirst(_.lowerCase(controlName))
        });
    }
};
//# sourceMappingURL=name-assigner.js.map