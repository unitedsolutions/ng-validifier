import * as _ from 'lodash';
import { NgModule } from '@angular/core';
import { HttpClientPlusModule } from 'ng-http-client-plus';
import prefixer from '../_lib/prefixer';
import validatorConfigurator from '../validator-configurator/validator-configurator';
import directivesGenerator from '../directives-generator/directives-generator';
export default function (settings, validators) {
    validators = validators.map(function (validator) {
        var validatorName = validator.validatorName, directiveName = validator.directiveName;
        var validatorNamePrefixed = prefixer(settings, validatorName);
        var directiveNamePrefixed = prefixer(settings, directiveName);
        _.extend(validator, { validatorNamePrefixed: validatorNamePrefixed, directiveNamePrefixed: directiveNamePrefixed });
        return validatorConfigurator(settings, validator);
    });
    var directives = directivesGenerator(validators);
    var ValidatorModule = /** @class */ (function () {
        function ValidatorModule() {
        }
        ValidatorModule.decorators = [
            { type: NgModule, args: [{
                        imports: [HttpClientPlusModule],
                        declarations: directives,
                        exports: directives
                    },] },
        ];
        /** @nocollapse */
        ValidatorModule.ctorParameters = function () { return []; };
        return ValidatorModule;
    }());
    return ValidatorModule;
};
//# sourceMappingURL=module-generator.js.map