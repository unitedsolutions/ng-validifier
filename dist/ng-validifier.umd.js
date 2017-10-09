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
        var timeout = on ? this.settings.asyncMinimumPendingDuration : 0;
        if (!on) {
            this.classOperator('removeClass');
        }
        this.display('pending', on);
        return new Promise(function (resolve) { return setTimeout(resolve, timeout); });
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
            if (validify.sync) {
                return [2 /*return*/, asyncProgressVisualizer.container(false)];
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
            return [2 /*return*/];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwYjNlMzUzNTZmNTI5NDhjZmE0NyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvX2xpYi9wcmVmaXhlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBDbGllbnRQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCIsXCJhbWRcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL3Zpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9kZXBzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvX2xpYi9zdHItYXJyYXlpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImZvcm1zXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2Zvcm1zXCJ9Iiwid2VicGFjazovLy8uL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7O0FDQUE7QUFBQSxJQUFNLGtCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFFekMsSUFBTSxRQUFRLEdBQUc7SUFDZixNQUFNLEVBQUUsR0FBRztJQUVYLFNBQVMsRUFBRTtRQUNULGdCQUFnQixFQUFFLGFBQWE7UUFDL0IsZUFBZSxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxvQkFBb0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7S0FDaEQ7SUFFRCxtQkFBbUIsRUFBRTtRQUNuQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUVELGtCQUFrQixFQUFFO1FBQ2xCLEtBQUssRUFBRSxHQUFHO1FBQ1YsT0FBTyxFQUFFLEdBQUc7S0FDYjtJQUVELGlCQUFpQixF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QUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3RCx3R0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLDRHQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLDhDQUFRLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsQ0FBQyxFQUFDOzs7Ozs7O0FDdEJGLGdEOzs7Ozs7Ozs7O0FDQW1EO0FBRTdCIiwiZmlsZSI6Im5nLXZhbGlkaWZpZXIudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwibmctaHR0cC1jbGllbnQtcGx1c1wiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIiwgXCJqcXVlcnlcIiwgXCJuZy1odHRwLWNsaWVudC1wbHVzXCIsIFwiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2Zvcm1zXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nLXZhbGlkaWZpZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJuZy1odHRwLWNsaWVudC1wbHVzXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZy12YWxpZGlmaWVyXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSwgcm9vdFtcIiRcIl0sIHJvb3RbXCJuZ0h0dHBDbGllbnRQbHVzXCJdLCByb290W1wibmdcIl1bXCJjb3JlXCJdLCByb290W1wibmdcIl1bXCJmb3Jtc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzcxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYjNlMzUzNTZmNTI5NDhjZmE0NyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiJFwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGRlcGVuZGVuY3lSZXF1ZXN0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBwcmVmaXg6ICd2JyxcblxuICBzZWxlY3RvcnM6IHtcbiAgICBlbGVtZW50Q29udGFpbmVyOiAnLmZvcm0tZ3JvdXAnLFxuICAgIGVycm9yc0NvbnRhaW5lcjogWydpbnNlcnRBZnRlcicsICdpbnB1dCddLFxuICAgIGFzeW5jU3RhdHVzQ29udGFpbmVyOiBbJ2luc2VydEJlZm9yZScsICdpbnB1dCddXG4gIH0sXG4gIFxuICBlcnJvck1lc3NhZ2VDbGFzc2VzOiB7XG4gICAgaW5pdGlhbDogJycsXG4gICAgdmFsaWQ6ICcnLFxuICAgIGludmFsaWQ6ICcnXG4gIH0sXG5cbiAgZXJyb3JNZXNzYWdlRGVsYXlzOiB7XG4gICAgdmFsaWQ6IDMwMCxcbiAgICBpbnZhbGlkOiA1MDBcbiAgfSxcblxuICBhc3luY0RlYm91bmNlVGltZTogNTAwLFxuXG4gIGFzeW5jU3RhdHVzSGlkZUNsYXNzOiAnaGlkZGVuJyxcbiAgXG4gIGFzeW5jU3VjY2Vzc01lc3NhZ2VEdXJhdGlvbjogMTAwMFxufTtcblxuZXhwb3J0IHtcbiAgZGVwZW5kZW5jeVJlcXVlc3RzLCBcbiAgc2V0dGluZ3Ncbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2xpYi92YXJzLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCAkZWwsIGJhc2VDbGFzcywgY29udHJvbE5hbWUpID0+IHtcbiAgbGV0IHtwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgYCR7YmFzZUNsYXNzfS0ke2NvbnRyb2xOYW1lfWBdO1xuICBsZXQgY2xhc3Nlc1N0ciA9IGNsYXNzZXMubWFwKGtsYXNzID0+IGAke3ByZWZpeH0tJHtrbGFzc31gKS5qb2luKCcgJyk7XG4gICRlbC5hZGRDbGFzcyhjbGFzc2VzU3RyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBuZXdEZXBlbmRlbnRzKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHtkZXBlbmRlbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIV8uaXNBcnJheShuZXdEZXBlbmRlbnRzKSkge1xuICAgIG5ld0RlcGVuZGVudHMgPSBbbmV3RGVwZW5kZW50c107XG4gIH1cbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgXy5zZXQodmFsaWRpZnksICdkZXBlbmRlbnRzJywgZGVwZW5kZW50cyA9IFtdKTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKC4uLm5ld0RlcGVuZGVudHMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlci50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZGVwcyc7XG5jb25zdCBkZXBlbmRlbmNpZXNUYWJsZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCB7XG4gIHZhbGlkYXRvck5hbWUsXG4gIGRlcGVuZGVuY2llc1RhYmxlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9fbGliL3ZhcnMudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ3VuaXF1ZUNoZWNrJztcblxuZXhwb3J0IHtcbiAgdmFsaWRhdG9yTmFtZSAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL19saWIvdmFycy50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBuYW1lKSA9PiB7XG4gIGxldCB7cHJlZml4fSA9IHNldHRpbmdzO1xuICBcbiAgaWYocHJlZml4ICYmIG5hbWUpIHtcbiAgICBuYW1lID0gcHJlZml4ICsgXy51cHBlckZpcnN0KG5hbWUpO1xuICB9XG4gIFxuICByZXR1cm4gbmFtZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9fbGliL3ByZWZpeGVyLnRzIiwiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCAoJGVsLCAkY29udGFpbmVyLCAkY29udGFpbmVyQ29udGFpbmVyLCBpbnNlcnRpb25TcGVjKSA9PiB7XG4gIGxldCBbYWN0aW9uLCAkaW5zZXJ0aW9uUG9pbnRdID0gKCgpID0+IHtcbiAgICBpZighJGNvbnRhaW5lckNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbJ2luc2VydEFmdGVyJywgJGVsXTtcbiAgICB9XG4gICAgXG4gICAgbGV0IFthY3Rpb24sIGFuY2hvcl0gPSBpbnNlcnRpb25TcGVjO1xuICAgIGxldCAkaW5zZXJ0aW9uUG9pbnQgPSAoKCkgPT4ge1xuICAgICAgaWYoIWFuY2hvcikge1xuICAgICAgICByZXR1cm4gJGNvbnRhaW5lckNvbnRhaW5lcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuICQoYW5jaG9yLCAkY29udGFpbmVyQ29udGFpbmVyKTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIFthY3Rpb24sICRpbnNlcnRpb25Qb2ludF07XG4gIH0pKCk7XG4gIFxuICAkY29udGFpbmVyW2FjdGlvbl0oJGluc2VydGlvblBvaW50KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi4vLi4vLi4vX2xpYi9wcmVmaXhlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBpZihfLmlzUGxhaW5PYmplY3QodmFsaWRhdGlvblN0YXR1cykpIHtcbiAgICBsZXQga2V5ID0gXy5rZXlzKHZhbGlkYXRpb25TdGF0dXMpWzBdO1xuICAgIGxldCB2YWx1ZSA9IHZhbGlkYXRpb25TdGF0dXNba2V5XTtcbiAgICBrZXkgPSBwcmVmaXhlcihzZXR0aW5ncywga2V5KTtcbiAgICB2YWxpZGF0aW9uU3RhdHVzID0ge1trZXldOiB2YWx1ZX07XG4gIH1cbiAgXG4gIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibmdIdHRwQ2xpZW50UGx1c1wiLFwiY29tbW9uanNcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIixcImNvbW1vbmpzMlwiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiYW1kXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvcmVcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29yZVwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2NvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtzZXR0aW5ncyBhcyBtYWluU2V0dGluZ3N9IGZyb20gJy4uL19saWIvdmFycyc7XG5pbXBvcnQgaW50ZXJuYWxWYWxpZGF0b3JzICAgICAgICAgZnJvbSAnLi4vdmFsaWRhdG9ycy92YWxpZGF0b3JzJztcbmltcG9ydCBtb2R1bGVHZW5lcmF0b3IgICAgICAgICAgICBmcm9tICcuL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdG9ycyA9IFtdKSA9PiB7XG4gIHNldHRpbmdzID0gXy5leHRlbmQoe30sIG1haW5TZXR0aW5ncywgc2V0dGluZ3MpO1xuICB2YWxpZGF0b3JzLnB1c2goLi4uaW50ZXJuYWxWYWxpZGF0b3JzKTtcbiAgcmV0dXJuIG1vZHVsZUdlbmVyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9ycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRpZmllci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBwcml2YXRlIHNldHRpbmdzO1xuICBwcml2YXRlIGFzeW5jcztcbiAgcHJpdmF0ZSAkZWw7XG4gIHByaXZhdGUgJGVsQ29udGFpbmVyO1xuICBwcml2YXRlIHBlbmRpbmdDbGFzcztcbiAgXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBjb250cm9sKSB7XG4gICAgbGV0IHthc3luY3MsIGVsZW1lbnRzfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gICAgbGV0IHskZWwsICRlbENvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgICBsZXQgcGVuZGluZ0NsYXNzID0gYCR7c2V0dGluZ3MucHJlZml4fS1hc3luYy1wZW5kaW5nYDtcbiAgICBcbiAgICBfLmV4dGVuZCh0aGlzLCB7JGVsLCAkZWxDb250YWluZXIsIGFzeW5jcywgcGVuZGluZ0NsYXNzLCBzZXR0aW5nc30pO1xuICB9XG4gIFxuICBwcml2YXRlIGRpc3BsYXkodHlwZSwgb24pIHtcbiAgICBsZXQgbWV0aG9kID0gb24gPyAncmVtb3ZlQ2xhc3MnOiAnYWRkQ2xhc3MnO1xuICAgIHRoaXMuYXN5bmNzWyckJyArIHR5cGVdW21ldGhvZF0odGhpcy5zZXR0aW5ncy5hc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gIH1cbiAgXG4gIHByaXZhdGUgY2xhc3NPcGVyYXRvcihvcGVyYXRpb24pIHtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCBwZW5kaW5nQ2xhc3N9ID0gdGhpcztcbiAgICAkZWxbb3BlcmF0aW9uXShwZW5kaW5nQ2xhc3MpO1xuICAgICRlbENvbnRhaW5lcltvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gIH1cbiAgXG4gIGNvbnRhaW5lcihvbikge1xuICAgIGlmKG9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ2FkZENsYXNzJyk7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wZW5kaW5nKG9uKTtcbiAgICAgIHRoaXMuc3VjY2Vzcyhvbik7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZGlzcGxheSgnYXN5bmNzQ29udGFpbmVyJywgb24pO1xuICB9XG5cbiAgcGVuZGluZyhvbikge1xuICAgIGxldCB0aW1lb3V0ID0gb24gPyB0aGlzLnNldHRpbmdzLmFzeW5jTWluaW11bVBlbmRpbmdEdXJhdGlvbiA6IDA7XG4gICAgXG4gICAgaWYoIW9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ3JlbW92ZUNsYXNzJyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZGlzcGxheSgncGVuZGluZycsIG9uKTtcbiAgICBcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQpKTsgIFxuICB9XG4gIFxuICBzdWNjZXNzKG9uKSB7XG4gICAgdGhpcy5kaXNwbGF5KCdzdWNjZXNzJywgb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNldHRpbmdzLCBjb250cm9sKSB7XG4gIF8uZXh0ZW5kKHRoaXMsIHtzZXR0aW5ncywgY29udHJvbCwgc3RhdGU6IHt9fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXBlbmRlbnRzQWdncmVnYXRvcihjb250cm9sLCBhbGwgPSBbXSkge1xuICBsZXQge2RlcGVuZGVudHMgPSBbXX0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cykge1xuICAgIGlmKGFsbC5pbmRleE9mKGRlcGVuZGVudCkgPT09IC0xKSB7XG4gICAgICBhbGwucHVzaChkZXBlbmRlbnQpO1xuICAgICAgZGVwZW5kZW50c0FnZ3JlZ2F0b3IoZGVwZW5kZW50LCBhbGwpO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGFsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlcGVuZGVudHNBZ2dyZWdhdG9yIGZyb20gJy4vX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHtzaWxlbnQsIGRlcGVuZGVudHMsIGNvbnRyb2x9ID0gdGhpcztcbiAgXG4gIGlmKCFzaWxlbnQpIHtcbiAgICBpZighY29udHJvbC52YWxpZGlmeS5pZ25vcmVEZXBlbmRlbnRzKSB7XG4gICAgICBkZXBlbmRlbnRzID0gZGVwZW5kZW50c0FnZ3JlZ2F0b3IoY29udHJvbCk7XG4gICAgICBmb3IobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIF8uZXh0ZW5kKGRlcGVuZGVudC52YWxpZGlmeSwge3NpbGVudDogdHJ1ZSwgaWdub3JlRGVwZW5kZW50czogdHJ1ZX0pO1xuICAgICAgICAgIGRlcGVuZGVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBfLmV4dGVuZCh0aGlzLCB7ZGVwZW5kZW50c30pO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKSB7XG4gIGxldCB7c2lsZW50LCBlcnJvcnN9ID0gdGhpcy5jb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBcbiAgXy5leHRlbmQodGhpcywge3NpbGVudCwgZGVwZW5kZW50czogdW5kZWZpbmVkfSk7XG4gIGVycm9yQ29uZmlncy5zdGF0dXMgPSB2YWxpZGF0aW9uU3RhdHVzO1xuICBcbiAgaWYoIXNpbGVudCkge1xuICAgIF8uZXh0ZW5kKHRoaXMsIHtlcnJvckNvbmZpZ3N9KTtcbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgX2NvbnN0cnVjdG9yICAgICAgZnJvbSAnLi9fY29uc3RydWN0b3IvY29uc3RydWN0b3InO1xuaW1wb3J0IHN0YXRlU2V0dGVyICAgICAgIGZyb20gJy4vc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW50c1VwZGF0ZXIgZnJvbSAnLi9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyJztcbmltcG9ydCB2aXN1YWxpemVyICAgICAgICBmcm9tICcuL3Zpc3VhbGl6ZXIvdmlzdWFsaXplcic7XG5cbl8uZXh0ZW5kKF9jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgc2V0OiBzdGF0ZVNldHRlcixcbiAgdXBkYXRlRGVwZW5kZW50czogZGVwZW5kZW50c1VwZGF0ZXIsXG4gIHZpc3VhbGl6ZTogdmlzdWFsaXplclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IF9jb25zdHJ1Y3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHtlcnJvck1lc3NhZ2VEZWxheXM6IGRlbGF5c30gPSBzZXR0aW5ncztcbiAgbGV0IHtfYXN5bmMsIHN0YXR1cywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZGlydHl9ID0gY29udHJvbDtcbiAgcmV0dXJuIF9hc3luYyB8fCAhZGlydHkgPyAwIDogc3RhdHVzID8gZGVsYXlzLmludmFsaWQgOiBkZWxheXMudmFsaWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9fbGliL2RlbGF5LWNhbGN1bGF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgJGVsKSA9PiB7XG4gIGxldCBjbGFzc2VzID0gJGVsLmF0dHIoJ2NsYXNzJyk7XG4gIFxuICBpZihjbGFzc2VzKSB7XG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIHJldHVybiBfLnJlZHVjZShjbGFzc2VzLCAoY291bnQsIGtsYXNzKSA9PiB7XG4gICAgaWYoa2xhc3Muc3RhcnRzV2l0aChgJHtzZXR0aW5ncy5wcmVmaXh9LWVycm9yYCkpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjb3VudDtcbiAgfSwgMCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9fbGliL2Vycm9ycy1jb3VudGVyLnRzIiwiaW1wb3J0IGVycm9yc0NvdW50ZXIgZnJvbSAnLi9fbGliL2Vycm9ycy1jb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCBzdGF0dXM6IHZhbGlkYXRpb25TdGF0dXN9ID0gZXJyb3JDb25maWdzO1xuICBsZXQgeyRlbDogJGVycm9yRWwsIF9hc3luYywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQge2RpcnR5LCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCAkZXJyb3JzQ29udGFpbmVyfSA9IHZhbGlkaWZ5LmVsZW1lbnRzO1xuICBsZXQgZXJyb3JDbGFzcyA9IGAke3ByZWZpeH0tZXJyb3ItJHt2YWxpZGF0b3JOYW1lfWA7XG4gIGxldCBzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LXN5bmNgO1xuICBsZXQgYXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYXN5bmNgO1xuICBcbiAgaWYoZGlydHkpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLXByaXN0aW5lJykuYWRkQ2xhc3MoJ25nLWRpcnR5Jyk7XG4gIH0gZWxzZSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKCduZy1wcmlzdGluZScpO1xuICB9XG5cbiAgaWYoX2FzeW5jKSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKHN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhzeW5jQ2xhc3MpO1xuICB9IGVsc2Uge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcyhzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKGFzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYWRkQ2xhc3Moc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhhc3luY0NsYXNzKTtcbiAgfVxuXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICAkZWwuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy12YWxpZCcpLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLXZhbGlkJykucmVtb3ZlQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy52YWxpZCk7XG4gICAgcmV0dXJuICRlcnJvckVsLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbnZhbGlkKTtcbiAgfVxuICBcbiAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmludmFsaWQpO1xuICAkZXJyb3JFbC5hZGRDbGFzcygnbmctdmFsaWQnKS5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLnZhbGlkKTtcbiAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xuICAkZWwucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG5cbiAgaWYoIWVycm9yc0NvdW50ZXIoc2V0dGluZ3MsICRlbENvbnRhaW5lcikpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcygnbmctdmFsaWQnKTtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoX2FzeW5jID8gYXN5bmNDbGFzcyA6IHN5bmNDbGFzcyk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZWxheUNhbGN1bGF0b3IgIGZyb20gJy4vX2xpYi9kZWxheS1jYWxjdWxhdG9yJztcbmltcG9ydCBlcnJvcnNWaXN1YWxpemVyIGZyb20gJy4vZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgaWYoIXRoaXMuc2lsZW50KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQge2NvbnRyb2wsIGRlcGVuZGVudHMgPSBbXSwgZXJyb3JDb25maWdzfSA9IHRoaXM7XG4gICAgICBsZXQgZGVsYXkgPSBkZWxheUNhbGN1bGF0b3IodGhpcy5zZXR0aW5ncywgZXJyb3JDb25maWdzKTtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCk7XG4gICAgICBcbiAgICAgIGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZXBlbmRlbnRzLnVuc2hpZnQoY29udHJvbCk7XG4gICAgICAgIF8uZWFjaChkZXBlbmRlbnRzLCBjb250cm9sID0+IHtcbiAgICAgICAgICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gICAgICAgICAgXG4gICAgICAgICAgXy5leHRlbmQodmFsaWRpZnksIHtzaWxlbnQ6IGZhbHNlLCBpZ25vcmVEZXBlbmRlbnRzOiBmYWxzZX0pO1xuICAgICAgICAgIF8uZWFjaCh2YWxpZGlmeS5lcnJvcnMsIF8ucGFydGlhbChlcnJvcnNWaXN1YWxpemVyLCB0aGlzLnNldHRpbmdzLCBfKSk7XG4gICAgICAgIH0pXG4gICAgICB9LCBkZWxheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvdmlzdWFsaXplci50cyIsImltcG9ydCB2YWxpZGF0b3IgICAgICAgZnJvbSAnLi92YWxpZGF0b3IvdmFsaWRhdG9yJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgZnJvbSAnLi9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yJztcbmltcG9ydCBtZXNzYWdlciAgICAgICAgZnJvbSAnLi9tZXNzYWdlci9tZXNzYWdlcic7XG5pbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IsXG4gIHByZXByb2Nlc3NvcixcbiAgbWVzc2FnZXIsXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL2RlcHMudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlcGVuZGVuY3lOYW1lcyA9PiB7XG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXMubWFwKGRlcGVuZGVuY3lOYW1lID0+IHtcbiAgICByZXR1cm4gXy51cHBlckZpcnN0KF8ubG93ZXJDYXNlKGRlcGVuZGVuY3lOYW1lKSk7XG4gIH0pLmpvaW4oJywgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXIudHMiLCJpbXBvcnQgZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIgZnJvbSAnLi9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWVQcm9wZXJ9ID0gY29udHJvbDtcbiAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIoZGVwZW5kZW5jeU5hbWVzKTtcbiAgcmV0dXJuIGAke2NvbnRyb2xOYW1lUHJvcGVyfSBkZXBlbmRzIG9uICR7ZGVwZW5kZW5jeU5hbWVzfWA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9tZXNzYWdlci50cyIsImNvbnN0IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtkZXBlbmRlbmN5RGVwZW5kZW50c01hcH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc3RyLCBjaGFyKSA9PiB7XG4gIGxldCByeCA9IG5ldyBSZWdFeHAoYFxcXFxzKiR7Y2hhcn1cXFxccypgKTtcbiAgcmV0dXJuIHN0ci5zcGxpdChyeCkubWFwKHBpZWNlID0+IHBpZWNlLnRyaW0oKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9fbGliL3N0ci1hcnJheWlmaWVyLnRzIiwiaW1wb3J0IHN0ckFycmF5aWZpZXIgZnJvbSAnLi9fbGliL3N0ci1hcnJheWlmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCkgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IHN0ckFycmF5aWZpZXIoZGVwZW5kZW5jeU5hbWVzLCAnLCcpO1xuICBpZihkZXBlbmRlbmN5TmFtZXMuaW5kZXhPZihjb250cm9sTmFtZSkgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtjb250cm9sTmFtZX1dIGNhbm5vdCBkZXBlbmQgb24gaXRzZWxmYCk7XG4gIH1cbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lSZXF1ZXN0c30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCB7X3BhcmVudH0gPSBjb250cm9sO1xuICBsZXQgZm9ybURlcGVuZGVuY3lSZXF1ZXN0cyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gICAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeVJlcXVlc3RzKSB7XG4gICAgZGVwZW5kZW5jeVJlcXVlc3RzLnNldChfcGFyZW50LCBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzID0ge30pO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHNbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lSZXF1ZXN0c1tkZXBlbmRlbmN5TmFtZV0gPSBbXTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKGNvbnRyb2wpOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci50cyIsImltcG9ydCBkZXBlbmRlbnRzU2V0dGVyICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW5jeVJlcXVlc3RSZWdpc3RyYXIgZnJvbSAnLi9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IGRlcGVuZGVuY3lDb250cm9sID0gY29udHJvbC5fcGFyZW50LmNvbnRyb2xzW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKGRlcGVuZGVuY3lDb250cm9sKSB7XG4gICAgcmV0dXJuIGRlcGVuZGVudHNTZXR0ZXIoZGVwZW5kZW5jeUNvbnRyb2wsIGNvbnRyb2wpO1xuICB9XG4gIFxuICBkZXBlbmRlbmN5UmVxdWVzdFJlZ2lzdHJhcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwiaW1wb3J0IGZvcm1EZXBlbmRlbmN5TWFwR2V0dGVyICAgZnJvbSAnLi9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQge19wYXJlbnQsIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBmb3JtRGVwZW5kZW5jeU1hcEdldHRlcihfcGFyZW50KTtcbiAgbGV0IGNvbnRyb2xEZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2NvbnRyb2xOYW1lXTtcbiAgXG4gIGlmKChjb250cm9sRGVwZW5kZW50cyB8fCBbXSkuaW5kZXhPZihkZXBlbmRlbmN5TmFtZSkgPiAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgWyR7Y29udHJvbE5hbWV9XSBhbmQgWyR7ZGVwZW5kZW5jeU5hbWV9XSBkZXBlbmQgb24gZWFjaCBvdGhlcmApO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZighZGVwZW5kZW50cykge1xuICAgIGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbZGVwZW5kZW5jeU5hbWVdID0gW107XG4gIH1cbiAgXG4gIGRlcGVuZGVudHMucHVzaChjb250cm9sTmFtZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lEZXBlbmRlbnRzTWFwfSBmcm9tICcuLi8uLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBfcGFyZW50ID0+IHtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwLmdldChfcGFyZW50KTtcbiAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXApIHtcbiAgICBkZXBlbmRlbmN5RGVwZW5kZW50c01hcC5zZXQoX3BhcmVudCwgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0ge30pO1xuICB9XG4gIFxuICByZXR1cm4gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZXBlbmRlbmN5TmFtZXNUcmFuc2Zvcm1lciBmcm9tICcuL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgZGVwZW5kZW50VHJhY2tlciAgICAgICAgICAgZnJvbSAnLi9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlcic7XG5pbXBvcnQgZGVwZW5kZW50UmVnaXN0cmFyICAgICAgICAgZnJvbSAnLi9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVuY3lOYW1lc1RyYW5zZm9ybWVyKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCk7XG5cbiAgXy5lYWNoKGRlcGVuZGVuY3lOYW1lcywgZGVwZW5kZW5jeU5hbWUgPT4ge1xuICAgIGRlcGVuZGVudFRyYWNrZXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xuICAgIGRlcGVuZGVudFJlZ2lzdHJhcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwiaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbHN9ID0gY29udHJvbC5fcGFyZW50O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbmN5TmFtZSBvZiBkZXBlbmRlbmN5TmFtZXMpIHtcbiAgICBsZXQgZGVwZW5kZW5jeUNvbnRyb2wgPSBjb250cm9sc1tkZXBlbmRlbmN5TmFtZV07XG5cbiAgICBpZighZGVwZW5kZW5jeUNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUud2FybihgZGVwZW5kZW5jeSBbJHtkZXBlbmRlbmN5TmFtZX1dIGlzIG5vdCBkZWNsYXJlZGApO1xuICAgIH1cblxuICAgIGlmKCFkZXBlbmRlbmN5Q29udHJvbCB8fCBkZXBlbmRlbmN5Q29udHJvbC5pbnZhbGlkKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy92YWxpZGF0b3IvdmFsaWRhdG9yLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlbWFpbEdvdic7XG5jb25zdCBlbWFpbEdvdlJ4ID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSooXFwuKGdvdnxtaWwpKSQvO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWVtYWlsR292UngudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgbm90IGEgdmFsaWQgZ292ZXJubWVudCBlbWFpbGA7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZW1haWwnO1xuY29uc3QgZW1haWxSeCA9IC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqJC87XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighZW1haWxSeC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyBub3QgYSB2YWxpZCBlbWFpbGA7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZW1haWwvZW1haWwudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VxdWFsc1RvJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgZXF1YWxzVG8pIHtcbiAgICBsZXQge3ZhbHVlLCBfcGFyZW50fSA9IGNvbnRyb2w7XG4gICAgbGV0IGVxdWFsc1RvQ29udHJvbCA9IF9wYXJlbnQuY29udHJvbHNbZXF1YWxzVG9dO1xuXG4gICAgaWYoIXZhbHVlIHx8IHZhbHVlICE9PSBlcXVhbHNUb0NvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCwgdmFsaWRhdG9yQ29uZmlncykge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBtdXN0IGVxdWFsIHRvICR7dmFsaWRhdG9yQ29uZmlnc31gO1xuICB9LFxuXG4gIHZhbGlkYXRvck5hbWVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VxdWFscy10by9lcXVhbHMtdG8udHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ21heExlbmd0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIGxldCB7dmFsdWV9ID0gY29udHJvbDtcbiAgICBpZighdmFsdWUgfHwgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIGlmKCFtYXhMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4aW11bSBsZW5ndGggc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICttYXhMZW5ndGg7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gc2hvdWxkIGJlIGxlc3MgdGhhbiAke21heExlbmd0aH0gY2hhcmFjdGVyc2A7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvbWF4LWxlbmd0aC9tYXgtbGVuZ3RoLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdtaW5MZW5ndGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICBpZighbWluTGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbmltdW0gbGVuZ3RoIHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiArbWluTGVuZ3RoO1xuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IHNob3VsZCBiZSAke21pbkxlbmd0aH0gY2hhcmFjdGVyc2A7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvbWluLWxlbmd0aC9taW4tbGVuZ3RoLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2YWxpZGF0b3JOYW1lID0gJ3BhdHRlcm4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBwYXR0ZXJuKSB7XG4gICAgaWYoIXBhdHRlcm4udGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBwYXR0ZXJuKSB7XG4gICAgaWYoIXBhdHRlcm4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc3BlY2lmeSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybicpO1xuICAgIH1cbiAgICBcbiAgICBpZihfLmlzU3RyaW5nKHBhdHRlcm4pKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVybn0kYCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3BhdHRlcm4vcGF0dGVybi50cyIsImNvbnN0IGRpcmVjdGl2ZU5hbWUgPSAncmVxdWlyZWQnO1xuY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdyZXF1aXJlZFRydWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoY29udHJvbC52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHtbZGlyZWN0aXZlTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIHJlcXVpcmVkYDtcbiAgfSxcblxuICBkaXJlY3RpdmVOYW1lLFxuXG4gIHZhbGlkYXRvck5hbWUsXG4gIFxuICBjaGVja2JveDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAncmVxdWlyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyByZXF1aXJlZGA7XG4gIH0sXG5cbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkL3JlcXVpcmVkLnRzIiwiZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWVQcm9wZXJ9ID0gY29udHJvbDtcbiAgcmV0dXJuIGBWYWx1ZSBwcm92aWRlZCBmb3IgJHtjb250cm9sTmFtZVByb3Blcn0gZmllbGQgYWxyZWFkeSBleGlzdHNgO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9tZXNzYWdlci9tZXNzYWdlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGNvbmZpZ3MsIGJhc2VDb25maWdzKSA9PiB7XG4gIGlmKCFfLmlzUGxhaW5PYmplY3QoY29uZmlncykpIHtcbiAgICBjb25maWdzID0ge3BhdGg6IGNvbmZpZ3N9O1xuICB9XG4gIFxuICBsZXQge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSA9IGNvbmZpZ3M7XG4gIFxuICBpZihiYXNlQ29uZmlncykge1xuICAgIHZhciB7YmFzZVVybH0gPSBiYXNlQ29uZmlncztcbiAgfVxuICBcbiAgaWYoIWZpZWxkTmFtZSkge1xuICAgIGZpZWxkTmFtZSA9IGNvbnRyb2wuY29udHJvbE5hbWU7XG4gIH1cbiAgXG4gIGlmKCFpZ25vcmUpIHtcbiAgICBpZ25vcmUgPSBbXTtcbiAgfSBlbHNlIGlmKCFfLmlzQXJyYXkoaWdub3JlKSkge1xuICAgIGlnbm9yZSA9IFtpZ25vcmVdO1xuICB9XG4gIFxuICBpZihfLmlzVW5kZWZpbmVkKGlnbm9yZUNhc2UpKSB7XG4gICAgaWdub3JlQ2FzZSA9IHRydWU7XG4gIH1cbiAgXG4gIGlmKGlnbm9yZUNhc2UpIHtcbiAgICBpZ25vcmUgPSBpZ25vcmUubWFwKGlnbm9yZSA9PiAoaWdub3JlICsgJycpLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIFxuICBpZihiYXNlVXJsKSB7XG4gICAgcGF0aCA9IGJhc2VVcmwgKyBwYXRoO1xuICB9XG4gIFxuICByZXR1cm4gXy5leHRlbmQoY29uZmlncywge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdmFsaWRhdG9yICAgICAgIGZyb20gJy4vdmFsaWRhdG9yL3ZhbGlkYXRvcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgbWVzc2FnZXIgICAgICAgIGZyb20gJy4vbWVzc2FnZXIvbWVzc2FnZXInO1xuaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yLFxuICBwcmVwcm9jZXNzb3IsXG4gIG1lc3NhZ2VyLFxuICB2YWxpZGF0b3JOYW1lLFxuICBhc3luYzogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay91bmlxdWUtY2hlY2sudHMiLCJpbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBjb25maWdzKSA9PiB7XG4gIGxldCB7ZmllbGROYW1lLCBpZ25vcmUsIGlnbm9yZUNhc2UsIHBhdGh9ID0gY29uZmlncztcbiAgbGV0IHt2YWx1ZX0gPSBjb250cm9sO1xuXG4gIGlmKGlnbm9yZUNhc2UpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgXG4gIGlmKCF2YWx1ZSB8fCBpZ25vcmUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcGFyYW1zID0ge1tmaWVsZE5hbWVdOiB2YWx1ZX07XG4gICAgXG4gICAgY29udHJvbC5odHRwLmdldChwYXRoLCB7cGFyYW1zfSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgcmVzb2x2ZShkYXRhLmxlbmd0aCA/IHtbdmFsaWRhdG9yTmFtZV06IHRydWV9IDogbnVsbCk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgcmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsImltcG9ydCBkZXBzVmFsaWRhdG9yICAgICAgICAgZnJvbSAnLi9kZXBzL2RlcHMnO1xuaW1wb3J0IGVtYWlsVmFsaWRhdG9yICAgICAgICBmcm9tICcuL2VtYWlsL2VtYWlsJztcbmltcG9ydCBlbWFpbEdvdlZhbGlkYXRvciAgICAgZnJvbSAnLi9lbWFpbC1nb3YvZW1haWwtZ292JztcbmltcG9ydCBlcXVhbHNUb1ZhbGlkYXRvciAgICAgZnJvbSAnLi9lcXVhbHMtdG8vZXF1YWxzLXRvJztcbmltcG9ydCBtYXhMZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9tYXgtbGVuZ3RoL21heC1sZW5ndGgnO1xuaW1wb3J0IG1pbkxlbmd0aFZhbGlkYXRvciAgICBmcm9tICcuL21pbi1sZW5ndGgvbWluLWxlbmd0aCc7XG5pbXBvcnQgcGF0dGVyblZhbGlkYXRvciAgICAgIGZyb20gJy4vcGF0dGVybi9wYXR0ZXJuJztcbmltcG9ydCByZXF1aXJlZFZhbGlkYXRvciAgICAgZnJvbSAnLi9yZXF1aXJlZC9yZXF1aXJlZCc7XG5pbXBvcnQgcmVxdWlyZWRUcnVlVmFsaWRhdG9yIGZyb20gJy4vcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlJztcbmltcG9ydCB1bmlxdWVDaGVja1ZhbGlkYXRvciAgZnJvbSAnLi91bmlxdWUtY2hlY2svdW5pcXVlLWNoZWNrJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBkZXBzVmFsaWRhdG9yLFxuICByZXF1aXJlZFZhbGlkYXRvcixcbiAgbWluTGVuZ3RoVmFsaWRhdG9yLFxuICBtYXhMZW5ndGhWYWxpZGF0b3IsXG4gIHBhdHRlcm5WYWxpZGF0b3IsXG4gIGVtYWlsVmFsaWRhdG9yLFxuICBlbWFpbEdvdlZhbGlkYXRvcixcbiAgZXF1YWxzVG9WYWxpZGF0b3IsXG4gIHJlcXVpcmVkVHJ1ZVZhbGlkYXRvcixcbiAgdW5pcXVlQ2hlY2tWYWxpZGF0b3Jcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwiZXhwb3J0IGRlZmF1bHQgKG5hbWUsIGNoZWNrYm94KSA9PiB7XG4gIGxldCBjaGVja2JveFR5cGUgPSAnW3R5cGU9Y2hlY2tib3hdJztcbiAgbGV0IGNvbnRyb2xUeXBlcyA9IFsnZm9ybUNvbnRyb2xOYW1lJywgJ2Zvcm1Db250cm9sJywgJ25nTW9kZWwnXVxuICBjaGVja2JveCA9IGNoZWNrYm94ID8gYGlucHV0JHtjaGVja2JveFR5cGV9YCA6IGA6bm90KCR7Y2hlY2tib3hUeXBlfSlgO1xuICBcbiAgcmV0dXJuIGNvbnRyb2xUeXBlcy5yZWR1Y2UoKHNlbGVjdG9yLCBjb250cm9sVHlwZSkgPT4ge1xuICAgIHNlbGVjdG9yLnB1c2goYCR7Y2hlY2tib3h9WyR7bmFtZX1dWyR7Y29udHJvbFR5cGV9XWApO1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfSwgW10pLmpvaW4oJywnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9kaXJlY3RpdmVzLWdlbmVyYXRvci9fbGliL3NlbGVjdG9yLWFzc2VtYmxlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRQbHVzfSAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25nLWh0dHAtY2xpZW50LXBsdXMnO1xuaW1wb3J0IHtOR19WQUxJREFUT1JTLCBOR19BU1lOQ19WQUxJREFUT1JTfSAgICAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgc2VsZWN0b3JBc3NlbWJsZXIgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXInO1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0b3JzID0+IHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHZhbGlkYXRvckNvbmZpZ3VyYXRvciA9PiB7XG4gICAgbGV0IHthc3luYzogX2FzeW5jLCBjaGVja2JveCwgdmFsaWRhdG9yTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcjtcbiAgICBsZXQge2RpcmVjdGl2ZU5hbWVQcmVmaXhlZH0gPSB2YWxpZGF0b3JDb25maWd1cmF0b3I7XG4gICAgbGV0IGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmVOYW1lUHJlZml4ZWQgfHwgdmFsaWRhdG9yTmFtZVByZWZpeGVkO1xuICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yQXNzZW1ibGVyKGRpcmVjdGl2ZU5hbWUsIGNoZWNrYm94KTtcblxuICAgIGxldCBwcm92aWRlcnMgPSBbe1xuICAgICAgcHJvdmlkZTogX2FzeW5jID8gTkdfQVNZTkNfVkFMSURBVE9SUyA6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcyksXG4gICAgICBtdWx0aTogdHJ1ZSAgICAgICAgXG4gICAgfV07XG4gICAgXG4gICAgQERpcmVjdGl2ZSh7c2VsZWN0b3IsIHByb3ZpZGVyc30pIGNsYXNzIFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzIHtcbiAgICAgIHByaXZhdGUgdmFsaWRhdG9yO1xuICAgICAgcHJpdmF0ZSBvbkNoYW5nZTtcbiAgICAgIHByaXZhdGUgY29udHJvbDtcbiAgICAgIEBJbnB1dChgJHtkaXJlY3RpdmVOYW1lfWApIHByaXZhdGUgY29uZmlncztcbiAgICBcbiAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFBsdXMpIHt9XG4gICAgXG4gICAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIGlmKCdjb25maWdzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgaWYoIXRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIHZhbGlkYXRlKGNvbnRyb2w/KSB7XG4gICAgICAgIGxldCBlcnJvciA9IHtbZGlyZWN0aXZlTmFtZV06IHRydWV9O1xuICAgICAgICBcbiAgICAgICAgaWYoX2FzeW5jKSB7XG4gICAgICAgICAgXy5leHRlbmQoY29udHJvbCwge2h0dHA6IHRoaXMuaHR0cH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICAgICBjb250cm9sLCBcbiAgICAgICAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIF9hc3luYyA/IFByb21pc2UucmVzb2x2ZShlcnJvcikgOiBlcnJvcjsgXG4gICAgICB9XG4gICAgXG4gICAgICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjsgXG4gICAgICB9XG4gICAgXG4gICAgICBwcml2YXRlIGNyZWF0ZVZhbGlkYXRvcigpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3JDb25maWd1cmF0b3IodGhpcy5jb250cm9sLCB0aGlzLmNvbmZpZ3MsIHRoaXMuZWwpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcztcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRQbHVzTW9kdWxlfSBmcm9tICduZy1odHRwLWNsaWVudC1wbHVzJztcbmltcG9ydCBwcmVmaXhlciAgICAgICAgICAgICAgIGZyb20gJy4uL19saWIvcHJlZml4ZXInO1xuaW1wb3J0IHZhbGlkYXRvckNvbmZpZ3VyYXRvciAgZnJvbSAnLi4vdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yJztcbmltcG9ydCBkaXJlY3RpdmVzR2VuZXJhdG9yICAgIGZyb20gJy4uL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzKSA9PiB7XG4gIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3IgPT4ge1xuICAgIGxldCB7dmFsaWRhdG9yTmFtZSwgZGlyZWN0aXZlTmFtZX0gPSB2YWxpZGF0b3I7XG4gICAgbGV0IHZhbGlkYXRvck5hbWVQcmVmaXhlZCA9IHByZWZpeGVyKHNldHRpbmdzLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIGRpcmVjdGl2ZU5hbWUpO1xuICAgIF8uZXh0ZW5kKHZhbGlkYXRvciwge3ZhbGlkYXRvck5hbWVQcmVmaXhlZCwgZGlyZWN0aXZlTmFtZVByZWZpeGVkfSk7XG4gICAgcmV0dXJuIHZhbGlkYXRvckNvbmZpZ3VyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9yKTtcbiAgfSk7XG4gIFxuICBsZXQgZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXNHZW5lcmF0b3IodmFsaWRhdG9ycyk7XG5cbiAgQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbSHR0cENsaWVudFBsdXNNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogZGlyZWN0aXZlcywgXG4gICAgZXhwb3J0czogZGlyZWN0aXZlc1xuICB9KSBjbGFzcyBWYWxpZGF0b3JNb2R1bGUge31cbiAgXG4gIHJldHVybiBWYWxpZGF0b3JNb2R1bGU7ICAgIFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5hbWVBc3NpZ25lciAgICAgZnJvbSAnLi9uYW1lLWFzc2lnbmVyL25hbWUtYXNzaWduZXInO1xuaW1wb3J0IFZhbGlkYXRpb25TdGF0ZXIgZnJvbSAnLi4vLi4vLi4vc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgZWwpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBcbiAgaWYoIXZhbGlkaWZ5KSB7XG4gICAgZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIG5hbWVBc3NpZ25lcihjb250cm9sKTtcbiAgICBcbiAgICB2YWxpZGlmeSA9IHtcbiAgICAgIGVsZW1lbnRzOiB7fSxcbiAgICAgIGVycm9yczoge30sXG4gICAgICB2YWxpZGF0aW9uU3RhdGVyOiBuZXcgVmFsaWRhdGlvblN0YXRlcihzZXR0aW5ncywgY29udHJvbClcbiAgICB9O1xuICAgIFxuICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHt2YWxpZGlmeSwgZWwsICRlbDogJChlbCl9KTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9kYXRhLWluaXRpYWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtjb250cm9sc30gPSBjb250cm9sLl9wYXJlbnQ7XG4gIGxldCBjb250cm9sTmFtZXMgPSBfLmtleXMoY29udHJvbHMpO1xuICBmb3IobGV0IGNvbnRyb2xOYW1lIG9mIGNvbnRyb2xOYW1lcykge1xuICAgIGlmKGNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9PT0gY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2xOYW1lO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL2xpYi9uYW1lLWFjY2Vzc29yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5hbWVBY2Nlc3NvciBmcm9tICcuL2xpYi9uYW1lLWFjY2Vzc29yJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgXG4gIGlmKCFjb250cm9sTmFtZSkge1xuICAgIGNvbnRyb2xOYW1lID0gbmFtZUFjY2Vzc29yKGNvbnRyb2wpO1xuICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHtcbiAgICAgIGNvbnRyb2xOYW1lLFxuICAgICAgY29udHJvbE5hbWVQcm9wZXI6IF8udXBwZXJGaXJzdChfLmxvd2VyQ2FzZShjb250cm9sTmFtZSkpXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwiaW1wb3J0IHtkZXBlbmRlbmN5UmVxdWVzdHN9IGZyb20gJy4uLy4uLy4uL19saWIvdmFycyc7XG5pbXBvcnQgZGVwZW5kZW50c1NldHRlciAgICAgZnJvbSAnLi4vLi4vLi4vZGVwZW5kZW50cy1zZXR0ZXIvZGVwZW5kZW50cy1zZXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtfcGFyZW50LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQgcGFyZW50UmVjb3JkcyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gIFxuICBpZihwYXJlbnRSZWNvcmRzKSB7XG4gICAgbGV0IGRlcGVuZGVudFJlY29yZHMgPSBwYXJlbnRSZWNvcmRzW2NvbnRyb2xOYW1lXTtcblxuICAgIGlmKGRlcGVuZGVudFJlY29yZHMpIHtcbiAgICAgIGRlcGVuZGVudHNTZXR0ZXIoY29udHJvbCwgZGVwZW5kZW50UmVjb3Jkcyk7XG4gICAgICBkZWxldGUgcGFyZW50UmVjb3Jkc1tjb250cm9sTmFtZV07XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyICAgICAgICAgZnJvbSAnLi4vLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgY29udGFpbmVyQWRkZXIgICAgICAgICAgZnJvbSAnLi4vX2xpYi9jb250YWluZXItYWRkZXInO1xuaW1wb3J0IEFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyIGZyb20gJy4uLy4uLy4uLy4uL3N0YXRlcnMvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkaWZ5LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jcyA9IHt9LCBlbGVtZW50c30gPSB2YWxpZGlmeTtcbiAgXG4gIGlmKCF2YWxpZGF0b3JEZWNsYXJhdGlvbi5hc3luYyB8fCAhXy5pc0VtcHR5KGFzeW5jcykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGxldCB7YXN5bmNTdGF0dXNIaWRlQ2xhc3MsIHNlbGVjdG9yc30gPSBzZXR0aW5ncztcbiAgbGV0IHthc3luY1N0YXR1c0NvbnRhaW5lcn0gPSBzZWxlY3RvcnM7XG4gIGxldCB7JGVsLCAkZWxDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gIGxldCAkYXN5bmNzQ29udGFpbmVyID0gJCgnPGRpdi8+Jyk7XG4gIGxldCAkcGVuZGluZyA9ICQoJzxkaXYvPicpO1xuICBsZXQgJHN1Y2Nlc3MgPSAkKCc8ZGl2Lz4nKTtcblxuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRhc3luY3NDb250YWluZXIsICdhc3luY3MtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRwZW5kaW5nLCAnYXN5bmMtcGVuZGluZycsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkc3VjY2VzcywgJ2FzeW5jLXN1Y2Nlc3MnLCBjb250cm9sTmFtZSk7XG4gIFxuICAkYXN5bmNzQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJHBlbmRpbmcuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkc3VjY2Vzcy5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRhc3luY3NDb250YWluZXIuYXBwZW5kKCRwZW5kaW5nKS5hcHBlbmQoJHN1Y2Nlc3MpO1xuICBcbiAgXy5leHRlbmQoYXN5bmNzLCB7JGFzeW5jc0NvbnRhaW5lciwgJHBlbmRpbmcsICRzdWNjZXNzfSk7XG4gIF8uZXh0ZW5kKHZhbGlkaWZ5LCB7YXN5bmNzLCBhc3luY1N0YXR1c2VzOiB7fX0pO1xuICBcbiAgY29udGFpbmVyQWRkZXIoJGVsLCAkYXN5bmNzQ29udGFpbmVyLCAkZWxDb250YWluZXIsIGFzeW5jU3RhdHVzQ29udGFpbmVyKTtcbiAgdmFsaWRpZnkuYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIgPSBuZXcgQXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJpbXBvcnQgZXJyb3JzQ29udGFpbmVyQnVpbGRlciBmcm9tICcuL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXInO1xuaW1wb3J0IGFzeW5jQ29udGFpbmVyQnVpbGRlciAgZnJvbSAnLi9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgZXJyb3JzQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCk7XG4gIGFzeW5jQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZWxlbWVudHMtaW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uLy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IGNvbnRhaW5lckFkZGVyICBmcm9tICcuLi9fbGliL2NvbnRhaW5lci1hZGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCkgPT4ge1xuICBsZXQgeyRlbCwgdmFsaWRpZnksIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCB7ZWxlbWVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0VtcHR5KGVsZW1lbnRzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHtlbGVtZW50Q29udGFpbmVyLCBlcnJvcnNDb250YWluZXJ9ID0gc2V0dGluZ3Muc2VsZWN0b3JzO1xuICBsZXQgJGVsQ29udGFpbmVyID0gZWxlbWVudENvbnRhaW5lciA/ICRlbC5jbG9zZXN0KGVsZW1lbnRDb250YWluZXIpIDogJCgpO1xuICBsZXQgJGVycm9yc0NvbnRhaW5lciA9ICQoJzxkaXYvPicpO1xuXG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsLCAnZWwnLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsQ29udGFpbmVyLCAnZWwtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlcnJvcnNDb250YWluZXIsICdlcnJvcnMtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBcbiAgXy5leHRlbmQoZWxlbWVudHMsIHskZWwsICRlbENvbnRhaW5lciwgJGVycm9yc0NvbnRhaW5lcn0pO1xuICBjb250YWluZXJBZGRlcigkZWwsICRlcnJvcnNDb250YWluZXIsICRlbENvbnRhaW5lciwgZXJyb3JzQ29udGFpbmVyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoZXJyb3JNZXNzYWdlLCBwcmVmaXgpID0+IHtcbiAgbGV0IGdlbmVyYWxDbGFzcyA9IHByZWZpeCArICctZXJyb3Itd29yZCc7XG4gIFxuICByZXR1cm4gZXJyb3JNZXNzYWdlLnNwbGl0KC9cXHMrLykubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgIGxldCBzcGVjaWZpY0NsYXNzID0gZ2VuZXJhbENsYXNzICsgJy0nICsgaW5kZXg7XG4gICAgcmV0dXJuIGA8c3BhbiBjbGFzcyA9IFwiJHtnZW5lcmFsQ2xhc3N9ICR7c3BlY2lmaWNDbGFzc31cIj4ke3dvcmR9PC9zcGFuPmA7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IHNwYW5uaWZpZXIgICAgICBmcm9tICcuL19saWIvc3Bhbm5pZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQsIGFzeW5jOiBfYXN5bmN9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7bWVzc2FnZXJ9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7ZWxlbWVudHMsIGVycm9yc30gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgYmFzZUVycm9yQ29uZmlncyA9IHskZWw6ICQoKSwgX2FzeW5jLCB2YWxpZGF0b3JOYW1lLCBjb250cm9sfTtcbiAgXG4gIGlmKCFtZXNzYWdlcikge1xuICAgIHJldHVybiBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gPSBiYXNlRXJyb3JDb25maWdzO1xuICB9XG4gIFxuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdIHx8IGJhc2VFcnJvckNvbmZpZ3M7XG4gIGxldCB7JGVsfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHt2YWxpZGF0b3I6IHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyOiBtZXNzYWdlckNvbmZpZ3MsIGJhc2VDb25maWdzfSA9IGNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQgeyRlcnJvcnNDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gIGxldCBlcnJvck1lc3NhZ2VyID0gXy5pc0Z1bmN0aW9uKG1lc3NhZ2VyKSA/IG1lc3NhZ2VyIDogKCkgPT4gbWVzc2FnZXI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VyKGNvbnRyb2wsIHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyQ29uZmlncywgYmFzZUNvbmZpZ3MpO1xuICBlcnJvck1lc3NhZ2UgPSBzcGFubmlmaWVyKGVycm9yTWVzc2FnZSwgcHJlZml4KTtcbiAgXG4gIGlmKCEkZWwubGVuZ3RoKSB7XG4gICAgbGV0IHN5bmNBc3luY0NsYXNzID0gYCR7cHJlZml4fS1gICsgKF9hc3luYyA/ICdhc3luYycgOiAnc3luYycpO1xuICAgICRlbCA9ICQoJzxkaXYvPicpO1xuICAgICRlbC5hZGRDbGFzcyhzeW5jQXN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hcHBlbmQoJGVsKTtcbiAgICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbCwgJ2Vycm9yJywgdmFsaWRhdG9yTmFtZSk7XG4gICAgZXJyb3JDb25maWdzID0gXy5leHRlbmQoZXJyb3JDb25maWdzLCB7JGVsfSk7XG4gICAgXG4gICAgaWYoZXJyb3JNZXNzYWdlQ2xhc3NlcyAmJiBlcnJvck1lc3NhZ2VDbGFzc2VzLmluaXRpYWwpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmluaXRpYWwpO1xuICAgIH1cbiAgICBcbiAgICBpZihfYXN5bmMpIHtcbiAgICAgIGVycm9yQ29uZmlncy5yZXF1ZXN0cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gPSBlcnJvckNvbmZpZ3M7XG4gIH1cblxuICAkZWwuaHRtbChlcnJvck1lc3NhZ2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ByZXByb2Nlc3Nvcn0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgXG4gIGlmKCFfLmlzUGxhaW5PYmplY3QoY29uZmlncykpIHtcbiAgICBjb25maWdzID0ge3ZhbGlkYXRvcjogY29uZmlnc307XG4gIH1cbiAgXG4gIGlmKHByZXByb2Nlc3Nvcikge1xuICAgIGxldCB7dmFsaWRhdG9yQ29uZmlnc30gPSBzZXR0aW5ncztcbiAgICBcbiAgICBpZih2YWxpZGF0b3JDb25maWdzKSB7XG4gICAgICBsZXQge3ZhbGlkYXRvck5hbWV9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gICAgICB2YXIgYmFzZUNvbmZpZ3MgPSB2YWxpZGF0b3JDb25maWdzW3ZhbGlkYXRvck5hbWVdO1xuICAgICAgXy5leHRlbmQoY29uZmlncywge2Jhc2VDb25maWdzfSk7XG4gICAgfVxuXG4gICAgY29uZmlncy52YWxpZGF0b3IgPSBwcmVwcm9jZXNzb3IoY29udHJvbCwgY29uZmlncy52YWxpZGF0b3IsIGJhc2VDb25maWdzKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWdzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyIGZyb20gJy4uL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplcic7XG5pbXBvcnQgaW5pdGlhbERhdGFTZXR0ZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXInO1xuaW1wb3J0IHJlcXVlc3RzTnVsbGlmaWVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllcic7XG5pbXBvcnQgaW5pdGlhbFZpc3VhbGl6ZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyJztcbmltcG9ydCBmaW5hbERhdGFTZXR0ZXIgICAgICAgICAgICBmcm9tICcuL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlcic7XG5pbXBvcnQgZmluYWxWaXN1YWxpemVyICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9maW5hbC12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBpZihjb250cm9sLnZhbGlkVmFsdWUgPT09IGNvbnRyb2wudmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0gICBcbiAgXG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkLCB2YWxpZGF0b3J9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgZXJyb3JzLCB2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBsZXQgdmFsaWRhdGlvbklkID0gXy51bmlxdWVJZCgpO1xuXG4gIGlmKGNvbnRyb2wuaW52YWxpZFZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgbGV0IGVycm9yID0ge1t2YWxpZGF0b3JOYW1lUHJlZml4ZWRdOiB0cnVlfTtcbiAgICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBlcnJvcikudmlzdWFsaXplKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlcnJvcik7XG4gIH1cbiAgXG4gIGluaXRpYWxEYXRhU2V0dGVyKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpO1xuICByZXF1ZXN0c051bGxpZmllcihjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uSWQpO1xuICBpbml0aWFsVmlzdWFsaXplcihjb250cm9sLCB2YWxpZGF0b3JOYW1lKTtcbiAgXG4gIGNsZWFyVGltZW91dChlcnJvckNvbmZpZ3MuYXN5bmNEZWJvdW5jZVRpbWVvdXQpO1xuICBcbiAgZXJyb3JDb25maWdzLmFzeW5jRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgaWYodmFsaWRpZnkuc3luYykge1xuICAgICAgcmV0dXJuIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcodHJ1ZSk7XG4gICAgXG4gICAgdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKS50aGVuKHZhbGlkYXRpb25TdGF0dXMgPT4ge1xuICAgICAgaWYoZXJyb3JDb25maWdzLnJlcXVlc3RzW3ZhbGlkYXRpb25JZF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YWxpZGF0aW9uU3RhdHVzID0gdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpO1xuICAgICAgZmluYWxEYXRhU2V0dGVyKGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uLCB2YWxpZGF0aW9uU3RhdHVzKTtcbiAgICAgIGZpbmFsVmlzdWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cyk7ICAgICAgXG4gICAgfSk7XG4gIH0sIHNldHRpbmdzLmFzeW5jRGVib3VuY2VUaW1lKTtcbiAgXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1t2YWxpZGF0b3JOYW1lUHJlZml4ZWRdOiB0cnVlfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24sIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgbGV0IHtlcnJvcnMsIHZhbHVlLCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jU3RhdHVzZXMsIGVycm9yczogX2Vycm9yc30gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIFxuICBfZXJyb3JzW3ZhbGlkYXRvck5hbWVdLnJlcXVlc3RzID0ge307XG4gIHZhbGlkaWZ5LnN5bmMgPSBmYWxzZTtcbiAgYXN5bmNTdGF0dXNlc1t2YWxpZGF0b3JOYW1lXSA9IGZhbHNlO1xuICBcbiAgaWYoIXZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICBlcnJvcnMgPSBfLm9taXQoZXJyb3JzLCBbdmFsaWRhdG9yTmFtZVByZWZpeGVkXSk7XG4gIH1cbiAgXG4gIF8uZXh0ZW5kKGVycm9ycywgdmFsaWRhdGlvblN0YXR1cyk7XG4gIFxuICBpZihfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgIGNvbnRyb2wudmFsaWRWYWx1ZSA9IHZhbHVlO1xuICAgIGVycm9ycyA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnRyb2wuaW52YWxpZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgXG4gIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luY1N0YXR1c2VzID0+IHtcbiAgcmV0dXJuIF8ucmVkdWNlKGFzeW5jU3RhdHVzZXMsIChjb3VudCwgc3RhdHVzKSA9PiB7XG4gICAgcmV0dXJuIGNvdW50ICs9ICtzdGF0dXM7XG4gIH0sIDApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwiaW1wb3J0IGFjdGl2ZUFzeW5jc0NvdW50ZXIgZnJvbSAnLi9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNTdGF0dXNlcywgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighYWN0aXZlQXN5bmNzQ291bnRlcihhc3luY1N0YXR1c2VzKSkge1xuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcoZmFsc2UpO1xuICAgIFxuICAgIGlmKCF2YWxpZGF0aW9uU3RhdHVzICYmIGNvbnRyb2wudmFsaWQpIHtcbiAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuc3VjY2VzcyhmYWxzZSk7XG4gICAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgICB9LCBzZXR0aW5ncy5hc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSkgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG5cbiAgY29udHJvbC52YWxpZFZhbHVlID0gY29udHJvbC5pbnZhbGlkVmFsdWUgPSBudWxsO1xuICB2YWxpZGlmeS5hc3luY1N0YXR1c2VzW3ZhbGlkYXRvck5hbWVdID0gdHJ1ZTtcbiAgdmFsaWRpZnkuc3luYyA9IGZhbHNlOyAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpID0+IHtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgdmFsaWRhdGlvblN0YXRlcn0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5jb250YWluZXIodHJ1ZSk7XG4gIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3MoZmFsc2UpO1xuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBudWxsKS52aXN1YWxpemUoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvbklkKSA9PiB7XG4gIGxldCB7cmVxdWVzdHN9ID0gY29udHJvbC52YWxpZGlmeS5lcnJvcnNbdmFsaWRhdG9yTmFtZV07XG5cbiAgXy5lYWNoKHJlcXVlc3RzLCAocmVxdWVzdCwga2V5KSA9PiB7XG4gICAgcmVxdWVzdHNba2V5XSA9IHRydWU7XG4gIH0pO1xuICBcbiAgcmVxdWVzdHNbdmFsaWRhdGlvbklkXSA9IGZhbHNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXIudHMiLCJpbXBvcnQgdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIgZnJvbSAnLi4vX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7dmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3IsIHZhbGlkYXRvck5hbWV9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB2YWxpZGF0aW9uU3RhdHVzID0gdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKTtcbiAgXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICB2YWxpZGlmeS5zeW5jID0gdHJ1ZTtcbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xuICByZXR1cm4gdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3IudHMiLCJpbXBvcnQgc3luY1ZhbGlkYXRvciAgZnJvbSAnLi9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvcic7XG5pbXBvcnQgYXN5bmNWYWxpZGF0b3IgZnJvbSAnLi9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmKHZhbGlkYXRvckRlY2xhcmF0aW9uLmFzeW5jKSB7XG4gICAgICByZXR1cm4gYXN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRhdGFJbml0aWFsaXplciAgICAgZnJvbSAnLi9kYXRhLWluaXRpYWxpemVyL2RhdGEtaW5pdGlhbGl6ZXInO1xuaW1wb3J0IGRlcGVuZGVudHNSZWdpc3RyYXIgZnJvbSAnLi9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgICAgICBmcm9tICcuL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3InO1xuaW1wb3J0IGVsZW1lbnRzSW5pdGlhbGl6ZXIgZnJvbSAnLi9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplcic7XG5pbXBvcnQgZXJyb3JHZW5lcmF0b3IgICAgICBmcm9tICcuL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3InO1xuaW1wb3J0IHZhbGlkYXRvckJ1aWxkZXIgICAgZnJvbSAnLi92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IGRhdGFOYW1lcyA9IFsnYXN5bmMnLCAnY2hlY2tib3gnLCAndmFsaWRhdG9yTmFtZScsICdkaXJlY3RpdmVOYW1lUHJlZml4ZWQnXTtcbiAgZGF0YU5hbWVzLnB1c2goJ3ZhbGlkYXRvck5hbWVQcmVmaXhlZCcsICdtZXNzYWdlcicpO1xuICBsZXQgc3VwcGxlbWVudGFsRGF0YSA9IF8ucGljayh2YWxpZGF0b3JEZWNsYXJhdGlvbiwgZGF0YU5hbWVzKTtcbiAgbGV0IGNvbmZpZ3VyYXRvciA9IChjb250cm9sLCBjb25maWdzLCBlbCkgPT4ge1xuICAgIGRhdGFJbml0aWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgZWwpO1xuICAgIGRlcGVuZGVudHNSZWdpc3RyYXIoY29udHJvbCk7XG4gICAgY29uZmlncyA9IHByZXByb2Nlc3NvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIGVsZW1lbnRzSW5pdGlhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICBlcnJvckdlbmVyYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIHJldHVybiB2YWxpZGF0b3JCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIF8uZXh0ZW5kKGNvbmZpZ3VyYXRvciwgc3VwcGxlbWVudGFsRGF0YSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzcxX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJmb3Jtc1wiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiYW1kXCI6XCJAYW5ndWxhci9mb3Jtc1wifVxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5nVmFsaWRpZmllciBmcm9tICcuL3ZhbGlkaWZpZXIvdmFsaWRpZmllcic7XG5cbmV4cG9ydCB7bmdWYWxpZGlmaWVyfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==