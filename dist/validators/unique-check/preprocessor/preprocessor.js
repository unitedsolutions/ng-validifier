import * as _ from 'lodash';
export default function (control, configs, baseConfigs) {
    if (!_.isPlainObject(configs)) {
        configs = { path: configs };
    }
    var fieldName = configs.fieldName, ignore = configs.ignore, ignoreCase = configs.ignoreCase, path = configs.path;
    if (baseConfigs) {
        var baseUrl = baseConfigs.baseUrl;
    }
    if (!fieldName) {
        fieldName = control.controlName;
    }
    if (!ignore) {
        ignore = [];
    }
    else if (!_.isArray(ignore)) {
        ignore = [ignore];
    }
    if (_.isUndefined(ignoreCase)) {
        ignoreCase = true;
    }
    if (ignoreCase) {
        ignore = ignore.map(function (ignore) { return (ignore + '').toLowerCase(); });
    }
    if (baseUrl) {
        path = baseUrl + path;
    }
    return _.extend(configs, { fieldName: fieldName, ignore: ignore, ignoreCase: ignoreCase, path: path });
};
//# sourceMappingURL=preprocessor.js.map