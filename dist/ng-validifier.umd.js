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
    clearTimeout(errorConfigs.successTimeout);
    clearTimeout(errorConfigs.asyncDebounceTimeout);
    errorConfigs.asyncDebounceTimeout = setTimeout(function () {
        if (validify.sync) {
            return asyncProgressVisualizer.container(false);
        }
        asyncProgressVisualizer.pending(true);
        validator(control, configs.validator, configs.baseConfigs).then(function (validationStatus) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        _a.sent();
                        if (errorConfigs.requests[validationId]) {
                            return [2 /*return*/];
                        }
                        validationStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__["a" /* default */])(settings, validationStatus);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__finalizer_final_data_setter_final_data_setter__["a" /* default */])(control, validatorDeclaration, validationStatus);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__finalizer_final_visualizer_final_visualizer__["a" /* default */])(settings, errorConfigs, control, validatorName, validationStatus);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2YWE0MDEzNzRmMjUzZTY3N2YzZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvX2xpYi9wcmVmaXhlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBDbGllbnRQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCIsXCJhbWRcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL3Zpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9kZXBzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvX2xpYi9zdHItYXJyYXlpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImZvcm1zXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2Zvcm1zXCJ9Iiwid2VicGFjazovLy8uL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7O0FDQUE7QUFBQSxJQUFNLGtCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFFekMsSUFBTSxRQUFRLEdBQUc7SUFDZixNQUFNLEVBQUUsR0FBRztJQUVYLFNBQVMsRUFBRTtRQUNULGdCQUFnQixFQUFFLGFBQWE7UUFDL0IsZUFBZSxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxvQkFBb0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7S0FDaEQ7SUFFRCxtQkFBbUIsRUFBRTtRQUNuQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUVELGtCQUFrQixFQUFFO1FBQ2xCLEtBQUssRUFBRSxHQUFHO1FBQ1YsT0FBTyxFQUFFLEdBQUc7S0FDYjtJQUVELGlCQUFpQixF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QUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3RCx3R0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLDRHQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLDhDQUFRLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsQ0FBQyxFQUFDOzs7Ozs7O0FDdEJGLGdEOzs7Ozs7Ozs7O0FDQW1EO0FBRTdCIiwiZmlsZSI6Im5nLXZhbGlkaWZpZXIudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwibmctaHR0cC1jbGllbnQtcGx1c1wiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIiwgXCJqcXVlcnlcIiwgXCJuZy1odHRwLWNsaWVudC1wbHVzXCIsIFwiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2Zvcm1zXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nLXZhbGlkaWZpZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJuZy1odHRwLWNsaWVudC1wbHVzXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZy12YWxpZGlmaWVyXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSwgcm9vdFtcIiRcIl0sIHJvb3RbXCJuZ0h0dHBDbGllbnRQbHVzXCJdLCByb290W1wibmdcIl1bXCJjb3JlXCJdLCByb290W1wibmdcIl1bXCJmb3Jtc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzcxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YWE0MDEzNzRmMjUzZTY3N2YzZSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiJFwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGRlcGVuZGVuY3lSZXF1ZXN0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBwcmVmaXg6ICd2JyxcblxuICBzZWxlY3RvcnM6IHtcbiAgICBlbGVtZW50Q29udGFpbmVyOiAnLmZvcm0tZ3JvdXAnLFxuICAgIGVycm9yc0NvbnRhaW5lcjogWydpbnNlcnRBZnRlcicsICdpbnB1dCddLFxuICAgIGFzeW5jU3RhdHVzQ29udGFpbmVyOiBbJ2luc2VydEJlZm9yZScsICdpbnB1dCddXG4gIH0sXG4gIFxuICBlcnJvck1lc3NhZ2VDbGFzc2VzOiB7XG4gICAgaW5pdGlhbDogJycsXG4gICAgdmFsaWQ6ICcnLFxuICAgIGludmFsaWQ6ICcnXG4gIH0sXG5cbiAgZXJyb3JNZXNzYWdlRGVsYXlzOiB7XG4gICAgdmFsaWQ6IDMwMCxcbiAgICBpbnZhbGlkOiA1MDBcbiAgfSxcblxuICBhc3luY0RlYm91bmNlVGltZTogNTAwLFxuXG4gIGFzeW5jU3RhdHVzSGlkZUNsYXNzOiAnaGlkZGVuJyxcbiAgXG4gIGFzeW5jU3VjY2Vzc01lc3NhZ2VEdXJhdGlvbjogMTAwMFxufTtcblxuZXhwb3J0IHtcbiAgZGVwZW5kZW5jeVJlcXVlc3RzLCBcbiAgc2V0dGluZ3Ncbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2xpYi92YXJzLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCAkZWwsIGJhc2VDbGFzcywgY29udHJvbE5hbWUpID0+IHtcbiAgbGV0IHtwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgYCR7YmFzZUNsYXNzfS0ke2NvbnRyb2xOYW1lfWBdO1xuICBsZXQgY2xhc3Nlc1N0ciA9IGNsYXNzZXMubWFwKGtsYXNzID0+IGAke3ByZWZpeH0tJHtrbGFzc31gKS5qb2luKCcgJyk7XG4gICRlbC5hZGRDbGFzcyhjbGFzc2VzU3RyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBuZXdEZXBlbmRlbnRzKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHtkZXBlbmRlbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIV8uaXNBcnJheShuZXdEZXBlbmRlbnRzKSkge1xuICAgIG5ld0RlcGVuZGVudHMgPSBbbmV3RGVwZW5kZW50c107XG4gIH1cbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgXy5zZXQodmFsaWRpZnksICdkZXBlbmRlbnRzJywgZGVwZW5kZW50cyA9IFtdKTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKC4uLm5ld0RlcGVuZGVudHMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlci50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZGVwcyc7XG5jb25zdCBkZXBlbmRlbmNpZXNUYWJsZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCB7XG4gIHZhbGlkYXRvck5hbWUsXG4gIGRlcGVuZGVuY2llc1RhYmxlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9fbGliL3ZhcnMudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ3VuaXF1ZUNoZWNrJztcblxuZXhwb3J0IHtcbiAgdmFsaWRhdG9yTmFtZSAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL19saWIvdmFycy50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBuYW1lKSA9PiB7XG4gIGxldCB7cHJlZml4fSA9IHNldHRpbmdzO1xuICBcbiAgaWYocHJlZml4ICYmIG5hbWUpIHtcbiAgICBuYW1lID0gcHJlZml4ICsgXy51cHBlckZpcnN0KG5hbWUpO1xuICB9XG4gIFxuICByZXR1cm4gbmFtZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9fbGliL3ByZWZpeGVyLnRzIiwiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCAoJGVsLCAkY29udGFpbmVyLCAkY29udGFpbmVyQ29udGFpbmVyLCBpbnNlcnRpb25TcGVjKSA9PiB7XG4gIGxldCBbYWN0aW9uLCAkaW5zZXJ0aW9uUG9pbnRdID0gKCgpID0+IHtcbiAgICBpZighJGNvbnRhaW5lckNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbJ2luc2VydEFmdGVyJywgJGVsXTtcbiAgICB9XG4gICAgXG4gICAgbGV0IFthY3Rpb24sIGFuY2hvcl0gPSBpbnNlcnRpb25TcGVjO1xuICAgIGxldCAkaW5zZXJ0aW9uUG9pbnQgPSAoKCkgPT4ge1xuICAgICAgaWYoIWFuY2hvcikge1xuICAgICAgICByZXR1cm4gJGNvbnRhaW5lckNvbnRhaW5lcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuICQoYW5jaG9yLCAkY29udGFpbmVyQ29udGFpbmVyKTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIFthY3Rpb24sICRpbnNlcnRpb25Qb2ludF07XG4gIH0pKCk7XG4gIFxuICAkY29udGFpbmVyW2FjdGlvbl0oJGluc2VydGlvblBvaW50KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi4vLi4vLi4vX2xpYi9wcmVmaXhlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBpZihfLmlzUGxhaW5PYmplY3QodmFsaWRhdGlvblN0YXR1cykpIHtcbiAgICBsZXQga2V5ID0gXy5rZXlzKHZhbGlkYXRpb25TdGF0dXMpWzBdO1xuICAgIGxldCB2YWx1ZSA9IHZhbGlkYXRpb25TdGF0dXNba2V5XTtcbiAgICBrZXkgPSBwcmVmaXhlcihzZXR0aW5ncywga2V5KTtcbiAgICB2YWxpZGF0aW9uU3RhdHVzID0ge1trZXldOiB2YWx1ZX07XG4gIH1cbiAgXG4gIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibmdIdHRwQ2xpZW50UGx1c1wiLFwiY29tbW9uanNcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIixcImNvbW1vbmpzMlwiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiYW1kXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvcmVcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29yZVwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2NvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtzZXR0aW5ncyBhcyBtYWluU2V0dGluZ3N9IGZyb20gJy4uL19saWIvdmFycyc7XG5pbXBvcnQgaW50ZXJuYWxWYWxpZGF0b3JzICAgICAgICAgZnJvbSAnLi4vdmFsaWRhdG9ycy92YWxpZGF0b3JzJztcbmltcG9ydCBtb2R1bGVHZW5lcmF0b3IgICAgICAgICAgICBmcm9tICcuL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdG9ycyA9IFtdKSA9PiB7XG4gIHNldHRpbmdzID0gXy5leHRlbmQoe30sIG1haW5TZXR0aW5ncywgc2V0dGluZ3MpO1xuICB2YWxpZGF0b3JzLnB1c2goLi4uaW50ZXJuYWxWYWxpZGF0b3JzKTtcbiAgcmV0dXJuIG1vZHVsZUdlbmVyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9ycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRpZmllci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBwcml2YXRlIHNldHRpbmdzO1xuICBwcml2YXRlIGFzeW5jcztcbiAgcHJpdmF0ZSAkZWw7XG4gIHByaXZhdGUgJGVsQ29udGFpbmVyO1xuICBwcml2YXRlIHBlbmRpbmdDbGFzcztcbiAgXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBjb250cm9sKSB7XG4gICAgbGV0IHthc3luY3MsIGVsZW1lbnRzfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gICAgbGV0IHskZWwsICRlbENvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgICBsZXQgcGVuZGluZ0NsYXNzID0gYCR7c2V0dGluZ3MucHJlZml4fS1hc3luYy1wZW5kaW5nYDtcbiAgICBcbiAgICBfLmV4dGVuZCh0aGlzLCB7JGVsLCAkZWxDb250YWluZXIsIGFzeW5jcywgcGVuZGluZ0NsYXNzLCBzZXR0aW5nc30pO1xuICB9XG4gIFxuICBwcml2YXRlIGRpc3BsYXkodHlwZSwgb24pIHtcbiAgICBsZXQgbWV0aG9kID0gb24gPyAncmVtb3ZlQ2xhc3MnOiAnYWRkQ2xhc3MnO1xuICAgIHRoaXMuYXN5bmNzWyckJyArIHR5cGVdW21ldGhvZF0odGhpcy5zZXR0aW5ncy5hc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gIH1cbiAgXG4gIHByaXZhdGUgY2xhc3NPcGVyYXRvcihvcGVyYXRpb24pIHtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCBwZW5kaW5nQ2xhc3N9ID0gdGhpcztcbiAgICAkZWxbb3BlcmF0aW9uXShwZW5kaW5nQ2xhc3MpO1xuICAgICRlbENvbnRhaW5lcltvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gIH1cbiAgXG4gIGNvbnRhaW5lcihvbikge1xuICAgIGlmKG9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ2FkZENsYXNzJyk7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wZW5kaW5nKG9uKTtcbiAgICAgIHRoaXMuc3VjY2Vzcyhvbik7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZGlzcGxheSgnYXN5bmNzQ29udGFpbmVyJywgb24pO1xuICB9XG5cbiAgcGVuZGluZyhvbikge1xuICAgIGlmKCFvbikge1xuICAgICAgdGhpcy5jbGFzc09wZXJhdG9yKCdyZW1vdmVDbGFzcycpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmRpc3BsYXkoJ3BlbmRpbmcnLCBvbik7XG4gIH1cbiAgXG4gIHN1Y2Nlc3Mob24pIHtcbiAgICB0aGlzLmRpc3BsYXkoJ3N1Y2Nlc3MnLCBvbik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2V0dGluZ3MsIGNvbnRyb2wpIHtcbiAgXy5leHRlbmQodGhpcywge3NldHRpbmdzLCBjb250cm9sLCBzdGF0ZToge319KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci50cyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlcGVuZGVudHNBZ2dyZWdhdG9yKGNvbnRyb2wsIGFsbCA9IFtdKSB7XG4gIGxldCB7ZGVwZW5kZW50cyA9IFtdfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gIFxuICBmb3IobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgaWYoYWxsLmluZGV4T2YoZGVwZW5kZW50KSA9PT0gLTEpIHtcbiAgICAgIGFsbC5wdXNoKGRlcGVuZGVudCk7XG4gICAgICBkZXBlbmRlbnRzQWdncmVnYXRvcihkZXBlbmRlbnQsIGFsbCk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gYWxsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVwZW5kZW50c0FnZ3JlZ2F0b3IgZnJvbSAnLi9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQge3NpbGVudCwgZGVwZW5kZW50cywgY29udHJvbH0gPSB0aGlzO1xuICBcbiAgaWYoIXNpbGVudCkge1xuICAgIGlmKCFjb250cm9sLnZhbGlkaWZ5Lmlnbm9yZURlcGVuZGVudHMpIHtcbiAgICAgIGRlcGVuZGVudHMgPSBkZXBlbmRlbnRzQWdncmVnYXRvcihjb250cm9sKTtcbiAgICAgIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgXy5leHRlbmQoZGVwZW5kZW50LnZhbGlkaWZ5LCB7c2lsZW50OiB0cnVlLCBpZ25vcmVEZXBlbmRlbnRzOiB0cnVlfSk7XG4gICAgICAgICAgZGVwZW5kZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIF8uZXh0ZW5kKHRoaXMsIHtkZXBlbmRlbnRzfSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgbGV0IHtzaWxlbnQsIGVycm9yc30gPSB0aGlzLmNvbnRyb2wudmFsaWRpZnk7XG4gIGxldCBlcnJvckNvbmZpZ3MgPSBlcnJvcnNbdmFsaWRhdG9yTmFtZV07XG4gIFxuICBfLmV4dGVuZCh0aGlzLCB7c2lsZW50LCBkZXBlbmRlbnRzOiB1bmRlZmluZWR9KTtcbiAgZXJyb3JDb25maWdzLnN0YXR1cyA9IHZhbGlkYXRpb25TdGF0dXM7XG4gIFxuICBpZighc2lsZW50KSB7XG4gICAgXy5leHRlbmQodGhpcywge2Vycm9yQ29uZmlnc30pO1xuICB9XG4gIFxuICByZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3N0YXRlLXNldHRlci9zdGF0ZS1zZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBfY29uc3RydWN0b3IgICAgICBmcm9tICcuL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgc3RhdGVTZXR0ZXIgICAgICAgZnJvbSAnLi9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyJztcbmltcG9ydCBkZXBlbmRlbnRzVXBkYXRlciBmcm9tICcuL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXInO1xuaW1wb3J0IHZpc3VhbGl6ZXIgICAgICAgIGZyb20gJy4vdmlzdWFsaXplci92aXN1YWxpemVyJztcblxuXy5leHRlbmQoX2NvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xuICBzZXQ6IHN0YXRlU2V0dGVyLFxuICB1cGRhdGVEZXBlbmRlbnRzOiBkZXBlbmRlbnRzVXBkYXRlcixcbiAgdmlzdWFsaXplOiB2aXN1YWxpemVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgX2NvbnN0cnVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGVycm9yQ29uZmlncykgPT4ge1xuICBsZXQge2Vycm9yTWVzc2FnZURlbGF5czogZGVsYXlzfSA9IHNldHRpbmdzO1xuICBsZXQge19hc3luYywgc3RhdHVzLCBjb250cm9sfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHtkaXJ0eX0gPSBjb250cm9sO1xuICByZXR1cm4gX2FzeW5jIHx8ICFkaXJ0eSA/IDAgOiBzdGF0dXMgPyBkZWxheXMuaW52YWxpZCA6IGRlbGF5cy52YWxpZDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCAkZWwpID0+IHtcbiAgbGV0IGNsYXNzZXMgPSAkZWwuYXR0cignY2xhc3MnKTtcbiAgXG4gIGlmKGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzID0gY2xhc3Nlcy5zcGxpdCgvXFxzKy8pO1xuICB9XG5cbiAgcmV0dXJuIF8ucmVkdWNlKGNsYXNzZXMsIChjb3VudCwga2xhc3MpID0+IHtcbiAgICBpZihrbGFzcy5zdGFydHNXaXRoKGAke3NldHRpbmdzLnByZWZpeH0tZXJyb3JgKSkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNvdW50O1xuICB9LCAwKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJpbXBvcnQgZXJyb3JzQ291bnRlciBmcm9tICcuL19saWIvZXJyb3JzLWNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGVycm9yQ29uZmlncykgPT4ge1xuICBsZXQge3ZhbGlkYXRvck5hbWUsIHN0YXR1czogdmFsaWRhdGlvblN0YXR1c30gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7JGVsOiAkZXJyb3JFbCwgX2FzeW5jLCBjb250cm9sfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHtlcnJvck1lc3NhZ2VDbGFzc2VzLCBwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCB7ZGlydHksIHZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7JGVsLCAkZWxDb250YWluZXIsICRlcnJvcnNDb250YWluZXJ9ID0gdmFsaWRpZnkuZWxlbWVudHM7XG4gIGxldCBlcnJvckNsYXNzID0gYCR7cHJlZml4fS1lcnJvci0ke3ZhbGlkYXRvck5hbWV9YDtcbiAgbGV0IHN5bmNDbGFzcyA9IGAke3ByZWZpeH0tc3luY2A7XG4gIGxldCBhc3luY0NsYXNzID0gYCR7cHJlZml4fS1hc3luY2A7XG4gIFxuICBpZihkaXJ0eSkge1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcygnbmctcHJpc3RpbmUnKS5hZGRDbGFzcygnbmctZGlydHknKTtcbiAgfSBlbHNlIHtcbiAgICAkZWxDb250YWluZXIuYWRkQ2xhc3MoJ25nLXByaXN0aW5lJyk7XG4gIH1cblxuICBpZihfYXN5bmMpIHtcbiAgICAkZWxDb250YWluZXIuYWRkQ2xhc3MoYXN5bmNDbGFzcykucmVtb3ZlQ2xhc3Moc3luY0NsYXNzKTtcbiAgICAkZXJyb3JzQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKHN5bmNDbGFzcyk7XG4gIH0gZWxzZSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKHN5bmNDbGFzcykucmVtb3ZlQ2xhc3MoYXN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hZGRDbGFzcyhzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKGFzeW5jQ2xhc3MpO1xuICB9XG5cbiAgaWYodmFsaWRhdGlvblN0YXR1cykge1xuICAgICRlbC5hZGRDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLXZhbGlkJykuYWRkQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAkZXJyb3JFbC5yZW1vdmVDbGFzcygnbmctdmFsaWQnKS5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLnZhbGlkKTtcbiAgICByZXR1cm4gJGVycm9yRWwuYWRkQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmludmFsaWQpO1xuICB9XG4gIFxuICAkZXJyb3JFbC5yZW1vdmVDbGFzcygnbmctaW52YWxpZCcpLnJlbW92ZUNsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMuaW52YWxpZCk7XG4gICRlcnJvckVsLmFkZENsYXNzKCduZy12YWxpZCcpLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMudmFsaWQpO1xuICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICRlbC5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKTtcblxuICBpZighZXJyb3JzQ291bnRlcihzZXR0aW5ncywgJGVsQ29udGFpbmVyKSkge1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcygnbmctaW52YWxpZCcpLmFkZENsYXNzKCduZy12YWxpZCcpO1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcyhfYXN5bmMgPyBhc3luY0NsYXNzIDogc3luY0NsYXNzKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlbGF5Q2FsY3VsYXRvciAgZnJvbSAnLi9fbGliL2RlbGF5LWNhbGN1bGF0b3InO1xuaW1wb3J0IGVycm9yc1Zpc3VhbGl6ZXIgZnJvbSAnLi9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBpZighdGhpcy5zaWxlbnQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCB7Y29udHJvbCwgZGVwZW5kZW50cyA9IFtdLCBlcnJvckNvbmZpZ3N9ID0gdGhpcztcbiAgICAgIGxldCBkZWxheSA9IGRlbGF5Q2FsY3VsYXRvcih0aGlzLnNldHRpbmdzLCBlcnJvckNvbmZpZ3MpO1xuICAgICAgXG4gICAgICBjbGVhclRpbWVvdXQoZXJyb3JDb25maWdzLnZpc3VhbGl6YXRpb25UaW1lb3V0KTtcbiAgICAgIFxuICAgICAgZXJyb3JDb25maWdzLnZpc3VhbGl6YXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlcGVuZGVudHMudW5zaGlmdChjb250cm9sKTtcbiAgICAgICAgXy5lYWNoKGRlcGVuZGVudHMsIGNvbnRyb2wgPT4ge1xuICAgICAgICAgIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgICAgICAgICBcbiAgICAgICAgICBfLmV4dGVuZCh2YWxpZGlmeSwge3NpbGVudDogZmFsc2UsIGlnbm9yZURlcGVuZGVudHM6IGZhbHNlfSk7XG4gICAgICAgICAgXy5lYWNoKHZhbGlkaWZ5LmVycm9ycywgXy5wYXJ0aWFsKGVycm9yc1Zpc3VhbGl6ZXIsIHRoaXMuc2V0dGluZ3MsIF8pKTtcbiAgICAgICAgfSlcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci92aXN1YWxpemVyLnRzIiwiaW1wb3J0IHZhbGlkYXRvciAgICAgICBmcm9tICcuL3ZhbGlkYXRvci92YWxpZGF0b3InO1xuaW1wb3J0IHByZXByb2Nlc3NvciAgICBmcm9tICcuL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3InO1xuaW1wb3J0IG1lc3NhZ2VyICAgICAgICBmcm9tICcuL21lc3NhZ2VyL21lc3NhZ2VyJztcbmltcG9ydCB7dmFsaWRhdG9yTmFtZX0gZnJvbSAnLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcixcbiAgcHJlcHJvY2Vzc29yLFxuICBtZXNzYWdlcixcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvZGVwcy50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVwZW5kZW5jeU5hbWVzID0+IHtcbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcy5tYXAoZGVwZW5kZW5jeU5hbWUgPT4ge1xuICAgIHJldHVybiBfLnVwcGVyRmlyc3QoXy5sb3dlckNhc2UoZGVwZW5kZW5jeU5hbWUpKTtcbiAgfSkuam9pbignLCAnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL19saWIvZGVwZW5kZW5jeS1uYW1lcy1zdHJpbmdpZmllci50cyIsImltcG9ydCBkZXBlbmRlbmN5TmFtZXNTdHJpbmdpZmllciBmcm9tICcuL19saWIvZGVwZW5kZW5jeS1uYW1lcy1zdHJpbmdpZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgbGV0IHtjb250cm9sTmFtZVByb3Blcn0gPSBjb250cm9sO1xuICBkZXBlbmRlbmN5TmFtZXMgPSBkZXBlbmRlbmN5TmFtZXNTdHJpbmdpZmllcihkZXBlbmRlbmN5TmFtZXMpO1xuICByZXR1cm4gYCR7Y29udHJvbE5hbWVQcm9wZXJ9IGRlcGVuZHMgb24gJHtkZXBlbmRlbmN5TmFtZXN9YDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL21lc3NhZ2VyLnRzIiwiY29uc3QgZGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQge2RlcGVuZGVuY3lEZXBlbmRlbnRzTWFwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL19saWIvdmFycy50cyIsImV4cG9ydCBkZWZhdWx0IChzdHIsIGNoYXIpID0+IHtcbiAgbGV0IHJ4ID0gbmV3IFJlZ0V4cChgXFxcXHMqJHtjaGFyfVxcXFxzKmApO1xuICByZXR1cm4gc3RyLnNwbGl0KHJ4KS5tYXAocGllY2UgPT4gcGllY2UudHJpbSgpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL19saWIvc3RyLWFycmF5aWZpZXIudHMiLCJpbXBvcnQgc3RyQXJyYXlpZmllciBmcm9tICcuL19saWIvc3RyLWFycmF5aWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWVzLCBjb250cm9sKSA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgZGVwZW5kZW5jeU5hbWVzID0gc3RyQXJyYXlpZmllcihkZXBlbmRlbmN5TmFtZXMsICcsJyk7XG4gIGlmKGRlcGVuZGVuY3lOYW1lcy5pbmRleE9mKGNvbnRyb2xOYW1lKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske2NvbnRyb2xOYW1lfV0gY2Fubm90IGRlcGVuZCBvbiBpdHNlbGZgKTtcbiAgfVxuICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeVJlcXVlc3RzfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHtfcGFyZW50fSA9IGNvbnRyb2w7XG4gIGxldCBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzID0gZGVwZW5kZW5jeVJlcXVlc3RzLmdldChfcGFyZW50KTtcbiAgICBcbiAgaWYoIWZvcm1EZXBlbmRlbmN5UmVxdWVzdHMpIHtcbiAgICBkZXBlbmRlbmN5UmVxdWVzdHMuc2V0KF9wYXJlbnQsIGZvcm1EZXBlbmRlbmN5UmVxdWVzdHMgPSB7fSk7XG4gIH1cbiAgXG4gIGxldCBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lSZXF1ZXN0c1tkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZighZGVwZW5kZW50cykge1xuICAgIGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzW2RlcGVuZGVuY3lOYW1lXSA9IFtdO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goY29udHJvbCk7ICAgIFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyLnRzIiwiaW1wb3J0IGRlcGVuZGVudHNTZXR0ZXIgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyJztcbmltcG9ydCBkZXBlbmRlbmN5UmVxdWVzdFJlZ2lzdHJhciBmcm9tICcuL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQgZGVwZW5kZW5jeUNvbnRyb2wgPSBjb250cm9sLl9wYXJlbnQuY29udHJvbHNbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoZGVwZW5kZW5jeUNvbnRyb2wpIHtcbiAgICByZXR1cm4gZGVwZW5kZW50c1NldHRlcihkZXBlbmRlbmN5Q29udHJvbCwgY29udHJvbCk7XG4gIH1cbiAgXG4gIGRlcGVuZGVuY3lSZXF1ZXN0UmVnaXN0cmFyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXIudHMiLCJpbXBvcnQgZm9ybURlcGVuZGVuY3lNYXBHZXR0ZXIgICBmcm9tICcuL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCB7X3BhcmVudCwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IGZvcm1EZXBlbmRlbmN5TWFwR2V0dGVyKF9wYXJlbnQpO1xuICBsZXQgY29udHJvbERlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbY29udHJvbE5hbWVdO1xuICBcbiAgaWYoKGNvbnRyb2xEZXBlbmRlbnRzIHx8IFtdKS5pbmRleE9mKGRlcGVuZGVuY3lOYW1lKSA+IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtjb250cm9sTmFtZX1dIGFuZCBbJHtkZXBlbmRlbmN5TmFtZX1dIGRlcGVuZCBvbiBlYWNoIG90aGVyYCk7XG4gIH1cbiAgXG4gIGxldCBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtkZXBlbmRlbmN5TmFtZV0gPSBbXTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKGNvbnRyb2xOYW1lKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeURlcGVuZGVudHNNYXB9IGZyb20gJy4uLy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IF9wYXJlbnQgPT4ge1xuICBsZXQgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gZGVwZW5kZW5jeURlcGVuZGVudHNNYXAuZ2V0KF9wYXJlbnQpO1xuICBcbiAgaWYoIWZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCkge1xuICAgIGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwLnNldChfcGFyZW50LCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSB7fSk7XG4gIH1cbiAgXG4gIHJldHVybiBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXA7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlcGVuZGVuY3lOYW1lc1RyYW5zZm9ybWVyIGZyb20gJy4vZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyJztcbmltcG9ydCBkZXBlbmRlbnRUcmFja2VyICAgICAgICAgICBmcm9tICcuL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyJztcbmltcG9ydCBkZXBlbmRlbnRSZWdpc3RyYXIgICAgICAgICBmcm9tICcuL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW50LXJlZ2lzdHJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW5jeU5hbWVzVHJhbnNmb3JtZXIoZGVwZW5kZW5jeU5hbWVzLCBjb250cm9sKTtcblxuICBfLmVhY2goZGVwZW5kZW5jeU5hbWVzLCBkZXBlbmRlbmN5TmFtZSA9PiB7XG4gICAgZGVwZW5kZW50VHJhY2tlcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG4gICAgZGVwZW5kZW50UmVnaXN0cmFyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgbGV0IHtjb250cm9sc30gPSBjb250cm9sLl9wYXJlbnQ7XG4gIFxuICBmb3IobGV0IGRlcGVuZGVuY3lOYW1lIG9mIGRlcGVuZGVuY3lOYW1lcykge1xuICAgIGxldCBkZXBlbmRlbmN5Q29udHJvbCA9IGNvbnRyb2xzW2RlcGVuZGVuY3lOYW1lXTtcblxuICAgIGlmKCFkZXBlbmRlbmN5Q29udHJvbCkge1xuICAgICAgY29uc29sZS53YXJuKGBkZXBlbmRlbmN5IFske2RlcGVuZGVuY3lOYW1lfV0gaXMgbm90IGRlY2xhcmVkYCk7XG4gICAgfVxuXG4gICAgaWYoIWRlcGVuZGVuY3lDb250cm9sIHx8IGRlcGVuZGVuY3lDb250cm9sLmludmFsaWQpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VtYWlsR292JztcbmNvbnN0IGVtYWlsR292UnggPSAvXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKFxcLlstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSspKkBbQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KFxcLltBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8pKihcXC4oZ292fG1pbCkpJC87XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighZW1haWxHb3ZSeC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyBub3QgYSB2YWxpZCBnb3Zlcm5tZW50IGVtYWlsYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC1nb3YvZW1haWwtZ292LnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlbWFpbCc7XG5jb25zdCBlbWFpbFJ4ID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokLztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFlbWFpbFJ4LnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIG5vdCBhIHZhbGlkIGVtYWlsYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZXF1YWxzVG8nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBlcXVhbHNUbykge1xuICAgIGxldCB7dmFsdWUsIF9wYXJlbnR9ID0gY29udHJvbDtcbiAgICBsZXQgZXF1YWxzVG9Db250cm9sID0gX3BhcmVudC5jb250cm9sc1tlcXVhbHNUb107XG5cbiAgICBpZighdmFsdWUgfHwgdmFsdWUgIT09IGVxdWFsc1RvQ29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sLCB2YWxpZGF0b3JDb25maWdzKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IG11c3QgZXF1YWwgdG8gJHt2YWxpZGF0b3JDb25maWdzfWA7XG4gIH0sXG5cbiAgdmFsaWRhdG9yTmFtZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZXF1YWxzLXRvL2VxdWFscy10by50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnbWF4TGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgbGV0IHt2YWx1ZX0gPSBjb250cm9sO1xuICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgaWYoIW1heExlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXhpbXVtIGxlbmd0aCBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gK21heExlbmd0aDtcbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBzaG91bGQgYmUgbGVzcyB0aGFuICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9tYXgtbGVuZ3RoL21heC1sZW5ndGgudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ21pbkxlbmd0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIGlmKGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIGlmKCFtaW5MZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWluaW11bSBsZW5ndGggc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICttaW5MZW5ndGg7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gc2hvdWxkIGJlICR7bWluTGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHZhbGlkYXRvck5hbWUgPSAncGF0dGVybic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIHBhdHRlcm4pIHtcbiAgICBpZighcGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIHBhdHRlcm4pIHtcbiAgICBpZighcGF0dGVybikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzcGVjaWZ5IHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuJyk7XG4gICAgfVxuICAgIFxuICAgIGlmKF8uaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJufSRgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwiY29uc3QgZGlyZWN0aXZlTmFtZSA9ICdyZXF1aXJlZCc7XG5jb25zdCB2YWxpZGF0b3JOYW1lID0gJ3JlcXVpcmVkVHJ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZihjb250cm9sLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4ge1tkaXJlY3RpdmVOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgcmVxdWlyZWRgO1xuICB9LFxuXG4gIGRpcmVjdGl2ZU5hbWUsXG5cbiAgdmFsaWRhdG9yTmFtZSxcbiAgXG4gIGNoZWNrYm94OiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdyZXF1aXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighY29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIHJlcXVpcmVkYDtcbiAgfSxcblxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQvcmVxdWlyZWQudHMiLCJleHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtjb250cm9sTmFtZVByb3Blcn0gPSBjb250cm9sO1xuICByZXR1cm4gYFZhbHVlIHByb3ZpZGVkIGZvciAke2NvbnRyb2xOYW1lUHJvcGVyfSBmaWVsZCBhbHJlYWR5IGV4aXN0c2A7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL21lc3NhZ2VyL21lc3NhZ2VyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgY29uZmlncywgYmFzZUNvbmZpZ3MpID0+IHtcbiAgaWYoIV8uaXNQbGFpbk9iamVjdChjb25maWdzKSkge1xuICAgIGNvbmZpZ3MgPSB7cGF0aDogY29uZmlnc307XG4gIH1cbiAgXG4gIGxldCB7ZmllbGROYW1lLCBpZ25vcmUsIGlnbm9yZUNhc2UsIHBhdGh9ID0gY29uZmlncztcbiAgXG4gIGlmKGJhc2VDb25maWdzKSB7XG4gICAgdmFyIHtiYXNlVXJsfSA9IGJhc2VDb25maWdzO1xuICB9XG4gIFxuICBpZighZmllbGROYW1lKSB7XG4gICAgZmllbGROYW1lID0gY29udHJvbC5jb250cm9sTmFtZTtcbiAgfVxuICBcbiAgaWYoIWlnbm9yZSkge1xuICAgIGlnbm9yZSA9IFtdO1xuICB9IGVsc2UgaWYoIV8uaXNBcnJheShpZ25vcmUpKSB7XG4gICAgaWdub3JlID0gW2lnbm9yZV07XG4gIH1cbiAgXG4gIGlmKF8uaXNVbmRlZmluZWQoaWdub3JlQ2FzZSkpIHtcbiAgICBpZ25vcmVDYXNlID0gdHJ1ZTtcbiAgfVxuICBcbiAgaWYoaWdub3JlQ2FzZSkge1xuICAgIGlnbm9yZSA9IGlnbm9yZS5tYXAoaWdub3JlID0+IChpZ25vcmUgKyAnJykudG9Mb3dlckNhc2UoKSk7XG4gIH1cbiAgXG4gIGlmKGJhc2VVcmwpIHtcbiAgICBwYXRoID0gYmFzZVVybCArIHBhdGg7XG4gIH1cbiAgXG4gIHJldHVybiBfLmV4dGVuZChjb25maWdzLCB7ZmllbGROYW1lLCBpZ25vcmUsIGlnbm9yZUNhc2UsIHBhdGh9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB2YWxpZGF0b3IgICAgICAgZnJvbSAnLi92YWxpZGF0b3IvdmFsaWRhdG9yJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgZnJvbSAnLi9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yJztcbmltcG9ydCBtZXNzYWdlciAgICAgICAgZnJvbSAnLi9tZXNzYWdlci9tZXNzYWdlcic7XG5pbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IsXG4gIHByZXByb2Nlc3NvcixcbiAgbWVzc2FnZXIsXG4gIHZhbGlkYXRvck5hbWUsXG4gIGFzeW5jOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjay50cyIsImltcG9ydCB7dmFsaWRhdG9yTmFtZX0gZnJvbSAnLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGNvbmZpZ3MpID0+IHtcbiAgbGV0IHtmaWVsZE5hbWUsIGlnbm9yZSwgaWdub3JlQ2FzZSwgcGF0aH0gPSBjb25maWdzO1xuICBsZXQge3ZhbHVlfSA9IGNvbnRyb2w7XG5cbiAgaWYoaWdub3JlQ2FzZSkge1xuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuICBcbiAgaWYoIXZhbHVlIHx8IGlnbm9yZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBwYXJhbXMgPSB7W2ZpZWxkTmFtZV06IHZhbHVlfTtcbiAgICBcbiAgICBjb250cm9sLmh0dHAuZ2V0KHBhdGgsIHtwYXJhbXN9KS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICByZXNvbHZlKGRhdGEubGVuZ3RoID8ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX0gOiBudWxsKTtcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICByZWplY3QoZXJyb3IubWVzc2FnZSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay92YWxpZGF0b3IvdmFsaWRhdG9yLnRzIiwiaW1wb3J0IGRlcHNWYWxpZGF0b3IgICAgICAgICBmcm9tICcuL2RlcHMvZGVwcyc7XG5pbXBvcnQgZW1haWxWYWxpZGF0b3IgICAgICAgIGZyb20gJy4vZW1haWwvZW1haWwnO1xuaW1wb3J0IGVtYWlsR292VmFsaWRhdG9yICAgICBmcm9tICcuL2VtYWlsLWdvdi9lbWFpbC1nb3YnO1xuaW1wb3J0IGVxdWFsc1RvVmFsaWRhdG9yICAgICBmcm9tICcuL2VxdWFscy10by9lcXVhbHMtdG8nO1xuaW1wb3J0IG1heExlbmd0aFZhbGlkYXRvciAgICBmcm9tICcuL21heC1sZW5ndGgvbWF4LWxlbmd0aCc7XG5pbXBvcnQgbWluTGVuZ3RoVmFsaWRhdG9yICAgIGZyb20gJy4vbWluLWxlbmd0aC9taW4tbGVuZ3RoJztcbmltcG9ydCBwYXR0ZXJuVmFsaWRhdG9yICAgICAgZnJvbSAnLi9wYXR0ZXJuL3BhdHRlcm4nO1xuaW1wb3J0IHJlcXVpcmVkVmFsaWRhdG9yICAgICBmcm9tICcuL3JlcXVpcmVkL3JlcXVpcmVkJztcbmltcG9ydCByZXF1aXJlZFRydWVWYWxpZGF0b3IgZnJvbSAnLi9yZXF1aXJlZC10cnVlL3JlcXVpcmVkLXRydWUnO1xuaW1wb3J0IHVuaXF1ZUNoZWNrVmFsaWRhdG9yICBmcm9tICcuL3VuaXF1ZS1jaGVjay91bmlxdWUtY2hlY2snO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIGRlcHNWYWxpZGF0b3IsXG4gIHJlcXVpcmVkVmFsaWRhdG9yLFxuICBtaW5MZW5ndGhWYWxpZGF0b3IsXG4gIG1heExlbmd0aFZhbGlkYXRvcixcbiAgcGF0dGVyblZhbGlkYXRvcixcbiAgZW1haWxWYWxpZGF0b3IsXG4gIGVtYWlsR292VmFsaWRhdG9yLFxuICBlcXVhbHNUb1ZhbGlkYXRvcixcbiAgcmVxdWlyZWRUcnVlVmFsaWRhdG9yLFxuICB1bmlxdWVDaGVja1ZhbGlkYXRvclxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiLCJleHBvcnQgZGVmYXVsdCAobmFtZSwgY2hlY2tib3gpID0+IHtcbiAgbGV0IGNoZWNrYm94VHlwZSA9ICdbdHlwZT1jaGVja2JveF0nO1xuICBsZXQgY29udHJvbFR5cGVzID0gWydmb3JtQ29udHJvbE5hbWUnLCAnZm9ybUNvbnRyb2wnLCAnbmdNb2RlbCddXG4gIGNoZWNrYm94ID0gY2hlY2tib3ggPyBgaW5wdXQke2NoZWNrYm94VHlwZX1gIDogYDpub3QoJHtjaGVja2JveFR5cGV9KWA7XG4gIFxuICByZXR1cm4gY29udHJvbFR5cGVzLnJlZHVjZSgoc2VsZWN0b3IsIGNvbnRyb2xUeXBlKSA9PiB7XG4gICAgc2VsZWN0b3IucHVzaChgJHtjaGVja2JveH1bJHtuYW1lfV1bJHtjb250cm9sVHlwZX1dYCk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9LCBbXSkuam9pbignLCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudFBsdXN9ICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbmctaHR0cC1jbGllbnQtcGx1cyc7XG5pbXBvcnQge05HX1ZBTElEQVRPUlMsIE5HX0FTWU5DX1ZBTElEQVRPUlN9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBzZWxlY3RvckFzc2VtYmxlciAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9fbGliL3NlbGVjdG9yLWFzc2VtYmxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRvcnMgPT4ge1xuICByZXR1cm4gdmFsaWRhdG9ycy5tYXAodmFsaWRhdG9yQ29uZmlndXJhdG9yID0+IHtcbiAgICBsZXQge2FzeW5jOiBfYXN5bmMsIGNoZWNrYm94LCB2YWxpZGF0b3JOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yO1xuICAgIGxldCB7ZGlyZWN0aXZlTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcjtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZSA9IGRpcmVjdGl2ZU5hbWVQcmVmaXhlZCB8fCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQ7XG4gICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JBc3NlbWJsZXIoZGlyZWN0aXZlTmFtZSwgY2hlY2tib3gpO1xuXG4gICAgbGV0IHByb3ZpZGVycyA9IFt7XG4gICAgICBwcm92aWRlOiBfYXN5bmMgPyBOR19BU1lOQ19WQUxJREFUT1JTIDogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzKSxcbiAgICAgIG11bHRpOiB0cnVlICAgICAgICBcbiAgICB9XTtcbiAgICBcbiAgICBARGlyZWN0aXZlKHtzZWxlY3RvciwgcHJvdmlkZXJzfSkgY2xhc3MgVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3Mge1xuICAgICAgcHJpdmF0ZSB2YWxpZGF0b3I7XG4gICAgICBwcml2YXRlIG9uQ2hhbmdlO1xuICAgICAgcHJpdmF0ZSBjb250cm9sO1xuICAgICAgQElucHV0KGAke2RpcmVjdGl2ZU5hbWV9YCkgcHJpdmF0ZSBjb25maWdzO1xuICAgIFxuICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50UGx1cykge31cbiAgICBcbiAgICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgaWYoJ2NvbmZpZ3MnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICBpZighdGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgaWYodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgICAgdmFsaWRhdGUoY29udHJvbD8pIHtcbiAgICAgICAgbGV0IGVycm9yID0ge1tkaXJlY3RpdmVOYW1lXTogdHJ1ZX07XG4gICAgICAgIFxuICAgICAgICBpZihfYXN5bmMpIHtcbiAgICAgICAgICBfLmV4dGVuZChjb250cm9sLCB7aHR0cDogdGhpcy5odHRwfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXy5leHRlbmQodGhpcywge1xuICAgICAgICAgIGNvbnRyb2wsIFxuICAgICAgICAgIHZhbGlkYXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gX2FzeW5jID8gUHJvbWlzZS5yZXNvbHZlKGVycm9yKSA6IGVycm9yOyBcbiAgICAgIH1cbiAgICBcbiAgICAgIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm4pIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuOyBcbiAgICAgIH1cbiAgICBcbiAgICAgIHByaXZhdGUgY3JlYXRlVmFsaWRhdG9yKCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcih0aGlzLmNvbnRyb2wsIHRoaXMuY29uZmlncywgdGhpcy5lbCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy52YWxpZGF0ZSgpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9kaXJlY3RpdmVzLWdlbmVyYXRvci9kaXJlY3RpdmVzLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge05nTW9kdWxlfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudFBsdXNNb2R1bGV9IGZyb20gJ25nLWh0dHAtY2xpZW50LXBsdXMnO1xuaW1wb3J0IHByZWZpeGVyICAgICAgICAgICAgICAgZnJvbSAnLi4vX2xpYi9wcmVmaXhlcic7XG5pbXBvcnQgdmFsaWRhdG9yQ29uZmlndXJhdG9yICBmcm9tICcuLi92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3InO1xuaW1wb3J0IGRpcmVjdGl2ZXNHZW5lcmF0b3IgICAgZnJvbSAnLi4vZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRvcnMpID0+IHtcbiAgdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMubWFwKHZhbGlkYXRvciA9PiB7XG4gICAgbGV0IHt2YWxpZGF0b3JOYW1lLCBkaXJlY3RpdmVOYW1lfSA9IHZhbGlkYXRvcjtcbiAgICBsZXQgdmFsaWRhdG9yTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIHZhbGlkYXRvck5hbWUpO1xuICAgIGxldCBkaXJlY3RpdmVOYW1lUHJlZml4ZWQgPSBwcmVmaXhlcihzZXR0aW5ncywgZGlyZWN0aXZlTmFtZSk7XG4gICAgXy5leHRlbmQodmFsaWRhdG9yLCB7dmFsaWRhdG9yTmFtZVByZWZpeGVkLCBkaXJlY3RpdmVOYW1lUHJlZml4ZWR9KTtcbiAgICByZXR1cm4gdmFsaWRhdG9yQ29uZmlndXJhdG9yKHNldHRpbmdzLCB2YWxpZGF0b3IpO1xuICB9KTtcbiAgXG4gIGxldCBkaXJlY3RpdmVzID0gZGlyZWN0aXZlc0dlbmVyYXRvcih2YWxpZGF0b3JzKTtcblxuICBATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtIdHRwQ2xpZW50UGx1c01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBkaXJlY3RpdmVzLCBcbiAgICBleHBvcnRzOiBkaXJlY3RpdmVzXG4gIH0pIGNsYXNzIFZhbGlkYXRvck1vZHVsZSB7fVxuICBcbiAgcmV0dXJuIFZhbGlkYXRvck1vZHVsZTsgICAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbmFtZUFzc2lnbmVyICAgICBmcm9tICcuL25hbWUtYXNzaWduZXIvbmFtZS1hc3NpZ25lcic7XG5pbXBvcnQgVmFsaWRhdGlvblN0YXRlciBmcm9tICcuLi8uLi8uLi9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBlbCkgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIFxuICBpZighdmFsaWRpZnkpIHtcbiAgICBlbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbmFtZUFzc2lnbmVyKGNvbnRyb2wpO1xuICAgIFxuICAgIHZhbGlkaWZ5ID0ge1xuICAgICAgZWxlbWVudHM6IHt9LFxuICAgICAgZXJyb3JzOiB7fSxcbiAgICAgIHZhbGlkYXRpb25TdGF0ZXI6IG5ldyBWYWxpZGF0aW9uU3RhdGVyKHNldHRpbmdzLCBjb250cm9sKVxuICAgIH07XG4gICAgXG4gICAgXy5leHRlbmQoY29udHJvbCwge3ZhbGlkaWZ5LCBlbCwgJGVsOiAkKGVsKX0pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL2RhdGEtaW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xzfSA9IGNvbnRyb2wuX3BhcmVudDtcbiAgbGV0IGNvbnRyb2xOYW1lcyA9IF8ua2V5cyhjb250cm9scyk7XG4gIGZvcihsZXQgY29udHJvbE5hbWUgb2YgY29udHJvbE5hbWVzKSB7XG4gICAgaWYoY29udHJvbHNbY29udHJvbE5hbWVdID09PSBjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbE5hbWU7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbGliL25hbWUtYWNjZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbmFtZUFjY2Vzc29yIGZyb20gJy4vbGliL25hbWUtYWNjZXNzb3InO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBcbiAgaWYoIWNvbnRyb2xOYW1lKSB7XG4gICAgY29udHJvbE5hbWUgPSBuYW1lQWNjZXNzb3IoY29udHJvbCk7XG4gICAgXy5leHRlbmQoY29udHJvbCwge1xuICAgICAgY29udHJvbE5hbWUsXG4gICAgICBjb250cm9sTmFtZVByb3BlcjogXy51cHBlckZpcnN0KF8ubG93ZXJDYXNlKGNvbnRyb2xOYW1lKSlcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL25hbWUtYXNzaWduZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lSZXF1ZXN0c30gZnJvbSAnLi4vLi4vLi4vX2xpYi92YXJzJztcbmltcG9ydCBkZXBlbmRlbnRzU2V0dGVyICAgICBmcm9tICcuLi8uLi8uLi9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge19wYXJlbnQsIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCBwYXJlbnRSZWNvcmRzID0gZGVwZW5kZW5jeVJlcXVlc3RzLmdldChfcGFyZW50KTtcbiAgXG4gIGlmKHBhcmVudFJlY29yZHMpIHtcbiAgICBsZXQgZGVwZW5kZW50UmVjb3JkcyA9IHBhcmVudFJlY29yZHNbY29udHJvbE5hbWVdO1xuXG4gICAgaWYoZGVwZW5kZW50UmVjb3Jkcykge1xuICAgICAgZGVwZW5kZW50c1NldHRlcihjb250cm9sLCBkZXBlbmRlbnRSZWNvcmRzKTtcbiAgICAgIGRlbGV0ZSBwYXJlbnRSZWNvcmRzW2NvbnRyb2xOYW1lXTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RlcGVuZGVudHMtcmVnaXN0cmFyL2RlcGVuZGVudHMtcmVnaXN0cmFyLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc0lkQXNzaWduZXIgICAgICAgICBmcm9tICcuLi8uLi9fbGliL2NsYXNzLWlkLWFzc2lnbmVyJztcbmltcG9ydCBjb250YWluZXJBZGRlciAgICAgICAgICBmcm9tICcuLi9fbGliL2NvbnRhaW5lci1hZGRlcic7XG5pbXBvcnQgQXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIgZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7dmFsaWRpZnksIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNzID0ge30sIGVsZW1lbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIXZhbGlkYXRvckRlY2xhcmF0aW9uLmFzeW5jIHx8ICFfLmlzRW1wdHkoYXN5bmNzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHthc3luY1N0YXR1c0hpZGVDbGFzcywgc2VsZWN0b3JzfSA9IHNldHRpbmdzO1xuICBsZXQge2FzeW5jU3RhdHVzQ29udGFpbmVyfSA9IHNlbGVjdG9ycztcbiAgbGV0IHskZWwsICRlbENvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgbGV0ICRhc3luY3NDb250YWluZXIgPSAkKCc8ZGl2Lz4nKTtcbiAgbGV0ICRwZW5kaW5nID0gJCgnPGRpdi8+Jyk7XG4gIGxldCAkc3VjY2VzcyA9ICQoJzxkaXYvPicpO1xuXG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGFzeW5jc0NvbnRhaW5lciwgJ2FzeW5jcy1jb250YWluZXInLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJHBlbmRpbmcsICdhc3luYy1wZW5kaW5nJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRzdWNjZXNzLCAnYXN5bmMtc3VjY2VzcycsIGNvbnRyb2xOYW1lKTtcbiAgXG4gICRhc3luY3NDb250YWluZXIuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkcGVuZGluZy5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRzdWNjZXNzLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJGFzeW5jc0NvbnRhaW5lci5hcHBlbmQoJHBlbmRpbmcpLmFwcGVuZCgkc3VjY2Vzcyk7XG4gIFxuICBfLmV4dGVuZChhc3luY3MsIHskYXN5bmNzQ29udGFpbmVyLCAkcGVuZGluZywgJHN1Y2Nlc3N9KTtcbiAgXy5leHRlbmQodmFsaWRpZnksIHthc3luY3MsIGFzeW5jU3RhdHVzZXM6IHt9fSk7XG4gIFxuICBjb250YWluZXJBZGRlcigkZWwsICRhc3luY3NDb250YWluZXIsICRlbENvbnRhaW5lciwgYXN5bmNTdGF0dXNDb250YWluZXIpO1xuICB2YWxpZGlmeS5hc3luY1Byb2dyZXNzVmlzdWFsaXplciA9IG5ldyBBc3luY1Byb2dyZXNzVmlzdWFsaXplcihzZXR0aW5ncywgY29udHJvbCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlci50cyIsImltcG9ydCBlcnJvcnNDb250YWluZXJCdWlsZGVyIGZyb20gJy4vZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlcic7XG5pbXBvcnQgYXN5bmNDb250YWluZXJCdWlsZGVyICBmcm9tICcuL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBlcnJvcnNDb250YWluZXJCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sKTtcbiAgYXN5bmNDb250YWluZXJCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc0lkQXNzaWduZXIgZnJvbSAnLi4vLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgY29udGFpbmVyQWRkZXIgIGZyb20gJy4uL19saWIvY29udGFpbmVyLWFkZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sKSA9PiB7XG4gIGxldCB7JGVsLCB2YWxpZGlmeSwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHtlbGVtZW50c30gPSB2YWxpZGlmeTtcbiAgXG4gIGlmKCFfLmlzRW1wdHkoZWxlbWVudHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBsZXQge2VsZW1lbnRDb250YWluZXIsIGVycm9yc0NvbnRhaW5lcn0gPSBzZXR0aW5ncy5zZWxlY3RvcnM7XG4gIGxldCAkZWxDb250YWluZXIgPSBlbGVtZW50Q29udGFpbmVyID8gJGVsLmNsb3Nlc3QoZWxlbWVudENvbnRhaW5lcikgOiAkKCk7XG4gIGxldCAkZXJyb3JzQ29udGFpbmVyID0gJCgnPGRpdi8+Jyk7XG5cbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWwsICdlbCcsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWxDb250YWluZXIsICdlbC1jb250YWluZXInLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVycm9yc0NvbnRhaW5lciwgJ2Vycm9ycy1jb250YWluZXInLCBjb250cm9sTmFtZSk7XG4gIFxuICBfLmV4dGVuZChlbGVtZW50cywgeyRlbCwgJGVsQ29udGFpbmVyLCAkZXJyb3JzQ29udGFpbmVyfSk7XG4gIGNvbnRhaW5lckFkZGVyKCRlbCwgJGVycm9yc0NvbnRhaW5lciwgJGVsQ29udGFpbmVyLCBlcnJvcnNDb250YWluZXIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsImV4cG9ydCBkZWZhdWx0IChlcnJvck1lc3NhZ2UsIHByZWZpeCkgPT4ge1xuICBsZXQgZ2VuZXJhbENsYXNzID0gcHJlZml4ICsgJy1lcnJvci13b3JkJztcbiAgXG4gIHJldHVybiBlcnJvck1lc3NhZ2Uuc3BsaXQoL1xccysvKS5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgbGV0IHNwZWNpZmljQ2xhc3MgPSBnZW5lcmFsQ2xhc3MgKyAnLScgKyBpbmRleDtcbiAgICByZXR1cm4gYDxzcGFuIGNsYXNzID0gXCIke2dlbmVyYWxDbGFzc30gJHtzcGVjaWZpY0NsYXNzfVwiPiR7d29yZH08L3NwYW4+YDtcbiAgfSkuam9pbignICcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL19saWIvc3Bhbm5pZmllci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc0lkQXNzaWduZXIgZnJvbSAnLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgc3Bhbm5pZmllciAgICAgIGZyb20gJy4vX2xpYi9zcGFubmlmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkYXRvck5hbWUsIHZhbGlkYXRvck5hbWVQcmVmaXhlZCwgYXN5bmM6IF9hc3luY30gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHttZXNzYWdlcn0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHtlbGVtZW50cywgZXJyb3JzfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gIGxldCBiYXNlRXJyb3JDb25maWdzID0geyRlbDogJCgpLCBfYXN5bmMsIHZhbGlkYXRvck5hbWUsIGNvbnRyb2x9O1xuICBcbiAgaWYoIW1lc3NhZ2VyKSB7XG4gICAgcmV0dXJuIGVycm9yc1t2YWxpZGF0b3JOYW1lXSA9IGJhc2VFcnJvckNvbmZpZ3M7XG4gIH1cbiAgXG4gIGxldCBlcnJvckNvbmZpZ3MgPSBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gfHwgYmFzZUVycm9yQ29uZmlncztcbiAgbGV0IHskZWx9ID0gZXJyb3JDb25maWdzO1xuICBsZXQge3ZhbGlkYXRvcjogdmFsaWRhdG9yQ29uZmlncywgbWVzc2FnZXI6IG1lc3NhZ2VyQ29uZmlncywgYmFzZUNvbmZpZ3N9ID0gY29uZmlncztcbiAgbGV0IHtlcnJvck1lc3NhZ2VDbGFzc2VzLCBwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCB7JGVycm9yc0NvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgbGV0IGVycm9yTWVzc2FnZXIgPSBfLmlzRnVuY3Rpb24obWVzc2FnZXIpID8gbWVzc2FnZXIgOiAoKSA9PiBtZXNzYWdlcjtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZXIoY29udHJvbCwgdmFsaWRhdG9yQ29uZmlncywgbWVzc2FnZXJDb25maWdzLCBiYXNlQ29uZmlncyk7XG4gIGVycm9yTWVzc2FnZSA9IHNwYW5uaWZpZXIoZXJyb3JNZXNzYWdlLCBwcmVmaXgpO1xuICBcbiAgaWYoISRlbC5sZW5ndGgpIHtcbiAgICBsZXQgc3luY0FzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LWAgKyAoX2FzeW5jID8gJ2FzeW5jJyA6ICdzeW5jJyk7XG4gICAgJGVsID0gJCgnPGRpdi8+Jyk7XG4gICAgJGVsLmFkZENsYXNzKHN5bmNBc3luY0NsYXNzKTtcbiAgICAkZXJyb3JzQ29udGFpbmVyLmFwcGVuZCgkZWwpO1xuICAgIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsLCAnZXJyb3InLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBlcnJvckNvbmZpZ3MgPSBfLmV4dGVuZChlcnJvckNvbmZpZ3MsIHskZWx9KTtcbiAgICBcbiAgICBpZihlcnJvck1lc3NhZ2VDbGFzc2VzICYmIGVycm9yTWVzc2FnZUNsYXNzZXMuaW5pdGlhbCkge1xuICAgICAgJGVsLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMuaW5pdGlhbCk7XG4gICAgfVxuICAgIFxuICAgIGlmKF9hc3luYykge1xuICAgICAgZXJyb3JDb25maWdzLnJlcXVlc3RzID0ge307XG4gICAgfVxuICAgIFxuICAgIGVycm9yc1t2YWxpZGF0b3JOYW1lXSA9IGVycm9yQ29uZmlncztcbiAgfVxuXG4gICRlbC5odG1sKGVycm9yTWVzc2FnZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7cHJlcHJvY2Vzc29yfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBcbiAgaWYoIV8uaXNQbGFpbk9iamVjdChjb25maWdzKSkge1xuICAgIGNvbmZpZ3MgPSB7dmFsaWRhdG9yOiBjb25maWdzfTtcbiAgfVxuICBcbiAgaWYocHJlcHJvY2Vzc29yKSB7XG4gICAgbGV0IHt2YWxpZGF0b3JDb25maWdzfSA9IHNldHRpbmdzO1xuICAgIFxuICAgIGlmKHZhbGlkYXRvckNvbmZpZ3MpIHtcbiAgICAgIGxldCB7dmFsaWRhdG9yTmFtZX0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgICAgIHZhciBiYXNlQ29uZmlncyA9IHZhbGlkYXRvckNvbmZpZ3NbdmFsaWRhdG9yTmFtZV07XG4gICAgICBfLmV4dGVuZChjb25maWdzLCB7YmFzZUNvbmZpZ3N9KTtcbiAgICB9XG5cbiAgICBjb25maWdzLnZhbGlkYXRvciA9IHByZXByb2Nlc3Nvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvciwgYmFzZUNvbmZpZ3MpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ3M7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIgZnJvbSAnLi4vX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyJztcbmltcG9ydCBpbml0aWFsRGF0YVNldHRlciAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL2luaXRpYWwtZGF0YS1zZXR0ZXIvaW5pdGlhbC1kYXRhLXNldHRlcic7XG5pbXBvcnQgcmVxdWVzdHNOdWxsaWZpZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9yZXF1ZXN0cy1udWxsaWZpZXIvcmVxdWVzdHMtbnVsbGlmaWVyJztcbmltcG9ydCBpbml0aWFsVmlzdWFsaXplciAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXInO1xuaW1wb3J0IGZpbmFsRGF0YVNldHRlciAgICAgICAgICAgIGZyb20gJy4vZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyJztcbmltcG9ydCBmaW5hbFZpc3VhbGl6ZXIgICAgICAgICAgICBmcm9tICcuL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGlmKGNvbnRyb2wudmFsaWRWYWx1ZSA9PT0gY29udHJvbC52YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSAgIFxuICBcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQsIHZhbGlkYXRvcn0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLCBlcnJvcnMsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIGxldCBlcnJvckNvbmZpZ3MgPSBlcnJvcnNbdmFsaWRhdG9yTmFtZV07XG4gIGxldCB2YWxpZGF0aW9uSWQgPSBfLnVuaXF1ZUlkKCk7XG5cbiAgaWYoY29udHJvbC5pbnZhbGlkVmFsdWUgPT09IGNvbnRyb2wudmFsdWUpIHtcbiAgICBsZXQgZXJyb3IgPSB7W3ZhbGlkYXRvck5hbWVQcmVmaXhlZF06IHRydWV9O1xuICAgIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIGVycm9yKS52aXN1YWxpemUoKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVycm9yKTtcbiAgfVxuICBcbiAgaW5pdGlhbERhdGFTZXR0ZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSk7XG4gIHJlcXVlc3RzTnVsbGlmaWVyKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25JZCk7XG4gIGluaXRpYWxWaXN1YWxpemVyKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpO1xuICBcbiAgY2xlYXJUaW1lb3V0KGVycm9yQ29uZmlncy5zdWNjZXNzVGltZW91dCk7XG4gIGNsZWFyVGltZW91dChlcnJvckNvbmZpZ3MuYXN5bmNEZWJvdW5jZVRpbWVvdXQpO1xuICBcbiAgZXJyb3JDb25maWdzLmFzeW5jRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYodmFsaWRpZnkuc3luYykge1xuICAgICAgcmV0dXJuIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcodHJ1ZSk7XG4gICAgXG4gICAgdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKS50aGVuKGFzeW5jICh2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgICAgXG4gICAgICBpZihlcnJvckNvbmZpZ3MucmVxdWVzdHNbdmFsaWRhdGlvbklkXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhbGlkYXRpb25TdGF0dXMgPSB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplcihzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cyk7XG4gICAgICBmaW5hbERhdGFTZXR0ZXIoY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24sIHZhbGlkYXRpb25TdGF0dXMpO1xuICAgICAgZmluYWxWaXN1YWxpemVyKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MsIGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpOyAgICAgIFxuICAgIH0pO1xuICB9LCBzZXR0aW5ncy5hc3luY0RlYm91bmNlVGltZSk7XG4gIFxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGxldCB7ZXJyb3JzLCB2YWx1ZSwgdmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1N0YXR1c2VzLCBlcnJvcnM6IF9lcnJvcnN9ID0gdmFsaWRpZnk7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBcbiAgX2Vycm9yc1t2YWxpZGF0b3JOYW1lXS5yZXF1ZXN0cyA9IHt9O1xuICB2YWxpZGlmeS5zeW5jID0gZmFsc2U7XG4gIGFzeW5jU3RhdHVzZXNbdmFsaWRhdG9yTmFtZV0gPSBmYWxzZTtcbiAgXG4gIGlmKCF2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgZXJyb3JzID0gXy5vbWl0KGVycm9ycywgW3ZhbGlkYXRvck5hbWVQcmVmaXhlZF0pO1xuICB9XG4gIFxuICBfLmV4dGVuZChlcnJvcnMsIHZhbGlkYXRpb25TdGF0dXMpO1xuICBcbiAgaWYoXy5pc0VtcHR5KGVycm9ycykpIHtcbiAgICBjb250cm9sLnZhbGlkVmFsdWUgPSB2YWx1ZTtcbiAgICBlcnJvcnMgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBjb250cm9sLmludmFsaWRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIFxuICBjb250cm9sLnNldEVycm9ycyhlcnJvcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmNTdGF0dXNlcyA9PiB7XG4gIHJldHVybiBfLnJlZHVjZShhc3luY1N0YXR1c2VzLCAoY291bnQsIHN0YXR1cykgPT4ge1xuICAgIHJldHVybiBjb3VudCArPSArc3RhdHVzO1xuICB9LCAwKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlci50cyIsImltcG9ydCBhY3RpdmVBc3luY3NDb3VudGVyIGZyb20gJy4vX2xpYi9hY3RpdmUtYXN5bmNzLWNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGVycm9yQ29uZmlncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNTdGF0dXNlcywgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighYWN0aXZlQXN5bmNzQ291bnRlcihhc3luY1N0YXR1c2VzKSkge1xuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcoZmFsc2UpO1xuICAgIFxuICAgIGlmKCF2YWxpZGF0aW9uU3RhdHVzICYmIGNvbnRyb2wudmFsaWQpIHtcbiAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBlcnJvckNvbmZpZ3Muc3VjY2Vzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuc3VjY2VzcyhmYWxzZSk7XG4gICAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgICB9LCBzZXR0aW5ncy5hc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSkgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG5cbiAgY29udHJvbC52YWxpZFZhbHVlID0gY29udHJvbC5pbnZhbGlkVmFsdWUgPSBudWxsO1xuICB2YWxpZGlmeS5hc3luY1N0YXR1c2VzW3ZhbGlkYXRvck5hbWVdID0gdHJ1ZTtcbiAgdmFsaWRpZnkuc3luYyA9IGZhbHNlOyAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpID0+IHtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgdmFsaWRhdGlvblN0YXRlcn0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5jb250YWluZXIodHJ1ZSk7XG4gIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3MoZmFsc2UpO1xuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBudWxsKS52aXN1YWxpemUoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvbklkKSA9PiB7XG4gIGxldCB7cmVxdWVzdHN9ID0gY29udHJvbC52YWxpZGlmeS5lcnJvcnNbdmFsaWRhdG9yTmFtZV07XG5cbiAgXy5lYWNoKHJlcXVlc3RzLCAocmVxdWVzdCwga2V5KSA9PiB7XG4gICAgcmVxdWVzdHNba2V5XSA9IHRydWU7XG4gIH0pO1xuICBcbiAgcmVxdWVzdHNbdmFsaWRhdGlvbklkXSA9IGZhbHNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXIudHMiLCJpbXBvcnQgdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIgZnJvbSAnLi4vX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7dmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3IsIHZhbGlkYXRvck5hbWV9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB2YWxpZGF0aW9uU3RhdHVzID0gdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKTtcbiAgXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICB2YWxpZGlmeS5zeW5jID0gdHJ1ZTtcbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xuICByZXR1cm4gdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3IudHMiLCJpbXBvcnQgc3luY1ZhbGlkYXRvciAgZnJvbSAnLi9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvcic7XG5pbXBvcnQgYXN5bmNWYWxpZGF0b3IgZnJvbSAnLi9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmKHZhbGlkYXRvckRlY2xhcmF0aW9uLmFzeW5jKSB7XG4gICAgICByZXR1cm4gYXN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN5bmNWYWxpZGF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRhdGFJbml0aWFsaXplciAgICAgZnJvbSAnLi9kYXRhLWluaXRpYWxpemVyL2RhdGEtaW5pdGlhbGl6ZXInO1xuaW1wb3J0IGRlcGVuZGVudHNSZWdpc3RyYXIgZnJvbSAnLi9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgICAgICBmcm9tICcuL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3InO1xuaW1wb3J0IGVsZW1lbnRzSW5pdGlhbGl6ZXIgZnJvbSAnLi9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplcic7XG5pbXBvcnQgZXJyb3JHZW5lcmF0b3IgICAgICBmcm9tICcuL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3InO1xuaW1wb3J0IHZhbGlkYXRvckJ1aWxkZXIgICAgZnJvbSAnLi92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IGRhdGFOYW1lcyA9IFsnYXN5bmMnLCAnY2hlY2tib3gnLCAndmFsaWRhdG9yTmFtZScsICdkaXJlY3RpdmVOYW1lUHJlZml4ZWQnXTtcbiAgZGF0YU5hbWVzLnB1c2goJ3ZhbGlkYXRvck5hbWVQcmVmaXhlZCcsICdtZXNzYWdlcicpO1xuICBsZXQgc3VwcGxlbWVudGFsRGF0YSA9IF8ucGljayh2YWxpZGF0b3JEZWNsYXJhdGlvbiwgZGF0YU5hbWVzKTtcbiAgbGV0IGNvbmZpZ3VyYXRvciA9IChjb250cm9sLCBjb25maWdzLCBlbCkgPT4ge1xuICAgIGRhdGFJbml0aWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgZWwpO1xuICAgIGRlcGVuZGVudHNSZWdpc3RyYXIoY29udHJvbCk7XG4gICAgY29uZmlncyA9IHByZXByb2Nlc3NvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIGVsZW1lbnRzSW5pdGlhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICBlcnJvckdlbmVyYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIHJldHVybiB2YWxpZGF0b3JCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIF8uZXh0ZW5kKGNvbmZpZ3VyYXRvciwgc3VwcGxlbWVudGFsRGF0YSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzcxX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJmb3Jtc1wiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiYW1kXCI6XCJAYW5ndWxhci9mb3Jtc1wifVxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5nVmFsaWRpZmllciBmcm9tICcuL3ZhbGlkaWZpZXIvdmFsaWRpZmllcic7XG5cbmV4cG9ydCB7bmdWYWxpZGlmaWVyfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==