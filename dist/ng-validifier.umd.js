(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("jquery"), require("ng-http-client-plus"), require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "jquery", "ng-http-client-plus", "@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng-validifier"] = factory(require("lodash"), require("jquery"), require("ng-http-client-plus"), require("@angular/core"), require("@angular/forms"));
	else
		root["ng-validifier"] = factory(root["_"], root["$"], root["ngHttpClientPlus"], root["ng"]["core"], root["ng"]["forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_72__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
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
        if (!on) {
            this.classOperator('removeClass');
        }
        this.display('pending', on);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(72);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validator_configurator_validator_configurator__ = __webpack_require__(71);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initializer_initial_data_setter_initial_data_setter__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initializer_requests_nullifier_requests_nullifier__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initializer_initial_visualizer_initial_visualizer__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finalizer_pauser_pauser__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finalizer_final_data_setter_final_data_setter__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__finalizer_final_visualizer_final_visualizer__ = __webpack_require__(64);
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
    clearTimeout(errorConfigs.successTimeout);
    clearTimeout(errorConfigs.asyncDebounceTimeout);
    errorConfigs.asyncDebounceTimeout = setTimeout(function () {
        if (validify.sync) {
            return asyncProgressVisualizer.container(false);
        }
        var time = __WEBPACK_IMPORTED_MODULE_0_lodash__["now"]();
        asyncProgressVisualizer.pending(true);
        validator(control, configs.validator, configs.baseConfigs).then(function (validationStatus) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__finalizer_pauser_pauser__["a" /* default */])(time, settings)];
                    case 1:
                        _a.sent();
                        if (errorConfigs.requests[validationId]) {
                            return [2 /*return*/];
                        }
                        validationStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__["a" /* default */])(settings, validationStatus);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__finalizer_final_data_setter_final_data_setter__["a" /* default */])(control, validatorDeclaration, validationStatus);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__finalizer_final_visualizer_final_visualizer__["a" /* default */])(settings, errorConfigs, control, validatorName, validationStatus);
                        return [2 /*return*/];
                }
            });
        }); });
    }, settings.asyncDebounceTime);
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

/* harmony default export */ __webpack_exports__["a"] = function (settings, errorConfigs, control, validatorName, validationStatus) {
    var validify = control.validify;
    var asyncStatuses = validify.asyncStatuses, asyncProgressVisualizer = validify.asyncProgressVisualizer, validationStater = validify.validationStater;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_active_asyncs_counter__["a" /* default */])(asyncStatuses)) {
        asyncProgressVisualizer.pending(false);
        if (!validationStatus && control.valid) {
            asyncProgressVisualizer.success(true);
            errorConfigs.successTimeout = setTimeout(function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (time, settings) {
    time = __WEBPACK_IMPORTED_MODULE_0_lodash__["now"]() - time;
    time -= settings.asyncMinimumPendingDuration || time;
    if (time < 0) {
        time = 0;
    }
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
};;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var validify = control.validify;
    control.validValue = control.invalidValue = null;
    validify.asyncStatuses[validatorName] = true;
    validify.sync = false;
};;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var _a = control.validify, asyncProgressVisualizer = _a.asyncProgressVisualizer, validationStater = _a.validationStater;
    asyncProgressVisualizer.container(true);
    asyncProgressVisualizer.success(false);
    validationStater.set(validatorName, null).visualize();
};;


/***/ }),
/* 68 */
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
/* 69 */
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
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__ = __webpack_require__(69);
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_initializer_data_initializer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependents_registrar_dependents_registrar__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocessor_preprocessor__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_initializer_elements_initializer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_generator_error_generator__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator_builder_validator_builder__ = __webpack_require__(70);







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
/* 72 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validifier_validifier__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ngValidifier", function() { return __WEBPACK_IMPORTED_MODULE_0__validifier_validifier__["a"]; });




/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZThkZGUzOGM3MWU2ZTc2ODg4NiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvX2xpYi9wcmVmaXhlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBDbGllbnRQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCIsXCJhbWRcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL3Zpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9kZXBzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvX2xpYi9zdHItYXJyYXlpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL3BhdXNlci9wYXVzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImZvcm1zXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2Zvcm1zXCJ9Iiwid2VicGFjazovLy8uL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7O0FDQUE7QUFBQSxJQUFNLGtCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFFekMsSUFBTSxRQUFRLEdBQUc7SUFDZixNQUFNLEVBQUUsR0FBRztJQUVYLFNBQVMsRUFBRTtRQUNULGdCQUFnQixFQUFFLGFBQWE7UUFDL0IsZUFBZSxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxvQkFBb0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7S0FDaEQ7SUFFRCxtQkFBbUIsRUFBRTtRQUNuQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtB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QUFDVjtBQUNJO0FBRXhFLHdEQUFlLFVBQUMsUUFBUSxFQUFFLG9CQUFvQjtJQUM1QyxJQUFJLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDaEYsU0FBUyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRCxJQUFJLGdCQUFnQixHQUFHLDRDQUFNLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsSUFBSSxZQUFZLEdBQUcsVUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDdEMsMEdBQWUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLGtIQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sR0FBRyxrR0FBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDekUsa0hBQW1CLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdELHdHQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsNEdBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUM7SUFFRixNQUFNLENBQUMsOENBQVEsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRCxDQUFDLEVBQUM7Ozs7Ozs7QUN0QkYsZ0Q7Ozs7Ozs7Ozs7QUNBbUQ7QUFFN0IiLCJmaWxlIjoibmctdmFsaWRpZmllci51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJuZy1odHRwLWNsaWVudC1wbHVzXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiLCBcImpxdWVyeVwiLCBcIm5nLWh0dHAtY2xpZW50LXBsdXNcIiwgXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmctdmFsaWRpZmllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIm5nLWh0dHAtY2xpZW50LXBsdXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nLXZhbGlkaWZpZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdLCByb290W1wiJFwiXSwgcm9vdFtcIm5nSHR0cENsaWVudFBsdXNcIl0sIHJvb3RbXCJuZ1wiXVtcImNvcmVcIl0sIHJvb3RbXCJuZ1wiXVtcImZvcm1zXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdlOGRkZTM4YzcxZTZlNzY4ODg2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZGVwZW5kZW5jeVJlcXVlc3RzID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIHByZWZpeDogJ3YnLFxuXG4gIHNlbGVjdG9yczoge1xuICAgIGVsZW1lbnRDb250YWluZXI6ICcuZm9ybS1ncm91cCcsXG4gICAgZXJyb3JzQ29udGFpbmVyOiBbJ2luc2VydEFmdGVyJywgJ2lucHV0J10sXG4gICAgYXN5bmNTdGF0dXNDb250YWluZXI6IFsnaW5zZXJ0QmVmb3JlJywgJ2lucHV0J11cbiAgfSxcbiAgXG4gIGVycm9yTWVzc2FnZUNsYXNzZXM6IHtcbiAgICBpbml0aWFsOiAnJyxcbiAgICB2YWxpZDogJycsXG4gICAgaW52YWxpZDogJydcbiAgfSxcblxuICBlcnJvck1lc3NhZ2VEZWxheXM6IHtcbiAgICB2YWxpZDogMzAwLFxuICAgIGludmFsaWQ6IDUwMFxuICB9LFxuXG4gIGFzeW5jRGVib3VuY2VUaW1lOiA1MDAsXG5cbiAgYXN5bmNTdGF0dXNIaWRlQ2xhc3M6ICdoaWRkZW4nLFxuICBcbiAgYXN5bmNTdWNjZXNzTWVzc2FnZUR1cmF0aW9uOiAxMDAwXG59O1xuXG5leHBvcnQge1xuICBkZXBlbmRlbmN5UmVxdWVzdHMsIFxuICBzZXR0aW5nc1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsICRlbCwgYmFzZUNsYXNzLCBjb250cm9sTmFtZSkgPT4ge1xuICBsZXQge3ByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IGNsYXNzZXMgPSBbYmFzZUNsYXNzLCBgJHtiYXNlQ2xhc3N9LSR7Y29udHJvbE5hbWV9YF07XG4gIGxldCBjbGFzc2VzU3RyID0gY2xhc3Nlcy5tYXAoa2xhc3MgPT4gYCR7cHJlZml4fS0ke2tsYXNzfWApLmpvaW4oJyAnKTtcbiAgJGVsLmFkZENsYXNzKGNsYXNzZXNTdHIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvX2xpYi9jbGFzcy1pZC1hc3NpZ25lci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIG5ld0RlcGVuZGVudHMpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2RlcGVuZGVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0FycmF5KG5ld0RlcGVuZGVudHMpKSB7XG4gICAgbmV3RGVwZW5kZW50cyA9IFtuZXdEZXBlbmRlbnRzXTtcbiAgfVxuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBfLnNldCh2YWxpZGlmeSwgJ2RlcGVuZGVudHMnLCBkZXBlbmRlbnRzID0gW10pO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goLi4ubmV3RGVwZW5kZW50cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdkZXBzJztcbmNvbnN0IGRlcGVuZGVuY2llc1RhYmxlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtcbiAgdmFsaWRhdG9yTmFtZSxcbiAgZGVwZW5kZW5jaWVzVGFibGVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL19saWIvdmFycy50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAndW5pcXVlQ2hlY2snO1xuXG5leHBvcnQge1xuICB2YWxpZGF0b3JOYW1lICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svX2xpYi92YXJzLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIG5hbWUpID0+IHtcbiAgbGV0IHtwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIFxuICBpZihwcmVmaXggJiYgbmFtZSkge1xuICAgIG5hbWUgPSBwcmVmaXggKyBfLnVwcGVyRmlyc3QobmFtZSk7XG4gIH1cbiAgXG4gIHJldHVybiBuYW1lO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL19saWIvcHJlZml4ZXIudHMiLCJpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkZWwsICRjb250YWluZXIsICRjb250YWluZXJDb250YWluZXIsIGluc2VydGlvblNwZWMpID0+IHtcbiAgbGV0IFthY3Rpb24sICRpbnNlcnRpb25Qb2ludF0gPSAoKCkgPT4ge1xuICAgIGlmKCEkY29udGFpbmVyQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFsnaW5zZXJ0QWZ0ZXInLCAkZWxdO1xuICAgIH1cbiAgICBcbiAgICBsZXQgW2FjdGlvbiwgYW5jaG9yXSA9IGluc2VydGlvblNwZWM7XG4gICAgbGV0ICRpbnNlcnRpb25Qb2ludCA9ICgoKSA9PiB7XG4gICAgICBpZighYW5jaG9yKSB7XG4gICAgICAgIHJldHVybiAkY29udGFpbmVyQ29udGFpbmVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gJChhbmNob3IsICRjb250YWluZXJDb250YWluZXIpO1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gW2FjdGlvbiwgJGluc2VydGlvblBvaW50XTtcbiAgfSkoKTtcbiAgXG4gICRjb250YWluZXJbYWN0aW9uXSgkaW5zZXJ0aW9uUG9pbnQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvX2xpYi9jb250YWluZXItYWRkZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuLi8uLi8uLi9fbGliL3ByZWZpeGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGlmKF8uaXNQbGFpbk9iamVjdCh2YWxpZGF0aW9uU3RhdHVzKSkge1xuICAgIGxldCBrZXkgPSBfLmtleXModmFsaWRhdGlvblN0YXR1cylbMF07XG4gICAgbGV0IHZhbHVlID0gdmFsaWRhdGlvblN0YXR1c1trZXldO1xuICAgIGtleSA9IHByZWZpeGVyKHNldHRpbmdzLCBrZXkpO1xuICAgIHZhbGlkYXRpb25TdGF0dXMgPSB7W2tleV06IHZhbHVlfTtcbiAgfVxuICBcbiAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBDbGllbnRQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCIsXCJhbWRcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge3NldHRpbmdzIGFzIG1haW5TZXR0aW5nc30gZnJvbSAnLi4vX2xpYi92YXJzJztcbmltcG9ydCBpbnRlcm5hbFZhbGlkYXRvcnMgICAgICAgICBmcm9tICcuLi92YWxpZGF0b3JzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IG1vZHVsZUdlbmVyYXRvciAgICAgICAgICAgIGZyb20gJy4vbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzID0gW10pID0+IHtcbiAgc2V0dGluZ3MgPSBfLmV4dGVuZCh7fSwgbWFpblNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIHZhbGlkYXRvcnMucHVzaCguLi5pbnRlcm5hbFZhbGlkYXRvcnMpO1xuICByZXR1cm4gbW9kdWxlR2VuZXJhdG9yKHNldHRpbmdzLCB2YWxpZGF0b3JzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHByaXZhdGUgc2V0dGluZ3M7XG4gIHByaXZhdGUgYXN5bmNzO1xuICBwcml2YXRlICRlbDtcbiAgcHJpdmF0ZSAkZWxDb250YWluZXI7XG4gIHByaXZhdGUgcGVuZGluZ0NsYXNzO1xuICBcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGNvbnRyb2wpIHtcbiAgICBsZXQge2FzeW5jcywgZWxlbWVudHN9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICAgIGxldCBwZW5kaW5nQ2xhc3MgPSBgJHtzZXR0aW5ncy5wcmVmaXh9LWFzeW5jLXBlbmRpbmdgO1xuICAgIFxuICAgIF8uZXh0ZW5kKHRoaXMsIHskZWwsICRlbENvbnRhaW5lciwgYXN5bmNzLCBwZW5kaW5nQ2xhc3MsIHNldHRpbmdzfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgZGlzcGxheSh0eXBlLCBvbikge1xuICAgIGxldCBtZXRob2QgPSBvbiA/ICdyZW1vdmVDbGFzcyc6ICdhZGRDbGFzcyc7XG4gICAgdGhpcy5hc3luY3NbJyQnICsgdHlwZV1bbWV0aG9kXSh0aGlzLnNldHRpbmdzLmFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBjbGFzc09wZXJhdG9yKG9wZXJhdGlvbikge1xuICAgIGxldCB7JGVsLCAkZWxDb250YWluZXIsIHBlbmRpbmdDbGFzc30gPSB0aGlzO1xuICAgICRlbFtvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyW29wZXJhdGlvbl0ocGVuZGluZ0NsYXNzKTtcbiAgfVxuICBcbiAgY29udGFpbmVyKG9uKSB7XG4gICAgaWYob24pIHtcbiAgICAgIHRoaXMuY2xhc3NPcGVyYXRvcignYWRkQ2xhc3MnKTsgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBlbmRpbmcob24pO1xuICAgICAgdGhpcy5zdWNjZXNzKG9uKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5kaXNwbGF5KCdhc3luY3NDb250YWluZXInLCBvbik7XG4gIH1cblxuICBwZW5kaW5nKG9uKSB7XG4gICAgaWYoIW9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ3JlbW92ZUNsYXNzJyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZGlzcGxheSgncGVuZGluZycsIG9uKTtcbiAgfVxuICBcbiAgc3VjY2Vzcyhvbikge1xuICAgIHRoaXMuZGlzcGxheSgnc3VjY2VzcycsIG9uKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXR0aW5ncywgY29udHJvbCkge1xuICBfLmV4dGVuZCh0aGlzLCB7c2V0dGluZ3MsIGNvbnRyb2wsIHN0YXRlOiB7fX0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvX2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yLnRzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVwZW5kZW50c0FnZ3JlZ2F0b3IoY29udHJvbCwgYWxsID0gW10pIHtcbiAgbGV0IHtkZXBlbmRlbnRzID0gW119ID0gY29udHJvbC52YWxpZGlmeTtcbiAgXG4gIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMpIHtcbiAgICBpZihhbGwuaW5kZXhPZihkZXBlbmRlbnQpID09PSAtMSkge1xuICAgICAgYWxsLnB1c2goZGVwZW5kZW50KTtcbiAgICAgIGRlcGVuZGVudHNBZ2dyZWdhdG9yKGRlcGVuZGVudCwgYWxsKTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBhbGw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZXBlbmRlbnRzQWdncmVnYXRvciBmcm9tICcuL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCB7c2lsZW50LCBkZXBlbmRlbnRzLCBjb250cm9sfSA9IHRoaXM7XG4gIFxuICBpZighc2lsZW50KSB7XG4gICAgaWYoIWNvbnRyb2wudmFsaWRpZnkuaWdub3JlRGVwZW5kZW50cykge1xuICAgICAgZGVwZW5kZW50cyA9IGRlcGVuZGVudHNBZ2dyZWdhdG9yKGNvbnRyb2wpO1xuICAgICAgZm9yKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBfLmV4dGVuZChkZXBlbmRlbnQudmFsaWRpZnksIHtzaWxlbnQ6IHRydWUsIGlnbm9yZURlcGVuZGVudHM6IHRydWV9KTtcbiAgICAgICAgICBkZXBlbmRlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXy5leHRlbmQodGhpcywge2RlcGVuZGVudHN9KTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL2RlcGVuZGVudHMtdXBkYXRlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykge1xuICBsZXQge3NpbGVudCwgZXJyb3JzfSA9IHRoaXMuY29udHJvbC52YWxpZGlmeTtcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXTtcbiAgXG4gIF8uZXh0ZW5kKHRoaXMsIHtzaWxlbnQsIGRlcGVuZGVudHM6IHVuZGVmaW5lZH0pO1xuICBlcnJvckNvbmZpZ3Muc3RhdHVzID0gdmFsaWRhdGlvblN0YXR1cztcbiAgXG4gIGlmKCFzaWxlbnQpIHtcbiAgICBfLmV4dGVuZCh0aGlzLCB7ZXJyb3JDb25maWdzfSk7XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IF9jb25zdHJ1Y3RvciAgICAgIGZyb20gJy4vX2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yJztcbmltcG9ydCBzdGF0ZVNldHRlciAgICAgICBmcm9tICcuL3N0YXRlLXNldHRlci9zdGF0ZS1zZXR0ZXInO1xuaW1wb3J0IGRlcGVuZGVudHNVcGRhdGVyIGZyb20gJy4vZGVwZW5kZW50cy11cGRhdGVyL2RlcGVuZGVudHMtdXBkYXRlcic7XG5pbXBvcnQgdmlzdWFsaXplciAgICAgICAgZnJvbSAnLi92aXN1YWxpemVyL3Zpc3VhbGl6ZXInO1xuXG5fLmV4dGVuZChfY29uc3RydWN0b3IucHJvdG90eXBlLCB7XG4gIHNldDogc3RhdGVTZXR0ZXIsXG4gIHVwZGF0ZURlcGVuZGVudHM6IGRlcGVuZGVudHNVcGRhdGVyLFxuICB2aXN1YWxpemU6IHZpc3VhbGl6ZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBfY29uc3RydWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlci50cyIsImV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgZXJyb3JDb25maWdzKSA9PiB7XG4gIGxldCB7ZXJyb3JNZXNzYWdlRGVsYXlzOiBkZWxheXN9ID0gc2V0dGluZ3M7XG4gIGxldCB7X2FzeW5jLCBzdGF0dXMsIGNvbnRyb2x9ID0gZXJyb3JDb25maWdzO1xuICBsZXQge2RpcnR5fSA9IGNvbnRyb2w7XG4gIHJldHVybiBfYXN5bmMgfHwgIWRpcnR5ID8gMCA6IHN0YXR1cyA/IGRlbGF5cy5pbnZhbGlkIDogZGVsYXlzLnZhbGlkO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvX2xpYi9kZWxheS1jYWxjdWxhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsICRlbCkgPT4ge1xuICBsZXQgY2xhc3NlcyA9ICRlbC5hdHRyKCdjbGFzcycpO1xuICBcbiAgaWYoY2xhc3Nlcykge1xuICAgIGNsYXNzZXMgPSBjbGFzc2VzLnNwbGl0KC9cXHMrLyk7XG4gIH1cblxuICByZXR1cm4gXy5yZWR1Y2UoY2xhc3NlcywgKGNvdW50LCBrbGFzcykgPT4ge1xuICAgIGlmKGtsYXNzLnN0YXJ0c1dpdGgoYCR7c2V0dGluZ3MucHJlZml4fS1lcnJvcmApKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY291bnQ7XG4gIH0sIDApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvX2xpYi9lcnJvcnMtY291bnRlci50cyIsImltcG9ydCBlcnJvcnNDb3VudGVyIGZyb20gJy4vX2xpYi9lcnJvcnMtY291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgZXJyb3JDb25maWdzKSA9PiB7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgc3RhdHVzOiB2YWxpZGF0aW9uU3RhdHVzfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHskZWw6ICRlcnJvckVsLCBfYXN5bmMsIGNvbnRyb2x9ID0gZXJyb3JDb25maWdzO1xuICBsZXQge2Vycm9yTWVzc2FnZUNsYXNzZXMsIHByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IHtkaXJ0eSwgdmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHskZWwsICRlbENvbnRhaW5lciwgJGVycm9yc0NvbnRhaW5lcn0gPSB2YWxpZGlmeS5lbGVtZW50cztcbiAgbGV0IGVycm9yQ2xhc3MgPSBgJHtwcmVmaXh9LWVycm9yLSR7dmFsaWRhdG9yTmFtZX1gO1xuICBsZXQgc3luY0NsYXNzID0gYCR7cHJlZml4fS1zeW5jYDtcbiAgbGV0IGFzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LWFzeW5jYDtcbiAgXG4gIGlmKGRpcnR5KSB7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy1wcmlzdGluZScpLmFkZENsYXNzKCduZy1kaXJ0eScpO1xuICB9IGVsc2Uge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcygnbmctcHJpc3RpbmUnKTtcbiAgfVxuXG4gIGlmKF9hc3luYykge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcyhhc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYWRkQ2xhc3MoYXN5bmNDbGFzcykucmVtb3ZlQ2xhc3Moc3luY0NsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICAkZWxDb250YWluZXIuYWRkQ2xhc3Moc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhhc3luY0NsYXNzKTtcbiAgICAkZXJyb3JzQ29udGFpbmVyLmFkZENsYXNzKHN5bmNDbGFzcykucmVtb3ZlQ2xhc3MoYXN5bmNDbGFzcyk7XG4gIH1cblxuICBpZih2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgJGVsLmFkZENsYXNzKGVycm9yQ2xhc3MpO1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcygnbmctdmFsaWQnKS5hZGRDbGFzcygnbmctaW52YWxpZCcpLmFkZENsYXNzKGVycm9yQ2xhc3MpO1xuICAgICRlcnJvckVsLnJlbW92ZUNsYXNzKCduZy12YWxpZCcpLnJlbW92ZUNsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMudmFsaWQpO1xuICAgIHJldHVybiAkZXJyb3JFbC5hZGRDbGFzcygnbmctaW52YWxpZCcpLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMuaW52YWxpZCk7XG4gIH1cbiAgXG4gICRlcnJvckVsLnJlbW92ZUNsYXNzKCduZy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbnZhbGlkKTtcbiAgJGVycm9yRWwuYWRkQ2xhc3MoJ25nLXZhbGlkJykuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy52YWxpZCk7XG4gICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKTtcbiAgJGVsLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xuXG4gIGlmKCFlcnJvcnNDb3VudGVyKHNldHRpbmdzLCAkZWxDb250YWluZXIpKSB7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoJ25nLXZhbGlkJyk7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKF9hc3luYyA/IGFzeW5jQ2xhc3MgOiBzeW5jQ2xhc3MpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVsYXlDYWxjdWxhdG9yICBmcm9tICcuL19saWIvZGVsYXktY2FsY3VsYXRvcic7XG5pbXBvcnQgZXJyb3JzVmlzdWFsaXplciBmcm9tICcuL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGlmKCF0aGlzLnNpbGVudCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IHtjb250cm9sLCBkZXBlbmRlbnRzID0gW10sIGVycm9yQ29uZmlnc30gPSB0aGlzO1xuICAgICAgbGV0IGRlbGF5ID0gZGVsYXlDYWxjdWxhdG9yKHRoaXMuc2V0dGluZ3MsIGVycm9yQ29uZmlncyk7XG4gICAgICBcbiAgICAgIGNsZWFyVGltZW91dChlcnJvckNvbmZpZ3MudmlzdWFsaXphdGlvblRpbWVvdXQpO1xuICAgICAgXG4gICAgICBlcnJvckNvbmZpZ3MudmlzdWFsaXphdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGVwZW5kZW50cy51bnNoaWZ0KGNvbnRyb2wpO1xuICAgICAgICBfLmVhY2goZGVwZW5kZW50cywgY29udHJvbCA9PiB7XG4gICAgICAgICAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICAgICAgICAgIFxuICAgICAgICAgIF8uZXh0ZW5kKHZhbGlkaWZ5LCB7c2lsZW50OiBmYWxzZSwgaWdub3JlRGVwZW5kZW50czogZmFsc2V9KTtcbiAgICAgICAgICBfLmVhY2godmFsaWRpZnkuZXJyb3JzLCBfLnBhcnRpYWwoZXJyb3JzVmlzdWFsaXplciwgdGhpcy5zZXR0aW5ncywgXykpO1xuICAgICAgICB9KVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL3Zpc3VhbGl6ZXIudHMiLCJpbXBvcnQgdmFsaWRhdG9yICAgICAgIGZyb20gJy4vdmFsaWRhdG9yL3ZhbGlkYXRvcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgbWVzc2FnZXIgICAgICAgIGZyb20gJy4vbWVzc2FnZXIvbWVzc2FnZXInO1xuaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yLFxuICBwcmVwcm9jZXNzb3IsXG4gIG1lc3NhZ2VyLFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9kZXBzLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBkZXBlbmRlbmN5TmFtZXMgPT4ge1xuICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzLm1hcChkZXBlbmRlbmN5TmFtZSA9PiB7XG4gICAgcmV0dXJuIF8udXBwZXJGaXJzdChfLmxvd2VyQ2FzZShkZXBlbmRlbmN5TmFtZSkpO1xuICB9KS5qb2luKCcsICcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyLnRzIiwiaW1wb3J0IGRlcGVuZGVuY3lOYW1lc1N0cmluZ2lmaWVyIGZyb20gJy4vX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGRlcGVuZGVuY3lOYW1lcykgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lUHJvcGVyfSA9IGNvbnRyb2w7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVuY3lOYW1lc1N0cmluZ2lmaWVyKGRlcGVuZGVuY3lOYW1lcyk7XG4gIHJldHVybiBgJHtjb250cm9sTmFtZVByb3Blcn0gZGVwZW5kcyBvbiAke2RlcGVuZGVuY3lOYW1lc31gO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJjb25zdCBkZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCB7ZGVwZW5kZW5jeURlcGVuZGVudHNNYXB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvX2xpYi92YXJzLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHN0ciwgY2hhcikgPT4ge1xuICBsZXQgcnggPSBuZXcgUmVnRXhwKGBcXFxccyoke2NoYXJ9XFxcXHMqYCk7XG4gIHJldHVybiBzdHIuc3BsaXQocngpLm1hcChwaWVjZSA9PiBwaWVjZS50cmltKCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvX2xpYi9zdHItYXJyYXlpZmllci50cyIsImltcG9ydCBzdHJBcnJheWlmaWVyIGZyb20gJy4vX2xpYi9zdHItYXJyYXlpZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZXMsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHtjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBkZXBlbmRlbmN5TmFtZXMgPSBzdHJBcnJheWlmaWVyKGRlcGVuZGVuY3lOYW1lcywgJywnKTtcbiAgaWYoZGVwZW5kZW5jeU5hbWVzLmluZGV4T2YoY29udHJvbE5hbWUpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgWyR7Y29udHJvbE5hbWV9XSBjYW5ub3QgZGVwZW5kIG9uIGl0c2VsZmApO1xuICB9XG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyLnRzIiwiaW1wb3J0IHtkZXBlbmRlbmN5UmVxdWVzdHN9IGZyb20gJy4uLy4uLy4uLy4uLy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQge19wYXJlbnR9ID0gY29udHJvbDtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHMgPSBkZXBlbmRlbmN5UmVxdWVzdHMuZ2V0KF9wYXJlbnQpO1xuICAgIFxuICBpZighZm9ybURlcGVuZGVuY3lSZXF1ZXN0cykge1xuICAgIGRlcGVuZGVuY3lSZXF1ZXN0cy5zZXQoX3BhcmVudCwgZm9ybURlcGVuZGVuY3lSZXF1ZXN0cyA9IHt9KTtcbiAgfVxuICBcbiAgbGV0IGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHNbZGVwZW5kZW5jeU5hbWVdID0gW107XG4gIH1cbiAgXG4gIGRlcGVuZGVudHMucHVzaChjb250cm9sKTsgICAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIudHMiLCJpbXBvcnQgZGVwZW5kZW50c1NldHRlciAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vZGVwZW5kZW50cy1zZXR0ZXIvZGVwZW5kZW50cy1zZXR0ZXInO1xuaW1wb3J0IGRlcGVuZGVuY3lSZXF1ZXN0UmVnaXN0cmFyIGZyb20gJy4vZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCBkZXBlbmRlbmN5Q29udHJvbCA9IGNvbnRyb2wuX3BhcmVudC5jb250cm9sc1tkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZihkZXBlbmRlbmN5Q29udHJvbCkge1xuICAgIHJldHVybiBkZXBlbmRlbnRzU2V0dGVyKGRlcGVuZGVuY3lDb250cm9sLCBjb250cm9sKTtcbiAgfVxuICBcbiAgZGVwZW5kZW5jeVJlcXVlc3RSZWdpc3RyYXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW50LXJlZ2lzdHJhci50cyIsImltcG9ydCBmb3JtRGVwZW5kZW5jeU1hcEdldHRlciAgIGZyb20gJy4vZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHtfcGFyZW50LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gZm9ybURlcGVuZGVuY3lNYXBHZXR0ZXIoX3BhcmVudCk7XG4gIGxldCBjb250cm9sRGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtjb250cm9sTmFtZV07XG4gIFxuICBpZigoY29udHJvbERlcGVuZGVudHMgfHwgW10pLmluZGV4T2YoZGVwZW5kZW5jeU5hbWUpID4gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske2NvbnRyb2xOYW1lfV0gYW5kIFske2RlcGVuZGVuY3lOYW1lfV0gZGVwZW5kIG9uIGVhY2ggb3RoZXJgKTtcbiAgfVxuICBcbiAgbGV0IGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2RlcGVuZGVuY3lOYW1lXSA9IFtdO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goY29udHJvbE5hbWUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwiaW1wb3J0IHtkZXBlbmRlbmN5RGVwZW5kZW50c01hcH0gZnJvbSAnLi4vLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgX3BhcmVudCA9PiB7XG4gIGxldCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBkZXBlbmRlbmN5RGVwZW5kZW50c01hcC5nZXQoX3BhcmVudCk7XG4gIFxuICBpZighZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwKSB7XG4gICAgZGVwZW5kZW5jeURlcGVuZGVudHNNYXAuc2V0KF9wYXJlbnQsIGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IHt9KTtcbiAgfVxuICBcbiAgcmV0dXJuIGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcDtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVwZW5kZW5jeU5hbWVzVHJhbnNmb3JtZXIgZnJvbSAnLi9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXInO1xuaW1wb3J0IGRlcGVuZGVudFRyYWNrZXIgICAgICAgICAgIGZyb20gJy4vZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXInO1xuaW1wb3J0IGRlcGVuZGVudFJlZ2lzdHJhciAgICAgICAgIGZyb20gJy4vZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGRlcGVuZGVuY3lOYW1lcykgPT4ge1xuICBkZXBlbmRlbmN5TmFtZXMgPSBkZXBlbmRlbmN5TmFtZXNUcmFuc2Zvcm1lcihkZXBlbmRlbmN5TmFtZXMsIGNvbnRyb2wpO1xuXG4gIF8uZWFjaChkZXBlbmRlbmN5TmFtZXMsIGRlcGVuZGVuY3lOYW1lID0+IHtcbiAgICBkZXBlbmRlbnRUcmFja2VyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbiAgICBkZXBlbmRlbnRSZWdpc3RyYXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsImltcG9ydCB7dmFsaWRhdG9yTmFtZX0gZnJvbSAnLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGRlcGVuZGVuY3lOYW1lcykgPT4ge1xuICBsZXQge2NvbnRyb2xzfSA9IGNvbnRyb2wuX3BhcmVudDtcbiAgXG4gIGZvcihsZXQgZGVwZW5kZW5jeU5hbWUgb2YgZGVwZW5kZW5jeU5hbWVzKSB7XG4gICAgbGV0IGRlcGVuZGVuY3lDb250cm9sID0gY29udHJvbHNbZGVwZW5kZW5jeU5hbWVdO1xuXG4gICAgaWYoIWRlcGVuZGVuY3lDb250cm9sKSB7XG4gICAgICBjb25zb2xlLndhcm4oYGRlcGVuZGVuY3kgWyR7ZGVwZW5kZW5jeU5hbWV9XSBpcyBub3QgZGVjbGFyZWRgKTtcbiAgICB9XG5cbiAgICBpZighZGVwZW5kZW5jeUNvbnRyb2wgfHwgZGVwZW5kZW5jeUNvbnRyb2wuaW52YWxpZCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZW1haWxHb3YnO1xuY29uc3QgZW1haWxHb3ZSeCA9IC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqKFxcLihnb3Z8bWlsKSkkLztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFlbWFpbEdvdlJ4LnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIG5vdCBhIHZhbGlkIGdvdmVybm1lbnQgZW1haWxgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VtYWlsLWdvdi9lbWFpbC1nb3YudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VtYWlsJztcbmNvbnN0IGVtYWlsUnggPSAvXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKFxcLlstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSspKkBbQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KFxcLltBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8pKiQvO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWVtYWlsUngudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgbm90IGEgdmFsaWQgZW1haWxgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VtYWlsL2VtYWlsLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlcXVhbHNUbyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIGVxdWFsc1RvKSB7XG4gICAgbGV0IHt2YWx1ZSwgX3BhcmVudH0gPSBjb250cm9sO1xuICAgIGxldCBlcXVhbHNUb0NvbnRyb2wgPSBfcGFyZW50LmNvbnRyb2xzW2VxdWFsc1RvXTtcblxuICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZSAhPT0gZXF1YWxzVG9Db250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIHZhbGlkYXRvckNvbmZpZ3MpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gbXVzdCBlcXVhbCB0byAke3ZhbGlkYXRvckNvbmZpZ3N9YDtcbiAgfSxcblxuICB2YWxpZGF0b3JOYW1lXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdtYXhMZW5ndGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICBsZXQge3ZhbHVlfSA9IGNvbnRyb2w7XG4gICAgaWYoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICBpZighbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21heGltdW0gbGVuZ3RoIHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiArbWF4TGVuZ3RoO1xuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IHNob3VsZCBiZSBsZXNzIHRoYW4gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnNgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnbWluTGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgaWYoIW1pbkxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW5pbXVtIGxlbmd0aCBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gK21pbkxlbmd0aDtcbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBzaG91bGQgYmUgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnNgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL21pbi1sZW5ndGgvbWluLWxlbmd0aC50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdwYXR0ZXJuJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgcGF0dGVybikge1xuICAgIGlmKCFwYXR0ZXJuLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgcGF0dGVybikge1xuICAgIGlmKCFwYXR0ZXJuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NwZWNpZnkgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4nKTtcbiAgICB9XG4gICAgXG4gICAgaWYoXy5pc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm59JGApO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9wYXR0ZXJuL3BhdHRlcm4udHMiLCJjb25zdCBkaXJlY3RpdmVOYW1lID0gJ3JlcXVpcmVkJztcbmNvbnN0IHZhbGlkYXRvck5hbWUgPSAncmVxdWlyZWRUcnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKGNvbnRyb2wudmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7W2RpcmVjdGl2ZU5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyByZXF1aXJlZGA7XG4gIH0sXG5cbiAgZGlyZWN0aXZlTmFtZSxcblxuICB2YWxpZGF0b3JOYW1lLFxuICBcbiAgY2hlY2tib3g6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC10cnVlL3JlcXVpcmVkLXRydWUudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFjb250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgcmVxdWlyZWRgO1xuICB9LFxuXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsImV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lUHJvcGVyfSA9IGNvbnRyb2w7XG4gIHJldHVybiBgVmFsdWUgcHJvdmlkZWQgZm9yICR7Y29udHJvbE5hbWVQcm9wZXJ9IGZpZWxkIGFscmVhZHkgZXhpc3RzYDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBjb25maWdzLCBiYXNlQ29uZmlncykgPT4ge1xuICBpZighXy5pc1BsYWluT2JqZWN0KGNvbmZpZ3MpKSB7XG4gICAgY29uZmlncyA9IHtwYXRoOiBjb25maWdzfTtcbiAgfVxuICBcbiAgbGV0IHtmaWVsZE5hbWUsIGlnbm9yZSwgaWdub3JlQ2FzZSwgcGF0aH0gPSBjb25maWdzO1xuICBcbiAgaWYoYmFzZUNvbmZpZ3MpIHtcbiAgICB2YXIge2Jhc2VVcmx9ID0gYmFzZUNvbmZpZ3M7XG4gIH1cbiAgXG4gIGlmKCFmaWVsZE5hbWUpIHtcbiAgICBmaWVsZE5hbWUgPSBjb250cm9sLmNvbnRyb2xOYW1lO1xuICB9XG4gIFxuICBpZighaWdub3JlKSB7XG4gICAgaWdub3JlID0gW107XG4gIH0gZWxzZSBpZighXy5pc0FycmF5KGlnbm9yZSkpIHtcbiAgICBpZ25vcmUgPSBbaWdub3JlXTtcbiAgfVxuICBcbiAgaWYoXy5pc1VuZGVmaW5lZChpZ25vcmVDYXNlKSkge1xuICAgIGlnbm9yZUNhc2UgPSB0cnVlO1xuICB9XG4gIFxuICBpZihpZ25vcmVDYXNlKSB7XG4gICAgaWdub3JlID0gaWdub3JlLm1hcChpZ25vcmUgPT4gKGlnbm9yZSArICcnKS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuICBcbiAgaWYoYmFzZVVybCkge1xuICAgIHBhdGggPSBiYXNlVXJsICsgcGF0aDtcbiAgfVxuICBcbiAgcmV0dXJuIF8uZXh0ZW5kKGNvbmZpZ3MsIHtmaWVsZE5hbWUsIGlnbm9yZSwgaWdub3JlQ2FzZSwgcGF0aH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHZhbGlkYXRvciAgICAgICBmcm9tICcuL3ZhbGlkYXRvci92YWxpZGF0b3InO1xuaW1wb3J0IHByZXByb2Nlc3NvciAgICBmcm9tICcuL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3InO1xuaW1wb3J0IG1lc3NhZ2VyICAgICAgICBmcm9tICcuL21lc3NhZ2VyL21lc3NhZ2VyJztcbmltcG9ydCB7dmFsaWRhdG9yTmFtZX0gZnJvbSAnLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcixcbiAgcHJlcHJvY2Vzc29yLFxuICBtZXNzYWdlcixcbiAgdmFsaWRhdG9yTmFtZSxcbiAgYXN5bmM6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdW5pcXVlLWNoZWNrLnRzIiwiaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgY29uZmlncykgPT4ge1xuICBsZXQge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSA9IGNvbmZpZ3M7XG4gIGxldCB7dmFsdWV9ID0gY29udHJvbDtcblxuICBpZihpZ25vcmVDYXNlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIFxuICBpZighdmFsdWUgfHwgaWdub3JlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHBhcmFtcyA9IHtbZmllbGROYW1lXTogdmFsdWV9O1xuICAgIFxuICAgIGNvbnRyb2wuaHR0cC5nZXQocGF0aCwge3BhcmFtc30pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHJlc29sdmUoZGF0YS5sZW5ndGggPyB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfSA6IG51bGwpO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIHJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJpbXBvcnQgZGVwc1ZhbGlkYXRvciAgICAgICAgIGZyb20gJy4vZGVwcy9kZXBzJztcbmltcG9ydCBlbWFpbFZhbGlkYXRvciAgICAgICAgZnJvbSAnLi9lbWFpbC9lbWFpbCc7XG5pbXBvcnQgZW1haWxHb3ZWYWxpZGF0b3IgICAgIGZyb20gJy4vZW1haWwtZ292L2VtYWlsLWdvdic7XG5pbXBvcnQgZXF1YWxzVG9WYWxpZGF0b3IgICAgIGZyb20gJy4vZXF1YWxzLXRvL2VxdWFscy10byc7XG5pbXBvcnQgbWF4TGVuZ3RoVmFsaWRhdG9yICAgIGZyb20gJy4vbWF4LWxlbmd0aC9tYXgtbGVuZ3RoJztcbmltcG9ydCBtaW5MZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9taW4tbGVuZ3RoL21pbi1sZW5ndGgnO1xuaW1wb3J0IHBhdHRlcm5WYWxpZGF0b3IgICAgICBmcm9tICcuL3BhdHRlcm4vcGF0dGVybic7XG5pbXBvcnQgcmVxdWlyZWRWYWxpZGF0b3IgICAgIGZyb20gJy4vcmVxdWlyZWQvcmVxdWlyZWQnO1xuaW1wb3J0IHJlcXVpcmVkVHJ1ZVZhbGlkYXRvciBmcm9tICcuL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZSc7XG5pbXBvcnQgdW5pcXVlQ2hlY2tWYWxpZGF0b3IgIGZyb20gJy4vdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjayc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgZGVwc1ZhbGlkYXRvcixcbiAgcmVxdWlyZWRWYWxpZGF0b3IsXG4gIG1pbkxlbmd0aFZhbGlkYXRvcixcbiAgbWF4TGVuZ3RoVmFsaWRhdG9yLFxuICBwYXR0ZXJuVmFsaWRhdG9yLFxuICBlbWFpbFZhbGlkYXRvcixcbiAgZW1haWxHb3ZWYWxpZGF0b3IsXG4gIGVxdWFsc1RvVmFsaWRhdG9yLFxuICByZXF1aXJlZFRydWVWYWxpZGF0b3IsXG4gIHVuaXF1ZUNoZWNrVmFsaWRhdG9yXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyIsImV4cG9ydCBkZWZhdWx0IChuYW1lLCBjaGVja2JveCkgPT4ge1xuICBsZXQgY2hlY2tib3hUeXBlID0gJ1t0eXBlPWNoZWNrYm94XSc7XG4gIGxldCBjb250cm9sVHlwZXMgPSBbJ2Zvcm1Db250cm9sTmFtZScsICdmb3JtQ29udHJvbCcsICduZ01vZGVsJ11cbiAgY2hlY2tib3ggPSBjaGVja2JveCA/IGBpbnB1dCR7Y2hlY2tib3hUeXBlfWAgOiBgOm5vdCgke2NoZWNrYm94VHlwZX0pYDtcbiAgXG4gIHJldHVybiBjb250cm9sVHlwZXMucmVkdWNlKChzZWxlY3RvciwgY29udHJvbFR5cGUpID0+IHtcbiAgICBzZWxlY3Rvci5wdXNoKGAke2NoZWNrYm94fVske25hbWV9XVske2NvbnRyb2xUeXBlfV1gKTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH0sIFtdKS5qb2luKCcsJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50UGx1c30gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICduZy1odHRwLWNsaWVudC1wbHVzJztcbmltcG9ydCB7TkdfVkFMSURBVE9SUywgTkdfQVNZTkNfVkFMSURBVE9SU30gICAgICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHNlbGVjdG9yQXNzZW1ibGVyICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyJztcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdG9ycyA9PiB7XG4gIHJldHVybiB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3JDb25maWd1cmF0b3IgPT4ge1xuICAgIGxldCB7YXN5bmM6IF9hc3luYywgY2hlY2tib3gsIHZhbGlkYXRvck5hbWVQcmVmaXhlZH0gPSB2YWxpZGF0b3JDb25maWd1cmF0b3I7XG4gICAgbGV0IHtkaXJlY3RpdmVOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yO1xuICAgIGxldCBkaXJlY3RpdmVOYW1lID0gZGlyZWN0aXZlTmFtZVByZWZpeGVkIHx8IHZhbGlkYXRvck5hbWVQcmVmaXhlZDtcbiAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvckFzc2VtYmxlcihkaXJlY3RpdmVOYW1lLCBjaGVja2JveCk7XG5cbiAgICBsZXQgcHJvdmlkZXJzID0gW3tcbiAgICAgIHByb3ZpZGU6IF9hc3luYyA/IE5HX0FTWU5DX1ZBTElEQVRPUlMgOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3MpLFxuICAgICAgbXVsdGk6IHRydWUgICAgICAgIFxuICAgIH1dO1xuICAgIFxuICAgIEBEaXJlY3RpdmUoe3NlbGVjdG9yLCBwcm92aWRlcnN9KSBjbGFzcyBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcyB7XG4gICAgICBwcml2YXRlIHZhbGlkYXRvcjtcbiAgICAgIHByaXZhdGUgb25DaGFuZ2U7XG4gICAgICBwcml2YXRlIGNvbnRyb2w7XG4gICAgICBASW5wdXQoYCR7ZGlyZWN0aXZlTmFtZX1gKSBwcml2YXRlIGNvbmZpZ3M7XG4gICAgXG4gICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRQbHVzKSB7fVxuICAgIFxuICAgICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZignY29uZmlncycgaW4gY2hhbmdlcykge1xuICAgICAgICAgIGlmKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICB2YWxpZGF0ZShjb250cm9sPykge1xuICAgICAgICBsZXQgZXJyb3IgPSB7W2RpcmVjdGl2ZU5hbWVdOiB0cnVlfTtcbiAgICAgICAgXG4gICAgICAgIGlmKF9hc3luYykge1xuICAgICAgICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHtodHRwOiB0aGlzLmh0dHB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBfLmV4dGVuZCh0aGlzLCB7XG4gICAgICAgICAgY29udHJvbCwgXG4gICAgICAgICAgdmFsaWRhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBfYXN5bmMgPyBQcm9taXNlLnJlc29sdmUoZXJyb3IpIDogZXJyb3I7IFxuICAgICAgfVxuICAgIFxuICAgICAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbikge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47IFxuICAgICAgfVxuICAgIFxuICAgICAgcHJpdmF0ZSBjcmVhdGVWYWxpZGF0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yKHRoaXMuY29udHJvbCwgdGhpcy5jb25maWdzLCB0aGlzLmVsKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3M7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7TmdNb2R1bGV9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50UGx1c01vZHVsZX0gZnJvbSAnbmctaHR0cC1jbGllbnQtcGx1cyc7XG5pbXBvcnQgcHJlZml4ZXIgICAgICAgICAgICAgICBmcm9tICcuLi9fbGliL3ByZWZpeGVyJztcbmltcG9ydCB2YWxpZGF0b3JDb25maWd1cmF0b3IgIGZyb20gJy4uL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgZGlyZWN0aXZlc0dlbmVyYXRvciAgICBmcm9tICcuLi9kaXJlY3RpdmVzLWdlbmVyYXRvci9kaXJlY3RpdmVzLWdlbmVyYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdG9ycykgPT4ge1xuICB2YWxpZGF0b3JzID0gdmFsaWRhdG9ycy5tYXAodmFsaWRhdG9yID0+IHtcbiAgICBsZXQge3ZhbGlkYXRvck5hbWUsIGRpcmVjdGl2ZU5hbWV9ID0gdmFsaWRhdG9yO1xuICAgIGxldCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQgPSBwcmVmaXhlcihzZXR0aW5ncywgdmFsaWRhdG9yTmFtZSk7XG4gICAgbGV0IGRpcmVjdGl2ZU5hbWVQcmVmaXhlZCA9IHByZWZpeGVyKHNldHRpbmdzLCBkaXJlY3RpdmVOYW1lKTtcbiAgICBfLmV4dGVuZCh2YWxpZGF0b3IsIHt2YWxpZGF0b3JOYW1lUHJlZml4ZWQsIGRpcmVjdGl2ZU5hbWVQcmVmaXhlZH0pO1xuICAgIHJldHVybiB2YWxpZGF0b3JDb25maWd1cmF0b3Ioc2V0dGluZ3MsIHZhbGlkYXRvcik7XG4gIH0pO1xuICBcbiAgbGV0IGRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzR2VuZXJhdG9yKHZhbGlkYXRvcnMpO1xuXG4gIEBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0h0dHBDbGllbnRQbHVzTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IGRpcmVjdGl2ZXMsIFxuICAgIGV4cG9ydHM6IGRpcmVjdGl2ZXNcbiAgfSkgY2xhc3MgVmFsaWRhdG9yTW9kdWxlIHt9XG4gIFxuICByZXR1cm4gVmFsaWRhdG9yTW9kdWxlOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9tb2R1bGUtZ2VuZXJhdG9yL21vZHVsZS1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQXNzaWduZXIgICAgIGZyb20gJy4vbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyJztcbmltcG9ydCBWYWxpZGF0aW9uU3RhdGVyIGZyb20gJy4uLy4uLy4uL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGVsKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgXG4gIGlmKCF2YWxpZGlmeSkge1xuICAgIGVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICBuYW1lQXNzaWduZXIoY29udHJvbCk7XG4gICAgXG4gICAgdmFsaWRpZnkgPSB7XG4gICAgICBlbGVtZW50czoge30sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgdmFsaWRhdGlvblN0YXRlcjogbmV3IFZhbGlkYXRpb25TdGF0ZXIoc2V0dGluZ3MsIGNvbnRyb2wpXG4gICAgfTtcbiAgICBcbiAgICBfLmV4dGVuZChjb250cm9sLCB7dmFsaWRpZnksIGVsLCAkZWw6ICQoZWwpfSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbHN9ID0gY29udHJvbC5fcGFyZW50O1xuICBsZXQgY29udHJvbE5hbWVzID0gXy5rZXlzKGNvbnRyb2xzKTtcbiAgZm9yKGxldCBjb250cm9sTmFtZSBvZiBjb250cm9sTmFtZXMpIHtcbiAgICBpZihjb250cm9sc1tjb250cm9sTmFtZV0gPT09IGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sTmFtZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQWNjZXNzb3IgZnJvbSAnLi9saWIvbmFtZS1hY2Nlc3Nvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIFxuICBpZighY29udHJvbE5hbWUpIHtcbiAgICBjb250cm9sTmFtZSA9IG5hbWVBY2Nlc3Nvcihjb250cm9sKTtcbiAgICBfLmV4dGVuZChjb250cm9sLCB7XG4gICAgICBjb250cm9sTmFtZSxcbiAgICAgIGNvbnRyb2xOYW1lUHJvcGVyOiBfLnVwcGVyRmlyc3QoXy5sb3dlckNhc2UoY29udHJvbE5hbWUpKVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbmFtZS1hc3NpZ25lci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeVJlcXVlc3RzfSBmcm9tICcuLi8uLi8uLi9fbGliL3ZhcnMnO1xuaW1wb3J0IGRlcGVuZGVudHNTZXR0ZXIgICAgIGZyb20gJy4uLy4uLy4uL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7X3BhcmVudCwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHBhcmVudFJlY29yZHMgPSBkZXBlbmRlbmN5UmVxdWVzdHMuZ2V0KF9wYXJlbnQpO1xuICBcbiAgaWYocGFyZW50UmVjb3Jkcykge1xuICAgIGxldCBkZXBlbmRlbnRSZWNvcmRzID0gcGFyZW50UmVjb3Jkc1tjb250cm9sTmFtZV07XG5cbiAgICBpZihkZXBlbmRlbnRSZWNvcmRzKSB7XG4gICAgICBkZXBlbmRlbnRzU2V0dGVyKGNvbnRyb2wsIGRlcGVuZGVudFJlY29yZHMpO1xuICAgICAgZGVsZXRlIHBhcmVudFJlY29yZHNbY29udHJvbE5hbWVdO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciAgICAgICAgIGZyb20gJy4uLy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IGNvbnRhaW5lckFkZGVyICAgICAgICAgIGZyb20gJy4uL19saWIvY29udGFpbmVyLWFkZGVyJztcbmltcG9ydCBBc3luY1Byb2dyZXNzVmlzdWFsaXplciBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGlmeSwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY3MgPSB7fSwgZWxlbWVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighdmFsaWRhdG9yRGVjbGFyYXRpb24uYXN5bmMgfHwgIV8uaXNFbXB0eShhc3luY3MpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBsZXQge2FzeW5jU3RhdHVzSGlkZUNsYXNzLCBzZWxlY3RvcnN9ID0gc2V0dGluZ3M7XG4gIGxldCB7YXN5bmNTdGF0dXNDb250YWluZXJ9ID0gc2VsZWN0b3JzO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICBsZXQgJGFzeW5jc0NvbnRhaW5lciA9ICQoJzxkaXYvPicpO1xuICBsZXQgJHBlbmRpbmcgPSAkKCc8ZGl2Lz4nKTtcbiAgbGV0ICRzdWNjZXNzID0gJCgnPGRpdi8+Jyk7XG5cbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkYXN5bmNzQ29udGFpbmVyLCAnYXN5bmNzLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkcGVuZGluZywgJ2FzeW5jLXBlbmRpbmcnLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJHN1Y2Nlc3MsICdhc3luYy1zdWNjZXNzJywgY29udHJvbE5hbWUpO1xuICBcbiAgJGFzeW5jc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRwZW5kaW5nLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJHN1Y2Nlc3MuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkYXN5bmNzQ29udGFpbmVyLmFwcGVuZCgkcGVuZGluZykuYXBwZW5kKCRzdWNjZXNzKTtcbiAgXG4gIF8uZXh0ZW5kKGFzeW5jcywgeyRhc3luY3NDb250YWluZXIsICRwZW5kaW5nLCAkc3VjY2Vzc30pO1xuICBfLmV4dGVuZCh2YWxpZGlmeSwge2FzeW5jcywgYXN5bmNTdGF0dXNlczoge319KTtcbiAgXG4gIGNvbnRhaW5lckFkZGVyKCRlbCwgJGFzeW5jc0NvbnRhaW5lciwgJGVsQ29udGFpbmVyLCBhc3luY1N0YXR1c0NvbnRhaW5lcik7XG4gIHZhbGlkaWZ5LmFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyID0gbmV3IEFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyKHNldHRpbmdzLCBjb250cm9sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyLnRzIiwiaW1wb3J0IGVycm9yc0NvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyJztcbmltcG9ydCBhc3luY0NvbnRhaW5lckJ1aWxkZXIgIGZyb20gJy4vYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGVycm9yc0NvbnRhaW5lckJ1aWxkZXIoc2V0dGluZ3MsIGNvbnRyb2wpO1xuICBhc3luY0NvbnRhaW5lckJ1aWxkZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciBmcm9tICcuLi8uLi9fbGliL2NsYXNzLWlkLWFzc2lnbmVyJztcbmltcG9ydCBjb250YWluZXJBZGRlciAgZnJvbSAnLi4vX2xpYi9jb250YWluZXItYWRkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHskZWwsIHZhbGlkaWZ5LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQge2VsZW1lbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIV8uaXNFbXB0eShlbGVtZW50cykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGxldCB7ZWxlbWVudENvbnRhaW5lciwgZXJyb3JzQ29udGFpbmVyfSA9IHNldHRpbmdzLnNlbGVjdG9ycztcbiAgbGV0ICRlbENvbnRhaW5lciA9IGVsZW1lbnRDb250YWluZXIgPyAkZWwuY2xvc2VzdChlbGVtZW50Q29udGFpbmVyKSA6ICQoKTtcbiAgbGV0ICRlcnJvcnNDb250YWluZXIgPSAkKCc8ZGl2Lz4nKTtcblxuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbCwgJ2VsJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbENvbnRhaW5lciwgJ2VsLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZXJyb3JzQ29udGFpbmVyLCAnZXJyb3JzLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgXG4gIF8uZXh0ZW5kKGVsZW1lbnRzLCB7JGVsLCAkZWxDb250YWluZXIsICRlcnJvcnNDb250YWluZXJ9KTtcbiAgY29udGFpbmVyQWRkZXIoJGVsLCAkZXJyb3JzQ29udGFpbmVyLCAkZWxDb250YWluZXIsIGVycm9yc0NvbnRhaW5lcik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGVycm9yTWVzc2FnZSwgcHJlZml4KSA9PiB7XG4gIGxldCBnZW5lcmFsQ2xhc3MgPSBwcmVmaXggKyAnLWVycm9yLXdvcmQnO1xuICBcbiAgcmV0dXJuIGVycm9yTWVzc2FnZS5zcGxpdCgvXFxzKy8pLm1hcCgod29yZCwgaW5kZXgpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNDbGFzcyA9IGdlbmVyYWxDbGFzcyArICctJyArIGluZGV4O1xuICAgIHJldHVybiBgPHNwYW4gY2xhc3MgPSBcIiR7Z2VuZXJhbENsYXNzfSAke3NwZWNpZmljQ2xhc3N9XCI+JHt3b3JkfTwvc3Bhbj5gO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvX2xpYi9zcGFubmlmaWVyLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciBmcm9tICcuLi9fbGliL2NsYXNzLWlkLWFzc2lnbmVyJztcbmltcG9ydCBzcGFubmlmaWVyICAgICAgZnJvbSAnLi9fbGliL3NwYW5uaWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkLCBhc3luYzogX2FzeW5jfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge21lc3NhZ2VyfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge2VsZW1lbnRzLCBlcnJvcnN9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgbGV0IGJhc2VFcnJvckNvbmZpZ3MgPSB7JGVsOiAkKCksIF9hc3luYywgdmFsaWRhdG9yTmFtZSwgY29udHJvbH07XG4gIFxuICBpZighbWVzc2FnZXIpIHtcbiAgICByZXR1cm4gZXJyb3JzW3ZhbGlkYXRvck5hbWVdID0gYmFzZUVycm9yQ29uZmlncztcbiAgfVxuICBcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXSB8fCBiYXNlRXJyb3JDb25maWdzO1xuICBsZXQgeyRlbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7dmFsaWRhdG9yOiB2YWxpZGF0b3JDb25maWdzLCBtZXNzYWdlcjogbWVzc2FnZXJDb25maWdzLCBiYXNlQ29uZmlnc30gPSBjb25maWdzO1xuICBsZXQge2Vycm9yTWVzc2FnZUNsYXNzZXMsIHByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IHskZXJyb3JzQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICBsZXQgZXJyb3JNZXNzYWdlciA9IF8uaXNGdW5jdGlvbihtZXNzYWdlcikgPyBtZXNzYWdlciA6ICgpID0+IG1lc3NhZ2VyO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlcihjb250cm9sLCB2YWxpZGF0b3JDb25maWdzLCBtZXNzYWdlckNvbmZpZ3MsIGJhc2VDb25maWdzKTtcbiAgZXJyb3JNZXNzYWdlID0gc3Bhbm5pZmllcihlcnJvck1lc3NhZ2UsIHByZWZpeCk7XG4gIFxuICBpZighJGVsLmxlbmd0aCkge1xuICAgIGxldCBzeW5jQXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYCArIChfYXN5bmMgPyAnYXN5bmMnIDogJ3N5bmMnKTtcbiAgICAkZWwgPSAkKCc8ZGl2Lz4nKTtcbiAgICAkZWwuYWRkQ2xhc3Moc3luY0FzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYXBwZW5kKCRlbCk7XG4gICAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWwsICdlcnJvcicsIHZhbGlkYXRvck5hbWUpO1xuICAgIGVycm9yQ29uZmlncyA9IF8uZXh0ZW5kKGVycm9yQ29uZmlncywgeyRlbH0pO1xuICAgIFxuICAgIGlmKGVycm9yTWVzc2FnZUNsYXNzZXMgJiYgZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbml0aWFsKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbml0aWFsKTtcbiAgICB9XG4gICAgXG4gICAgaWYoX2FzeW5jKSB7XG4gICAgICBlcnJvckNvbmZpZ3MucmVxdWVzdHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgZXJyb3JzW3ZhbGlkYXRvck5hbWVdID0gZXJyb3JDb25maWdzO1xuICB9XG5cbiAgJGVsLmh0bWwoZXJyb3JNZXNzYWdlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHtwcmVwcm9jZXNzb3J9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIFxuICBpZighXy5pc1BsYWluT2JqZWN0KGNvbmZpZ3MpKSB7XG4gICAgY29uZmlncyA9IHt2YWxpZGF0b3I6IGNvbmZpZ3N9O1xuICB9XG4gIFxuICBpZihwcmVwcm9jZXNzb3IpIHtcbiAgICBsZXQge3ZhbGlkYXRvckNvbmZpZ3N9ID0gc2V0dGluZ3M7XG4gICAgXG4gICAgaWYodmFsaWRhdG9yQ29uZmlncykge1xuICAgICAgbGV0IHt2YWxpZGF0b3JOYW1lfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICAgICAgdmFyIGJhc2VDb25maWdzID0gdmFsaWRhdG9yQ29uZmlnc1t2YWxpZGF0b3JOYW1lXTtcbiAgICAgIF8uZXh0ZW5kKGNvbmZpZ3MsIHtiYXNlQ29uZmlnc30pO1xuICAgIH1cblxuICAgIGNvbmZpZ3MudmFsaWRhdG9yID0gcHJlcHJvY2Vzc29yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBiYXNlQ29uZmlncyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlncztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplciBmcm9tICcuLi9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXInO1xuaW1wb3J0IGluaXRpYWxEYXRhU2V0dGVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyJztcbmltcG9ydCByZXF1ZXN0c051bGxpZmllciAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXInO1xuaW1wb3J0IGluaXRpYWxWaXN1YWxpemVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyL2luaXRpYWwtdmlzdWFsaXplcic7XG5pbXBvcnQgcGF1c2VyICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvcGF1c2VyL3BhdXNlcic7XG5pbXBvcnQgZmluYWxEYXRhU2V0dGVyICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvZmluYWwtZGF0YS1zZXR0ZXIvZmluYWwtZGF0YS1zZXR0ZXInO1xuaW1wb3J0IGZpbmFsVmlzdWFsaXplciAgICAgICAgICAgIGZyb20gJy4vZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgaWYoY29udHJvbC52YWxpZFZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9ICAgXG4gIFxuICBsZXQge3ZhbGlkYXRvck5hbWUsIHZhbGlkYXRvck5hbWVQcmVmaXhlZCwgdmFsaWRhdG9yfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIGVycm9ycywgdmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXTtcbiAgbGV0IHZhbGlkYXRpb25JZCA9IF8udW5pcXVlSWQoKTtcblxuICBpZihjb250cm9sLmludmFsaWRWYWx1ZSA9PT0gY29udHJvbC52YWx1ZSkge1xuICAgIGxldCBlcnJvciA9IHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX07XG4gICAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgZXJyb3IpLnZpc3VhbGl6ZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXJyb3IpO1xuICB9XG4gIFxuICBpbml0aWFsRGF0YVNldHRlcihjb250cm9sLCB2YWxpZGF0b3JOYW1lKTtcbiAgcmVxdWVzdHNOdWxsaWZpZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvbklkKTtcbiAgaW5pdGlhbFZpc3VhbGl6ZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSk7XG4gIFxuICBjbGVhclRpbWVvdXQoZXJyb3JDb25maWdzLnN1Y2Nlc3NUaW1lb3V0KTtcbiAgY2xlYXJUaW1lb3V0KGVycm9yQ29uZmlncy5hc3luY0RlYm91bmNlVGltZW91dCk7XG4gIFxuICBlcnJvckNvbmZpZ3MuYXN5bmNEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZih2YWxpZGlmeS5zeW5jKSB7XG4gICAgICByZXR1cm4gYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuY29udGFpbmVyKGZhbHNlKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHRpbWUgPSBfLm5vdygpO1xuICAgIFxuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcodHJ1ZSk7XG4gICAgXG4gICAgdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKS50aGVuKGFzeW5jICh2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gICAgICBhd2FpdCBwYXVzZXIodGltZSwgc2V0dGluZ3MpO1xuICAgICAgXG4gICAgICBpZihlcnJvckNvbmZpZ3MucmVxdWVzdHNbdmFsaWRhdGlvbklkXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhbGlkYXRpb25TdGF0dXMgPSB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplcihzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cyk7XG4gICAgICBmaW5hbERhdGFTZXR0ZXIoY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24sIHZhbGlkYXRpb25TdGF0dXMpO1xuICAgICAgZmluYWxWaXN1YWxpemVyKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MsIGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpOyAgICAgIFxuICAgIH0pO1xuICB9LCBzZXR0aW5ncy5hc3luY0RlYm91bmNlVGltZSk7XG4gIFxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGxldCB7ZXJyb3JzLCB2YWx1ZSwgdmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1N0YXR1c2VzLCBlcnJvcnM6IF9lcnJvcnN9ID0gdmFsaWRpZnk7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBcbiAgX2Vycm9yc1t2YWxpZGF0b3JOYW1lXS5yZXF1ZXN0cyA9IHt9O1xuICB2YWxpZGlmeS5zeW5jID0gZmFsc2U7XG4gIGFzeW5jU3RhdHVzZXNbdmFsaWRhdG9yTmFtZV0gPSBmYWxzZTtcbiAgXG4gIGlmKCF2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgZXJyb3JzID0gXy5vbWl0KGVycm9ycywgW3ZhbGlkYXRvck5hbWVQcmVmaXhlZF0pO1xuICB9XG4gIFxuICBfLmV4dGVuZChlcnJvcnMsIHZhbGlkYXRpb25TdGF0dXMpO1xuICBcbiAgaWYoXy5pc0VtcHR5KGVycm9ycykpIHtcbiAgICBjb250cm9sLnZhbGlkVmFsdWUgPSB2YWx1ZTtcbiAgICBlcnJvcnMgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBjb250cm9sLmludmFsaWRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIFxuICBjb250cm9sLnNldEVycm9ycyhlcnJvcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmNTdGF0dXNlcyA9PiB7XG4gIHJldHVybiBfLnJlZHVjZShhc3luY1N0YXR1c2VzLCAoY291bnQsIHN0YXR1cykgPT4ge1xuICAgIHJldHVybiBjb3VudCArPSArc3RhdHVzO1xuICB9LCAwKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlci50cyIsImltcG9ydCBhY3RpdmVBc3luY3NDb3VudGVyIGZyb20gJy4vX2xpYi9hY3RpdmUtYXN5bmNzLWNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGVycm9yQ29uZmlncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNTdGF0dXNlcywgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighYWN0aXZlQXN5bmNzQ291bnRlcihhc3luY1N0YXR1c2VzKSkge1xuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcoZmFsc2UpO1xuICAgIFxuICAgIGlmKCF2YWxpZGF0aW9uU3RhdHVzICYmIGNvbnRyb2wudmFsaWQpIHtcbiAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBlcnJvckNvbmZpZ3Muc3VjY2Vzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuc3VjY2VzcyhmYWxzZSk7XG4gICAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgICB9LCBzZXR0aW5ncy5hc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh0aW1lLCBzZXR0aW5ncykgPT4ge1xuICB0aW1lID0gXy5ub3coKSAtIHRpbWU7XG4gIHRpbWUgLT0gc2V0dGluZ3MuYXN5bmNNaW5pbXVtUGVuZGluZ0R1cmF0aW9uIHx8IHRpbWU7XG4gIFxuICBpZih0aW1lIDwgMCkge1xuICAgIHRpbWUgPSAwO1xuICB9XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvcGF1c2VyL3BhdXNlci50cyIsImV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcblxuICBjb250cm9sLnZhbGlkVmFsdWUgPSBjb250cm9sLmludmFsaWRWYWx1ZSA9IG51bGw7XG4gIHZhbGlkaWZ5LmFzeW5jU3RhdHVzZXNbdmFsaWRhdG9yTmFtZV0gPSB0cnVlO1xuICB2YWxpZGlmeS5zeW5jID0gZmFsc2U7ICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSkgPT4ge1xuICBsZXQge2FzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLCB2YWxpZGF0aW9uU3RhdGVyfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcih0cnVlKTtcbiAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuc3VjY2VzcyhmYWxzZSk7XG4gIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIG51bGwpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uSWQpID0+IHtcbiAgbGV0IHtyZXF1ZXN0c30gPSBjb250cm9sLnZhbGlkaWZ5LmVycm9yc1t2YWxpZGF0b3JOYW1lXTtcblxuICBfLmVhY2gocmVxdWVzdHMsIChyZXF1ZXN0LCBrZXkpID0+IHtcbiAgICByZXF1ZXN0c1trZXldID0gdHJ1ZTtcbiAgfSk7XG4gIFxuICByZXF1ZXN0c1t2YWxpZGF0aW9uSWRdID0gZmFsc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsImltcG9ydCB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplciBmcm9tICcuLi9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHt2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBsZXQge3ZhbGlkYXRvciwgdmFsaWRhdG9yTmFtZX0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHZhbGlkYXRpb25TdGF0dXMgPSB2YWxpZGF0b3IoY29udHJvbCwgY29uZmlncy52YWxpZGF0b3IsIGNvbmZpZ3MuYmFzZUNvbmZpZ3MpO1xuICBcbiAgaWYodmFsaWRhdGlvblN0YXR1cykge1xuICAgIHZhbGlkaWZ5LnN5bmMgPSB0cnVlO1xuICB9XG4gIFxuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKS51cGRhdGVEZXBlbmRlbnRzKCkudmlzdWFsaXplKCk7XG4gIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplcihzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvci50cyIsImltcG9ydCBzeW5jVmFsaWRhdG9yICBmcm9tICcuL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yJztcbmltcG9ydCBhc3luY1ZhbGlkYXRvciBmcm9tICcuL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYodmFsaWRhdG9yRGVjbGFyYXRpb24uYXN5bmMpIHtcbiAgICAgIHJldHVybiBhc3luY1ZhbGlkYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3luY1ZhbGlkYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGF0YUluaXRpYWxpemVyICAgICBmcm9tICcuL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplcic7XG5pbXBvcnQgZGVwZW5kZW50c1JlZ2lzdHJhciBmcm9tICcuL2RlcGVuZGVudHMtcmVnaXN0cmFyL2RlcGVuZGVudHMtcmVnaXN0cmFyJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgZWxlbWVudHNJbml0aWFsaXplciBmcm9tICcuL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyJztcbmltcG9ydCBlcnJvckdlbmVyYXRvciAgICAgIGZyb20gJy4vZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvcic7XG5pbXBvcnQgdmFsaWRhdG9yQnVpbGRlciAgICBmcm9tICcuL3ZhbGlkYXRvci1idWlsZGVyL3ZhbGlkYXRvci1idWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQgZGF0YU5hbWVzID0gWydhc3luYycsICdjaGVja2JveCcsICd2YWxpZGF0b3JOYW1lJywgJ2RpcmVjdGl2ZU5hbWVQcmVmaXhlZCddO1xuICBkYXRhTmFtZXMucHVzaCgndmFsaWRhdG9yTmFtZVByZWZpeGVkJywgJ21lc3NhZ2VyJyk7XG4gIGxldCBzdXBwbGVtZW50YWxEYXRhID0gXy5waWNrKHZhbGlkYXRvckRlY2xhcmF0aW9uLCBkYXRhTmFtZXMpO1xuICBsZXQgY29uZmlndXJhdG9yID0gKGNvbnRyb2wsIGNvbmZpZ3MsIGVsKSA9PiB7XG4gICAgZGF0YUluaXRpYWxpemVyKHNldHRpbmdzLCBjb250cm9sLCBlbCk7XG4gICAgZGVwZW5kZW50c1JlZ2lzdHJhcihjb250cm9sKTtcbiAgICBjb25maWdzID0gcHJlcHJvY2Vzc29yKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgZWxlbWVudHNJbml0aWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIGVycm9yR2VuZXJhdG9yKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgcmV0dXJuIHZhbGlkYXRvckJ1aWxkZXIoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gXy5leHRlbmQoY29uZmlndXJhdG9yLCBzdXBwbGVtZW50YWxEYXRhKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImZvcm1zXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2Zvcm1zXCJ9XG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbmdWYWxpZGlmaWVyIGZyb20gJy4vdmFsaWRpZmllci92YWxpZGlmaWVyJztcblxuZXhwb3J0IHtuZ1ZhbGlkaWZpZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25nLXZhbGlkaWZpZXIudHMiXSwic291cmNlUm9vdCI6IiJ9