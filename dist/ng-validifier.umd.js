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
                asyncProgressVisualizer.success(false).container(false);
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
    asyncProgressVisualizer.container(true).success(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmMzBlZTIzZmY5ZmZkMTFjNWM2YyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvX2xpYi9wcmVmaXhlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBDbGllbnRQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCIsXCJhbWRcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL3Zpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9kZXBzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvX2xpYi9zdHItYXJyYXlpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImZvcm1zXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2Zvcm1zXCJ9Iiwid2VicGFjazovLy8uL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7O0FDQUE7QUFBQSxJQUFNLGtCQUFrQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFFekMsSUFBTSxRQUFRLEdBQUc7SUFDZixNQUFNLEVBQUUsR0FBRztJQUVYLFNBQVMsRUFBRTtRQUNULGdCQUFnQixFQUFFLGFBQWE7UUFDL0IsZUFBZSxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxvQkFBb0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7S0FDaEQ7SUFFRCxtQkFBbUIsRUFBRTtRQUNuQixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUVELGtCQUFrQixFQUFFO1FBQ2xCLEtBQUssRUFBRSxHQUFHO1FBQ1YsT0FBTyxFQUFFLEdBQUc7S0FDYjtJQUVELGlCQUFpQixF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QUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRCxDQUFDLEVBQUM7Ozs7Ozs7QUN0QkYsZ0Q7Ozs7Ozs7Ozs7QUNBbUQ7QUFFN0IiLCJmaWxlIjoibmctdmFsaWRpZmllci51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCJuZy1odHRwLWNsaWVudC1wbHVzXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiLCBcImpxdWVyeVwiLCBcIm5nLWh0dHAtY2xpZW50LXBsdXNcIiwgXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmctdmFsaWRpZmllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIm5nLWh0dHAtY2xpZW50LXBsdXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nLXZhbGlkaWZpZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdLCByb290W1wiJFwiXSwgcm9vdFtcIm5nSHR0cENsaWVudFBsdXNcIl0sIHJvb3RbXCJuZ1wiXVtcImNvcmVcIl0sIHJvb3RbXCJuZ1wiXVtcImZvcm1zXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNzFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGYzMGVlMjNmZjlmZmQxMWM1YzZjIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZGVwZW5kZW5jeVJlcXVlc3RzID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIHByZWZpeDogJ3YnLFxuXG4gIHNlbGVjdG9yczoge1xuICAgIGVsZW1lbnRDb250YWluZXI6ICcuZm9ybS1ncm91cCcsXG4gICAgZXJyb3JzQ29udGFpbmVyOiBbJ2luc2VydEFmdGVyJywgJ2lucHV0J10sXG4gICAgYXN5bmNTdGF0dXNDb250YWluZXI6IFsnaW5zZXJ0QmVmb3JlJywgJ2lucHV0J11cbiAgfSxcbiAgXG4gIGVycm9yTWVzc2FnZUNsYXNzZXM6IHtcbiAgICBpbml0aWFsOiAnJyxcbiAgICB2YWxpZDogJycsXG4gICAgaW52YWxpZDogJydcbiAgfSxcblxuICBlcnJvck1lc3NhZ2VEZWxheXM6IHtcbiAgICB2YWxpZDogMzAwLFxuICAgIGludmFsaWQ6IDUwMFxuICB9LFxuXG4gIGFzeW5jRGVib3VuY2VUaW1lOiA1MDAsXG5cbiAgYXN5bmNTdGF0dXNIaWRlQ2xhc3M6ICdoaWRkZW4nLFxuICBcbiAgYXN5bmNTdWNjZXNzTWVzc2FnZUR1cmF0aW9uOiAxMDAwXG59O1xuXG5leHBvcnQge1xuICBkZXBlbmRlbmN5UmVxdWVzdHMsIFxuICBzZXR0aW5nc1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsICRlbCwgYmFzZUNsYXNzLCBjb250cm9sTmFtZSkgPT4ge1xuICBsZXQge3ByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IGNsYXNzZXMgPSBbYmFzZUNsYXNzLCBgJHtiYXNlQ2xhc3N9LSR7Y29udHJvbE5hbWV9YF07XG4gIGxldCBjbGFzc2VzU3RyID0gY2xhc3Nlcy5tYXAoa2xhc3MgPT4gYCR7cHJlZml4fS0ke2tsYXNzfWApLmpvaW4oJyAnKTtcbiAgJGVsLmFkZENsYXNzKGNsYXNzZXNTdHIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvX2xpYi9jbGFzcy1pZC1hc3NpZ25lci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIG5ld0RlcGVuZGVudHMpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2RlcGVuZGVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0FycmF5KG5ld0RlcGVuZGVudHMpKSB7XG4gICAgbmV3RGVwZW5kZW50cyA9IFtuZXdEZXBlbmRlbnRzXTtcbiAgfVxuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBfLnNldCh2YWxpZGlmeSwgJ2RlcGVuZGVudHMnLCBkZXBlbmRlbnRzID0gW10pO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goLi4ubmV3RGVwZW5kZW50cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdkZXBzJztcbmNvbnN0IGRlcGVuZGVuY2llc1RhYmxlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtcbiAgdmFsaWRhdG9yTmFtZSxcbiAgZGVwZW5kZW5jaWVzVGFibGVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL19saWIvdmFycy50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAndW5pcXVlQ2hlY2snO1xuXG5leHBvcnQge1xuICB2YWxpZGF0b3JOYW1lICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svX2xpYi92YXJzLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIG5hbWUpID0+IHtcbiAgbGV0IHtwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIFxuICBpZihwcmVmaXggJiYgbmFtZSkge1xuICAgIG5hbWUgPSBwcmVmaXggKyBfLnVwcGVyRmlyc3QobmFtZSk7XG4gIH1cbiAgXG4gIHJldHVybiBuYW1lO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL19saWIvcHJlZml4ZXIudHMiLCJpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkZWwsICRjb250YWluZXIsICRjb250YWluZXJDb250YWluZXIsIGluc2VydGlvblNwZWMpID0+IHtcbiAgbGV0IFthY3Rpb24sICRpbnNlcnRpb25Qb2ludF0gPSAoKCkgPT4ge1xuICAgIGlmKCEkY29udGFpbmVyQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFsnaW5zZXJ0QWZ0ZXInLCAkZWxdO1xuICAgIH1cbiAgICBcbiAgICBsZXQgW2FjdGlvbiwgYW5jaG9yXSA9IGluc2VydGlvblNwZWM7XG4gICAgbGV0ICRpbnNlcnRpb25Qb2ludCA9ICgoKSA9PiB7XG4gICAgICBpZighYW5jaG9yKSB7XG4gICAgICAgIHJldHVybiAkY29udGFpbmVyQ29udGFpbmVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gJChhbmNob3IsICRjb250YWluZXJDb250YWluZXIpO1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gW2FjdGlvbiwgJGluc2VydGlvblBvaW50XTtcbiAgfSkoKTtcbiAgXG4gICRjb250YWluZXJbYWN0aW9uXSgkaW5zZXJ0aW9uUG9pbnQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvX2xpYi9jb250YWluZXItYWRkZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuLi8uLi8uLi9fbGliL3ByZWZpeGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGlmKF8uaXNQbGFpbk9iamVjdCh2YWxpZGF0aW9uU3RhdHVzKSkge1xuICAgIGxldCBrZXkgPSBfLmtleXModmFsaWRhdGlvblN0YXR1cylbMF07XG4gICAgbGV0IHZhbHVlID0gdmFsaWRhdGlvblN0YXR1c1trZXldO1xuICAgIGtleSA9IHByZWZpeGVyKHNldHRpbmdzLCBrZXkpO1xuICAgIHZhbGlkYXRpb25TdGF0dXMgPSB7W2tleV06IHZhbHVlfTtcbiAgfVxuICBcbiAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJuZ0h0dHBDbGllbnRQbHVzXCIsXCJjb21tb25qc1wiOlwibmctaHR0cC1jbGllbnQtcGx1c1wiLFwiY29tbW9uanMyXCI6XCJuZy1odHRwLWNsaWVudC1wbHVzXCIsXCJhbWRcIjpcIm5nLWh0dHAtY2xpZW50LXBsdXNcIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge3NldHRpbmdzIGFzIG1haW5TZXR0aW5nc30gZnJvbSAnLi4vX2xpYi92YXJzJztcbmltcG9ydCBpbnRlcm5hbFZhbGlkYXRvcnMgICAgICAgICBmcm9tICcuLi92YWxpZGF0b3JzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IG1vZHVsZUdlbmVyYXRvciAgICAgICAgICAgIGZyb20gJy4vbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzID0gW10pID0+IHtcbiAgc2V0dGluZ3MgPSBfLmV4dGVuZCh7fSwgbWFpblNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIHZhbGlkYXRvcnMucHVzaCguLi5pbnRlcm5hbFZhbGlkYXRvcnMpO1xuICByZXR1cm4gbW9kdWxlR2VuZXJhdG9yKHNldHRpbmdzLCB2YWxpZGF0b3JzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHByaXZhdGUgaGlkZGVuQ2xhc3M7XG4gIHByaXZhdGUgYXN5bmNzO1xuICBwcml2YXRlICRlbDtcbiAgcHJpdmF0ZSAkZWxDb250YWluZXI7XG4gIHByaXZhdGUgcGVuZGluZ0NsYXNzO1xuICBcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGNvbnRyb2wpIHtcbiAgICBsZXQge2FzeW5jcywgZWxlbWVudHN9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICAgIGxldCBwZW5kaW5nQ2xhc3MgPSBgJHtzZXR0aW5ncy5wcmVmaXh9LWFzeW5jLXBlbmRpbmdgO1xuICAgIFxuICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICRlbCwgJGVsQ29udGFpbmVyLCBhc3luY3MsIHBlbmRpbmdDbGFzcyxcbiAgICAgIGhpZGRlbkNsYXNzOiBzZXR0aW5ncy5hc3luY1N0YXR1c0hpZGVDbGFzc1xuICAgIH0pO1xuICB9XG4gIFxuICBwcml2YXRlIGRpc3BsYXkodHlwZSwgb24pIHtcbiAgICBsZXQgbWV0aG9kID0gb24gPyAncmVtb3ZlQ2xhc3MnOiAnYWRkQ2xhc3MnO1xuICAgIHRoaXMuYXN5bmNzWyckJyArIHR5cGVdW21ldGhvZF0odGhpcy5oaWRkZW5DbGFzcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgXG4gIHByaXZhdGUgY2xhc3NPcGVyYXRvcihvcGVyYXRpb24pIHtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCBwZW5kaW5nQ2xhc3N9ID0gdGhpcztcbiAgICAkZWxbb3BlcmF0aW9uXShwZW5kaW5nQ2xhc3MpO1xuICAgICRlbENvbnRhaW5lcltvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gIH1cbiAgXG4gIGNvbnRhaW5lcihvbikge1xuICAgIGlmKG9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ2FkZENsYXNzJyk7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wZW5kaW5nKG9uKS5zdWNjZXNzKG9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheSgnYXN5bmNzQ29udGFpbmVyJywgb24pO1xuICB9XG4gIFxuICBwZW5kaW5nKG9uKSB7XG4gICAgaWYoIW9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ3JlbW92ZUNsYXNzJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLmRpc3BsYXkoJ3BlbmRpbmcnLCBvbik7XG4gIH1cbiAgXG4gIHN1Y2Nlc3Mob24pIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5KCdzdWNjZXNzJywgb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNldHRpbmdzLCBjb250cm9sKSB7XG4gIF8uZXh0ZW5kKHRoaXMsIHtzZXR0aW5ncywgY29udHJvbCwgc3RhdGU6IHt9fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXBlbmRlbnRzQWdncmVnYXRvcihjb250cm9sLCBhbGwgPSBbXSkge1xuICBsZXQge2RlcGVuZGVudHMgPSBbXX0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cykge1xuICAgIGlmKGFsbC5pbmRleE9mKGRlcGVuZGVudCkgPT09IC0xKSB7XG4gICAgICBhbGwucHVzaChkZXBlbmRlbnQpO1xuICAgICAgZGVwZW5kZW50c0FnZ3JlZ2F0b3IoZGVwZW5kZW50LCBhbGwpO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGFsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlcGVuZGVudHNBZ2dyZWdhdG9yIGZyb20gJy4vX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHtzaWxlbnQsIGRlcGVuZGVudHMsIGNvbnRyb2x9ID0gdGhpcztcbiAgXG4gIGlmKCFzaWxlbnQpIHtcbiAgICBpZighY29udHJvbC52YWxpZGlmeS5pZ25vcmVEZXBlbmRlbnRzKSB7XG4gICAgICBkZXBlbmRlbnRzID0gZGVwZW5kZW50c0FnZ3JlZ2F0b3IoY29udHJvbCk7XG4gICAgICBmb3IobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIF8uZXh0ZW5kKGRlcGVuZGVudC52YWxpZGlmeSwge3NpbGVudDogdHJ1ZSwgaWdub3JlRGVwZW5kZW50czogdHJ1ZX0pO1xuICAgICAgICAgIGRlcGVuZGVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBfLmV4dGVuZCh0aGlzLCB7ZGVwZW5kZW50c30pO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKSB7XG4gIGxldCB7c2lsZW50LCBlcnJvcnN9ID0gdGhpcy5jb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBcbiAgXy5leHRlbmQodGhpcywge3NpbGVudCwgZGVwZW5kZW50czogdW5kZWZpbmVkfSk7XG4gIGVycm9yQ29uZmlncy5zdGF0dXMgPSB2YWxpZGF0aW9uU3RhdHVzO1xuICBcbiAgaWYoIXNpbGVudCkge1xuICAgIF8uZXh0ZW5kKHRoaXMsIHtlcnJvckNvbmZpZ3N9KTtcbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgX2NvbnN0cnVjdG9yICAgICAgZnJvbSAnLi9fY29uc3RydWN0b3IvY29uc3RydWN0b3InO1xuaW1wb3J0IHN0YXRlU2V0dGVyICAgICAgIGZyb20gJy4vc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW50c1VwZGF0ZXIgZnJvbSAnLi9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyJztcbmltcG9ydCB2aXN1YWxpemVyICAgICAgICBmcm9tICcuL3Zpc3VhbGl6ZXIvdmlzdWFsaXplcic7XG5cbl8uZXh0ZW5kKF9jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgc2V0OiBzdGF0ZVNldHRlcixcbiAgdXBkYXRlRGVwZW5kZW50czogZGVwZW5kZW50c1VwZGF0ZXIsXG4gIHZpc3VhbGl6ZTogdmlzdWFsaXplclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IF9jb25zdHJ1Y3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHtlcnJvck1lc3NhZ2VEZWxheXM6IGRlbGF5c30gPSBzZXR0aW5ncztcbiAgbGV0IHtfYXN5bmMsIHN0YXR1cywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZGlydHl9ID0gY29udHJvbDtcbiAgcmV0dXJuIF9hc3luYyB8fCAhZGlydHkgPyAwIDogc3RhdHVzID8gZGVsYXlzLmludmFsaWQgOiBkZWxheXMudmFsaWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9fbGliL2RlbGF5LWNhbGN1bGF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgJGVsKSA9PiB7XG4gIGxldCBjbGFzc2VzID0gJGVsLmF0dHIoJ2NsYXNzJyk7XG4gIFxuICBpZihjbGFzc2VzKSB7XG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIHJldHVybiBfLnJlZHVjZShjbGFzc2VzLCAoY291bnQsIGtsYXNzKSA9PiB7XG4gICAgaWYoa2xhc3Muc3RhcnRzV2l0aChgJHtzZXR0aW5ncy5wcmVmaXh9LWVycm9yYCkpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjb3VudDtcbiAgfSwgMCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9fbGliL2Vycm9ycy1jb3VudGVyLnRzIiwiaW1wb3J0IGVycm9yc0NvdW50ZXIgZnJvbSAnLi9fbGliL2Vycm9ycy1jb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCBzdGF0dXM6IHZhbGlkYXRpb25TdGF0dXN9ID0gZXJyb3JDb25maWdzO1xuICBsZXQgeyRlbDogJGVycm9yRWwsIF9hc3luYywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQge2RpcnR5LCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCAkZXJyb3JzQ29udGFpbmVyfSA9IHZhbGlkaWZ5LmVsZW1lbnRzO1xuICBsZXQgZXJyb3JDbGFzcyA9IGAke3ByZWZpeH0tZXJyb3ItJHt2YWxpZGF0b3JOYW1lfWA7XG4gIGxldCBzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LXN5bmNgO1xuICBsZXQgYXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYXN5bmNgO1xuICBcbiAgaWYoZGlydHkpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLXByaXN0aW5lJykuYWRkQ2xhc3MoJ25nLWRpcnR5Jyk7XG4gIH0gZWxzZSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKCduZy1wcmlzdGluZScpO1xuICB9XG5cbiAgaWYoX2FzeW5jKSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKHN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhzeW5jQ2xhc3MpO1xuICB9IGVsc2Uge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcyhzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKGFzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYWRkQ2xhc3Moc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhhc3luY0NsYXNzKTtcbiAgfVxuXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICAkZWwuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy12YWxpZCcpLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLXZhbGlkJykucmVtb3ZlQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy52YWxpZCk7XG4gICAgcmV0dXJuICRlcnJvckVsLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbnZhbGlkKTtcbiAgfVxuICBcbiAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmludmFsaWQpO1xuICAkZXJyb3JFbC5hZGRDbGFzcygnbmctdmFsaWQnKS5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLnZhbGlkKTtcbiAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xuICAkZWwucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG5cbiAgaWYoIWVycm9yc0NvdW50ZXIoc2V0dGluZ3MsICRlbENvbnRhaW5lcikpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcygnbmctdmFsaWQnKTtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoX2FzeW5jID8gYXN5bmNDbGFzcyA6IHN5bmNDbGFzcyk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZWxheUNhbGN1bGF0b3IgIGZyb20gJy4vX2xpYi9kZWxheS1jYWxjdWxhdG9yJztcbmltcG9ydCBlcnJvcnNWaXN1YWxpemVyIGZyb20gJy4vZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgaWYoIXRoaXMuc2lsZW50KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQge2NvbnRyb2wsIGRlcGVuZGVudHMgPSBbXSwgZXJyb3JDb25maWdzfSA9IHRoaXM7XG4gICAgICBsZXQgZGVsYXkgPSBkZWxheUNhbGN1bGF0b3IodGhpcy5zZXR0aW5ncywgZXJyb3JDb25maWdzKTtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCk7XG4gICAgICBcbiAgICAgIGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZXBlbmRlbnRzLnVuc2hpZnQoY29udHJvbCk7XG4gICAgICAgIF8uZWFjaChkZXBlbmRlbnRzLCBjb250cm9sID0+IHtcbiAgICAgICAgICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gICAgICAgICAgXG4gICAgICAgICAgXy5leHRlbmQodmFsaWRpZnksIHtzaWxlbnQ6IGZhbHNlLCBpZ25vcmVEZXBlbmRlbnRzOiBmYWxzZX0pO1xuICAgICAgICAgIF8uZWFjaCh2YWxpZGlmeS5lcnJvcnMsIF8ucGFydGlhbChlcnJvcnNWaXN1YWxpemVyLCB0aGlzLnNldHRpbmdzLCBfKSk7XG4gICAgICAgIH0pXG4gICAgICB9LCBkZWxheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvdmlzdWFsaXplci50cyIsImltcG9ydCB2YWxpZGF0b3IgICAgICAgZnJvbSAnLi92YWxpZGF0b3IvdmFsaWRhdG9yJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgZnJvbSAnLi9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yJztcbmltcG9ydCBtZXNzYWdlciAgICAgICAgZnJvbSAnLi9tZXNzYWdlci9tZXNzYWdlcic7XG5pbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IsXG4gIHByZXByb2Nlc3NvcixcbiAgbWVzc2FnZXIsXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL2RlcHMudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlcGVuZGVuY3lOYW1lcyA9PiB7XG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXMubWFwKGRlcGVuZGVuY3lOYW1lID0+IHtcbiAgICByZXR1cm4gXy51cHBlckZpcnN0KF8ubG93ZXJDYXNlKGRlcGVuZGVuY3lOYW1lKSk7XG4gIH0pLmpvaW4oJywgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXIudHMiLCJpbXBvcnQgZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIgZnJvbSAnLi9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWVQcm9wZXJ9ID0gY29udHJvbDtcbiAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIoZGVwZW5kZW5jeU5hbWVzKTtcbiAgcmV0dXJuIGAke2NvbnRyb2xOYW1lUHJvcGVyfSBkZXBlbmRzIG9uICR7ZGVwZW5kZW5jeU5hbWVzfWA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9tZXNzYWdlci50cyIsImNvbnN0IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtkZXBlbmRlbmN5RGVwZW5kZW50c01hcH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc3RyLCBjaGFyKSA9PiB7XG4gIGxldCByeCA9IG5ldyBSZWdFeHAoYFxcXFxzKiR7Y2hhcn1cXFxccypgKTtcbiAgcmV0dXJuIHN0ci5zcGxpdChyeCkubWFwKHBpZWNlID0+IHBpZWNlLnRyaW0oKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9fbGliL3N0ci1hcnJheWlmaWVyLnRzIiwiaW1wb3J0IHN0ckFycmF5aWZpZXIgZnJvbSAnLi9fbGliL3N0ci1hcnJheWlmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCkgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IHN0ckFycmF5aWZpZXIoZGVwZW5kZW5jeU5hbWVzLCAnLCcpO1xuICBpZihkZXBlbmRlbmN5TmFtZXMuaW5kZXhPZihjb250cm9sTmFtZSkgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtjb250cm9sTmFtZX1dIGNhbm5vdCBkZXBlbmQgb24gaXRzZWxmYCk7XG4gIH1cbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lSZXF1ZXN0c30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCB7X3BhcmVudH0gPSBjb250cm9sO1xuICBsZXQgZm9ybURlcGVuZGVuY3lSZXF1ZXN0cyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gICAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeVJlcXVlc3RzKSB7XG4gICAgZGVwZW5kZW5jeVJlcXVlc3RzLnNldChfcGFyZW50LCBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzID0ge30pO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHNbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lSZXF1ZXN0c1tkZXBlbmRlbmN5TmFtZV0gPSBbXTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKGNvbnRyb2wpOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci50cyIsImltcG9ydCBkZXBlbmRlbnRzU2V0dGVyICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW5jeVJlcXVlc3RSZWdpc3RyYXIgZnJvbSAnLi9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IGRlcGVuZGVuY3lDb250cm9sID0gY29udHJvbC5fcGFyZW50LmNvbnRyb2xzW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKGRlcGVuZGVuY3lDb250cm9sKSB7XG4gICAgcmV0dXJuIGRlcGVuZGVudHNTZXR0ZXIoZGVwZW5kZW5jeUNvbnRyb2wsIGNvbnRyb2wpO1xuICB9XG4gIFxuICBkZXBlbmRlbmN5UmVxdWVzdFJlZ2lzdHJhcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwiaW1wb3J0IGZvcm1EZXBlbmRlbmN5TWFwR2V0dGVyICAgZnJvbSAnLi9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQge19wYXJlbnQsIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBmb3JtRGVwZW5kZW5jeU1hcEdldHRlcihfcGFyZW50KTtcbiAgbGV0IGNvbnRyb2xEZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2NvbnRyb2xOYW1lXTtcbiAgXG4gIGlmKChjb250cm9sRGVwZW5kZW50cyB8fCBbXSkuaW5kZXhPZihkZXBlbmRlbmN5TmFtZSkgPiAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgWyR7Y29udHJvbE5hbWV9XSBhbmQgWyR7ZGVwZW5kZW5jeU5hbWV9XSBkZXBlbmQgb24gZWFjaCBvdGhlcmApO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZighZGVwZW5kZW50cykge1xuICAgIGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbZGVwZW5kZW5jeU5hbWVdID0gW107XG4gIH1cbiAgXG4gIGRlcGVuZGVudHMucHVzaChjb250cm9sTmFtZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lEZXBlbmRlbnRzTWFwfSBmcm9tICcuLi8uLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBfcGFyZW50ID0+IHtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwLmdldChfcGFyZW50KTtcbiAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXApIHtcbiAgICBkZXBlbmRlbmN5RGVwZW5kZW50c01hcC5zZXQoX3BhcmVudCwgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0ge30pO1xuICB9XG4gIFxuICByZXR1cm4gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZXBlbmRlbmN5TmFtZXNUcmFuc2Zvcm1lciBmcm9tICcuL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgZGVwZW5kZW50VHJhY2tlciAgICAgICAgICAgZnJvbSAnLi9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlcic7XG5pbXBvcnQgZGVwZW5kZW50UmVnaXN0cmFyICAgICAgICAgZnJvbSAnLi9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVuY3lOYW1lc1RyYW5zZm9ybWVyKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCk7XG5cbiAgXy5lYWNoKGRlcGVuZGVuY3lOYW1lcywgZGVwZW5kZW5jeU5hbWUgPT4ge1xuICAgIGRlcGVuZGVudFRyYWNrZXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xuICAgIGRlcGVuZGVudFJlZ2lzdHJhcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwiaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbHN9ID0gY29udHJvbC5fcGFyZW50O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbmN5TmFtZSBvZiBkZXBlbmRlbmN5TmFtZXMpIHtcbiAgICBsZXQgZGVwZW5kZW5jeUNvbnRyb2wgPSBjb250cm9sc1tkZXBlbmRlbmN5TmFtZV07XG5cbiAgICBpZighZGVwZW5kZW5jeUNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUud2FybihgZGVwZW5kZW5jeSBbJHtkZXBlbmRlbmN5TmFtZX1dIGlzIG5vdCBkZWNsYXJlZGApO1xuICAgIH1cblxuICAgIGlmKCFkZXBlbmRlbmN5Q29udHJvbCB8fCBkZXBlbmRlbmN5Q29udHJvbC5pbnZhbGlkKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy92YWxpZGF0b3IvdmFsaWRhdG9yLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlbWFpbEdvdic7XG5jb25zdCBlbWFpbEdvdlJ4ID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSooXFwuKGdvdnxtaWwpKSQvO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWVtYWlsR292UngudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgbm90IGEgdmFsaWQgZ292ZXJubWVudCBlbWFpbGA7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZW1haWwnO1xuY29uc3QgZW1haWxSeCA9IC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqJC87XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighZW1haWxSeC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyBub3QgYSB2YWxpZCBlbWFpbGA7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZW1haWwvZW1haWwudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VxdWFsc1RvJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgZXF1YWxzVG8pIHtcbiAgICBsZXQge3ZhbHVlLCBfcGFyZW50fSA9IGNvbnRyb2w7XG4gICAgbGV0IGVxdWFsc1RvQ29udHJvbCA9IF9wYXJlbnQuY29udHJvbHNbZXF1YWxzVG9dO1xuXG4gICAgaWYoIXZhbHVlIHx8IHZhbHVlICE9PSBlcXVhbHNUb0NvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCwgdmFsaWRhdG9yQ29uZmlncykge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBtdXN0IGVxdWFsIHRvICR7dmFsaWRhdG9yQ29uZmlnc31gO1xuICB9LFxuXG4gIHZhbGlkYXRvck5hbWVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VxdWFscy10by9lcXVhbHMtdG8udHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ21heExlbmd0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIGxldCB7dmFsdWV9ID0gY29udHJvbDtcbiAgICBpZighdmFsdWUgfHwgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIGlmKCFtYXhMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4aW11bSBsZW5ndGggc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICttYXhMZW5ndGg7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gc2hvdWxkIGJlIGxlc3MgdGhhbiAke21heExlbmd0aH0gY2hhcmFjdGVyc2A7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvbWF4LWxlbmd0aC9tYXgtbGVuZ3RoLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdtaW5MZW5ndGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICBpZighbWluTGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbmltdW0gbGVuZ3RoIHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiArbWluTGVuZ3RoO1xuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IHNob3VsZCBiZSAke21pbkxlbmd0aH0gY2hhcmFjdGVyc2A7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvbWluLWxlbmd0aC9taW4tbGVuZ3RoLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2YWxpZGF0b3JOYW1lID0gJ3BhdHRlcm4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBwYXR0ZXJuKSB7XG4gICAgaWYoIXBhdHRlcm4udGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBwYXR0ZXJuKSB7XG4gICAgaWYoIXBhdHRlcm4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc3BlY2lmeSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybicpO1xuICAgIH1cbiAgICBcbiAgICBpZihfLmlzU3RyaW5nKHBhdHRlcm4pKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVybn0kYCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3BhdHRlcm4vcGF0dGVybi50cyIsImNvbnN0IGRpcmVjdGl2ZU5hbWUgPSAncmVxdWlyZWQnO1xuY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdyZXF1aXJlZFRydWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoY29udHJvbC52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHtbZGlyZWN0aXZlTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIHJlcXVpcmVkYDtcbiAgfSxcblxuICBkaXJlY3RpdmVOYW1lLFxuXG4gIHZhbGlkYXRvck5hbWUsXG4gIFxuICBjaGVja2JveDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAncmVxdWlyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyByZXF1aXJlZGA7XG4gIH0sXG5cbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkL3JlcXVpcmVkLnRzIiwiZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWVQcm9wZXJ9ID0gY29udHJvbDtcbiAgcmV0dXJuIGBWYWx1ZSBwcm92aWRlZCBmb3IgJHtjb250cm9sTmFtZVByb3Blcn0gZmllbGQgYWxyZWFkeSBleGlzdHNgO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay9tZXNzYWdlci9tZXNzYWdlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGNvbmZpZ3MsIGJhc2VDb25maWdzKSA9PiB7XG4gIGlmKCFfLmlzUGxhaW5PYmplY3QoY29uZmlncykpIHtcbiAgICBjb25maWdzID0ge3BhdGg6IGNvbmZpZ3N9O1xuICB9XG4gIFxuICBsZXQge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSA9IGNvbmZpZ3M7XG4gIFxuICBpZihiYXNlQ29uZmlncykge1xuICAgIHZhciB7YmFzZVVybH0gPSBiYXNlQ29uZmlncztcbiAgfVxuICBcbiAgaWYoIWZpZWxkTmFtZSkge1xuICAgIGZpZWxkTmFtZSA9IGNvbnRyb2wuY29udHJvbE5hbWU7XG4gIH1cbiAgXG4gIGlmKCFpZ25vcmUpIHtcbiAgICBpZ25vcmUgPSBbXTtcbiAgfSBlbHNlIGlmKCFfLmlzQXJyYXkoaWdub3JlKSkge1xuICAgIGlnbm9yZSA9IFtpZ25vcmVdO1xuICB9XG4gIFxuICBpZihfLmlzVW5kZWZpbmVkKGlnbm9yZUNhc2UpKSB7XG4gICAgaWdub3JlQ2FzZSA9IHRydWU7XG4gIH1cbiAgXG4gIGlmKGlnbm9yZUNhc2UpIHtcbiAgICBpZ25vcmUgPSBpZ25vcmUubWFwKGlnbm9yZSA9PiAoaWdub3JlICsgJycpLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIFxuICBpZihiYXNlVXJsKSB7XG4gICAgcGF0aCA9IGJhc2VVcmwgKyBwYXRoO1xuICB9XG4gIFxuICByZXR1cm4gXy5leHRlbmQoY29uZmlncywge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdW5pcXVlLWNoZWNrL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdmFsaWRhdG9yICAgICAgIGZyb20gJy4vdmFsaWRhdG9yL3ZhbGlkYXRvcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgbWVzc2FnZXIgICAgICAgIGZyb20gJy4vbWVzc2FnZXIvbWVzc2FnZXInO1xuaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yLFxuICBwcmVwcm9jZXNzb3IsXG4gIG1lc3NhZ2VyLFxuICB2YWxpZGF0b3JOYW1lLFxuICBhc3luYzogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay91bmlxdWUtY2hlY2sudHMiLCJpbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBjb25maWdzKSA9PiB7XG4gIGxldCB7ZmllbGROYW1lLCBpZ25vcmUsIGlnbm9yZUNhc2UsIHBhdGh9ID0gY29uZmlncztcbiAgbGV0IHt2YWx1ZX0gPSBjb250cm9sO1xuXG4gIGlmKGlnbm9yZUNhc2UpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgXG4gIGlmKCF2YWx1ZSB8fCBpZ25vcmUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcGFyYW1zID0ge1tmaWVsZE5hbWVdOiB2YWx1ZX07XG4gICAgXG4gICAgY29udHJvbC5odHRwLmdldChwYXRoLCB7cGFyYW1zfSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgcmVzb2x2ZShkYXRhLmxlbmd0aCA/IHtbdmFsaWRhdG9yTmFtZV06IHRydWV9IDogbnVsbCk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgcmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsImltcG9ydCBkZXBzVmFsaWRhdG9yICAgICAgICAgZnJvbSAnLi9kZXBzL2RlcHMnO1xuaW1wb3J0IGVtYWlsVmFsaWRhdG9yICAgICAgICBmcm9tICcuL2VtYWlsL2VtYWlsJztcbmltcG9ydCBlbWFpbEdvdlZhbGlkYXRvciAgICAgZnJvbSAnLi9lbWFpbC1nb3YvZW1haWwtZ292JztcbmltcG9ydCBlcXVhbHNUb1ZhbGlkYXRvciAgICAgZnJvbSAnLi9lcXVhbHMtdG8vZXF1YWxzLXRvJztcbmltcG9ydCBtYXhMZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9tYXgtbGVuZ3RoL21heC1sZW5ndGgnO1xuaW1wb3J0IG1pbkxlbmd0aFZhbGlkYXRvciAgICBmcm9tICcuL21pbi1sZW5ndGgvbWluLWxlbmd0aCc7XG5pbXBvcnQgcGF0dGVyblZhbGlkYXRvciAgICAgIGZyb20gJy4vcGF0dGVybi9wYXR0ZXJuJztcbmltcG9ydCByZXF1aXJlZFZhbGlkYXRvciAgICAgZnJvbSAnLi9yZXF1aXJlZC9yZXF1aXJlZCc7XG5pbXBvcnQgcmVxdWlyZWRUcnVlVmFsaWRhdG9yIGZyb20gJy4vcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlJztcbmltcG9ydCB1bmlxdWVDaGVja1ZhbGlkYXRvciAgZnJvbSAnLi91bmlxdWUtY2hlY2svdW5pcXVlLWNoZWNrJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBkZXBzVmFsaWRhdG9yLFxuICByZXF1aXJlZFZhbGlkYXRvcixcbiAgbWluTGVuZ3RoVmFsaWRhdG9yLFxuICBtYXhMZW5ndGhWYWxpZGF0b3IsXG4gIHBhdHRlcm5WYWxpZGF0b3IsXG4gIGVtYWlsVmFsaWRhdG9yLFxuICBlbWFpbEdvdlZhbGlkYXRvcixcbiAgZXF1YWxzVG9WYWxpZGF0b3IsXG4gIHJlcXVpcmVkVHJ1ZVZhbGlkYXRvcixcbiAgdW5pcXVlQ2hlY2tWYWxpZGF0b3Jcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIiwiZXhwb3J0IGRlZmF1bHQgKG5hbWUsIGNoZWNrYm94KSA9PiB7XG4gIGxldCBjaGVja2JveFR5cGUgPSAnW3R5cGU9Y2hlY2tib3hdJztcbiAgbGV0IGNvbnRyb2xUeXBlcyA9IFsnZm9ybUNvbnRyb2xOYW1lJywgJ2Zvcm1Db250cm9sJywgJ25nTW9kZWwnXVxuICBjaGVja2JveCA9IGNoZWNrYm94ID8gYGlucHV0JHtjaGVja2JveFR5cGV9YCA6IGA6bm90KCR7Y2hlY2tib3hUeXBlfSlgO1xuICBcbiAgcmV0dXJuIGNvbnRyb2xUeXBlcy5yZWR1Y2UoKHNlbGVjdG9yLCBjb250cm9sVHlwZSkgPT4ge1xuICAgIHNlbGVjdG9yLnB1c2goYCR7Y2hlY2tib3h9WyR7bmFtZX1dWyR7Y29udHJvbFR5cGV9XWApO1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfSwgW10pLmpvaW4oJywnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9kaXJlY3RpdmVzLWdlbmVyYXRvci9fbGliL3NlbGVjdG9yLWFzc2VtYmxlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRQbHVzfSAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ25nLWh0dHAtY2xpZW50LXBsdXMnO1xuaW1wb3J0IHtOR19WQUxJREFUT1JTLCBOR19BU1lOQ19WQUxJREFUT1JTfSAgICAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgc2VsZWN0b3JBc3NlbWJsZXIgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXInO1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0b3JzID0+IHtcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHZhbGlkYXRvckNvbmZpZ3VyYXRvciA9PiB7XG4gICAgbGV0IHthc3luYzogX2FzeW5jLCBjaGVja2JveCwgdmFsaWRhdG9yTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcjtcbiAgICBsZXQge2RpcmVjdGl2ZU5hbWVQcmVmaXhlZH0gPSB2YWxpZGF0b3JDb25maWd1cmF0b3I7XG4gICAgbGV0IGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmVOYW1lUHJlZml4ZWQgfHwgdmFsaWRhdG9yTmFtZVByZWZpeGVkO1xuICAgIGxldCBzZWxlY3RvciA9IHNlbGVjdG9yQXNzZW1ibGVyKGRpcmVjdGl2ZU5hbWUsIGNoZWNrYm94KTtcblxuICAgIGxldCBwcm92aWRlcnMgPSBbe1xuICAgICAgcHJvdmlkZTogX2FzeW5jID8gTkdfQVNZTkNfVkFMSURBVE9SUyA6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcyksXG4gICAgICBtdWx0aTogdHJ1ZSAgICAgICAgXG4gICAgfV07XG4gICAgXG4gICAgQERpcmVjdGl2ZSh7c2VsZWN0b3IsIHByb3ZpZGVyc30pIGNsYXNzIFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzIHtcbiAgICAgIHByaXZhdGUgdmFsaWRhdG9yO1xuICAgICAgcHJpdmF0ZSBvbkNoYW5nZTtcbiAgICAgIHByaXZhdGUgY29udHJvbDtcbiAgICAgIEBJbnB1dChgJHtkaXJlY3RpdmVOYW1lfWApIHByaXZhdGUgY29uZmlncztcbiAgICBcbiAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFBsdXMpIHt9XG4gICAgXG4gICAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIGlmKCdjb25maWdzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgaWYoIXRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgIGlmKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIHZhbGlkYXRlKGNvbnRyb2w/KSB7XG4gICAgICAgIGxldCBlcnJvciA9IHtbZGlyZWN0aXZlTmFtZV06IHRydWV9O1xuICAgICAgICBcbiAgICAgICAgaWYoX2FzeW5jKSB7XG4gICAgICAgICAgXy5leHRlbmQoY29udHJvbCwge2h0dHA6IHRoaXMuaHR0cH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICAgICBjb250cm9sLCBcbiAgICAgICAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIF9hc3luYyA/IFByb21pc2UucmVzb2x2ZShlcnJvcikgOiBlcnJvcjsgXG4gICAgICB9XG4gICAgXG4gICAgICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjsgXG4gICAgICB9XG4gICAgXG4gICAgICBwcml2YXRlIGNyZWF0ZVZhbGlkYXRvcigpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3JDb25maWd1cmF0b3IodGhpcy5jb250cm9sLCB0aGlzLmNvbmZpZ3MsIHRoaXMuZWwpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcztcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRQbHVzTW9kdWxlfSBmcm9tICduZy1odHRwLWNsaWVudC1wbHVzJztcbmltcG9ydCBwcmVmaXhlciAgICAgICAgICAgICAgIGZyb20gJy4uL19saWIvcHJlZml4ZXInO1xuaW1wb3J0IHZhbGlkYXRvckNvbmZpZ3VyYXRvciAgZnJvbSAnLi4vdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yJztcbmltcG9ydCBkaXJlY3RpdmVzR2VuZXJhdG9yICAgIGZyb20gJy4uL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzKSA9PiB7XG4gIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3IgPT4ge1xuICAgIGxldCB7dmFsaWRhdG9yTmFtZSwgZGlyZWN0aXZlTmFtZX0gPSB2YWxpZGF0b3I7XG4gICAgbGV0IHZhbGlkYXRvck5hbWVQcmVmaXhlZCA9IHByZWZpeGVyKHNldHRpbmdzLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIGRpcmVjdGl2ZU5hbWUpO1xuICAgIF8uZXh0ZW5kKHZhbGlkYXRvciwge3ZhbGlkYXRvck5hbWVQcmVmaXhlZCwgZGlyZWN0aXZlTmFtZVByZWZpeGVkfSk7XG4gICAgcmV0dXJuIHZhbGlkYXRvckNvbmZpZ3VyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9yKTtcbiAgfSk7XG4gIFxuICBsZXQgZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXNHZW5lcmF0b3IodmFsaWRhdG9ycyk7XG5cbiAgQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbSHR0cENsaWVudFBsdXNNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogZGlyZWN0aXZlcywgXG4gICAgZXhwb3J0czogZGlyZWN0aXZlc1xuICB9KSBjbGFzcyBWYWxpZGF0b3JNb2R1bGUge31cbiAgXG4gIHJldHVybiBWYWxpZGF0b3JNb2R1bGU7ICAgIFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5hbWVBc3NpZ25lciAgICAgZnJvbSAnLi9uYW1lLWFzc2lnbmVyL25hbWUtYXNzaWduZXInO1xuaW1wb3J0IFZhbGlkYXRpb25TdGF0ZXIgZnJvbSAnLi4vLi4vLi4vc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgZWwpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBcbiAgaWYoIXZhbGlkaWZ5KSB7XG4gICAgZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIG5hbWVBc3NpZ25lcihjb250cm9sKTtcbiAgICBcbiAgICB2YWxpZGlmeSA9IHtcbiAgICAgIGVsZW1lbnRzOiB7fSxcbiAgICAgIGVycm9yczoge30sXG4gICAgICB2YWxpZGF0aW9uU3RhdGVyOiBuZXcgVmFsaWRhdGlvblN0YXRlcihzZXR0aW5ncywgY29udHJvbClcbiAgICB9O1xuICAgIFxuICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHt2YWxpZGlmeSwgZWwsICRlbDogJChlbCl9KTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9kYXRhLWluaXRpYWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtjb250cm9sc30gPSBjb250cm9sLl9wYXJlbnQ7XG4gIGxldCBjb250cm9sTmFtZXMgPSBfLmtleXMoY29udHJvbHMpO1xuICBmb3IobGV0IGNvbnRyb2xOYW1lIG9mIGNvbnRyb2xOYW1lcykge1xuICAgIGlmKGNvbnRyb2xzW2NvbnRyb2xOYW1lXSA9PT0gY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2xOYW1lO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL2xpYi9uYW1lLWFjY2Vzc29yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5hbWVBY2Nlc3NvciBmcm9tICcuL2xpYi9uYW1lLWFjY2Vzc29yJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgXG4gIGlmKCFjb250cm9sTmFtZSkge1xuICAgIGNvbnRyb2xOYW1lID0gbmFtZUFjY2Vzc29yKGNvbnRyb2wpO1xuICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHtcbiAgICAgIGNvbnRyb2xOYW1lLFxuICAgICAgY29udHJvbE5hbWVQcm9wZXI6IF8udXBwZXJGaXJzdChfLmxvd2VyQ2FzZShjb250cm9sTmFtZSkpXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyLnRzIiwiaW1wb3J0IHtkZXBlbmRlbmN5UmVxdWVzdHN9IGZyb20gJy4uLy4uLy4uL19saWIvdmFycyc7XG5pbXBvcnQgZGVwZW5kZW50c1NldHRlciAgICAgZnJvbSAnLi4vLi4vLi4vZGVwZW5kZW50cy1zZXR0ZXIvZGVwZW5kZW50cy1zZXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtfcGFyZW50LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQgcGFyZW50UmVjb3JkcyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gIFxuICBpZihwYXJlbnRSZWNvcmRzKSB7XG4gICAgbGV0IGRlcGVuZGVudFJlY29yZHMgPSBwYXJlbnRSZWNvcmRzW2NvbnRyb2xOYW1lXTtcblxuICAgIGlmKGRlcGVuZGVudFJlY29yZHMpIHtcbiAgICAgIGRlcGVuZGVudHNTZXR0ZXIoY29udHJvbCwgZGVwZW5kZW50UmVjb3Jkcyk7XG4gICAgICBkZWxldGUgcGFyZW50UmVjb3Jkc1tjb250cm9sTmFtZV07XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyICAgICAgICAgZnJvbSAnLi4vLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgY29udGFpbmVyQWRkZXIgICAgICAgICAgZnJvbSAnLi4vX2xpYi9jb250YWluZXItYWRkZXInO1xuaW1wb3J0IEFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyIGZyb20gJy4uLy4uLy4uLy4uL3N0YXRlcnMvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkaWZ5LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jcyA9IHt9LCBlbGVtZW50c30gPSB2YWxpZGlmeTtcbiAgXG4gIGlmKCF2YWxpZGF0b3JEZWNsYXJhdGlvbi5hc3luYyB8fCAhXy5pc0VtcHR5KGFzeW5jcykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGxldCB7YXN5bmNTdGF0dXNIaWRlQ2xhc3MsIHNlbGVjdG9yc30gPSBzZXR0aW5ncztcbiAgbGV0IHthc3luY1N0YXR1c0NvbnRhaW5lcn0gPSBzZWxlY3RvcnM7XG4gIGxldCB7JGVsLCAkZWxDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gIGxldCAkYXN5bmNzQ29udGFpbmVyID0gJCgnPGRpdi8+Jyk7XG4gIGxldCAkcGVuZGluZyA9ICQoJzxkaXYvPicpO1xuICBsZXQgJHN1Y2Nlc3MgPSAkKCc8ZGl2Lz4nKTtcblxuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRhc3luY3NDb250YWluZXIsICdhc3luY3MtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRwZW5kaW5nLCAnYXN5bmMtcGVuZGluZycsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkc3VjY2VzcywgJ2FzeW5jLXN1Y2Nlc3MnLCBjb250cm9sTmFtZSk7XG4gIFxuICAkYXN5bmNzQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJHBlbmRpbmcuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkc3VjY2Vzcy5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRhc3luY3NDb250YWluZXIuYXBwZW5kKCRwZW5kaW5nKS5hcHBlbmQoJHN1Y2Nlc3MpO1xuICBcbiAgXy5leHRlbmQoYXN5bmNzLCB7JGFzeW5jc0NvbnRhaW5lciwgJHBlbmRpbmcsICRzdWNjZXNzfSk7XG4gIF8uZXh0ZW5kKHZhbGlkaWZ5LCB7YXN5bmNzLCBhc3luY1N0YXR1c2VzOiB7fX0pO1xuICBcbiAgY29udGFpbmVyQWRkZXIoJGVsLCAkYXN5bmNzQ29udGFpbmVyLCAkZWxDb250YWluZXIsIGFzeW5jU3RhdHVzQ29udGFpbmVyKTtcbiAgdmFsaWRpZnkuYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIgPSBuZXcgQXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJpbXBvcnQgZXJyb3JzQ29udGFpbmVyQnVpbGRlciBmcm9tICcuL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXInO1xuaW1wb3J0IGFzeW5jQ29udGFpbmVyQnVpbGRlciAgZnJvbSAnLi9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgZXJyb3JzQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCk7XG4gIGFzeW5jQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZWxlbWVudHMtaW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uLy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IGNvbnRhaW5lckFkZGVyICBmcm9tICcuLi9fbGliL2NvbnRhaW5lci1hZGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCkgPT4ge1xuICBsZXQgeyRlbCwgdmFsaWRpZnksIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCB7ZWxlbWVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0VtcHR5KGVsZW1lbnRzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHtlbGVtZW50Q29udGFpbmVyLCBlcnJvcnNDb250YWluZXJ9ID0gc2V0dGluZ3Muc2VsZWN0b3JzO1xuICBsZXQgJGVsQ29udGFpbmVyID0gZWxlbWVudENvbnRhaW5lciA/ICRlbC5jbG9zZXN0KGVsZW1lbnRDb250YWluZXIpIDogJCgpO1xuICBsZXQgJGVycm9yc0NvbnRhaW5lciA9ICQoJzxkaXYvPicpO1xuXG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsLCAnZWwnLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsQ29udGFpbmVyLCAnZWwtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlcnJvcnNDb250YWluZXIsICdlcnJvcnMtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBcbiAgXy5leHRlbmQoZWxlbWVudHMsIHskZWwsICRlbENvbnRhaW5lciwgJGVycm9yc0NvbnRhaW5lcn0pO1xuICBjb250YWluZXJBZGRlcigkZWwsICRlcnJvcnNDb250YWluZXIsICRlbENvbnRhaW5lciwgZXJyb3JzQ29udGFpbmVyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoZXJyb3JNZXNzYWdlLCBwcmVmaXgpID0+IHtcbiAgbGV0IGdlbmVyYWxDbGFzcyA9IHByZWZpeCArICctZXJyb3Itd29yZCc7XG4gIFxuICByZXR1cm4gZXJyb3JNZXNzYWdlLnNwbGl0KC9cXHMrLykubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgIGxldCBzcGVjaWZpY0NsYXNzID0gZ2VuZXJhbENsYXNzICsgJy0nICsgaW5kZXg7XG4gICAgcmV0dXJuIGA8c3BhbiBjbGFzcyA9IFwiJHtnZW5lcmFsQ2xhc3N9ICR7c3BlY2lmaWNDbGFzc31cIj4ke3dvcmR9PC9zcGFuPmA7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IHNwYW5uaWZpZXIgICAgICBmcm9tICcuL19saWIvc3Bhbm5pZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQsIGFzeW5jOiBfYXN5bmN9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7bWVzc2FnZXJ9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7ZWxlbWVudHMsIGVycm9yc30gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgYmFzZUVycm9yQ29uZmlncyA9IHskZWw6ICQoKSwgX2FzeW5jLCB2YWxpZGF0b3JOYW1lLCBjb250cm9sfTtcbiAgXG4gIGlmKCFtZXNzYWdlcikge1xuICAgIHJldHVybiBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gPSBiYXNlRXJyb3JDb25maWdzO1xuICB9XG4gIFxuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdIHx8IGJhc2VFcnJvckNvbmZpZ3M7XG4gIGxldCB7JGVsfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHt2YWxpZGF0b3I6IHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyOiBtZXNzYWdlckNvbmZpZ3MsIGJhc2VDb25maWdzfSA9IGNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQgeyRlcnJvcnNDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gIGxldCBlcnJvck1lc3NhZ2VyID0gXy5pc0Z1bmN0aW9uKG1lc3NhZ2VyKSA/IG1lc3NhZ2VyIDogKCkgPT4gbWVzc2FnZXI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VyKGNvbnRyb2wsIHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyQ29uZmlncywgYmFzZUNvbmZpZ3MpO1xuICBlcnJvck1lc3NhZ2UgPSBzcGFubmlmaWVyKGVycm9yTWVzc2FnZSwgcHJlZml4KTtcbiAgXG4gIGlmKCEkZWwubGVuZ3RoKSB7XG4gICAgbGV0IHN5bmNBc3luY0NsYXNzID0gYCR7cHJlZml4fS1gICsgKF9hc3luYyA/ICdhc3luYycgOiAnc3luYycpO1xuICAgICRlbCA9ICQoJzxkaXYvPicpO1xuICAgICRlbC5hZGRDbGFzcyhzeW5jQXN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hcHBlbmQoJGVsKTtcbiAgICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbCwgJ2Vycm9yJywgdmFsaWRhdG9yTmFtZSk7XG4gICAgZXJyb3JDb25maWdzID0gXy5leHRlbmQoZXJyb3JDb25maWdzLCB7JGVsfSk7XG4gICAgXG4gICAgaWYoZXJyb3JNZXNzYWdlQ2xhc3NlcyAmJiBlcnJvck1lc3NhZ2VDbGFzc2VzLmluaXRpYWwpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmluaXRpYWwpO1xuICAgIH1cbiAgICBcbiAgICBpZihfYXN5bmMpIHtcbiAgICAgIGVycm9yQ29uZmlncy5yZXF1ZXN0cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gPSBlcnJvckNvbmZpZ3M7XG4gIH1cblxuICAkZWwuaHRtbChlcnJvck1lc3NhZ2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ByZXByb2Nlc3Nvcn0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgXG4gIGlmKCFfLmlzUGxhaW5PYmplY3QoY29uZmlncykpIHtcbiAgICBjb25maWdzID0ge3ZhbGlkYXRvcjogY29uZmlnc307XG4gIH1cbiAgXG4gIGlmKHByZXByb2Nlc3Nvcikge1xuICAgIGxldCB7dmFsaWRhdG9yQ29uZmlnc30gPSBzZXR0aW5ncztcbiAgICBcbiAgICBpZih2YWxpZGF0b3JDb25maWdzKSB7XG4gICAgICBsZXQge3ZhbGlkYXRvck5hbWV9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gICAgICB2YXIgYmFzZUNvbmZpZ3MgPSB2YWxpZGF0b3JDb25maWdzW3ZhbGlkYXRvck5hbWVdO1xuICAgICAgXy5leHRlbmQoY29uZmlncywge2Jhc2VDb25maWdzfSk7XG4gICAgfVxuXG4gICAgY29uZmlncy52YWxpZGF0b3IgPSBwcmVwcm9jZXNzb3IoY29udHJvbCwgY29uZmlncy52YWxpZGF0b3IsIGJhc2VDb25maWdzKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWdzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyIGZyb20gJy4uL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplcic7XG5pbXBvcnQgaW5pdGlhbERhdGFTZXR0ZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXInO1xuaW1wb3J0IHJlcXVlc3RzTnVsbGlmaWVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllcic7XG5pbXBvcnQgaW5pdGlhbFZpc3VhbGl6ZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyJztcbmltcG9ydCBmaW5hbERhdGFTZXR0ZXIgICAgICAgICAgICBmcm9tICcuL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlcic7XG5pbXBvcnQgZmluYWxWaXN1YWxpemVyICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9maW5hbC12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBpZihjb250cm9sLnZhbGlkVmFsdWUgPT09IGNvbnRyb2wudmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0gICBcbiAgXG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkLCB2YWxpZGF0b3J9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgZXJyb3JzLCB2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBsZXQgdmFsaWRhdGlvbklkID0gXy51bmlxdWVJZCgpO1xuXG4gIGlmKGNvbnRyb2wuaW52YWxpZFZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgbGV0IGVycm9yID0ge1t2YWxpZGF0b3JOYW1lUHJlZml4ZWRdOiB0cnVlfTtcbiAgICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBlcnJvcikudmlzdWFsaXplKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlcnJvcik7XG4gIH1cbiAgXG4gIGluaXRpYWxEYXRhU2V0dGVyKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpO1xuICByZXF1ZXN0c051bGxpZmllcihjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uSWQpO1xuICBpbml0aWFsVmlzdWFsaXplcihjb250cm9sLCB2YWxpZGF0b3JOYW1lKTtcbiAgXG4gIGNsZWFyVGltZW91dChlcnJvckNvbmZpZ3MuYXN5bmNEZWJvdW5jZVRpbWVvdXQpO1xuICBcbiAgZXJyb3JDb25maWdzLmFzeW5jRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYodmFsaWRpZnkuc3luYykge1xuICAgICAgcmV0dXJuIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcodHJ1ZSk7XG4gICAgXG4gICAgdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBjb25maWdzLmJhc2VDb25maWdzKS50aGVuKHZhbGlkYXRpb25TdGF0dXMgPT4ge1xuICAgICAgaWYoZXJyb3JDb25maWdzLnJlcXVlc3RzW3ZhbGlkYXRpb25JZF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YWxpZGF0aW9uU3RhdHVzID0gdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpO1xuICAgICAgZmluYWxEYXRhU2V0dGVyKGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uLCB2YWxpZGF0aW9uU3RhdHVzKTtcbiAgICAgIGZpbmFsVmlzdWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cyk7ICAgICAgXG4gICAgfSk7XG4gIH0sIHNldHRpbmdzLmFzeW5jRGVib3VuY2VUaW1lKTtcbiAgXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1t2YWxpZGF0b3JOYW1lUHJlZml4ZWRdOiB0cnVlfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24sIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgbGV0IHtlcnJvcnMsIHZhbHVlLCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jU3RhdHVzZXMsIGVycm9yczogX2Vycm9yc30gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIFxuICBfZXJyb3JzW3ZhbGlkYXRvck5hbWVdLnJlcXVlc3RzID0ge307XG4gIHZhbGlkaWZ5LnN5bmMgPSBmYWxzZTtcbiAgYXN5bmNTdGF0dXNlc1t2YWxpZGF0b3JOYW1lXSA9IGZhbHNlO1xuICBcbiAgaWYoIXZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICBlcnJvcnMgPSBfLm9taXQoZXJyb3JzLCBbdmFsaWRhdG9yTmFtZVByZWZpeGVkXSk7XG4gIH1cbiAgXG4gIF8uZXh0ZW5kKGVycm9ycywgdmFsaWRhdGlvblN0YXR1cyk7XG4gIFxuICBpZihfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgIGNvbnRyb2wudmFsaWRWYWx1ZSA9IHZhbHVlO1xuICAgIGVycm9ycyA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnRyb2wuaW52YWxpZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgXG4gIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luY1N0YXR1c2VzID0+IHtcbiAgcmV0dXJuIF8ucmVkdWNlKGFzeW5jU3RhdHVzZXMsIChjb3VudCwgc3RhdHVzKSA9PiB7XG4gICAgcmV0dXJuIGNvdW50ICs9ICtzdGF0dXM7XG4gIH0sIDApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwiaW1wb3J0IGFjdGl2ZUFzeW5jc0NvdW50ZXIgZnJvbSAnLi9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNTdGF0dXNlcywgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighYWN0aXZlQXN5bmNzQ291bnRlcihhc3luY1N0YXR1c2VzKSkge1xuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcoZmFsc2UpO1xuICAgIFxuICAgIGlmKCF2YWxpZGF0aW9uU3RhdHVzICYmIGNvbnRyb2wudmFsaWQpIHtcbiAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuc3VjY2VzcyhmYWxzZSkuY29udGFpbmVyKGZhbHNlKTtcbiAgICAgIH0sIHNldHRpbmdzLmFzeW5jU3VjY2Vzc01lc3NhZ2VEdXJhdGlvbik7XG4gICAgfVxuICB9XG4gIFxuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKS51cGRhdGVEZXBlbmRlbnRzKCkudmlzdWFsaXplKCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplci50cyIsImV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcblxuICBjb250cm9sLnZhbGlkVmFsdWUgPSBjb250cm9sLmludmFsaWRWYWx1ZSA9IG51bGw7XG4gIHZhbGlkaWZ5LmFzeW5jU3RhdHVzZXNbdmFsaWRhdG9yTmFtZV0gPSB0cnVlO1xuICB2YWxpZGlmeS5zeW5jID0gZmFsc2U7ICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSkgPT4ge1xuICBsZXQge2FzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLCB2YWxpZGF0aW9uU3RhdGVyfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcih0cnVlKS5zdWNjZXNzKGZhbHNlKTtcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgbnVsbCkudmlzdWFsaXplKCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyL2luaXRpYWwtdmlzdWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25JZCkgPT4ge1xuICBsZXQge3JlcXVlc3RzfSA9IGNvbnRyb2wudmFsaWRpZnkuZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuXG4gIF8uZWFjaChyZXF1ZXN0cywgKHJlcXVlc3QsIGtleSkgPT4ge1xuICAgIHJlcXVlc3RzW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgXG4gIHJlcXVlc3RzW3ZhbGlkYXRpb25JZF0gPSBmYWxzZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9yZXF1ZXN0cy1udWxsaWZpZXIvcmVxdWVzdHMtbnVsbGlmaWVyLnRzIiwiaW1wb3J0IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyIGZyb20gJy4uL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge3ZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIGxldCB7dmFsaWRhdG9yLCB2YWxpZGF0b3JOYW1lfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQgdmFsaWRhdGlvblN0YXR1cyA9IHZhbGlkYXRvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvciwgY29uZmlncy5iYXNlQ29uZmlncyk7XG4gIFxuICBpZih2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgdmFsaWRpZnkuc3luYyA9IHRydWU7XG4gIH1cbiAgXG4gIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpLnVwZGF0ZURlcGVuZGVudHMoKS52aXN1YWxpemUoKTtcbiAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yLnRzIiwiaW1wb3J0IHN5bmNWYWxpZGF0b3IgIGZyb20gJy4vc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3InO1xuaW1wb3J0IGFzeW5jVmFsaWRhdG9yIGZyb20gJy4vYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZih2YWxpZGF0b3JEZWNsYXJhdGlvbi5hc3luYykge1xuICAgICAgcmV0dXJuIGFzeW5jVmFsaWRhdG9yKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzeW5jVmFsaWRhdG9yKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3ZhbGlkYXRvci1idWlsZGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkYXRhSW5pdGlhbGl6ZXIgICAgIGZyb20gJy4vZGF0YS1pbml0aWFsaXplci9kYXRhLWluaXRpYWxpemVyJztcbmltcG9ydCBkZXBlbmRlbnRzUmVnaXN0cmFyIGZyb20gJy4vZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXInO1xuaW1wb3J0IHByZXByb2Nlc3NvciAgICAgICAgZnJvbSAnLi9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yJztcbmltcG9ydCBlbGVtZW50c0luaXRpYWxpemVyIGZyb20gJy4vZWxlbWVudHMtaW5pdGlhbGl6ZXIvZWxlbWVudHMtaW5pdGlhbGl6ZXInO1xuaW1wb3J0IGVycm9yR2VuZXJhdG9yICAgICAgZnJvbSAnLi9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yJztcbmltcG9ydCB2YWxpZGF0b3JCdWlsZGVyICAgIGZyb20gJy4vdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCBkYXRhTmFtZXMgPSBbJ2FzeW5jJywgJ2NoZWNrYm94JywgJ3ZhbGlkYXRvck5hbWUnLCAnZGlyZWN0aXZlTmFtZVByZWZpeGVkJ107XG4gIGRhdGFOYW1lcy5wdXNoKCd2YWxpZGF0b3JOYW1lUHJlZml4ZWQnLCAnbWVzc2FnZXInKTtcbiAgbGV0IHN1cHBsZW1lbnRhbERhdGEgPSBfLnBpY2sodmFsaWRhdG9yRGVjbGFyYXRpb24sIGRhdGFOYW1lcyk7XG4gIGxldCBjb25maWd1cmF0b3IgPSAoY29udHJvbCwgY29uZmlncywgZWwpID0+IHtcbiAgICBkYXRhSW5pdGlhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIGVsKTtcbiAgICBkZXBlbmRlbnRzUmVnaXN0cmFyKGNvbnRyb2wpO1xuICAgIGNvbmZpZ3MgPSBwcmVwcm9jZXNzb3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICBlbGVtZW50c0luaXRpYWxpemVyKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgZXJyb3JHZW5lcmF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICByZXR1cm4gdmFsaWRhdG9yQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICB9O1xuXG4gIHJldHVybiBfLmV4dGVuZChjb25maWd1cmF0b3IsIHN1cHBsZW1lbnRhbERhdGEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83MV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiZm9ybXNcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImFtZFwiOlwiQGFuZ3VsYXIvZm9ybXNcIn1cbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBuZ1ZhbGlkaWZpZXIgZnJvbSAnLi92YWxpZGlmaWVyL3ZhbGlkaWZpZXInO1xuXG5leHBvcnQge25nVmFsaWRpZmllcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctdmFsaWRpZmllci50cyJdLCJzb3VyY2VSb290IjoiIn0=