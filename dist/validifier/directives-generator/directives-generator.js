import * as _ from 'lodash';
import { Directive, Input, forwardRef, ElementRef } from '@angular/core';
import { NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import selectorAssembler from './_lib/selector-assembler';
export default function (validators) {
    return validators.map(function (validatorConfigurator) {
        var _async = validatorConfigurator.async, checkbox = validatorConfigurator.checkbox, validatorNamePrefixed = validatorConfigurator.validatorNamePrefixed;
        var directiveNamePrefixed = validatorConfigurator.directiveNamePrefixed;
        var directiveName = directiveNamePrefixed || validatorNamePrefixed;
        var selector = selectorAssembler(directiveName, checkbox);
        var providers = [{
                provide: _async ? NG_ASYNC_VALIDATORS : NG_VALIDATORS,
                useExisting: forwardRef(function () { return ValidatorDirectiveClass; }),
                multi: true
            }];
        var ValidatorDirectiveClass = /** @class */ (function () {
            function ValidatorDirectiveClass(el, http) {
                this.el = el;
                this.http = http;
            }
            ValidatorDirectiveClass.prototype.ngOnChanges = function (changes) {
                if ('configs' in changes) {
                    if (!this.control) {
                        return;
                    }
                    this.createValidator();
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            };
            ValidatorDirectiveClass.prototype.validate = function (control) {
                var error = (_a = {}, _a[directiveName] = true, _a);
                if (_async) {
                    _.extend(control, { http: this.http });
                }
                _.extend(this, {
                    control: control,
                    validate: function () {
                        return this.validator();
                    }
                });
                this.createValidator();
                return _async ? Promise.resolve(error) : error;
                var _a;
            };
            ValidatorDirectiveClass.prototype.registerOnValidatorChange = function (fn) {
                this.onChange = fn;
            };
            ValidatorDirectiveClass.prototype.createValidator = function () {
                var _this = this;
                this.validator = validatorConfigurator(this.control, this.configs, this.el);
                setTimeout(function () { return _this.validate(); });
            };
            ValidatorDirectiveClass.decorators = [
                { type: Directive, args: [{ selector: selector, providers: providers },] },
            ];
            /** @nocollapse */
            ValidatorDirectiveClass.ctorParameters = function () { return [
                { type: ElementRef, },
                null,
            ]; };
            ValidatorDirectiveClass.propDecorators = {
                'configs': [{ type: Input, args: ["" + directiveName,] },],
            };
            return ValidatorDirectiveClass;
        }());
        ;
        return ValidatorDirectiveClass;
    });
};
//# sourceMappingURL=directives-generator.js.map