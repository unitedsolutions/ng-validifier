(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("jquery"), require("@angular/common/http"), require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "jquery", "@angular/common/http", "@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng-validifier"] = factory(require("lodash"), require("jquery"), require("@angular/common/http"), require("@angular/core"), require("@angular/forms"));
	else
		root["ng-validifier"] = factory(root["_"], root["$"], root["ng"]["common"]["http"], root["ng"]["core"], root["ng"]["forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_67__) {
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validatorName; });
/* unused harmony export dependenciesTable */
var validatorName = 'deps';
var dependenciesTable = new WeakMap();



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_vars__ = __webpack_require__(6);




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dependents_setter_dependents_setter__ = __webpack_require__(5);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(6);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__);


var validatorName = 'uniqueCheck';
/* harmony default export */ __webpack_exports__["a"] = {
    validator: function (control, configs) {
        var fieldName = configs.fieldName, ignore = configs.ignore, ignoreCase = configs.ignoreCase, path = configs.path;
        var value = control.value;
        if (ignoreCase) {
            value = value.toLowerCase();
        }
        if (!value || ignore.indexOf(value) !== -1) {
            return Promise.resolve();
        }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"]();
        params = params.append(fieldName, value);
        return new Promise(function (resolve, reject) {
            control.http.get(path, { params: params }).subscribe(function (data) {
                resolve(data.length ? (_a = {}, _a[validatorName] = true, _a) : null);
                var _a;
            }, function (error) {
                reject(error.message);
            });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common_http__);
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
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClient"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_prefixer__ = __webpack_require__(7);
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
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClientModule"]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependents_setter_dependents_setter__ = __webpack_require__(5);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_container_adder__ = __webpack_require__(8);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__ = __webpack_require__(9);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NGJiZGE1YzhkM2M3NjQxOGFmMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29tbW9uXCIsXCJodHRwXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCJ9Iiwid2VicGFjazovLy8uL3NyYy9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci9fbGliL3ByZWZpeGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvX2xpYi9jb250YWluZXItYWRkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL3Zpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9kZXBzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvX2xpYi9zdHItYXJyYXlpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ZhbGlkYXRvci92YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC9lbWFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9taW4tbGVuZ3RoL21pbi1sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcGF0dGVybi9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy91bmlxdWUtY2hlY2svdW5pcXVlLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9kYXRhLWluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL2xpYi9uYW1lLWFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL25hbWUtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZWxlbWVudHMtaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL19saWIvc3Bhbm5pZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtZGF0YS1zZXR0ZXIvZmluYWwtZGF0YS1zZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvX2xpYi9hY3RpdmUtYXN5bmNzLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyL2luaXRpYWwtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9yZXF1ZXN0cy1udWxsaWZpZXIvcmVxdWVzdHMtbnVsbGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiZm9ybXNcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImFtZFwiOlwiQGFuZ3VsYXIvZm9ybXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL25nLXZhbGlkaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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USxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxrSEFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLEdBQUcsa0dBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3pFLGtIQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3RCx3R0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLDRHQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLDhDQUFRLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsQ0FBQyxFQUFDOzs7Ozs7O0FDdEJGLGdEOzs7Ozs7Ozs7O0FDQW1EO0FBRTdCIiwiZmlsZSI6Im5nLXZhbGlkaWZpZXIudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCIsIFwianF1ZXJ5XCIsIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIiwgXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmctdmFsaWRpZmllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZy12YWxpZGlmaWVyXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSwgcm9vdFtcIiRcIl0sIHJvb3RbXCJuZ1wiXVtcImNvbW1vblwiXVtcImh0dHBcIl0sIHJvb3RbXCJuZ1wiXVtcImNvcmVcIl0sIHJvb3RbXCJuZ1wiXVtcImZvcm1zXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82N19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDRiYmRhNWM4ZDNjNzY0MThhZjIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIiRcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkZXBlbmRlbmN5UmVxdWVzdHMgPSBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgcHJlZml4OiAndicsXG5cbiAgc2VsZWN0b3JzOiB7XG4gICAgZWxlbWVudENvbnRhaW5lcjogJy5mb3JtLWdyb3VwJyxcbiAgICBlcnJvcnNDb250YWluZXI6IFsnaW5zZXJ0QWZ0ZXInLCAnaW5wdXQnXSxcbiAgICBhc3luY1N0YXR1c0NvbnRhaW5lcjogWydpbnNlcnRCZWZvcmUnLCAnaW5wdXQnXVxuICB9LFxuICBcbiAgZXJyb3JNZXNzYWdlQ2xhc3Nlczoge1xuICAgIGluaXRpYWw6ICcnLFxuICAgIHZhbGlkOiAnJyxcbiAgICBpbnZhbGlkOiAnJ1xuICB9LFxuXG4gIGVycm9yTWVzc2FnZURlbGF5czoge1xuICAgIHZhbGlkOiAzMDAsXG4gICAgaW52YWxpZDogNTAwXG4gIH0sXG5cbiAgYXN5bmNEZWJvdW5jZVRpbWU6IDUwMCxcblxuICBhc3luY1N0YXR1c0hpZGVDbGFzczogJ2hpZGRlbicsXG4gIFxuICBhc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb246IDEwMDBcbn07XG5cbmV4cG9ydCB7XG4gIGRlcGVuZGVuY3lSZXF1ZXN0cywgXG4gIHNldHRpbmdzXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19saWIvdmFycy50cyIsImV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgJGVsLCBiYXNlQ2xhc3MsIGNvbnRyb2xOYW1lKSA9PiB7XG4gIGxldCB7cHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQgY2xhc3NlcyA9IFtiYXNlQ2xhc3MsIGAke2Jhc2VDbGFzc30tJHtjb250cm9sTmFtZX1gXTtcbiAgbGV0IGNsYXNzZXNTdHIgPSBjbGFzc2VzLm1hcChrbGFzcyA9PiBgJHtwcmVmaXh9LSR7a2xhc3N9YCkuam9pbignICcpO1xuICAkZWwuYWRkQ2xhc3MoY2xhc3Nlc1N0cik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9fbGliL2NsYXNzLWlkLWFzc2lnbmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvbW1vblwiLFwiaHR0cFwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBuZXdEZXBlbmRlbnRzKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHtkZXBlbmRlbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIV8uaXNBcnJheShuZXdEZXBlbmRlbnRzKSkge1xuICAgIG5ld0RlcGVuZGVudHMgPSBbbmV3RGVwZW5kZW50c107XG4gIH1cbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgXy5zZXQodmFsaWRpZnksICdkZXBlbmRlbnRzJywgZGVwZW5kZW50cyA9IFtdKTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKC4uLm5ld0RlcGVuZGVudHMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlci50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZGVwcyc7XG5jb25zdCBkZXBlbmRlbmNpZXNUYWJsZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCB7XG4gIHZhbGlkYXRvck5hbWUsXG4gIGRlcGVuZGVuY2llc1RhYmxlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9fbGliL3ZhcnMudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgbmFtZSkgPT4ge1xuICBsZXQge3ByZWZpeH0gPSBzZXR0aW5ncztcbiAgXG4gIGlmKHByZWZpeCAmJiBuYW1lKSB7XG4gICAgbmFtZSA9IHByZWZpeCArIF8udXBwZXJGaXJzdChuYW1lKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5hbWU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvX2xpYi9wcmVmaXhlci50cyIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgKCRlbCwgJGNvbnRhaW5lciwgJGNvbnRhaW5lckNvbnRhaW5lciwgaW5zZXJ0aW9uU3BlYykgPT4ge1xuICBsZXQgW2FjdGlvbiwgJGluc2VydGlvblBvaW50XSA9ICgoKSA9PiB7XG4gICAgaWYoISRjb250YWluZXJDb250YWluZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gWydpbnNlcnRBZnRlcicsICRlbF07XG4gICAgfVxuICAgIFxuICAgIGxldCBbYWN0aW9uLCBhbmNob3JdID0gaW5zZXJ0aW9uU3BlYztcbiAgICBsZXQgJGluc2VydGlvblBvaW50ID0gKCgpID0+IHtcbiAgICAgIGlmKCFhbmNob3IpIHtcbiAgICAgICAgcmV0dXJuICRjb250YWluZXJDb250YWluZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiAkKGFuY2hvciwgJGNvbnRhaW5lckNvbnRhaW5lcik7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiBbYWN0aW9uLCAkaW5zZXJ0aW9uUG9pbnRdO1xuICB9KSgpO1xuICBcbiAgJGNvbnRhaW5lclthY3Rpb25dKCRpbnNlcnRpb25Qb2ludCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9fbGliL2NvbnRhaW5lci1hZGRlci50cyIsImltcG9ydCAqIGFzIF8gICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4uLy4uLy4uL19saWIvcHJlZml4ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgaWYoXy5pc1BsYWluT2JqZWN0KHZhbGlkYXRpb25TdGF0dXMpKSB7XG4gICAgbGV0IGtleSA9IF8ua2V5cyh2YWxpZGF0aW9uU3RhdHVzKVswXTtcbiAgICBsZXQgdmFsdWUgPSB2YWxpZGF0aW9uU3RhdHVzW2tleV07XG4gICAga2V5ID0gcHJlZml4ZXIoc2V0dGluZ3MsIGtleSk7XG4gICAgdmFsaWRhdGlvblN0YXR1cyA9IHtba2V5XTogdmFsdWV9O1xuICB9XG4gIFxuICByZXR1cm4gdmFsaWRhdGlvblN0YXR1cztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge3NldHRpbmdzIGFzIG1haW5TZXR0aW5nc30gZnJvbSAnLi4vX2xpYi92YXJzJztcbmltcG9ydCBpbnRlcm5hbFZhbGlkYXRvcnMgICAgICAgICBmcm9tICcuLi92YWxpZGF0b3JzL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IG1vZHVsZUdlbmVyYXRvciAgICAgICAgICAgIGZyb20gJy4vbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzID0gW10pID0+IHtcbiAgc2V0dGluZ3MgPSBfLmV4dGVuZCh7fSwgbWFpblNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIHZhbGlkYXRvcnMucHVzaCguLi5pbnRlcm5hbFZhbGlkYXRvcnMpO1xuICByZXR1cm4gbW9kdWxlR2VuZXJhdG9yKHNldHRpbmdzLCB2YWxpZGF0b3JzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGlmaWVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHByaXZhdGUgaGlkZGVuQ2xhc3M7XG4gIHByaXZhdGUgYXN5bmNzO1xuICBwcml2YXRlICRlbDtcbiAgcHJpdmF0ZSAkZWxDb250YWluZXI7XG4gIHByaXZhdGUgcGVuZGluZ0NsYXNzO1xuICBcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGNvbnRyb2wpIHtcbiAgICBsZXQge2FzeW5jcywgZWxlbWVudHN9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICAgIGxldCBwZW5kaW5nQ2xhc3MgPSBgJHtzZXR0aW5ncy5wcmVmaXh9LWFzeW5jLXBlbmRpbmdgO1xuICAgIFxuICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICRlbCwgJGVsQ29udGFpbmVyLCBhc3luY3MsIHBlbmRpbmdDbGFzcyxcbiAgICAgIGhpZGRlbkNsYXNzOiBzZXR0aW5ncy5hc3luY1N0YXR1c0hpZGVDbGFzc1xuICAgIH0pO1xuICB9XG4gIFxuICBwcml2YXRlIGRpc3BsYXkodHlwZSwgb24pIHtcbiAgICBsZXQgbWV0aG9kID0gb24gPyAncmVtb3ZlQ2xhc3MnOiAnYWRkQ2xhc3MnO1xuICAgIHRoaXMuYXN5bmNzWyckJyArIHR5cGVdW21ldGhvZF0odGhpcy5oaWRkZW5DbGFzcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgXG4gIHByaXZhdGUgY2xhc3NPcGVyYXRvcihvcGVyYXRpb24pIHtcbiAgICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCBwZW5kaW5nQ2xhc3N9ID0gdGhpcztcbiAgICAkZWxbb3BlcmF0aW9uXShwZW5kaW5nQ2xhc3MpO1xuICAgICRlbENvbnRhaW5lcltvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gIH1cbiAgXG4gIGNvbnRhaW5lcihvbikge1xuICAgIGlmKG9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ2FkZENsYXNzJyk7ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wZW5kaW5nKG9uKS5zdWNjZXNzKG9uKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheSgnYXN5bmNzQ29udGFpbmVyJywgb24pO1xuICB9XG4gIFxuICBwZW5kaW5nKG9uKSB7XG4gICAgaWYoIW9uKSB7XG4gICAgICB0aGlzLmNsYXNzT3BlcmF0b3IoJ3JlbW92ZUNsYXNzJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLmRpc3BsYXkoJ3BlbmRpbmcnLCBvbik7XG4gIH1cbiAgXG4gIHN1Y2Nlc3Mob24pIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5KCdzdWNjZXNzJywgb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNldHRpbmdzLCBjb250cm9sKSB7XG4gIF8uZXh0ZW5kKHRoaXMsIHtzZXR0aW5ncywgY29udHJvbCwgc3RhdGU6IHt9fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXBlbmRlbnRzQWdncmVnYXRvcihjb250cm9sLCBhbGwgPSBbXSkge1xuICBsZXQge2RlcGVuZGVudHMgPSBbXX0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cykge1xuICAgIGlmKGFsbC5pbmRleE9mKGRlcGVuZGVudCkgPT09IC0xKSB7XG4gICAgICBhbGwucHVzaChkZXBlbmRlbnQpO1xuICAgICAgZGVwZW5kZW50c0FnZ3JlZ2F0b3IoZGVwZW5kZW50LCBhbGwpO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGFsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlcGVuZGVudHNBZ2dyZWdhdG9yIGZyb20gJy4vX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHtzaWxlbnQsIGRlcGVuZGVudHMsIGNvbnRyb2x9ID0gdGhpcztcbiAgXG4gIGlmKCFzaWxlbnQpIHtcbiAgICBpZighY29udHJvbC52YWxpZGlmeS5pZ25vcmVEZXBlbmRlbnRzKSB7XG4gICAgICBkZXBlbmRlbnRzID0gZGVwZW5kZW50c0FnZ3JlZ2F0b3IoY29udHJvbCk7XG4gICAgICBmb3IobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIF8uZXh0ZW5kKGRlcGVuZGVudC52YWxpZGlmeSwge3NpbGVudDogdHJ1ZSwgaWdub3JlRGVwZW5kZW50czogdHJ1ZX0pO1xuICAgICAgICAgIGRlcGVuZGVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBfLmV4dGVuZCh0aGlzLCB7ZGVwZW5kZW50c30pO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKSB7XG4gIGxldCB7c2lsZW50LCBlcnJvcnN9ID0gdGhpcy5jb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBcbiAgXy5leHRlbmQodGhpcywge3NpbGVudCwgZGVwZW5kZW50czogdW5kZWZpbmVkfSk7XG4gIGVycm9yQ29uZmlncy5zdGF0dXMgPSB2YWxpZGF0aW9uU3RhdHVzO1xuICBcbiAgaWYoIXNpbGVudCkge1xuICAgIF8uZXh0ZW5kKHRoaXMsIHtlcnJvckNvbmZpZ3N9KTtcbiAgfVxuICBcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgX2NvbnN0cnVjdG9yICAgICAgZnJvbSAnLi9fY29uc3RydWN0b3IvY29uc3RydWN0b3InO1xuaW1wb3J0IHN0YXRlU2V0dGVyICAgICAgIGZyb20gJy4vc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW50c1VwZGF0ZXIgZnJvbSAnLi9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyJztcbmltcG9ydCB2aXN1YWxpemVyICAgICAgICBmcm9tICcuL3Zpc3VhbGl6ZXIvdmlzdWFsaXplcic7XG5cbl8uZXh0ZW5kKF9jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgc2V0OiBzdGF0ZVNldHRlcixcbiAgdXBkYXRlRGVwZW5kZW50czogZGVwZW5kZW50c1VwZGF0ZXIsXG4gIHZpc3VhbGl6ZTogdmlzdWFsaXplclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IF9jb25zdHJ1Y3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHtlcnJvck1lc3NhZ2VEZWxheXM6IGRlbGF5c30gPSBzZXR0aW5ncztcbiAgbGV0IHtfYXN5bmMsIHN0YXR1cywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZGlydHl9ID0gY29udHJvbDtcbiAgcmV0dXJuIF9hc3luYyB8fCAhZGlydHkgPyAwIDogc3RhdHVzID8gZGVsYXlzLmludmFsaWQgOiBkZWxheXMudmFsaWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9fbGliL2RlbGF5LWNhbGN1bGF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgJGVsKSA9PiB7XG4gIGxldCBjbGFzc2VzID0gJGVsLmF0dHIoJ2NsYXNzJyk7XG4gIFxuICBpZihjbGFzc2VzKSB7XG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIHJldHVybiBfLnJlZHVjZShjbGFzc2VzLCAoY291bnQsIGtsYXNzKSA9PiB7XG4gICAgaWYoa2xhc3Muc3RhcnRzV2l0aChgJHtzZXR0aW5ncy5wcmVmaXh9LWVycm9yYCkpIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjb3VudDtcbiAgfSwgMCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9fbGliL2Vycm9ycy1jb3VudGVyLnRzIiwiaW1wb3J0IGVycm9yc0NvdW50ZXIgZnJvbSAnLi9fbGliL2Vycm9ycy1jb3VudGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBlcnJvckNvbmZpZ3MpID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCBzdGF0dXM6IHZhbGlkYXRpb25TdGF0dXN9ID0gZXJyb3JDb25maWdzO1xuICBsZXQgeyRlbDogJGVycm9yRWwsIF9hc3luYywgY29udHJvbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQge2RpcnR5LCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyLCAkZXJyb3JzQ29udGFpbmVyfSA9IHZhbGlkaWZ5LmVsZW1lbnRzO1xuICBsZXQgZXJyb3JDbGFzcyA9IGAke3ByZWZpeH0tZXJyb3ItJHt2YWxpZGF0b3JOYW1lfWA7XG4gIGxldCBzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LXN5bmNgO1xuICBsZXQgYXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYXN5bmNgO1xuICBcbiAgaWYoZGlydHkpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLXByaXN0aW5lJykuYWRkQ2xhc3MoJ25nLWRpcnR5Jyk7XG4gIH0gZWxzZSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKCduZy1wcmlzdGluZScpO1xuICB9XG5cbiAgaWYoX2FzeW5jKSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKHN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhzeW5jQ2xhc3MpO1xuICB9IGVsc2Uge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcyhzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKGFzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYWRkQ2xhc3Moc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhhc3luY0NsYXNzKTtcbiAgfVxuXG4gIGlmKHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICAkZWwuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy12YWxpZCcpLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLXZhbGlkJykucmVtb3ZlQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy52YWxpZCk7XG4gICAgcmV0dXJuICRlcnJvckVsLmFkZENsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbnZhbGlkKTtcbiAgfVxuICBcbiAgJGVycm9yRWwucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmludmFsaWQpO1xuICAkZXJyb3JFbC5hZGRDbGFzcygnbmctdmFsaWQnKS5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLnZhbGlkKTtcbiAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xuICAkZWwucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG5cbiAgaWYoIWVycm9yc0NvdW50ZXIoc2V0dGluZ3MsICRlbENvbnRhaW5lcikpIHtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcygnbmctdmFsaWQnKTtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoX2FzeW5jID8gYXN5bmNDbGFzcyA6IHN5bmNDbGFzcyk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZWxheUNhbGN1bGF0b3IgIGZyb20gJy4vX2xpYi9kZWxheS1jYWxjdWxhdG9yJztcbmltcG9ydCBlcnJvcnNWaXN1YWxpemVyIGZyb20gJy4vZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgaWYoIXRoaXMuc2lsZW50KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQge2NvbnRyb2wsIGRlcGVuZGVudHMgPSBbXSwgZXJyb3JDb25maWdzfSA9IHRoaXM7XG4gICAgICBsZXQgZGVsYXkgPSBkZWxheUNhbGN1bGF0b3IodGhpcy5zZXR0aW5ncywgZXJyb3JDb25maWdzKTtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCk7XG4gICAgICBcbiAgICAgIGVycm9yQ29uZmlncy52aXN1YWxpemF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZXBlbmRlbnRzLnVuc2hpZnQoY29udHJvbCk7XG4gICAgICAgIF8uZWFjaChkZXBlbmRlbnRzLCBjb250cm9sID0+IHtcbiAgICAgICAgICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gICAgICAgICAgXG4gICAgICAgICAgXy5leHRlbmQodmFsaWRpZnksIHtzaWxlbnQ6IGZhbHNlLCBpZ25vcmVEZXBlbmRlbnRzOiBmYWxzZX0pO1xuICAgICAgICAgIF8uZWFjaCh2YWxpZGlmeS5lcnJvcnMsIF8ucGFydGlhbChlcnJvcnNWaXN1YWxpemVyLCB0aGlzLnNldHRpbmdzLCBfKSk7XG4gICAgICAgIH0pXG4gICAgICB9LCBkZWxheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvdmlzdWFsaXplci50cyIsImltcG9ydCB2YWxpZGF0b3IgICAgICAgZnJvbSAnLi92YWxpZGF0b3IvdmFsaWRhdG9yJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgZnJvbSAnLi9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yJztcbmltcG9ydCBtZXNzYWdlciAgICAgICAgZnJvbSAnLi9tZXNzYWdlci9tZXNzYWdlcic7XG5pbXBvcnQge3ZhbGlkYXRvck5hbWV9IGZyb20gJy4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IsXG4gIHByZXByb2Nlc3NvcixcbiAgbWVzc2FnZXIsXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL2RlcHMudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlcGVuZGVuY3lOYW1lcyA9PiB7XG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXMubWFwKGRlcGVuZGVuY3lOYW1lID0+IHtcbiAgICByZXR1cm4gXy51cHBlckZpcnN0KF8ubG93ZXJDYXNlKGRlcGVuZGVuY3lOYW1lKSk7XG4gIH0pLmpvaW4oJywgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXIudHMiLCJpbXBvcnQgZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIgZnJvbSAnLi9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWVQcm9wZXJ9ID0gY29udHJvbDtcbiAgZGVwZW5kZW5jeU5hbWVzID0gZGVwZW5kZW5jeU5hbWVzU3RyaW5naWZpZXIoZGVwZW5kZW5jeU5hbWVzKTtcbiAgcmV0dXJuIGAke2NvbnRyb2xOYW1lUHJvcGVyfSBkZXBlbmRzIG9uICR7ZGVwZW5kZW5jeU5hbWVzfWA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9tZXNzYWdlci50cyIsImNvbnN0IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IHtkZXBlbmRlbmN5RGVwZW5kZW50c01hcH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc3RyLCBjaGFyKSA9PiB7XG4gIGxldCByeCA9IG5ldyBSZWdFeHAoYFxcXFxzKiR7Y2hhcn1cXFxccypgKTtcbiAgcmV0dXJuIHN0ci5zcGxpdChyeCkubWFwKHBpZWNlID0+IHBpZWNlLnRyaW0oKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9fbGliL3N0ci1hcnJheWlmaWVyLnRzIiwiaW1wb3J0IHN0ckFycmF5aWZpZXIgZnJvbSAnLi9fbGliL3N0ci1hcnJheWlmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCkgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IHN0ckFycmF5aWZpZXIoZGVwZW5kZW5jeU5hbWVzLCAnLCcpO1xuICBpZihkZXBlbmRlbmN5TmFtZXMuaW5kZXhPZihjb250cm9sTmFtZSkgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtjb250cm9sTmFtZX1dIGNhbm5vdCBkZXBlbmQgb24gaXRzZWxmYCk7XG4gIH1cbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lSZXF1ZXN0c30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCB7X3BhcmVudH0gPSBjb250cm9sO1xuICBsZXQgZm9ybURlcGVuZGVuY3lSZXF1ZXN0cyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gICAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeVJlcXVlc3RzKSB7XG4gICAgZGVwZW5kZW5jeVJlcXVlc3RzLnNldChfcGFyZW50LCBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzID0ge30pO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHNbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lSZXF1ZXN0c1tkZXBlbmRlbmN5TmFtZV0gPSBbXTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKGNvbnRyb2wpOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci50cyIsImltcG9ydCBkZXBlbmRlbnRzU2V0dGVyICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlcic7XG5pbXBvcnQgZGVwZW5kZW5jeVJlcXVlc3RSZWdpc3RyYXIgZnJvbSAnLi9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IGRlcGVuZGVuY3lDb250cm9sID0gY29udHJvbC5fcGFyZW50LmNvbnRyb2xzW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKGRlcGVuZGVuY3lDb250cm9sKSB7XG4gICAgcmV0dXJuIGRlcGVuZGVudHNTZXR0ZXIoZGVwZW5kZW5jeUNvbnRyb2wsIGNvbnRyb2wpO1xuICB9XG4gIFxuICBkZXBlbmRlbmN5UmVxdWVzdFJlZ2lzdHJhcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyLnRzIiwiaW1wb3J0IGZvcm1EZXBlbmRlbmN5TWFwR2V0dGVyICAgZnJvbSAnLi9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQge19wYXJlbnQsIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBmb3JtRGVwZW5kZW5jeU1hcEdldHRlcihfcGFyZW50KTtcbiAgbGV0IGNvbnRyb2xEZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2NvbnRyb2xOYW1lXTtcbiAgXG4gIGlmKChjb250cm9sRGVwZW5kZW50cyB8fCBbXSkuaW5kZXhPZihkZXBlbmRlbmN5TmFtZSkgPiAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgWyR7Y29udHJvbE5hbWV9XSBhbmQgWyR7ZGVwZW5kZW5jeU5hbWV9XSBkZXBlbmQgb24gZWFjaCBvdGhlcmApO1xuICB9XG4gIFxuICBsZXQgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZighZGVwZW5kZW50cykge1xuICAgIGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbZGVwZW5kZW5jeU5hbWVdID0gW107XG4gIH1cbiAgXG4gIGRlcGVuZGVudHMucHVzaChjb250cm9sTmFtZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXIudHMiLCJpbXBvcnQge2RlcGVuZGVuY3lEZXBlbmRlbnRzTWFwfSBmcm9tICcuLi8uLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBfcGFyZW50ID0+IHtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IGRlcGVuZGVuY3lEZXBlbmRlbnRzTWFwLmdldChfcGFyZW50KTtcbiAgXG4gIGlmKCFmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXApIHtcbiAgICBkZXBlbmRlbmN5RGVwZW5kZW50c01hcC5zZXQoX3BhcmVudCwgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0ge30pO1xuICB9XG4gIFxuICByZXR1cm4gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZXBlbmRlbmN5TmFtZXNUcmFuc2Zvcm1lciBmcm9tICcuL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgZGVwZW5kZW50VHJhY2tlciAgICAgICAgICAgZnJvbSAnLi9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlcic7XG5pbXBvcnQgZGVwZW5kZW50UmVnaXN0cmFyICAgICAgICAgZnJvbSAnLi9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVuY3lOYW1lc1RyYW5zZm9ybWVyKGRlcGVuZGVuY3lOYW1lcywgY29udHJvbCk7XG5cbiAgXy5lYWNoKGRlcGVuZGVuY3lOYW1lcywgZGVwZW5kZW5jeU5hbWUgPT4ge1xuICAgIGRlcGVuZGVudFRyYWNrZXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xuICAgIGRlcGVuZGVudFJlZ2lzdHJhcihkZXBlbmRlbmN5TmFtZSwgY29udHJvbCk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwiaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgZGVwZW5kZW5jeU5hbWVzKSA9PiB7XG4gIGxldCB7Y29udHJvbHN9ID0gY29udHJvbC5fcGFyZW50O1xuICBcbiAgZm9yKGxldCBkZXBlbmRlbmN5TmFtZSBvZiBkZXBlbmRlbmN5TmFtZXMpIHtcbiAgICBsZXQgZGVwZW5kZW5jeUNvbnRyb2wgPSBjb250cm9sc1tkZXBlbmRlbmN5TmFtZV07XG5cbiAgICBpZighZGVwZW5kZW5jeUNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUud2FybihgZGVwZW5kZW5jeSBbJHtkZXBlbmRlbmN5TmFtZX1dIGlzIG5vdCBkZWNsYXJlZGApO1xuICAgIH1cblxuICAgIGlmKCFkZXBlbmRlbmN5Q29udHJvbCB8fCBkZXBlbmRlbmN5Q29udHJvbC5pbnZhbGlkKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy92YWxpZGF0b3IvdmFsaWRhdG9yLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlbWFpbEdvdic7XG5jb25zdCBlbWFpbEdvdlJ4ID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSooXFwuKGdvdnxtaWwpKSQvO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWVtYWlsR292UngudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgbm90IGEgdmFsaWQgZ292ZXJubWVudCBlbWFpbGA7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZW1haWwtZ292L2VtYWlsLWdvdi50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZW1haWwnO1xuY29uc3QgZW1haWxSeCA9IC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqJC87XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wpIHtcbiAgICBpZighZW1haWxSeC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyBub3QgYSB2YWxpZCBlbWFpbGA7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZW1haWwvZW1haWwudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VxdWFsc1RvJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgZXF1YWxzVG8pIHtcbiAgICBsZXQge3ZhbHVlLCBfcGFyZW50fSA9IGNvbnRyb2w7XG4gICAgbGV0IGVxdWFsc1RvQ29udHJvbCA9IF9wYXJlbnQuY29udHJvbHNbZXF1YWxzVG9dO1xuXG4gICAgaWYoIXZhbHVlIHx8IHZhbHVlICE9PSBlcXVhbHNUb0NvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCwgdmFsaWRhdG9yQ29uZmlncykge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lfSBtdXN0IGVxdWFsIHRvICR7dmFsaWRhdG9yQ29uZmlnc31gO1xuICB9LFxuXG4gIHZhbGlkYXRvck5hbWVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VxdWFscy10by9lcXVhbHMtdG8udHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ21heExlbmd0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIGxldCB7dmFsdWV9ID0gY29udHJvbDtcbiAgICBpZighdmFsdWUgfHwgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIG1heExlbmd0aCkge1xuICAgIGlmKCFtYXhMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4aW11bSBsZW5ndGggc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICttYXhMZW5ndGg7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gc2hvdWxkIGJlIGxlc3MgdGhhbiAke21heExlbmd0aH0gY2hhcmFjdGVyc2A7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvbWF4LWxlbmd0aC9tYXgtbGVuZ3RoLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdtaW5MZW5ndGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICBpZihjb250cm9sLnZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBtaW5MZW5ndGgpIHtcbiAgICBpZighbWluTGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbmltdW0gbGVuZ3RoIHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiArbWluTGVuZ3RoO1xuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IHNob3VsZCBiZSAke21pbkxlbmd0aH0gY2hhcmFjdGVyc2A7XG4gIH0sXG4gIFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvbWluLWxlbmd0aC9taW4tbGVuZ3RoLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2YWxpZGF0b3JOYW1lID0gJ3BhdHRlcm4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBwYXR0ZXJuKSB7XG4gICAgaWYoIXBhdHRlcm4udGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBwYXR0ZXJuKSB7XG4gICAgaWYoIXBhdHRlcm4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc3BlY2lmeSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybicpO1xuICAgIH1cbiAgICBcbiAgICBpZihfLmlzU3RyaW5nKHBhdHRlcm4pKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVybn0kYCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3BhdHRlcm4vcGF0dGVybi50cyIsImNvbnN0IGRpcmVjdGl2ZU5hbWUgPSAncmVxdWlyZWQnO1xuY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdyZXF1aXJlZFRydWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoY29udHJvbC52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHtbZGlyZWN0aXZlTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcblxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIHJlcXVpcmVkYDtcbiAgfSxcblxuICBkaXJlY3RpdmVOYW1lLFxuXG4gIHZhbGlkYXRvck5hbWUsXG4gIFxuICBjaGVja2JveDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZS50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAncmVxdWlyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyByZXF1aXJlZGA7XG4gIH0sXG5cbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkL3JlcXVpcmVkLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmNvbnN0IHZhbGlkYXRvck5hbWUgPSAndW5pcXVlQ2hlY2snO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBjb25maWdzKSB7XG4gICAgbGV0IHtmaWVsZE5hbWUsIGlnbm9yZSwgaWdub3JlQ2FzZSwgcGF0aH0gPSBjb25maWdzO1xuICAgIGxldCB7dmFsdWV9ID0gY29udHJvbDtcblxuICAgIGlmKGlnbm9yZUNhc2UpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgXG4gICAgaWYoIXZhbHVlIHx8IGlnbm9yZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKGZpZWxkTmFtZSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnRyb2wuaHR0cC5nZXQocGF0aCwge3BhcmFtc30pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgcmVzb2x2ZShkYXRhLmxlbmd0aCA/IHtbdmFsaWRhdG9yTmFtZV06IHRydWV9IDogbnVsbCk7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBcbiAgcHJlcHJvY2Vzc29yKGNvbnRyb2wsIGNvbmZpZ3MsIGJhc2VDb25maWdzKSB7XG4gICAgaWYoIV8uaXNQbGFpbk9iamVjdChjb25maWdzKSkge1xuICAgICAgY29uZmlncyA9IHtwYXRoOiBjb25maWdzfTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHtmaWVsZE5hbWUsIGlnbm9yZSwgaWdub3JlQ2FzZSwgcGF0aH0gPSBjb25maWdzO1xuICAgIFxuICAgIGlmKGJhc2VDb25maWdzKSB7XG4gICAgICB2YXIge2Jhc2VVcmx9ID0gYmFzZUNvbmZpZ3M7XG4gICAgfVxuICAgIFxuICAgIGlmKCFmaWVsZE5hbWUpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGNvbnRyb2wuY29udHJvbE5hbWU7XG4gICAgfVxuICAgIFxuICAgIGlmKCFpZ25vcmUpIHtcbiAgICAgIGlnbm9yZSA9IFtdO1xuICAgIH0gZWxzZSBpZighXy5pc0FycmF5KGlnbm9yZSkpIHtcbiAgICAgIGlnbm9yZSA9IFtpZ25vcmVdO1xuICAgIH1cbiAgICBcbiAgICBpZihfLmlzVW5kZWZpbmVkKGlnbm9yZUNhc2UpKSB7XG4gICAgICBpZ25vcmVDYXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYoaWdub3JlQ2FzZSkge1xuICAgICAgaWdub3JlID0gaWdub3JlLm1hcChpZ25vcmUgPT4gKGlnbm9yZSArICcnKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgXG4gICAgaWYoYmFzZVVybCkge1xuICAgICAgcGF0aCA9IGJhc2VVcmwgKyBwYXRoO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gXy5leHRlbmQoY29uZmlncywge2ZpZWxkTmFtZSwgaWdub3JlLCBpZ25vcmVDYXNlLCBwYXRofSk7XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgbGV0IHtjb250cm9sTmFtZVByb3Blcn0gPSBjb250cm9sO1xuICAgIHJldHVybiBgVmFsdWUgcHJvdmlkZWQgZm9yICR7Y29udHJvbE5hbWVQcm9wZXJ9IGZpZWxkIGFscmVhZHkgZXhpc3RzYDtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWUsXG4gIFxuICBhc3luYzogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3VuaXF1ZS1jaGVjay91bmlxdWUtY2hlY2sudHMiLCJpbXBvcnQgZGVwc1ZhbGlkYXRvciAgICAgICAgIGZyb20gJy4vZGVwcy9kZXBzJztcbmltcG9ydCBlbWFpbFZhbGlkYXRvciAgICAgICAgZnJvbSAnLi9lbWFpbC9lbWFpbCc7XG5pbXBvcnQgZW1haWxHb3ZWYWxpZGF0b3IgICAgIGZyb20gJy4vZW1haWwtZ292L2VtYWlsLWdvdic7XG5pbXBvcnQgZXF1YWxzVG9WYWxpZGF0b3IgICAgIGZyb20gJy4vZXF1YWxzLXRvL2VxdWFscy10byc7XG5pbXBvcnQgbWF4TGVuZ3RoVmFsaWRhdG9yICAgIGZyb20gJy4vbWF4LWxlbmd0aC9tYXgtbGVuZ3RoJztcbmltcG9ydCBtaW5MZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9taW4tbGVuZ3RoL21pbi1sZW5ndGgnO1xuaW1wb3J0IHBhdHRlcm5WYWxpZGF0b3IgICAgICBmcm9tICcuL3BhdHRlcm4vcGF0dGVybic7XG5pbXBvcnQgcmVxdWlyZWRWYWxpZGF0b3IgICAgIGZyb20gJy4vcmVxdWlyZWQvcmVxdWlyZWQnO1xuaW1wb3J0IHJlcXVpcmVkVHJ1ZVZhbGlkYXRvciBmcm9tICcuL3JlcXVpcmVkLXRydWUvcmVxdWlyZWQtdHJ1ZSc7XG5pbXBvcnQgdW5pcXVlQ2hlY2tWYWxpZGF0b3IgIGZyb20gJy4vdW5pcXVlLWNoZWNrL3VuaXF1ZS1jaGVjayc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgZGVwc1ZhbGlkYXRvcixcbiAgcmVxdWlyZWRWYWxpZGF0b3IsXG4gIG1pbkxlbmd0aFZhbGlkYXRvcixcbiAgbWF4TGVuZ3RoVmFsaWRhdG9yLFxuICBwYXR0ZXJuVmFsaWRhdG9yLFxuICBlbWFpbFZhbGlkYXRvcixcbiAgZW1haWxHb3ZWYWxpZGF0b3IsXG4gIGVxdWFsc1RvVmFsaWRhdG9yLFxuICByZXF1aXJlZFRydWVWYWxpZGF0b3IsXG4gIHVuaXF1ZUNoZWNrVmFsaWRhdG9yXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyIsImV4cG9ydCBkZWZhdWx0IChuYW1lLCBjaGVja2JveCkgPT4ge1xuICBsZXQgY2hlY2tib3hUeXBlID0gJ1t0eXBlPWNoZWNrYm94XSc7XG4gIGxldCBjb250cm9sVHlwZXMgPSBbJ2Zvcm1Db250cm9sTmFtZScsICdmb3JtQ29udHJvbCcsICduZ01vZGVsJ11cbiAgY2hlY2tib3ggPSBjaGVja2JveCA/IGBpbnB1dCR7Y2hlY2tib3hUeXBlfWAgOiBgOm5vdCgke2NoZWNrYm94VHlwZX0pYDtcbiAgXG4gIHJldHVybiBjb250cm9sVHlwZXMucmVkdWNlKChzZWxlY3RvciwgY29udHJvbFR5cGUpID0+IHtcbiAgICBzZWxlY3Rvci5wdXNoKGAke2NoZWNrYm94fVske25hbWV9XVske2NvbnRyb2xUeXBlfV1gKTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH0sIFtdKS5qb2luKCcsJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge05HX1ZBTElEQVRPUlMsIE5HX0FTWU5DX1ZBTElEQVRPUlN9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBzZWxlY3RvckFzc2VtYmxlciAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9fbGliL3NlbGVjdG9yLWFzc2VtYmxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRvcnMgPT4ge1xuICByZXR1cm4gdmFsaWRhdG9ycy5tYXAodmFsaWRhdG9yQ29uZmlndXJhdG9yID0+IHtcbiAgICBsZXQge2FzeW5jOiBfYXN5bmMsIGNoZWNrYm94LCB2YWxpZGF0b3JOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yO1xuICAgIGxldCB7ZGlyZWN0aXZlTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckNvbmZpZ3VyYXRvcjtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZSA9IGRpcmVjdGl2ZU5hbWVQcmVmaXhlZCB8fCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQ7XG4gICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JBc3NlbWJsZXIoZGlyZWN0aXZlTmFtZSwgY2hlY2tib3gpO1xuXG4gICAgbGV0IHByb3ZpZGVycyA9IFt7XG4gICAgICBwcm92aWRlOiBfYXN5bmMgPyBOR19BU1lOQ19WQUxJREFUT1JTIDogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFZhbGlkYXRvckRpcmVjdGl2ZUNsYXNzKSxcbiAgICAgIG11bHRpOiB0cnVlICAgICAgICBcbiAgICB9XTtcbiAgICBcbiAgICBARGlyZWN0aXZlKHtzZWxlY3RvciwgcHJvdmlkZXJzfSkgY2xhc3MgVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3Mge1xuICAgICAgcHJpdmF0ZSB2YWxpZGF0b3I7XG4gICAgICBwcml2YXRlIG9uQ2hhbmdlO1xuICAgICAgcHJpdmF0ZSBjb250cm9sO1xuICAgICAgQElucHV0KGAke2RpcmVjdGl2ZU5hbWV9YCkgcHJpdmF0ZSBjb25maWdzO1xuICAgIFxuICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuICAgIFxuICAgICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZignY29uZmlncycgaW4gY2hhbmdlcykge1xuICAgICAgICAgIGlmKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICB2YWxpZGF0ZShjb250cm9sPykge1xuICAgICAgICBsZXQgZXJyb3IgPSB7W2RpcmVjdGl2ZU5hbWVdOiB0cnVlfTtcbiAgICAgICAgXG4gICAgICAgIGlmKF9hc3luYykge1xuICAgICAgICAgIF8uZXh0ZW5kKGNvbnRyb2wsIHtodHRwOiB0aGlzLmh0dHB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBfLmV4dGVuZCh0aGlzLCB7XG4gICAgICAgICAgY29udHJvbCwgXG4gICAgICAgICAgdmFsaWRhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBfYXN5bmMgPyBQcm9taXNlLnJlc29sdmUoZXJyb3IpIDogZXJyb3I7IFxuICAgICAgfVxuICAgIFxuICAgICAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbikge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47IFxuICAgICAgfVxuICAgIFxuICAgICAgcHJpdmF0ZSBjcmVhdGVWYWxpZGF0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yKHRoaXMuY29udHJvbCwgdGhpcy5jb25maWdzLCB0aGlzLmVsKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3M7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHByZWZpeGVyICAgICAgICAgICAgICBmcm9tICcuLi9fbGliL3ByZWZpeGVyJztcbmltcG9ydCB2YWxpZGF0b3JDb25maWd1cmF0b3IgZnJvbSAnLi4vdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yJztcbmltcG9ydCBkaXJlY3RpdmVzR2VuZXJhdG9yICAgZnJvbSAnLi4vZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRvcnMpID0+IHtcbiAgdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMubWFwKHZhbGlkYXRvciA9PiB7XG4gICAgbGV0IHt2YWxpZGF0b3JOYW1lLCBkaXJlY3RpdmVOYW1lfSA9IHZhbGlkYXRvcjtcbiAgICBsZXQgdmFsaWRhdG9yTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIHZhbGlkYXRvck5hbWUpO1xuICAgIGxldCBkaXJlY3RpdmVOYW1lUHJlZml4ZWQgPSBwcmVmaXhlcihzZXR0aW5ncywgZGlyZWN0aXZlTmFtZSk7XG4gICAgXy5leHRlbmQodmFsaWRhdG9yLCB7dmFsaWRhdG9yTmFtZVByZWZpeGVkLCBkaXJlY3RpdmVOYW1lUHJlZml4ZWR9KTtcbiAgICByZXR1cm4gdmFsaWRhdG9yQ29uZmlndXJhdG9yKHNldHRpbmdzLCB2YWxpZGF0b3IpO1xuICB9KTtcbiAgXG4gIGxldCBkaXJlY3RpdmVzID0gZGlyZWN0aXZlc0dlbmVyYXRvcih2YWxpZGF0b3JzKTtcblxuICBATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IGRpcmVjdGl2ZXMsIFxuICAgIGV4cG9ydHM6IGRpcmVjdGl2ZXNcbiAgfSkgY2xhc3MgVmFsaWRhdG9yTW9kdWxlIHt9XG4gIFxuICByZXR1cm4gVmFsaWRhdG9yTW9kdWxlOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9tb2R1bGUtZ2VuZXJhdG9yL21vZHVsZS1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQXNzaWduZXIgICAgIGZyb20gJy4vbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyJztcbmltcG9ydCBWYWxpZGF0aW9uU3RhdGVyIGZyb20gJy4uLy4uLy4uL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGVsKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgXG4gIGlmKCF2YWxpZGlmeSkge1xuICAgIGVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICBuYW1lQXNzaWduZXIoY29udHJvbCk7XG4gICAgXG4gICAgdmFsaWRpZnkgPSB7XG4gICAgICBlbGVtZW50czoge30sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgdmFsaWRhdGlvblN0YXRlcjogbmV3IFZhbGlkYXRpb25TdGF0ZXIoc2V0dGluZ3MsIGNvbnRyb2wpXG4gICAgfTtcbiAgICBcbiAgICBfLmV4dGVuZChjb250cm9sLCB7dmFsaWRpZnksIGVsLCAkZWw6ICQoZWwpfSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbHN9ID0gY29udHJvbC5fcGFyZW50O1xuICBsZXQgY29udHJvbE5hbWVzID0gXy5rZXlzKGNvbnRyb2xzKTtcbiAgZm9yKGxldCBjb250cm9sTmFtZSBvZiBjb250cm9sTmFtZXMpIHtcbiAgICBpZihjb250cm9sc1tjb250cm9sTmFtZV0gPT09IGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sTmFtZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQWNjZXNzb3IgZnJvbSAnLi9saWIvbmFtZS1hY2Nlc3Nvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIFxuICBpZighY29udHJvbE5hbWUpIHtcbiAgICBjb250cm9sTmFtZSA9IG5hbWVBY2Nlc3Nvcihjb250cm9sKTtcbiAgICBfLmV4dGVuZChjb250cm9sLCB7XG4gICAgICBjb250cm9sTmFtZSxcbiAgICAgIGNvbnRyb2xOYW1lUHJvcGVyOiBfLnVwcGVyRmlyc3QoXy5sb3dlckNhc2UoY29udHJvbE5hbWUpKVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbmFtZS1hc3NpZ25lci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeVJlcXVlc3RzfSBmcm9tICcuLi8uLi8uLi9fbGliL3ZhcnMnO1xuaW1wb3J0IGRlcGVuZGVudHNTZXR0ZXIgICAgIGZyb20gJy4uLy4uLy4uL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7X3BhcmVudCwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHBhcmVudFJlY29yZHMgPSBkZXBlbmRlbmN5UmVxdWVzdHMuZ2V0KF9wYXJlbnQpO1xuICBcbiAgaWYocGFyZW50UmVjb3Jkcykge1xuICAgIGxldCBkZXBlbmRlbnRSZWNvcmRzID0gcGFyZW50UmVjb3Jkc1tjb250cm9sTmFtZV07XG5cbiAgICBpZihkZXBlbmRlbnRSZWNvcmRzKSB7XG4gICAgICBkZXBlbmRlbnRzU2V0dGVyKGNvbnRyb2wsIGRlcGVuZGVudFJlY29yZHMpO1xuICAgICAgZGVsZXRlIHBhcmVudFJlY29yZHNbY29udHJvbE5hbWVdO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciAgICAgICAgIGZyb20gJy4uLy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IGNvbnRhaW5lckFkZGVyICAgICAgICAgIGZyb20gJy4uL19saWIvY29udGFpbmVyLWFkZGVyJztcbmltcG9ydCBBc3luY1Byb2dyZXNzVmlzdWFsaXplciBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGlmeSwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY3MgPSB7fSwgZWxlbWVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighdmFsaWRhdG9yRGVjbGFyYXRpb24uYXN5bmMgfHwgIV8uaXNFbXB0eShhc3luY3MpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBsZXQge2FzeW5jU3RhdHVzSGlkZUNsYXNzLCBzZWxlY3RvcnN9ID0gc2V0dGluZ3M7XG4gIGxldCB7YXN5bmNTdGF0dXNDb250YWluZXJ9ID0gc2VsZWN0b3JzO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICBsZXQgJGFzeW5jc0NvbnRhaW5lciA9ICQoJzxkaXYvPicpO1xuICBsZXQgJHBlbmRpbmcgPSAkKCc8ZGl2Lz4nKTtcbiAgbGV0ICRzdWNjZXNzID0gJCgnPGRpdi8+Jyk7XG5cbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkYXN5bmNzQ29udGFpbmVyLCAnYXN5bmNzLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkcGVuZGluZywgJ2FzeW5jLXBlbmRpbmcnLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJHN1Y2Nlc3MsICdhc3luYy1zdWNjZXNzJywgY29udHJvbE5hbWUpO1xuICBcbiAgJGFzeW5jc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRwZW5kaW5nLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJHN1Y2Nlc3MuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkYXN5bmNzQ29udGFpbmVyLmFwcGVuZCgkcGVuZGluZykuYXBwZW5kKCRzdWNjZXNzKTtcbiAgXG4gIF8uZXh0ZW5kKGFzeW5jcywgeyRhc3luY3NDb250YWluZXIsICRwZW5kaW5nLCAkc3VjY2Vzc30pO1xuICBfLmV4dGVuZCh2YWxpZGlmeSwge2FzeW5jcywgYXN5bmNTdGF0dXNlczoge319KTtcbiAgXG4gIGNvbnRhaW5lckFkZGVyKCRlbCwgJGFzeW5jc0NvbnRhaW5lciwgJGVsQ29udGFpbmVyLCBhc3luY1N0YXR1c0NvbnRhaW5lcik7XG4gIHZhbGlkaWZ5LmFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyID0gbmV3IEFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyKHNldHRpbmdzLCBjb250cm9sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyLnRzIiwiaW1wb3J0IGVycm9yc0NvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyJztcbmltcG9ydCBhc3luY0NvbnRhaW5lckJ1aWxkZXIgIGZyb20gJy4vYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGVycm9yc0NvbnRhaW5lckJ1aWxkZXIoc2V0dGluZ3MsIGNvbnRyb2wpO1xuICBhc3luY0NvbnRhaW5lckJ1aWxkZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciBmcm9tICcuLi8uLi9fbGliL2NsYXNzLWlkLWFzc2lnbmVyJztcbmltcG9ydCBjb250YWluZXJBZGRlciAgZnJvbSAnLi4vX2xpYi9jb250YWluZXItYWRkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHskZWwsIHZhbGlkaWZ5LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQge2VsZW1lbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIV8uaXNFbXB0eShlbGVtZW50cykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGxldCB7ZWxlbWVudENvbnRhaW5lciwgZXJyb3JzQ29udGFpbmVyfSA9IHNldHRpbmdzLnNlbGVjdG9ycztcbiAgbGV0ICRlbENvbnRhaW5lciA9IGVsZW1lbnRDb250YWluZXIgPyAkZWwuY2xvc2VzdChlbGVtZW50Q29udGFpbmVyKSA6ICQoKTtcbiAgbGV0ICRlcnJvcnNDb250YWluZXIgPSAkKCc8ZGl2Lz4nKTtcblxuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbCwgJ2VsJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbENvbnRhaW5lciwgJ2VsLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZXJyb3JzQ29udGFpbmVyLCAnZXJyb3JzLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgXG4gIF8uZXh0ZW5kKGVsZW1lbnRzLCB7JGVsLCAkZWxDb250YWluZXIsICRlcnJvcnNDb250YWluZXJ9KTtcbiAgY29udGFpbmVyQWRkZXIoJGVsLCAkZXJyb3JzQ29udGFpbmVyLCAkZWxDb250YWluZXIsIGVycm9yc0NvbnRhaW5lcik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGVycm9yTWVzc2FnZSwgcHJlZml4KSA9PiB7XG4gIGxldCBnZW5lcmFsQ2xhc3MgPSBwcmVmaXggKyAnLWVycm9yLXdvcmQnO1xuICBcbiAgcmV0dXJuIGVycm9yTWVzc2FnZS5zcGxpdCgvXFxzKy8pLm1hcCgod29yZCwgaW5kZXgpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNDbGFzcyA9IGdlbmVyYWxDbGFzcyArICctJyArIGluZGV4O1xuICAgIHJldHVybiBgPHNwYW4gY2xhc3MgPSBcIiR7Z2VuZXJhbENsYXNzfSAke3NwZWNpZmljQ2xhc3N9XCI+JHt3b3JkfTwvc3Bhbj5gO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvX2xpYi9zcGFubmlmaWVyLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciBmcm9tICcuLi9fbGliL2NsYXNzLWlkLWFzc2lnbmVyJztcbmltcG9ydCBzcGFubmlmaWVyICAgICAgZnJvbSAnLi9fbGliL3NwYW5uaWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkLCBhc3luYzogX2FzeW5jfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge21lc3NhZ2VyfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge2VsZW1lbnRzLCBlcnJvcnN9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgbGV0IGJhc2VFcnJvckNvbmZpZ3MgPSB7JGVsOiAkKCksIF9hc3luYywgdmFsaWRhdG9yTmFtZSwgY29udHJvbH07XG4gIFxuICBpZighbWVzc2FnZXIpIHtcbiAgICByZXR1cm4gZXJyb3JzW3ZhbGlkYXRvck5hbWVdID0gYmFzZUVycm9yQ29uZmlncztcbiAgfVxuICBcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXSB8fCBiYXNlRXJyb3JDb25maWdzO1xuICBsZXQgeyRlbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7dmFsaWRhdG9yOiB2YWxpZGF0b3JDb25maWdzLCBtZXNzYWdlcjogbWVzc2FnZXJDb25maWdzLCBiYXNlQ29uZmlnc30gPSBjb25maWdzO1xuICBsZXQge2Vycm9yTWVzc2FnZUNsYXNzZXMsIHByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IHskZXJyb3JzQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICBsZXQgZXJyb3JNZXNzYWdlciA9IF8uaXNGdW5jdGlvbihtZXNzYWdlcikgPyBtZXNzYWdlciA6ICgpID0+IG1lc3NhZ2VyO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlcihjb250cm9sLCB2YWxpZGF0b3JDb25maWdzLCBtZXNzYWdlckNvbmZpZ3MsIGJhc2VDb25maWdzKTtcbiAgZXJyb3JNZXNzYWdlID0gc3Bhbm5pZmllcihlcnJvck1lc3NhZ2UsIHByZWZpeCk7XG4gIFxuICBpZighJGVsLmxlbmd0aCkge1xuICAgIGxldCBzeW5jQXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYCArIChfYXN5bmMgPyAnYXN5bmMnIDogJ3N5bmMnKTtcbiAgICAkZWwgPSAkKCc8ZGl2Lz4nKTtcbiAgICAkZWwuYWRkQ2xhc3Moc3luY0FzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYXBwZW5kKCRlbCk7XG4gICAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWwsICdlcnJvcicsIHZhbGlkYXRvck5hbWUpO1xuICAgIGVycm9yQ29uZmlncyA9IF8uZXh0ZW5kKGVycm9yQ29uZmlncywgeyRlbH0pO1xuICAgIFxuICAgIGlmKGVycm9yTWVzc2FnZUNsYXNzZXMgJiYgZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbml0aWFsKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbml0aWFsKTtcbiAgICB9XG4gICAgXG4gICAgaWYoX2FzeW5jKSB7XG4gICAgICBlcnJvckNvbmZpZ3MucmVxdWVzdHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgZXJyb3JzW3ZhbGlkYXRvck5hbWVdID0gZXJyb3JDb25maWdzO1xuICB9XG5cbiAgJGVsLmh0bWwoZXJyb3JNZXNzYWdlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHtwcmVwcm9jZXNzb3J9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIFxuICBpZighXy5pc1BsYWluT2JqZWN0KGNvbmZpZ3MpKSB7XG4gICAgY29uZmlncyA9IHt2YWxpZGF0b3I6IGNvbmZpZ3N9O1xuICB9XG4gIFxuICBpZihwcmVwcm9jZXNzb3IpIHtcbiAgICBsZXQge3ZhbGlkYXRvckNvbmZpZ3N9ID0gc2V0dGluZ3M7XG4gICAgXG4gICAgaWYodmFsaWRhdG9yQ29uZmlncykge1xuICAgICAgbGV0IHt2YWxpZGF0b3JOYW1lfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICAgICAgdmFyIGJhc2VDb25maWdzID0gdmFsaWRhdG9yQ29uZmlnc1t2YWxpZGF0b3JOYW1lXTtcbiAgICAgIF8uZXh0ZW5kKGNvbmZpZ3MsIHtiYXNlQ29uZmlnc30pO1xuICAgIH1cblxuICAgIGNvbmZpZ3MudmFsaWRhdG9yID0gcHJlcHJvY2Vzc29yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yLCBiYXNlQ29uZmlncyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlncztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplciBmcm9tICcuLi9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXInO1xuaW1wb3J0IGluaXRpYWxEYXRhU2V0dGVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyJztcbmltcG9ydCByZXF1ZXN0c051bGxpZmllciAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXInO1xuaW1wb3J0IGluaXRpYWxWaXN1YWxpemVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyL2luaXRpYWwtdmlzdWFsaXplcic7XG5pbXBvcnQgZmluYWxEYXRhU2V0dGVyICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvZmluYWwtZGF0YS1zZXR0ZXIvZmluYWwtZGF0YS1zZXR0ZXInO1xuaW1wb3J0IGZpbmFsVmlzdWFsaXplciAgICAgICAgICAgIGZyb20gJy4vZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgaWYoY29udHJvbC52YWxpZFZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9ICAgXG4gIFxuICBsZXQge3ZhbGlkYXRvck5hbWUsIHZhbGlkYXRvck5hbWVQcmVmaXhlZCwgdmFsaWRhdG9yfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIGVycm9ycywgdmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXTtcbiAgbGV0IHZhbGlkYXRpb25JZCA9IF8udW5pcXVlSWQoKTtcblxuICBpZihjb250cm9sLmludmFsaWRWYWx1ZSA9PT0gY29udHJvbC52YWx1ZSkge1xuICAgIGxldCBlcnJvciA9IHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX07XG4gICAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgZXJyb3IpLnZpc3VhbGl6ZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXJyb3IpO1xuICB9XG4gIFxuICBpbml0aWFsRGF0YVNldHRlcihjb250cm9sLCB2YWxpZGF0b3JOYW1lKTtcbiAgcmVxdWVzdHNOdWxsaWZpZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvbklkKTtcbiAgaW5pdGlhbFZpc3VhbGl6ZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSk7XG4gIFxuICBjbGVhclRpbWVvdXQoZXJyb3JDb25maWdzLmFzeW5jRGVib3VuY2VUaW1lb3V0KTtcbiAgXG4gIGVycm9yQ29uZmlncy5hc3luY0RlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmKHZhbGlkaWZ5LnN5bmMpIHtcbiAgICAgIHJldHVybiBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5jb250YWluZXIoZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5wZW5kaW5nKHRydWUpO1xuICAgIFxuICAgIHZhbGlkYXRvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvciwgY29uZmlncy5iYXNlQ29uZmlncykudGhlbih2YWxpZGF0aW9uU3RhdHVzID0+IHtcbiAgICAgIGlmKGVycm9yQ29uZmlncy5yZXF1ZXN0c1t2YWxpZGF0aW9uSWRdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFsaWRhdGlvblN0YXR1cyA9IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKTtcbiAgICAgIGZpbmFsRGF0YVNldHRlcihjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbiwgdmFsaWRhdGlvblN0YXR1cyk7XG4gICAgICBmaW5hbFZpc3VhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpOyAgICAgIFxuICAgIH0pO1xuICB9LCBzZXR0aW5ncy5hc3luY0RlYm91bmNlVGltZSk7XG4gIFxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGxldCB7ZXJyb3JzLCB2YWx1ZSwgdmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1N0YXR1c2VzLCBlcnJvcnM6IF9lcnJvcnN9ID0gdmFsaWRpZnk7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBcbiAgX2Vycm9yc1t2YWxpZGF0b3JOYW1lXS5yZXF1ZXN0cyA9IHt9O1xuICB2YWxpZGlmeS5zeW5jID0gZmFsc2U7XG4gIGFzeW5jU3RhdHVzZXNbdmFsaWRhdG9yTmFtZV0gPSBmYWxzZTtcbiAgXG4gIGlmKCF2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgZXJyb3JzID0gXy5vbWl0KGVycm9ycywgW3ZhbGlkYXRvck5hbWVQcmVmaXhlZF0pO1xuICB9XG4gIFxuICBfLmV4dGVuZChlcnJvcnMsIHZhbGlkYXRpb25TdGF0dXMpO1xuICBcbiAgaWYoXy5pc0VtcHR5KGVycm9ycykpIHtcbiAgICBjb250cm9sLnZhbGlkVmFsdWUgPSB2YWx1ZTtcbiAgICBlcnJvcnMgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBjb250cm9sLmludmFsaWRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIFxuICBjb250cm9sLnNldEVycm9ycyhlcnJvcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmNTdGF0dXNlcyA9PiB7XG4gIHJldHVybiBfLnJlZHVjZShhc3luY1N0YXR1c2VzLCAoY291bnQsIHN0YXR1cykgPT4ge1xuICAgIHJldHVybiBjb3VudCArPSArc3RhdHVzO1xuICB9LCAwKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlci50cyIsImltcG9ydCBhY3RpdmVBc3luY3NDb3VudGVyIGZyb20gJy4vX2xpYi9hY3RpdmUtYXN5bmNzLWNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jU3RhdHVzZXMsIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLCB2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIWFjdGl2ZUFzeW5jc0NvdW50ZXIoYXN5bmNTdGF0dXNlcykpIHtcbiAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5wZW5kaW5nKGZhbHNlKTtcbiAgICBcbiAgICBpZighdmFsaWRhdGlvblN0YXR1cyAmJiBjb250cm9sLnZhbGlkKSB7XG4gICAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5zdWNjZXNzKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3MoZmFsc2UpLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgICB9LCBzZXR0aW5ncy5hc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSkgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG5cbiAgY29udHJvbC52YWxpZFZhbHVlID0gY29udHJvbC5pbnZhbGlkVmFsdWUgPSBudWxsO1xuICB2YWxpZGlmeS5hc3luY1N0YXR1c2VzW3ZhbGlkYXRvck5hbWVdID0gdHJ1ZTtcbiAgdmFsaWRpZnkuc3luYyA9IGZhbHNlOyAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpID0+IHtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgdmFsaWRhdGlvblN0YXRlcn0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5jb250YWluZXIodHJ1ZSkuc3VjY2VzcyhmYWxzZSk7XG4gIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIG51bGwpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uSWQpID0+IHtcbiAgbGV0IHtyZXF1ZXN0c30gPSBjb250cm9sLnZhbGlkaWZ5LmVycm9yc1t2YWxpZGF0b3JOYW1lXTtcblxuICBfLmVhY2gocmVxdWVzdHMsIChyZXF1ZXN0LCBrZXkpID0+IHtcbiAgICByZXF1ZXN0c1trZXldID0gdHJ1ZTtcbiAgfSk7XG4gIFxuICByZXF1ZXN0c1t2YWxpZGF0aW9uSWRdID0gZmFsc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsImltcG9ydCB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplciBmcm9tICcuLi9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHt2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBsZXQge3ZhbGlkYXRvciwgdmFsaWRhdG9yTmFtZX0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHZhbGlkYXRpb25TdGF0dXMgPSB2YWxpZGF0b3IoY29udHJvbCwgY29uZmlncy52YWxpZGF0b3IsIGNvbmZpZ3MuYmFzZUNvbmZpZ3MpO1xuICBcbiAgaWYodmFsaWRhdGlvblN0YXR1cykge1xuICAgIHZhbGlkaWZ5LnN5bmMgPSB0cnVlO1xuICB9XG4gIFxuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKS51cGRhdGVEZXBlbmRlbnRzKCkudmlzdWFsaXplKCk7XG4gIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplcihzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvci50cyIsImltcG9ydCBzeW5jVmFsaWRhdG9yICBmcm9tICcuL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yJztcbmltcG9ydCBhc3luY1ZhbGlkYXRvciBmcm9tICcuL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYodmFsaWRhdG9yRGVjbGFyYXRpb24uYXN5bmMpIHtcbiAgICAgIHJldHVybiBhc3luY1ZhbGlkYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3luY1ZhbGlkYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGF0YUluaXRpYWxpemVyICAgICBmcm9tICcuL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplcic7XG5pbXBvcnQgZGVwZW5kZW50c1JlZ2lzdHJhciBmcm9tICcuL2RlcGVuZGVudHMtcmVnaXN0cmFyL2RlcGVuZGVudHMtcmVnaXN0cmFyJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgZWxlbWVudHNJbml0aWFsaXplciBmcm9tICcuL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyJztcbmltcG9ydCBlcnJvckdlbmVyYXRvciAgICAgIGZyb20gJy4vZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvcic7XG5pbXBvcnQgdmFsaWRhdG9yQnVpbGRlciAgICBmcm9tICcuL3ZhbGlkYXRvci1idWlsZGVyL3ZhbGlkYXRvci1idWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQgZGF0YU5hbWVzID0gWydhc3luYycsICdjaGVja2JveCcsICd2YWxpZGF0b3JOYW1lJywgJ2RpcmVjdGl2ZU5hbWVQcmVmaXhlZCddO1xuICBkYXRhTmFtZXMucHVzaCgndmFsaWRhdG9yTmFtZVByZWZpeGVkJywgJ21lc3NhZ2VyJyk7XG4gIGxldCBzdXBwbGVtZW50YWxEYXRhID0gXy5waWNrKHZhbGlkYXRvckRlY2xhcmF0aW9uLCBkYXRhTmFtZXMpO1xuICBsZXQgY29uZmlndXJhdG9yID0gKGNvbnRyb2wsIGNvbmZpZ3MsIGVsKSA9PiB7XG4gICAgZGF0YUluaXRpYWxpemVyKHNldHRpbmdzLCBjb250cm9sLCBlbCk7XG4gICAgZGVwZW5kZW50c1JlZ2lzdHJhcihjb250cm9sKTtcbiAgICBjb25maWdzID0gcHJlcHJvY2Vzc29yKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgZWxlbWVudHNJbml0aWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIGVycm9yR2VuZXJhdG9yKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgcmV0dXJuIHZhbGlkYXRvckJ1aWxkZXIoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gXy5leHRlbmQoY29uZmlndXJhdG9yLCBzdXBwbGVtZW50YWxEYXRhKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNjdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImZvcm1zXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2Zvcm1zXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2Zvcm1zXCJ9XG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbmdWYWxpZGlmaWVyIGZyb20gJy4vdmFsaWRpZmllci92YWxpZGlmaWVyJztcblxuZXhwb3J0IHtuZ1ZhbGlkaWZpZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25nLXZhbGlkaWZpZXIudHMiXSwic291cmNlUm9vdCI6IiJ9