import * as _ from 'lodash';
import dependentsAggregator from './_lib/dependents-aggregator';
export default function () {
    var _a = this, silent = _a.silent, dependents = _a.dependents, control = _a.control;
    if (!silent) {
        if (!control.validify.ignoreDependents) {
            dependents = dependentsAggregator(control);
            var _loop_1 = function (dependent) {
                setTimeout(function () {
                    _.extend(dependent.validify, { silent: true, ignoreDependents: true });
                    dependent.updateValueAndValidity();
                });
            };
            for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
                var dependent = dependents_1[_i];
                _loop_1(dependent);
            }
            _.extend(this, { dependents: dependents });
        }
    }
    return this;
}
//# sourceMappingURL=dependents-updater.js.map