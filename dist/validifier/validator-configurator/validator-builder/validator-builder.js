import syncValidator from './sync-validator/sync-validator';
import asyncValidator from './async-validator/async-validator';
export default function (settings, control, configs, validatorDeclaration) {
    return function () {
        if (validatorDeclaration.async) {
            return asyncValidator(settings, control, configs, validatorDeclaration);
        }
        return syncValidator(settings, control, configs, validatorDeclaration);
    };
};
//# sourceMappingURL=validator-builder.js.map