(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("jquery"), require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "jquery", "@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng-validify"] = factory(require("lodash"), require("jquery"), require("@angular/core"), require("@angular/forms"));
	else
		root["ng-validify"] = factory(root["_"], root["$"], root["ng"]["core"], root["ng"]["forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_65__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dependencyRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings; });
var dependencyRequests = new WeakMap();
var settings = {
    prefix: 'v',
    selectors: {
        elementContainer: '.form-group',
        errorsContainer: ['insertAfter', 'input'],
        asyncStatusContainer: ['insertBefore', 'input']
    },
    errorMessageClasses: {
        initial: '',
        valid: '',
        invalid: ''
    },
    errorMessageDelays: {
        valid: 300,
        invalid: 500
    },
    asyncDebounceTime: 500,
    asyncStatusHideClass: 'hidden',
    asyncSuccessMessageDuration: 1000
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (settings, $el, baseClass, controlName) {
    var prefix = settings.prefix;
    var classes = [baseClass, baseClass + "-" + controlName];
    var classesStr = classes.map(function (klass) { return prefix + "-" + klass; }).join(' ');
    $el.addClass(classesStr);
};;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (control, newDependents) {
    var validify = control.validify;
    var dependents = validify.dependents;
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isArray"](newDependents)) {
        newDependents = [newDependents];
    }
    if (!dependents) {
        __WEBPACK_IMPORTED_MODULE_0_lodash__["set"](validify, 'dependents', dependents = []);
    }
    dependents.push.apply(dependents, newDependents);
};;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (settings, name) {
    var prefix = settings.prefix;
    if (prefix && name) {
        name = prefix + __WEBPACK_IMPORTED_MODULE_0_lodash__["upperFirst"](name);
    }
    return name;
};;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

/* harmony default export */ __webpack_exports__["a"] = function ($el, $container, $containerContainer, insertionSpec) {
    var _a = (function () {
        if (!$containerContainer.length) {
            return ['insertAfter', $el];
        }
        var action = insertionSpec[0], anchor = insertionSpec[1];
        var $insertionPoint = (function () {
            if (!anchor) {
                return $containerContainer;
            }
            return __WEBPACK_IMPORTED_MODULE_0_jquery__(anchor, $containerContainer);
        })();
        return [action, $insertionPoint];
    })(), action = _a[0], $insertionPoint = _a[1];
    $container[action]($insertionPoint);
};;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_prefixer__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = function (settings, validationStatus) {
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isPlainObject"](validationStatus)) {
        var key = __WEBPACK_IMPORTED_MODULE_0_lodash__["keys"](validationStatus)[0];
        var value = validationStatus[key];
        key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_prefixer__["a" /* default */])(settings, key);
        validationStatus = (_a = {}, _a[key] = value, _a);
    }
    return validationStatus;
    var _a;
};;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validatorName; });
/* unused harmony export dependenciesTable */
var validatorName = 'deps';
var dependenciesTable = new WeakMap();



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_vars__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_validators__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_generator_module_generator__ = __webpack_require__(13);




/* harmony default export */ __webpack_exports__["a"] = function (settings, validators) {
    if (validators === void 0) { validators = []; }
    settings = __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"]({}, __WEBPACK_IMPORTED_MODULE_1__lib_vars__["a" /* settings */], settings);
    validators.push.apply(validators, __WEBPACK_IMPORTED_MODULE_2__validators_validators__["a" /* default */]);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__module_generator_module_generator__["a" /* default */])(settings, validators);
};;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (name, checkbox) {
    var checkboxType = '[type=checkbox]';
    var controlTypes = ['formControlName', 'formControl', 'ngModel'];
    checkbox = checkbox ? "input" + checkboxType : ":not(" + checkboxType + ")";
    return controlTypes.reduce(function (selector, controlType) {
        selector.push(checkbox + "[" + name + "][" + controlType + "]");
        return selector;
    }, []).join(',');
};;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_selector_assembler__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* harmony default export */ __webpack_exports__["a"] = function (validators) {
    return validators.map(function (validatorConfigurator) {
        var _async = validatorConfigurator.async, checkbox = validatorConfigurator.checkbox, validatorNamePrefixed = validatorConfigurator.validatorNamePrefixed;
        var directiveNamePrefixed = validatorConfigurator.directiveNamePrefixed;
        var directiveName = directiveNamePrefixed || validatorNamePrefixed;
        var selector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_selector_assembler__["a" /* default */])(directiveName, checkbox);
        var providers = [{
                provide: _async ? __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_ASYNC_VALIDATORS"] : __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALIDATORS"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return ValidatorDirectiveClass; }),
                multi: true
            }];
        var ValidatorDirectiveClass = (function () {
            function ValidatorDirectiveClass(el) {
                this.el = el;
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
                __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, {
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
            __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("" + directiveName),
                __metadata("design:type", Object)
            ], ValidatorDirectiveClass.prototype, "configs", void 0);
            ValidatorDirectiveClass = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({ selector: selector, providers: providers }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
            ], ValidatorDirectiveClass);
            return ValidatorDirectiveClass;
        }());
        ;
        return ValidatorDirectiveClass;
    });
};;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_prefixer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_configurator_validator_configurator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_generator_directives_generator__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* harmony default export */ __webpack_exports__["a"] = function (settings, validators) {
    validators = validators.map(function (validator) {
        var validatorName = validator.validatorName, directiveName = validator.directiveName;
        var validatorNamePrefixed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_prefixer__["a" /* default */])(settings, validatorName);
        var directiveNamePrefixed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_prefixer__["a" /* default */])(settings, directiveName);
        __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](validator, { validatorNamePrefixed: validatorNamePrefixed, directiveNamePrefixed: directiveNamePrefixed });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__validator_configurator_validator_configurator__["a" /* default */])(settings, validator);
    });
    var directives = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__directives_generator_directives_generator__["a" /* default */])(validators);
    var ValidatorModule = (function () {
        function ValidatorModule() {
        }
        ValidatorModule = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
                declarations: directives,
                exports: directives
            })
        ], ValidatorModule);
        return ValidatorModule;
    }());
    return ValidatorModule;
};;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name_assigner_name_assigner__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staters_validation_stater_validation_stater__ = __webpack_require__(39);




/* harmony default export */ __webpack_exports__["a"] = function (settings, control, el) {
    var validify = control.validify;
    if (!validify) {
        el = el.nativeElement;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__name_assigner_name_assigner__["a" /* default */])(control);
        validify = {
            elements: {},
            errors: {},
            validationStater: new __WEBPACK_IMPORTED_MODULE_3__staters_validation_stater_validation_stater__["a" /* default */](settings, control)
        };
        __WEBPACK_IMPORTED_MODULE_1_lodash__["extend"](control, { validify: validify, el: el, $el: __WEBPACK_IMPORTED_MODULE_0_jquery__(el) });
    }
};;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (control) {
    var controls = control._parent.controls;
    var controlNames = __WEBPACK_IMPORTED_MODULE_0_lodash__["keys"](controls);
    for (var _i = 0, controlNames_1 = controlNames; _i < controlNames_1.length; _i++) {
        var controlName = controlNames_1[_i];
        if (controls[controlName] === control) {
            return controlName;
        }
    }
};;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_name_accessor__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["a"] = function (control) {
    var controlName = control.controlName;
    if (!controlName) {
        controlName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_name_accessor__["a" /* default */])(control);
        __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](control, {
            controlName: controlName,
            controlNameProper: __WEBPACK_IMPORTED_MODULE_0_lodash__["upperFirst"](__WEBPACK_IMPORTED_MODULE_0_lodash__["lowerCase"](controlName))
        });
    }
};;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dependents_setter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_vars__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = function (control) {
    var _parent = control._parent, controlName = control.controlName;
    var parentRecords = __WEBPACK_IMPORTED_MODULE_1__lib_vars__["b" /* dependencyRequests */].get(_parent);
    if (parentRecords) {
        var dependentRecords = parentRecords[controlName];
        if (dependentRecords) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_dependents_setter__["a" /* default */])(control, dependentRecords);
            delete parentRecords[controlName];
        }
    }
};;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_container_adder__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staters_async_progress_visualizer_async_progress_visualizer__ = __webpack_require__(34);





/* harmony default export */ __webpack_exports__["a"] = function (settings, control, validatorDeclaration) {
    var validify = control.validify, controlName = control.controlName;
    var _a = validify.asyncs, asyncs = _a === void 0 ? {} : _a, elements = validify.elements;
    if (!validatorDeclaration.async || !__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](asyncs)) {
        return;
    }
    var asyncStatusHideClass = settings.asyncStatusHideClass, selectors = settings.selectors;
    var asyncStatusContainer = selectors.asyncStatusContainer;
    var $el = elements.$el, $elContainer = elements.$elContainer;
    var $asyncsContainer = __WEBPACK_IMPORTED_MODULE_0_jquery__('<div/>');
    var $pending = __WEBPACK_IMPORTED_MODULE_0_jquery__('<div/>');
    var $success = __WEBPACK_IMPORTED_MODULE_0_jquery__('<div/>');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__["a" /* default */])(settings, $asyncsContainer, 'asyncs-container', controlName);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__["a" /* default */])(settings, $pending, 'async-pending', controlName);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__["a" /* default */])(settings, $success, 'async-success', controlName);
    $asyncsContainer.addClass(asyncStatusHideClass);
    $pending.addClass(asyncStatusHideClass);
    $success.addClass(asyncStatusHideClass);
    $asyncsContainer.append($pending).append($success);
    __WEBPACK_IMPORTED_MODULE_1_lodash__["extend"](asyncs, { $asyncsContainer: $asyncsContainer, $pending: $pending, $success: $success });
    __WEBPACK_IMPORTED_MODULE_1_lodash__["extend"](validify, { asyncs: asyncs, asyncStatuses: {} });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_container_adder__["a" /* default */])($el, $asyncsContainer, $elContainer, asyncStatusContainer);
    validify.asyncProgressVisualizer = new __WEBPACK_IMPORTED_MODULE_4__staters_async_progress_visualizer_async_progress_visualizer__["a" /* default */](settings, control);
};;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_container_builder_errors_container_builder__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_container_builder_async_container_builder__ = __webpack_require__(18);


/* harmony default export */ __webpack_exports__["a"] = function (settings, control, validatorDeclaration) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors_container_builder_errors_container_builder__["a" /* default */])(settings, control);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__async_container_builder_async_container_builder__["a" /* default */])(settings, control, validatorDeclaration);
};;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_container_adder__ = __webpack_require__(6);




/* harmony default export */ __webpack_exports__["a"] = function (settings, control) {
    var $el = control.$el, validify = control.validify, controlName = control.controlName;
    var elements = validify.elements;
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"](elements)) {
        return;
    }
    var _a = settings.selectors, elementContainer = _a.elementContainer, errorsContainer = _a.errorsContainer;
    var $elContainer = elementContainer ? $el.closest(elementContainer) : __WEBPACK_IMPORTED_MODULE_0_jquery__();
    var $errorsContainer = __WEBPACK_IMPORTED_MODULE_0_jquery__('<div/>');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__["a" /* default */])(settings, $el, 'el', controlName);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__["a" /* default */])(settings, $elContainer, 'el-container', controlName);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__["a" /* default */])(settings, $errorsContainer, 'errors-container', controlName);
    __WEBPACK_IMPORTED_MODULE_1_lodash__["extend"](elements, { $el: $el, $elContainer: $elContainer, $errorsContainer: $errorsContainer });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_container_adder__["a" /* default */])($el, $errorsContainer, $elContainer, errorsContainer);
};;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (errorMessage, prefix) {
    var generalClass = prefix + '-error-word';
    return errorMessage.split(/\s+/).map(function (word, index) {
        var specificClass = generalClass + '-' + index;
        return "<span class = \"" + generalClass + " " + specificClass + "\">" + word + "</span>";
    }).join(' ');
};;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_spannifier__ = __webpack_require__(21);




/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    var validatorName = validatorDeclaration.validatorName, validatorNamePrefixed = validatorDeclaration.validatorNamePrefixed, _async = validatorDeclaration.async;
    var messager = validatorDeclaration.messager;
    var _a = control.validify, elements = _a.elements, errors = _a.errors;
    var baseErrorConfigs = { $el: __WEBPACK_IMPORTED_MODULE_0_jquery__(), _async: _async, validatorName: validatorName, control: control };
    if (!messager) {
        return errors[validatorName] = baseErrorConfigs;
    }
    var errorConfigs = errors[validatorName] || baseErrorConfigs;
    var $el = errorConfigs.$el;
    var validatorConfigs = configs.validator, messagerConfigs = configs.messager;
    var errorMessageClasses = settings.errorMessageClasses, prefix = settings.prefix;
    var $errorsContainer = elements.$errorsContainer;
    var errorMessager = __WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"](messager) ? messager : function () { return messager; };
    var errorMessage = errorMessager(control, validatorConfigs, messagerConfigs);
    errorMessage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_spannifier__["a" /* default */])(errorMessage, prefix);
    if (!$el.length) {
        var syncAsyncClass = prefix + "-" + (_async ? 'async' : 'sync');
        $el = __WEBPACK_IMPORTED_MODULE_0_jquery__('<div/>');
        $el.addClass(syncAsyncClass);
        $errorsContainer.append($el);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__["a" /* default */])(settings, $el, 'error', validatorName);
        errorConfigs = __WEBPACK_IMPORTED_MODULE_1_lodash__["extend"](errorConfigs, { $el: $el });
        if (errorMessageClasses && errorMessageClasses.initial) {
            $el.addClass(errorMessageClasses.initial);
        }
        if (_async) {
            errorConfigs.requests = {};
        }
        errors[validatorName] = errorConfigs;
    }
    $el.html(errorMessage);
};;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (control, configs, validatorDeclaration) {
    var preprocessor = validatorDeclaration.preprocessor;
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isPlainObject"](configs)) {
        configs = { validator: configs };
    }
    if (preprocessor) {
        configs.validator = preprocessor(control, configs.validator);
    }
    return configs;
};;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initializer_initial_data_setter_initial_data_setter__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initializer_requests_nullifier_requests_nullifier__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initializer_initial_visualizer_initial_visualizer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finalizer_final_data_setter_final_data_setter__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finalizer_final_visualizer_final_visualizer__ = __webpack_require__(27);







/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    if (control.validValue === control.value) {
        return Promise.resolve();
    }
    var validatorName = validatorDeclaration.validatorName, validatorNamePrefixed = validatorDeclaration.validatorNamePrefixed, validator = validatorDeclaration.validator;
    var validify = control.validify;
    var asyncProgressVisualizer = validify.asyncProgressVisualizer, errors = validify.errors, validationStater = validify.validationStater;
    var errorConfigs = errors[validatorName];
    var validationId = __WEBPACK_IMPORTED_MODULE_0_lodash__["uniqueId"]();
    if (control.invalidValue === control.value) {
        var error = (_a = {}, _a[validatorNamePrefixed] = true, _a);
        validationStater.set(validatorName, error).visualize();
        return Promise.resolve(error);
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__initializer_initial_data_setter_initial_data_setter__["a" /* default */])(control, validatorName);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__initializer_requests_nullifier_requests_nullifier__["a" /* default */])(control, validatorName, validationId);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__initializer_initial_visualizer_initial_visualizer__["a" /* default */])(control, validatorName);
    clearTimeout(errorConfigs.asyncDebounceTimeout);
    errorConfigs.asyncDebounceTimeout = setTimeout(function () {
        if (validify.sync) {
            return asyncProgressVisualizer.container(false);
        }
        asyncProgressVisualizer.pending(true);
        validator(control, configs.validator).then(function (validationStatus) {
            if (errorConfigs.requests[validationId]) {
                return;
            }
            validationStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__["a" /* default */])(settings, validationStatus);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__finalizer_final_data_setter_final_data_setter__["a" /* default */])(control, validatorDeclaration, validationStatus);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__finalizer_final_visualizer_final_visualizer__["a" /* default */])(settings, control, validatorName, validationStatus);
        });
    }, settings.asyncDebounceTime);
    return Promise.resolve((_b = {}, _b[validatorNamePrefixed] = true, _b));
    var _a, _b;
};;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (control, validatorDeclaration, validationStatus) {
    var errors = control.errors, value = control.value, validify = control.validify;
    var asyncStatuses = validify.asyncStatuses, _errors = validify.errors;
    var validatorName = validatorDeclaration.validatorName, validatorNamePrefixed = validatorDeclaration.validatorNamePrefixed;
    _errors[validatorName].requests = {};
    validify.sync = false;
    asyncStatuses[validatorName] = false;
    if (!validationStatus) {
        errors = __WEBPACK_IMPORTED_MODULE_0_lodash__["omit"](errors, [validatorNamePrefixed]);
    }
    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](errors, validationStatus);
    if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](errors)) {
        control.validValue = value;
        errors = '';
    }
    else {
        control.invalidValue = value;
    }
    control.setErrors(errors);
};;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (asyncStatuses) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](asyncStatuses, function (count, status) {
        return count += +status;
    }, 0);
};;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_active_asyncs_counter__ = __webpack_require__(26);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control, validatorName, validationStatus) {
    var validify = control.validify;
    var asyncStatuses = validify.asyncStatuses, asyncProgressVisualizer = validify.asyncProgressVisualizer, validationStater = validify.validationStater;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_active_asyncs_counter__["a" /* default */])(asyncStatuses)) {
        asyncProgressVisualizer.pending(false);
        if (!validationStatus && control.valid) {
            asyncProgressVisualizer.success(true);
            setTimeout(function () {
                asyncProgressVisualizer.success(false).container(false);
            }, settings.asyncSuccessMessageDuration);
        }
    }
    validationStater.set(validatorName, validationStatus).updateDependents().visualize();
};;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var validify = control.validify;
    control.validValue = control.invalidValue = null;
    validify.asyncStatuses[validatorName] = true;
    validify.sync = false;
};;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var _a = control.validify, asyncProgressVisualizer = _a.asyncProgressVisualizer, validationStater = _a.validationStater;
    asyncProgressVisualizer.container(true).success(false);
    validationStater.set(validatorName, null).visualize();
};;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName, validationId) {
    var requests = control.validify.errors[validatorName].requests;
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](requests, function (request, key) {
        requests[key] = true;
    });
    requests[validationId] = false;
};;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_validation_status_normalizer__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    var validify = control.validify;
    var validationStater = validify.validationStater;
    var validator = validatorDeclaration.validator, validatorName = validatorDeclaration.validatorName;
    var validationStatus = validator(control, configs.validator);
    if (validationStatus) {
        validify.sync = true;
    }
    validationStater.set(validatorName, validationStatus).updateDependents().visualize();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_validation_status_normalizer__["a" /* default */])(settings, validationStatus);
};;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_validator_async_validator__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    return function () {
        if (validatorDeclaration.async) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__async_validator_async_validator__["a" /* default */])(settings, control, configs, validatorDeclaration);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__["a" /* default */])(settings, control, configs, validatorDeclaration);
    };
};;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_initializer_data_initializer__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependents_registrar_dependents_registrar__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocessor_preprocessor__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_initializer_elements_initializer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_generator_error_generator__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator_builder_validator_builder__ = __webpack_require__(32);







/* harmony default export */ __webpack_exports__["a"] = function (settings, validatorDeclaration) {
    var dataNames = ['async', 'checkbox', 'validatorName', 'directiveNamePrefixed'];
    dataNames.push('validatorNamePrefixed', 'messager');
    var supplementalData = __WEBPACK_IMPORTED_MODULE_0_lodash__["pick"](validatorDeclaration, dataNames);
    var configurator = function (control, configs, el) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data_initializer_data_initializer__["a" /* default */])(settings, control, el);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dependents_registrar_dependents_registrar__["a" /* default */])(control);
        configs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__preprocessor_preprocessor__["a" /* default */])(control, configs, validatorDeclaration);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__elements_initializer_elements_initializer__["a" /* default */])(settings, control, validatorDeclaration);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__error_generator_error_generator__["a" /* default */])(settings, control, configs, validatorDeclaration);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__validator_builder_validator_builder__["a" /* default */])(settings, control, configs, validatorDeclaration);
    };
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](configurator, supplementalData);
};;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var default_1 = (function () {
    function default_1(settings, control) {
        var _a = control.validify, asyncs = _a.asyncs, elements = _a.elements;
        var $el = elements.$el, $elContainer = elements.$elContainer;
        var pendingClass = settings.prefix + "-async-pending";
        __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, {
            $el: $el, $elContainer: $elContainer, asyncs: asyncs, pendingClass: pendingClass,
            hiddenClass: settings.asyncStatusHideClass
        });
    }
    default_1.prototype.display = function (type, on) {
        var method = on ? 'removeClass' : 'addClass';
        this.asyncs['$' + type][method](this.hiddenClass);
        return this;
    };
    default_1.prototype.classOperator = function (operation) {
        var _a = this, $el = _a.$el, $elContainer = _a.$elContainer, pendingClass = _a.pendingClass;
        $el[operation](pendingClass);
        $elContainer[operation](pendingClass);
    };
    default_1.prototype.container = function (on) {
        if (on) {
            this.classOperator('addClass');
        }
        else {
            this.pending(on).success(on);
        }
        return this.display('asyncsContainer', on);
    };
    default_1.prototype.pending = function (on) {
        if (!on) {
            this.classOperator('removeClass');
        }
        return this.display('pending', on);
    };
    default_1.prototype.success = function (on) {
        return this.display('success', on);
    };
    return default_1;
}());
/* harmony default export */ __webpack_exports__["a"] = default_1;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control) {
    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { settings: settings, control: control, state: {} });
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dependentsAggregator;
function dependentsAggregator(control, all) {
    if (all === void 0) { all = []; }
    var _a = control.validify.dependents, dependents = _a === void 0 ? [] : _a;
    for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
        var dependent = dependents_1[_i];
        if (all.indexOf(dependent) === -1) {
            all.push(dependent);
            dependentsAggregator(dependent, all);
        }
    }
    return all;
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_dependents_aggregator__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = function () {
    var _a = this, silent = _a.silent, dependents = _a.dependents, control = _a.control;
    if (!silent) {
        if (!control.validify.ignoreDependents) {
            dependents = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_dependents_aggregator__["a" /* default */])(control);
            var _loop_1 = function (dependent) {
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](dependent.validify, { silent: true, ignoreDependents: true });
                    dependent.updateValueAndValidity();
                });
            };
            for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
                var dependent = dependents_1[_i];
                _loop_1(dependent);
            }
            __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { dependents: dependents });
        }
    }
    return this;
};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (validatorName, validationStatus) {
    var _a = this.control.validify, silent = _a.silent, errors = _a.errors;
    var errorConfigs = errors[validatorName];
    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { silent: silent, dependents: undefined });
    errorConfigs.status = validationStatus;
    if (!silent) {
        __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { errorConfigs: errorConfigs });
    }
    return this;
};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructor_constructor__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_setter_state_setter__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependents_updater_dependents_updater__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer__ = __webpack_require__(43);





__WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](__WEBPACK_IMPORTED_MODULE_1__constructor_constructor__["a" /* default */].prototype, {
    set: __WEBPACK_IMPORTED_MODULE_2__state_setter_state_setter__["a" /* default */],
    updateDependents: __WEBPACK_IMPORTED_MODULE_3__dependents_updater_dependents_updater__["a" /* default */],
    visualize: __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__constructor_constructor__["a" /* default */];


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (settings, errorConfigs) {
    var delays = settings.errorMessageDelays;
    var _async = errorConfigs._async, status = errorConfigs.status, control = errorConfigs.control;
    var dirty = control.dirty;
    return _async || !dirty ? 0 : status ? delays.invalid : delays.valid;
};;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (settings, $el) {
    var classes = $el.attr('class');
    if (classes) {
        classes = classes.split(/\s+/);
    }
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](classes, function (count, klass) {
        if (klass.startsWith(settings.prefix + "-error")) {
            count++;
        }
        return count;
    }, 0);
};;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_errors_counter__ = __webpack_require__(41);

/* harmony default export */ __webpack_exports__["a"] = function (settings, errorConfigs) {
    var validatorName = errorConfigs.validatorName, validationStatus = errorConfigs.status;
    var $errorEl = errorConfigs.$el, _async = errorConfigs._async, control = errorConfigs.control;
    var errorMessageClasses = settings.errorMessageClasses, prefix = settings.prefix;
    var dirty = control.dirty, validify = control.validify;
    var _a = validify.elements, $el = _a.$el, $elContainer = _a.$elContainer, $errorsContainer = _a.$errorsContainer;
    var errorClass = prefix + "-error-" + validatorName;
    var syncClass = prefix + "-sync";
    var asyncClass = prefix + "-async";
    if (dirty) {
        $elContainer.removeClass('ng-pristine').addClass('ng-dirty');
    }
    else {
        $elContainer.addClass('ng-pristine');
    }
    if (_async) {
        $elContainer.addClass(asyncClass).removeClass(syncClass);
        $errorsContainer.addClass(asyncClass).removeClass(syncClass);
    }
    else {
        $elContainer.addClass(syncClass).removeClass(asyncClass);
        $errorsContainer.addClass(syncClass).removeClass(asyncClass);
    }
    if (validationStatus) {
        $el.addClass(errorClass);
        $elContainer.removeClass('ng-valid').addClass('ng-invalid').addClass(errorClass);
        $errorEl.removeClass('ng-valid').removeClass(errorMessageClasses.valid);
        return $errorEl.addClass('ng-invalid').addClass(errorMessageClasses.invalid);
    }
    $errorEl.removeClass('ng-invalid').removeClass(errorMessageClasses.invalid);
    $errorEl.addClass('ng-valid').addClass(errorMessageClasses.valid);
    $elContainer.removeClass(errorClass);
    $el.removeClass(errorClass);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_errors_counter__["a" /* default */])(settings, $elContainer)) {
        $elContainer.removeClass('ng-invalid').addClass('ng-valid');
        $elContainer.removeClass(_async ? asyncClass : syncClass);
    }
};;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_delay_calculator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_visualizer_errors_visualizer__ = __webpack_require__(42);



/* harmony default export */ __webpack_exports__["a"] = function () {
    var _this = this;
    if (!this.silent) {
        setTimeout(function () {
            var _a = _this, control = _a.control, _b = _a.dependents, dependents = _b === void 0 ? [] : _b, errorConfigs = _a.errorConfigs;
            var delay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_delay_calculator__["a" /* default */])(_this.settings, errorConfigs);
            clearTimeout(errorConfigs.visualizationTimeout);
            errorConfigs.visualizationTimeout = setTimeout(function () {
                dependents.unshift(control);
                __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](dependents, function (control) {
                    var validify = control.validify;
                    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](validify, { silent: false, ignoreDependents: false });
                    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](validify.errors, __WEBPACK_IMPORTED_MODULE_0_lodash__["partial"](__WEBPACK_IMPORTED_MODULE_2__errors_visualizer_errors_visualizer__["a" /* default */], _this.settings, __WEBPACK_IMPORTED_MODULE_0_lodash__));
                });
            }, delay);
        });
    }
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_validator__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messager_messager__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_vars__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = {
    validator: __WEBPACK_IMPORTED_MODULE_0__validator_validator__["a" /* default */],
    preprocessor: __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__["a" /* default */],
    messager: __WEBPACK_IMPORTED_MODULE_2__messager_messager__["a" /* default */],
    validatorName: __WEBPACK_IMPORTED_MODULE_3__lib_vars__["a" /* validatorName */]
};


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (dependencyNames) {
    return dependencyNames.map(function (dependencyName) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash__["upperFirst"](__WEBPACK_IMPORTED_MODULE_0_lodash__["lowerCase"](dependencyName));
    }).join(', ');
};;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dependency_names_stringifier__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    var controlNameProper = control.controlNameProper;
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_dependency_names_stringifier__["a" /* default */])(dependencyNames);
    return controlNameProper + " depends on " + dependencyNames;
};;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dependencyDependentsMap; });
var dependencyDependentsMap = new WeakMap();



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (str, char) {
    var rx = new RegExp("\\s*" + char + "\\s*");
    return str.split(rx).map(function (piece) { return piece.trim(); });
};;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_str_arrayifier__ = __webpack_require__(48);

/* harmony default export */ __webpack_exports__["a"] = function (dependencyNames, control) {
    var controlName = control.controlName;
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_str_arrayifier__["a" /* default */])(dependencyNames, ',');
    if (dependencyNames.indexOf(controlName) !== -1) {
        throw new Error("[" + controlName + "] cannot depend on itself");
    }
    return dependencyNames;
};;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["a"] = function (dependencyName, control) {
    var _parent = control._parent;
    var formDependencyRequests = __WEBPACK_IMPORTED_MODULE_0__lib_vars__["b" /* dependencyRequests */].get(_parent);
    if (!formDependencyRequests) {
        __WEBPACK_IMPORTED_MODULE_0__lib_vars__["b" /* dependencyRequests */].set(_parent, formDependencyRequests = {});
    }
    var dependents = formDependencyRequests[dependencyName];
    if (!dependents) {
        dependents = formDependencyRequests[dependencyName] = [];
    }
    dependents.push(control);
};;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dependents_setter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__ = __webpack_require__(50);


/* harmony default export */ __webpack_exports__["a"] = function (dependencyName, control) {
    var dependencyControl = control._parent.controls[dependencyName];
    if (dependencyControl) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_dependents_setter__["a" /* default */])(dependencyControl, control);
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__["a" /* default */])(dependencyName, control);
};;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_dependency_map_getter_form_dependency_map_getter__ = __webpack_require__(53);

/* harmony default export */ __webpack_exports__["a"] = function (dependencyName, control) {
    var _parent = control._parent, controlName = control.controlName;
    var formDependencyDependentsMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__form_dependency_map_getter_form_dependency_map_getter__["a" /* default */])(_parent);
    var controlDependents = formDependencyDependentsMap[controlName];
    if ((controlDependents || []).indexOf(dependencyName) > -1) {
        throw new Error("[" + controlName + "] and [" + dependencyName + "] depend on each other");
    }
    var dependents = formDependencyDependentsMap[dependencyName];
    if (!dependents) {
        dependents = formDependencyDependentsMap[dependencyName] = [];
    }
    dependents.push(controlName);
};;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(47);

/* harmony default export */ __webpack_exports__["a"] = function (_parent) {
    var formDependencyDependentsMap = __WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* dependencyDependentsMap */].get(_parent);
    if (!formDependencyDependentsMap) {
        __WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* dependencyDependentsMap */].set(_parent, formDependencyDependentsMap = {});
    }
    return formDependencyDependentsMap;
};;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_names_transformer_dependency_names_transformer__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependent_tracker_dependent_tracker__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependent_registrar_dependent_registrar__ = __webpack_require__(51);




/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependency_names_transformer_dependency_names_transformer__["a" /* default */])(dependencyNames, control);
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](dependencyNames, function (dependencyName) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dependent_tracker_dependent_tracker__["a" /* default */])(dependencyName, control);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dependent_registrar_dependent_registrar__["a" /* default */])(dependencyName, control);
    });
    return dependencyNames;
};;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    var controls = control._parent.controls;
    for (var _i = 0, dependencyNames_1 = dependencyNames; _i < dependencyNames_1.length; _i++) {
        var dependencyName = dependencyNames_1[_i];
        var dependencyControl = controls[dependencyName];
        if (!dependencyControl) {
            console.warn("dependency [" + dependencyName + "] is not declared");
        }
        if (!dependencyControl || dependencyControl.invalid) {
            return _a = {}, _a[__WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* validatorName */]] = true, _a;
        }
    }
    var _a;
};;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validatorName = 'emailGov';
var emailGovRx = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*(\.(gov|mil))$/;
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control) {
        if (!emailGovRx.test(control.value)) {
            return _a = {}, _a[validatorName] = true, _a;
        }
        var _a;
    },
    messager: function (control) {
        return control.controlNameProper + " is not a valid government email";
    },
    validatorName: validatorName
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validatorName = 'email';
var emailRx = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control) {
        if (!emailRx.test(control.value)) {
            return _a = {}, _a[validatorName] = true, _a;
        }
        var _a;
    },
    messager: function (control) {
        return control.controlNameProper + " is not a valid email";
    },
    validatorName: validatorName
};


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validatorName = 'equalsTo';
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control, equalsTo) {
        var value = control.value, _parent = control._parent;
        var equalsToControl = _parent.controls[equalsTo];
        if (!value || value !== equalsToControl.value) {
            return _a = {}, _a[validatorName] = true, _a;
        }
        var _a;
    },
    messager: function (control, validatorConfigs) {
        return control.controlName + " must equal to " + validatorConfigs;
    },
    validatorName: validatorName
};


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validatorName = 'maxLength';
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control, maxLength) {
        var value = control.value;
        if (!value || value.length > maxLength) {
            return _a = {}, _a[validatorName] = true, _a;
        }
        var _a;
    },
    preprocessor: function (control, maxLength) {
        if (!maxLength) {
            throw new Error('maximum length should be defined');
        }
        return +maxLength;
    },
    messager: function (control, maxLength) {
        return control.controlNameProper + " should be less than " + maxLength + " characters";
    },
    validatorName: validatorName
};


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validatorName = 'minLength';
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control, minLength) {
        if (control.value.length < minLength) {
            return _a = {}, _a[validatorName] = true, _a;
        }
        var _a;
    },
    preprocessor: function (control, minLength) {
        if (!minLength) {
            throw new Error('minimum length should be defined');
        }
        return +minLength;
    },
    messager: function (control, minLength) {
        return control.controlNameProper + " should be " + minLength + " characters";
    },
    validatorName: validatorName
};


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var validatorName = 'pattern';
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control, pattern) {
        if (!pattern.test(control.value)) {
            return _a = {}, _a[validatorName] = true, _a;
        }
        var _a;
    },
    preprocessor: function (control, pattern) {
        if (!pattern) {
            throw new Error('specify regular expression pattern');
        }
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isString"](pattern)) {
            pattern = new RegExp("^" + pattern + "$");
        }
        return pattern;
    },
    validatorName: validatorName
};


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var directiveName = 'required';
var validatorName = 'requiredTrue';
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control) {
        if (control.value !== true) {
            return _a = {}, _a[directiveName] = true, _a;
        }
        var _a;
    },
    messager: function (control) {
        return control.controlNameProper + " is required";
    },
    directiveName: directiveName,
    validatorName: validatorName,
    checkbox: true
};


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validatorName = 'required';
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control) {
        if (!control.value) {
            return _a = {}, _a[validatorName] = true, _a;
        }
        var _a;
    },
    messager: function (control) {
        return control.controlNameProper + " is required";
    },
    validatorName: validatorName
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deps_deps__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_email__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_gov_email_gov__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equals_to_equals_to__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__max_length_max_length__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__min_length_min_length__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pattern_pattern__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__required_required__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__required_true_required_true__ = __webpack_require__(62);









/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__deps_deps__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_7__required_required__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_5__min_length_min_length__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_4__max_length_max_length__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_6__pattern_pattern__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_1__email_email__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_2__email_gov_email_gov__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_3__equals_to_equals_to__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_8__required_true_required_true__["a" /* default */]
];


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configurator_configurator__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ngValidifyConfigurator", function() { return __WEBPACK_IMPORTED_MODULE_0__configurator_configurator__["a"]; });




/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjNjk0ZGIzNDBkOGI1MDljODBjNCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvX2xpYi9jbGFzcy1pZC1hc3NpZ25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX2xpYi9kZXBlbmRlbnRzLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL19saWIvcHJlZml4ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL2NvbmZpZ3VyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRvci9tb2R1bGUtZ2VuZXJhdG9yL21vZHVsZS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL2xpYi9uYW1lLWFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbmFtZS1hc3NpZ25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL19saWIvc3Bhbm5pZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtZGF0YS1zZXR0ZXIvaW5pdGlhbC1kYXRhLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9yZXF1ZXN0cy1udWxsaWZpZXIvcmVxdWVzdHMtbnVsbGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL2RlcGVuZGVudHMtdXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvX2xpYi9kZWxheS1jYWxjdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvX2xpYi9lcnJvcnMtY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL2RlcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9tZXNzYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9fbGliL3N0ci1hcnJheWlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC1nb3YvZW1haWwtZ292LnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2VtYWlsL2VtYWlsLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2VxdWFscy10by9lcXVhbHMtdG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvbWF4LWxlbmd0aC9tYXgtbGVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL21pbi1sZW5ndGgvbWluLWxlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9wYXR0ZXJuL3BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkL3JlcXVpcmVkLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiZm9ybXNcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImFtZFwiOlwiQGFuZ3VsYXIvZm9ybXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL25nLXZhbGlkaWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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QVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQzs7Ozs7Ozs7QUNuQkYsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDO0FBRWpDLHdEQUFlO0lBQ2IsU0FBUyxZQUFDLE9BQU87UUFDZixFQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLFVBQUUsR0FBQyxhQUFhLElBQUcsSUFBSSxLQUFFO1FBQ2pDLENBQUM7O0lBQ0gsQ0FBQztJQUVELFFBQVEsWUFBQyxPQUFPO1FBQ2QsTUFBTSxDQUFJLE9BQU8sQ0FBQyxpQkFBaUIsaUJBQWMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsYUFBYTtDQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDhDO0FBQ0U7QUFDUTtBQUNBO0FBQ0U7QUFDQTtBQUNOO0FBQ0U7QUFDVTt3REFFbkQ7SUFDYiwyREFBYTtJQUNiLG1FQUFpQjtJQUNqQix1RUFBa0I7SUFDbEIsdUVBQWtCO0lBQ2xCLGlFQUFnQjtJQUNoQiw2REFBYztJQUNkLHFFQUFpQjtJQUNqQixxRUFBaUI7SUFDakIsNkVBQXFCO0NBQ3RCLENBQUM7Ozs7Ozs7QUNwQkYsZ0Q7Ozs7Ozs7Ozs7QUNBaUU7QUFFakMiLCJmaWxlIjoibmctdmFsaWRpZnkudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiLCBcImpxdWVyeVwiLCBcIkBhbmd1bGFyL2NvcmVcIiwgXCJAYW5ndWxhci9mb3Jtc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZy12YWxpZGlmeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmctdmFsaWRpZnlcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdLCByb290W1wiJFwiXSwgcm9vdFtcIm5nXCJdW1wiY29yZVwiXSwgcm9vdFtcIm5nXCJdW1wiZm9ybXNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82NV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzY5NGRiMzQwZDhiNTA5YzgwYzQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIiRcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkZXBlbmRlbmN5UmVxdWVzdHMgPSBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgcHJlZml4OiAndicsXG5cbiAgc2VsZWN0b3JzOiB7XG4gICAgZWxlbWVudENvbnRhaW5lcjogJy5mb3JtLWdyb3VwJyxcbiAgICBlcnJvcnNDb250YWluZXI6IFsnaW5zZXJ0QWZ0ZXInLCAnaW5wdXQnXSxcbiAgICBhc3luY1N0YXR1c0NvbnRhaW5lcjogWydpbnNlcnRCZWZvcmUnLCAnaW5wdXQnXVxuICB9LFxuICBcbiAgZXJyb3JNZXNzYWdlQ2xhc3Nlczoge1xuICAgIGluaXRpYWw6ICcnLFxuICAgIHZhbGlkOiAnJyxcbiAgICBpbnZhbGlkOiAnJ1xuICB9LFxuXG4gIGVycm9yTWVzc2FnZURlbGF5czoge1xuICAgIHZhbGlkOiAzMDAsXG4gICAgaW52YWxpZDogNTAwXG4gIH0sXG5cbiAgYXN5bmNEZWJvdW5jZVRpbWU6IDUwMCxcblxuICBhc3luY1N0YXR1c0hpZGVDbGFzczogJ2hpZGRlbicsXG4gIFxuICBhc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb246IDEwMDBcbn07XG5cbmV4cG9ydCB7XG4gIGRlcGVuZGVuY3lSZXF1ZXN0cywgXG4gIHNldHRpbmdzXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19saWIvdmFycy50cyIsImV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgJGVsLCBiYXNlQ2xhc3MsIGNvbnRyb2xOYW1lKSA9PiB7XG4gIGxldCB7cHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQgY2xhc3NlcyA9IFtiYXNlQ2xhc3MsIGAke2Jhc2VDbGFzc30tJHtjb250cm9sTmFtZX1gXTtcbiAgbGV0IGNsYXNzZXNTdHIgPSBjbGFzc2VzLm1hcChrbGFzcyA9PiBgJHtwcmVmaXh9LSR7a2xhc3N9YCkuam9pbignICcpO1xuICAkZWwuYWRkQ2xhc3MoY2xhc3Nlc1N0cik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBuZXdEZXBlbmRlbnRzKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHtkZXBlbmRlbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIV8uaXNBcnJheShuZXdEZXBlbmRlbnRzKSkge1xuICAgIG5ld0RlcGVuZGVudHMgPSBbbmV3RGVwZW5kZW50c107XG4gIH1cbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgXy5zZXQodmFsaWRpZnksICdkZXBlbmRlbnRzJywgZGVwZW5kZW50cyA9IFtdKTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKC4uLm5ld0RlcGVuZGVudHMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fbGliL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIG5hbWUpID0+IHtcbiAgbGV0IHtwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIFxuICBpZihwcmVmaXggJiYgbmFtZSkge1xuICAgIG5hbWUgPSBwcmVmaXggKyBfLnVwcGVyRmlyc3QobmFtZSk7XG4gIH1cbiAgXG4gIHJldHVybiBuYW1lO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvX2xpYi9wcmVmaXhlci50cyIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgKCRlbCwgJGNvbnRhaW5lciwgJGNvbnRhaW5lckNvbnRhaW5lciwgaW5zZXJ0aW9uU3BlYykgPT4ge1xuICBsZXQgW2FjdGlvbiwgJGluc2VydGlvblBvaW50XSA9ICgoKSA9PiB7XG4gICAgaWYoISRjb250YWluZXJDb250YWluZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gWydpbnNlcnRBZnRlcicsICRlbF07XG4gICAgfVxuICAgIFxuICAgIGxldCBbYWN0aW9uLCBhbmNob3JdID0gaW5zZXJ0aW9uU3BlYztcbiAgICBsZXQgJGluc2VydGlvblBvaW50ID0gKCgpID0+IHtcbiAgICAgIGlmKCFhbmNob3IpIHtcbiAgICAgICAgcmV0dXJuICRjb250YWluZXJDb250YWluZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiAkKGFuY2hvciwgJGNvbnRhaW5lckNvbnRhaW5lcik7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiBbYWN0aW9uLCAkaW5zZXJ0aW9uUG9pbnRdO1xuICB9KSgpO1xuICBcbiAgJGNvbnRhaW5lclthY3Rpb25dKCRpbnNlcnRpb25Qb2ludCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi4vLi4vLi4vX2xpYi9wcmVmaXhlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBpZihfLmlzUGxhaW5PYmplY3QodmFsaWRhdGlvblN0YXR1cykpIHtcbiAgICBsZXQga2V5ID0gXy5rZXlzKHZhbGlkYXRpb25TdGF0dXMpWzBdO1xuICAgIGxldCB2YWx1ZSA9IHZhbGlkYXRpb25TdGF0dXNba2V5XTtcbiAgICBrZXkgPSBwcmVmaXhlcihzZXR0aW5ncywga2V5KTtcbiAgICB2YWxpZGF0aW9uU3RhdHVzID0ge1trZXldOiB2YWx1ZX07XG4gIH1cbiAgXG4gIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXIudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2RlcHMnO1xuY29uc3QgZGVwZW5kZW5jaWVzVGFibGUgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQge1xuICB2YWxpZGF0b3JOYW1lLFxuICBkZXBlbmRlbmNpZXNUYWJsZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvcmVcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29yZVwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2NvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge3NldHRpbmdzIGFzIG1haW5TZXR0aW5nc30gZnJvbSAnLi4vX2xpYi92YXJzJztcbmltcG9ydCBpbnRlcm5hbFZhbGlkYXRvcnMgICAgICAgICBmcm9tICcuLi92YWxpZGF0b3JzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IG1vZHVsZUdlbmVyYXRvciAgICAgICAgICAgIGZyb20gJy4vbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzID0gW10pID0+IHtcbiAgc2V0dGluZ3MgPSBfLmV4dGVuZCh7fSwgbWFpblNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIHZhbGlkYXRvcnMucHVzaCguLi5pbnRlcm5hbFZhbGlkYXRvcnMpO1xuICByZXR1cm4gbW9kdWxlR2VuZXJhdG9yKHNldHRpbmdzLCB2YWxpZGF0b3JzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL2NvbmZpZ3VyYXRvci50cyIsImV4cG9ydCBkZWZhdWx0IChuYW1lLCBjaGVja2JveCkgPT4ge1xuICBsZXQgY2hlY2tib3hUeXBlID0gJ1t0eXBlPWNoZWNrYm94XSc7XG4gIGxldCBjb250cm9sVHlwZXMgPSBbJ2Zvcm1Db250cm9sTmFtZScsICdmb3JtQ29udHJvbCcsICduZ01vZGVsJ11cbiAgY2hlY2tib3ggPSBjaGVja2JveCA/IGBpbnB1dCR7Y2hlY2tib3hUeXBlfWAgOiBgOm5vdCgke2NoZWNrYm94VHlwZX0pYDtcbiAgXG4gIHJldHVybiBjb250cm9sVHlwZXMucmVkdWNlKChzZWxlY3RvciwgY29udHJvbFR5cGUpID0+IHtcbiAgICBzZWxlY3Rvci5wdXNoKGAke2NoZWNrYm94fVske25hbWV9XVske2NvbnRyb2xUeXBlfV1gKTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH0sIFtdKS5qb2luKCcsJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci9kaXJlY3RpdmVzLWdlbmVyYXRvci9fbGliL3NlbGVjdG9yLWFzc2VtYmxlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTElEQVRPUlMsIE5HX0FTWU5DX1ZBTElEQVRPUlN9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBzZWxlY3RvckFzc2VtYmxlciAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9fbGliL3NlbGVjdG9yLWFzc2VtYmxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRvcnMgPT4ge1xuICByZXR1cm4gdmFsaWRhdG9ycy5tYXAodmFsaWRhdG9yQ29uZmlndXJhdG9yID0+IHtcbiAgICBsZXQge2FzeW5jOiBfYXN5bmMsIGNoZWNrYm94LCB2YWxpZGF0b3JOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yO1xuICAgIGxldCB7ZGlyZWN0aXZlTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcjtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZSA9IGRpcmVjdGl2ZU5hbWVQcmVmaXhlZCB8fCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQ7XG4gICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JBc3NlbWJsZXIoZGlyZWN0aXZlTmFtZSwgY2hlY2tib3gpO1xuXG4gICAgbGV0IHByb3ZpZGVycyA9IFt7XG4gICAgICBwcm92aWRlOiBfYXN5bmMgPyBOR19BU1lOQ19WQUxJREFUT1JTIDogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzKSxcbiAgICAgIG11bHRpOiB0cnVlICAgICAgICBcbiAgICB9XTtcbiAgICBcbiAgICBARGlyZWN0aXZlKHtzZWxlY3RvciwgcHJvdmlkZXJzfSkgY2xhc3MgVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3Mge1xuICAgICAgcHJpdmF0ZSB2YWxpZGF0b3I7XG4gICAgICBwcml2YXRlIG9uQ2hhbmdlO1xuICAgICAgcHJpdmF0ZSBjb250cm9sO1xuICAgIFxuICAgICAgQElucHV0KGAke2RpcmVjdGl2ZU5hbWV9YCkgcHJpdmF0ZSBjb25maWdzO1xuICAgIFxuICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cbiAgICBcbiAgICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgaWYoJ2NvbmZpZ3MnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICBpZighdGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgaWYodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgICAgdmFsaWRhdGUoY29udHJvbD8pIHtcbiAgICAgICAgbGV0IGVycm9yID0ge1tkaXJlY3RpdmVOYW1lXTogdHJ1ZX07XG4gICAgICAgIFxuICAgICAgICBfLmV4dGVuZCh0aGlzLCB7XG4gICAgICAgICAgY29udHJvbCwgXG4gICAgICAgICAgdmFsaWRhdGUoKSB7IFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gX2FzeW5jID8gUHJvbWlzZS5yZXNvbHZlKGVycm9yKSA6IGVycm9yOyBcbiAgICAgIH1cbiAgICBcbiAgICAgIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm4pIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuOyBcbiAgICAgIH1cbiAgICBcbiAgICAgIHByaXZhdGUgY3JlYXRlVmFsaWRhdG9yKCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcih0aGlzLmNvbnRyb2wsIHRoaXMuY29uZmlncywgdGhpcy5lbCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy52YWxpZGF0ZSgpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBwcmVmaXhlciAgICAgICAgICAgICAgZnJvbSAnLi4vX2xpYi9wcmVmaXhlcic7XG5pbXBvcnQgdmFsaWRhdG9yQ29uZmlndXJhdG9yIGZyb20gJy4uL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgZGlyZWN0aXZlc0dlbmVyYXRvciAgIGZyb20gJy4uL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzKSA9PiB7XG4gIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3IgPT4ge1xuICAgIGxldCB7dmFsaWRhdG9yTmFtZSwgZGlyZWN0aXZlTmFtZX0gPSB2YWxpZGF0b3I7XG4gICAgbGV0IHZhbGlkYXRvck5hbWVQcmVmaXhlZCA9IHByZWZpeGVyKHNldHRpbmdzLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIGRpcmVjdGl2ZU5hbWUpO1xuICAgIF8uZXh0ZW5kKHZhbGlkYXRvciwge3ZhbGlkYXRvck5hbWVQcmVmaXhlZCwgZGlyZWN0aXZlTmFtZVByZWZpeGVkfSk7XG4gICAgcmV0dXJuIHZhbGlkYXRvckNvbmZpZ3VyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9yKTtcbiAgfSk7XG4gIFxuICBsZXQgZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXNHZW5lcmF0b3IodmFsaWRhdG9ycyk7XG5cbiAgQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IGRpcmVjdGl2ZXMsIFxuICAgIGV4cG9ydHM6IGRpcmVjdGl2ZXNcbiAgfSkgY2xhc3MgVmFsaWRhdG9yTW9kdWxlIHt9XG4gIFxuICByZXR1cm4gVmFsaWRhdG9yTW9kdWxlOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5hbWVBc3NpZ25lciAgICAgZnJvbSAnLi9uYW1lLWFzc2lnbmVyL25hbWUtYXNzaWduZXInO1xuaW1wb3J0IFZhbGlkYXRpb25TdGF0ZXIgZnJvbSAnLi4vLi4vLi4vc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgZWwpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBcbiAgaWYoIXZhbGlkaWZ5KSB7XG4gICAgZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIG5hbWVBc3NpZ25lcihjb250cm9sKTtcbiAgICBcbiAgICB2YWxpZGlmeSA9IHtcbiAgICAgIGVsZW1lbnRzOiB7fSxcbiAgICAgIGVycm9yczoge30sXG4gICAgICB2YWxpZGF0aW9uU3RhdGVyOiBuZXcgVmFsaWRhdGlvblN0YXRlcihzZXR0aW5ncywgY29udHJvbClcbiAgICB9O1xuICAgIFxuICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHt2YWxpZGlmeSwgZWwsICRlbDogJChlbCl9KTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL2RhdGEtaW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xzfSA9IGNvbnRyb2wuX3BhcmVudDtcbiAgbGV0IGNvbnRyb2xOYW1lcyA9IF8ua2V5cyhjb250cm9scyk7XG4gIGZvcihsZXQgY29udHJvbE5hbWUgb2YgY29udHJvbE5hbWVzKSB7XG4gICAgaWYoY29udHJvbHNbY29udHJvbE5hbWVdID09PSBjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbE5hbWU7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQWNjZXNzb3IgZnJvbSAnLi9saWIvbmFtZS1hY2Nlc3Nvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIFxuICBpZighY29udHJvbE5hbWUpIHtcbiAgICBjb250cm9sTmFtZSA9IG5hbWVBY2Nlc3Nvcihjb250cm9sKTtcbiAgICBfLmV4dGVuZChjb250cm9sLCB7XG4gICAgICBjb250cm9sTmFtZSxcbiAgICAgIGNvbnRyb2xOYW1lUHJvcGVyOiBfLnVwcGVyRmlyc3QoXy5sb3dlckNhc2UoY29udHJvbE5hbWUpKVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwiaW1wb3J0IGRlcGVuZGVudHNTZXR0ZXIgICAgIGZyb20gJy4uLy4uLy4uL19saWIvZGVwZW5kZW50cy1zZXR0ZXInO1xuaW1wb3J0IHtkZXBlbmRlbmN5UmVxdWVzdHN9IGZyb20gJy4uLy4uLy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge19wYXJlbnQsIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCBwYXJlbnRSZWNvcmRzID0gZGVwZW5kZW5jeVJlcXVlc3RzLmdldChfcGFyZW50KTtcbiAgXG4gIGlmKHBhcmVudFJlY29yZHMpIHtcbiAgICBsZXQgZGVwZW5kZW50UmVjb3JkcyA9IHBhcmVudFJlY29yZHNbY29udHJvbE5hbWVdO1xuXG4gICAgaWYoZGVwZW5kZW50UmVjb3Jkcykge1xuICAgICAgZGVwZW5kZW50c1NldHRlcihjb250cm9sLCBkZXBlbmRlbnRSZWNvcmRzKTtcbiAgICAgIGRlbGV0ZSBwYXJlbnRSZWNvcmRzW2NvbnRyb2xOYW1lXTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciAgICAgICAgIGZyb20gJy4uLy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IGNvbnRhaW5lckFkZGVyICAgICAgICAgIGZyb20gJy4uL19saWIvY29udGFpbmVyLWFkZGVyJztcbmltcG9ydCBBc3luY1Byb2dyZXNzVmlzdWFsaXplciBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGlmeSwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY3MgPSB7fSwgZWxlbWVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighdmFsaWRhdG9yRGVjbGFyYXRpb24uYXN5bmMgfHwgIV8uaXNFbXB0eShhc3luY3MpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBsZXQge2FzeW5jU3RhdHVzSGlkZUNsYXNzLCBzZWxlY3RvcnN9ID0gc2V0dGluZ3M7XG4gIGxldCB7YXN5bmNTdGF0dXNDb250YWluZXJ9ID0gc2VsZWN0b3JzO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICBsZXQgJGFzeW5jc0NvbnRhaW5lciA9ICQoJzxkaXYvPicpO1xuICBsZXQgJHBlbmRpbmcgPSAkKCc8ZGl2Lz4nKTtcbiAgbGV0ICRzdWNjZXNzID0gJCgnPGRpdi8+Jyk7XG5cbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkYXN5bmNzQ29udGFpbmVyLCAnYXN5bmNzLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkcGVuZGluZywgJ2FzeW5jLXBlbmRpbmcnLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJHN1Y2Nlc3MsICdhc3luYy1zdWNjZXNzJywgY29udHJvbE5hbWUpO1xuICBcbiAgJGFzeW5jc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRwZW5kaW5nLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJHN1Y2Nlc3MuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkYXN5bmNzQ29udGFpbmVyLmFwcGVuZCgkcGVuZGluZykuYXBwZW5kKCRzdWNjZXNzKTtcbiAgXG4gIF8uZXh0ZW5kKGFzeW5jcywgeyRhc3luY3NDb250YWluZXIsICRwZW5kaW5nLCAkc3VjY2Vzc30pO1xuICBfLmV4dGVuZCh2YWxpZGlmeSwge2FzeW5jcywgYXN5bmNTdGF0dXNlczoge319KTtcbiAgXG4gIGNvbnRhaW5lckFkZGVyKCRlbCwgJGFzeW5jc0NvbnRhaW5lciwgJGVsQ29udGFpbmVyLCBhc3luY1N0YXR1c0NvbnRhaW5lcik7XG4gIHZhbGlkaWZ5LmFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyID0gbmV3IEFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyKHNldHRpbmdzLCBjb250cm9sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJpbXBvcnQgZXJyb3JzQ29udGFpbmVyQnVpbGRlciBmcm9tICcuL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXInO1xuaW1wb3J0IGFzeW5jQ29udGFpbmVyQnVpbGRlciAgZnJvbSAnLi9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgZXJyb3JzQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCk7XG4gIGFzeW5jQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc0lkQXNzaWduZXIgZnJvbSAnLi4vLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgY29udGFpbmVyQWRkZXIgIGZyb20gJy4uL19saWIvY29udGFpbmVyLWFkZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sKSA9PiB7XG4gIGxldCB7JGVsLCB2YWxpZGlmeSwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHtlbGVtZW50c30gPSB2YWxpZGlmeTtcbiAgXG4gIGlmKCFfLmlzRW1wdHkoZWxlbWVudHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBsZXQge2VsZW1lbnRDb250YWluZXIsIGVycm9yc0NvbnRhaW5lcn0gPSBzZXR0aW5ncy5zZWxlY3RvcnM7XG4gIGxldCAkZWxDb250YWluZXIgPSBlbGVtZW50Q29udGFpbmVyID8gJGVsLmNsb3Nlc3QoZWxlbWVudENvbnRhaW5lcikgOiAkKCk7XG4gIGxldCAkZXJyb3JzQ29udGFpbmVyID0gJCgnPGRpdi8+Jyk7XG5cbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWwsICdlbCcsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWxDb250YWluZXIsICdlbC1jb250YWluZXInLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVycm9yc0NvbnRhaW5lciwgJ2Vycm9ycy1jb250YWluZXInLCBjb250cm9sTmFtZSk7XG4gIFxuICBfLmV4dGVuZChlbGVtZW50cywgeyRlbCwgJGVsQ29udGFpbmVyLCAkZXJyb3JzQ29udGFpbmVyfSk7XG4gIGNvbnRhaW5lckFkZGVyKCRlbCwgJGVycm9yc0NvbnRhaW5lciwgJGVsQ29udGFpbmVyLCBlcnJvcnNDb250YWluZXIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGVycm9yTWVzc2FnZSwgcHJlZml4KSA9PiB7XG4gIGxldCBnZW5lcmFsQ2xhc3MgPSBwcmVmaXggKyAnLWVycm9yLXdvcmQnO1xuICBcbiAgcmV0dXJuIGVycm9yTWVzc2FnZS5zcGxpdCgvXFxzKy8pLm1hcCgod29yZCwgaW5kZXgpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNDbGFzcyA9IGdlbmVyYWxDbGFzcyArICctJyArIGluZGV4O1xuICAgIHJldHVybiBgPHNwYW4gY2xhc3MgPSBcIiR7Z2VuZXJhbENsYXNzfSAke3NwZWNpZmljQ2xhc3N9XCI+JHt3b3JkfTwvc3Bhbj5gO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IHNwYW5uaWZpZXIgICAgICBmcm9tICcuL19saWIvc3Bhbm5pZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQsIGFzeW5jOiBfYXN5bmN9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7bWVzc2FnZXJ9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7ZWxlbWVudHMsIGVycm9yc30gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgYmFzZUVycm9yQ29uZmlncyA9IHskZWw6ICQoKSwgX2FzeW5jLCB2YWxpZGF0b3JOYW1lLCBjb250cm9sfTtcbiAgXG4gIGlmKCFtZXNzYWdlcikge1xuICAgIHJldHVybiBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gPSBiYXNlRXJyb3JDb25maWdzO1xuICB9XG4gIFxuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdIHx8IGJhc2VFcnJvckNvbmZpZ3M7XG4gIGxldCB7JGVsfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHt2YWxpZGF0b3I6IHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyOiBtZXNzYWdlckNvbmZpZ3N9ID0gY29uZmlncztcbiAgbGV0IHtlcnJvck1lc3NhZ2VDbGFzc2VzLCBwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCB7JGVycm9yc0NvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgbGV0IGVycm9yTWVzc2FnZXIgPSBfLmlzRnVuY3Rpb24obWVzc2FnZXIpID8gbWVzc2FnZXIgOiAoKSA9PiBtZXNzYWdlcjtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZXIoY29udHJvbCwgdmFsaWRhdG9yQ29uZmlncywgbWVzc2FnZXJDb25maWdzKTtcbiAgZXJyb3JNZXNzYWdlID0gc3Bhbm5pZmllcihlcnJvck1lc3NhZ2UsIHByZWZpeCk7XG4gIFxuICBpZighJGVsLmxlbmd0aCkge1xuICAgIGxldCBzeW5jQXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYCArIChfYXN5bmMgPyAnYXN5bmMnIDogJ3N5bmMnKTtcbiAgICAkZWwgPSAkKCc8ZGl2Lz4nKTtcbiAgICAkZWwuYWRkQ2xhc3Moc3luY0FzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYXBwZW5kKCRlbCk7XG4gICAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWwsICdlcnJvcicsIHZhbGlkYXRvck5hbWUpO1xuICAgIGVycm9yQ29uZmlncyA9IF8uZXh0ZW5kKGVycm9yQ29uZmlncywgeyRlbH0pO1xuICAgIFxuICAgIGlmKGVycm9yTWVzc2FnZUNsYXNzZXMgJiYgZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbml0aWFsKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbml0aWFsKTtcbiAgICB9XG4gICAgXG4gICAgaWYoX2FzeW5jKSB7XG4gICAgICBlcnJvckNvbmZpZ3MucmVxdWVzdHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgZXJyb3JzW3ZhbGlkYXRvck5hbWVdID0gZXJyb3JDb25maWdzO1xuICB9XG5cbiAgJGVsLmh0bWwoZXJyb3JNZXNzYWdlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7cHJlcHJvY2Vzc29yfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBcbiAgaWYoIV8uaXNQbGFpbk9iamVjdChjb25maWdzKSkge1xuICAgIGNvbmZpZ3MgPSB7dmFsaWRhdG9yOiBjb25maWdzfTtcbiAgfVxuICBcbiAgaWYocHJlcHJvY2Vzc29yKSB7XG4gICAgY29uZmlncy52YWxpZGF0b3IgPSBwcmVwcm9jZXNzb3IoY29udHJvbCwgY29uZmlncy52YWxpZGF0b3IpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ3M7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplciBmcm9tICcuLi9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXInO1xuaW1wb3J0IGluaXRpYWxEYXRhU2V0dGVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyJztcbmltcG9ydCByZXF1ZXN0c051bGxpZmllciAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXInO1xuaW1wb3J0IGluaXRpYWxWaXN1YWxpemVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyL2luaXRpYWwtdmlzdWFsaXplcic7XG5pbXBvcnQgZmluYWxEYXRhU2V0dGVyICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvZmluYWwtZGF0YS1zZXR0ZXIvZmluYWwtZGF0YS1zZXR0ZXInO1xuaW1wb3J0IGZpbmFsVmlzdWFsaXplciAgICAgICAgICAgIGZyb20gJy4vZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgaWYoY29udHJvbC52YWxpZFZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9ICAgXG4gIFxuICBsZXQge3ZhbGlkYXRvck5hbWUsIHZhbGlkYXRvck5hbWVQcmVmaXhlZCwgdmFsaWRhdG9yfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIGVycm9ycywgdmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXTtcbiAgbGV0IHZhbGlkYXRpb25JZCA9IF8udW5pcXVlSWQoKTtcblxuICBpZihjb250cm9sLmludmFsaWRWYWx1ZSA9PT0gY29udHJvbC52YWx1ZSkge1xuICAgIGxldCBlcnJvciA9IHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX07XG4gICAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgZXJyb3IpLnZpc3VhbGl6ZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXJyb3IpO1xuICB9XG4gIFxuICBpbml0aWFsRGF0YVNldHRlcihjb250cm9sLCB2YWxpZGF0b3JOYW1lKTtcbiAgcmVxdWVzdHNOdWxsaWZpZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvbklkKTtcbiAgaW5pdGlhbFZpc3VhbGl6ZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSk7XG4gIFxuICBjbGVhclRpbWVvdXQoZXJyb3JDb25maWdzLmFzeW5jRGVib3VuY2VUaW1lb3V0KTtcbiAgXG4gIGVycm9yQ29uZmlncy5hc3luY0RlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmKHZhbGlkaWZ5LnN5bmMpIHtcbiAgICAgIHJldHVybiBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5jb250YWluZXIoZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5wZW5kaW5nKHRydWUpO1xuICAgIFxuICAgIHZhbGlkYXRvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvcikudGhlbih2YWxpZGF0aW9uU3RhdHVzID0+IHtcbiAgICAgIGlmKGVycm9yQ29uZmlncy5yZXF1ZXN0c1t2YWxpZGF0aW9uSWRdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFsaWRhdGlvblN0YXR1cyA9IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKTtcbiAgICAgIGZpbmFsRGF0YVNldHRlcihjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbiwgdmFsaWRhdGlvblN0YXR1cyk7XG4gICAgICBmaW5hbFZpc3VhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpOyAgICAgIFxuICAgIH0pO1xuICB9LCBzZXR0aW5ncy5hc3luY0RlYm91bmNlVGltZSk7XG4gIFxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24sIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgbGV0IHtlcnJvcnMsIHZhbHVlLCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jU3RhdHVzZXMsIGVycm9yczogX2Vycm9yc30gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIFxuICBfZXJyb3JzW3ZhbGlkYXRvck5hbWVdLnJlcXVlc3RzID0ge307XG4gIHZhbGlkaWZ5LnN5bmMgPSBmYWxzZTtcbiAgYXN5bmNTdGF0dXNlc1t2YWxpZGF0b3JOYW1lXSA9IGZhbHNlO1xuICBcbiAgaWYoIXZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICBlcnJvcnMgPSBfLm9taXQoZXJyb3JzLCBbdmFsaWRhdG9yTmFtZVByZWZpeGVkXSk7XG4gIH1cbiAgXG4gIF8uZXh0ZW5kKGVycm9ycywgdmFsaWRhdGlvblN0YXR1cyk7XG4gIFxuICBpZihfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgIGNvbnRyb2wudmFsaWRWYWx1ZSA9IHZhbHVlO1xuICAgIGVycm9ycyA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnRyb2wuaW52YWxpZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgXG4gIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtZGF0YS1zZXR0ZXIvZmluYWwtZGF0YS1zZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jU3RhdHVzZXMgPT4ge1xuICByZXR1cm4gXy5yZWR1Y2UoYXN5bmNTdGF0dXNlcywgKGNvdW50LCBzdGF0dXMpID0+IHtcbiAgICByZXR1cm4gY291bnQgKz0gK3N0YXR1cztcbiAgfSwgMCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlci50cyIsImltcG9ydCBhY3RpdmVBc3luY3NDb3VudGVyIGZyb20gJy4vX2xpYi9hY3RpdmUtYXN5bmNzLWNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jU3RhdHVzZXMsIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLCB2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIWFjdGl2ZUFzeW5jc0NvdW50ZXIoYXN5bmNTdGF0dXNlcykpIHtcbiAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5wZW5kaW5nKGZhbHNlKTtcbiAgICBcbiAgICBpZighdmFsaWRhdGlvblN0YXR1cyAmJiBjb250cm9sLnZhbGlkKSB7XG4gICAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5zdWNjZXNzKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3MoZmFsc2UpLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgICB9LCBzZXR0aW5ncy5hc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplci50cyIsImV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcblxuICBjb250cm9sLnZhbGlkVmFsdWUgPSBjb250cm9sLmludmFsaWRWYWx1ZSA9IG51bGw7XG4gIHZhbGlkaWZ5LmFzeW5jU3RhdHVzZXNbdmFsaWRhdG9yTmFtZV0gPSB0cnVlO1xuICB2YWxpZGlmeS5zeW5jID0gZmFsc2U7ICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtZGF0YS1zZXR0ZXIvaW5pdGlhbC1kYXRhLXNldHRlci50cyIsImV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lKSA9PiB7XG4gIGxldCB7YXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuY29udGFpbmVyKHRydWUpLnN1Y2Nlc3MoZmFsc2UpO1xuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBudWxsKS52aXN1YWxpemUoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uSWQpID0+IHtcbiAgbGV0IHtyZXF1ZXN0c30gPSBjb250cm9sLnZhbGlkaWZ5LmVycm9yc1t2YWxpZGF0b3JOYW1lXTtcblxuICBfLmVhY2gocmVxdWVzdHMsIChyZXF1ZXN0LCBrZXkpID0+IHtcbiAgICByZXF1ZXN0c1trZXldID0gdHJ1ZTtcbiAgfSk7XG4gIFxuICByZXF1ZXN0c1t2YWxpZGF0aW9uSWRdID0gZmFsc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9yZXF1ZXN0cy1udWxsaWZpZXIvcmVxdWVzdHMtbnVsbGlmaWVyLnRzIiwiaW1wb3J0IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyIGZyb20gJy4uL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge3ZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIGxldCB7dmFsaWRhdG9yLCB2YWxpZGF0b3JOYW1lfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQgdmFsaWRhdGlvblN0YXR1cyA9IHZhbGlkYXRvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvcik7XG4gIFxuICBpZih2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgdmFsaWRpZnkuc3luYyA9IHRydWU7XG4gIH1cbiAgXG4gIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpLnVwZGF0ZURlcGVuZGVudHMoKS52aXN1YWxpemUoKTtcbiAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3IudHMiLCJpbXBvcnQgc3luY1ZhbGlkYXRvciAgZnJvbSAnLi9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvcic7XG5pbXBvcnQgYXN5bmNWYWxpZGF0b3IgZnJvbSAnLi9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmKHZhbGlkYXRvckRlY2xhcmF0aW9uLmFzeW5jKSB7XG4gICAgICByZXR1cm4gYXN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGF0YUluaXRpYWxpemVyICAgICBmcm9tICcuL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplcic7XG5pbXBvcnQgZGVwZW5kZW50c1JlZ2lzdHJhciBmcm9tICcuL2RlcGVuZGVudHMtcmVnaXN0cmFyL2RlcGVuZGVudHMtcmVnaXN0cmFyJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgZWxlbWVudHNJbml0aWFsaXplciBmcm9tICcuL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyJztcbmltcG9ydCBlcnJvckdlbmVyYXRvciAgICAgIGZyb20gJy4vZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvcic7XG5pbXBvcnQgdmFsaWRhdG9yQnVpbGRlciAgICBmcm9tICcuL3ZhbGlkYXRvci1idWlsZGVyL3ZhbGlkYXRvci1idWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQgZGF0YU5hbWVzID0gWydhc3luYycsICdjaGVja2JveCcsICd2YWxpZGF0b3JOYW1lJywgJ2RpcmVjdGl2ZU5hbWVQcmVmaXhlZCddO1xuICBkYXRhTmFtZXMucHVzaCgndmFsaWRhdG9yTmFtZVByZWZpeGVkJywgJ21lc3NhZ2VyJyk7XG4gIGxldCBzdXBwbGVtZW50YWxEYXRhID0gXy5waWNrKHZhbGlkYXRvckRlY2xhcmF0aW9uLCBkYXRhTmFtZXMpO1xuICBsZXQgY29uZmlndXJhdG9yID0gKGNvbnRyb2wsIGNvbmZpZ3MsIGVsKSA9PiB7XG4gICAgZGF0YUluaXRpYWxpemVyKHNldHRpbmdzLCBjb250cm9sLCBlbCk7XG4gICAgZGVwZW5kZW50c1JlZ2lzdHJhcihjb250cm9sKTtcbiAgICBjb25maWdzID0gcHJlcHJvY2Vzc29yKGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICBlbGVtZW50c0luaXRpYWxpemVyKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgZXJyb3JHZW5lcmF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICByZXR1cm4gdmFsaWRhdG9yQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICB9O1xuXG4gIHJldHVybiBfLmV4dGVuZChjb25maWd1cmF0b3IsIHN1cHBsZW1lbnRhbERhdGEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHByaXZhdGUgaGlkZGVuQ2xhc3M7XG4gIHByaXZhdGUgYXN5bmNzO1xuICBwcml2YXRlICRlbDtcbiAgcHJpdmF0ZSAkZWxDb250YWluZXI7XG4gIHByaXZhdGUgcGVuZGluZ0NsYXNzO1xuICBcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGNvbnRyb2wpIHtcbiAgICBsZXQge2FzeW5jcywgZWxlbWVudHN9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICAgIGxldCBwZW5kaW5nQ2xhc3MgPSBgJHtzZXR0aW5ncy5wcmVmaXh9LWFzeW5jLXBlbmRpbmdgO1xuICAgIFxuICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICRlbCwgJGVsQ29udGFpbmVyLCBhc3luY3MsIHBlbmRpbmdDbGFzcyxcbiAgICAgIGhpZGRlbkNsYXNzOiBzZXR0aW5ncy5hc3luY1N0YXR1c0hpZGVDbGFzc1xuICAgIH0pO1xuICB9XG4gIFxuICBwcml2YXRlIGRpc3BsYXkodHlwZSwgb24pIHtcbiAgICBsZXQgbWV0aG9kID0gb24gPyAncmVtb3ZlQ2xhc3MnOiAnYWRkQ2xhc3MnO1xuICAgIHRoaXMuYXN5bmNzWyckJyArIHR5cGVdW21ldGhvZF0odGhpcy5oaWRkZW5DbGFzcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgXG4gIHByaXZhdGUgY2xhc3NPcGVyYXRvcihvcGVyYXRpb24pIHtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCBwZW5kaW5nQ2xhc3N9ID0gdGhpcztcbiAgICAkZWxbb3BlcmF0aW9uXShwZW5kaW5nQ2xhc3MpO1xuICAgICRlbENvbnRhaW5lcltvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gIH1cbiAgXG4gIGNvbnRhaW5lcihvbikge1xuICAgIGlmKG9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ2FkZENsYXNzJyk7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wZW5kaW5nKG9uKS5zdWNjZXNzKG9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheSgnYXN5bmNzQ29udGFpbmVyJywgb24pO1xuICB9XG4gIFxuICBwZW5kaW5nKG9uKSB7XG4gICAgaWYoIW9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ3JlbW92ZUNsYXNzJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLmRpc3BsYXkoJ3BlbmRpbmcnLCBvbik7XG4gIH1cbiAgXG4gIHN1Y2Nlc3Mob24pIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5KCdzdWNjZXNzJywgb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNldHRpbmdzLCBjb250cm9sKSB7XG4gIF8uZXh0ZW5kKHRoaXMsIHtzZXR0aW5ncywgY29udHJvbCwgc3RhdGU6IHt9fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXBlbmRlbnRzQWdncmVnYXRvcihjb250cm9sLCBhbGwgPSBbXSkge1xuICBsZXQge2RlcGVuZGVudHMgPSBbXX0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cykge1xuICAgIGlmKGFsbC5pbmRleE9mKGRlcGVuZGVudCkgPT09IC0xKSB7XG4gICAgICBhbGwucHVzaChkZXBlbmRlbnQpO1xuICAgICAgZGVwZW5kZW50c0FnZ3JlZ2F0b3IoZGVwZW5kZW50LCBhbGwpO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGFsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlcGVuZGVudHNBZ2dyZWdhdG9yIGZyb20gJy4vX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHtzaWxlbnQsIGRlcGVuZGVudHMsIGNvbnRyb2x9ID0gdGhpcztcbiAgXG4gIGlmKCFzaWxlbnQpIHtcbiAgICBpZighY29udHJvbC52YWxpZGlmeS5pZ25vcmVEZXBlbmRlbnRzKSB7XG4gICAgICBkZXBlbmRlbnRzID0gZGVwZW5kZW50c0FnZ3JlZ2F0b3IoY29udHJvbCk7XG4gICAgICBmb3IobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIF8uZXh0ZW5kKGRlcGVuZGVudC52YWxpZGlmeSwge3NpbGVudDogdHJ1ZSwgaWdub3JlRGVwZW5kZW50czogdHJ1ZX0pO1xuICAgICAgICAgIGRlcGVuZGVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBfLmV4dGVuZCh0aGlzLCB7ZGVwZW5kZW50c30pO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKSB7XG4gIGxldCB7c2lsZW50LCBlcnJvcnN9ID0gdGhpcy5jb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBcbiAgXy5leHRlbmQodGhpcywge3NpbGVudCwgZGVwZW5kZW50czogdW5kZWZpbmVkfSk7XG4gIGVycm9yQ29uZmlncy5zdGF0dXMgPSB2YWxpZGF0aW9uU3RhdHVzO1xuICBcbiAgaWYoIXNpbGVudCkge1xuICAgIF8uZXh0ZW5kKHRoaXMsIHtlcnJvckNvbmZpZ3N9KTtcbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgX2NvbnN0cnVjdG9yICAgICAgZnJvbSAnLi9fY29uc3RydWN0b3IvY29uc3RydWN0b3InO1xuaW1wb3J0IHN0YXRlU2V0dGVyICAgICAgIGZyb20gJy4vc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW50c1VwZGF0ZXIgZnJvbSAnLi9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyJztcbmltcG9ydCB2aXN1YWxpemVyICAgICAgICBmcm9tICcuL3Zpc3VhbGl6ZXIvdmlzdWFsaXplcic7XG5cbl8uZXh0ZW5kKF9jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgc2V0OiBzdGF0ZVNldHRlcixcbiAgdXBkYXRlRGVwZW5kZW50czogZGVwZW5kZW50c1VwZGF0ZXIsXG4gIHZpc3VhbGl6ZTogdmlzdWFsaXplclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IF9jb25zdHJ1Y3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHtlcnJvck1lc3NhZ2VEZWxheXM6IGRlbGF5c30gPSBzZXR0aW5ncztcbiAgbGV0IHtfYXN5bmMsIHN0YXR1cywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZGlydHl9ID0gY29udHJvbDtcbiAgcmV0dXJuIF9hc3luYyB8fCAhZGlydHkgPyAwIDogc3RhdHVzID8gZGVsYXlzLmludmFsaWQgOiBkZWxheXMudmFsaWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9fbGliL2RlbGF5LWNhbGN1bGF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgJGVsKSA9PiB7XG4gIGxldCBjbGFzc2VzID0gJGVsLmF0dHIoJ2NsYXNzJyk7XG4gIFxuICBpZihjbGFzc2VzKSB7XG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIHJldHVybiBfLnJlZHVjZShjbGFzc2VzLCAoY291bnQsIGtsYXNzKSA9PiB7XG4gICAgaWYoa2xhc3Muc3RhcnRzV2l0aChgJHtzZXR0aW5ncy5wcmVmaXh9LWVycm9yYCkpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjb3VudDtcbiAgfSwgMCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9fbGliL2Vycm9ycy1jb3VudGVyLnRzIiwiaW1wb3J0IGVycm9yc0NvdW50ZXIgZnJvbSAnLi9fbGliL2Vycm9ycy1jb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCBzdGF0dXM6IHZhbGlkYXRpb25TdGF0dXN9ID0gZXJyb3JDb25maWdzO1xuICBsZXQgeyRlbDogJGVycm9yRWwsIF9hc3luYywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQge2RpcnR5LCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCAkZXJyb3JzQ29udGFpbmVyfSA9IHZhbGlkaWZ5LmVsZW1lbnRzO1xuICBsZXQgZXJyb3JDbGFzcyA9IGAke3ByZWZpeH0tZXJyb3ItJHt2YWxpZGF0b3JOYW1lfWA7XG4gIGxldCBzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LXN5bmNgO1xuICBsZXQgYXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYXN5bmNgO1xuICBcbiAgaWYoZGlydHkpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLXByaXN0aW5lJykuYWRkQ2xhc3MoJ25nLWRpcnR5Jyk7XG4gIH0gZWxzZSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKCduZy1wcmlzdGluZScpO1xuICB9XG5cbiAgaWYoX2FzeW5jKSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKHN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhzeW5jQ2xhc3MpO1xuICB9IGVsc2Uge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcyhzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKGFzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYWRkQ2xhc3Moc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhhc3luY0NsYXNzKTtcbiAgfVxuXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICAkZWwuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy12YWxpZCcpLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLXZhbGlkJykucmVtb3ZlQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy52YWxpZCk7XG4gICAgcmV0dXJuICRlcnJvckVsLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbnZhbGlkKTtcbiAgfVxuICBcbiAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmludmFsaWQpO1xuICAkZXJyb3JFbC5hZGRDbGFzcygnbmctdmFsaWQnKS5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLnZhbGlkKTtcbiAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xuICAkZWwucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG5cbiAgaWYoIWVycm9yc0NvdW50ZXIoc2V0dGluZ3MsICRlbENvbnRhaW5lcikpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcygnbmctdmFsaWQnKTtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoX2FzeW5jID8gYXN5bmNDbGFzcyA6IHN5bmNDbGFzcyk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZWxheUNhbGN1bGF0b3IgIGZyb20gJy4vX2xpYi9kZWxheS1jYWxjdWxhdG9yJztcbmltcG9ydCBlcnJvcnNWaXN1YWxpemVyIGZyb20gJy4vZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgaWYoIXRoaXMuc2lsZW50KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQge2NvbnRyb2wsIGRlcGVuZGVudHMgPSBbXSwgZXJyb3JDb25maWdzfSA9IHRoaXM7XG4gICAgICBsZXQgZGVsYXkgPSBkZWxheUNhbGN1bGF0b3IodGhpcy5zZXR0aW5ncywgZXJyb3JDb25maWdzKTtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCk7XG4gICAgICBcbiAgICAgIGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZXBlbmRlbnRzLnVuc2hpZnQoY29udHJvbCk7XG4gICAgICAgIF8uZWFjaChkZXBlbmRlbnRzLCBjb250cm9sID0+IHtcbiAgICAgICAgICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gICAgICAgICAgXG4gICAgICAgICAgXy5leHRlbmQodmFsaWRpZnksIHtzaWxlbnQ6IGZhbHNlLCBpZ25vcmVEZXBlbmRlbnRzOiBmYWxzZX0pO1xuICAgICAgICAgIF8uZWFjaCh2YWxpZGlmeS5lcnJvcnMsIF8ucGFydGlhbChlcnJvcnNWaXN1YWxpemVyLCB0aGlzLnNldHRpbmdzLCBfKSk7XG4gICAgICAgIH0pXG4gICAgICB9LCBkZWxheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvdmlzdWFsaXplci50cyIsImltcG9ydCB2YWxpZGF0b3IgICAgICAgZnJvbSAnLi92YWxpZGF0b3IvdmFsaWRhdG9yJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgZnJvbSAnLi9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yJztcbmltcG9ydCBtZXNzYWdlciAgICAgICAgZnJvbSAnLi9tZXNzYWdlci9tZXNzYWdlcic7XG5pbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IsXG4gIHByZXByb2Nlc3NvcixcbiAgbWVzc2FnZXIsXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL2RlcHMudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlcGVuZGVuY3lOYW1lcyA9PiB7XG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXMubWFwKGRlcGVuZGVuY3lOYW1lID0+IHtcbiAgICByZXR1cm4gXy51cHBlckZpcnN0KF8ubG93ZXJDYXNlKGRlcGVuZGVuY3lOYW1lKSk7XG4gIH0pLmpvaW4oJywgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXIudHMiLCJpbXBvcnQgZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIgZnJvbSAnLi9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWVQcm9wZXJ9ID0gY29udHJvbDtcbiAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIoZGVwZW5kZW5jeU5hbWVzKTtcbiAgcmV0dXJuIGAke2NvbnRyb2xOYW1lUHJvcGVyfSBkZXBlbmRzIG9uICR7ZGVwZW5kZW5jeU5hbWVzfWA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9tZXNzYWdlci50cyIsImNvbnN0IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtkZXBlbmRlbmN5RGVwZW5kZW50c01hcH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc3RyLCBjaGFyKSA9PiB7XG4gIGxldCByeCA9IG5ldyBSZWdFeHAoYFxcXFxzKiR7Y2hhcn1cXFxccypgKTtcbiAgcmV0dXJuIHN0ci5zcGxpdChyeCkubWFwKHBpZWNlID0+IHBpZWNlLnRyaW0oKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9fbGliL3N0ci1hcnJheWlmaWVyLnRzIiwiaW1wb3J0IHN0ckFycmF5aWZpZXIgZnJvbSAnLi9fbGliL3N0ci1hcnJheWlmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCkgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IHN0ckFycmF5aWZpZXIoZGVwZW5kZW5jeU5hbWVzLCAnLCcpO1xuICBpZihkZXBlbmRlbmN5TmFtZXMuaW5kZXhPZihjb250cm9sTmFtZSkgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtjb250cm9sTmFtZX1dIGNhbm5vdCBkZXBlbmQgb24gaXRzZWxmYCk7XG4gIH1cbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lSZXF1ZXN0c30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCB7X3BhcmVudH0gPSBjb250cm9sO1xuICBsZXQgZm9ybURlcGVuZGVuY3lSZXF1ZXN0cyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gICAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeVJlcXVlc3RzKSB7XG4gICAgZGVwZW5kZW5jeVJlcXVlc3RzLnNldChfcGFyZW50LCBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzID0ge30pO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHNbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lSZXF1ZXN0c1tkZXBlbmRlbmN5TmFtZV0gPSBbXTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKGNvbnRyb2wpOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci50cyIsImltcG9ydCBkZXBlbmRlbnRzU2V0dGVyICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9fbGliL2RlcGVuZGVudHMtc2V0dGVyJztcbmltcG9ydCBkZXBlbmRlbmN5UmVxdWVzdFJlZ2lzdHJhciBmcm9tICcuL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQgZGVwZW5kZW5jeUNvbnRyb2wgPSBjb250cm9sLl9wYXJlbnQuY29udHJvbHNbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoZGVwZW5kZW5jeUNvbnRyb2wpIHtcbiAgICByZXR1cm4gZGVwZW5kZW50c1NldHRlcihkZXBlbmRlbmN5Q29udHJvbCwgY29udHJvbCk7XG4gIH1cbiAgXG4gIGRlcGVuZGVuY3lSZXF1ZXN0UmVnaXN0cmFyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXIudHMiLCJpbXBvcnQgZm9ybURlcGVuZGVuY3lNYXBHZXR0ZXIgICBmcm9tICcuL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCB7X3BhcmVudCwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IGZvcm1EZXBlbmRlbmN5TWFwR2V0dGVyKF9wYXJlbnQpO1xuICBsZXQgY29udHJvbERlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbY29udHJvbE5hbWVdO1xuICBcbiAgaWYoKGNvbnRyb2xEZXBlbmRlbnRzIHx8IFtdKS5pbmRleE9mKGRlcGVuZGVuY3lOYW1lKSA+IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtjb250cm9sTmFtZX1dIGFuZCBbJHtkZXBlbmRlbmN5TmFtZX1dIGRlcGVuZCBvbiBlYWNoIG90aGVyYCk7XG4gIH1cbiAgXG4gIGxldCBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtkZXBlbmRlbmN5TmFtZV0gPSBbXTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKGNvbnRyb2xOYW1lKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeURlcGVuZGVudHNNYXB9IGZyb20gJy4uLy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IF9wYXJlbnQgPT4ge1xuICBsZXQgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gZGVwZW5kZW5jeURlcGVuZGVudHNNYXAuZ2V0KF9wYXJlbnQpO1xuICBcbiAgaWYoIWZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCkge1xuICAgIGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwLnNldChfcGFyZW50LCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSB7fSk7XG4gIH1cbiAgXG4gIHJldHVybiBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXA7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlcGVuZGVuY3lOYW1lc1RyYW5zZm9ybWVyIGZyb20gJy4vZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyJztcbmltcG9ydCBkZXBlbmRlbnRUcmFja2VyICAgICAgICAgICBmcm9tICcuL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyJztcbmltcG9ydCBkZXBlbmRlbnRSZWdpc3RyYXIgICAgICAgICBmcm9tICcuL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW50LXJlZ2lzdHJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW5jeU5hbWVzVHJhbnNmb3JtZXIoZGVwZW5kZW5jeU5hbWVzLCBjb250cm9sKTtcblxuICBfLmVhY2goZGVwZW5kZW5jeU5hbWVzLCBkZXBlbmRlbmN5TmFtZSA9PiB7XG4gICAgZGVwZW5kZW50VHJhY2tlcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG4gICAgZGVwZW5kZW50UmVnaXN0cmFyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgbGV0IHtjb250cm9sc30gPSBjb250cm9sLl9wYXJlbnQ7XG4gIFxuICBmb3IobGV0IGRlcGVuZGVuY3lOYW1lIG9mIGRlcGVuZGVuY3lOYW1lcykge1xuICAgIGxldCBkZXBlbmRlbmN5Q29udHJvbCA9IGNvbnRyb2xzW2RlcGVuZGVuY3lOYW1lXTtcblxuICAgIGlmKCFkZXBlbmRlbmN5Q29udHJvbCkge1xuICAgICAgY29uc29sZS53YXJuKGBkZXBlbmRlbmN5IFske2RlcGVuZGVuY3lOYW1lfV0gaXMgbm90IGRlY2xhcmVkYCk7XG4gICAgfVxuXG4gICAgaWYoIWRlcGVuZGVuY3lDb250cm9sIHx8IGRlcGVuZGVuY3lDb250cm9sLmludmFsaWQpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VtYWlsR292JztcbmNvbnN0IGVtYWlsR292UnggPSAvXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKFxcLlstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSspKkBbQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KFxcLltBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8pKihcXC4oZ292fG1pbCkpJC87XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighZW1haWxHb3ZSeC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyBub3QgYSB2YWxpZCBnb3Zlcm5tZW50IGVtYWlsYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC1nb3YvZW1haWwtZ292LnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlbWFpbCc7XG5jb25zdCBlbWFpbFJ4ID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokLztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFlbWFpbFJ4LnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIG5vdCBhIHZhbGlkIGVtYWlsYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZXF1YWxzVG8nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBlcXVhbHNUbykge1xuICAgIGxldCB7dmFsdWUsIF9wYXJlbnR9ID0gY29udHJvbDtcbiAgICBsZXQgZXF1YWxzVG9Db250cm9sID0gX3BhcmVudC5jb250cm9sc1tlcXVhbHNUb107XG5cbiAgICBpZighdmFsdWUgfHwgdmFsdWUgIT09IGVxdWFsc1RvQ29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sLCB2YWxpZGF0b3JDb25maWdzKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWV9IG11c3QgZXF1YWwgdG8gJHt2YWxpZGF0b3JDb25maWdzfWA7XG4gIH0sXG5cbiAgdmFsaWRhdG9yTmFtZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZXF1YWxzLXRvL2VxdWFscy10by50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnbWF4TGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgbGV0IHt2YWx1ZX0gPSBjb250cm9sO1xuICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgaWYoIW1heExlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXhpbXVtIGxlbmd0aCBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gK21heExlbmd0aDtcbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBzaG91bGQgYmUgbGVzcyB0aGFuICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9tYXgtbGVuZ3RoL21heC1sZW5ndGgudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ21pbkxlbmd0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIGlmKGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIGlmKCFtaW5MZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWluaW11bSBsZW5ndGggc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICttaW5MZW5ndGg7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gc2hvdWxkIGJlICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHZhbGlkYXRvck5hbWUgPSAncGF0dGVybic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIHBhdHRlcm4pIHtcbiAgICBpZighcGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIHBhdHRlcm4pIHtcbiAgICBpZighcGF0dGVybikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzcGVjaWZ5IHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuJyk7XG4gICAgfVxuICAgIFxuICAgIGlmKF8uaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJufSRgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwiY29uc3QgZGlyZWN0aXZlTmFtZSA9ICdyZXF1aXJlZCc7XG5jb25zdCB2YWxpZGF0b3JOYW1lID0gJ3JlcXVpcmVkVHJ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZihjb250cm9sLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4ge1tkaXJlY3RpdmVOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgcmVxdWlyZWRgO1xuICB9LFxuXG4gIGRpcmVjdGl2ZU5hbWUsXG5cbiAgdmFsaWRhdG9yTmFtZSxcbiAgXG4gIGNoZWNrYm94OiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdyZXF1aXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighY29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIHJlcXVpcmVkYDtcbiAgfSxcblxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQvcmVxdWlyZWQudHMiLCJpbXBvcnQgZGVwc1ZhbGlkYXRvciAgICAgICAgIGZyb20gJy4vZGVwcy9kZXBzJztcbmltcG9ydCBlbWFpbFZhbGlkYXRvciAgICAgICAgZnJvbSAnLi9lbWFpbC9lbWFpbCc7XG5pbXBvcnQgZW1haWxHb3ZWYWxpZGF0b3IgICAgIGZyb20gJy4vZW1haWwtZ292L2VtYWlsLWdvdic7XG5pbXBvcnQgZXF1YWxzVG9WYWxpZGF0b3IgICAgIGZyb20gJy4vZXF1YWxzLXRvL2VxdWFscy10byc7XG5pbXBvcnQgbWF4TGVuZ3RoVmFsaWRhdG9yICAgIGZyb20gJy4vbWF4LWxlbmd0aC9tYXgtbGVuZ3RoJztcbmltcG9ydCBtaW5MZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9taW4tbGVuZ3RoL21pbi1sZW5ndGgnO1xuaW1wb3J0IHBhdHRlcm5WYWxpZGF0b3IgICAgICBmcm9tICcuL3BhdHRlcm4vcGF0dGVybic7XG5pbXBvcnQgcmVxdWlyZWRWYWxpZGF0b3IgICAgIGZyb20gJy4vcmVxdWlyZWQvcmVxdWlyZWQnO1xuaW1wb3J0IHJlcXVpcmVkVHJ1ZVZhbGlkYXRvciBmcm9tICcuL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgZGVwc1ZhbGlkYXRvcixcbiAgcmVxdWlyZWRWYWxpZGF0b3IsXG4gIG1pbkxlbmd0aFZhbGlkYXRvcixcbiAgbWF4TGVuZ3RoVmFsaWRhdG9yLFxuICBwYXR0ZXJuVmFsaWRhdG9yLFxuICBlbWFpbFZhbGlkYXRvcixcbiAgZW1haWxHb3ZWYWxpZGF0b3IsXG4gIGVxdWFsc1RvVmFsaWRhdG9yLFxuICByZXF1aXJlZFRydWVWYWxpZGF0b3Jcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzY1X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJmb3Jtc1wiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiYW1kXCI6XCJAYW5ndWxhci9mb3Jtc1wifVxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5nVmFsaWRpZnlDb25maWd1cmF0b3IgZnJvbSAnLi9jb25maWd1cmF0b3IvY29uZmlndXJhdG9yJztcblxuZXhwb3J0IHtuZ1ZhbGlkaWZ5Q29uZmlndXJhdG9yfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy12YWxpZGlmeS50cyJdLCJzb3VyY2VSb290IjoiIn0=