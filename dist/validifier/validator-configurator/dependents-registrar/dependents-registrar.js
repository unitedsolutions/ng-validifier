import { dependencyRequests } from '../../../_lib/vars';
import dependentsSetter from '../../../dependents-setter/dependents-setter';
export default function (control) {
    var _parent = control._parent, controlName = control.controlName;
    var parentRecords = dependencyRequests.get(_parent);
    if (parentRecords) {
        var dependentRecords = parentRecords[controlName];
        if (dependentRecords) {
            dependentsSetter(control, dependentRecords);
            delete parentRecords[controlName];
        }
    }
};
//# sourceMappingURL=dependents-registrar.js.map