import * as _ from 'lodash';
import { settings as mainSettings } from '../_lib/vars';
import internalValidators from '../validators/validators';
import moduleGenerator from './module-generator/module-generator';
export default function (settings, validators) {
    if (validators === void 0) { validators = []; }
    settings = _.extend({}, mainSettings, settings);
    validators.push.apply(validators, internalValidators);
    return moduleGenerator(settings, validators);
};
//# sourceMappingURL=validifier.js.map