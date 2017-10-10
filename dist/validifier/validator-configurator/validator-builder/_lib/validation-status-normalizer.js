import * as _ from 'lodash';
import prefixer from '../../../_lib/prefixer';
export default function (settings, validationStatus) {
    if (_.isPlainObject(validationStatus)) {
        var key = _.keys(validationStatus)[0];
        var value = validationStatus[key];
        key = prefixer(settings, key);
        validationStatus = (_a = {}, _a[key] = value, _a);
    }
    return validationStatus;
    var _a;
};
//# sourceMappingURL=validation-status-normalizer.js.map