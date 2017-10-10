import * as _ from 'lodash';
export default function (time, settings) {
    time = _.now() - time;
    time = (settings.asyncMinimumPendingDuration || time) - time;
    if (time < 0) {
        time = 0;
    }
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
};
//# sourceMappingURL=pauser.js.map