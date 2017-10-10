import * as _ from 'lodash';
export default function (validatorName, validationStatus) {
    var _a = this.control.validify, silent = _a.silent, errors = _a.errors;
    var errorConfigs = errors[validatorName];
    _.extend(this, { silent: silent, dependents: undefined });
    errorConfigs.status = validationStatus;
    if (!silent) {
        _.extend(this, { errorConfigs: errorConfigs });
    }
    return this;
}
//# sourceMappingURL=state-setter.js.map