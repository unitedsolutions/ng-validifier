(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("jquery"), require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "jquery", "@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng-validifier"] = factory(require("lodash"), require("jquery"), require("@angular/core"), require("@angular/forms"));
	else
		root["ng-validifier"] = factory(root["_"], root["$"], root["ng"]["core"], root["ng"]["forms"]);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_vars__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_validators__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_generator_module_generator__ = __webpack_require__(44);




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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (settings, control) {
    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { settings: settings, control: control, state: {} });
};


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_dependents_aggregator__ = __webpack_require__(13);


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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructor_constructor__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_setter_state_setter__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependents_updater_dependents_updater__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer__ = __webpack_require__(20);





__WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](__WEBPACK_IMPORTED_MODULE_1__constructor_constructor__["a" /* default */].prototype, {
    set: __WEBPACK_IMPORTED_MODULE_2__state_setter_state_setter__["a" /* default */],
    updateDependents: __WEBPACK_IMPORTED_MODULE_3__dependents_updater_dependents_updater__["a" /* default */],
    visualize: __WEBPACK_IMPORTED_MODULE_4__visualizer_visualizer__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__constructor_constructor__["a" /* default */];


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (settings, errorConfigs) {
    var delays = settings.errorMessageDelays;
    var _async = errorConfigs._async, status = errorConfigs.status, control = errorConfigs.control;
    var dirty = control.dirty;
    return _async || !dirty ? 0 : status ? delays.invalid : delays.valid;
};;


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_errors_counter__ = __webpack_require__(18);

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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_delay_calculator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_visualizer_errors_visualizer__ = __webpack_require__(19);



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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_validator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messager_messager__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_vars__ = __webpack_require__(5);




/* harmony default export */ __webpack_exports__["a"] = {
    validator: __WEBPACK_IMPORTED_MODULE_0__validator_validator__["a" /* default */],
    preprocessor: __WEBPACK_IMPORTED_MODULE_1__preprocessor_preprocessor__["a" /* default */],
    messager: __WEBPACK_IMPORTED_MODULE_2__messager_messager__["a" /* default */],
    validatorName: __WEBPACK_IMPORTED_MODULE_3__lib_vars__["a" /* validatorName */]
};


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dependency_names_stringifier__ = __webpack_require__(22);

/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    var controlNameProper = control.controlNameProper;
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_dependency_names_stringifier__["a" /* default */])(dependencyNames);
    return controlNameProper + " depends on " + dependencyNames;
};;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dependencyDependentsMap; });
var dependencyDependentsMap = new WeakMap();



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (str, char) {
    var rx = new RegExp("\\s*" + char + "\\s*");
    return str.split(rx).map(function (piece) { return piece.trim(); });
};;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_str_arrayifier__ = __webpack_require__(25);

/* harmony default export */ __webpack_exports__["a"] = function (dependencyNames, control) {
    var controlName = control.controlName;
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_str_arrayifier__["a" /* default */])(dependencyNames, ',');
    if (dependencyNames.indexOf(controlName) !== -1) {
        throw new Error("[" + controlName + "] cannot depend on itself");
    }
    return dependencyNames;
};;


/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dependents_setter_dependents_setter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = function (dependencyName, control) {
    var dependencyControl = control._parent.controls[dependencyName];
    if (dependencyControl) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dependents_setter_dependents_setter__["a" /* default */])(dependencyControl, control);
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__["a" /* default */])(dependencyName, control);
};;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_dependency_map_getter_form_dependency_map_getter__ = __webpack_require__(30);

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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vars__ = __webpack_require__(24);

/* harmony default export */ __webpack_exports__["a"] = function (_parent) {
    var formDependencyDependentsMap = __WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* dependencyDependentsMap */].get(_parent);
    if (!formDependencyDependentsMap) {
        __WEBPACK_IMPORTED_MODULE_0__lib_vars__["a" /* dependencyDependentsMap */].set(_parent, formDependencyDependentsMap = {});
    }
    return formDependencyDependentsMap;
};;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_names_transformer_dependency_names_transformer__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependent_tracker_dependent_tracker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependent_registrar_dependent_registrar__ = __webpack_require__(28);




/* harmony default export */ __webpack_exports__["a"] = function (control, dependencyNames) {
    dependencyNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dependency_names_transformer_dependency_names_transformer__["a" /* default */])(dependencyNames, control);
    __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](dependencyNames, function (dependencyName) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dependent_tracker_dependent_tracker__["a" /* default */])(dependencyName, control);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dependent_registrar_dependent_registrar__["a" /* default */])(dependencyName, control);
    });
    return dependencyNames;
};;


/***/ }),
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deps_deps__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_email__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_gov_email_gov__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equals_to_equals_to__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__max_length_max_length__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__min_length_min_length__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pattern_pattern__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__required_required__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__required_true_required_true__ = __webpack_require__(39);









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
/* 42 */
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_selector_assembler__ = __webpack_require__(42);
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_prefixer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_configurator_validator_configurator__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_generator_directives_generator__ = __webpack_require__(43);
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name_assigner_name_assigner__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staters_validation_stater_validation_stater__ = __webpack_require__(16);




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
/* 46 */
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_name_accessor__ = __webpack_require__(46);


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
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_container_adder__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staters_async_progress_visualizer_async_progress_visualizer__ = __webpack_require__(11);





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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_container_builder_errors_container_builder__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_container_builder_async_container_builder__ = __webpack_require__(49);


/* harmony default export */ __webpack_exports__["a"] = function (settings, control, validatorDeclaration) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__errors_container_builder_errors_container_builder__["a" /* default */])(settings, control);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__async_container_builder_async_container_builder__["a" /* default */])(settings, control, validatorDeclaration);
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
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_class_id_assigner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_spannifier__ = __webpack_require__(52);




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
/* 54 */
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_validation_status_normalizer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initializer_initial_data_setter_initial_data_setter__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initializer_requests_nullifier_requests_nullifier__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initializer_initial_visualizer_initial_visualizer__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finalizer_final_data_setter_final_data_setter__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finalizer_final_visualizer_final_visualizer__ = __webpack_require__(58);







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
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_active_asyncs_counter__ = __webpack_require__(57);

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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var validify = control.validify;
    control.validValue = control.invalidValue = null;
    validify.asyncStatuses[validatorName] = true;
    validify.sync = false;
};;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (control, validatorName) {
    var _a = control.validify, asyncProgressVisualizer = _a.asyncProgressVisualizer, validationStater = _a.validationStater;
    asyncProgressVisualizer.container(true).success(false);
    validationStater.set(validatorName, null).visualize();
};;


/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_validation_status_normalizer__ = __webpack_require__(8);

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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__async_validator_async_validator__ = __webpack_require__(55);


/* harmony default export */ __webpack_exports__["a"] = function (settings, control, configs, validatorDeclaration) {
    return function () {
        if (validatorDeclaration.async) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__async_validator_async_validator__["a" /* default */])(settings, control, configs, validatorDeclaration);
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sync_validator_sync_validator__["a" /* default */])(settings, control, configs, validatorDeclaration);
    };
};;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_initializer_data_initializer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dependents_registrar_dependents_registrar__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocessor_preprocessor__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_initializer_elements_initializer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_generator_error_generator__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator_builder_validator_builder__ = __webpack_require__(63);







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
/* 65 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validifier_validifier__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ngValidifier", function() { return __WEBPACK_IMPORTED_MODULE_0__validifier_validifier__["a"]; });




/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMDg2YzNiMjI2YzhkNDUwMTAwOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL19saWIvcHJlZml4ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9fbGliL2NvbnRhaW5lci1hZGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJjb3JlXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2NvcmVcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvY29yZVwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb3JlXCJ9Iiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkaWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL2RlcGVuZGVudHMtdXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3ZhbGlkYXRpb24tc3RhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvX2xpYi9kZWxheS1jYWxjdWxhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvX2xpYi9lcnJvcnMtY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL2RlcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9fbGliL2RlcGVuZGVuY3ktbmFtZXMtc3RyaW5naWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9tZXNzYWdlci9tZXNzYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9fbGliL3N0ci1hcnJheWlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtcmVnaXN0cmFyL2RlcGVuZGVudC1yZWdpc3RyYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXRyYWNrZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9lbWFpbC1nb3YvZW1haWwtZ292LnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2VtYWlsL2VtYWlsLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2VxdWFscy10by9lcXVhbHMtdG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvbWF4LWxlbmd0aC9tYXgtbGVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL21pbi1sZW5ndGgvbWluLWxlbmd0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9wYXR0ZXJuL3BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3JlcXVpcmVkL3JlcXVpcmVkLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvX2xpYi9zZWxlY3Rvci1hc3NlbWJsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvZGlyZWN0aXZlcy1nZW5lcmF0b3IvZGlyZWN0aXZlcy1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvbW9kdWxlLWdlbmVyYXRvci9tb2R1bGUtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9kYXRhLWluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL2xpYi9uYW1lLWFjY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGF0YS1pbml0aWFsaXplci9uYW1lLWFzc2lnbmVyL25hbWUtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZWxlbWVudHMtaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL19saWIvc3Bhbm5pZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtZGF0YS1zZXR0ZXIvZmluYWwtZGF0YS1zZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvX2xpYi9hY3RpdmUtYXN5bmNzLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyL2luaXRpYWwtdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9yZXF1ZXN0cy1udWxsaWZpZXIvcmVxdWVzdHMtbnVsbGlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1jb25maWd1cmF0b3IudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiZm9ybXNcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImFtZFwiOlwiQGFuZ3VsYXIvZm9ybXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL25nLXZhbGlkaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFD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LEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDdEMsMEdBQWUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLGtIQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sR0FBRyxrR0FBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUMvRCxrSEFBbUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDN0Qsd0dBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyw0R0FBZ0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVFLENBQUMsQ0FBQztJQUVGLE1BQU0sQ0FBQyw4Q0FBUSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xELENBQUMsRUFBQzs7Ozs7OztBQ3RCRixnRDs7Ozs7Ozs7OztBQ0FtRDtBQUU3QiIsImZpbGUiOiJuZy12YWxpZGlmaWVyLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIiwgXCJqcXVlcnlcIiwgXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvZm9ybXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmctdmFsaWRpZmllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmctdmFsaWRpZmllclwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0sIHJvb3RbXCIkXCJdLCByb290W1wibmdcIl1bXCJjb3JlXCJdLCByb290W1wibmdcIl1bXCJmb3Jtc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzY1X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMDg2YzNiMjI2YzhkNDUwMTAwOSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiJFwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGRlcGVuZGVuY3lSZXF1ZXN0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBwcmVmaXg6ICd2JyxcblxuICBzZWxlY3RvcnM6IHtcbiAgICBlbGVtZW50Q29udGFpbmVyOiAnLmZvcm0tZ3JvdXAnLFxuICAgIGVycm9yc0NvbnRhaW5lcjogWydpbnNlcnRBZnRlcicsICdpbnB1dCddLFxuICAgIGFzeW5jU3RhdHVzQ29udGFpbmVyOiBbJ2luc2VydEJlZm9yZScsICdpbnB1dCddXG4gIH0sXG4gIFxuICBlcnJvck1lc3NhZ2VDbGFzc2VzOiB7XG4gICAgaW5pdGlhbDogJycsXG4gICAgdmFsaWQ6ICcnLFxuICAgIGludmFsaWQ6ICcnXG4gIH0sXG5cbiAgZXJyb3JNZXNzYWdlRGVsYXlzOiB7XG4gICAgdmFsaWQ6IDMwMCxcbiAgICBpbnZhbGlkOiA1MDBcbiAgfSxcblxuICBhc3luY0RlYm91bmNlVGltZTogNTAwLFxuXG4gIGFzeW5jU3RhdHVzSGlkZUNsYXNzOiAnaGlkZGVuJyxcbiAgXG4gIGFzeW5jU3VjY2Vzc01lc3NhZ2VEdXJhdGlvbjogMTAwMFxufTtcblxuZXhwb3J0IHtcbiAgZGVwZW5kZW5jeVJlcXVlc3RzLCBcbiAgc2V0dGluZ3Ncbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2xpYi92YXJzLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCAkZWwsIGJhc2VDbGFzcywgY29udHJvbE5hbWUpID0+IHtcbiAgbGV0IHtwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgYCR7YmFzZUNsYXNzfS0ke2NvbnRyb2xOYW1lfWBdO1xuICBsZXQgY2xhc3Nlc1N0ciA9IGNsYXNzZXMubWFwKGtsYXNzID0+IGAke3ByZWZpeH0tJHtrbGFzc31gKS5qb2luKCcgJyk7XG4gICRlbC5hZGRDbGFzcyhjbGFzc2VzU3RyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBuZXdEZXBlbmRlbnRzKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHtkZXBlbmRlbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIV8uaXNBcnJheShuZXdEZXBlbmRlbnRzKSkge1xuICAgIG5ld0RlcGVuZGVudHMgPSBbbmV3RGVwZW5kZW50c107XG4gIH1cbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgXy5zZXQodmFsaWRpZnksICdkZXBlbmRlbnRzJywgZGVwZW5kZW50cyA9IFtdKTtcbiAgfVxuICBcbiAgZGVwZW5kZW50cy5wdXNoKC4uLm5ld0RlcGVuZGVudHMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZXBlbmRlbnRzLXNldHRlci9kZXBlbmRlbnRzLXNldHRlci50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZGVwcyc7XG5jb25zdCBkZXBlbmRlbmNpZXNUYWJsZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCB7XG4gIHZhbGlkYXRvck5hbWUsXG4gIGRlcGVuZGVuY2llc1RhYmxlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9fbGliL3ZhcnMudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgbmFtZSkgPT4ge1xuICBsZXQge3ByZWZpeH0gPSBzZXR0aW5ncztcbiAgXG4gIGlmKHByZWZpeCAmJiBuYW1lKSB7XG4gICAgbmFtZSA9IHByZWZpeCArIF8udXBwZXJGaXJzdChuYW1lKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5hbWU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvX2xpYi9wcmVmaXhlci50cyIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgKCRlbCwgJGNvbnRhaW5lciwgJGNvbnRhaW5lckNvbnRhaW5lciwgaW5zZXJ0aW9uU3BlYykgPT4ge1xuICBsZXQgW2FjdGlvbiwgJGluc2VydGlvblBvaW50XSA9ICgoKSA9PiB7XG4gICAgaWYoISRjb250YWluZXJDb250YWluZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gWydpbnNlcnRBZnRlcicsICRlbF07XG4gICAgfVxuICAgIFxuICAgIGxldCBbYWN0aW9uLCBhbmNob3JdID0gaW5zZXJ0aW9uU3BlYztcbiAgICBsZXQgJGluc2VydGlvblBvaW50ID0gKCgpID0+IHtcbiAgICAgIGlmKCFhbmNob3IpIHtcbiAgICAgICAgcmV0dXJuICRjb250YWluZXJDb250YWluZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiAkKGFuY2hvciwgJGNvbnRhaW5lckNvbnRhaW5lcik7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiBbYWN0aW9uLCAkaW5zZXJ0aW9uUG9pbnRdO1xuICB9KSgpO1xuICBcbiAgJGNvbnRhaW5lclthY3Rpb25dKCRpbnNlcnRpb25Qb2ludCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9fbGliL2NvbnRhaW5lci1hZGRlci50cyIsImltcG9ydCAqIGFzIF8gICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4uLy4uLy4uL19saWIvcHJlZml4ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgaWYoXy5pc1BsYWluT2JqZWN0KHZhbGlkYXRpb25TdGF0dXMpKSB7XG4gICAgbGV0IGtleSA9IF8ua2V5cyh2YWxpZGF0aW9uU3RhdHVzKVswXTtcbiAgICBsZXQgdmFsdWUgPSB2YWxpZGF0aW9uU3RhdHVzW2tleV07XG4gICAga2V5ID0gcHJlZml4ZXIoc2V0dGluZ3MsIGtleSk7XG4gICAgdmFsaWRhdGlvblN0YXR1cyA9IHtba2V5XTogdmFsdWV9O1xuICB9XG4gIFxuICByZXR1cm4gdmFsaWRhdGlvblN0YXR1cztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJjb3JlXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2NvcmVcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvY29yZVwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb3JlXCJ9XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtzZXR0aW5ncyBhcyBtYWluU2V0dGluZ3N9IGZyb20gJy4uL19saWIvdmFycyc7XG5pbXBvcnQgaW50ZXJuYWxWYWxpZGF0b3JzICAgICAgICAgZnJvbSAnLi4vdmFsaWRhdG9ycy92YWxpZGF0b3JzJztcbmltcG9ydCBtb2R1bGVHZW5lcmF0b3IgICAgICAgICAgICBmcm9tICcuL21vZHVsZS1nZW5lcmF0b3IvbW9kdWxlLWdlbmVyYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgdmFsaWRhdG9ycyA9IFtdKSA9PiB7XG4gIHNldHRpbmdzID0gXy5leHRlbmQoe30sIG1haW5TZXR0aW5ncywgc2V0dGluZ3MpO1xuICB2YWxpZGF0b3JzLnB1c2goLi4uaW50ZXJuYWxWYWxpZGF0b3JzKTtcbiAgcmV0dXJuIG1vZHVsZUdlbmVyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9ycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRpZmllci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBwcml2YXRlIGhpZGRlbkNsYXNzO1xuICBwcml2YXRlIGFzeW5jcztcbiAgcHJpdmF0ZSAkZWw7XG4gIHByaXZhdGUgJGVsQ29udGFpbmVyO1xuICBwcml2YXRlIHBlbmRpbmdDbGFzcztcbiAgXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBjb250cm9sKSB7XG4gICAgbGV0IHthc3luY3MsIGVsZW1lbnRzfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gICAgbGV0IHskZWwsICRlbENvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgICBsZXQgcGVuZGluZ0NsYXNzID0gYCR7c2V0dGluZ3MucHJlZml4fS1hc3luYy1wZW5kaW5nYDtcbiAgICBcbiAgICBfLmV4dGVuZCh0aGlzLCB7XG4gICAgICAkZWwsICRlbENvbnRhaW5lciwgYXN5bmNzLCBwZW5kaW5nQ2xhc3MsXG4gICAgICBoaWRkZW5DbGFzczogc2V0dGluZ3MuYXN5bmNTdGF0dXNIaWRlQ2xhc3NcbiAgICB9KTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBkaXNwbGF5KHR5cGUsIG9uKSB7XG4gICAgbGV0IG1ldGhvZCA9IG9uID8gJ3JlbW92ZUNsYXNzJzogJ2FkZENsYXNzJztcbiAgICB0aGlzLmFzeW5jc1snJCcgKyB0eXBlXVttZXRob2RdKHRoaXMuaGlkZGVuQ2xhc3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIFxuICBwcml2YXRlIGNsYXNzT3BlcmF0b3Iob3BlcmF0aW9uKSB7XG4gICAgbGV0IHskZWwsICRlbENvbnRhaW5lciwgcGVuZGluZ0NsYXNzfSA9IHRoaXM7XG4gICAgJGVsW29wZXJhdGlvbl0ocGVuZGluZ0NsYXNzKTtcbiAgICAkZWxDb250YWluZXJbb3BlcmF0aW9uXShwZW5kaW5nQ2xhc3MpO1xuICB9XG4gIFxuICBjb250YWluZXIob24pIHtcbiAgICBpZihvbikge1xuICAgICAgdGhpcy5jbGFzc09wZXJhdG9yKCdhZGRDbGFzcycpOyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGVuZGluZyhvbikuc3VjY2Vzcyhvbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzLmRpc3BsYXkoJ2FzeW5jc0NvbnRhaW5lcicsIG9uKTtcbiAgfVxuICBcbiAgcGVuZGluZyhvbikge1xuICAgIGlmKCFvbikge1xuICAgICAgdGhpcy5jbGFzc09wZXJhdG9yKCdyZW1vdmVDbGFzcycpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5KCdwZW5kaW5nJywgb24pO1xuICB9XG4gIFxuICBzdWNjZXNzKG9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheSgnc3VjY2VzcycsIG9uKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXR0aW5ncywgY29udHJvbCkge1xuICBfLmV4dGVuZCh0aGlzLCB7c2V0dGluZ3MsIGNvbnRyb2wsIHN0YXRlOiB7fX0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvX2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yLnRzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVwZW5kZW50c0FnZ3JlZ2F0b3IoY29udHJvbCwgYWxsID0gW10pIHtcbiAgbGV0IHtkZXBlbmRlbnRzID0gW119ID0gY29udHJvbC52YWxpZGlmeTtcbiAgXG4gIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMpIHtcbiAgICBpZihhbGwuaW5kZXhPZihkZXBlbmRlbnQpID09PSAtMSkge1xuICAgICAgYWxsLnB1c2goZGVwZW5kZW50KTtcbiAgICAgIGRlcGVuZGVudHNBZ2dyZWdhdG9yKGRlcGVuZGVudCwgYWxsKTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBhbGw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvX2xpYi9kZXBlbmRlbnRzLWFnZ3JlZ2F0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkZXBlbmRlbnRzQWdncmVnYXRvciBmcm9tICcuL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCB7c2lsZW50LCBkZXBlbmRlbnRzLCBjb250cm9sfSA9IHRoaXM7XG4gIFxuICBpZighc2lsZW50KSB7XG4gICAgaWYoIWNvbnRyb2wudmFsaWRpZnkuaWdub3JlRGVwZW5kZW50cykge1xuICAgICAgZGVwZW5kZW50cyA9IGRlcGVuZGVudHNBZ2dyZWdhdG9yKGNvbnRyb2wpO1xuICAgICAgZm9yKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBfLmV4dGVuZChkZXBlbmRlbnQudmFsaWRpZnksIHtzaWxlbnQ6IHRydWUsIGlnbm9yZURlcGVuZGVudHM6IHRydWV9KTtcbiAgICAgICAgICBkZXBlbmRlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXy5leHRlbmQodGhpcywge2RlcGVuZGVudHN9KTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL2RlcGVuZGVudHMtdXBkYXRlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykge1xuICBsZXQge3NpbGVudCwgZXJyb3JzfSA9IHRoaXMuY29udHJvbC52YWxpZGlmeTtcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXTtcbiAgXG4gIF8uZXh0ZW5kKHRoaXMsIHtzaWxlbnQsIGRlcGVuZGVudHM6IHVuZGVmaW5lZH0pO1xuICBlcnJvckNvbmZpZ3Muc3RhdHVzID0gdmFsaWRhdGlvblN0YXR1cztcbiAgXG4gIGlmKCFzaWxlbnQpIHtcbiAgICBfLmV4dGVuZCh0aGlzLCB7ZXJyb3JDb25maWdzfSk7XG4gIH1cbiAgXG4gIHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvc3RhdGUtc2V0dGVyL3N0YXRlLXNldHRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IF9jb25zdHJ1Y3RvciAgICAgIGZyb20gJy4vX2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yJztcbmltcG9ydCBzdGF0ZVNldHRlciAgICAgICBmcm9tICcuL3N0YXRlLXNldHRlci9zdGF0ZS1zZXR0ZXInO1xuaW1wb3J0IGRlcGVuZGVudHNVcGRhdGVyIGZyb20gJy4vZGVwZW5kZW50cy11cGRhdGVyL2RlcGVuZGVudHMtdXBkYXRlcic7XG5pbXBvcnQgdmlzdWFsaXplciAgICAgICAgZnJvbSAnLi92aXN1YWxpemVyL3Zpc3VhbGl6ZXInO1xuXG5fLmV4dGVuZChfY29uc3RydWN0b3IucHJvdG90eXBlLCB7XG4gIHNldDogc3RhdGVTZXR0ZXIsXG4gIHVwZGF0ZURlcGVuZGVudHM6IGRlcGVuZGVudHNVcGRhdGVyLFxuICB2aXN1YWxpemU6IHZpc3VhbGl6ZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBfY29uc3RydWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92YWxpZGF0aW9uLXN0YXRlci50cyIsImV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgZXJyb3JDb25maWdzKSA9PiB7XG4gIGxldCB7ZXJyb3JNZXNzYWdlRGVsYXlzOiBkZWxheXN9ID0gc2V0dGluZ3M7XG4gIGxldCB7X2FzeW5jLCBzdGF0dXMsIGNvbnRyb2x9ID0gZXJyb3JDb25maWdzO1xuICBsZXQge2RpcnR5fSA9IGNvbnRyb2w7XG4gIHJldHVybiBfYXN5bmMgfHwgIWRpcnR5ID8gMCA6IHN0YXR1cyA/IGRlbGF5cy5pbnZhbGlkIDogZGVsYXlzLnZhbGlkO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvX2xpYi9kZWxheS1jYWxjdWxhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsICRlbCkgPT4ge1xuICBsZXQgY2xhc3NlcyA9ICRlbC5hdHRyKCdjbGFzcycpO1xuICBcbiAgaWYoY2xhc3Nlcykge1xuICAgIGNsYXNzZXMgPSBjbGFzc2VzLnNwbGl0KC9cXHMrLyk7XG4gIH1cblxuICByZXR1cm4gXy5yZWR1Y2UoY2xhc3NlcywgKGNvdW50LCBrbGFzcykgPT4ge1xuICAgIGlmKGtsYXNzLnN0YXJ0c1dpdGgoYCR7c2V0dGluZ3MucHJlZml4fS1lcnJvcmApKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY291bnQ7XG4gIH0sIDApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvX2xpYi9lcnJvcnMtY291bnRlci50cyIsImltcG9ydCBlcnJvcnNDb3VudGVyIGZyb20gJy4vX2xpYi9lcnJvcnMtY291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgZXJyb3JDb25maWdzKSA9PiB7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgc3RhdHVzOiB2YWxpZGF0aW9uU3RhdHVzfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHskZWw6ICRlcnJvckVsLCBfYXN5bmMsIGNvbnRyb2x9ID0gZXJyb3JDb25maWdzO1xuICBsZXQge2Vycm9yTWVzc2FnZUNsYXNzZXMsIHByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IHtkaXJ0eSwgdmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHskZWwsICRlbENvbnRhaW5lciwgJGVycm9yc0NvbnRhaW5lcn0gPSB2YWxpZGlmeS5lbGVtZW50cztcbiAgbGV0IGVycm9yQ2xhc3MgPSBgJHtwcmVmaXh9LWVycm9yLSR7dmFsaWRhdG9yTmFtZX1gO1xuICBsZXQgc3luY0NsYXNzID0gYCR7cHJlZml4fS1zeW5jYDtcbiAgbGV0IGFzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LWFzeW5jYDtcbiAgXG4gIGlmKGRpcnR5KSB7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy1wcmlzdGluZScpLmFkZENsYXNzKCduZy1kaXJ0eScpO1xuICB9IGVsc2Uge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcygnbmctcHJpc3RpbmUnKTtcbiAgfVxuXG4gIGlmKF9hc3luYykge1xuICAgICRlbENvbnRhaW5lci5hZGRDbGFzcyhhc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYWRkQ2xhc3MoYXN5bmNDbGFzcykucmVtb3ZlQ2xhc3Moc3luY0NsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICAkZWxDb250YWluZXIuYWRkQ2xhc3Moc3luY0NsYXNzKS5yZW1vdmVDbGFzcyhhc3luY0NsYXNzKTtcbiAgICAkZXJyb3JzQ29udGFpbmVyLmFkZENsYXNzKHN5bmNDbGFzcykucmVtb3ZlQ2xhc3MoYXN5bmNDbGFzcyk7XG4gIH1cblxuICBpZih2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgJGVsLmFkZENsYXNzKGVycm9yQ2xhc3MpO1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcygnbmctdmFsaWQnKS5hZGRDbGFzcygnbmctaW52YWxpZCcpLmFkZENsYXNzKGVycm9yQ2xhc3MpO1xuICAgICRlcnJvckVsLnJlbW92ZUNsYXNzKCduZy12YWxpZCcpLnJlbW92ZUNsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMudmFsaWQpO1xuICAgIHJldHVybiAkZXJyb3JFbC5hZGRDbGFzcygnbmctaW52YWxpZCcpLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMuaW52YWxpZCk7XG4gIH1cbiAgXG4gICRlcnJvckVsLnJlbW92ZUNsYXNzKCduZy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbnZhbGlkKTtcbiAgJGVycm9yRWwuYWRkQ2xhc3MoJ25nLXZhbGlkJykuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy52YWxpZCk7XG4gICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKTtcbiAgJGVsLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xuXG4gIGlmKCFlcnJvcnNDb3VudGVyKHNldHRpbmdzLCAkZWxDb250YWluZXIpKSB7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKCduZy1pbnZhbGlkJykuYWRkQ2xhc3MoJ25nLXZhbGlkJyk7XG4gICAgJGVsQ29udGFpbmVyLnJlbW92ZUNsYXNzKF9hc3luYyA/IGFzeW5jQ2xhc3MgOiBzeW5jQ2xhc3MpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVsYXlDYWxjdWxhdG9yICBmcm9tICcuL19saWIvZGVsYXktY2FsY3VsYXRvcic7XG5pbXBvcnQgZXJyb3JzVmlzdWFsaXplciBmcm9tICcuL2Vycm9ycy12aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGlmKCF0aGlzLnNpbGVudCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IHtjb250cm9sLCBkZXBlbmRlbnRzID0gW10sIGVycm9yQ29uZmlnc30gPSB0aGlzO1xuICAgICAgbGV0IGRlbGF5ID0gZGVsYXlDYWxjdWxhdG9yKHRoaXMuc2V0dGluZ3MsIGVycm9yQ29uZmlncyk7XG4gICAgICBcbiAgICAgIGNsZWFyVGltZW91dChlcnJvckNvbmZpZ3MudmlzdWFsaXphdGlvblRpbWVvdXQpO1xuICAgICAgXG4gICAgICBlcnJvckNvbmZpZ3MudmlzdWFsaXphdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGVwZW5kZW50cy51bnNoaWZ0KGNvbnRyb2wpO1xuICAgICAgICBfLmVhY2goZGVwZW5kZW50cywgY29udHJvbCA9PiB7XG4gICAgICAgICAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICAgICAgICAgIFxuICAgICAgICAgIF8uZXh0ZW5kKHZhbGlkaWZ5LCB7c2lsZW50OiBmYWxzZSwgaWdub3JlRGVwZW5kZW50czogZmFsc2V9KTtcbiAgICAgICAgICBfLmVhY2godmFsaWRpZnkuZXJyb3JzLCBfLnBhcnRpYWwoZXJyb3JzVmlzdWFsaXplciwgdGhpcy5zZXR0aW5ncywgXykpO1xuICAgICAgICB9KVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL3Zpc3VhbGl6ZXIudHMiLCJpbXBvcnQgdmFsaWRhdG9yICAgICAgIGZyb20gJy4vdmFsaWRhdG9yL3ZhbGlkYXRvcic7XG5pbXBvcnQgcHJlcHJvY2Vzc29yICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgbWVzc2FnZXIgICAgICAgIGZyb20gJy4vbWVzc2FnZXIvbWVzc2FnZXInO1xuaW1wb3J0IHt2YWxpZGF0b3JOYW1lfSBmcm9tICcuL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yLFxuICBwcmVwcm9jZXNzb3IsXG4gIG1lc3NhZ2VyLFxuICB2YWxpZGF0b3JOYW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9kZXBzLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBkZXBlbmRlbmN5TmFtZXMgPT4ge1xuICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzLm1hcChkZXBlbmRlbmN5TmFtZSA9PiB7XG4gICAgcmV0dXJuIF8udXBwZXJGaXJzdChfLmxvd2VyQ2FzZShkZXBlbmRlbmN5TmFtZSkpO1xuICB9KS5qb2luKCcsICcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyLnRzIiwiaW1wb3J0IGRlcGVuZGVuY3lOYW1lc1N0cmluZ2lmaWVyIGZyb20gJy4vX2xpYi9kZXBlbmRlbmN5LW5hbWVzLXN0cmluZ2lmaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGRlcGVuZGVuY3lOYW1lcykgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lUHJvcGVyfSA9IGNvbnRyb2w7XG4gIGRlcGVuZGVuY3lOYW1lcyA9IGRlcGVuZGVuY3lOYW1lc1N0cmluZ2lmaWVyKGRlcGVuZGVuY3lOYW1lcyk7XG4gIHJldHVybiBgJHtjb250cm9sTmFtZVByb3Blcn0gZGVwZW5kcyBvbiAke2RlcGVuZGVuY3lOYW1lc31gO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvbWVzc2FnZXIvbWVzc2FnZXIudHMiLCJjb25zdCBkZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCB7ZGVwZW5kZW5jeURlcGVuZGVudHNNYXB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvX2xpYi92YXJzLnRzIiwiZXhwb3J0IGRlZmF1bHQgKHN0ciwgY2hhcikgPT4ge1xuICBsZXQgcnggPSBuZXcgUmVnRXhwKGBcXFxccyoke2NoYXJ9XFxcXHMqYCk7XG4gIHJldHVybiBzdHIuc3BsaXQocngpLm1hcChwaWVjZSA9PiBwaWVjZS50cmltKCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvX2xpYi9zdHItYXJyYXlpZmllci50cyIsImltcG9ydCBzdHJBcnJheWlmaWVyIGZyb20gJy4vX2xpYi9zdHItYXJyYXlpZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZXMsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHtjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBkZXBlbmRlbmN5TmFtZXMgPSBzdHJBcnJheWlmaWVyKGRlcGVuZGVuY3lOYW1lcywgJywnKTtcbiAgaWYoZGVwZW5kZW5jeU5hbWVzLmluZGV4T2YoY29udHJvbE5hbWUpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgWyR7Y29udHJvbE5hbWV9XSBjYW5ub3QgZGVwZW5kIG9uIGl0c2VsZmApO1xuICB9XG4gIHJldHVybiBkZXBlbmRlbmN5TmFtZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyLnRzIiwiaW1wb3J0IHtkZXBlbmRlbmN5UmVxdWVzdHN9IGZyb20gJy4uLy4uLy4uLy4uLy4uL19saWIvdmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChkZXBlbmRlbmN5TmFtZSwgY29udHJvbCkgPT4ge1xuICBsZXQge19wYXJlbnR9ID0gY29udHJvbDtcbiAgbGV0IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHMgPSBkZXBlbmRlbmN5UmVxdWVzdHMuZ2V0KF9wYXJlbnQpO1xuICAgIFxuICBpZighZm9ybURlcGVuZGVuY3lSZXF1ZXN0cykge1xuICAgIGRlcGVuZGVuY3lSZXF1ZXN0cy5zZXQoX3BhcmVudCwgZm9ybURlcGVuZGVuY3lSZXF1ZXN0cyA9IHt9KTtcbiAgfVxuICBcbiAgbGV0IGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzW2RlcGVuZGVuY3lOYW1lXTtcbiAgXG4gIGlmKCFkZXBlbmRlbnRzKSB7XG4gICAgZGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5UmVxdWVzdHNbZGVwZW5kZW5jeU5hbWVdID0gW107XG4gIH1cbiAgXG4gIGRlcGVuZGVudHMucHVzaChjb250cm9sKTsgICAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyL2RlcGVuZGVuY3ktcmVxdWVzdC1yZWdpc3RyYXIudHMiLCJpbXBvcnQgZGVwZW5kZW50c1NldHRlciAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vZGVwZW5kZW50cy1zZXR0ZXIvZGVwZW5kZW50cy1zZXR0ZXInO1xuaW1wb3J0IGRlcGVuZGVuY3lSZXF1ZXN0UmVnaXN0cmFyIGZyb20gJy4vZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCBkZXBlbmRlbmN5Q29udHJvbCA9IGNvbnRyb2wuX3BhcmVudC5jb250cm9sc1tkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZihkZXBlbmRlbmN5Q29udHJvbCkge1xuICAgIHJldHVybiBkZXBlbmRlbnRzU2V0dGVyKGRlcGVuZGVuY3lDb250cm9sLCBjb250cm9sKTtcbiAgfVxuICBcbiAgZGVwZW5kZW5jeVJlcXVlc3RSZWdpc3RyYXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW50LXJlZ2lzdHJhci50cyIsImltcG9ydCBmb3JtRGVwZW5kZW5jeU1hcEdldHRlciAgIGZyb20gJy4vZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHtfcGFyZW50LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gZm9ybURlcGVuZGVuY3lNYXBHZXR0ZXIoX3BhcmVudCk7XG4gIGxldCBjb250cm9sRGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtjb250cm9sTmFtZV07XG4gIFxuICBpZigoY29udHJvbERlcGVuZGVudHMgfHwgW10pLmluZGV4T2YoZGVwZW5kZW5jeU5hbWUpID4gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske2NvbnRyb2xOYW1lfV0gYW5kIFske2RlcGVuZGVuY3lOYW1lfV0gZGVwZW5kIG9uIGVhY2ggb3RoZXJgKTtcbiAgfVxuICBcbiAgbGV0IGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2RlcGVuZGVuY3lOYW1lXSA9IFtdO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goY29udHJvbE5hbWUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwiaW1wb3J0IHtkZXBlbmRlbmN5RGVwZW5kZW50c01hcH0gZnJvbSAnLi4vLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgX3BhcmVudCA9PiB7XG4gIGxldCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBkZXBlbmRlbmN5RGVwZW5kZW50c01hcC5nZXQoX3BhcmVudCk7XG4gIFxuICBpZighZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwKSB7XG4gICAgZGVwZW5kZW5jeURlcGVuZGVudHNNYXAuc2V0KF9wYXJlbnQsIGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IHt9KTtcbiAgfVxuICBcbiAgcmV0dXJuIGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcDtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVwZW5kZW5jeU5hbWVzVHJhbnNmb3JtZXIgZnJvbSAnLi9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXInO1xuaW1wb3J0IGRlcGVuZGVudFRyYWNrZXIgICAgICAgICAgIGZyb20gJy4vZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXInO1xuaW1wb3J0IGRlcGVuZGVudFJlZ2lzdHJhciAgICAgICAgIGZyb20gJy4vZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGRlcGVuZGVuY3lOYW1lcykgPT4ge1xuICBkZXBlbmRlbmN5TmFtZXMgPSBkZXBlbmRlbmN5TmFtZXNUcmFuc2Zvcm1lcihkZXBlbmRlbmN5TmFtZXMsIGNvbnRyb2wpO1xuXG4gIF8uZWFjaChkZXBlbmRlbmN5TmFtZXMsIGRlcGVuZGVuY3lOYW1lID0+IHtcbiAgICBkZXBlbmRlbnRUcmFja2VyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbiAgICBkZXBlbmRlbnRSZWdpc3RyYXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsImltcG9ydCB7dmFsaWRhdG9yTmFtZX0gZnJvbSAnLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGRlcGVuZGVuY3lOYW1lcykgPT4ge1xuICBsZXQge2NvbnRyb2xzfSA9IGNvbnRyb2wuX3BhcmVudDtcbiAgXG4gIGZvcihsZXQgZGVwZW5kZW5jeU5hbWUgb2YgZGVwZW5kZW5jeU5hbWVzKSB7XG4gICAgbGV0IGRlcGVuZGVuY3lDb250cm9sID0gY29udHJvbHNbZGVwZW5kZW5jeU5hbWVdO1xuXG4gICAgaWYoIWRlcGVuZGVuY3lDb250cm9sKSB7XG4gICAgICBjb25zb2xlLndhcm4oYGRlcGVuZGVuY3kgWyR7ZGVwZW5kZW5jeU5hbWV9XSBpcyBub3QgZGVjbGFyZWRgKTtcbiAgICB9XG5cbiAgICBpZighZGVwZW5kZW5jeUNvbnRyb2wgfHwgZGVwZW5kZW5jeUNvbnRyb2wuaW52YWxpZCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZW1haWxHb3YnO1xuY29uc3QgZW1haWxHb3ZSeCA9IC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqKFxcLihnb3Z8bWlsKSkkLztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFlbWFpbEdvdlJ4LnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIG5vdCBhIHZhbGlkIGdvdmVybm1lbnQgZW1haWxgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VtYWlsLWdvdi9lbWFpbC1nb3YudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VtYWlsJztcbmNvbnN0IGVtYWlsUnggPSAvXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKFxcLlstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSspKkBbQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KFxcLltBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8pKiQvO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWVtYWlsUngudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgbm90IGEgdmFsaWQgZW1haWxgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VtYWlsL2VtYWlsLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlcXVhbHNUbyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIGVxdWFsc1RvKSB7XG4gICAgbGV0IHt2YWx1ZSwgX3BhcmVudH0gPSBjb250cm9sO1xuICAgIGxldCBlcXVhbHNUb0NvbnRyb2wgPSBfcGFyZW50LmNvbnRyb2xzW2VxdWFsc1RvXTtcblxuICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZSAhPT0gZXF1YWxzVG9Db250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIHZhbGlkYXRvckNvbmZpZ3MpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZX0gbXVzdCBlcXVhbCB0byAke3ZhbGlkYXRvckNvbmZpZ3N9YDtcbiAgfSxcblxuICB2YWxpZGF0b3JOYW1lXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdtYXhMZW5ndGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICBsZXQge3ZhbHVlfSA9IGNvbnRyb2w7XG4gICAgaWYoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICBpZighbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21heGltdW0gbGVuZ3RoIHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiArbWF4TGVuZ3RoO1xuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IHNob3VsZCBiZSBsZXNzIHRoYW4gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnNgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnbWluTGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgaWYoIW1pbkxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW5pbXVtIGxlbmd0aCBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gK21pbkxlbmd0aDtcbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBzaG91bGQgYmUgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnNgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL21pbi1sZW5ndGgvbWluLWxlbmd0aC50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdwYXR0ZXJuJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgcGF0dGVybikge1xuICAgIGlmKCFwYXR0ZXJuLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgcGF0dGVybikge1xuICAgIGlmKCFwYXR0ZXJuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NwZWNpZnkgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4nKTtcbiAgICB9XG4gICAgXG4gICAgaWYoXy5pc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm59JGApO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9wYXR0ZXJuL3BhdHRlcm4udHMiLCJjb25zdCBkaXJlY3RpdmVOYW1lID0gJ3JlcXVpcmVkJztcbmNvbnN0IHZhbGlkYXRvck5hbWUgPSAncmVxdWlyZWRUcnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKGNvbnRyb2wudmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7W2RpcmVjdGl2ZU5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyByZXF1aXJlZGA7XG4gIH0sXG5cbiAgZGlyZWN0aXZlTmFtZSxcblxuICB2YWxpZGF0b3JOYW1lLFxuICBcbiAgY2hlY2tib3g6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC10cnVlL3JlcXVpcmVkLXRydWUudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFjb250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgcmVxdWlyZWRgO1xuICB9LFxuXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsImltcG9ydCBkZXBzVmFsaWRhdG9yICAgICAgICAgZnJvbSAnLi9kZXBzL2RlcHMnO1xuaW1wb3J0IGVtYWlsVmFsaWRhdG9yICAgICAgICBmcm9tICcuL2VtYWlsL2VtYWlsJztcbmltcG9ydCBlbWFpbEdvdlZhbGlkYXRvciAgICAgZnJvbSAnLi9lbWFpbC1nb3YvZW1haWwtZ292JztcbmltcG9ydCBlcXVhbHNUb1ZhbGlkYXRvciAgICAgZnJvbSAnLi9lcXVhbHMtdG8vZXF1YWxzLXRvJztcbmltcG9ydCBtYXhMZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9tYXgtbGVuZ3RoL21heC1sZW5ndGgnO1xuaW1wb3J0IG1pbkxlbmd0aFZhbGlkYXRvciAgICBmcm9tICcuL21pbi1sZW5ndGgvbWluLWxlbmd0aCc7XG5pbXBvcnQgcGF0dGVyblZhbGlkYXRvciAgICAgIGZyb20gJy4vcGF0dGVybi9wYXR0ZXJuJztcbmltcG9ydCByZXF1aXJlZFZhbGlkYXRvciAgICAgZnJvbSAnLi9yZXF1aXJlZC9yZXF1aXJlZCc7XG5pbXBvcnQgcmVxdWlyZWRUcnVlVmFsaWRhdG9yIGZyb20gJy4vcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBkZXBzVmFsaWRhdG9yLFxuICByZXF1aXJlZFZhbGlkYXRvcixcbiAgbWluTGVuZ3RoVmFsaWRhdG9yLFxuICBtYXhMZW5ndGhWYWxpZGF0b3IsXG4gIHBhdHRlcm5WYWxpZGF0b3IsXG4gIGVtYWlsVmFsaWRhdG9yLFxuICBlbWFpbEdvdlZhbGlkYXRvcixcbiAgZXF1YWxzVG9WYWxpZGF0b3IsXG4gIHJlcXVpcmVkVHJ1ZVZhbGlkYXRvclxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiLCJleHBvcnQgZGVmYXVsdCAobmFtZSwgY2hlY2tib3gpID0+IHtcbiAgbGV0IGNoZWNrYm94VHlwZSA9ICdbdHlwZT1jaGVja2JveF0nO1xuICBsZXQgY29udHJvbFR5cGVzID0gWydmb3JtQ29udHJvbE5hbWUnLCAnZm9ybUNvbnRyb2wnLCAnbmdNb2RlbCddXG4gIGNoZWNrYm94ID0gY2hlY2tib3ggPyBgaW5wdXQke2NoZWNrYm94VHlwZX1gIDogYDpub3QoJHtjaGVja2JveFR5cGV9KWA7XG4gIFxuICByZXR1cm4gY29udHJvbFR5cGVzLnJlZHVjZSgoc2VsZWN0b3IsIGNvbnRyb2xUeXBlKSA9PiB7XG4gICAgc2VsZWN0b3IucHVzaChgJHtjaGVja2JveH1bJHtuYW1lfV1bJHtjb250cm9sVHlwZX1dYCk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9LCBbXSkuam9pbignLCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMSURBVE9SUywgTkdfQVNZTkNfVkFMSURBVE9SU30gICAgICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHNlbGVjdG9yQXNzZW1ibGVyICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyJztcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdG9ycyA9PiB7XG4gIHJldHVybiB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3JDb25maWd1cmF0b3IgPT4ge1xuICAgIGxldCB7YXN5bmM6IF9hc3luYywgY2hlY2tib3gsIHZhbGlkYXRvck5hbWVQcmVmaXhlZH0gPSB2YWxpZGF0b3JDb25maWd1cmF0b3I7XG4gICAgbGV0IHtkaXJlY3RpdmVOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yO1xuICAgIGxldCBkaXJlY3RpdmVOYW1lID0gZGlyZWN0aXZlTmFtZVByZWZpeGVkIHx8IHZhbGlkYXRvck5hbWVQcmVmaXhlZDtcbiAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvckFzc2VtYmxlcihkaXJlY3RpdmVOYW1lLCBjaGVja2JveCk7XG5cbiAgICBsZXQgcHJvdmlkZXJzID0gW3tcbiAgICAgIHByb3ZpZGU6IF9hc3luYyA/IE5HX0FTWU5DX1ZBTElEQVRPUlMgOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3MpLFxuICAgICAgbXVsdGk6IHRydWUgICAgICAgIFxuICAgIH1dO1xuICAgIFxuICAgIEBEaXJlY3RpdmUoe3NlbGVjdG9yLCBwcm92aWRlcnN9KSBjbGFzcyBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcyB7XG4gICAgICBwcml2YXRlIHZhbGlkYXRvcjtcbiAgICAgIHByaXZhdGUgb25DaGFuZ2U7XG4gICAgICBwcml2YXRlIGNvbnRyb2w7XG4gICAgXG4gICAgICBASW5wdXQoYCR7ZGlyZWN0aXZlTmFtZX1gKSBwcml2YXRlIGNvbmZpZ3M7XG4gICAgXG4gICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuICAgIFxuICAgICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZignY29uZmlncycgaW4gY2hhbmdlcykge1xuICAgICAgICAgIGlmKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICB2YWxpZGF0ZShjb250cm9sPykge1xuICAgICAgICBsZXQgZXJyb3IgPSB7W2RpcmVjdGl2ZU5hbWVdOiB0cnVlfTtcbiAgICAgICAgXG4gICAgICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICAgICBjb250cm9sLCBcbiAgICAgICAgICB2YWxpZGF0ZSgpIHsgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBfYXN5bmMgPyBQcm9taXNlLnJlc29sdmUoZXJyb3IpIDogZXJyb3I7IFxuICAgICAgfVxuICAgIFxuICAgICAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbikge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47IFxuICAgICAgfVxuICAgIFxuICAgICAgcHJpdmF0ZSBjcmVhdGVWYWxpZGF0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yKHRoaXMuY29udHJvbCwgdGhpcy5jb25maWdzLCB0aGlzLmVsKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3M7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBwcmVmaXhlciAgICAgICAgICAgICAgZnJvbSAnLi4vX2xpYi9wcmVmaXhlcic7XG5pbXBvcnQgdmFsaWRhdG9yQ29uZmlndXJhdG9yIGZyb20gJy4uL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgZGlyZWN0aXZlc0dlbmVyYXRvciAgIGZyb20gJy4uL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzKSA9PiB7XG4gIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3IgPT4ge1xuICAgIGxldCB7dmFsaWRhdG9yTmFtZSwgZGlyZWN0aXZlTmFtZX0gPSB2YWxpZGF0b3I7XG4gICAgbGV0IHZhbGlkYXRvck5hbWVQcmVmaXhlZCA9IHByZWZpeGVyKHNldHRpbmdzLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIGRpcmVjdGl2ZU5hbWUpO1xuICAgIF8uZXh0ZW5kKHZhbGlkYXRvciwge3ZhbGlkYXRvck5hbWVQcmVmaXhlZCwgZGlyZWN0aXZlTmFtZVByZWZpeGVkfSk7XG4gICAgcmV0dXJuIHZhbGlkYXRvckNvbmZpZ3VyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9yKTtcbiAgfSk7XG4gIFxuICBsZXQgZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXNHZW5lcmF0b3IodmFsaWRhdG9ycyk7XG5cbiAgQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IGRpcmVjdGl2ZXMsIFxuICAgIGV4cG9ydHM6IGRpcmVjdGl2ZXNcbiAgfSkgY2xhc3MgVmFsaWRhdG9yTW9kdWxlIHt9XG4gIFxuICByZXR1cm4gVmFsaWRhdG9yTW9kdWxlOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9tb2R1bGUtZ2VuZXJhdG9yL21vZHVsZS1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQXNzaWduZXIgICAgIGZyb20gJy4vbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyJztcbmltcG9ydCBWYWxpZGF0aW9uU3RhdGVyIGZyb20gJy4uLy4uLy4uL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGVsKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgXG4gIGlmKCF2YWxpZGlmeSkge1xuICAgIGVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICBuYW1lQXNzaWduZXIoY29udHJvbCk7XG4gICAgXG4gICAgdmFsaWRpZnkgPSB7XG4gICAgICBlbGVtZW50czoge30sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgdmFsaWRhdGlvblN0YXRlcjogbmV3IFZhbGlkYXRpb25TdGF0ZXIoc2V0dGluZ3MsIGNvbnRyb2wpXG4gICAgfTtcbiAgICBcbiAgICBfLmV4dGVuZChjb250cm9sLCB7dmFsaWRpZnksIGVsLCAkZWw6ICQoZWwpfSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbHN9ID0gY29udHJvbC5fcGFyZW50O1xuICBsZXQgY29udHJvbE5hbWVzID0gXy5rZXlzKGNvbnRyb2xzKTtcbiAgZm9yKGxldCBjb250cm9sTmFtZSBvZiBjb250cm9sTmFtZXMpIHtcbiAgICBpZihjb250cm9sc1tjb250cm9sTmFtZV0gPT09IGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sTmFtZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQWNjZXNzb3IgZnJvbSAnLi9saWIvbmFtZS1hY2Nlc3Nvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIFxuICBpZighY29udHJvbE5hbWUpIHtcbiAgICBjb250cm9sTmFtZSA9IG5hbWVBY2Nlc3Nvcihjb250cm9sKTtcbiAgICBfLmV4dGVuZChjb250cm9sLCB7XG4gICAgICBjb250cm9sTmFtZSxcbiAgICAgIGNvbnRyb2xOYW1lUHJvcGVyOiBfLnVwcGVyRmlyc3QoXy5sb3dlckNhc2UoY29udHJvbE5hbWUpKVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbmFtZS1hc3NpZ25lci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeVJlcXVlc3RzfSBmcm9tICcuLi8uLi8uLi9fbGliL3ZhcnMnO1xuaW1wb3J0IGRlcGVuZGVudHNTZXR0ZXIgICAgIGZyb20gJy4uLy4uLy4uL2RlcGVuZGVudHMtc2V0dGVyL2RlcGVuZGVudHMtc2V0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7X3BhcmVudCwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHBhcmVudFJlY29yZHMgPSBkZXBlbmRlbmN5UmVxdWVzdHMuZ2V0KF9wYXJlbnQpO1xuICBcbiAgaWYocGFyZW50UmVjb3Jkcykge1xuICAgIGxldCBkZXBlbmRlbnRSZWNvcmRzID0gcGFyZW50UmVjb3Jkc1tjb250cm9sTmFtZV07XG5cbiAgICBpZihkZXBlbmRlbnRSZWNvcmRzKSB7XG4gICAgICBkZXBlbmRlbnRzU2V0dGVyKGNvbnRyb2wsIGRlcGVuZGVudFJlY29yZHMpO1xuICAgICAgZGVsZXRlIHBhcmVudFJlY29yZHNbY29udHJvbE5hbWVdO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgICAgICAgICAgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciAgICAgICAgIGZyb20gJy4uLy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IGNvbnRhaW5lckFkZGVyICAgICAgICAgIGZyb20gJy4uL19saWIvY29udGFpbmVyLWFkZGVyJztcbmltcG9ydCBBc3luY1Byb2dyZXNzVmlzdWFsaXplciBmcm9tICcuLi8uLi8uLi8uLi9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGlmeSwgY29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY3MgPSB7fSwgZWxlbWVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighdmFsaWRhdG9yRGVjbGFyYXRpb24uYXN5bmMgfHwgIV8uaXNFbXB0eShhc3luY3MpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBsZXQge2FzeW5jU3RhdHVzSGlkZUNsYXNzLCBzZWxlY3RvcnN9ID0gc2V0dGluZ3M7XG4gIGxldCB7YXN5bmNTdGF0dXNDb250YWluZXJ9ID0gc2VsZWN0b3JzO1xuICBsZXQgeyRlbCwgJGVsQ29udGFpbmVyfSA9IGVsZW1lbnRzO1xuICBsZXQgJGFzeW5jc0NvbnRhaW5lciA9ICQoJzxkaXYvPicpO1xuICBsZXQgJHBlbmRpbmcgPSAkKCc8ZGl2Lz4nKTtcbiAgbGV0ICRzdWNjZXNzID0gJCgnPGRpdi8+Jyk7XG5cbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkYXN5bmNzQ29udGFpbmVyLCAnYXN5bmNzLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkcGVuZGluZywgJ2FzeW5jLXBlbmRpbmcnLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJHN1Y2Nlc3MsICdhc3luYy1zdWNjZXNzJywgY29udHJvbE5hbWUpO1xuICBcbiAgJGFzeW5jc0NvbnRhaW5lci5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRwZW5kaW5nLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJHN1Y2Nlc3MuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkYXN5bmNzQ29udGFpbmVyLmFwcGVuZCgkcGVuZGluZykuYXBwZW5kKCRzdWNjZXNzKTtcbiAgXG4gIF8uZXh0ZW5kKGFzeW5jcywgeyRhc3luY3NDb250YWluZXIsICRwZW5kaW5nLCAkc3VjY2Vzc30pO1xuICBfLmV4dGVuZCh2YWxpZGlmeSwge2FzeW5jcywgYXN5bmNTdGF0dXNlczoge319KTtcbiAgXG4gIGNvbnRhaW5lckFkZGVyKCRlbCwgJGFzeW5jc0NvbnRhaW5lciwgJGVsQ29udGFpbmVyLCBhc3luY1N0YXR1c0NvbnRhaW5lcik7XG4gIHZhbGlkaWZ5LmFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyID0gbmV3IEFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyKHNldHRpbmdzLCBjb250cm9sKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyL2FzeW5jLWNvbnRhaW5lci1idWlsZGVyLnRzIiwiaW1wb3J0IGVycm9yc0NvbnRhaW5lckJ1aWxkZXIgZnJvbSAnLi9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyJztcbmltcG9ydCBhc3luY0NvbnRhaW5lckJ1aWxkZXIgIGZyb20gJy4vYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGVycm9yc0NvbnRhaW5lckJ1aWxkZXIoc2V0dGluZ3MsIGNvbnRyb2wpO1xuICBhc3luY0NvbnRhaW5lckJ1aWxkZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciBmcm9tICcuLi8uLi9fbGliL2NsYXNzLWlkLWFzc2lnbmVyJztcbmltcG9ydCBjb250YWluZXJBZGRlciAgZnJvbSAnLi4vX2xpYi9jb250YWluZXItYWRkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHskZWwsIHZhbGlkaWZ5LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQge2VsZW1lbnRzfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIV8uaXNFbXB0eShlbGVtZW50cykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGxldCB7ZWxlbWVudENvbnRhaW5lciwgZXJyb3JzQ29udGFpbmVyfSA9IHNldHRpbmdzLnNlbGVjdG9ycztcbiAgbGV0ICRlbENvbnRhaW5lciA9IGVsZW1lbnRDb250YWluZXIgPyAkZWwuY2xvc2VzdChlbGVtZW50Q29udGFpbmVyKSA6ICQoKTtcbiAgbGV0ICRlcnJvcnNDb250YWluZXIgPSAkKCc8ZGl2Lz4nKTtcblxuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbCwgJ2VsJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlbENvbnRhaW5lciwgJ2VsLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZXJyb3JzQ29udGFpbmVyLCAnZXJyb3JzLWNvbnRhaW5lcicsIGNvbnRyb2xOYW1lKTtcbiAgXG4gIF8uZXh0ZW5kKGVsZW1lbnRzLCB7JGVsLCAkZWxDb250YWluZXIsICRlcnJvcnNDb250YWluZXJ9KTtcbiAgY29udGFpbmVyQWRkZXIoJGVsLCAkZXJyb3JzQ29udGFpbmVyLCAkZWxDb250YWluZXIsIGVycm9yc0NvbnRhaW5lcik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIvZXJyb3JzLWNvbnRhaW5lci1idWlsZGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGVycm9yTWVzc2FnZSwgcHJlZml4KSA9PiB7XG4gIGxldCBnZW5lcmFsQ2xhc3MgPSBwcmVmaXggKyAnLWVycm9yLXdvcmQnO1xuICBcbiAgcmV0dXJuIGVycm9yTWVzc2FnZS5zcGxpdCgvXFxzKy8pLm1hcCgod29yZCwgaW5kZXgpID0+IHtcbiAgICBsZXQgc3BlY2lmaWNDbGFzcyA9IGdlbmVyYWxDbGFzcyArICctJyArIGluZGV4O1xuICAgIHJldHVybiBgPHNwYW4gY2xhc3MgPSBcIiR7Z2VuZXJhbENsYXNzfSAke3NwZWNpZmljQ2xhc3N9XCI+JHt3b3JkfTwvc3Bhbj5gO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvX2xpYi9zcGFubmlmaWVyLnRzIiwiaW1wb3J0ICogYXMgJCAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzSWRBc3NpZ25lciBmcm9tICcuLi9fbGliL2NsYXNzLWlkLWFzc2lnbmVyJztcbmltcG9ydCBzcGFubmlmaWVyICAgICAgZnJvbSAnLi9fbGliL3NwYW5uaWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkLCBhc3luYzogX2FzeW5jfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge21lc3NhZ2VyfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge2VsZW1lbnRzLCBlcnJvcnN9ID0gY29udHJvbC52YWxpZGlmeTtcbiAgbGV0IGJhc2VFcnJvckNvbmZpZ3MgPSB7JGVsOiAkKCksIF9hc3luYywgdmFsaWRhdG9yTmFtZSwgY29udHJvbH07XG4gIFxuICBpZighbWVzc2FnZXIpIHtcbiAgICByZXR1cm4gZXJyb3JzW3ZhbGlkYXRvck5hbWVdID0gYmFzZUVycm9yQ29uZmlncztcbiAgfVxuICBcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXSB8fCBiYXNlRXJyb3JDb25maWdzO1xuICBsZXQgeyRlbH0gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7dmFsaWRhdG9yOiB2YWxpZGF0b3JDb25maWdzLCBtZXNzYWdlcjogbWVzc2FnZXJDb25maWdzfSA9IGNvbmZpZ3M7XG4gIGxldCB7ZXJyb3JNZXNzYWdlQ2xhc3NlcywgcHJlZml4fSA9IHNldHRpbmdzO1xuICBsZXQgeyRlcnJvcnNDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gIGxldCBlcnJvck1lc3NhZ2VyID0gXy5pc0Z1bmN0aW9uKG1lc3NhZ2VyKSA/IG1lc3NhZ2VyIDogKCkgPT4gbWVzc2FnZXI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VyKGNvbnRyb2wsIHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyQ29uZmlncyk7XG4gIGVycm9yTWVzc2FnZSA9IHNwYW5uaWZpZXIoZXJyb3JNZXNzYWdlLCBwcmVmaXgpO1xuICBcbiAgaWYoISRlbC5sZW5ndGgpIHtcbiAgICBsZXQgc3luY0FzeW5jQ2xhc3MgPSBgJHtwcmVmaXh9LWAgKyAoX2FzeW5jID8gJ2FzeW5jJyA6ICdzeW5jJyk7XG4gICAgJGVsID0gJCgnPGRpdi8+Jyk7XG4gICAgJGVsLmFkZENsYXNzKHN5bmNBc3luY0NsYXNzKTtcbiAgICAkZXJyb3JzQ29udGFpbmVyLmFwcGVuZCgkZWwpO1xuICAgIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsLCAnZXJyb3InLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBlcnJvckNvbmZpZ3MgPSBfLmV4dGVuZChlcnJvckNvbmZpZ3MsIHskZWx9KTtcbiAgICBcbiAgICBpZihlcnJvck1lc3NhZ2VDbGFzc2VzICYmIGVycm9yTWVzc2FnZUNsYXNzZXMuaW5pdGlhbCkge1xuICAgICAgJGVsLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMuaW5pdGlhbCk7XG4gICAgfVxuICAgIFxuICAgIGlmKF9hc3luYykge1xuICAgICAgZXJyb3JDb25maWdzLnJlcXVlc3RzID0ge307XG4gICAgfVxuICAgIFxuICAgIGVycm9yc1t2YWxpZGF0b3JOYW1lXSA9IGVycm9yQ29uZmlncztcbiAgfVxuXG4gICRlbC5odG1sKGVycm9yTWVzc2FnZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHtwcmVwcm9jZXNzb3J9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIFxuICBpZighXy5pc1BsYWluT2JqZWN0KGNvbmZpZ3MpKSB7XG4gICAgY29uZmlncyA9IHt2YWxpZGF0b3I6IGNvbmZpZ3N9O1xuICB9XG4gIFxuICBpZihwcmVwcm9jZXNzb3IpIHtcbiAgICBjb25maWdzLnZhbGlkYXRvciA9IHByZXByb2Nlc3Nvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvcik7XG4gIH1cblxuICByZXR1cm4gY29uZmlncztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplciBmcm9tICcuLi9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXInO1xuaW1wb3J0IGluaXRpYWxEYXRhU2V0dGVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyJztcbmltcG9ydCByZXF1ZXN0c051bGxpZmllciAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXInO1xuaW1wb3J0IGluaXRpYWxWaXN1YWxpemVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyL2luaXRpYWwtdmlzdWFsaXplcic7XG5pbXBvcnQgZmluYWxEYXRhU2V0dGVyICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvZmluYWwtZGF0YS1zZXR0ZXIvZmluYWwtZGF0YS1zZXR0ZXInO1xuaW1wb3J0IGZpbmFsVmlzdWFsaXplciAgICAgICAgICAgIGZyb20gJy4vZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgaWYoY29udHJvbC52YWxpZFZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9ICAgXG4gIFxuICBsZXQge3ZhbGlkYXRvck5hbWUsIHZhbGlkYXRvck5hbWVQcmVmaXhlZCwgdmFsaWRhdG9yfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIGVycm9ycywgdmFsaWRhdGlvblN0YXRlcn0gPSB2YWxpZGlmeTtcbiAgbGV0IGVycm9yQ29uZmlncyA9IGVycm9yc1t2YWxpZGF0b3JOYW1lXTtcbiAgbGV0IHZhbGlkYXRpb25JZCA9IF8udW5pcXVlSWQoKTtcblxuICBpZihjb250cm9sLmludmFsaWRWYWx1ZSA9PT0gY29udHJvbC52YWx1ZSkge1xuICAgIGxldCBlcnJvciA9IHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX07XG4gICAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgZXJyb3IpLnZpc3VhbGl6ZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXJyb3IpO1xuICB9XG4gIFxuICBpbml0aWFsRGF0YVNldHRlcihjb250cm9sLCB2YWxpZGF0b3JOYW1lKTtcbiAgcmVxdWVzdHNOdWxsaWZpZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvbklkKTtcbiAgaW5pdGlhbFZpc3VhbGl6ZXIoY29udHJvbCwgdmFsaWRhdG9yTmFtZSk7XG4gIFxuICBjbGVhclRpbWVvdXQoZXJyb3JDb25maWdzLmFzeW5jRGVib3VuY2VUaW1lb3V0KTtcbiAgXG4gIGVycm9yQ29uZmlncy5hc3luY0RlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmKHZhbGlkaWZ5LnN5bmMpIHtcbiAgICAgIHJldHVybiBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5jb250YWluZXIoZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5wZW5kaW5nKHRydWUpO1xuICAgIFxuICAgIHZhbGlkYXRvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvcikudGhlbih2YWxpZGF0aW9uU3RhdHVzID0+IHtcbiAgICAgIGlmKGVycm9yQ29uZmlncy5yZXF1ZXN0c1t2YWxpZGF0aW9uSWRdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFsaWRhdGlvblN0YXR1cyA9IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKTtcbiAgICAgIGZpbmFsRGF0YVNldHRlcihjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbiwgdmFsaWRhdGlvblN0YXR1cyk7XG4gICAgICBmaW5hbFZpc3VhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpOyAgICAgIFxuICAgIH0pO1xuICB9LCBzZXR0aW5ncy5hc3luY0RlYm91bmNlVGltZSk7XG4gIFxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtbdmFsaWRhdG9yTmFtZVByZWZpeGVkXTogdHJ1ZX0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGxldCB7ZXJyb3JzLCB2YWx1ZSwgdmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1N0YXR1c2VzLCBlcnJvcnM6IF9lcnJvcnN9ID0gdmFsaWRpZnk7XG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBcbiAgX2Vycm9yc1t2YWxpZGF0b3JOYW1lXS5yZXF1ZXN0cyA9IHt9O1xuICB2YWxpZGlmeS5zeW5jID0gZmFsc2U7XG4gIGFzeW5jU3RhdHVzZXNbdmFsaWRhdG9yTmFtZV0gPSBmYWxzZTtcbiAgXG4gIGlmKCF2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgZXJyb3JzID0gXy5vbWl0KGVycm9ycywgW3ZhbGlkYXRvck5hbWVQcmVmaXhlZF0pO1xuICB9XG4gIFxuICBfLmV4dGVuZChlcnJvcnMsIHZhbGlkYXRpb25TdGF0dXMpO1xuICBcbiAgaWYoXy5pc0VtcHR5KGVycm9ycykpIHtcbiAgICBjb250cm9sLnZhbGlkVmFsdWUgPSB2YWx1ZTtcbiAgICBlcnJvcnMgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBjb250cm9sLmludmFsaWRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIFxuICBjb250cm9sLnNldEVycm9ycyhlcnJvcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmNTdGF0dXNlcyA9PiB7XG4gIHJldHVybiBfLnJlZHVjZShhc3luY1N0YXR1c2VzLCAoY291bnQsIHN0YXR1cykgPT4ge1xuICAgIHJldHVybiBjb3VudCArPSArc3RhdHVzO1xuICB9LCAwKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlci50cyIsImltcG9ydCBhY3RpdmVBc3luY3NDb3VudGVyIGZyb20gJy4vX2xpYi9hY3RpdmUtYXN5bmNzLWNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jU3RhdHVzZXMsIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLCB2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBcbiAgaWYoIWFjdGl2ZUFzeW5jc0NvdW50ZXIoYXN5bmNTdGF0dXNlcykpIHtcbiAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5wZW5kaW5nKGZhbHNlKTtcbiAgICBcbiAgICBpZighdmFsaWRhdGlvblN0YXR1cyAmJiBjb250cm9sLnZhbGlkKSB7XG4gICAgICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5zdWNjZXNzKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3MoZmFsc2UpLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgICB9LCBzZXR0aW5ncy5hc3luY1N1Y2Nlc3NNZXNzYWdlRHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykudXBkYXRlRGVwZW5kZW50cygpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSkgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG5cbiAgY29udHJvbC52YWxpZFZhbHVlID0gY29udHJvbC5pbnZhbGlkVmFsdWUgPSBudWxsO1xuICB2YWxpZGlmeS5hc3luY1N0YXR1c2VzW3ZhbGlkYXRvck5hbWVdID0gdHJ1ZTtcbiAgdmFsaWRpZnkuc3luYyA9IGZhbHNlOyAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC1kYXRhLXNldHRlci9pbml0aWFsLWRhdGEtc2V0dGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpID0+IHtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgdmFsaWRhdGlvblN0YXRlcn0gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBhc3luY1Byb2dyZXNzVmlzdWFsaXplci5jb250YWluZXIodHJ1ZSkuc3VjY2VzcyhmYWxzZSk7XG4gIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIG51bGwpLnZpc3VhbGl6ZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtdmlzdWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uSWQpID0+IHtcbiAgbGV0IHtyZXF1ZXN0c30gPSBjb250cm9sLnZhbGlkaWZ5LmVycm9yc1t2YWxpZGF0b3JOYW1lXTtcblxuICBfLmVhY2gocmVxdWVzdHMsIChyZXF1ZXN0LCBrZXkpID0+IHtcbiAgICByZXF1ZXN0c1trZXldID0gdHJ1ZTtcbiAgfSk7XG4gIFxuICByZXF1ZXN0c1t2YWxpZGF0aW9uSWRdID0gZmFsc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllci50cyIsImltcG9ydCB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplciBmcm9tICcuLi9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHt2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBsZXQge3ZhbGlkYXRvciwgdmFsaWRhdG9yTmFtZX0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgbGV0IHZhbGlkYXRpb25TdGF0dXMgPSB2YWxpZGF0b3IoY29udHJvbCwgY29uZmlncy52YWxpZGF0b3IpO1xuICBcbiAgaWYodmFsaWRhdGlvblN0YXR1cykge1xuICAgIHZhbGlkaWZ5LnN5bmMgPSB0cnVlO1xuICB9XG4gIFxuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKS51cGRhdGVEZXBlbmRlbnRzKCkudmlzdWFsaXplKCk7XG4gIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzTm9ybWFsaXplcihzZXR0aW5ncywgdmFsaWRhdGlvblN0YXR1cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvci50cyIsImltcG9ydCBzeW5jVmFsaWRhdG9yICBmcm9tICcuL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yJztcbmltcG9ydCBhc3luY1ZhbGlkYXRvciBmcm9tICcuL2FzeW5jLXZhbGlkYXRvci9hc3luYy12YWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYodmFsaWRhdG9yRGVjbGFyYXRpb24uYXN5bmMpIHtcbiAgICAgIHJldHVybiBhc3luY1ZhbGlkYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3luY1ZhbGlkYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci92YWxpZGF0b3ItYnVpbGRlci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGF0YUluaXRpYWxpemVyICAgICBmcm9tICcuL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplcic7XG5pbXBvcnQgZGVwZW5kZW50c1JlZ2lzdHJhciBmcm9tICcuL2RlcGVuZGVudHMtcmVnaXN0cmFyL2RlcGVuZGVudHMtcmVnaXN0cmFyJztcbmltcG9ydCBwcmVwcm9jZXNzb3IgICAgICAgIGZyb20gJy4vcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvcic7XG5pbXBvcnQgZWxlbWVudHNJbml0aWFsaXplciBmcm9tICcuL2VsZW1lbnRzLWluaXRpYWxpemVyL2VsZW1lbnRzLWluaXRpYWxpemVyJztcbmltcG9ydCBlcnJvckdlbmVyYXRvciAgICAgIGZyb20gJy4vZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvcic7XG5pbXBvcnQgdmFsaWRhdG9yQnVpbGRlciAgICBmcm9tICcuL3ZhbGlkYXRvci1idWlsZGVyL3ZhbGlkYXRvci1idWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQgZGF0YU5hbWVzID0gWydhc3luYycsICdjaGVja2JveCcsICd2YWxpZGF0b3JOYW1lJywgJ2RpcmVjdGl2ZU5hbWVQcmVmaXhlZCddO1xuICBkYXRhTmFtZXMucHVzaCgndmFsaWRhdG9yTmFtZVByZWZpeGVkJywgJ21lc3NhZ2VyJyk7XG4gIGxldCBzdXBwbGVtZW50YWxEYXRhID0gXy5waWNrKHZhbGlkYXRvckRlY2xhcmF0aW9uLCBkYXRhTmFtZXMpO1xuICBsZXQgY29uZmlndXJhdG9yID0gKGNvbnRyb2wsIGNvbmZpZ3MsIGVsKSA9PiB7XG4gICAgZGF0YUluaXRpYWxpemVyKHNldHRpbmdzLCBjb250cm9sLCBlbCk7XG4gICAgZGVwZW5kZW50c1JlZ2lzdHJhcihjb250cm9sKTtcbiAgICBjb25maWdzID0gcHJlcHJvY2Vzc29yKGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICBlbGVtZW50c0luaXRpYWxpemVyKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgZXJyb3JHZW5lcmF0b3Ioc2V0dGluZ3MsIGNvbnRyb2wsIGNvbmZpZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICByZXR1cm4gdmFsaWRhdG9yQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICB9O1xuXG4gIHJldHVybiBfLmV4dGVuZChjb25maWd1cmF0b3IsIHN1cHBsZW1lbnRhbERhdGEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82NV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiZm9ybXNcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvZm9ybXNcIixcImFtZFwiOlwiQGFuZ3VsYXIvZm9ybXNcIn1cbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBuZ1ZhbGlkaWZpZXIgZnJvbSAnLi92YWxpZGlmaWVyL3ZhbGlkaWZpZXInO1xuXG5leHBvcnQge25nVmFsaWRpZmllcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctdmFsaWRpZmllci50cyJdLCJzb3VyY2VSb290IjoiIn0=