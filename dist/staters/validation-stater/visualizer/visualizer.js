import * as _ from 'lodash';
import delayCalculator from './_lib/delay-calculator';
import errorsVisualizer from './errors-visualizer/errors-visualizer';
export default function () {
    var _this = this;
    if (!this.silent) {
        setTimeout(function () {
            var _a = _this, control = _a.control, _b = _a.dependents, dependents = _b === void 0 ? [] : _b, errorConfigs = _a.errorConfigs;
            var delay = delayCalculator(_this.settings, errorConfigs);
            clearTimeout(errorConfigs.visualizationTimeout);
            errorConfigs.visualizationTimeout = setTimeout(function () {
                dependents.unshift(control);
                _.each(dependents, function (control) {
                    var validify = control.validify;
                    _.extend(validify, { silent: false, ignoreDependents: false });
                    _.each(validify.errors, _.partial(errorsVisualizer, _this.settings, _));
                });
            }, delay);
        });
    }
}
//# sourceMappingURL=visualizer.js.map