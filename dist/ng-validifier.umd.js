(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("jquery"), require("ng-http-plus"), require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "jquery", "ng-http-plus", "@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng-validifier"] = factory(require("lodash"), require("jquery"), require("ng-http-plus"), require("@angular/core"), require("@angular/forms"));
	else
		root["ng-validifier"] = factory(root["_"], root["$"], root["ngHttpPlus"], root["ng"]["core"], root["ng"]["forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_67__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validatorName; });
/* unused harmony export dependenciesTable */
var validatorName = 'deps';
var dependenciesTable = new WeakMap();



/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_prefixer__ = __webpack_require__(6);


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
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_vars__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_validators__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_generator_module_generator__ = __webpack_require__(46);




/* harmony default export */ __webpack_exports__["a"] = function (settings, validators) {
    if (validators === void 0) { validators = []; }
    settings = __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"]({}, __WEBPACK_IMPORTED_MODULE_1__lib_vars__["a" /* settings */], settings);
    validators.push.apply(validators, __WEBPACK_IMPORTED_MODULE_2__validators_validators__["a" /* default */]);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__module_generator_module_generator__["a" /* default */])(settings, validators);
};;


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control) {
    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { settings: settings, control: control, state: {} });
};


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_dependents_aggregator__ = __webpack_require__(14);


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
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructor_constructor__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_setter_state_setter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependents_updater_dependents_updater__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer__ = __webpack_require__(21);





__WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](__WEBPACK_IMPORTED_MODULE_1__constructor_constructor__["a" /* default */].prototype, {
    set: __WEBPACK_IMPORTED_MODULE_2__state_setter_state_setter__["a" /* default */],
    updateDependents: __WEBPACK_IMPORTED_MODULE_3__dependents_updater_dependents_updater__["a" /* default */],
    visualize: __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__constructor_constructor__["a" /* default */];


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (settings, errorConfigs) {
    var delays = settings.errorMessageDelays;
    var _async = errorConfigs._async, status = errorConfigs.status, control = errorConfigs.control;
    var dirty = control.dirty;
    return _async || !dirty ? 0 : status ? delays.invalid : delays.valid;
};;


/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_errors_counter__ = __webpack_require__(19);

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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_delay_calculator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_visualizer_errors_visualizer__ = __webpack_require__(20);



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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_validator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messager_messager__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_vars__ = __webpack_require__(5);




/* harmony default export */ __webpack_exports__["a"] = {
    validator: __WEBPACK_IMPORTED_MODULE_0__validator_validator__["a" /* default */],
    preprocessor: __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__["a" /* default */],
    messager: __WEBPACK_IMPORTED_MODULE_2__messager_messager__["a" /* default */],
    validatorName: __WEBPACK_IMPORTED_MODULE_3__lib_vars__["a" /* validatorName */]
};


/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dependency_names_stringifier__ = __webpack_require__(23);

/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    var controlNameProper = control.controlNameProper;
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_dependency_names_stringifier__["a" /* default */])(dependencyNames);
    return controlNameProper + " depends on " + dependencyNames;
};;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dependencyDependentsMap; });
var dependencyDependentsMap = new WeakMap();



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (str, char) {
    var rx = new RegExp("\\s*" + char + "\\s*");
    return str.split(rx).map(function (piece) { return piece.trim(); });
};;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_str_arrayifier__ = __webpack_require__(26);

/* harmony default export */ __webpack_exports__["a"] = function (dependencyNames, control) {
    var controlName = control.controlName;
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_str_arrayifier__["a" /* default */])(dependencyNames, ',');
    if (dependencyNames.indexOf(controlName) !== -1) {
        throw new Error("[" + controlName + "] cannot depend on itself");
    }
    return dependencyNames;
};;


/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dependents_setter_dependents_setter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__ = __webpack_require__(28);


/* harmony default export */ __webpack_exports__["a"] = function (dependencyName, control) {
    var dependencyControl = control._parent.controls[dependencyName];
    if (dependencyControl) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dependents_setter_dependents_setter__["a" /* default */])(dependencyControl, control);
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__["a" /* default */])(dependencyName, control);
};;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_dependency_map_getter_form_dependency_map_getter__ = __webpack_require__(31);

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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(25);

/* harmony default export */ __webpack_exports__["a"] = function (_parent) {
    var formDependencyDependentsMap = __WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* dependencyDependentsMap */].get(_parent);
    if (!formDependencyDependentsMap) {
        __WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* dependencyDependentsMap */].set(_parent, formDependencyDependentsMap = {});
    }
    return formDependencyDependentsMap;
};;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_names_transformer_dependency_names_transformer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependent_tracker_dependent_tracker__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependent_registrar_dependent_registrar__ = __webpack_require__(29);




/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependency_names_transformer_dependency_names_transformer__["a" /* default */])(dependencyNames, control);
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](dependencyNames, function (dependencyName) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dependent_tracker_dependent_tracker__["a" /* default */])(dependencyName, control);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dependent_registrar_dependent_registrar__["a" /* default */])(dependencyName, control);
    });
    return dependencyNames;
};;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(5);

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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var validatorName = 'uniqueCheck';
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control, configs, baseConfigs, settings) {
        var fieldName = configs.fieldName, ignore = configs.ignore, ignoreCase = configs.ignoreCase, path = configs.path;
        var value = control.value;
        if (ignoreCase) {
            value = value.toLowerCase();
        }
        if (!value || ignore.indexOf(value) !== -1) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var params = (_a = {}, _a[fieldName] = value, _a);
            control.http.get(path, { params: params }).subscribe(function (data) {
                resolve(data.length ? (_a = {}, _a[validatorName] = true, _a) : null);
                var _a;
            }, function (error) {
                reject(error.message);
            });
            var _a;
        });
    },
    preprocessor: function (control, configs, baseConfigs) {
        if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isPlainObject"](configs)) {
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
        else if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isArray"](ignore)) {
            ignore = [ignore];
        }
        if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isUndefined"](ignoreCase)) {
            ignoreCase = true;
        }
        if (ignoreCase) {
            ignore = ignore.map(function (ignore) { return (ignore + '').toLowerCase(); });
        }
        if (baseUrl) {
            path = baseUrl + path;
        }
        return __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](configs, { fieldName: fieldName, ignore: ignore, ignoreCase: ignoreCase, path: path });
    },
    messager: function (control) {
        var controlNameProper = control.controlNameProper;
        return "Value provided for " + controlNameProper + " field already exists";
    },
    validatorName: validatorName,
    async: true
};


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deps_deps__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_email__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_gov_email_gov__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equals_to_equals_to__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__max_length_max_length__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__min_length_min_length__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pattern_pattern__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__required_required__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__required_true_required_true__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__unique_check_unique_check__ = __webpack_require__(42);










/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__deps_deps__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_7__required_required__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_5__min_length_min_length__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_4__max_length_max_length__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_6__pattern_pattern__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_1__email_email__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_2__email_gov_email_gov__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_3__equals_to_equals_to__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_8__required_true_required_true__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_9__unique_check_unique_check__["a" /* default */]
];


/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_http_plus__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_http_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_http_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_selector_assembler__ = __webpack_require__(44);
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
        var selector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_selector_assembler__["a" /* default */])(directiveName, checkbox);
        var providers = [{
                provide: _async ? __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NG_ASYNC_VALIDATORS"] : __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NG_VALIDATORS"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return ValidatorDirectiveClass; }),
                multi: true
            }];
        var ValidatorDirectiveClass = (function () {
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
                    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](control, { http: this.http });
                }
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
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2_ng_http_plus__["HttpClientPlus"]])
            ], ValidatorDirectiveClass);
            return ValidatorDirectiveClass;
        }());
        ;
        return ValidatorDirectiveClass;
    });
};;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_http_plus__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_http_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_http_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_prefixer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validator_configurator_validator_configurator__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_generator_directives_generator__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* harmony default export */ __webpack_exports__["a"] = function (settings, validators) {
    validators = validators.map(function (validator) {
        var validatorName = validator.validatorName, directiveName = validator.directiveName;
        var validatorNamePrefixed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_prefixer__["a" /* default */])(settings, validatorName);
        var directiveNamePrefixed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_prefixer__["a" /* default */])(settings, directiveName);
        __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](validator, { validatorNamePrefixed: validatorNamePrefixed, directiveNamePrefixed: directiveNamePrefixed });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__validator_configurator_validator_configurator__["a" /* default */])(settings, validator);
    });
    var directives = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__directives_generator_directives_generator__["a" /* default */])(validators);
    var ValidatorModule = (function () {
        function ValidatorModule() {
        }
        ValidatorModule = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
                imports: [__WEBPACK_IMPORTED_MODULE_2_ng_http_plus__["HttpClientPlusModule"]],
                declarations: directives,
                exports: directives
            })
        ], ValidatorModule);
        return ValidatorModule;
    }());
    return ValidatorModule;
};;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name_assigner_name_assigner__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staters_validation_stater_validation_stater__ = __webpack_require__(17);




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
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_name_accessor__ = __webpack_require__(48);


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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependents_setter_dependents_setter__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = function (control) {
    var _parent = control._parent, controlName = control.controlName;
    var parentRecords = __WEBPACK_IMPORTED_MODULE_0__lib_vars__["b" /* dependencyRequests */].get(_parent);
    if (parentRecords) {
        var dependentRecords = parentRecords[controlName];
        if (dependentRecords) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependents_setter_dependents_setter__["a" /* default */])(control, dependentRecords);
            delete parentRecords[controlName];
        }
    }
};;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_container_adder__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staters_async_progress_visualizer_async_progress_visualizer__ = __webpack_require__(12);





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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_container_builder_errors_container_builder__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_container_builder_async_container_builder__ = __webpack_require__(51);


/* harmony default export */ __webpack_exports__["a"] = function (settings, control, validatorDeclaration) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors_container_builder_errors_container_builder__["a" /* default */])(settings, control);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__async_container_builder_async_container_builder__["a" /* default */])(settings, control, validatorDeclaration);
};;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_container_adder__ = __webpack_require__(7);




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
/* 54 */
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_spannifier__ = __webpack_require__(54);




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
    var validatorConfigs = configs.validator, messagerConfigs = configs.messager, baseConfigs = configs.baseConfigs;
    var errorMessageClasses = settings.errorMessageClasses, prefix = settings.prefix;
    var $errorsContainer = elements.$errorsContainer;
    var errorMessager = __WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"](messager) ? messager : function () { return messager; };
    var errorMessage = errorMessager(control, validatorConfigs, messagerConfigs, baseConfigs);
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    var preprocessor = validatorDeclaration.preprocessor;
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash__["isPlainObject"](configs)) {
        configs = { validator: configs };
    }
    if (preprocessor) {
        var validatorConfigs = settings.validatorConfigs;
        if (validatorConfigs) {
            var validatorName = validatorDeclaration.validatorName;
            var baseConfigs = validatorConfigs[validatorName];
            __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](configs, { baseConfigs: baseConfigs });
        }
        configs.validator = preprocessor(control, configs.validator, baseConfigs);
    }
    return configs;
};;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initializer_initial_data_setter_initial_data_setter__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initializer_requests_nullifier_requests_nullifier__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initializer_initial_visualizer_initial_visualizer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finalizer_final_data_setter_final_data_setter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finalizer_final_visualizer_final_visualizer__ = __webpack_require__(60);







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
        validator(control, configs.validator, configs.baseConfigs).then(function (validationStatus) {
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
/* 58 */
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
/* 59 */
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_active_asyncs_counter__ = __webpack_require__(59);

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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var validify = control.validify;
    control.validValue = control.invalidValue = null;
    validify.asyncStatuses[validatorName] = true;
    validify.sync = false;
};;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var _a = control.validify, asyncProgressVisualizer = _a.asyncProgressVisualizer, validationStater = _a.validationStater;
    asyncProgressVisualizer.container(true).success(false);
    validationStater.set(validatorName, null).visualize();
};;


/***/ }),
/* 63 */
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
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_validation_status_normalizer__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    var validify = control.validify;
    var validationStater = validify.validationStater;
    var validator = validatorDeclaration.validator, validatorName = validatorDeclaration.validatorName;
    var validationStatus = validator(control, configs.validator, configs.baseConfigs);
    if (validationStatus) {
        validify.sync = true;
    }
    validationStater.set(validatorName, validationStatus).updateDependents().visualize();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_validation_status_normalizer__["a" /* default */])(settings, validationStatus);
};;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_validator_async_validator__ = __webpack_require__(57);


/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    return function () {
        if (validatorDeclaration.async) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__async_validator_async_validator__["a" /* default */])(settings, control, configs, validatorDeclaration);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__["a" /* default */])(settings, control, configs, validatorDeclaration);
    };
};;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_initializer_data_initializer__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependents_registrar_dependents_registrar__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocessor_preprocessor__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_initializer_elements_initializer__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_generator_error_generator__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator_builder_validator_builder__ = __webpack_require__(65);







/* harmony default export */ __webpack_exports__["a"] = function (settings, validatorDeclaration) {
    var dataNames = ['async', 'checkbox', 'validatorName', 'directiveNamePrefixed'];
    dataNames.push('validatorNamePrefixed', 'messager');
    var supplementalData = __WEBPACK_IMPORTED_MODULE_0_lodash__["pick"](validatorDeclaration, dataNames);
    var configurator = function (control, configs, el) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data_initializer_data_initializer__["a" /* default */])(settings, control, el);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dependents_registrar_dependents_registrar__["a" /* default */])(control);
        configs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__preprocessor_preprocessor__["a" /* default */])(settings, control, configs, validatorDeclaration);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__elements_initializer_elements_initializer__["a" /* default */])(settings, control, validatorDeclaration);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__error_generator_error_generator__["a" /* default */])(settings, control, configs, validatorDeclaration);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__validator_builder_validator_builder__["a" /* default */])(settings, control, configs, validatorDeclaration);
    };
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](configurator, supplementalData);
};;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validifier_validifier__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ngValidifier", function() { return __WEBPACK_IMPORTED_MODULE_0__validifier_validifier__["a"]; });




/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNzBjMzRhZTkzMWQxMDE2MDU4NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL19saWIvcHJlZml4ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9fbGliL2NvbnRhaW5lci1hZGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdIdHRwUGx1c1wiLFwiY29tbW9uanNcIjpcIm5nLWh0dHAtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLXBsdXNcIixcImFtZFwiOlwibmctaHR0cC1wbHVzXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvcmVcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29yZVwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2NvcmVcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvX2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3N0YXRlLXNldHRlci9zdGF0ZS1zZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9fbGliL2RlbGF5LWNhbGN1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9fbGliL2Vycm9ycy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci92aXN1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvZGVwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL19saWIvZGVwZW5kZW5jeS1uYW1lcy1zdHJpbmdpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL21lc3NhZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL19saWIvc3RyLWFycmF5aWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW50LXJlZ2lzdHJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy92YWxpZGF0b3IvdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2VtYWlsLWdvdi9lbWFpbC1nb3YudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZW1haWwvZW1haWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZXF1YWxzLXRvL2VxdWFscy10by50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9tYXgtbGVuZ3RoL21heC1sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvbWluLWxlbmd0aC9taW4tbGVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3BhdHRlcm4vcGF0dGVybi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC10cnVlL3JlcXVpcmVkLXRydWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQvcmVxdWlyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImZvcm1zXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2Zvcm1zXCJ9Iiwid2VicGFjazovLy8uL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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LEdBQUcsa0dBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3pFLGtIQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3RCx3R0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLDRHQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLDhDQUFRLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsQ0FBQyxFQUFDOzs7Ozs7O0FDdEJGLGdEOzs7Ozs7Ozs7O0FDQW1EO0FBRTdCIiwiZmlsZSI6Im5nLXZhbGlkaWZpZXIudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwibmctaHR0cC1wbHVzXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiLCBcImpxdWVyeVwiLCBcIm5nLWh0dHAtcGx1c1wiLCBcIkBhbmd1bGFyL2NvcmVcIiwgXCJAYW5ndWxhci9mb3Jtc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZy12YWxpZGlmaWVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwibmctaHR0cC1wbHVzXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZy12YWxpZGlmaWVyXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSwgcm9vdFtcIiRcIl0sIHJvb3RbXCJuZ0h0dHBQbHVzXCJdLCByb290W1wibmdcIl1bXCJjb3JlXCJdLCByb290W1wibmdcIl1bXCJmb3Jtc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNjdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI3MGMzNGFlOTMxZDEwMTYwNTg0IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZGVwZW5kZW5jeVJlcXVlc3RzID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIHByZWZpeDogJ3YnLFxuXG4gIHNlbGVjdG9yczoge1xuICAgIGVsZW1lbnRDb250YWluZXI6ICcuZm9ybS1ncm91cCcsXG4gICAgZXJyb3JzQ29udGFpbmVyOiBbJ2luc2VydEFmdGVyJywgJ2lucHV0J10sXG4gICAgYXN5bmNTdGF0dXNDb250YWluZXI6IFsnaW5zZXJ0QmVmb3JlJywgJ2lucHV0J11cbiAgfSxcbiAgXG4gIGVycm9yTWVzc2FnZUNsYXNzZXM6IHtcbiAgICBpbml0aWFsOiAnJyxcbiAgICB2YWxpZDogJycsXG4gICAgaW52YWxpZDogJydcbiAgfSxcblxuICBlcnJvck1lc3NhZ2VEZWxheXM6IHtcbiAgICB2YWxpZDogMzAwLFxuICAgIGludmFsaWQ6IDUwMFxuICB9LFxuXG4gIGFzeW5jRGVib3VuY2VUaW1lOiA1MDAsXG5cbiAgYXN5bmNTdGF0dXNIaWRlQ2xhc3M6ICdoaWRkZW4nLFxuICBcbiAgYXN5bmNTdWNjZXNzTWVzc2FnZUR1cmF0aW9uOiAxMDAwXG59O1xuXG5leHBvcnQge1xuICBkZXBlbmRlbmN5UmVxdWVzdHMsIFxuICBzZXR0aW5nc1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsICRlbCwgYmFzZUNsYXNzLCBjb250cm9sTmFtZSkgPT4ge1xuICBsZXQge3ByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IGNsYXNzZXMgPSBbYmFzZUNsYXNzLCBgJHtiYXNlQ2xhc3N9LSR7Y29udHJvbE5hbWV9YF07XG4gIGxldCBjbGFzc2VzU3RyID0gY2xhc3Nlcy5tYXAoa2xhc3MgPT4gYCR7cHJlZml4fS0ke2tsYXNzfWApLmpvaW4oJyAnKTtcbiAgJGVsLmFkZENsYXNzKGNsYXNzZXNTdHIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvX2xpYi9jbGFzcy1pZC1hc3NpZ25lci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIG5ld0RlcGVuZGVudHMpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2RlcGVuZGVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0FycmF5KG5ld0RlcGVuZGVudHMpKSB7XG4gICAgbmV3RGVwZW5kZW50cyA9IFtuZXdEZXBlbmRlbnRzXTtcbiAgfVxuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBfLnNldCh2YWxpZGlmeSwgJ2RlcGVuZGVudHMnLCBkZXBlbmRlbnRzID0gW10pO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goLi4ubmV3RGVwZW5kZW50cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdkZXBzJztcbmNvbnN0IGRlcGVuZGVuY2llc1RhYmxlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtcbiAgdmFsaWRhdG9yTmFtZSxcbiAgZGVwZW5kZW5jaWVzVGFibGVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL19saWIvdmFycy50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBuYW1lKSA9PiB7XG4gIGxldCB7cHJlZml4fSA9IHNldHRpbmdzO1xuICBcbiAgaWYocHJlZml4ICYmIG5hbWUpIHtcbiAgICBuYW1lID0gcHJlZml4ICsgXy51cHBlckZpcnN0KG5hbWUpO1xuICB9XG4gIFxuICByZXR1cm4gbmFtZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9fbGliL3ByZWZpeGVyLnRzIiwiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCAoJGVsLCAkY29udGFpbmVyLCAkY29udGFpbmVyQ29udGFpbmVyLCBpbnNlcnRpb25TcGVjKSA9PiB7XG4gIGxldCBbYWN0aW9uLCAkaW5zZXJ0aW9uUG9pbnRdID0gKCgpID0+IHtcbiAgICBpZighJGNvbnRhaW5lckNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbJ2luc2VydEFmdGVyJywgJGVsXTtcbiAgICB9XG4gICAgXG4gICAgbGV0IFthY3Rpb24sIGFuY2hvcl0gPSBpbnNlcnRpb25TcGVjO1xuICAgIGxldCAkaW5zZXJ0aW9uUG9pbnQgPSAoKCkgPT4ge1xuICAgICAgaWYoIWFuY2hvcikge1xuICAgICAgICByZXR1cm4gJGNvbnRhaW5lckNvbnRhaW5lcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuICQoYW5jaG9yLCAkY29udGFpbmVyQ29udGFpbmVyKTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIFthY3Rpb24sICRpbnNlcnRpb25Qb2ludF07XG4gIH0pKCk7XG4gIFxuICAkY29udGFpbmVyW2FjdGlvbl0oJGluc2VydGlvblBvaW50KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi4vLi4vLi4vX2xpYi9wcmVmaXhlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBpZihfLmlzUGxhaW5PYmplY3QodmFsaWRhdGlvblN0YXR1cykpIHtcbiAgICBsZXQga2V5ID0gXy5rZXlzKHZhbGlkYXRpb25TdGF0dXMpWzBdO1xuICAgIGxldCB2YWx1ZSA9IHZhbGlkYXRpb25TdGF0dXNba2V5XTtcbiAgICBrZXkgPSBwcmVmaXhlcihzZXR0aW5ncywga2V5KTtcbiAgICB2YWxpZGF0aW9uU3RhdHVzID0ge1trZXldOiB2YWx1ZX07XG4gIH1cbiAgXG4gIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1wbHVzXCIsXCJjb21tb25qczJcIjpcIm5nLWh0dHAtcGx1c1wiLFwiYW1kXCI6XCJuZy1odHRwLXBsdXNcIn1cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJjb3JlXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2NvcmVcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvY29yZVwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb3JlXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7c2V0dGluZ3MgYXMgbWFpblNldHRpbmdzfSBmcm9tICcuLi9fbGliL3ZhcnMnO1xuaW1wb3J0IGludGVybmFsVmFsaWRhdG9ycyAgICAgICAgIGZyb20gJy4uL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycyc7XG5pbXBvcnQgbW9kdWxlR2VuZXJhdG9yICAgICAgICAgICAgZnJvbSAnLi9tb2R1bGUtZ2VuZXJhdG9yL21vZHVsZS1nZW5lcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRvcnMgPSBbXSkgPT4ge1xuICBzZXR0aW5ncyA9IF8uZXh0ZW5kKHt9LCBtYWluU2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgdmFsaWRhdG9ycy5wdXNoKC4uLmludGVybmFsVmFsaWRhdG9ycyk7XG4gIHJldHVybiBtb2R1bGVHZW5lcmF0b3Ioc2V0dGluZ3MsIHZhbGlkYXRvcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkaWZpZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgcHJpdmF0ZSBoaWRkZW5DbGFzcztcbiAgcHJpdmF0ZSBhc3luY3M7XG4gIHByaXZhdGUgJGVsO1xuICBwcml2YXRlICRlbENvbnRhaW5lcjtcbiAgcHJpdmF0ZSBwZW5kaW5nQ2xhc3M7XG4gIFxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgY29udHJvbCkge1xuICAgIGxldCB7YXN5bmNzLCBlbGVtZW50c30gPSBjb250cm9sLnZhbGlkaWZ5O1xuICAgIGxldCB7JGVsLCAkZWxDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gICAgbGV0IHBlbmRpbmdDbGFzcyA9IGAke3NldHRpbmdzLnByZWZpeH0tYXN5bmMtcGVuZGluZ2A7XG4gICAgXG4gICAgXy5leHRlbmQodGhpcywge1xuICAgICAgJGVsLCAkZWxDb250YWluZXIsIGFzeW5jcywgcGVuZGluZ0NsYXNzLFxuICAgICAgaGlkZGVuQ2xhc3M6IHNldHRpbmdzLmFzeW5jU3RhdHVzSGlkZUNsYXNzXG4gICAgfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgZGlzcGxheSh0eXBlLCBvbikge1xuICAgIGxldCBtZXRob2QgPSBvbiA/ICdyZW1vdmVDbGFzcyc6ICdhZGRDbGFzcyc7XG4gICAgdGhpcy5hc3luY3NbJyQnICsgdHlwZV1bbWV0aG9kXSh0aGlzLmhpZGRlbkNsYXNzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBcbiAgcHJpdmF0ZSBjbGFzc09wZXJhdG9yKG9wZXJhdGlvbikge1xuICAgIGxldCB7JGVsLCAkZWxDb250YWluZXIsIHBlbmRpbmdDbGFzc30gPSB0aGlzO1xuICAgICRlbFtvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyW29wZXJhdGlvbl0ocGVuZGluZ0NsYXNzKTtcbiAgfVxuICBcbiAgY29udGFpbmVyKG9uKSB7XG4gICAgaWYob24pIHtcbiAgICAgIHRoaXMuY2xhc3NPcGVyYXRvcignYWRkQ2xhc3MnKTsgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBlbmRpbmcob24pLnN1Y2Nlc3Mob24pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5KCdhc3luY3NDb250YWluZXInLCBvbik7XG4gIH1cbiAgXG4gIHBlbmRpbmcob24pIHtcbiAgICBpZighb24pIHtcbiAgICAgIHRoaXMuY2xhc3NPcGVyYXRvcigncmVtb3ZlQ2xhc3MnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheSgncGVuZGluZycsIG9uKTtcbiAgfVxuICBcbiAgc3VjY2Vzcyhvbikge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkoJ3N1Y2Nlc3MnLCBvbik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2V0dGluZ3MsIGNvbnRyb2wpIHtcbiAgXy5leHRlbmQodGhpcywge3NldHRpbmdzLCBjb250cm9sLCBzdGF0ZToge319KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci50cyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlcGVuZGVudHNBZ2dyZWdhdG9yKGNvbnRyb2wsIGFsbCA9IFtdKSB7XG4gIGxldCB7ZGVwZW5kZW50cyA9IFtdfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gIFxuICBmb3IobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgaWYoYWxsLmluZGV4T2YoZGVwZW5kZW50KSA9PT0gLTEpIHtcbiAgICAgIGFsbC5wdXNoKGRlcGVuZGVudCk7XG4gICAgICBkZXBlbmRlbnRzQWdncmVnYXRvcihkZXBlbmRlbnQsIGFsbCk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gYWxsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVwZW5kZW50c0FnZ3JlZ2F0b3IgZnJvbSAnLi9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQge3NpbGVudCwgZGVwZW5kZW50cywgY29udHJvbH0gPSB0aGlzO1xuICBcbiAgaWYoIXNpbGVudCkge1xuICAgIGlmKCFjb250cm9sLnZhbGlkaWZ5Lmlnbm9yZURlcGVuZGVudHMpIHtcbiAgICAgIGRlcGVuZGVudHMgPSBkZXBlbmRlbnRzQWdncmVnYXRvcihjb250cm9sKTtcbiAgICAgIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgXy5leHRlbmQoZGVwZW5kZW50LnZhbGlkaWZ5LCB7c2lsZW50OiB0cnVlLCBpZ25vcmVEZXBlbmRlbnRzOiB0cnVlfSk7XG4gICAgICAgICAgZGVwZW5kZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIF8uZXh0ZW5kKHRoaXMsIHtkZXBlbmRlbnRzfSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgbGV0IHtzaWxlbnQsIGVycm9yc30gPSB0aGlzLmNvbnRyb2wudmFsaWRpZnk7XG4gIGxldCBlcnJvckNvbmZpZ3MgPSBlcnJvcnNbdmFsaWRhdG9yTmFtZV07XG4gIFxuICBfLmV4dGVuZCh0aGlzLCB7c2lsZW50LCBkZXBlbmRlbnRzOiB1bmRlZmluZWR9KTtcbiAgZXJyb3JDb25maWdzLnN0YXR1cyA9IHZhbGlkYXRpb25TdGF0dXM7XG4gIFxuICBpZighc2lsZW50KSB7XG4gICAgXy5leHRlbmQodGhpcywge2Vycm9yQ29uZmlnc30pO1xuICB9XG4gIFxuICByZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3N0YXRlLXNldHRlci9zdGF0ZS1zZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBfY29uc3RydWN0b3IgICAgICBmcm9tICcuL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgc3RhdGVTZXR0ZXIgICAgICAgZnJvbSAnLi9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyJztcbmltcG9ydCBkZXBlbmRlbnRzVXBkYXRlciBmcm9tICcuL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXInO1xuaW1wb3J0IHZpc3VhbGl6ZXIgICAgICAgIGZyb20gJy4vdmlzdWFsaXplci92aXN1YWxpemVyJztcblxuXy5leHRlbmQoX2NvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xuICBzZXQ6IHN0YXRlU2V0dGVyLFxuICB1cGRhdGVEZXBlbmRlbnRzOiBkZXBlbmRlbnRzVXBkYXRlcixcbiAgdmlzdWFsaXplOiB2aXN1YWxpemVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgX2NvbnN0cnVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGVycm9yQ29uZmlncykgPT4ge1xuICBsZXQge2Vycm9yTWVzc2FnZURlbGF5czogZGVsYXlzfSA9IHNldHRpbmdzO1xuICBsZXQge19hc3luYywgc3RhdHVzLCBjb250cm9sfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHtkaXJ0eX0gPSBjb250cm9sO1xuICByZXR1cm4gX2FzeW5jIHx8ICFkaXJ0eSA/IDAgOiBzdGF0dXMgPyBkZWxheXMuaW52YWxpZCA6IGRlbGF5cy52YWxpZDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCAkZWwpID0+IHtcbiAgbGV0IGNsYXNzZXMgPSAkZWwuYXR0cignY2xhc3MnKTtcbiAgXG4gIGlmKGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzID0gY2xhc3Nlcy5zcGxpdCgvXFxzKy8pO1xuICB9XG5cbiAgcmV0dXJuIF8ucmVkdWNlKGNsYXNzZXMsIChjb3VudCwga2xhc3MpID0+IHtcbiAgICBpZihrbGFzcy5zdGFydHNXaXRoKGAke3NldHRpbmdzLnByZWZpeH0tZXJyb3JgKSkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNvdW50O1xuICB9LCAwKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJpbXBvcnQgZXJyb3JzQ291bnRlciBmcm9tICcuL19saWIvZXJyb3JzLWNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGVycm9yQ29uZmlncykgPT4ge1xuICBsZXQge3ZhbGlkYXRvck5hbWUsIHN0YXR1czogdmFsaWRhdGlvblN0YXR1c30gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7JGVsOiAkZXJyb3JFbCwgX2FzeW5jLCBjb250cm9sfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHtlcnJvck1lc3NhZ2VDbGFzc2VzLCBwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCB7ZGlydHksIHZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7JGVsLCAkZWxDb250YWluZXIsICRlcnJvcnNDb250YWluZXJ9ID0gdmFsaWRpZnkuZWxlbWVudHM7XG4gIGxldCBlcnJvckNsYXNzID0gYCR7cHJlZml4fS1lcnJvci0ke3ZhbGlkYXRvck5hbWV9YDtcbiAgbGV0IHN5bmNDbGFzcyA9IGAke3ByZWZpeH0tc3luY2A7XG4gIGxldCBhc3luY0NsYXNzID0gYCR7cHJlZml4fS1hc3luY2A7XG4gIFxuICBpZihkaXJ0eSkge1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcygnbmctcHJpc3RpbmUnKS5hZGRDbGFzcygnbmctZGlydHknKTtcbiAgfSBlbHNlIHtcbiAgICAkZWxDb250YWluZXIuYWRkQ2xhc3MoJ25nLXByaXN0aW5lJyk7XG4gIH1cblxuICBpZihfYXN5bmMpIHtcbiAgICAkZWxDb250YWluZXIuYWRkQ2xhc3MoYXN5bmNDbGFzcykucmVtb3ZlQ2xhc3Moc3luY0NsYXNzKTtcbiAgICAkZXJyb3JzQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKHN5bmNDbGFzcyk7XG4gIH0gZWxzZSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKHN5bmNDbGFzcykucmVtb3ZlQ2xhc3MoYXN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hZGRDbGFzcyhzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKGFzeW5jQ2xhc3MpO1xuICB9XG5cbiAgaWYodmFsaWRhdGlvblN0YXR1cykge1xuICAgICRlbC5hZGRDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLXZhbGlkJykuYWRkQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAkZXJyb3JFbC5yZW1vdmVDbGFzcygnbmctdmFsaWQnKS5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLnZhbGlkKTtcbiAgICByZXR1cm4gJGVycm9yRWwuYWRkQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmludmFsaWQpO1xuICB9XG4gIFxuICAkZXJyb3JFbC5yZW1vdmVDbGFzcygnbmctaW52YWxpZCcpLnJlbW92ZUNsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMuaW52YWxpZCk7XG4gICRlcnJvckVsLmFkZENsYXNzKCduZy12YWxpZCcpLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMudmFsaWQpO1xuICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICRlbC5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKTtcblxuICBpZighZXJyb3JzQ291bnRlcihzZXR0aW5ncywgJGVsQ29udGFpbmVyKSkge1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcygnbmctaW52YWxpZCcpLmFkZENsYXNzKCduZy12YWxpZCcpO1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcyhfYXN5bmMgPyBhc3luY0NsYXNzIDogc3luY0NsYXNzKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlbGF5Q2FsY3VsYXRvciAgZnJvbSAnLi9fbGliL2RlbGF5LWNhbGN1bGF0b3InO1xuaW1wb3J0IGVycm9yc1Zpc3VhbGl6ZXIgZnJvbSAnLi9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBpZighdGhpcy5zaWxlbnQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCB7Y29udHJvbCwgZGVwZW5kZW50cyA9IFtdLCBlcnJvckNvbmZpZ3N9ID0gdGhpcztcbiAgICAgIGxldCBkZWxheSA9IGRlbGF5Q2FsY3VsYXRvcih0aGlzLnNldHRpbmdzLCBlcnJvckNvbmZpZ3MpO1xuICAgICAgXG4gICAgICBjbGVhclRpbWVvdXQoZXJyb3JDb25maWdzLnZpc3VhbGl6YXRpb25UaW1lb3V0KTtcbiAgICAgIFxuICAgICAgZXJyb3JDb25maWdzLnZpc3VhbGl6YXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlcGVuZGVudHMudW5zaGlmdChjb250cm9sKTtcbiAgICAgICAgXy5lYWNoKGRlcGVuZGVudHMsIGNvbnRyb2wgPT4ge1xuICAgICAgICAgIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgICAgICAgICBcbiAgICAgICAgICBfLmV4dGVuZCh2YWxpZGlmeSwge3NpbGVudDogZmFsc2UsIGlnbm9yZURlcGVuZGVudHM6IGZhbHNlfSk7XG4gICAgICAgICAgXy5lYWNoKHZhbGlkaWZ5LmVycm9ycywgXy5wYXJ0aWFsKGVycm9yc1Zpc3VhbGl6ZXIsIHRoaXMuc2V0dGluZ3MsIF8pKTtcbiAgICAgICAgfSlcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci92aXN1YWxpemVyLnRzIiwiaW1wb3J0IHZhbGlkYXRvciAgICAgICBmcm9tICcuL3ZhbGlkYXRvci92YWxpZGF0b3InO1xuaW1wb3J0IHByZXByb2Nlc3NvciAgICBmcm9tICcuL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3InO1xuaW1wb3J0IG1lc3NhZ2VyICAgICAgICBmcm9tICcuL21lc3NhZ2VyL21lc3NhZ2VyJztcbmltcG9ydCB7dmFsaWRhdG9yTmFtZX0gZnJvbSAnLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcixcbiAgcHJlcHJvY2Vzc29yLFxuICBtZXNzYWdlcixcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvZGVwcy50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVwZW5kZW5jeU5hbWVzID0+IHtcbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcy5tYXAoZGVwZW5kZW5jeU5hbWUgPT4ge1xuICAgIHJldHVybiBfLnVwcGVyRmlyc3QoXy5sb3dlckNhc2UoZGVwZW5kZW5jeU5hbWUpKTtcbiAgfSkuam9pbignLCAnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL19saWIvZGVwZW5kZW5jeS1uYW1lcy1zdHJpbmdpZmllci50cyIsImltcG9ydCBkZXBlbmRlbmN5TmFtZXNTdHJpbmdpZmllciBmcm9tICcuL19saWIvZGVwZW5kZW5jeS1uYW1lcy1zdHJpbmdpZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgbGV0IHtjb250cm9sTmFtZVByb3Blcn0gPSBjb250cm9sO1xuICBkZXBlbmRlbmN5TmFtZXMgPSBkZXBlbmRlbmN5TmFtZXNTdHJpbmdpZmllcihkZXBlbmRlbmN5TmFtZXMpO1xuICByZXR1cm4gYCR7Y29udHJvbE5hbWVQcm9wZXJ9IGRlcGVuZHMgb24gJHtkZXBlbmRlbmN5TmFtZXN9YDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL21lc3NhZ2VyLnRzIiwiY29uc3QgZGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQge2RlcGVuZGVuY3lEZXBlbmRlbnRzTWFwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL19saWIvdmFycy50cyIsImV4cG9ydCBkZWZhdWx0IChzdHIsIGNoYXIpID0+IHtcbiAgbGV0IHJ4ID0gbmV3IFJlZ0V4cChgXFxcXHMqJHtjaGFyfVxcXFxzKmApO1xuICByZXR1cm4gc3RyLnNwbGl0KHJ4KS5tYXAocGllY2UgPT4gcGllY2UudHJpbSgpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL19saWIvc3RyLWFycmF5aWZpZXIudHMiLCJpbXBvcnQgc3RyQXJyYXlpZmllciBmcm9tICcuL19saWIvc3RyLWFycmF5aWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWVzLCBjb250cm9sKSA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgZGVwZW5kZW5jeU5hbWVzID0gc3RyQXJyYXlpZmllcihkZXBlbmRlbmN5TmFtZXMsICcsJyk7XG4gIGlmKGRlcGVuZGVuY3lOYW1lcy5pbmRleE9mKGNvbnRyb2xOYW1lKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske2NvbnRyb2xOYW1lfV0gY2Fubm90IGRlcGVuZCBvbiBpdHNlbGZgKTtcbiAgfVxuICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeVJlcXVlc3RzfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHtfcGFyZW50fSA9IGNvbnRyb2w7XG4gIGxldCBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzID0gZGVwZW5kZW5jeVJlcXVlc3RzLmdldChfcGFyZW50KTtcbiAgICBcbiAgaWYoIWZvcm1EZXBlbmRlbmN5UmVxdWVzdHMpIHtcbiAgICBkZXBlbmRlbmN5UmVxdWVzdHMuc2V0KF9wYXJlbnQsIGZvcm1EZXBlbmRlbmN5UmVxdWVzdHMgPSB7fSk7XG4gIH1cbiAgXG4gIGxldCBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lSZXF1ZXN0c1tkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZighZGVwZW5kZW50cykge1xuICAgIGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzW2RlcGVuZGVuY3lOYW1lXSA9IFtdO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goY29udHJvbCk7ICAgIFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyLnRzIiwiaW1wb3J0IGRlcGVuZGVudHNTZXR0ZXIgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyJztcbmltcG9ydCBkZXBlbmRlbmN5UmVxdWVzdFJlZ2lzdHJhciBmcm9tICcuL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQgZGVwZW5kZW5jeUNvbnRyb2wgPSBjb250cm9sLl9wYXJlbnQuY29udHJvbHNbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoZGVwZW5kZW5jeUNvbnRyb2wpIHtcbiAgICByZXR1cm4gZGVwZW5kZW50c1NldHRlcihkZXBlbmRlbmN5Q29udHJvbCwgY29udHJvbCk7XG4gIH1cbiAgXG4gIGRlcGVuZGVuY3lSZXF1ZXN0UmVnaXN0cmFyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXIudHMiLCJpbXBvcnQgZm9ybURlcGVuZGVuY3lNYXBHZXR0ZXIgICBmcm9tICcuL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCB7X3BhcmVudCwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IGZvcm1EZXBlbmRlbmN5TWFwR2V0dGVyKF9wYXJlbnQpO1xuICBsZXQgY29udHJvbERlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbY29udHJvbE5hbWVdO1xuICBcbiAgaWYoKGNvbnRyb2xEZXBlbmRlbnRzIHx8IFtdKS5pbmRleE9mKGRlcGVuZGVuY3lOYW1lKSA+IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtjb250cm9sTmFtZX1dIGFuZCBbJHtkZXBlbmRlbmN5TmFtZX1dIGRlcGVuZCBvbiBlYWNoIG90aGVyYCk7XG4gIH1cbiAgXG4gIGxldCBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtkZXBlbmRlbmN5TmFtZV0gPSBbXTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKGNvbnRyb2xOYW1lKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeURlcGVuZGVudHNNYXB9IGZyb20gJy4uLy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IF9wYXJlbnQgPT4ge1xuICBsZXQgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gZGVwZW5kZW5jeURlcGVuZGVudHNNYXAuZ2V0KF9wYXJlbnQpO1xuICBcbiAgaWYoIWZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCkge1xuICAgIGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwLnNldChfcGFyZW50LCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSB7fSk7XG4gIH1cbiAgXG4gIHJldHVybiBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXA7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlcGVuZGVuY3lOYW1lc1RyYW5zZm9ybWVyIGZyb20gJy4vZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyJztcbmltcG9ydCBkZXBlbmRlbnRUcmFja2VyICAgICAgICAgICBmcm9tICcuL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyJztcbmltcG9ydCBkZXBlbmRlbnRSZWdpc3RyYXIgICAgICAgICBmcm9tICcuL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW50LXJlZ2lzdHJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW5jeU5hbWVzVHJhbnNmb3JtZXIoZGVwZW5kZW5jeU5hbWVzLCBjb250cm9sKTtcblxuICBfLmVhY2goZGVwZW5kZW5jeU5hbWVzLCBkZXBlbmRlbmN5TmFtZSA9PiB7XG4gICAgZGVwZW5kZW50VHJhY2tlcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG4gICAgZGVwZW5kZW50UmVnaXN0cmFyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgbGV0IHtjb250cm9sc30gPSBjb250cm9sLl9wYXJlbnQ7XG4gIFxuICBmb3IobGV0IGRlcGVuZGVuY3lOYW1lIG9mIGRlcGVuZGVuY3lOYW1lcykge1xuICAgIGxldCBkZXBlbmRlbmN5Q29udHJvbCA9IGNvbnRyb2xzW2RlcGVuZGVuY3lOYW1lXTtcblxuICAgIGlmKCFkZXBlbmRlbmN5Q29udHJvbCkge1xuICAgICAgY29uc29sZS53YXJuKGBkZXBlbmRlbmN5IFske2RlcGVuZGVuY3lOYW1lfV0gaXMgbm90IGRlY2xhcmVkYCk7XG4gICAgfVxuXG4gICAgaWYoIWRlcGVuZGVuY3lDb250cm9sIHx8IGRlcGVuZGVuY3lDb250cm9sLmludmFsaWQpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VtYWlsR292JztcbmNvbnN0IGVtYWlsR292UnggPSAvXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKFxcLlstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSspKkBbQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KFxcLltBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8pKihcXC4oZ292fG1pbCkpJC87XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighZW1haWxHb3ZSeC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyBub3QgYSB2YWxpZCBnb3Zlcm5tZW50IGVtYWlsYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC1nb3YvZW1haWwtZ292LnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlbWFpbCc7XG5jb25zdCBlbWFpbFJ4ID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokLztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFlbWFpbFJ4LnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIG5vdCBhIHZhbGlkIGVtYWlsYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZXF1YWxzVG8nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBlcXVhbHNUbykge1xuICAgIGxldCB7dmFsdWUsIF9wYXJlbnR9ID0gY29udHJvbDtcbiAgICBsZXQgZXF1YWxzVG9Db250cm9sID0gX3BhcmVudC5jb250cm9sc1tlcXVhbHNUb107XG5cbiAgICBpZighdmFsdWUgfHwgdmFsdWUgIT09IGVxdWFsc1RvQ29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sLCB2YWxpZGF0b3JDb25maWdzKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWV9IG11c3QgZXF1YWwgdG8gJHt2YWxpZGF0b3JDb25maWdzfWA7XG4gIH0sXG5cbiAgdmFsaWRhdG9yTmFtZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZXF1YWxzLXRvL2VxdWFscy10by50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnbWF4TGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgbGV0IHt2YWx1ZX0gPSBjb250cm9sO1xuICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgaWYoIW1heExlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXhpbXVtIGxlbmd0aCBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gK21heExlbmd0aDtcbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBzaG91bGQgYmUgbGVzcyB0aGFuICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9tYXgtbGVuZ3RoL21heC1sZW5ndGgudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ21pbkxlbmd0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIGlmKGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIGlmKCFtaW5MZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWluaW11bSBsZW5ndGggc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICttaW5MZW5ndGg7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gc2hvdWxkIGJlICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHZhbGlkYXRvck5hbWUgPSAncGF0dGVybic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIHBhdHRlcm4pIHtcbiAgICBpZighcGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIHBhdHRlcm4pIHtcbiAgICBpZighcGF0dGVybikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzcGVjaWZ5IHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuJyk7XG4gICAgfVxuICAgIFxuICAgIGlmKF8uaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJufSRgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwiY29uc3QgZGlyZWN0aXZlTmFtZSA9ICdyZXF1aXJlZCc7XG5jb25zdCB2YWxpZGF0b3JOYW1lID0gJ3JlcXVpcmVkVHJ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZihjb250cm9sLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4ge1tkaXJlY3RpdmVOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgcmVxdWlyZWRgO1xuICB9LFxuXG4gIGRpcmVjdGl2ZU5hbWUsXG5cbiAgdmFsaWRhdG9yTmFtZSxcbiAgXG4gIGNoZWNrYm94OiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdyZXF1aXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighY29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIHJlcXVpcmVkYDtcbiAgfSxcblxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQvcmVxdWlyZWQudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHZhbGlkYXRvck5hbWUgPSAndW5pcXVlQ2hlY2snO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBjb25maWdzLCBiYXNlQ29uZmlncywgc2V0dGluZ3MpIHtcbiAgICBsZXQge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSA9IGNvbmZpZ3M7XG4gICAgbGV0IHt2YWx1ZX0gPSBjb250cm9sO1xuXG4gICAgaWYoaWdub3JlQ2FzZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBcbiAgICBpZighdmFsdWUgfHwgaWdub3JlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcGFyYW1zID0ge1tmaWVsZE5hbWVdOiB2YWx1ZX07XG4gICAgICBcbiAgICAgIGNvbnRyb2wuaHR0cC5nZXQocGF0aCwge3BhcmFtc30pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgcmVzb2x2ZShkYXRhLmxlbmd0aCA/IHtbdmFsaWRhdG9yTmFtZV06IHRydWV9IDogbnVsbCk7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIGNvbmZpZ3MsIGJhc2VDb25maWdzKSB7XG4gICAgaWYoIV8uaXNQbGFpbk9iamVjdChjb25maWdzKSkge1xuICAgICAgY29uZmlncyA9IHtwYXRoOiBjb25maWdzfTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHtmaWVsZE5hbWUsIGlnbm9yZSwgaWdub3JlQ2FzZSwgcGF0aH0gPSBjb25maWdzO1xuICAgIFxuICAgIGlmKGJhc2VDb25maWdzKSB7XG4gICAgICB2YXIge2Jhc2VVcmx9ID0gYmFzZUNvbmZpZ3M7XG4gICAgfVxuICAgIFxuICAgIGlmKCFmaWVsZE5hbWUpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGNvbnRyb2wuY29udHJvbE5hbWU7XG4gICAgfVxuICAgIFxuICAgIGlmKCFpZ25vcmUpIHtcbiAgICAgIGlnbm9yZSA9IFtdO1xuICAgIH0gZWxzZSBpZighXy5pc0FycmF5KGlnbm9yZSkpIHtcbiAgICAgIGlnbm9yZSA9IFtpZ25vcmVdO1xuICAgIH1cbiAgICBcbiAgICBpZihfLmlzVW5kZWZpbmVkKGlnbm9yZUNhc2UpKSB7XG4gICAgICBpZ25vcmVDYXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYoaWdub3JlQ2FzZSkge1xuICAgICAgaWdub3JlID0gaWdub3JlLm1hcChpZ25vcmUgPT4gKGlnbm9yZSArICcnKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgXG4gICAgaWYoYmFzZVVybCkge1xuICAgICAgcGF0aCA9IGJhc2VVcmwgKyBwYXRoO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gXy5leHRlbmQoY29uZmlncywge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSk7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgbGV0IHtjb250cm9sTmFtZVByb3Blcn0gPSBjb250cm9sO1xuICAgIHJldHVybiBgVmFsdWUgcHJvdmlkZWQgZm9yICR7Y29udHJvbE5hbWVQcm9wZXJ9IGZpZWxkIGFscmVhZHkgZXhpc3RzYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWUsXG4gIFxuICBhc3luYzogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay91bmlxdWUtY2hlY2sudHMiLCJpbXBvcnQgZGVwc1ZhbGlkYXRvciAgICAgICAgIGZyb20gJy4vZGVwcy9kZXBzJztcbmltcG9ydCBlbWFpbFZhbGlkYXRvciAgICAgICAgZnJvbSAnLi9lbWFpbC9lbWFpbCc7XG5pbXBvcnQgZW1haWxHb3ZWYWxpZGF0b3IgICAgIGZyb20gJy4vZW1haWwtZ292L2VtYWlsLWdvdic7XG5pbXBvcnQgZXF1YWxzVG9WYWxpZGF0b3IgICAgIGZyb20gJy4vZXF1YWxzLXRvL2VxdWFscy10byc7XG5pbXBvcnQgbWF4TGVuZ3RoVmFsaWRhdG9yICAgIGZyb20gJy4vbWF4LWxlbmd0aC9tYXgtbGVuZ3RoJztcbmltcG9ydCBtaW5MZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9taW4tbGVuZ3RoL21pbi1sZW5ndGgnO1xuaW1wb3J0IHBhdHRlcm5WYWxpZGF0b3IgICAgICBmcm9tICcuL3BhdHRlcm4vcGF0dGVybic7XG5pbXBvcnQgcmVxdWlyZWRWYWxpZGF0b3IgICAgIGZyb20gJy4vcmVxdWlyZWQvcmVxdWlyZWQnO1xuaW1wb3J0IHJlcXVpcmVkVHJ1ZVZhbGlkYXRvciBmcm9tICcuL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZSc7XG5pbXBvcnQgdW5pcXVlQ2hlY2tWYWxpZGF0b3IgIGZyb20gJy4vdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjayc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgZGVwc1ZhbGlkYXRvcixcbiAgcmVxdWlyZWRWYWxpZGF0b3IsXG4gIG1pbkxlbmd0aFZhbGlkYXRvcixcbiAgbWF4TGVuZ3RoVmFsaWRhdG9yLFxuICBwYXR0ZXJuVmFsaWRhdG9yLFxuICBlbWFpbFZhbGlkYXRvcixcbiAgZW1haWxHb3ZWYWxpZGF0b3IsXG4gIGVxdWFsc1RvVmFsaWRhdG9yLFxuICByZXF1aXJlZFRydWVWYWxpZGF0b3IsXG4gIHVuaXF1ZUNoZWNrVmFsaWRhdG9yXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyIsImV4cG9ydCBkZWZhdWx0IChuYW1lLCBjaGVja2JveCkgPT4ge1xuICBsZXQgY2hlY2tib3hUeXBlID0gJ1t0eXBlPWNoZWNrYm94XSc7XG4gIGxldCBjb250cm9sVHlwZXMgPSBbJ2Zvcm1Db250cm9sTmFtZScsICdmb3JtQ29udHJvbCcsICduZ01vZGVsJ11cbiAgY2hlY2tib3ggPSBjaGVja2JveCA/IGBpbnB1dCR7Y2hlY2tib3hUeXBlfWAgOiBgOm5vdCgke2NoZWNrYm94VHlwZX0pYDtcbiAgXG4gIHJldHVybiBjb250cm9sVHlwZXMucmVkdWNlKChzZWxlY3RvciwgY29udHJvbFR5cGUpID0+IHtcbiAgICBzZWxlY3Rvci5wdXNoKGAke2NoZWNrYm94fVske25hbWV9XVske2NvbnRyb2xUeXBlfV1gKTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH0sIFtdKS5qb2luKCcsJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50UGx1c30gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZy1odHRwLXBsdXMnO1xuaW1wb3J0IHtOR19WQUxJREFUT1JTLCBOR19BU1lOQ19WQUxJREFUT1JTfSAgICAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgc2VsZWN0b3JBc3NlbWJsZXIgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXInO1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0b3JzID0+IHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHZhbGlkYXRvckNvbmZpZ3VyYXRvciA9PiB7XG4gICAgbGV0IHthc3luYzogX2FzeW5jLCBjaGVja2JveCwgdmFsaWRhdG9yTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcjtcbiAgICBsZXQge2RpcmVjdGl2ZU5hbWVQcmVmaXhlZH0gPSB2YWxpZGF0b3JDb25maWd1cmF0b3I7XG4gICAgbGV0IGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmVOYW1lUHJlZml4ZWQgfHwgdmFsaWRhdG9yTmFtZVByZWZpeGVkO1xuICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yQXNzZW1ibGVyKGRpcmVjdGl2ZU5hbWUsIGNoZWNrYm94KTtcblxuICAgIGxldCBwcm92aWRlcnMgPSBbe1xuICAgICAgcHJvdmlkZTogX2FzeW5jID8gTkdfQVNZTkNfVkFMSURBVE9SUyA6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcyksXG4gICAgICBtdWx0aTogdHJ1ZSAgICAgICAgXG4gICAgfV07XG4gICAgXG4gICAgQERpcmVjdGl2ZSh7c2VsZWN0b3IsIHByb3ZpZGVyc30pIGNsYXNzIFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzIHtcbiAgICAgIHByaXZhdGUgdmFsaWRhdG9yO1xuICAgICAgcHJpdmF0ZSBvbkNoYW5nZTtcbiAgICAgIHByaXZhdGUgY29udHJvbDtcbiAgICAgIEBJbnB1dChgJHtkaXJlY3RpdmVOYW1lfWApIHByaXZhdGUgY29uZmlncztcbiAgICBcbiAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFBsdXMpIHt9XG4gICAgXG4gICAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIGlmKCdjb25maWdzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgaWYoIXRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIHZhbGlkYXRlKGNvbnRyb2w/KSB7XG4gICAgICAgIGxldCBlcnJvciA9IHtbZGlyZWN0aXZlTmFtZV06IHRydWV9O1xuICAgICAgICBcbiAgICAgICAgaWYoX2FzeW5jKSB7XG4gICAgICAgICAgXy5leHRlbmQoY29udHJvbCwge2h0dHA6IHRoaXMuaHR0cH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICAgICBjb250cm9sLCBcbiAgICAgICAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIF9hc3luYyA/IFByb21pc2UucmVzb2x2ZShlcnJvcikgOiBlcnJvcjsgXG4gICAgICB9XG4gICAgXG4gICAgICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjsgXG4gICAgICB9XG4gICAgXG4gICAgICBwcml2YXRlIGNyZWF0ZVZhbGlkYXRvcigpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3JDb25maWd1cmF0b3IodGhpcy5jb250cm9sLCB0aGlzLmNvbmZpZ3MsIHRoaXMuZWwpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcztcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRQbHVzTW9kdWxlfSBmcm9tICduZy1odHRwLXBsdXMnO1xuaW1wb3J0IHByZWZpeGVyICAgICAgICAgICAgICAgZnJvbSAnLi4vX2xpYi9wcmVmaXhlcic7XG5pbXBvcnQgdmFsaWRhdG9yQ29uZmlndXJhdG9yICBmcm9tICcuLi92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3InO1xuaW1wb3J0IGRpcmVjdGl2ZXNHZW5lcmF0b3IgICAgZnJvbSAnLi4vZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRvcnMpID0+IHtcbiAgdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMubWFwKHZhbGlkYXRvciA9PiB7XG4gICAgbGV0IHt2YWxpZGF0b3JOYW1lLCBkaXJlY3RpdmVOYW1lfSA9IHZhbGlkYXRvcjtcbiAgICBsZXQgdmFsaWRhdG9yTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIHZhbGlkYXRvck5hbWUpO1xuICAgIGxldCBkaXJlY3RpdmVOYW1lUHJlZml4ZWQgPSBwcmVmaXhlcihzZXR0aW5ncywgZGlyZWN0aXZlTmFtZSk7XG4gICAgXy5leHRlbmQodmFsaWRhdG9yLCB7dmFsaWRhdG9yTmFtZVByZWZpeGVkLCBkaXJlY3RpdmVOYW1lUHJlZml4ZWR9KTtcbiAgICByZXR1cm4gdmFsaWRhdG9yQ29uZmlndXJhdG9yKHNldHRpbmdzLCB2YWxpZGF0b3IpO1xuICB9KTtcbiAgXG4gIGxldCBkaXJlY3RpdmVzID0gZGlyZWN0aXZlc0dlbmVyYXRvcih2YWxpZGF0b3JzKTtcblxuICBATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtIdHRwQ2xpZW50UGx1c01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBkaXJlY3RpdmVzLCBcbiAgICBleHBvcnRzOiBkaXJlY3RpdmVzXG4gIH0pIGNsYXNzIFZhbGlkYXRvck1vZHVsZSB7fVxuICBcbiAgcmV0dXJuIFZhbGlkYXRvck1vZHVsZTsgICAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbmFtZUFzc2lnbmVyICAgICBmcm9tICcuL25hbWUtYXNzaWduZXIvbmFtZS1hc3NpZ25lcic7XG5pbXBvcnQgVmFsaWRhdGlvblN0YXRlciBmcm9tICcuLi8uLi8uLi9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBlbCkgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIFxuICBpZighdmFsaWRpZnkpIHtcbiAgICBlbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbmFtZUFzc2lnbmVyKGNvbnRyb2wpO1xuICAgIFxuICAgIHZhbGlkaWZ5ID0ge1xuICAgICAgZWxlbWVudHM6IHt9LFxuICAgICAgZXJyb3JzOiB7fSxcbiAgICAgIHZhbGlkYXRpb25TdGF0ZXI6IG5ldyBWYWxpZGF0aW9uU3RhdGVyKHNldHRpbmdzLCBjb250cm9sKVxuICAgIH07XG4gICAgXG4gICAgXy5leHRlbmQoY29udHJvbCwge3ZhbGlkaWZ5LCBlbCwgJGVsOiAkKGVsKX0pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL2RhdGEtaW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xzfSA9IGNvbnRyb2wuX3BhcmVudDtcbiAgbGV0IGNvbnRyb2xOYW1lcyA9IF8ua2V5cyhjb250cm9scyk7XG4gIGZvcihsZXQgY29udHJvbE5hbWUgb2YgY29udHJvbE5hbWVzKSB7XG4gICAgaWYoY29udHJvbHNbY29udHJvbE5hbWVdID09PSBjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbE5hbWU7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbGliL25hbWUtYWNjZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbmFtZUFjY2Vzc29yIGZyb20gJy4vbGliL25hbWUtYWNjZXNzb3InO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBcbiAgaWYoIWNvbnRyb2xOYW1lKSB7XG4gICAgY29udHJvbE5hbWUgPSBuYW1lQWNjZXNzb3IoY29udHJvbCk7XG4gICAgXy5leHRlbmQoY29udHJvbCwge1xuICAgICAgY29udHJvbE5hbWUsXG4gICAgICBjb250cm9sTmFtZVByb3BlcjogXy51cHBlckZpcnN0KF8ubG93ZXJDYXNlKGNvbnRyb2xOYW1lKSlcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL25hbWUtYXNzaWduZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lSZXF1ZXN0c30gZnJvbSAnLi4vLi4vLi4vX2xpYi92YXJzJztcbmltcG9ydCBkZXBlbmRlbnRzU2V0dGVyICAgICBmcm9tICcuLi8uLi8uLi9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge19wYXJlbnQsIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCBwYXJlbnRSZWNvcmRzID0gZGVwZW5kZW5jeVJlcXVlc3RzLmdldChfcGFyZW50KTtcbiAgXG4gIGlmKHBhcmVudFJlY29yZHMpIHtcbiAgICBsZXQgZGVwZW5kZW50UmVjb3JkcyA9IHBhcmVudFJlY29yZHNbY29udHJvbE5hbWVdO1xuXG4gICAgaWYoZGVwZW5kZW50UmVjb3Jkcykge1xuICAgICAgZGVwZW5kZW50c1NldHRlcihjb250cm9sLCBkZXBlbmRlbnRSZWNvcmRzKTtcbiAgICAgIGRlbGV0ZSBwYXJlbnRSZWNvcmRzW2NvbnRyb2xOYW1lXTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RlcGVuZGVudHMtcmVnaXN0cmFyL2RlcGVuZGVudHMtcmVnaXN0cmFyLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc0lkQXNzaWduZXIgICAgICAgICBmcm9tICcuLi8uLi9fbGliL2NsYXNzLWlkLWFzc2lnbmVyJztcbmltcG9ydCBjb250YWluZXJBZGRlciAgICAgICAgICBmcm9tICcuLi9fbGliL2NvbnRhaW5lci1hZGRlcic7XG5pbXBvcnQgQXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIgZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7dmFsaWRpZnksIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNzID0ge30sIGVsZW1lbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIXZhbGlkYXRvckRlY2xhcmF0aW9uLmFzeW5jIHx8ICFfLmlzRW1wdHkoYXN5bmNzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHthc3luY1N0YXR1c0hpZGVDbGFzcywgc2VsZWN0b3JzfSA9IHNldHRpbmdzO1xuICBsZXQge2FzeW5jU3RhdHVzQ29udGFpbmVyfSA9IHNlbGVjdG9ycztcbiAgbGV0IHskZWwsICRlbENvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgbGV0ICRhc3luY3NDb250YWluZXIgPSAkKCc8ZGl2Lz4nKTtcbiAgbGV0ICRwZW5kaW5nID0gJCgnPGRpdi8+Jyk7XG4gIGxldCAkc3VjY2VzcyA9ICQoJzxkaXYvPicpO1xuXG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGFzeW5jc0NvbnRhaW5lciwgJ2FzeW5jcy1jb250YWluZXInLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJHBlbmRpbmcsICdhc3luYy1wZW5kaW5nJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRzdWNjZXNzLCAnYXN5bmMtc3VjY2VzcycsIGNvbnRyb2xOYW1lKTtcbiAgXG4gICRhc3luY3NDb250YWluZXIuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkcGVuZGluZy5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRzdWNjZXNzLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJGFzeW5jc0NvbnRhaW5lci5hcHBlbmQoJHBlbmRpbmcpLmFwcGVuZCgkc3VjY2Vzcyk7XG4gIFxuICBfLmV4dGVuZChhc3luY3MsIHskYXN5bmNzQ29udGFpbmVyLCAkcGVuZGluZywgJHN1Y2Nlc3N9KTtcbiAgXy5leHRlbmQodmFsaWRpZnksIHthc3luY3MsIGFzeW5jU3RhdHVzZXM6IHt9fSk7XG4gIFxuICBjb250YWluZXJBZGRlcigkZWwsICRhc3luY3NDb250YWluZXIsICRlbENvbnRhaW5lciwgYXN5bmNTdGF0dXNDb250YWluZXIpO1xuICB2YWxpZGlmeS5hc3luY1Byb2dyZXNzVmlzdWFsaXplciA9IG5ldyBBc3luY1Byb2dyZXNzVmlzdWFsaXplcihzZXR0aW5ncywgY29udHJvbCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlci50cyIsImltcG9ydCBlcnJvcnNDb250YWluZXJCdWlsZGVyIGZyb20gJy4vZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlcic7XG5pbXBvcnQgYXN5bmNDb250YWluZXJCdWlsZGVyICBmcm9tICcuL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBlcnJvcnNDb250YWluZXJCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sKTtcbiAgYXN5bmNDb250YWluZXJCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc0lkQXNzaWduZXIgZnJvbSAnLi4vLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgY29udGFpbmVyQWRkZXIgIGZyb20gJy4uL19saWIvY29udGFpbmVyLWFkZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sKSA9PiB7XG4gIGxldCB7JGVsLCB2YWxpZGlmeSwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHtlbGVtZW50c30gPSB2YWxpZGlmeTtcbiAgXG4gIGlmKCFfLmlzRW1wdHkoZWxlbWVudHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBsZXQge2VsZW1lbnRDb250YWluZXIsIGVycm9yc0NvbnRhaW5lcn0gPSBzZXR0aW5ncy5zZWxlY3RvcnM7XG4gIGxldCAkZWxDb250YWluZXIgPSBlbGVtZW50Q29udGFpbmVyID8gJGVsLmNsb3Nlc3QoZWxlbWVudENvbnRhaW5lcikgOiAkKCk7XG4gIGxldCAkZXJyb3JzQ29udGFpbmVyID0gJCgnPGRpdi8+Jyk7XG5cbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWwsICdlbCcsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWxDb250YWluZXIsICdlbC1jb250YWluZXInLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVycm9yc0NvbnRhaW5lciwgJ2Vycm9ycy1jb250YWluZXInLCBjb250cm9sTmFtZSk7XG4gIFxuICBfLmV4dGVuZChlbGVtZW50cywgeyRlbCwgJGVsQ29udGFpbmVyLCAkZXJyb3JzQ29udGFpbmVyfSk7XG4gIGNvbnRhaW5lckFkZGVyKCRlbCwgJGVycm9yc0NvbnRhaW5lciwgJGVsQ29udGFpbmVyLCBlcnJvcnNDb250YWluZXIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsImV4cG9ydCBkZWZhdWx0IChlcnJvck1lc3NhZ2UsIHByZWZpeCkgPT4ge1xuICBsZXQgZ2VuZXJhbENsYXNzID0gcHJlZml4ICsgJy1lcnJvci13b3JkJztcbiAgXG4gIHJldHVybiBlcnJvck1lc3NhZ2Uuc3BsaXQoL1xccysvKS5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgbGV0IHNwZWNpZmljQ2xhc3MgPSBnZW5lcmFsQ2xhc3MgKyAnLScgKyBpbmRleDtcbiAgICByZXR1cm4gYDxzcGFuIGNsYXNzID0gXCIke2dlbmVyYWxDbGFzc30gJHtzcGVjaWZpY0NsYXNzfVwiPiR7d29yZH08L3NwYW4+YDtcbiAgfSkuam9pbignICcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL19saWIvc3Bhbm5pZmllci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc0lkQXNzaWduZXIgZnJvbSAnLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgc3Bhbm5pZmllciAgICAgIGZyb20gJy4vX2xpYi9zcGFubmlmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkYXRvck5hbWUsIHZhbGlkYXRvck5hbWVQcmVmaXhlZCwgYXN5bmM6IF9hc3luY30gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHttZXNzYWdlcn0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHtlbGVtZW50cywgZXJyb3JzfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gIGxldCBiYXNlRXJyb3JDb25maWdzID0geyRlbDogJCgpLCBfYXN5bmMsIHZhbGlkYXRvck5hbWUsIGNvbnRyb2x9O1xuICBcbiAgaWYoIW1lc3NhZ2VyKSB7XG4gICAgcmV0dXJuIGVycm9yc1t2YWxpZGF0b3JOYW1lXSA9IGJhc2VFcnJvckNvbmZpZ3M7XG4gIH1cbiAgXG4gIGxldCBlcnJvckNvbmZpZ3MgPSBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gfHwgYmFzZUVycm9yQ29uZmlncztcbiAgbGV0IHskZWx9ID0gZXJyb3JDb25maWdzO1xuICBsZXQge3ZhbGlkYXRvcjogdmFsaWRhdG9yQ29uZmlncywgbWVzc2FnZXI6IG1lc3NhZ2VyQ29uZmlncywgYmFzZUNvbmZpZ3N9ID0gY29uZmlncztcbiAgbGV0IHtlcnJvck1lc3NhZ2VDbGFzc2VzLCBwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCB7JGVycm9yc0NvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgbGV0IGVycm9yTWVzc2FnZXIgPSBfLmlzRnVuY3Rpb24obWVzc2FnZXIpID8gbWVzc2FnZXIgOiAoKSA9PiBtZXNzYWdlcjtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZXIoY29udHJvbCwgdmFsaWRhdG9yQ29uZmlncywgbWVzc2FnZXJDb25maWdzLCBiYXNlQ29uZmlncyk7XG4gIGVycm9yTWVzc2FnZSA9IHNwYW5uaWZpZXIoZXJyb3JNZXNzYWdlLCBwcmVmaXgpO1xuICBcbiAgaWYoISRlbC5sZW5ndGgpIHtcbiAgICBsZXQgc3luY0FzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LWAgKyAoX2FzeW5jID8gJ2FzeW5jJyA6ICdzeW5jJyk7XG4gICAgJGVsID0gJCgnPGRpdi8+Jyk7XG4gICAgJGVsLmFkZENsYXNzKHN5bmNBc3luY0NsYXNzKTtcbiAgICAkZXJyb3JzQ29udGFpbmVyLmFwcGVuZCgkZWwpO1xuICAgIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsLCAnZXJyb3InLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBlcnJvckNvbmZpZ3MgPSBfLmV4dGVuZChlcnJvckNvbmZpZ3MsIHskZWx9KTtcbiAgICBcbiAgICBpZihlcnJvck1lc3NhZ2VDbGFzc2VzICYmIGVycm9yTWVzc2FnZUNsYXNzZXMuaW5pdGlhbCkge1xuICAgICAgJGVsLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMuaW5pdGlhbCk7XG4gICAgfVxuICAgIFxuICAgIGlmKF9hc3luYykge1xuICAgICAgZXJyb3JDb25maWdzLnJlcXVlc3RzID0ge307XG4gICAgfVxuICAgIFxuICAgIGVycm9yc1t2YWxpZGF0b3JOYW1lXSA9IGVycm9yQ29uZmlncztcbiAgfVxuXG4gICRlbC5odG1sKGVycm9yTWVzc2FnZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7cHJlcHJvY2Vzc29yfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBcbiAgaWYoIV8uaXNQbGFpbk9iamVjdChjb25maWdzKSkge1xuICAgIGNvbmZpZ3MgPSB7dmFsaWRhdG9yOiBjb25maWdzfTtcbiAgfVxuICBcbiAgaWYocHJlcHJvY2Vzc29yKSB7XG4gICAgbGV0IHt2YWxpZGF0b3JDb25maWdzfSA9IHNldHRpbmdzO1xuICAgIFxuICAgIGlmKHZhbGlkYXRvckNvbmZpZ3MpIHtcbiAgICAgIGxldCB7dmFsaWRhdG9yTmFtZX0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgICAgIHZhciBiYXNlQ29uZmlncyA9IHZhbGlkYXRvckNvbmZpZ3NbdmFsaWRhdG9yTmFtZV07XG4gICAgICBfLmV4dGVuZChjb25maWdzLCB7YmFzZUNvbmZpZ3N9KTtcbiAgICB9XG5cbiAgICBjb25maWdzLnZhbGlkYXRvciA9IHByZXByb2Nlc3Nvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvciwgYmFzZUNvbmZpZ3MpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ3M7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIgZnJvbSAnLi4vX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyJztcbmltcG9ydCBpbml0aWFsRGF0YVNldHRlciAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL2luaXRpYWwtZGF0YS1zZXR0ZXIvaW5pdGlhbC1kYXRhLXNldHRlcic7XG5pbXBvcnQgcmVxdWVzdHNOdWxsaWZpZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9yZXF1ZXN0cy1udWxsaWZpZXIvcmVxdWVzdHMtbnVsbGlmaWVyJztcbmltcG9ydCBpbml0aWFsVmlzdWFsaXplciAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXInO1xuaW1wb3J0IGZpbmFsRGF0YVNldHRlciAgICAgICAgICAgIGZyb20gJy4vZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyJztcbmltcG9ydCBmaW5hbFZpc3VhbGl6ZXIgICAgICAgICAgICBmcm9tICcuL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGlmKGNvbnRyb2wudmFsaWRWYWx1ZSA9PT0gY29udHJvbC52YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSAgIFxuICBcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQsIHZhbGlkYXRvcn0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLCBlcnJvcnMsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIGxldCBlcnJvckNvbmZpZ3MgPSBlcnJvcnNbdmFsaWRhdG9yTmFtZV07XG4gIGxldCB2YWxpZGF0aW9uSWQgPSBfLnVuaXF1ZUlkKCk7XG5cbiAgaWYoY29udHJvbC5pbnZhbGlkVmFsdWUgPT09IGNvbnRyb2wudmFsdWUpIHtcbiAgICBsZXQgZXJyb3IgPSB7W3ZhbGlkYXRvck5hbWVQcmVmaXhlZF06IHRydWV9O1xuICAgIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIGVycm9yKS52aXN1YWxpemUoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVycm9yKTtcbiAgfVxuICBcbiAgaW5pdGlhbERhdGFTZXR0ZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSk7XG4gIHJlcXVlc3RzTnVsbGlmaWVyKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25JZCk7XG4gIGluaXRpYWxWaXN1YWxpemVyKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpO1xuICBcbiAgY2xlYXJUaW1lb3V0KGVycm9yQ29uZmlncy5hc3luY0RlYm91bmNlVGltZW91dCk7XG4gIFxuICBlcnJvckNvbmZpZ3MuYXN5bmNEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZih2YWxpZGlmeS5zeW5jKSB7XG4gICAgICByZXR1cm4gYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuY29udGFpbmVyKGZhbHNlKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIucGVuZGluZyh0cnVlKTtcbiAgICBcbiAgICB2YWxpZGF0b3IoY29udHJvbCwgY29uZmlncy52YWxpZGF0b3IsIGNvbmZpZ3MuYmFzZUNvbmZpZ3MpLnRoZW4odmFsaWRhdGlvblN0YXR1cyA9PiB7XG4gICAgICBpZihlcnJvckNvbmZpZ3MucmVxdWVzdHNbdmFsaWRhdGlvbklkXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhbGlkYXRpb25TdGF0dXMgPSB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplcihzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cyk7XG4gICAgICBmaW5hbERhdGFTZXR0ZXIoY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24sIHZhbGlkYXRpb25TdGF0dXMpO1xuICAgICAgZmluYWxWaXN1YWxpemVyKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKTsgICAgICBcbiAgICB9KTtcbiAgfSwgc2V0dGluZ3MuYXN5bmNEZWJvdW5jZVRpbWUpO1xuICBcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7W3ZhbGlkYXRvck5hbWVQcmVmaXhlZF06IHRydWV9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbiwgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBsZXQge2Vycm9ycywgdmFsdWUsIHZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNTdGF0dXNlcywgZXJyb3JzOiBfZXJyb3JzfSA9IHZhbGlkaWZ5O1xuICBsZXQge3ZhbGlkYXRvck5hbWUsIHZhbGlkYXRvck5hbWVQcmVmaXhlZH0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgXG4gIF9lcnJvcnNbdmFsaWRhdG9yTmFtZV0ucmVxdWVzdHMgPSB7fTtcbiAgdmFsaWRpZnkuc3luYyA9IGZhbHNlO1xuICBhc3luY1N0YXR1c2VzW3ZhbGlkYXRvck5hbWVdID0gZmFsc2U7XG4gIFxuICBpZighdmFsaWRhdGlvblN0YXR1cykge1xuICAgIGVycm9ycyA9IF8ub21pdChlcnJvcnMsIFt2YWxpZGF0b3JOYW1lUHJlZml4ZWRdKTtcbiAgfVxuICBcbiAgXy5leHRlbmQoZXJyb3JzLCB2YWxpZGF0aW9uU3RhdHVzKTtcbiAgXG4gIGlmKF8uaXNFbXB0eShlcnJvcnMpKSB7XG4gICAgY29udHJvbC52YWxpZFZhbHVlID0gdmFsdWU7XG4gICAgZXJyb3JzID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgY29udHJvbC5pbnZhbGlkVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBcbiAgY29udHJvbC5zZXRFcnJvcnMoZXJyb3JzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtZGF0YS1zZXR0ZXIvZmluYWwtZGF0YS1zZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jU3RhdHVzZXMgPT4ge1xuICByZXR1cm4gXy5yZWR1Y2UoYXN5bmNTdGF0dXNlcywgKGNvdW50LCBzdGF0dXMpID0+IHtcbiAgICByZXR1cm4gY291bnQgKz0gK3N0YXR1cztcbiAgfSwgMCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvX2xpYi9hY3RpdmUtYXN5bmNzLWNvdW50ZXIudHMiLCJpbXBvcnQgYWN0aXZlQXN5bmNzQ291bnRlciBmcm9tICcuL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1N0YXR1c2VzLCBhc3luY1Byb2dyZXNzVmlzdWFsaXplciwgdmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgXG4gIGlmKCFhY3RpdmVBc3luY3NDb3VudGVyKGFzeW5jU3RhdHVzZXMpKSB7XG4gICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIucGVuZGluZyhmYWxzZSk7XG4gICAgXG4gICAgaWYoIXZhbGlkYXRpb25TdGF0dXMgJiYgY29udHJvbC52YWxpZCkge1xuICAgICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuc3VjY2Vzcyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5zdWNjZXNzKGZhbHNlKS5jb250YWluZXIoZmFsc2UpO1xuICAgICAgfSwgc2V0dGluZ3MuYXN5bmNTdWNjZXNzTWVzc2FnZUR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbiAgXG4gIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpLnVwZGF0ZURlcGVuZGVudHMoKS52aXN1YWxpemUoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9maW5hbC12aXN1YWxpemVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuXG4gIGNvbnRyb2wudmFsaWRWYWx1ZSA9IGNvbnRyb2wuaW52YWxpZFZhbHVlID0gbnVsbDtcbiAgdmFsaWRpZnkuYXN5bmNTdGF0dXNlc1t2YWxpZGF0b3JOYW1lXSA9IHRydWU7XG4gIHZhbGlkaWZ5LnN5bmMgPSBmYWxzZTsgIFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtZGF0YS1zZXR0ZXIvaW5pdGlhbC1kYXRhLXNldHRlci50cyIsImV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lKSA9PiB7XG4gIGxldCB7YXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuY29udGFpbmVyKHRydWUpLnN1Y2Nlc3MoZmFsc2UpO1xuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBudWxsKS52aXN1YWxpemUoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvbklkKSA9PiB7XG4gIGxldCB7cmVxdWVzdHN9ID0gY29udHJvbC52YWxpZGlmeS5lcnJvcnNbdmFsaWRhdG9yTmFtZV07XG5cbiAgXy5lYWNoKHJlcXVlc3RzLCAocmVxdWVzdCwga2V5KSA9PiB7XG4gICAgcmVxdWVzdHNba2V5XSA9IHRydWU7XG4gIH0pO1xuICBcbiAgcmVxdWVzdHNbdmFsaWRhdGlvbklkXSA9IGZhbHNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXIudHMiLCJpbXBvcnQgdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIgZnJvbSAnLi4vX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7dmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3IsIHZhbGlkYXRvck5hbWV9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB2YWxpZGF0aW9uU3RhdHVzID0gdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKTtcbiAgXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICB2YWxpZGlmeS5zeW5jID0gdHJ1ZTtcbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xuICByZXR1cm4gdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3IudHMiLCJpbXBvcnQgc3luY1ZhbGlkYXRvciAgZnJvbSAnLi9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvcic7XG5pbXBvcnQgYXN5bmNWYWxpZGF0b3IgZnJvbSAnLi9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmKHZhbGlkYXRvckRlY2xhcmF0aW9uLmFzeW5jKSB7XG4gICAgICByZXR1cm4gYXN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRhdGFJbml0aWFsaXplciAgICAgZnJvbSAnLi9kYXRhLWluaXRpYWxpemVyL2RhdGEtaW5pdGlhbGl6ZXInO1xuaW1wb3J0IGRlcGVuZGVudHNSZWdpc3RyYXIgZnJvbSAnLi9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgICAgICBmcm9tICcuL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3InO1xuaW1wb3J0IGVsZW1lbnRzSW5pdGlhbGl6ZXIgZnJvbSAnLi9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplcic7XG5pbXBvcnQgZXJyb3JHZW5lcmF0b3IgICAgICBmcm9tICcuL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3InO1xuaW1wb3J0IHZhbGlkYXRvckJ1aWxkZXIgICAgZnJvbSAnLi92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IGRhdGFOYW1lcyA9IFsnYXN5bmMnLCAnY2hlY2tib3gnLCAndmFsaWRhdG9yTmFtZScsICdkaXJlY3RpdmVOYW1lUHJlZml4ZWQnXTtcbiAgZGF0YU5hbWVzLnB1c2goJ3ZhbGlkYXRvck5hbWVQcmVmaXhlZCcsICdtZXNzYWdlcicpO1xuICBsZXQgc3VwcGxlbWVudGFsRGF0YSA9IF8ucGljayh2YWxpZGF0b3JEZWNsYXJhdGlvbiwgZGF0YU5hbWVzKTtcbiAgbGV0IGNvbmZpZ3VyYXRvciA9IChjb250cm9sLCBjb25maWdzLCBlbCkgPT4ge1xuICAgIGRhdGFJbml0aWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgZWwpO1xuICAgIGRlcGVuZGVudHNSZWdpc3RyYXIoY29udHJvbCk7XG4gICAgY29uZmlncyA9IHByZXByb2Nlc3NvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIGVsZW1lbnRzSW5pdGlhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICBlcnJvckdlbmVyYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIHJldHVybiB2YWxpZGF0b3JCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIF8uZXh0ZW5kKGNvbmZpZ3VyYXRvciwgc3VwcGxlbWVudGFsRGF0YSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzY3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJmb3Jtc1wiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiYW1kXCI6XCJAYW5ndWxhci9mb3Jtc1wifVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5nVmFsaWRpZmllciBmcm9tICcuL3ZhbGlkaWZpZXIvdmFsaWRpZmllcic7XG5cbmV4cG9ydCB7bmdWYWxpZGlmaWVyfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==