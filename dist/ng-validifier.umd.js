(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("jquery"), require("ng-http-client-plus"), require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "jquery", "ng-http-client-plus", "@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng-validifier"] = factory(require("lodash"), require("jquery"), require("ng-http-client-plus"), require("@angular/core"), require("@angular/forms"));
	else
		root["ng-validifier"] = factory(root["_"], root["$"], root["ngHttpClientPlus"], root["ng"]["core"], root["ng"]["forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_71__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validatorName; });
var validatorName = 'uniqueCheck';



/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_prefixer__ = __webpack_require__(7);


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
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_vars__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_validators__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_generator_module_generator__ = __webpack_require__(50);




/* harmony default export */ __webpack_exports__["a"] = function (settings, validators) {
    if (validators === void 0) { validators = []; }
    settings = __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"]({}, __WEBPACK_IMPORTED_MODULE_1__lib_vars__["a" /* settings */], settings);
    validators.push.apply(validators, __WEBPACK_IMPORTED_MODULE_2__validators_validators__["a" /* default */]);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__module_generator_module_generator__["a" /* default */])(settings, validators);
};;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var default_1 = /** @class */ (function () {
    function default_1(settings, control) {
        var _a = control.validify, asyncs = _a.asyncs, elements = _a.elements;
        var $el = elements.$el, $elContainer = elements.$elContainer;
        var pendingClass = settings.prefix + "-async-pending";
        __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { $el: $el, $elContainer: $elContainer, asyncs: asyncs, pendingClass: pendingClass, settings: settings });
    }
    default_1.prototype.display = function (type, on) {
        var method = on ? 'removeClass' : 'addClass';
        this.asyncs['$' + type][method](this.settings.asyncStatusHideClass);
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
            this.pending(on);
            this.success(on);
        }
        this.display('asyncsContainer', on);
    };
    default_1.prototype.pending = function (on) {
        var _this = this;
        var timeout = on ? this.settings.asyncMinimumPendingDuration : 0;
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (!on) {
                    _this.classOperator('removeClass');
                }
                _this.display('pending', on);
                resolve();
            }, timeout);
        });
    };
    default_1.prototype.success = function (on) {
        this.display('success', on);
    };
    return default_1;
}());
/* harmony default export */ __webpack_exports__["a"] = default_1;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control) {
    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { settings: settings, control: control, state: {} });
};


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_dependents_aggregator__ = __webpack_require__(15);


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
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructor_constructor__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_setter_state_setter__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependents_updater_dependents_updater__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer__ = __webpack_require__(22);





__WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](__WEBPACK_IMPORTED_MODULE_1__constructor_constructor__["a" /* default */].prototype, {
    set: __WEBPACK_IMPORTED_MODULE_2__state_setter_state_setter__["a" /* default */],
    updateDependents: __WEBPACK_IMPORTED_MODULE_3__dependents_updater_dependents_updater__["a" /* default */],
    visualize: __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__constructor_constructor__["a" /* default */];


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (settings, errorConfigs) {
    var delays = settings.errorMessageDelays;
    var _async = errorConfigs._async, status = errorConfigs.status, control = errorConfigs.control;
    var dirty = control.dirty;
    return _async || !dirty ? 0 : status ? delays.invalid : delays.valid;
};;


/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_errors_counter__ = __webpack_require__(20);

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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_delay_calculator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_visualizer_errors_visualizer__ = __webpack_require__(21);



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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_validator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messager_messager__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_vars__ = __webpack_require__(5);




/* harmony default export */ __webpack_exports__["a"] = {
    validator: __WEBPACK_IMPORTED_MODULE_0__validator_validator__["a" /* default */],
    preprocessor: __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__["a" /* default */],
    messager: __WEBPACK_IMPORTED_MODULE_2__messager_messager__["a" /* default */],
    validatorName: __WEBPACK_IMPORTED_MODULE_3__lib_vars__["a" /* validatorName */]
};


/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dependency_names_stringifier__ = __webpack_require__(24);

/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    var controlNameProper = control.controlNameProper;
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_dependency_names_stringifier__["a" /* default */])(dependencyNames);
    return controlNameProper + " depends on " + dependencyNames;
};;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dependencyDependentsMap; });
var dependencyDependentsMap = new WeakMap();



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (str, char) {
    var rx = new RegExp("\\s*" + char + "\\s*");
    return str.split(rx).map(function (piece) { return piece.trim(); });
};;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_str_arrayifier__ = __webpack_require__(27);

/* harmony default export */ __webpack_exports__["a"] = function (dependencyNames, control) {
    var controlName = control.controlName;
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_str_arrayifier__["a" /* default */])(dependencyNames, ',');
    if (dependencyNames.indexOf(controlName) !== -1) {
        throw new Error("[" + controlName + "] cannot depend on itself");
    }
    return dependencyNames;
};;


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dependents_setter_dependents_setter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__ = __webpack_require__(29);


/* harmony default export */ __webpack_exports__["a"] = function (dependencyName, control) {
    var dependencyControl = control._parent.controls[dependencyName];
    if (dependencyControl) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dependents_setter_dependents_setter__["a" /* default */])(dependencyControl, control);
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__["a" /* default */])(dependencyName, control);
};;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_dependency_map_getter_form_dependency_map_getter__ = __webpack_require__(32);

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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(26);

/* harmony default export */ __webpack_exports__["a"] = function (_parent) {
    var formDependencyDependentsMap = __WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* dependencyDependentsMap */].get(_parent);
    if (!formDependencyDependentsMap) {
        __WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* dependencyDependentsMap */].set(_parent, formDependencyDependentsMap = {});
    }
    return formDependencyDependentsMap;
};;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_names_transformer_dependency_names_transformer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependent_tracker_dependent_tracker__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependent_registrar_dependent_registrar__ = __webpack_require__(30);




/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependency_names_transformer_dependency_names_transformer__["a" /* default */])(dependencyNames, control);
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](dependencyNames, function (dependencyName) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dependent_tracker_dependent_tracker__["a" /* default */])(dependencyName, control);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dependent_registrar_dependent_registrar__["a" /* default */])(dependencyName, control);
    });
    return dependencyNames;
};;


/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
        return control.controlNameProper + " must equal to " + validatorConfigs;
    },
    validatorName: validatorName
};


/***/ }),
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control) {
    var controlNameProper = control.controlNameProper;
    return "Value provided for " + controlNameProper + " field already exists";
};;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (control, configs, baseConfigs) {
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
};;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_validator__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messager_messager__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_vars__ = __webpack_require__(6);




/* harmony default export */ __webpack_exports__["a"] = {
    validator: __WEBPACK_IMPORTED_MODULE_0__validator_validator__["a" /* default */],
    preprocessor: __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__["a" /* default */],
    messager: __WEBPACK_IMPORTED_MODULE_2__messager_messager__["a" /* default */],
    validatorName: __WEBPACK_IMPORTED_MODULE_3__lib_vars__["a" /* validatorName */],
    async: true
};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(6);

/* harmony default export */ __webpack_exports__["a"] = function (control, configs) {
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
            resolve(data.length ? (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* validatorName */]] = true, _a) : null);
            var _a;
        }, function (error) {
            reject(error.message);
        });
        var _a;
    });
};;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deps_deps__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_email__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_gov_email_gov__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equals_to_equals_to__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__max_length_max_length__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__min_length_min_length__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pattern_pattern__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__required_required__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__required_true_required_true__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__unique_check_unique_check__ = __webpack_require__(45);










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
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_http_client_plus__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_http_client_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_http_client_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_selector_assembler__ = __webpack_require__(48);
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
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2_ng_http_client_plus__["HttpClientPlus"]])
            ], ValidatorDirectiveClass);
            return ValidatorDirectiveClass;
        }());
        ;
        return ValidatorDirectiveClass;
    });
};;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_http_client_plus__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_http_client_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_http_client_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_prefixer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validator_configurator_validator_configurator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_generator_directives_generator__ = __webpack_require__(49);
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
    var ValidatorModule = /** @class */ (function () {
        function ValidatorModule() {
        }
        ValidatorModule = __decorate([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
                imports: [__WEBPACK_IMPORTED_MODULE_2_ng_http_client_plus__["HttpClientPlusModule"]],
                declarations: directives,
                exports: directives
            })
        ], ValidatorModule);
        return ValidatorModule;
    }());
    return ValidatorModule;
};;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name_assigner_name_assigner__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staters_validation_stater_validation_stater__ = __webpack_require__(18);




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
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_name_accessor__ = __webpack_require__(52);


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
/* 54 */
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_container_adder__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staters_async_progress_visualizer_async_progress_visualizer__ = __webpack_require__(13);





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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_container_builder_errors_container_builder__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_container_builder_async_container_builder__ = __webpack_require__(55);


/* harmony default export */ __webpack_exports__["a"] = function (settings, control, validatorDeclaration) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors_container_builder_errors_container_builder__["a" /* default */])(settings, control);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__async_container_builder_async_container_builder__["a" /* default */])(settings, control, validatorDeclaration);
};;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_container_adder__ = __webpack_require__(8);




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
/* 58 */
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_spannifier__ = __webpack_require__(58);




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
/* 60 */
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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initializer_initial_data_setter_initial_data_setter__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initializer_requests_nullifier_requests_nullifier__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initializer_initial_visualizer_initial_visualizer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finalizer_final_data_setter_final_data_setter__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finalizer_final_visualizer_final_visualizer__ = __webpack_require__(64);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;







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
    errorConfigs.asyncDebounceTimeout = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (validify.sync) {
                        return [2 /*return*/, asyncProgressVisualizer.container(false)];
                    }
                    return [4 /*yield*/, asyncProgressVisualizer.pending(true)];
                case 1:
                    _a.sent();
                    validator(control, configs.validator, configs.baseConfigs).then(function (validationStatus) {
                        if (errorConfigs.requests[validationId]) {
                            return;
                        }
                        validationStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__["a" /* default */])(settings, validationStatus);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__finalizer_final_data_setter_final_data_setter__["a" /* default */])(control, validatorDeclaration, validationStatus);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__finalizer_final_visualizer_final_visualizer__["a" /* default */])(settings, control, validatorName, validationStatus);
                    });
                    return [2 /*return*/];
            }
        });
    }); }, settings.asyncDebounceTime);
    return Promise.resolve((_b = {}, _b[validatorNamePrefixed] = true, _b));
    var _a, _b;
};;


/***/ }),
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_active_asyncs_counter__ = __webpack_require__(63);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control, validatorName, validationStatus) {
    var validify = control.validify;
    var asyncStatuses = validify.asyncStatuses, asyncProgressVisualizer = validify.asyncProgressVisualizer, validationStater = validify.validationStater;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_active_asyncs_counter__["a" /* default */])(asyncStatuses)) {
        asyncProgressVisualizer.pending(false);
        if (!validationStatus && control.valid) {
            asyncProgressVisualizer.success(true);
            setTimeout(function () {
                asyncProgressVisualizer.success(false);
                asyncProgressVisualizer.container(false);
            }, settings.asyncSuccessMessageDuration);
        }
    }
    validationStater.set(validatorName, validationStatus).updateDependents().visualize();
};;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var validify = control.validify;
    control.validValue = control.invalidValue = null;
    validify.asyncStatuses[validatorName] = true;
    validify.sync = false;
};;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var _a = control.validify, asyncProgressVisualizer = _a.asyncProgressVisualizer, validationStater = _a.validationStater;
    asyncProgressVisualizer.container(true);
    asyncProgressVisualizer.success(false);
    validationStater.set(validatorName, null).visualize();
};;


/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_validation_status_normalizer__ = __webpack_require__(9);

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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_validator_async_validator__ = __webpack_require__(61);


/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    return function () {
        if (validatorDeclaration.async) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__async_validator_async_validator__["a" /* default */])(settings, control, configs, validatorDeclaration);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__["a" /* default */])(settings, control, configs, validatorDeclaration);
    };
};;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_initializer_data_initializer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependents_registrar_dependents_registrar__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocessor_preprocessor__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_initializer_elements_initializer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_generator_error_generator__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator_builder_validator_builder__ = __webpack_require__(69);







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
/* 71 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validifier_validifier__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ngValidifier", function() { return __WEBPACK_IMPORTED_MODULE_0__validifier_validifier__["a"]; });




/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMGVjNzFhZjlkYjYzN2Y0Y2UxNCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvX2xpYi9wcmVmaXhlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBDbGllbnRQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCIsXCJhbWRcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL3Zpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9kZXBzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvX2xpYi9zdHItYXJyYXlpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImZvcm1zXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2Zvcm1zXCJ9Iiwid2VicGFjazovLy8uL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7O0FDQUE7QUFBQSxJQUFNLGtCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFFekMsSUFBTSxRQUFRLEdBQUc7SUFDZixNQUFNLEVBQUUsR0FBRztJQUVYLFNBQVMsRUFBRTtRQUNULGdCQUFnQixFQUFFLGFBQWE7UUFDL0IsZUFBZSxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxvQkFBb0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7S0FDaEQ7SUFFRCxtQkFBbUIsRUFBRTtRQUNuQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUVELGtCQUFrQixFQUFFO1FBQ2xCLEtBQUssRUFBRSxHQUFHO1FBQ1YsT0FBTyxFQUFFLEdBQUc7S0FDYjtJQUVELGlCQUFpQixF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R0FBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDekUsa0hBQW1CLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdELHdHQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsNEdBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUM7SUFFRixNQUFNLENBQUMsOENBQVEsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRCxDQUFDLEVBQUM7Ozs7Ozs7QUN0QkYsZ0Q7Ozs7Ozs7Ozs7QUNBbUQ7QUFFN0IiLCJmaWxlIjoibmctdmFsaWRpZmllci51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJuZy1odHRwLWNsaWVudC1wbHVzXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiLCBcImpxdWVyeVwiLCBcIm5nLWh0dHAtY2xpZW50LXBsdXNcIiwgXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmctdmFsaWRpZmllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIm5nLWh0dHAtY2xpZW50LXBsdXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nLXZhbGlkaWZpZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdLCByb290W1wiJFwiXSwgcm9vdFtcIm5nSHR0cENsaWVudFBsdXNcIl0sIHJvb3RbXCJuZ1wiXVtcImNvcmVcIl0sIHJvb3RbXCJuZ1wiXVtcImZvcm1zXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNzFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwZWM3MWFmOWRiNjM3ZjRjZTE0IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZGVwZW5kZW5jeVJlcXVlc3RzID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIHByZWZpeDogJ3YnLFxuXG4gIHNlbGVjdG9yczoge1xuICAgIGVsZW1lbnRDb250YWluZXI6ICcuZm9ybS1ncm91cCcsXG4gICAgZXJyb3JzQ29udGFpbmVyOiBbJ2luc2VydEFmdGVyJywgJ2lucHV0J10sXG4gICAgYXN5bmNTdGF0dXNDb250YWluZXI6IFsnaW5zZXJ0QmVmb3JlJywgJ2lucHV0J11cbiAgfSxcbiAgXG4gIGVycm9yTWVzc2FnZUNsYXNzZXM6IHtcbiAgICBpbml0aWFsOiAnJyxcbiAgICB2YWxpZDogJycsXG4gICAgaW52YWxpZDogJydcbiAgfSxcblxuICBlcnJvck1lc3NhZ2VEZWxheXM6IHtcbiAgICB2YWxpZDogMzAwLFxuICAgIGludmFsaWQ6IDUwMFxuICB9LFxuXG4gIGFzeW5jRGVib3VuY2VUaW1lOiA1MDAsXG5cbiAgYXN5bmNTdGF0dXNIaWRlQ2xhc3M6ICdoaWRkZW4nLFxuICBcbiAgYXN5bmNTdWNjZXNzTWVzc2FnZUR1cmF0aW9uOiAxMDAwXG59O1xuXG5leHBvcnQge1xuICBkZXBlbmRlbmN5UmVxdWVzdHMsIFxuICBzZXR0aW5nc1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsICRlbCwgYmFzZUNsYXNzLCBjb250cm9sTmFtZSkgPT4ge1xuICBsZXQge3ByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IGNsYXNzZXMgPSBbYmFzZUNsYXNzLCBgJHtiYXNlQ2xhc3N9LSR7Y29udHJvbE5hbWV9YF07XG4gIGxldCBjbGFzc2VzU3RyID0gY2xhc3Nlcy5tYXAoa2xhc3MgPT4gYCR7cHJlZml4fS0ke2tsYXNzfWApLmpvaW4oJyAnKTtcbiAgJGVsLmFkZENsYXNzKGNsYXNzZXNTdHIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvX2xpYi9jbGFzcy1pZC1hc3NpZ25lci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIG5ld0RlcGVuZGVudHMpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2RlcGVuZGVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0FycmF5KG5ld0RlcGVuZGVudHMpKSB7XG4gICAgbmV3RGVwZW5kZW50cyA9IFtuZXdEZXBlbmRlbnRzXTtcbiAgfVxuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBfLnNldCh2YWxpZGlmeSwgJ2RlcGVuZGVudHMnLCBkZXBlbmRlbnRzID0gW10pO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goLi4ubmV3RGVwZW5kZW50cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdkZXBzJztcbmNvbnN0IGRlcGVuZGVuY2llc1RhYmxlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtcbiAgdmFsaWRhdG9yTmFtZSxcbiAgZGVwZW5kZW5jaWVzVGFibGVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL19saWIvdmFycy50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAndW5pcXVlQ2hlY2snO1xuXG5leHBvcnQge1xuICB2YWxpZGF0b3JOYW1lICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svX2xpYi92YXJzLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIG5hbWUpID0+IHtcbiAgbGV0IHtwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIFxuICBpZihwcmVmaXggJiYgbmFtZSkge1xuICAgIG5hbWUgPSBwcmVmaXggKyBfLnVwcGVyRmlyc3QobmFtZSk7XG4gIH1cbiAgXG4gIHJldHVybiBuYW1lO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL19saWIvcHJlZml4ZXIudHMiLCJpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkZWwsICRjb250YWluZXIsICRjb250YWluZXJDb250YWluZXIsIGluc2VydGlvblNwZWMpID0+IHtcbiAgbGV0IFthY3Rpb24sICRpbnNlcnRpb25Qb2ludF0gPSAoKCkgPT4ge1xuICAgIGlmKCEkY29udGFpbmVyQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFsnaW5zZXJ0QWZ0ZXInLCAkZWxdO1xuICAgIH1cbiAgICBcbiAgICBsZXQgW2FjdGlvbiwgYW5jaG9yXSA9IGluc2VydGlvblNwZWM7XG4gICAgbGV0ICRpbnNlcnRpb25Qb2ludCA9ICgoKSA9PiB7XG4gICAgICBpZighYW5jaG9yKSB7XG4gICAgICAgIHJldHVybiAkY29udGFpbmVyQ29udGFpbmVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gJChhbmNob3IsICRjb250YWluZXJDb250YWluZXIpO1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gW2FjdGlvbiwgJGluc2VydGlvblBvaW50XTtcbiAgfSkoKTtcbiAgXG4gICRjb250YWluZXJbYWN0aW9uXSgkaW5zZXJ0aW9uUG9pbnQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvX2xpYi9jb250YWluZXItYWRkZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuLi8uLi8uLi9fbGliL3ByZWZpeGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGlmKF8uaXNQbGFpbk9iamVjdCh2YWxpZGF0aW9uU3RhdHVzKSkge1xuICAgIGxldCBrZXkgPSBfLmtleXModmFsaWRhdGlvblN0YXR1cylbMF07XG4gICAgbGV0IHZhbHVlID0gdmFsaWRhdGlvblN0YXR1c1trZXldO1xuICAgIGtleSA9IHByZWZpeGVyKHNldHRpbmdzLCBrZXkpO1xuICAgIHZhbGlkYXRpb25TdGF0dXMgPSB7W2tleV06IHZhbHVlfTtcbiAgfVxuICBcbiAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBDbGllbnRQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCIsXCJhbWRcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge3NldHRpbmdzIGFzIG1haW5TZXR0aW5nc30gZnJvbSAnLi4vX2xpYi92YXJzJztcbmltcG9ydCBpbnRlcm5hbFZhbGlkYXRvcnMgICAgICAgICBmcm9tICcuLi92YWxpZGF0b3JzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IG1vZHVsZUdlbmVyYXRvciAgICAgICAgICAgIGZyb20gJy4vbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzID0gW10pID0+IHtcbiAgc2V0dGluZ3MgPSBfLmV4dGVuZCh7fSwgbWFpblNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIHZhbGlkYXRvcnMucHVzaCguLi5pbnRlcm5hbFZhbGlkYXRvcnMpO1xuICByZXR1cm4gbW9kdWxlR2VuZXJhdG9yKHNldHRpbmdzLCB2YWxpZGF0b3JzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHByaXZhdGUgc2V0dGluZ3M7XG4gIHByaXZhdGUgYXN5bmNzO1xuICBwcml2YXRlICRlbDtcbiAgcHJpdmF0ZSAkZWxDb250YWluZXI7XG4gIHByaXZhdGUgcGVuZGluZ0NsYXNzO1xuICBcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGNvbnRyb2wpIHtcbiAgICBsZXQge2FzeW5jcywgZWxlbWVudHN9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICAgIGxldCBwZW5kaW5nQ2xhc3MgPSBgJHtzZXR0aW5ncy5wcmVmaXh9LWFzeW5jLXBlbmRpbmdgO1xuICAgIFxuICAgIF8uZXh0ZW5kKHRoaXMsIHskZWwsICRlbENvbnRhaW5lciwgYXN5bmNzLCBwZW5kaW5nQ2xhc3MsIHNldHRpbmdzfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgZGlzcGxheSh0eXBlLCBvbikge1xuICAgIGxldCBtZXRob2QgPSBvbiA/ICdyZW1vdmVDbGFzcyc6ICdhZGRDbGFzcyc7XG4gICAgdGhpcy5hc3luY3NbJyQnICsgdHlwZV1bbWV0aG9kXSh0aGlzLnNldHRpbmdzLmFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBjbGFzc09wZXJhdG9yKG9wZXJhdGlvbikge1xuICAgIGxldCB7JGVsLCAkZWxDb250YWluZXIsIHBlbmRpbmdDbGFzc30gPSB0aGlzO1xuICAgICRlbFtvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyW29wZXJhdGlvbl0ocGVuZGluZ0NsYXNzKTtcbiAgfVxuICBcbiAgY29udGFpbmVyKG9uKSB7XG4gICAgaWYob24pIHtcbiAgICAgIHRoaXMuY2xhc3NPcGVyYXRvcignYWRkQ2xhc3MnKTsgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBlbmRpbmcob24pO1xuICAgICAgdGhpcy5zdWNjZXNzKG9uKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5kaXNwbGF5KCdhc3luY3NDb250YWluZXInLCBvbik7XG4gIH1cblxuICBwZW5kaW5nKG9uKSB7XG4gICAgbGV0IHRpbWVvdXQgPSBvbiA/IHRoaXMuc2V0dGluZ3MuYXN5bmNNaW5pbXVtUGVuZGluZ0R1cmF0aW9uIDogMDtcbiAgICBcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYoIW9uKSB7XG4gICAgICAgICAgdGhpcy5jbGFzc09wZXJhdG9yKCdyZW1vdmVDbGFzcycpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRpc3BsYXkoJ3BlbmRpbmcnLCBvbik7XG4gICAgICAgIFxuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCB0aW1lb3V0KTsgIFxuICAgIH0pO1xuICB9XG4gIFxuICBzdWNjZXNzKG9uKSB7XG4gICAgdGhpcy5kaXNwbGF5KCdzdWNjZXNzJywgb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNldHRpbmdzLCBjb250cm9sKSB7XG4gIF8uZXh0ZW5kKHRoaXMsIHtzZXR0aW5ncywgY29udHJvbCwgc3RhdGU6IHt9fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXBlbmRlbnRzQWdncmVnYXRvcihjb250cm9sLCBhbGwgPSBbXSkge1xuICBsZXQge2RlcGVuZGVudHMgPSBbXX0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cykge1xuICAgIGlmKGFsbC5pbmRleE9mKGRlcGVuZGVudCkgPT09IC0xKSB7XG4gICAgICBhbGwucHVzaChkZXBlbmRlbnQpO1xuICAgICAgZGVwZW5kZW50c0FnZ3JlZ2F0b3IoZGVwZW5kZW50LCBhbGwpO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGFsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlcGVuZGVudHNBZ2dyZWdhdG9yIGZyb20gJy4vX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHtzaWxlbnQsIGRlcGVuZGVudHMsIGNvbnRyb2x9ID0gdGhpcztcbiAgXG4gIGlmKCFzaWxlbnQpIHtcbiAgICBpZighY29udHJvbC52YWxpZGlmeS5pZ25vcmVEZXBlbmRlbnRzKSB7XG4gICAgICBkZXBlbmRlbnRzID0gZGVwZW5kZW50c0FnZ3JlZ2F0b3IoY29udHJvbCk7XG4gICAgICBmb3IobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIF8uZXh0ZW5kKGRlcGVuZGVudC52YWxpZGlmeSwge3NpbGVudDogdHJ1ZSwgaWdub3JlRGVwZW5kZW50czogdHJ1ZX0pO1xuICAgICAgICAgIGRlcGVuZGVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBfLmV4dGVuZCh0aGlzLCB7ZGVwZW5kZW50c30pO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKSB7XG4gIGxldCB7c2lsZW50LCBlcnJvcnN9ID0gdGhpcy5jb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBcbiAgXy5leHRlbmQodGhpcywge3NpbGVudCwgZGVwZW5kZW50czogdW5kZWZpbmVkfSk7XG4gIGVycm9yQ29uZmlncy5zdGF0dXMgPSB2YWxpZGF0aW9uU3RhdHVzO1xuICBcbiAgaWYoIXNpbGVudCkge1xuICAgIF8uZXh0ZW5kKHRoaXMsIHtlcnJvckNvbmZpZ3N9KTtcbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgX2NvbnN0cnVjdG9yICAgICAgZnJvbSAnLi9fY29uc3RydWN0b3IvY29uc3RydWN0b3InO1xuaW1wb3J0IHN0YXRlU2V0dGVyICAgICAgIGZyb20gJy4vc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW50c1VwZGF0ZXIgZnJvbSAnLi9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyJztcbmltcG9ydCB2aXN1YWxpemVyICAgICAgICBmcm9tICcuL3Zpc3VhbGl6ZXIvdmlzdWFsaXplcic7XG5cbl8uZXh0ZW5kKF9jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgc2V0OiBzdGF0ZVNldHRlcixcbiAgdXBkYXRlRGVwZW5kZW50czogZGVwZW5kZW50c1VwZGF0ZXIsXG4gIHZpc3VhbGl6ZTogdmlzdWFsaXplclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IF9jb25zdHJ1Y3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHtlcnJvck1lc3NhZ2VEZWxheXM6IGRlbGF5c30gPSBzZXR0aW5ncztcbiAgbGV0IHtfYXN5bmMsIHN0YXR1cywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZGlydHl9ID0gY29udHJvbDtcbiAgcmV0dXJuIF9hc3luYyB8fCAhZGlydHkgPyAwIDogc3RhdHVzID8gZGVsYXlzLmludmFsaWQgOiBkZWxheXMudmFsaWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9fbGliL2RlbGF5LWNhbGN1bGF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgJGVsKSA9PiB7XG4gIGxldCBjbGFzc2VzID0gJGVsLmF0dHIoJ2NsYXNzJyk7XG4gIFxuICBpZihjbGFzc2VzKSB7XG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIHJldHVybiBfLnJlZHVjZShjbGFzc2VzLCAoY291bnQsIGtsYXNzKSA9PiB7XG4gICAgaWYoa2xhc3Muc3RhcnRzV2l0aChgJHtzZXR0aW5ncy5wcmVmaXh9LWVycm9yYCkpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjb3VudDtcbiAgfSwgMCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9fbGliL2Vycm9ycy1jb3VudGVyLnRzIiwiaW1wb3J0IGVycm9yc0NvdW50ZXIgZnJvbSAnLi9fbGliL2Vycm9ycy1jb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCBzdGF0dXM6IHZhbGlkYXRpb25TdGF0dXN9ID0gZXJyb3JDb25maWdzO1xuICBsZXQgeyRlbDogJGVycm9yRWwsIF9hc3luYywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQge2RpcnR5LCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCAkZXJyb3JzQ29udGFpbmVyfSA9IHZhbGlkaWZ5LmVsZW1lbnRzO1xuICBsZXQgZXJyb3JDbGFzcyA9IGAke3ByZWZpeH0tZXJyb3ItJHt2YWxpZGF0b3JOYW1lfWA7XG4gIGxldCBzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LXN5bmNgO1xuICBsZXQgYXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYXN5bmNgO1xuICBcbiAgaWYoZGlydHkpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLXByaXN0aW5lJykuYWRkQ2xhc3MoJ25nLWRpcnR5Jyk7XG4gIH0gZWxzZSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKCduZy1wcmlzdGluZScpO1xuICB9XG5cbiAgaWYoX2FzeW5jKSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKHN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhzeW5jQ2xhc3MpO1xuICB9IGVsc2Uge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcyhzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKGFzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYWRkQ2xhc3Moc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhhc3luY0NsYXNzKTtcbiAgfVxuXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICAkZWwuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy12YWxpZCcpLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLXZhbGlkJykucmVtb3ZlQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy52YWxpZCk7XG4gICAgcmV0dXJuICRlcnJvckVsLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbnZhbGlkKTtcbiAgfVxuICBcbiAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmludmFsaWQpO1xuICAkZXJyb3JFbC5hZGRDbGFzcygnbmctdmFsaWQnKS5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLnZhbGlkKTtcbiAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xuICAkZWwucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG5cbiAgaWYoIWVycm9yc0NvdW50ZXIoc2V0dGluZ3MsICRlbENvbnRhaW5lcikpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcygnbmctdmFsaWQnKTtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoX2FzeW5jID8gYXN5bmNDbGFzcyA6IHN5bmNDbGFzcyk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZWxheUNhbGN1bGF0b3IgIGZyb20gJy4vX2xpYi9kZWxheS1jYWxjdWxhdG9yJztcbmltcG9ydCBlcnJvcnNWaXN1YWxpemVyIGZyb20gJy4vZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgaWYoIXRoaXMuc2lsZW50KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQge2NvbnRyb2wsIGRlcGVuZGVudHMgPSBbXSwgZXJyb3JDb25maWdzfSA9IHRoaXM7XG4gICAgICBsZXQgZGVsYXkgPSBkZWxheUNhbGN1bGF0b3IodGhpcy5zZXR0aW5ncywgZXJyb3JDb25maWdzKTtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCk7XG4gICAgICBcbiAgICAgIGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZXBlbmRlbnRzLnVuc2hpZnQoY29udHJvbCk7XG4gICAgICAgIF8uZWFjaChkZXBlbmRlbnRzLCBjb250cm9sID0+IHtcbiAgICAgICAgICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gICAgICAgICAgXG4gICAgICAgICAgXy5leHRlbmQodmFsaWRpZnksIHtzaWxlbnQ6IGZhbHNlLCBpZ25vcmVEZXBlbmRlbnRzOiBmYWxzZX0pO1xuICAgICAgICAgIF8uZWFjaCh2YWxpZGlmeS5lcnJvcnMsIF8ucGFydGlhbChlcnJvcnNWaXN1YWxpemVyLCB0aGlzLnNldHRpbmdzLCBfKSk7XG4gICAgICAgIH0pXG4gICAgICB9LCBkZWxheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvdmlzdWFsaXplci50cyIsImltcG9ydCB2YWxpZGF0b3IgICAgICAgZnJvbSAnLi92YWxpZGF0b3IvdmFsaWRhdG9yJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgZnJvbSAnLi9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yJztcbmltcG9ydCBtZXNzYWdlciAgICAgICAgZnJvbSAnLi9tZXNzYWdlci9tZXNzYWdlcic7XG5pbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IsXG4gIHByZXByb2Nlc3NvcixcbiAgbWVzc2FnZXIsXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL2RlcHMudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlcGVuZGVuY3lOYW1lcyA9PiB7XG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXMubWFwKGRlcGVuZGVuY3lOYW1lID0+IHtcbiAgICByZXR1cm4gXy51cHBlckZpcnN0KF8ubG93ZXJDYXNlKGRlcGVuZGVuY3lOYW1lKSk7XG4gIH0pLmpvaW4oJywgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXIudHMiLCJpbXBvcnQgZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIgZnJvbSAnLi9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWVQcm9wZXJ9ID0gY29udHJvbDtcbiAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIoZGVwZW5kZW5jeU5hbWVzKTtcbiAgcmV0dXJuIGAke2NvbnRyb2xOYW1lUHJvcGVyfSBkZXBlbmRzIG9uICR7ZGVwZW5kZW5jeU5hbWVzfWA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9tZXNzYWdlci50cyIsImNvbnN0IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtkZXBlbmRlbmN5RGVwZW5kZW50c01hcH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc3RyLCBjaGFyKSA9PiB7XG4gIGxldCByeCA9IG5ldyBSZWdFeHAoYFxcXFxzKiR7Y2hhcn1cXFxccypgKTtcbiAgcmV0dXJuIHN0ci5zcGxpdChyeCkubWFwKHBpZWNlID0+IHBpZWNlLnRyaW0oKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9fbGliL3N0ci1hcnJheWlmaWVyLnRzIiwiaW1wb3J0IHN0ckFycmF5aWZpZXIgZnJvbSAnLi9fbGliL3N0ci1hcnJheWlmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCkgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IHN0ckFycmF5aWZpZXIoZGVwZW5kZW5jeU5hbWVzLCAnLCcpO1xuICBpZihkZXBlbmRlbmN5TmFtZXMuaW5kZXhPZihjb250cm9sTmFtZSkgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtjb250cm9sTmFtZX1dIGNhbm5vdCBkZXBlbmQgb24gaXRzZWxmYCk7XG4gIH1cbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lSZXF1ZXN0c30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCB7X3BhcmVudH0gPSBjb250cm9sO1xuICBsZXQgZm9ybURlcGVuZGVuY3lSZXF1ZXN0cyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gICAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeVJlcXVlc3RzKSB7XG4gICAgZGVwZW5kZW5jeVJlcXVlc3RzLnNldChfcGFyZW50LCBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzID0ge30pO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHNbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lSZXF1ZXN0c1tkZXBlbmRlbmN5TmFtZV0gPSBbXTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKGNvbnRyb2wpOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci50cyIsImltcG9ydCBkZXBlbmRlbnRzU2V0dGVyICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW5jeVJlcXVlc3RSZWdpc3RyYXIgZnJvbSAnLi9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IGRlcGVuZGVuY3lDb250cm9sID0gY29udHJvbC5fcGFyZW50LmNvbnRyb2xzW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKGRlcGVuZGVuY3lDb250cm9sKSB7XG4gICAgcmV0dXJuIGRlcGVuZGVudHNTZXR0ZXIoZGVwZW5kZW5jeUNvbnRyb2wsIGNvbnRyb2wpO1xuICB9XG4gIFxuICBkZXBlbmRlbmN5UmVxdWVzdFJlZ2lzdHJhcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwiaW1wb3J0IGZvcm1EZXBlbmRlbmN5TWFwR2V0dGVyICAgZnJvbSAnLi9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQge19wYXJlbnQsIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBmb3JtRGVwZW5kZW5jeU1hcEdldHRlcihfcGFyZW50KTtcbiAgbGV0IGNvbnRyb2xEZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2NvbnRyb2xOYW1lXTtcbiAgXG4gIGlmKChjb250cm9sRGVwZW5kZW50cyB8fCBbXSkuaW5kZXhPZihkZXBlbmRlbmN5TmFtZSkgPiAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgWyR7Y29udHJvbE5hbWV9XSBhbmQgWyR7ZGVwZW5kZW5jeU5hbWV9XSBkZXBlbmQgb24gZWFjaCBvdGhlcmApO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZighZGVwZW5kZW50cykge1xuICAgIGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbZGVwZW5kZW5jeU5hbWVdID0gW107XG4gIH1cbiAgXG4gIGRlcGVuZGVudHMucHVzaChjb250cm9sTmFtZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lEZXBlbmRlbnRzTWFwfSBmcm9tICcuLi8uLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBfcGFyZW50ID0+IHtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwLmdldChfcGFyZW50KTtcbiAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXApIHtcbiAgICBkZXBlbmRlbmN5RGVwZW5kZW50c01hcC5zZXQoX3BhcmVudCwgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0ge30pO1xuICB9XG4gIFxuICByZXR1cm4gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZXBlbmRlbmN5TmFtZXNUcmFuc2Zvcm1lciBmcm9tICcuL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgZGVwZW5kZW50VHJhY2tlciAgICAgICAgICAgZnJvbSAnLi9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlcic7XG5pbXBvcnQgZGVwZW5kZW50UmVnaXN0cmFyICAgICAgICAgZnJvbSAnLi9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVuY3lOYW1lc1RyYW5zZm9ybWVyKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCk7XG5cbiAgXy5lYWNoKGRlcGVuZGVuY3lOYW1lcywgZGVwZW5kZW5jeU5hbWUgPT4ge1xuICAgIGRlcGVuZGVudFRyYWNrZXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xuICAgIGRlcGVuZGVudFJlZ2lzdHJhcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwiaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbHN9ID0gY29udHJvbC5fcGFyZW50O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbmN5TmFtZSBvZiBkZXBlbmRlbmN5TmFtZXMpIHtcbiAgICBsZXQgZGVwZW5kZW5jeUNvbnRyb2wgPSBjb250cm9sc1tkZXBlbmRlbmN5TmFtZV07XG5cbiAgICBpZighZGVwZW5kZW5jeUNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUud2FybihgZGVwZW5kZW5jeSBbJHtkZXBlbmRlbmN5TmFtZX1dIGlzIG5vdCBkZWNsYXJlZGApO1xuICAgIH1cblxuICAgIGlmKCFkZXBlbmRlbmN5Q29udHJvbCB8fCBkZXBlbmRlbmN5Q29udHJvbC5pbnZhbGlkKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy92YWxpZGF0b3IvdmFsaWRhdG9yLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlbWFpbEdvdic7XG5jb25zdCBlbWFpbEdvdlJ4ID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSooXFwuKGdvdnxtaWwpKSQvO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWVtYWlsR292UngudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgbm90IGEgdmFsaWQgZ292ZXJubWVudCBlbWFpbGA7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZW1haWwnO1xuY29uc3QgZW1haWxSeCA9IC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqJC87XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighZW1haWxSeC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyBub3QgYSB2YWxpZCBlbWFpbGA7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZW1haWwvZW1haWwudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VxdWFsc1RvJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgZXF1YWxzVG8pIHtcbiAgICBsZXQge3ZhbHVlLCBfcGFyZW50fSA9IGNvbnRyb2w7XG4gICAgbGV0IGVxdWFsc1RvQ29udHJvbCA9IF9wYXJlbnQuY29udHJvbHNbZXF1YWxzVG9dO1xuXG4gICAgaWYoIXZhbHVlIHx8IHZhbHVlICE9PSBlcXVhbHNUb0NvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCwgdmFsaWRhdG9yQ29uZmlncykge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBtdXN0IGVxdWFsIHRvICR7dmFsaWRhdG9yQ29uZmlnc31gO1xuICB9LFxuXG4gIHZhbGlkYXRvck5hbWVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VxdWFscy10by9lcXVhbHMtdG8udHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ21heExlbmd0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIGxldCB7dmFsdWV9ID0gY29udHJvbDtcbiAgICBpZighdmFsdWUgfHwgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIGlmKCFtYXhMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4aW11bSBsZW5ndGggc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICttYXhMZW5ndGg7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gc2hvdWxkIGJlIGxlc3MgdGhhbiAke21heExlbmd0aH0gY2hhcmFjdGVyc2A7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvbWF4LWxlbmd0aC9tYXgtbGVuZ3RoLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdtaW5MZW5ndGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICBpZighbWluTGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbmltdW0gbGVuZ3RoIHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiArbWluTGVuZ3RoO1xuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IHNob3VsZCBiZSAke21pbkxlbmd0aH0gY2hhcmFjdGVyc2A7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvbWluLWxlbmd0aC9taW4tbGVuZ3RoLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2YWxpZGF0b3JOYW1lID0gJ3BhdHRlcm4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBwYXR0ZXJuKSB7XG4gICAgaWYoIXBhdHRlcm4udGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBwYXR0ZXJuKSB7XG4gICAgaWYoIXBhdHRlcm4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc3BlY2lmeSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybicpO1xuICAgIH1cbiAgICBcbiAgICBpZihfLmlzU3RyaW5nKHBhdHRlcm4pKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVybn0kYCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3BhdHRlcm4vcGF0dGVybi50cyIsImNvbnN0IGRpcmVjdGl2ZU5hbWUgPSAncmVxdWlyZWQnO1xuY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdyZXF1aXJlZFRydWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoY29udHJvbC52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHtbZGlyZWN0aXZlTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIHJlcXVpcmVkYDtcbiAgfSxcblxuICBkaXJlY3RpdmVOYW1lLFxuXG4gIHZhbGlkYXRvck5hbWUsXG4gIFxuICBjaGVja2JveDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAncmVxdWlyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyByZXF1aXJlZGA7XG4gIH0sXG5cbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkL3JlcXVpcmVkLnRzIiwiZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWVQcm9wZXJ9ID0gY29udHJvbDtcbiAgcmV0dXJuIGBWYWx1ZSBwcm92aWRlZCBmb3IgJHtjb250cm9sTmFtZVByb3Blcn0gZmllbGQgYWxyZWFkeSBleGlzdHNgO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9tZXNzYWdlci9tZXNzYWdlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGNvbmZpZ3MsIGJhc2VDb25maWdzKSA9PiB7XG4gIGlmKCFfLmlzUGxhaW5PYmplY3QoY29uZmlncykpIHtcbiAgICBjb25maWdzID0ge3BhdGg6IGNvbmZpZ3N9O1xuICB9XG4gIFxuICBsZXQge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSA9IGNvbmZpZ3M7XG4gIFxuICBpZihiYXNlQ29uZmlncykge1xuICAgIHZhciB7YmFzZVVybH0gPSBiYXNlQ29uZmlncztcbiAgfVxuICBcbiAgaWYoIWZpZWxkTmFtZSkge1xuICAgIGZpZWxkTmFtZSA9IGNvbnRyb2wuY29udHJvbE5hbWU7XG4gIH1cbiAgXG4gIGlmKCFpZ25vcmUpIHtcbiAgICBpZ25vcmUgPSBbXTtcbiAgfSBlbHNlIGlmKCFfLmlzQXJyYXkoaWdub3JlKSkge1xuICAgIGlnbm9yZSA9IFtpZ25vcmVdO1xuICB9XG4gIFxuICBpZihfLmlzVW5kZWZpbmVkKGlnbm9yZUNhc2UpKSB7XG4gICAgaWdub3JlQ2FzZSA9IHRydWU7XG4gIH1cbiAgXG4gIGlmKGlnbm9yZUNhc2UpIHtcbiAgICBpZ25vcmUgPSBpZ25vcmUubWFwKGlnbm9yZSA9PiAoaWdub3JlICsgJycpLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIFxuICBpZihiYXNlVXJsKSB7XG4gICAgcGF0aCA9IGJhc2VVcmwgKyBwYXRoO1xuICB9XG4gIFxuICByZXR1cm4gXy5leHRlbmQoY29uZmlncywge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdmFsaWRhdG9yICAgICAgIGZyb20gJy4vdmFsaWRhdG9yL3ZhbGlkYXRvcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgbWVzc2FnZXIgICAgICAgIGZyb20gJy4vbWVzc2FnZXIvbWVzc2FnZXInO1xuaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yLFxuICBwcmVwcm9jZXNzb3IsXG4gIG1lc3NhZ2VyLFxuICB2YWxpZGF0b3JOYW1lLFxuICBhc3luYzogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay91bmlxdWUtY2hlY2sudHMiLCJpbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBjb25maWdzKSA9PiB7XG4gIGxldCB7ZmllbGROYW1lLCBpZ25vcmUsIGlnbm9yZUNhc2UsIHBhdGh9ID0gY29uZmlncztcbiAgbGV0IHt2YWx1ZX0gPSBjb250cm9sO1xuXG4gIGlmKGlnbm9yZUNhc2UpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgXG4gIGlmKCF2YWx1ZSB8fCBpZ25vcmUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcGFyYW1zID0ge1tmaWVsZE5hbWVdOiB2YWx1ZX07XG4gICAgXG4gICAgY29udHJvbC5odHRwLmdldChwYXRoLCB7cGFyYW1zfSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgcmVzb2x2ZShkYXRhLmxlbmd0aCA/IHtbdmFsaWRhdG9yTmFtZV06IHRydWV9IDogbnVsbCk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgcmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsImltcG9ydCBkZXBzVmFsaWRhdG9yICAgICAgICAgZnJvbSAnLi9kZXBzL2RlcHMnO1xuaW1wb3J0IGVtYWlsVmFsaWRhdG9yICAgICAgICBmcm9tICcuL2VtYWlsL2VtYWlsJztcbmltcG9ydCBlbWFpbEdvdlZhbGlkYXRvciAgICAgZnJvbSAnLi9lbWFpbC1nb3YvZW1haWwtZ292JztcbmltcG9ydCBlcXVhbHNUb1ZhbGlkYXRvciAgICAgZnJvbSAnLi9lcXVhbHMtdG8vZXF1YWxzLXRvJztcbmltcG9ydCBtYXhMZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9tYXgtbGVuZ3RoL21heC1sZW5ndGgnO1xuaW1wb3J0IG1pbkxlbmd0aFZhbGlkYXRvciAgICBmcm9tICcuL21pbi1sZW5ndGgvbWluLWxlbmd0aCc7XG5pbXBvcnQgcGF0dGVyblZhbGlkYXRvciAgICAgIGZyb20gJy4vcGF0dGVybi9wYXR0ZXJuJztcbmltcG9ydCByZXF1aXJlZFZhbGlkYXRvciAgICAgZnJvbSAnLi9yZXF1aXJlZC9yZXF1aXJlZCc7XG5pbXBvcnQgcmVxdWlyZWRUcnVlVmFsaWRhdG9yIGZyb20gJy4vcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlJztcbmltcG9ydCB1bmlxdWVDaGVja1ZhbGlkYXRvciAgZnJvbSAnLi91bmlxdWUtY2hlY2svdW5pcXVlLWNoZWNrJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBkZXBzVmFsaWRhdG9yLFxuICByZXF1aXJlZFZhbGlkYXRvcixcbiAgbWluTGVuZ3RoVmFsaWRhdG9yLFxuICBtYXhMZW5ndGhWYWxpZGF0b3IsXG4gIHBhdHRlcm5WYWxpZGF0b3IsXG4gIGVtYWlsVmFsaWRhdG9yLFxuICBlbWFpbEdvdlZhbGlkYXRvcixcbiAgZXF1YWxzVG9WYWxpZGF0b3IsXG4gIHJlcXVpcmVkVHJ1ZVZhbGlkYXRvcixcbiAgdW5pcXVlQ2hlY2tWYWxpZGF0b3Jcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwiZXhwb3J0IGRlZmF1bHQgKG5hbWUsIGNoZWNrYm94KSA9PiB7XG4gIGxldCBjaGVja2JveFR5cGUgPSAnW3R5cGU9Y2hlY2tib3hdJztcbiAgbGV0IGNvbnRyb2xUeXBlcyA9IFsnZm9ybUNvbnRyb2xOYW1lJywgJ2Zvcm1Db250cm9sJywgJ25nTW9kZWwnXVxuICBjaGVja2JveCA9IGNoZWNrYm94ID8gYGlucHV0JHtjaGVja2JveFR5cGV9YCA6IGA6bm90KCR7Y2hlY2tib3hUeXBlfSlgO1xuICBcbiAgcmV0dXJuIGNvbnRyb2xUeXBlcy5yZWR1Y2UoKHNlbGVjdG9yLCBjb250cm9sVHlwZSkgPT4ge1xuICAgIHNlbGVjdG9yLnB1c2goYCR7Y2hlY2tib3h9WyR7bmFtZX1dWyR7Y29udHJvbFR5cGV9XWApO1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfSwgW10pLmpvaW4oJywnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9kaXJlY3RpdmVzLWdlbmVyYXRvci9fbGliL3NlbGVjdG9yLWFzc2VtYmxlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRQbHVzfSAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25nLWh0dHAtY2xpZW50LXBsdXMnO1xuaW1wb3J0IHtOR19WQUxJREFUT1JTLCBOR19BU1lOQ19WQUxJREFUT1JTfSAgICAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgc2VsZWN0b3JBc3NlbWJsZXIgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXInO1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0b3JzID0+IHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHZhbGlkYXRvckNvbmZpZ3VyYXRvciA9PiB7XG4gICAgbGV0IHthc3luYzogX2FzeW5jLCBjaGVja2JveCwgdmFsaWRhdG9yTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcjtcbiAgICBsZXQge2RpcmVjdGl2ZU5hbWVQcmVmaXhlZH0gPSB2YWxpZGF0b3JDb25maWd1cmF0b3I7XG4gICAgbGV0IGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmVOYW1lUHJlZml4ZWQgfHwgdmFsaWRhdG9yTmFtZVByZWZpeGVkO1xuICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yQXNzZW1ibGVyKGRpcmVjdGl2ZU5hbWUsIGNoZWNrYm94KTtcblxuICAgIGxldCBwcm92aWRlcnMgPSBbe1xuICAgICAgcHJvdmlkZTogX2FzeW5jID8gTkdfQVNZTkNfVkFMSURBVE9SUyA6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcyksXG4gICAgICBtdWx0aTogdHJ1ZSAgICAgICAgXG4gICAgfV07XG4gICAgXG4gICAgQERpcmVjdGl2ZSh7c2VsZWN0b3IsIHByb3ZpZGVyc30pIGNsYXNzIFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzIHtcbiAgICAgIHByaXZhdGUgdmFsaWRhdG9yO1xuICAgICAgcHJpdmF0ZSBvbkNoYW5nZTtcbiAgICAgIHByaXZhdGUgY29udHJvbDtcbiAgICAgIEBJbnB1dChgJHtkaXJlY3RpdmVOYW1lfWApIHByaXZhdGUgY29uZmlncztcbiAgICBcbiAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFBsdXMpIHt9XG4gICAgXG4gICAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIGlmKCdjb25maWdzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgaWYoIXRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIHZhbGlkYXRlKGNvbnRyb2w/KSB7XG4gICAgICAgIGxldCBlcnJvciA9IHtbZGlyZWN0aXZlTmFtZV06IHRydWV9O1xuICAgICAgICBcbiAgICAgICAgaWYoX2FzeW5jKSB7XG4gICAgICAgICAgXy5leHRlbmQoY29udHJvbCwge2h0dHA6IHRoaXMuaHR0cH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICAgICBjb250cm9sLCBcbiAgICAgICAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIF9hc3luYyA/IFByb21pc2UucmVzb2x2ZShlcnJvcikgOiBlcnJvcjsgXG4gICAgICB9XG4gICAgXG4gICAgICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjsgXG4gICAgICB9XG4gICAgXG4gICAgICBwcml2YXRlIGNyZWF0ZVZhbGlkYXRvcigpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3JDb25maWd1cmF0b3IodGhpcy5jb250cm9sLCB0aGlzLmNvbmZpZ3MsIHRoaXMuZWwpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcztcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRQbHVzTW9kdWxlfSBmcm9tICduZy1odHRwLWNsaWVudC1wbHVzJztcbmltcG9ydCBwcmVmaXhlciAgICAgICAgICAgICAgIGZyb20gJy4uL19saWIvcHJlZml4ZXInO1xuaW1wb3J0IHZhbGlkYXRvckNvbmZpZ3VyYXRvciAgZnJvbSAnLi4vdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yJztcbmltcG9ydCBkaXJlY3RpdmVzR2VuZXJhdG9yICAgIGZyb20gJy4uL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzKSA9PiB7XG4gIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3IgPT4ge1xuICAgIGxldCB7dmFsaWRhdG9yTmFtZSwgZGlyZWN0aXZlTmFtZX0gPSB2YWxpZGF0b3I7XG4gICAgbGV0IHZhbGlkYXRvck5hbWVQcmVmaXhlZCA9IHByZWZpeGVyKHNldHRpbmdzLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIGRpcmVjdGl2ZU5hbWUpO1xuICAgIF8uZXh0ZW5kKHZhbGlkYXRvciwge3ZhbGlkYXRvck5hbWVQcmVmaXhlZCwgZGlyZWN0aXZlTmFtZVByZWZpeGVkfSk7XG4gICAgcmV0dXJuIHZhbGlkYXRvckNvbmZpZ3VyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9yKTtcbiAgfSk7XG4gIFxuICBsZXQgZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXNHZW5lcmF0b3IodmFsaWRhdG9ycyk7XG5cbiAgQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbSHR0cENsaWVudFBsdXNNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogZGlyZWN0aXZlcywgXG4gICAgZXhwb3J0czogZGlyZWN0aXZlc1xuICB9KSBjbGFzcyBWYWxpZGF0b3JNb2R1bGUge31cbiAgXG4gIHJldHVybiBWYWxpZGF0b3JNb2R1bGU7ICAgIFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5hbWVBc3NpZ25lciAgICAgZnJvbSAnLi9uYW1lLWFzc2lnbmVyL25hbWUtYXNzaWduZXInO1xuaW1wb3J0IFZhbGlkYXRpb25TdGF0ZXIgZnJvbSAnLi4vLi4vLi4vc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgZWwpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBcbiAgaWYoIXZhbGlkaWZ5KSB7XG4gICAgZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIG5hbWVBc3NpZ25lcihjb250cm9sKTtcbiAgICBcbiAgICB2YWxpZGlmeSA9IHtcbiAgICAgIGVsZW1lbnRzOiB7fSxcbiAgICAgIGVycm9yczoge30sXG4gICAgICB2YWxpZGF0aW9uU3RhdGVyOiBuZXcgVmFsaWRhdGlvblN0YXRlcihzZXR0aW5ncywgY29udHJvbClcbiAgICB9O1xuICAgIFxuICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHt2YWxpZGlmeSwgZWwsICRlbDogJChlbCl9KTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9kYXRhLWluaXRpYWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtjb250cm9sc30gPSBjb250cm9sLl9wYXJlbnQ7XG4gIGxldCBjb250cm9sTmFtZXMgPSBfLmtleXMoY29udHJvbHMpO1xuICBmb3IobGV0IGNvbnRyb2xOYW1lIG9mIGNvbnRyb2xOYW1lcykge1xuICAgIGlmKGNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9PT0gY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2xOYW1lO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL2xpYi9uYW1lLWFjY2Vzc29yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5hbWVBY2Nlc3NvciBmcm9tICcuL2xpYi9uYW1lLWFjY2Vzc29yJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgXG4gIGlmKCFjb250cm9sTmFtZSkge1xuICAgIGNvbnRyb2xOYW1lID0gbmFtZUFjY2Vzc29yKGNvbnRyb2wpO1xuICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHtcbiAgICAgIGNvbnRyb2xOYW1lLFxuICAgICAgY29udHJvbE5hbWVQcm9wZXI6IF8udXBwZXJGaXJzdChfLmxvd2VyQ2FzZShjb250cm9sTmFtZSkpXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwiaW1wb3J0IHtkZXBlbmRlbmN5UmVxdWVzdHN9IGZyb20gJy4uLy4uLy4uL19saWIvdmFycyc7XG5pbXBvcnQgZGVwZW5kZW50c1NldHRlciAgICAgZnJvbSAnLi4vLi4vLi4vZGVwZW5kZW50cy1zZXR0ZXIvZGVwZW5kZW50cy1zZXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtfcGFyZW50LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQgcGFyZW50UmVjb3JkcyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gIFxuICBpZihwYXJlbnRSZWNvcmRzKSB7XG4gICAgbGV0IGRlcGVuZGVudFJlY29yZHMgPSBwYXJlbnRSZWNvcmRzW2NvbnRyb2xOYW1lXTtcblxuICAgIGlmKGRlcGVuZGVudFJlY29yZHMpIHtcbiAgICAgIGRlcGVuZGVudHNTZXR0ZXIoY29udHJvbCwgZGVwZW5kZW50UmVjb3Jkcyk7XG4gICAgICBkZWxldGUgcGFyZW50UmVjb3Jkc1tjb250cm9sTmFtZV07XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyICAgICAgICAgZnJvbSAnLi4vLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgY29udGFpbmVyQWRkZXIgICAgICAgICAgZnJvbSAnLi4vX2xpYi9jb250YWluZXItYWRkZXInO1xuaW1wb3J0IEFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyIGZyb20gJy4uLy4uLy4uLy4uL3N0YXRlcnMvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkaWZ5LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jcyA9IHt9LCBlbGVtZW50c30gPSB2YWxpZGlmeTtcbiAgXG4gIGlmKCF2YWxpZGF0b3JEZWNsYXJhdGlvbi5hc3luYyB8fCAhXy5pc0VtcHR5KGFzeW5jcykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGxldCB7YXN5bmNTdGF0dXNIaWRlQ2xhc3MsIHNlbGVjdG9yc30gPSBzZXR0aW5ncztcbiAgbGV0IHthc3luY1N0YXR1c0NvbnRhaW5lcn0gPSBzZWxlY3RvcnM7XG4gIGxldCB7JGVsLCAkZWxDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gIGxldCAkYXN5bmNzQ29udGFpbmVyID0gJCgnPGRpdi8+Jyk7XG4gIGxldCAkcGVuZGluZyA9ICQoJzxkaXYvPicpO1xuICBsZXQgJHN1Y2Nlc3MgPSAkKCc8ZGl2Lz4nKTtcblxuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRhc3luY3NDb250YWluZXIsICdhc3luY3MtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRwZW5kaW5nLCAnYXN5bmMtcGVuZGluZycsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkc3VjY2VzcywgJ2FzeW5jLXN1Y2Nlc3MnLCBjb250cm9sTmFtZSk7XG4gIFxuICAkYXN5bmNzQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJHBlbmRpbmcuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkc3VjY2Vzcy5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRhc3luY3NDb250YWluZXIuYXBwZW5kKCRwZW5kaW5nKS5hcHBlbmQoJHN1Y2Nlc3MpO1xuICBcbiAgXy5leHRlbmQoYXN5bmNzLCB7JGFzeW5jc0NvbnRhaW5lciwgJHBlbmRpbmcsICRzdWNjZXNzfSk7XG4gIF8uZXh0ZW5kKHZhbGlkaWZ5LCB7YXN5bmNzLCBhc3luY1N0YXR1c2VzOiB7fX0pO1xuICBcbiAgY29udGFpbmVyQWRkZXIoJGVsLCAkYXN5bmNzQ29udGFpbmVyLCAkZWxDb250YWluZXIsIGFzeW5jU3RhdHVzQ29udGFpbmVyKTtcbiAgdmFsaWRpZnkuYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIgPSBuZXcgQXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJpbXBvcnQgZXJyb3JzQ29udGFpbmVyQnVpbGRlciBmcm9tICcuL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXInO1xuaW1wb3J0IGFzeW5jQ29udGFpbmVyQnVpbGRlciAgZnJvbSAnLi9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgZXJyb3JzQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCk7XG4gIGFzeW5jQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZWxlbWVudHMtaW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uLy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IGNvbnRhaW5lckFkZGVyICBmcm9tICcuLi9fbGliL2NvbnRhaW5lci1hZGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCkgPT4ge1xuICBsZXQgeyRlbCwgdmFsaWRpZnksIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCB7ZWxlbWVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0VtcHR5KGVsZW1lbnRzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHtlbGVtZW50Q29udGFpbmVyLCBlcnJvcnNDb250YWluZXJ9ID0gc2V0dGluZ3Muc2VsZWN0b3JzO1xuICBsZXQgJGVsQ29udGFpbmVyID0gZWxlbWVudENvbnRhaW5lciA/ICRlbC5jbG9zZXN0KGVsZW1lbnRDb250YWluZXIpIDogJCgpO1xuICBsZXQgJGVycm9yc0NvbnRhaW5lciA9ICQoJzxkaXYvPicpO1xuXG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsLCAnZWwnLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsQ29udGFpbmVyLCAnZWwtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlcnJvcnNDb250YWluZXIsICdlcnJvcnMtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBcbiAgXy5leHRlbmQoZWxlbWVudHMsIHskZWwsICRlbENvbnRhaW5lciwgJGVycm9yc0NvbnRhaW5lcn0pO1xuICBjb250YWluZXJBZGRlcigkZWwsICRlcnJvcnNDb250YWluZXIsICRlbENvbnRhaW5lciwgZXJyb3JzQ29udGFpbmVyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoZXJyb3JNZXNzYWdlLCBwcmVmaXgpID0+IHtcbiAgbGV0IGdlbmVyYWxDbGFzcyA9IHByZWZpeCArICctZXJyb3Itd29yZCc7XG4gIFxuICByZXR1cm4gZXJyb3JNZXNzYWdlLnNwbGl0KC9cXHMrLykubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgIGxldCBzcGVjaWZpY0NsYXNzID0gZ2VuZXJhbENsYXNzICsgJy0nICsgaW5kZXg7XG4gICAgcmV0dXJuIGA8c3BhbiBjbGFzcyA9IFwiJHtnZW5lcmFsQ2xhc3N9ICR7c3BlY2lmaWNDbGFzc31cIj4ke3dvcmR9PC9zcGFuPmA7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IHNwYW5uaWZpZXIgICAgICBmcm9tICcuL19saWIvc3Bhbm5pZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQsIGFzeW5jOiBfYXN5bmN9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7bWVzc2FnZXJ9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7ZWxlbWVudHMsIGVycm9yc30gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgYmFzZUVycm9yQ29uZmlncyA9IHskZWw6ICQoKSwgX2FzeW5jLCB2YWxpZGF0b3JOYW1lLCBjb250cm9sfTtcbiAgXG4gIGlmKCFtZXNzYWdlcikge1xuICAgIHJldHVybiBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gPSBiYXNlRXJyb3JDb25maWdzO1xuICB9XG4gIFxuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdIHx8IGJhc2VFcnJvckNvbmZpZ3M7XG4gIGxldCB7JGVsfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHt2YWxpZGF0b3I6IHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyOiBtZXNzYWdlckNvbmZpZ3MsIGJhc2VDb25maWdzfSA9IGNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQgeyRlcnJvcnNDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gIGxldCBlcnJvck1lc3NhZ2VyID0gXy5pc0Z1bmN0aW9uKG1lc3NhZ2VyKSA/IG1lc3NhZ2VyIDogKCkgPT4gbWVzc2FnZXI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VyKGNvbnRyb2wsIHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyQ29uZmlncywgYmFzZUNvbmZpZ3MpO1xuICBlcnJvck1lc3NhZ2UgPSBzcGFubmlmaWVyKGVycm9yTWVzc2FnZSwgcHJlZml4KTtcbiAgXG4gIGlmKCEkZWwubGVuZ3RoKSB7XG4gICAgbGV0IHN5bmNBc3luY0NsYXNzID0gYCR7cHJlZml4fS1gICsgKF9hc3luYyA/ICdhc3luYycgOiAnc3luYycpO1xuICAgICRlbCA9ICQoJzxkaXYvPicpO1xuICAgICRlbC5hZGRDbGFzcyhzeW5jQXN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hcHBlbmQoJGVsKTtcbiAgICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbCwgJ2Vycm9yJywgdmFsaWRhdG9yTmFtZSk7XG4gICAgZXJyb3JDb25maWdzID0gXy5leHRlbmQoZXJyb3JDb25maWdzLCB7JGVsfSk7XG4gICAgXG4gICAgaWYoZXJyb3JNZXNzYWdlQ2xhc3NlcyAmJiBlcnJvck1lc3NhZ2VDbGFzc2VzLmluaXRpYWwpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmluaXRpYWwpO1xuICAgIH1cbiAgICBcbiAgICBpZihfYXN5bmMpIHtcbiAgICAgIGVycm9yQ29uZmlncy5yZXF1ZXN0cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gPSBlcnJvckNvbmZpZ3M7XG4gIH1cblxuICAkZWwuaHRtbChlcnJvck1lc3NhZ2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ByZXByb2Nlc3Nvcn0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgXG4gIGlmKCFfLmlzUGxhaW5PYmplY3QoY29uZmlncykpIHtcbiAgICBjb25maWdzID0ge3ZhbGlkYXRvcjogY29uZmlnc307XG4gIH1cbiAgXG4gIGlmKHByZXByb2Nlc3Nvcikge1xuICAgIGxldCB7dmFsaWRhdG9yQ29uZmlnc30gPSBzZXR0aW5ncztcbiAgICBcbiAgICBpZih2YWxpZGF0b3JDb25maWdzKSB7XG4gICAgICBsZXQge3ZhbGlkYXRvck5hbWV9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gICAgICB2YXIgYmFzZUNvbmZpZ3MgPSB2YWxpZGF0b3JDb25maWdzW3ZhbGlkYXRvck5hbWVdO1xuICAgICAgXy5leHRlbmQoY29uZmlncywge2Jhc2VDb25maWdzfSk7XG4gICAgfVxuXG4gICAgY29uZmlncy52YWxpZGF0b3IgPSBwcmVwcm9jZXNzb3IoY29udHJvbCwgY29uZmlncy52YWxpZGF0b3IsIGJhc2VDb25maWdzKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWdzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyIGZyb20gJy4uL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplcic7XG5pbXBvcnQgaW5pdGlhbERhdGFTZXR0ZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXInO1xuaW1wb3J0IHJlcXVlc3RzTnVsbGlmaWVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllcic7XG5pbXBvcnQgaW5pdGlhbFZpc3VhbGl6ZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyJztcbmltcG9ydCBmaW5hbERhdGFTZXR0ZXIgICAgICAgICAgICBmcm9tICcuL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlcic7XG5pbXBvcnQgZmluYWxWaXN1YWxpemVyICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9maW5hbC12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBpZihjb250cm9sLnZhbGlkVmFsdWUgPT09IGNvbnRyb2wudmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0gICBcbiAgXG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkLCB2YWxpZGF0b3J9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgZXJyb3JzLCB2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBsZXQgdmFsaWRhdGlvbklkID0gXy51bmlxdWVJZCgpO1xuXG4gIGlmKGNvbnRyb2wuaW52YWxpZFZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgbGV0IGVycm9yID0ge1t2YWxpZGF0b3JOYW1lUHJlZml4ZWRdOiB0cnVlfTtcbiAgICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBlcnJvcikudmlzdWFsaXplKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlcnJvcik7XG4gIH1cbiAgXG4gIGluaXRpYWxEYXRhU2V0dGVyKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpO1xuICByZXF1ZXN0c051bGxpZmllcihjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uSWQpO1xuICBpbml0aWFsVmlzdWFsaXplcihjb250cm9sLCB2YWxpZGF0b3JOYW1lKTtcbiAgXG4gIGNsZWFyVGltZW91dChlcnJvckNvbmZpZ3MuYXN5bmNEZWJvdW5jZVRpbWVvdXQpO1xuICBcbiAgZXJyb3JDb25maWdzLmFzeW5jRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgaWYodmFsaWRpZnkuc3luYykge1xuICAgICAgcmV0dXJuIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIGF3YWl0IGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcodHJ1ZSk7XG4gICAgXG4gICAgdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKS50aGVuKHZhbGlkYXRpb25TdGF0dXMgPT4ge1xuICAgICAgaWYoZXJyb3JDb25maWdzLnJlcXVlc3RzW3ZhbGlkYXRpb25JZF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YWxpZGF0aW9uU3RhdHVzID0gdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpO1xuICAgICAgZmluYWxEYXRhU2V0dGVyKGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uLCB2YWxpZGF0aW9uU3RhdHVzKTtcbiAgICAgIGZpbmFsVmlzdWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cyk7ICAgICAgXG4gICAgfSk7XG4gIH0sIHNldHRpbmdzLmFzeW5jRGVib3VuY2VUaW1lKTtcbiAgXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1t2YWxpZGF0b3JOYW1lUHJlZml4ZWRdOiB0cnVlfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24sIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgbGV0IHtlcnJvcnMsIHZhbHVlLCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jU3RhdHVzZXMsIGVycm9yczogX2Vycm9yc30gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIFxuICBfZXJyb3JzW3ZhbGlkYXRvck5hbWVdLnJlcXVlc3RzID0ge307XG4gIHZhbGlkaWZ5LnN5bmMgPSBmYWxzZTtcbiAgYXN5bmNTdGF0dXNlc1t2YWxpZGF0b3JOYW1lXSA9IGZhbHNlO1xuICBcbiAgaWYoIXZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICBlcnJvcnMgPSBfLm9taXQoZXJyb3JzLCBbdmFsaWRhdG9yTmFtZVByZWZpeGVkXSk7XG4gIH1cbiAgXG4gIF8uZXh0ZW5kKGVycm9ycywgdmFsaWRhdGlvblN0YXR1cyk7XG4gIFxuICBpZihfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgIGNvbnRyb2wudmFsaWRWYWx1ZSA9IHZhbHVlO1xuICAgIGVycm9ycyA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnRyb2wuaW52YWxpZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgXG4gIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luY1N0YXR1c2VzID0+IHtcbiAgcmV0dXJuIF8ucmVkdWNlKGFzeW5jU3RhdHVzZXMsIChjb3VudCwgc3RhdHVzKSA9PiB7XG4gICAgcmV0dXJuIGNvdW50ICs9ICtzdGF0dXM7XG4gIH0sIDApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwiaW1wb3J0IGFjdGl2ZUFzeW5jc0NvdW50ZXIgZnJvbSAnLi9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNTdGF0dXNlcywgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighYWN0aXZlQXN5bmNzQ291bnRlcihhc3luY1N0YXR1c2VzKSkge1xuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcoZmFsc2UpO1xuICAgIFxuICAgIGlmKCF2YWxpZGF0aW9uU3RhdHVzICYmIGNvbnRyb2wudmFsaWQpIHtcbiAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuc3VjY2VzcyhmYWxzZSk7XG4gICAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgICB9LCBzZXR0aW5ncy5hc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSkgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG5cbiAgY29udHJvbC52YWxpZFZhbHVlID0gY29udHJvbC5pbnZhbGlkVmFsdWUgPSBudWxsO1xuICB2YWxpZGlmeS5hc3luY1N0YXR1c2VzW3ZhbGlkYXRvck5hbWVdID0gdHJ1ZTtcbiAgdmFsaWRpZnkuc3luYyA9IGZhbHNlOyAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpID0+IHtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgdmFsaWRhdGlvblN0YXRlcn0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5jb250YWluZXIodHJ1ZSk7XG4gIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3MoZmFsc2UpO1xuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBudWxsKS52aXN1YWxpemUoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvbklkKSA9PiB7XG4gIGxldCB7cmVxdWVzdHN9ID0gY29udHJvbC52YWxpZGlmeS5lcnJvcnNbdmFsaWRhdG9yTmFtZV07XG5cbiAgXy5lYWNoKHJlcXVlc3RzLCAocmVxdWVzdCwga2V5KSA9PiB7XG4gICAgcmVxdWVzdHNba2V5XSA9IHRydWU7XG4gIH0pO1xuICBcbiAgcmVxdWVzdHNbdmFsaWRhdGlvbklkXSA9IGZhbHNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXIudHMiLCJpbXBvcnQgdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIgZnJvbSAnLi4vX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7dmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3IsIHZhbGlkYXRvck5hbWV9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB2YWxpZGF0aW9uU3RhdHVzID0gdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKTtcbiAgXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICB2YWxpZGlmeS5zeW5jID0gdHJ1ZTtcbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xuICByZXR1cm4gdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3IudHMiLCJpbXBvcnQgc3luY1ZhbGlkYXRvciAgZnJvbSAnLi9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvcic7XG5pbXBvcnQgYXN5bmNWYWxpZGF0b3IgZnJvbSAnLi9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmKHZhbGlkYXRvckRlY2xhcmF0aW9uLmFzeW5jKSB7XG4gICAgICByZXR1cm4gYXN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRhdGFJbml0aWFsaXplciAgICAgZnJvbSAnLi9kYXRhLWluaXRpYWxpemVyL2RhdGEtaW5pdGlhbGl6ZXInO1xuaW1wb3J0IGRlcGVuZGVudHNSZWdpc3RyYXIgZnJvbSAnLi9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgICAgICBmcm9tICcuL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3InO1xuaW1wb3J0IGVsZW1lbnRzSW5pdGlhbGl6ZXIgZnJvbSAnLi9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplcic7XG5pbXBvcnQgZXJyb3JHZW5lcmF0b3IgICAgICBmcm9tICcuL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3InO1xuaW1wb3J0IHZhbGlkYXRvckJ1aWxkZXIgICAgZnJvbSAnLi92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IGRhdGFOYW1lcyA9IFsnYXN5bmMnLCAnY2hlY2tib3gnLCAndmFsaWRhdG9yTmFtZScsICdkaXJlY3RpdmVOYW1lUHJlZml4ZWQnXTtcbiAgZGF0YU5hbWVzLnB1c2goJ3ZhbGlkYXRvck5hbWVQcmVmaXhlZCcsICdtZXNzYWdlcicpO1xuICBsZXQgc3VwcGxlbWVudGFsRGF0YSA9IF8ucGljayh2YWxpZGF0b3JEZWNsYXJhdGlvbiwgZGF0YU5hbWVzKTtcbiAgbGV0IGNvbmZpZ3VyYXRvciA9IChjb250cm9sLCBjb25maWdzLCBlbCkgPT4ge1xuICAgIGRhdGFJbml0aWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgZWwpO1xuICAgIGRlcGVuZGVudHNSZWdpc3RyYXIoY29udHJvbCk7XG4gICAgY29uZmlncyA9IHByZXByb2Nlc3NvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIGVsZW1lbnRzSW5pdGlhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICBlcnJvckdlbmVyYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIHJldHVybiB2YWxpZGF0b3JCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIF8uZXh0ZW5kKGNvbmZpZ3VyYXRvciwgc3VwcGxlbWVudGFsRGF0YSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzcxX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJmb3Jtc1wiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiYW1kXCI6XCJAYW5ndWxhci9mb3Jtc1wifVxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5nVmFsaWRpZmllciBmcm9tICcuL3ZhbGlkaWZpZXIvdmFsaWRpZmllcic7XG5cbmV4cG9ydCB7bmdWYWxpZGlmaWVyfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==