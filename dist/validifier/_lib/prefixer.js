import * as _ from 'lodash';
export default function (settings, name) {
    var prefix = settings.prefix;
    if (prefix && name) {
        name = prefix + _.upperFirst(name);
    }
    return name;
};
//# sourceMappingURL=prefixer.js.map