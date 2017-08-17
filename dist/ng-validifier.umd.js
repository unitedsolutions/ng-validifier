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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dependents_setter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dependency_request_registrar_dependency_request_registrar__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = function (dependencyName, control) {
    var dependencyControl = control._parent.controls[dependencyName];
    if (dependencyControl) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_dependents_setter__["a" /* default */])(dependencyControl, control);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMzFiZTljMzAzY2RlODM0ZjNlOCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL19saWIvY2xhc3MtaWQtYXNzaWduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19saWIvZGVwZW5kZW50cy1zZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9fbGliL3ZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvX2xpYi9wcmVmaXhlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL19saWIvY29udGFpbmVyLWFkZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvX2xpYi92YWxpZGF0aW9uLXN0YXR1cy1ub3JtYWxpemVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvcmVcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29yZVwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2NvcmVcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvX2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3N0YXRlLXNldHRlci9zdGF0ZS1zZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9fbGliL2RlbGF5LWNhbGN1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplci9fbGliL2Vycm9ycy1jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci92aXN1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvZGVwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL19saWIvZGVwZW5kZW5jeS1uYW1lcy1zdHJpbmdpZmllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL21lc3NhZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL19saWIvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL19saWIvc3RyLWFycmF5aWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy9wcmVwcm9jZXNzb3IvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW50LXJlZ2lzdHJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9kZXBlbmRlbnQtdHJhY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbnQtdHJhY2tlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci9mb3JtLWRlcGVuZGVuY3ktbWFwLWdldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZGVwcy92YWxpZGF0b3IvdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL2VtYWlsLWdvdi9lbWFpbC1nb3YudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZW1haWwvZW1haWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvZXF1YWxzLXRvL2VxdWFscy10by50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9tYXgtbGVuZ3RoL21heC1sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvbWluLWxlbmd0aC9taW4tbGVuZ3RoLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0b3JzL3BhdHRlcm4vcGF0dGVybi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC10cnVlL3JlcXVpcmVkLXRydWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvcmVxdWlyZWQvcmVxdWlyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci9kaXJlY3RpdmVzLWdlbmVyYXRvci9fbGliL3NlbGVjdG9yLWFzc2VtYmxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci9kaXJlY3RpdmVzLWdlbmVyYXRvci9kaXJlY3RpdmVzLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci9tb2R1bGUtZ2VuZXJhdG9yL21vZHVsZS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL2RhdGEtaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbGliL25hbWUtYWNjZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbmFtZS1hc3NpZ25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RlcGVuZGVudHMtcmVnaXN0cmFyL2RlcGVuZGVudHMtcmVnaXN0cmFyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lbGVtZW50cy1pbml0aWFsaXplci9lbGVtZW50cy1pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9lcnJvci1nZW5lcmF0b3IvX2xpYi9zcGFubmlmaWVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZXJyb3ItZ2VuZXJhdG9yL2Vycm9yLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9maW5hbC12aXN1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL2luaXRpYWwtZGF0YS1zZXR0ZXIvaW5pdGlhbC1kYXRhLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2luaXRpYWxpemVyL3JlcXVlc3RzLW51bGxpZmllci9yZXF1ZXN0cy1udWxsaWZpZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9zeW5jLXZhbGlkYXRvci9zeW5jLXZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3ZhbGlkYXRvci1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJmb3Jtc1wiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiYW1kXCI6XCJAYW5ndWxhci9mb3Jtc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvbmctdmFsaWRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7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QUUsRUFBRTtRQUN0QywwR0FBZSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsa0hBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxHQUFHLGtHQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9ELGtIQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM3RCx3R0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLDRHQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLDhDQUFRLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsQ0FBQyxFQUFDOzs7Ozs7O0FDdEJGLGdEOzs7Ozs7Ozs7O0FDQW1EO0FBRTdCIiwiZmlsZSI6Im5nLXZhbGlkaWZpZXIudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiLCBcImpxdWVyeVwiLCBcIkBhbmd1bGFyL2NvcmVcIiwgXCJAYW5ndWxhci9mb3Jtc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZy12YWxpZGlmaWVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZy12YWxpZGlmaWVyXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSwgcm9vdFtcIiRcIl0sIHJvb3RbXCJuZ1wiXVtcImNvcmVcIl0sIHJvb3RbXCJuZ1wiXVtcImZvcm1zXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNjVfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzMWJlOWMzMDNjZGU4MzRmM2U4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCIkXCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZGVwZW5kZW5jeVJlcXVlc3RzID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIHByZWZpeDogJ3YnLFxuXG4gIHNlbGVjdG9yczoge1xuICAgIGVsZW1lbnRDb250YWluZXI6ICcuZm9ybS1ncm91cCcsXG4gICAgZXJyb3JzQ29udGFpbmVyOiBbJ2luc2VydEFmdGVyJywgJ2lucHV0J10sXG4gICAgYXN5bmNTdGF0dXNDb250YWluZXI6IFsnaW5zZXJ0QmVmb3JlJywgJ2lucHV0J11cbiAgfSxcbiAgXG4gIGVycm9yTWVzc2FnZUNsYXNzZXM6IHtcbiAgICBpbml0aWFsOiAnJyxcbiAgICB2YWxpZDogJycsXG4gICAgaW52YWxpZDogJydcbiAgfSxcblxuICBlcnJvck1lc3NhZ2VEZWxheXM6IHtcbiAgICB2YWxpZDogMzAwLFxuICAgIGludmFsaWQ6IDUwMFxuICB9LFxuXG4gIGFzeW5jRGVib3VuY2VUaW1lOiA1MDAsXG5cbiAgYXN5bmNTdGF0dXNIaWRlQ2xhc3M6ICdoaWRkZW4nLFxuICBcbiAgYXN5bmNTdWNjZXNzTWVzc2FnZUR1cmF0aW9uOiAxMDAwXG59O1xuXG5leHBvcnQge1xuICBkZXBlbmRlbmN5UmVxdWVzdHMsIFxuICBzZXR0aW5nc1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fbGliL3ZhcnMudHMiLCJleHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsICRlbCwgYmFzZUNsYXNzLCBjb250cm9sTmFtZSkgPT4ge1xuICBsZXQge3ByZWZpeH0gPSBzZXR0aW5ncztcbiAgbGV0IGNsYXNzZXMgPSBbYmFzZUNsYXNzLCBgJHtiYXNlQ2xhc3N9LSR7Y29udHJvbE5hbWV9YF07XG4gIGxldCBjbGFzc2VzU3RyID0gY2xhc3Nlcy5tYXAoa2xhc3MgPT4gYCR7cHJlZml4fS0ke2tsYXNzfWApLmpvaW4oJyAnKTtcbiAgJGVsLmFkZENsYXNzKGNsYXNzZXNTdHIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvX2xpYi9jbGFzcy1pZC1hc3NpZ25lci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIG5ld0RlcGVuZGVudHMpID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2RlcGVuZGVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0FycmF5KG5ld0RlcGVuZGVudHMpKSB7XG4gICAgbmV3RGVwZW5kZW50cyA9IFtuZXdEZXBlbmRlbnRzXTtcbiAgfVxuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBfLnNldCh2YWxpZGlmeSwgJ2RlcGVuZGVudHMnLCBkZXBlbmRlbnRzID0gW10pO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goLi4ubmV3RGVwZW5kZW50cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19saWIvZGVwZW5kZW50cy1zZXR0ZXIudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2RlcHMnO1xuY29uc3QgZGVwZW5kZW5jaWVzVGFibGUgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQge1xuICB2YWxpZGF0b3JOYW1lLFxuICBkZXBlbmRlbmNpZXNUYWJsZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvX2xpYi92YXJzLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIG5hbWUpID0+IHtcbiAgbGV0IHtwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIFxuICBpZihwcmVmaXggJiYgbmFtZSkge1xuICAgIG5hbWUgPSBwcmVmaXggKyBfLnVwcGVyRmlyc3QobmFtZSk7XG4gIH1cbiAgXG4gIHJldHVybiBuYW1lO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL19saWIvcHJlZml4ZXIudHMiLCJpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgkZWwsICRjb250YWluZXIsICRjb250YWluZXJDb250YWluZXIsIGluc2VydGlvblNwZWMpID0+IHtcbiAgbGV0IFthY3Rpb24sICRpbnNlcnRpb25Qb2ludF0gPSAoKCkgPT4ge1xuICAgIGlmKCEkY29udGFpbmVyQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFsnaW5zZXJ0QWZ0ZXInLCAkZWxdO1xuICAgIH1cbiAgICBcbiAgICBsZXQgW2FjdGlvbiwgYW5jaG9yXSA9IGluc2VydGlvblNwZWM7XG4gICAgbGV0ICRpbnNlcnRpb25Qb2ludCA9ICgoKSA9PiB7XG4gICAgICBpZighYW5jaG9yKSB7XG4gICAgICAgIHJldHVybiAkY29udGFpbmVyQ29udGFpbmVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gJChhbmNob3IsICRjb250YWluZXJDb250YWluZXIpO1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gW2FjdGlvbiwgJGluc2VydGlvblBvaW50XTtcbiAgfSkoKTtcbiAgXG4gICRjb250YWluZXJbYWN0aW9uXSgkaW5zZXJ0aW9uUG9pbnQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvX2xpYi9jb250YWluZXItYWRkZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuLi8uLi8uLi9fbGliL3ByZWZpeGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKSA9PiB7XG4gIGlmKF8uaXNQbGFpbk9iamVjdCh2YWxpZGF0aW9uU3RhdHVzKSkge1xuICAgIGxldCBrZXkgPSBfLmtleXModmFsaWRhdGlvblN0YXR1cylbMF07XG4gICAgbGV0IHZhbHVlID0gdmFsaWRhdGlvblN0YXR1c1trZXldO1xuICAgIGtleSA9IHByZWZpeGVyKHNldHRpbmdzLCBrZXkpO1xuICAgIHZhbGlkYXRpb25TdGF0dXMgPSB7W2tleV06IHZhbHVlfTtcbiAgfVxuICBcbiAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9fbGliL3ZhbGlkYXRpb24tc3RhdHVzLW5vcm1hbGl6ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7c2V0dGluZ3MgYXMgbWFpblNldHRpbmdzfSBmcm9tICcuLi9fbGliL3ZhcnMnO1xuaW1wb3J0IGludGVybmFsVmFsaWRhdG9ycyAgICAgICAgIGZyb20gJy4uL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycyc7XG5pbXBvcnQgbW9kdWxlR2VuZXJhdG9yICAgICAgICAgICAgZnJvbSAnLi9tb2R1bGUtZ2VuZXJhdG9yL21vZHVsZS1nZW5lcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRvcnMgPSBbXSkgPT4ge1xuICBzZXR0aW5ncyA9IF8uZXh0ZW5kKHt9LCBtYWluU2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgdmFsaWRhdG9ycy5wdXNoKC4uLmludGVybmFsVmFsaWRhdG9ycyk7XG4gIHJldHVybiBtb2R1bGVHZW5lcmF0b3Ioc2V0dGluZ3MsIHZhbGlkYXRvcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkaWZpZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgcHJpdmF0ZSBoaWRkZW5DbGFzcztcbiAgcHJpdmF0ZSBhc3luY3M7XG4gIHByaXZhdGUgJGVsO1xuICBwcml2YXRlICRlbENvbnRhaW5lcjtcbiAgcHJpdmF0ZSBwZW5kaW5nQ2xhc3M7XG4gIFxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgY29udHJvbCkge1xuICAgIGxldCB7YXN5bmNzLCBlbGVtZW50c30gPSBjb250cm9sLnZhbGlkaWZ5O1xuICAgIGxldCB7JGVsLCAkZWxDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gICAgbGV0IHBlbmRpbmdDbGFzcyA9IGAke3NldHRpbmdzLnByZWZpeH0tYXN5bmMtcGVuZGluZ2A7XG4gICAgXG4gICAgXy5leHRlbmQodGhpcywge1xuICAgICAgJGVsLCAkZWxDb250YWluZXIsIGFzeW5jcywgcGVuZGluZ0NsYXNzLFxuICAgICAgaGlkZGVuQ2xhc3M6IHNldHRpbmdzLmFzeW5jU3RhdHVzSGlkZUNsYXNzXG4gICAgfSk7XG4gIH1cbiAgXG4gIHByaXZhdGUgZGlzcGxheSh0eXBlLCBvbikge1xuICAgIGxldCBtZXRob2QgPSBvbiA/ICdyZW1vdmVDbGFzcyc6ICdhZGRDbGFzcyc7XG4gICAgdGhpcy5hc3luY3NbJyQnICsgdHlwZV1bbWV0aG9kXSh0aGlzLmhpZGRlbkNsYXNzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBcbiAgcHJpdmF0ZSBjbGFzc09wZXJhdG9yKG9wZXJhdGlvbikge1xuICAgIGxldCB7JGVsLCAkZWxDb250YWluZXIsIHBlbmRpbmdDbGFzc30gPSB0aGlzO1xuICAgICRlbFtvcGVyYXRpb25dKHBlbmRpbmdDbGFzcyk7XG4gICAgJGVsQ29udGFpbmVyW29wZXJhdGlvbl0ocGVuZGluZ0NsYXNzKTtcbiAgfVxuICBcbiAgY29udGFpbmVyKG9uKSB7XG4gICAgaWYob24pIHtcbiAgICAgIHRoaXMuY2xhc3NPcGVyYXRvcignYWRkQ2xhc3MnKTsgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBlbmRpbmcob24pLnN1Y2Nlc3Mob24pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5KCdhc3luY3NDb250YWluZXInLCBvbik7XG4gIH1cbiAgXG4gIHBlbmRpbmcob24pIHtcbiAgICBpZighb24pIHtcbiAgICAgIHRoaXMuY2xhc3NPcGVyYXRvcigncmVtb3ZlQ2xhc3MnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheSgncGVuZGluZycsIG9uKTtcbiAgfVxuICBcbiAgc3VjY2Vzcyhvbikge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXkoJ3N1Y2Nlc3MnLCBvbik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL2FzeW5jLXByb2dyZXNzLXZpc3VhbGl6ZXIvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2V0dGluZ3MsIGNvbnRyb2wpIHtcbiAgXy5leHRlbmQodGhpcywge3NldHRpbmdzLCBjb250cm9sLCBzdGF0ZToge319KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvci50cyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlcGVuZGVudHNBZ2dyZWdhdG9yKGNvbnRyb2wsIGFsbCA9IFtdKSB7XG4gIGxldCB7ZGVwZW5kZW50cyA9IFtdfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gIFxuICBmb3IobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgaWYoYWxsLmluZGV4T2YoZGVwZW5kZW50KSA9PT0gLTEpIHtcbiAgICAgIGFsbC5wdXNoKGRlcGVuZGVudCk7XG4gICAgICBkZXBlbmRlbnRzQWdncmVnYXRvcihkZXBlbmRlbnQsIGFsbCk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gYWxsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvZGVwZW5kZW50cy11cGRhdGVyL19saWIvZGVwZW5kZW50cy1hZ2dyZWdhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVwZW5kZW50c0FnZ3JlZ2F0b3IgZnJvbSAnLi9fbGliL2RlcGVuZGVudHMtYWdncmVnYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBsZXQge3NpbGVudCwgZGVwZW5kZW50cywgY29udHJvbH0gPSB0aGlzO1xuICBcbiAgaWYoIXNpbGVudCkge1xuICAgIGlmKCFjb250cm9sLnZhbGlkaWZ5Lmlnbm9yZURlcGVuZGVudHMpIHtcbiAgICAgIGRlcGVuZGVudHMgPSBkZXBlbmRlbnRzQWdncmVnYXRvcihjb250cm9sKTtcbiAgICAgIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgXy5leHRlbmQoZGVwZW5kZW50LnZhbGlkaWZ5LCB7c2lsZW50OiB0cnVlLCBpZ25vcmVEZXBlbmRlbnRzOiB0cnVlfSk7XG4gICAgICAgICAgZGVwZW5kZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIF8uZXh0ZW5kKHRoaXMsIHtkZXBlbmRlbnRzfSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXIudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpIHtcbiAgbGV0IHtzaWxlbnQsIGVycm9yc30gPSB0aGlzLmNvbnRyb2wudmFsaWRpZnk7XG4gIGxldCBlcnJvckNvbmZpZ3MgPSBlcnJvcnNbdmFsaWRhdG9yTmFtZV07XG4gIFxuICBfLmV4dGVuZCh0aGlzLCB7c2lsZW50LCBkZXBlbmRlbnRzOiB1bmRlZmluZWR9KTtcbiAgZXJyb3JDb25maWdzLnN0YXR1cyA9IHZhbGlkYXRpb25TdGF0dXM7XG4gIFxuICBpZighc2lsZW50KSB7XG4gICAgXy5leHRlbmQodGhpcywge2Vycm9yQ29uZmlnc30pO1xuICB9XG4gIFxuICByZXR1cm4gdGhpcztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3N0YXRlLXNldHRlci9zdGF0ZS1zZXR0ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBfY29uc3RydWN0b3IgICAgICBmcm9tICcuL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgc3RhdGVTZXR0ZXIgICAgICAgZnJvbSAnLi9zdGF0ZS1zZXR0ZXIvc3RhdGUtc2V0dGVyJztcbmltcG9ydCBkZXBlbmRlbnRzVXBkYXRlciBmcm9tICcuL2RlcGVuZGVudHMtdXBkYXRlci9kZXBlbmRlbnRzLXVwZGF0ZXInO1xuaW1wb3J0IHZpc3VhbGl6ZXIgICAgICAgIGZyb20gJy4vdmlzdWFsaXplci92aXN1YWxpemVyJztcblxuXy5leHRlbmQoX2NvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xuICBzZXQ6IHN0YXRlU2V0dGVyLFxuICB1cGRhdGVEZXBlbmRlbnRzOiBkZXBlbmRlbnRzVXBkYXRlcixcbiAgdmlzdWFsaXplOiB2aXN1YWxpemVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgX2NvbnN0cnVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGVycm9yQ29uZmlncykgPT4ge1xuICBsZXQge2Vycm9yTWVzc2FnZURlbGF5czogZGVsYXlzfSA9IHNldHRpbmdzO1xuICBsZXQge19hc3luYywgc3RhdHVzLCBjb250cm9sfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHtkaXJ0eX0gPSBjb250cm9sO1xuICByZXR1cm4gX2FzeW5jIHx8ICFkaXJ0eSA/IDAgOiBzdGF0dXMgPyBkZWxheXMuaW52YWxpZCA6IGRlbGF5cy52YWxpZDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL19saWIvZGVsYXktY2FsY3VsYXRvci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCAkZWwpID0+IHtcbiAgbGV0IGNsYXNzZXMgPSAkZWwuYXR0cignY2xhc3MnKTtcbiAgXG4gIGlmKGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzID0gY2xhc3Nlcy5zcGxpdCgvXFxzKy8pO1xuICB9XG5cbiAgcmV0dXJuIF8ucmVkdWNlKGNsYXNzZXMsIChjb3VudCwga2xhc3MpID0+IHtcbiAgICBpZihrbGFzcy5zdGFydHNXaXRoKGAke3NldHRpbmdzLnByZWZpeH0tZXJyb3JgKSkge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNvdW50O1xuICB9LCAwKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVycy92YWxpZGF0aW9uLXN0YXRlci92aXN1YWxpemVyL2Vycm9ycy12aXN1YWxpemVyL19saWIvZXJyb3JzLWNvdW50ZXIudHMiLCJpbXBvcnQgZXJyb3JzQ291bnRlciBmcm9tICcuL19saWIvZXJyb3JzLWNvdW50ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGVycm9yQ29uZmlncykgPT4ge1xuICBsZXQge3ZhbGlkYXRvck5hbWUsIHN0YXR1czogdmFsaWRhdGlvblN0YXR1c30gPSBlcnJvckNvbmZpZ3M7XG4gIGxldCB7JGVsOiAkZXJyb3JFbCwgX2FzeW5jLCBjb250cm9sfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHtlcnJvck1lc3NhZ2VDbGFzc2VzLCBwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCB7ZGlydHksIHZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7JGVsLCAkZWxDb250YWluZXIsICRlcnJvcnNDb250YWluZXJ9ID0gdmFsaWRpZnkuZWxlbWVudHM7XG4gIGxldCBlcnJvckNsYXNzID0gYCR7cHJlZml4fS1lcnJvci0ke3ZhbGlkYXRvck5hbWV9YDtcbiAgbGV0IHN5bmNDbGFzcyA9IGAke3ByZWZpeH0tc3luY2A7XG4gIGxldCBhc3luY0NsYXNzID0gYCR7cHJlZml4fS1hc3luY2A7XG4gIFxuICBpZihkaXJ0eSkge1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcygnbmctcHJpc3RpbmUnKS5hZGRDbGFzcygnbmctZGlydHknKTtcbiAgfSBlbHNlIHtcbiAgICAkZWxDb250YWluZXIuYWRkQ2xhc3MoJ25nLXByaXN0aW5lJyk7XG4gIH1cblxuICBpZihfYXN5bmMpIHtcbiAgICAkZWxDb250YWluZXIuYWRkQ2xhc3MoYXN5bmNDbGFzcykucmVtb3ZlQ2xhc3Moc3luY0NsYXNzKTtcbiAgICAkZXJyb3JzQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKHN5bmNDbGFzcyk7XG4gIH0gZWxzZSB7XG4gICAgJGVsQ29udGFpbmVyLmFkZENsYXNzKHN5bmNDbGFzcykucmVtb3ZlQ2xhc3MoYXN5bmNDbGFzcyk7XG4gICAgJGVycm9yc0NvbnRhaW5lci5hZGRDbGFzcyhzeW5jQ2xhc3MpLnJlbW92ZUNsYXNzKGFzeW5jQ2xhc3MpO1xuICB9XG5cbiAgaWYodmFsaWRhdGlvblN0YXR1cykge1xuICAgICRlbC5hZGRDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoJ25nLXZhbGlkJykuYWRkQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAkZXJyb3JFbC5yZW1vdmVDbGFzcygnbmctdmFsaWQnKS5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLnZhbGlkKTtcbiAgICByZXR1cm4gJGVycm9yRWwuYWRkQ2xhc3MoJ25nLWludmFsaWQnKS5hZGRDbGFzcyhlcnJvck1lc3NhZ2VDbGFzc2VzLmludmFsaWQpO1xuICB9XG4gIFxuICAkZXJyb3JFbC5yZW1vdmVDbGFzcygnbmctaW52YWxpZCcpLnJlbW92ZUNsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMuaW52YWxpZCk7XG4gICRlcnJvckVsLmFkZENsYXNzKCduZy12YWxpZCcpLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzZXMudmFsaWQpO1xuICAkZWxDb250YWluZXIucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICRlbC5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKTtcblxuICBpZighZXJyb3JzQ291bnRlcihzZXR0aW5ncywgJGVsQ29udGFpbmVyKSkge1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcygnbmctaW52YWxpZCcpLmFkZENsYXNzKCduZy12YWxpZCcpO1xuICAgICRlbENvbnRhaW5lci5yZW1vdmVDbGFzcyhfYXN5bmMgPyBhc3luY0NsYXNzIDogc3luY0NsYXNzKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXJzL3ZhbGlkYXRpb24tc3RhdGVyL3Zpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIvZXJyb3JzLXZpc3VhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlbGF5Q2FsY3VsYXRvciAgZnJvbSAnLi9fbGliL2RlbGF5LWNhbGN1bGF0b3InO1xuaW1wb3J0IGVycm9yc1Zpc3VhbGl6ZXIgZnJvbSAnLi9lcnJvcnMtdmlzdWFsaXplci9lcnJvcnMtdmlzdWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBpZighdGhpcy5zaWxlbnQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCB7Y29udHJvbCwgZGVwZW5kZW50cyA9IFtdLCBlcnJvckNvbmZpZ3N9ID0gdGhpcztcbiAgICAgIGxldCBkZWxheSA9IGRlbGF5Q2FsY3VsYXRvcih0aGlzLnNldHRpbmdzLCBlcnJvckNvbmZpZ3MpO1xuICAgICAgXG4gICAgICBjbGVhclRpbWVvdXQoZXJyb3JDb25maWdzLnZpc3VhbGl6YXRpb25UaW1lb3V0KTtcbiAgICAgIFxuICAgICAgZXJyb3JDb25maWdzLnZpc3VhbGl6YXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlcGVuZGVudHMudW5zaGlmdChjb250cm9sKTtcbiAgICAgICAgXy5lYWNoKGRlcGVuZGVudHMsIGNvbnRyb2wgPT4ge1xuICAgICAgICAgIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgICAgICAgICBcbiAgICAgICAgICBfLmV4dGVuZCh2YWxpZGlmeSwge3NpbGVudDogZmFsc2UsIGlnbm9yZURlcGVuZGVudHM6IGZhbHNlfSk7XG4gICAgICAgICAgXy5lYWNoKHZhbGlkaWZ5LmVycm9ycywgXy5wYXJ0aWFsKGVycm9yc1Zpc3VhbGl6ZXIsIHRoaXMuc2V0dGluZ3MsIF8pKTtcbiAgICAgICAgfSlcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmlzdWFsaXplci92aXN1YWxpemVyLnRzIiwiaW1wb3J0IHZhbGlkYXRvciAgICAgICBmcm9tICcuL3ZhbGlkYXRvci92YWxpZGF0b3InO1xuaW1wb3J0IHByZXByb2Nlc3NvciAgICBmcm9tICcuL3ByZXByb2Nlc3Nvci9wcmVwcm9jZXNzb3InO1xuaW1wb3J0IG1lc3NhZ2VyICAgICAgICBmcm9tICcuL21lc3NhZ2VyL21lc3NhZ2VyJztcbmltcG9ydCB7dmFsaWRhdG9yTmFtZX0gZnJvbSAnLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcixcbiAgcHJlcHJvY2Vzc29yLFxuICBtZXNzYWdlcixcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvZGVwcy50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVwZW5kZW5jeU5hbWVzID0+IHtcbiAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcy5tYXAoZGVwZW5kZW5jeU5hbWUgPT4ge1xuICAgIHJldHVybiBfLnVwcGVyRmlyc3QoXy5sb3dlckNhc2UoZGVwZW5kZW5jeU5hbWUpKTtcbiAgfSkuam9pbignLCAnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL19saWIvZGVwZW5kZW5jeS1uYW1lcy1zdHJpbmdpZmllci50cyIsImltcG9ydCBkZXBlbmRlbmN5TmFtZXNTdHJpbmdpZmllciBmcm9tICcuL19saWIvZGVwZW5kZW5jeS1uYW1lcy1zdHJpbmdpZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBkZXBlbmRlbmN5TmFtZXMpID0+IHtcbiAgbGV0IHtjb250cm9sTmFtZVByb3Blcn0gPSBjb250cm9sO1xuICBkZXBlbmRlbmN5TmFtZXMgPSBkZXBlbmRlbmN5TmFtZXNTdHJpbmdpZmllcihkZXBlbmRlbmN5TmFtZXMpO1xuICByZXR1cm4gYCR7Y29udHJvbE5hbWVQcm9wZXJ9IGRlcGVuZHMgb24gJHtkZXBlbmRlbmN5TmFtZXN9YDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL21lc3NhZ2VyL21lc3NhZ2VyLnRzIiwiY29uc3QgZGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQge2RlcGVuZGVuY3lEZXBlbmRlbnRzTWFwfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL19saWIvdmFycy50cyIsImV4cG9ydCBkZWZhdWx0IChzdHIsIGNoYXIpID0+IHtcbiAgbGV0IHJ4ID0gbmV3IFJlZ0V4cChgXFxcXHMqJHtjaGFyfVxcXFxzKmApO1xuICByZXR1cm4gc3RyLnNwbGl0KHJ4KS5tYXAocGllY2UgPT4gcGllY2UudHJpbSgpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9kZXBzL3ByZXByb2Nlc3Nvci9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL19saWIvc3RyLWFycmF5aWZpZXIudHMiLCJpbXBvcnQgc3RyQXJyYXlpZmllciBmcm9tICcuL19saWIvc3RyLWFycmF5aWZpZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWVzLCBjb250cm9sKSA9PiB7XG4gIGxldCB7Y29udHJvbE5hbWV9ID0gY29udHJvbDtcbiAgZGVwZW5kZW5jeU5hbWVzID0gc3RyQXJyYXlpZmllcihkZXBlbmRlbmN5TmFtZXMsICcsJyk7XG4gIGlmKGRlcGVuZGVuY3lOYW1lcy5pbmRleE9mKGNvbnRyb2xOYW1lKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske2NvbnRyb2xOYW1lfV0gY2Fubm90IGRlcGVuZCBvbiBpdHNlbGZgKTtcbiAgfVxuICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXIvZGVwZW5kZW5jeS1uYW1lcy10cmFuc2Zvcm1lci50cyIsImltcG9ydCB7ZGVwZW5kZW5jeVJlcXVlc3RzfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHtfcGFyZW50fSA9IGNvbnRyb2w7XG4gIGxldCBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzID0gZGVwZW5kZW5jeVJlcXVlc3RzLmdldChfcGFyZW50KTtcbiAgICBcbiAgaWYoIWZvcm1EZXBlbmRlbmN5UmVxdWVzdHMpIHtcbiAgICBkZXBlbmRlbmN5UmVxdWVzdHMuc2V0KF9wYXJlbnQsIGZvcm1EZXBlbmRlbmN5UmVxdWVzdHMgPSB7fSk7XG4gIH1cbiAgXG4gIGxldCBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lSZXF1ZXN0c1tkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZighZGVwZW5kZW50cykge1xuICAgIGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeVJlcXVlc3RzW2RlcGVuZGVuY3lOYW1lXSA9IFtdO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goY29udHJvbCk7ICAgIFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyLnRzIiwiaW1wb3J0IGRlcGVuZGVudHNTZXR0ZXIgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL19saWIvZGVwZW5kZW50cy1zZXR0ZXInO1xuaW1wb3J0IGRlcGVuZGVuY3lSZXF1ZXN0UmVnaXN0cmFyIGZyb20gJy4vZGVwZW5kZW5jeS1yZXF1ZXN0LXJlZ2lzdHJhci9kZXBlbmRlbmN5LXJlcXVlc3QtcmVnaXN0cmFyJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKSA9PiB7XG4gIGxldCBkZXBlbmRlbmN5Q29udHJvbCA9IGNvbnRyb2wuX3BhcmVudC5jb250cm9sc1tkZXBlbmRlbmN5TmFtZV07XG4gIFxuICBpZihkZXBlbmRlbmN5Q29udHJvbCkge1xuICAgIHJldHVybiBkZXBlbmRlbnRzU2V0dGVyKGRlcGVuZGVuY3lDb250cm9sLCBjb250cm9sKTtcbiAgfVxuICBcbiAgZGVwZW5kZW5jeVJlcXVlc3RSZWdpc3RyYXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC1yZWdpc3RyYXIvZGVwZW5kZW50LXJlZ2lzdHJhci50cyIsImltcG9ydCBmb3JtRGVwZW5kZW5jeU1hcEdldHRlciAgIGZyb20gJy4vZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXIvZm9ybS1kZXBlbmRlbmN5LW1hcC1nZXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpID0+IHtcbiAgbGV0IHtfcGFyZW50LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQgZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwID0gZm9ybURlcGVuZGVuY3lNYXBHZXR0ZXIoX3BhcmVudCk7XG4gIGxldCBjb250cm9sRGVwZW5kZW50cyA9IGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcFtjb250cm9sTmFtZV07XG4gIFxuICBpZigoY29udHJvbERlcGVuZGVudHMgfHwgW10pLmluZGV4T2YoZGVwZW5kZW5jeU5hbWUpID4gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske2NvbnRyb2xOYW1lfV0gYW5kIFske2RlcGVuZGVuY3lOYW1lfV0gZGVwZW5kIG9uIGVhY2ggb3RoZXJgKTtcbiAgfVxuICBcbiAgbGV0IGRlcGVuZGVudHMgPSBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXBbZGVwZW5kZW5jeU5hbWVdO1xuICBcbiAgaWYoIWRlcGVuZGVudHMpIHtcbiAgICBkZXBlbmRlbnRzID0gZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwW2RlcGVuZGVuY3lOYW1lXSA9IFtdO1xuICB9XG4gIFxuICBkZXBlbmRlbnRzLnB1c2goY29udHJvbE5hbWUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2RlcGVuZGVudC10cmFja2VyLnRzIiwiaW1wb3J0IHtkZXBlbmRlbmN5RGVwZW5kZW50c01hcH0gZnJvbSAnLi4vLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgX3BhcmVudCA9PiB7XG4gIGxldCBmb3JtRGVwZW5kZW5jeURlcGVuZGVudHNNYXAgPSBkZXBlbmRlbmN5RGVwZW5kZW50c01hcC5nZXQoX3BhcmVudCk7XG4gIFxuICBpZighZm9ybURlcGVuZGVuY3lEZXBlbmRlbnRzTWFwKSB7XG4gICAgZGVwZW5kZW5jeURlcGVuZGVudHNNYXAuc2V0KF9wYXJlbnQsIGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcCA9IHt9KTtcbiAgfVxuICBcbiAgcmV0dXJuIGZvcm1EZXBlbmRlbmN5RGVwZW5kZW50c01hcDtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL2RlcGVuZGVudC10cmFja2VyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyL2Zvcm0tZGVwZW5kZW5jeS1tYXAtZ2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVwZW5kZW5jeU5hbWVzVHJhbnNmb3JtZXIgZnJvbSAnLi9kZXBlbmRlbmN5LW5hbWVzLXRyYW5zZm9ybWVyL2RlcGVuZGVuY3ktbmFtZXMtdHJhbnNmb3JtZXInO1xuaW1wb3J0IGRlcGVuZGVudFRyYWNrZXIgICAgICAgICAgIGZyb20gJy4vZGVwZW5kZW50LXRyYWNrZXIvZGVwZW5kZW50LXRyYWNrZXInO1xuaW1wb3J0IGRlcGVuZGVudFJlZ2lzdHJhciAgICAgICAgIGZyb20gJy4vZGVwZW5kZW50LXJlZ2lzdHJhci9kZXBlbmRlbnQtcmVnaXN0cmFyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGRlcGVuZGVuY3lOYW1lcykgPT4ge1xuICBkZXBlbmRlbmN5TmFtZXMgPSBkZXBlbmRlbmN5TmFtZXNUcmFuc2Zvcm1lcihkZXBlbmRlbmN5TmFtZXMsIGNvbnRyb2wpO1xuXG4gIF8uZWFjaChkZXBlbmRlbmN5TmFtZXMsIGRlcGVuZGVuY3lOYW1lID0+IHtcbiAgICBkZXBlbmRlbnRUcmFja2VyKGRlcGVuZGVuY3lOYW1lLCBjb250cm9sKTtcbiAgICBkZXBlbmRlbnRSZWdpc3RyYXIoZGVwZW5kZW5jeU5hbWUsIGNvbnRyb2wpO1xuICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsImltcG9ydCB7dmFsaWRhdG9yTmFtZX0gZnJvbSAnLi4vX2xpYi92YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIGRlcGVuZGVuY3lOYW1lcykgPT4ge1xuICBsZXQge2NvbnRyb2xzfSA9IGNvbnRyb2wuX3BhcmVudDtcbiAgXG4gIGZvcihsZXQgZGVwZW5kZW5jeU5hbWUgb2YgZGVwZW5kZW5jeU5hbWVzKSB7XG4gICAgbGV0IGRlcGVuZGVuY3lDb250cm9sID0gY29udHJvbHNbZGVwZW5kZW5jeU5hbWVdO1xuXG4gICAgaWYoIWRlcGVuZGVuY3lDb250cm9sKSB7XG4gICAgICBjb25zb2xlLndhcm4oYGRlcGVuZGVuY3kgWyR7ZGVwZW5kZW5jeU5hbWV9XSBpcyBub3QgZGVjbGFyZWRgKTtcbiAgICB9XG5cbiAgICBpZighZGVwZW5kZW5jeUNvbnRyb2wgfHwgZGVwZW5kZW5jeUNvbnRyb2wuaW52YWxpZCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2RlcHMvdmFsaWRhdG9yL3ZhbGlkYXRvci50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnZW1haWxHb3YnO1xuY29uc3QgZW1haWxHb3ZSeCA9IC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqKFxcLihnb3Z8bWlsKSkkLztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFlbWFpbEdvdlJ4LnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBtZXNzYWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IGlzIG5vdCBhIHZhbGlkIGdvdmVybm1lbnQgZW1haWxgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VtYWlsLWdvdi9lbWFpbC1nb3YudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ2VtYWlsJztcbmNvbnN0IGVtYWlsUnggPSAvXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKFxcLlstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSspKkBbQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KFxcLltBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8pKiQvO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sKSB7XG4gICAgaWYoIWVtYWlsUngudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgbm90IGEgdmFsaWQgZW1haWxgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL2VtYWlsL2VtYWlsLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdlcXVhbHNUbyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdG9yKGNvbnRyb2wsIGVxdWFsc1RvKSB7XG4gICAgbGV0IHt2YWx1ZSwgX3BhcmVudH0gPSBjb250cm9sO1xuICAgIGxldCBlcXVhbHNUb0NvbnRyb2wgPSBfcGFyZW50LmNvbnRyb2xzW2VxdWFsc1RvXTtcblxuICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZSAhPT0gZXF1YWxzVG9Db250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIHZhbGlkYXRvckNvbmZpZ3MpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZX0gbXVzdCBlcXVhbCB0byAke3ZhbGlkYXRvckNvbmZpZ3N9YDtcbiAgfSxcblxuICB2YWxpZGF0b3JOYW1lXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9lcXVhbHMtdG8vZXF1YWxzLXRvLnRzIiwiY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdtYXhMZW5ndGgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRvcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICBsZXQge3ZhbHVlfSA9IGNvbnRyb2w7XG4gICAgaWYoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgcmV0dXJuIHtbdmFsaWRhdG9yTmFtZV06IHRydWV9O1xuICAgIH1cbiAgfSxcbiAgXG4gIHByZXByb2Nlc3Nvcihjb250cm9sLCBtYXhMZW5ndGgpIHtcbiAgICBpZighbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21heGltdW0gbGVuZ3RoIHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiArbWF4TGVuZ3RoO1xuICB9LFxuICBcbiAgbWVzc2FnZXIoY29udHJvbCwgbWF4TGVuZ3RoKSB7XG4gICAgcmV0dXJuIGAke2NvbnRyb2wuY29udHJvbE5hbWVQcm9wZXJ9IHNob3VsZCBiZSBsZXNzIHRoYW4gJHttYXhMZW5ndGh9IGNoYXJhY3RlcnNgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL21heC1sZW5ndGgvbWF4LWxlbmd0aC50cyIsImNvbnN0IHZhbGlkYXRvck5hbWUgPSAnbWluTGVuZ3RoJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgaWYoY29udHJvbC52YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGgpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgbWluTGVuZ3RoKSB7XG4gICAgaWYoIW1pbkxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW5pbXVtIGxlbmd0aCBzaG91bGQgYmUgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gK21pbkxlbmd0aDtcbiAgfSxcbiAgXG4gIG1lc3NhZ2VyKGNvbnRyb2wsIG1pbkxlbmd0aCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBzaG91bGQgYmUgJHttaW5MZW5ndGh9IGNoYXJhY3RlcnNgO1xuICB9LFxuICBcbiAgdmFsaWRhdG9yTmFtZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL21pbi1sZW5ndGgvbWluLWxlbmd0aC50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmFsaWRhdG9yTmFtZSA9ICdwYXR0ZXJuJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCwgcGF0dGVybikge1xuICAgIGlmKCFwYXR0ZXJuLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgIHJldHVybiB7W3ZhbGlkYXRvck5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG4gIFxuICBwcmVwcm9jZXNzb3IoY29udHJvbCwgcGF0dGVybikge1xuICAgIGlmKCFwYXR0ZXJuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NwZWNpZnkgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4nKTtcbiAgICB9XG4gICAgXG4gICAgaWYoXy5pc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm59JGApO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfSxcbiAgXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9wYXR0ZXJuL3BhdHRlcm4udHMiLCJjb25zdCBkaXJlY3RpdmVOYW1lID0gJ3JlcXVpcmVkJztcbmNvbnN0IHZhbGlkYXRvck5hbWUgPSAncmVxdWlyZWRUcnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKGNvbnRyb2wudmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7W2RpcmVjdGl2ZU5hbWVdOiB0cnVlfTtcbiAgICB9XG4gIH0sXG5cbiAgbWVzc2FnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBgJHtjb250cm9sLmNvbnRyb2xOYW1lUHJvcGVyfSBpcyByZXF1aXJlZGA7XG4gIH0sXG5cbiAgZGlyZWN0aXZlTmFtZSxcblxuICB2YWxpZGF0b3JOYW1lLFxuICBcbiAgY2hlY2tib3g6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC10cnVlL3JlcXVpcmVkLXRydWUudHMiLCJjb25zdCB2YWxpZGF0b3JOYW1lID0gJ3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0b3IoY29udHJvbCkge1xuICAgIGlmKCFjb250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1t2YWxpZGF0b3JOYW1lXTogdHJ1ZX07XG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gYCR7Y29udHJvbC5jb250cm9sTmFtZVByb3Blcn0gaXMgcmVxdWlyZWRgO1xuICB9LFxuXG4gIHZhbGlkYXRvck5hbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRhdG9ycy9yZXF1aXJlZC9yZXF1aXJlZC50cyIsImltcG9ydCBkZXBzVmFsaWRhdG9yICAgICAgICAgZnJvbSAnLi9kZXBzL2RlcHMnO1xuaW1wb3J0IGVtYWlsVmFsaWRhdG9yICAgICAgICBmcm9tICcuL2VtYWlsL2VtYWlsJztcbmltcG9ydCBlbWFpbEdvdlZhbGlkYXRvciAgICAgZnJvbSAnLi9lbWFpbC1nb3YvZW1haWwtZ292JztcbmltcG9ydCBlcXVhbHNUb1ZhbGlkYXRvciAgICAgZnJvbSAnLi9lcXVhbHMtdG8vZXF1YWxzLXRvJztcbmltcG9ydCBtYXhMZW5ndGhWYWxpZGF0b3IgICAgZnJvbSAnLi9tYXgtbGVuZ3RoL21heC1sZW5ndGgnO1xuaW1wb3J0IG1pbkxlbmd0aFZhbGlkYXRvciAgICBmcm9tICcuL21pbi1sZW5ndGgvbWluLWxlbmd0aCc7XG5pbXBvcnQgcGF0dGVyblZhbGlkYXRvciAgICAgIGZyb20gJy4vcGF0dGVybi9wYXR0ZXJuJztcbmltcG9ydCByZXF1aXJlZFZhbGlkYXRvciAgICAgZnJvbSAnLi9yZXF1aXJlZC9yZXF1aXJlZCc7XG5pbXBvcnQgcmVxdWlyZWRUcnVlVmFsaWRhdG9yIGZyb20gJy4vcmVxdWlyZWQtdHJ1ZS9yZXF1aXJlZC10cnVlJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBkZXBzVmFsaWRhdG9yLFxuICByZXF1aXJlZFZhbGlkYXRvcixcbiAgbWluTGVuZ3RoVmFsaWRhdG9yLFxuICBtYXhMZW5ndGhWYWxpZGF0b3IsXG4gIHBhdHRlcm5WYWxpZGF0b3IsXG4gIGVtYWlsVmFsaWRhdG9yLFxuICBlbWFpbEdvdlZhbGlkYXRvcixcbiAgZXF1YWxzVG9WYWxpZGF0b3IsXG4gIHJlcXVpcmVkVHJ1ZVZhbGlkYXRvclxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiLCJleHBvcnQgZGVmYXVsdCAobmFtZSwgY2hlY2tib3gpID0+IHtcbiAgbGV0IGNoZWNrYm94VHlwZSA9ICdbdHlwZT1jaGVja2JveF0nO1xuICBsZXQgY29udHJvbFR5cGVzID0gWydmb3JtQ29udHJvbE5hbWUnLCAnZm9ybUNvbnRyb2wnLCAnbmdNb2RlbCddXG4gIGNoZWNrYm94ID0gY2hlY2tib3ggPyBgaW5wdXQke2NoZWNrYm94VHlwZX1gIDogYDpub3QoJHtjaGVja2JveFR5cGV9KWA7XG4gIFxuICByZXR1cm4gY29udHJvbFR5cGVzLnJlZHVjZSgoc2VsZWN0b3IsIGNvbnRyb2xUeXBlKSA9PiB7XG4gICAgc2VsZWN0b3IucHVzaChgJHtjaGVja2JveH1bJHtuYW1lfV1bJHtjb250cm9sVHlwZX1dYCk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9LCBbXSkuam9pbignLCcpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMSURBVE9SUywgTkdfQVNZTkNfVkFMSURBVE9SU30gICAgICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHNlbGVjdG9yQXNzZW1ibGVyICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL19saWIvc2VsZWN0b3ItYXNzZW1ibGVyJztcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdG9ycyA9PiB7XG4gIHJldHVybiB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3JDb25maWd1cmF0b3IgPT4ge1xuICAgIGxldCB7YXN5bmM6IF9hc3luYywgY2hlY2tib3gsIHZhbGlkYXRvck5hbWVQcmVmaXhlZH0gPSB2YWxpZGF0b3JDb25maWd1cmF0b3I7XG4gICAgbGV0IHtkaXJlY3RpdmVOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yO1xuICAgIGxldCBkaXJlY3RpdmVOYW1lID0gZGlyZWN0aXZlTmFtZVByZWZpeGVkIHx8IHZhbGlkYXRvck5hbWVQcmVmaXhlZDtcbiAgICBsZXQgc2VsZWN0b3IgPSBzZWxlY3RvckFzc2VtYmxlcihkaXJlY3RpdmVOYW1lLCBjaGVja2JveCk7XG5cbiAgICBsZXQgcHJvdmlkZXJzID0gW3tcbiAgICAgIHByb3ZpZGU6IF9hc3luYyA/IE5HX0FTWU5DX1ZBTElEQVRPUlMgOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3MpLFxuICAgICAgbXVsdGk6IHRydWUgICAgICAgIFxuICAgIH1dO1xuICAgIFxuICAgIEBEaXJlY3RpdmUoe3NlbGVjdG9yLCBwcm92aWRlcnN9KSBjbGFzcyBWYWxpZGF0b3JEaXJlY3RpdmVDbGFzcyB7XG4gICAgICBwcml2YXRlIHZhbGlkYXRvcjtcbiAgICAgIHByaXZhdGUgb25DaGFuZ2U7XG4gICAgICBwcml2YXRlIGNvbnRyb2w7XG4gICAgXG4gICAgICBASW5wdXQoYCR7ZGlyZWN0aXZlTmFtZX1gKSBwcml2YXRlIGNvbmZpZ3M7XG4gICAgXG4gICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuICAgIFxuICAgICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZignY29uZmlncycgaW4gY2hhbmdlcykge1xuICAgICAgICAgIGlmKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICB2YWxpZGF0ZShjb250cm9sPykge1xuICAgICAgICBsZXQgZXJyb3IgPSB7W2RpcmVjdGl2ZU5hbWVdOiB0cnVlfTtcbiAgICAgICAgXG4gICAgICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICAgICBjb250cm9sLCBcbiAgICAgICAgICB2YWxpZGF0ZSgpIHsgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBfYXN5bmMgPyBQcm9taXNlLnJlc29sdmUoZXJyb3IpIDogZXJyb3I7IFxuICAgICAgfVxuICAgIFxuICAgICAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbikge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47IFxuICAgICAgfVxuICAgIFxuICAgICAgcHJpdmF0ZSBjcmVhdGVWYWxpZGF0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yQ29uZmlndXJhdG9yKHRoaXMuY29udHJvbCwgdGhpcy5jb25maWdzLCB0aGlzLmVsKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gVmFsaWRhdG9yRGlyZWN0aXZlQ2xhc3M7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBwcmVmaXhlciAgICAgICAgICAgICAgZnJvbSAnLi4vX2xpYi9wcmVmaXhlcic7XG5pbXBvcnQgdmFsaWRhdG9yQ29uZmlndXJhdG9yIGZyb20gJy4uL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgZGlyZWN0aXZlc0dlbmVyYXRvciAgIGZyb20gJy4uL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yL2RpcmVjdGl2ZXMtZ2VuZXJhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCB2YWxpZGF0b3JzKSA9PiB7XG4gIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLm1hcCh2YWxpZGF0b3IgPT4ge1xuICAgIGxldCB7dmFsaWRhdG9yTmFtZSwgZGlyZWN0aXZlTmFtZX0gPSB2YWxpZGF0b3I7XG4gICAgbGV0IHZhbGlkYXRvck5hbWVQcmVmaXhlZCA9IHByZWZpeGVyKHNldHRpbmdzLCB2YWxpZGF0b3JOYW1lKTtcbiAgICBsZXQgZGlyZWN0aXZlTmFtZVByZWZpeGVkID0gcHJlZml4ZXIoc2V0dGluZ3MsIGRpcmVjdGl2ZU5hbWUpO1xuICAgIF8uZXh0ZW5kKHZhbGlkYXRvciwge3ZhbGlkYXRvck5hbWVQcmVmaXhlZCwgZGlyZWN0aXZlTmFtZVByZWZpeGVkfSk7XG4gICAgcmV0dXJuIHZhbGlkYXRvckNvbmZpZ3VyYXRvcihzZXR0aW5ncywgdmFsaWRhdG9yKTtcbiAgfSk7XG4gIFxuICBsZXQgZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXNHZW5lcmF0b3IodmFsaWRhdG9ycyk7XG5cbiAgQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IGRpcmVjdGl2ZXMsIFxuICAgIGV4cG9ydHM6IGRpcmVjdGl2ZXNcbiAgfSkgY2xhc3MgVmFsaWRhdG9yTW9kdWxlIHt9XG4gIFxuICByZXR1cm4gVmFsaWRhdG9yTW9kdWxlOyAgICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci9tb2R1bGUtZ2VuZXJhdG9yL21vZHVsZS1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQXNzaWduZXIgICAgIGZyb20gJy4vbmFtZS1hc3NpZ25lci9uYW1lLWFzc2lnbmVyJztcbmltcG9ydCBWYWxpZGF0aW9uU3RhdGVyIGZyb20gJy4uLy4uLy4uL3N0YXRlcnMvdmFsaWRhdGlvbi1zdGF0ZXIvdmFsaWRhdGlvbi1zdGF0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIGNvbnRyb2wsIGVsKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgXG4gIGlmKCF2YWxpZGlmeSkge1xuICAgIGVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICBuYW1lQXNzaWduZXIoY29udHJvbCk7XG4gICAgXG4gICAgdmFsaWRpZnkgPSB7XG4gICAgICBlbGVtZW50czoge30sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgdmFsaWRhdGlvblN0YXRlcjogbmV3IFZhbGlkYXRpb25TdGF0ZXIoc2V0dGluZ3MsIGNvbnRyb2wpXG4gICAgfTtcbiAgICBcbiAgICBfLmV4dGVuZChjb250cm9sLCB7dmFsaWRpZnksIGVsLCAkZWw6ICQoZWwpfSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvZGF0YS1pbml0aWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbCA9PiB7XG4gIGxldCB7Y29udHJvbHN9ID0gY29udHJvbC5fcGFyZW50O1xuICBsZXQgY29udHJvbE5hbWVzID0gXy5rZXlzKGNvbnRyb2xzKTtcbiAgZm9yKGxldCBjb250cm9sTmFtZSBvZiBjb250cm9sTmFtZXMpIHtcbiAgICBpZihjb250cm9sc1tjb250cm9sTmFtZV0gPT09IGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sTmFtZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2RhdGEtaW5pdGlhbGl6ZXIvbmFtZS1hc3NpZ25lci9saWIvbmFtZS1hY2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBuYW1lQWNjZXNzb3IgZnJvbSAnLi9saWIvbmFtZS1hY2Nlc3Nvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2wgPT4ge1xuICBsZXQge2NvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIFxuICBpZighY29udHJvbE5hbWUpIHtcbiAgICBjb250cm9sTmFtZSA9IG5hbWVBY2Nlc3Nvcihjb250cm9sKTtcbiAgICBfLmV4dGVuZChjb250cm9sLCB7XG4gICAgICBjb250cm9sTmFtZSxcbiAgICAgIGNvbnRyb2xOYW1lUHJvcGVyOiBfLnVwcGVyRmlyc3QoXy5sb3dlckNhc2UoY29udHJvbE5hbWUpKVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kYXRhLWluaXRpYWxpemVyL25hbWUtYXNzaWduZXIvbmFtZS1hc3NpZ25lci50cyIsImltcG9ydCBkZXBlbmRlbnRzU2V0dGVyICAgICBmcm9tICcuLi8uLi8uLi9fbGliL2RlcGVuZGVudHMtc2V0dGVyJztcbmltcG9ydCB7ZGVwZW5kZW5jeVJlcXVlc3RzfSBmcm9tICcuLi8uLi8uLi9fbGliL3ZhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sID0+IHtcbiAgbGV0IHtfcGFyZW50LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQgcGFyZW50UmVjb3JkcyA9IGRlcGVuZGVuY3lSZXF1ZXN0cy5nZXQoX3BhcmVudCk7XG4gIFxuICBpZihwYXJlbnRSZWNvcmRzKSB7XG4gICAgbGV0IGRlcGVuZGVudFJlY29yZHMgPSBwYXJlbnRSZWNvcmRzW2NvbnRyb2xOYW1lXTtcblxuICAgIGlmKGRlcGVuZGVudFJlY29yZHMpIHtcbiAgICAgIGRlcGVuZGVudHNTZXR0ZXIoY29udHJvbCwgZGVwZW5kZW50UmVjb3Jkcyk7XG4gICAgICBkZWxldGUgcGFyZW50UmVjb3Jkc1tjb250cm9sTmFtZV07XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci9kZXBlbmRlbnRzLXJlZ2lzdHJhci9kZXBlbmRlbnRzLXJlZ2lzdHJhci50cyIsImltcG9ydCAqIGFzICQgICAgICAgICAgICAgICAgICBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyICAgICAgICAgZnJvbSAnLi4vLi4vX2xpYi9jbGFzcy1pZC1hc3NpZ25lcic7XG5pbXBvcnQgY29udGFpbmVyQWRkZXIgICAgICAgICAgZnJvbSAnLi4vX2xpYi9jb250YWluZXItYWRkZXInO1xuaW1wb3J0IEFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyIGZyb20gJy4uLy4uLy4uLy4uL3N0YXRlcnMvYXN5bmMtcHJvZ3Jlc3MtdmlzdWFsaXplci9hc3luYy1wcm9ncmVzcy12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ZhbGlkaWZ5LCBjb250cm9sTmFtZX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jcyA9IHt9LCBlbGVtZW50c30gPSB2YWxpZGlmeTtcbiAgXG4gIGlmKCF2YWxpZGF0b3JEZWNsYXJhdGlvbi5hc3luYyB8fCAhXy5pc0VtcHR5KGFzeW5jcykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGxldCB7YXN5bmNTdGF0dXNIaWRlQ2xhc3MsIHNlbGVjdG9yc30gPSBzZXR0aW5ncztcbiAgbGV0IHthc3luY1N0YXR1c0NvbnRhaW5lcn0gPSBzZWxlY3RvcnM7XG4gIGxldCB7JGVsLCAkZWxDb250YWluZXJ9ID0gZWxlbWVudHM7XG4gIGxldCAkYXN5bmNzQ29udGFpbmVyID0gJCgnPGRpdi8+Jyk7XG4gIGxldCAkcGVuZGluZyA9ICQoJzxkaXYvPicpO1xuICBsZXQgJHN1Y2Nlc3MgPSAkKCc8ZGl2Lz4nKTtcblxuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRhc3luY3NDb250YWluZXIsICdhc3luY3MtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRwZW5kaW5nLCAnYXN5bmMtcGVuZGluZycsIGNvbnRyb2xOYW1lKTtcbiAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkc3VjY2VzcywgJ2FzeW5jLXN1Y2Nlc3MnLCBjb250cm9sTmFtZSk7XG4gIFxuICAkYXN5bmNzQ29udGFpbmVyLmFkZENsYXNzKGFzeW5jU3RhdHVzSGlkZUNsYXNzKTtcbiAgJHBlbmRpbmcuYWRkQ2xhc3MoYXN5bmNTdGF0dXNIaWRlQ2xhc3MpO1xuICAkc3VjY2Vzcy5hZGRDbGFzcyhhc3luY1N0YXR1c0hpZGVDbGFzcyk7XG4gICRhc3luY3NDb250YWluZXIuYXBwZW5kKCRwZW5kaW5nKS5hcHBlbmQoJHN1Y2Nlc3MpO1xuICBcbiAgXy5leHRlbmQoYXN5bmNzLCB7JGFzeW5jc0NvbnRhaW5lciwgJHBlbmRpbmcsICRzdWNjZXNzfSk7XG4gIF8uZXh0ZW5kKHZhbGlkaWZ5LCB7YXN5bmNzLCBhc3luY1N0YXR1c2VzOiB7fX0pO1xuICBcbiAgY29udGFpbmVyQWRkZXIoJGVsLCAkYXN5bmNzQ29udGFpbmVyLCAkZWxDb250YWluZXIsIGFzeW5jU3RhdHVzQ29udGFpbmVyKTtcbiAgdmFsaWRpZnkuYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIgPSBuZXcgQXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIvYXN5bmMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJpbXBvcnQgZXJyb3JzQ29udGFpbmVyQnVpbGRlciBmcm9tICcuL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXInO1xuaW1wb3J0IGFzeW5jQ29udGFpbmVyQnVpbGRlciAgZnJvbSAnLi9hc3luYy1jb250YWluZXItYnVpbGRlci9hc3luYy1jb250YWluZXItYnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgZXJyb3JzQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCk7XG4gIGFzeW5jQ29udGFpbmVyQnVpbGRlcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvZWxlbWVudHMtaW5pdGlhbGl6ZXIvZWxlbWVudHMtaW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uLy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IGNvbnRhaW5lckFkZGVyICBmcm9tICcuLi9fbGliL2NvbnRhaW5lci1hZGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCkgPT4ge1xuICBsZXQgeyRlbCwgdmFsaWRpZnksIGNvbnRyb2xOYW1lfSA9IGNvbnRyb2w7XG4gIGxldCB7ZWxlbWVudHN9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighXy5pc0VtcHR5KGVsZW1lbnRzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgbGV0IHtlbGVtZW50Q29udGFpbmVyLCBlcnJvcnNDb250YWluZXJ9ID0gc2V0dGluZ3Muc2VsZWN0b3JzO1xuICBsZXQgJGVsQ29udGFpbmVyID0gZWxlbWVudENvbnRhaW5lciA/ICRlbC5jbG9zZXN0KGVsZW1lbnRDb250YWluZXIpIDogJCgpO1xuICBsZXQgJGVycm9yc0NvbnRhaW5lciA9ICQoJzxkaXYvPicpO1xuXG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsLCAnZWwnLCBjb250cm9sTmFtZSk7XG4gIGNsYXNzSWRBc3NpZ25lcihzZXR0aW5ncywgJGVsQ29udGFpbmVyLCAnZWwtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBjbGFzc0lkQXNzaWduZXIoc2V0dGluZ3MsICRlcnJvcnNDb250YWluZXIsICdlcnJvcnMtY29udGFpbmVyJywgY29udHJvbE5hbWUpO1xuICBcbiAgXy5leHRlbmQoZWxlbWVudHMsIHskZWwsICRlbENvbnRhaW5lciwgJGVycm9yc0NvbnRhaW5lcn0pO1xuICBjb250YWluZXJBZGRlcigkZWwsICRlcnJvcnNDb250YWluZXIsICRlbENvbnRhaW5lciwgZXJyb3JzQ29udGFpbmVyKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2VsZW1lbnRzLWluaXRpYWxpemVyL2Vycm9ycy1jb250YWluZXItYnVpbGRlci9lcnJvcnMtY29udGFpbmVyLWJ1aWxkZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoZXJyb3JNZXNzYWdlLCBwcmVmaXgpID0+IHtcbiAgbGV0IGdlbmVyYWxDbGFzcyA9IHByZWZpeCArICctZXJyb3Itd29yZCc7XG4gIFxuICByZXR1cm4gZXJyb3JNZXNzYWdlLnNwbGl0KC9cXHMrLykubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgIGxldCBzcGVjaWZpY0NsYXNzID0gZ2VuZXJhbENsYXNzICsgJy0nICsgaW5kZXg7XG4gICAgcmV0dXJuIGA8c3BhbiBjbGFzcyA9IFwiJHtnZW5lcmFsQ2xhc3N9ICR7c3BlY2lmaWNDbGFzc31cIj4ke3dvcmR9PC9zcGFuPmA7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9fbGliL3NwYW5uaWZpZXIudHMiLCJpbXBvcnQgKiBhcyAkICAgICAgICAgIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBfICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NJZEFzc2lnbmVyIGZyb20gJy4uL19saWIvY2xhc3MtaWQtYXNzaWduZXInO1xuaW1wb3J0IHNwYW5uaWZpZXIgICAgICBmcm9tICcuL19saWIvc3Bhbm5pZmllcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWQsIGFzeW5jOiBfYXN5bmN9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7bWVzc2FnZXJ9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7ZWxlbWVudHMsIGVycm9yc30gPSBjb250cm9sLnZhbGlkaWZ5O1xuICBsZXQgYmFzZUVycm9yQ29uZmlncyA9IHskZWw6ICQoKSwgX2FzeW5jLCB2YWxpZGF0b3JOYW1lLCBjb250cm9sfTtcbiAgXG4gIGlmKCFtZXNzYWdlcikge1xuICAgIHJldHVybiBlcnJvcnNbdmFsaWRhdG9yTmFtZV0gPSBiYXNlRXJyb3JDb25maWdzO1xuICB9XG4gIFxuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdIHx8IGJhc2VFcnJvckNvbmZpZ3M7XG4gIGxldCB7JGVsfSA9IGVycm9yQ29uZmlncztcbiAgbGV0IHt2YWxpZGF0b3I6IHZhbGlkYXRvckNvbmZpZ3MsIG1lc3NhZ2VyOiBtZXNzYWdlckNvbmZpZ3N9ID0gY29uZmlncztcbiAgbGV0IHtlcnJvck1lc3NhZ2VDbGFzc2VzLCBwcmVmaXh9ID0gc2V0dGluZ3M7XG4gIGxldCB7JGVycm9yc0NvbnRhaW5lcn0gPSBlbGVtZW50cztcbiAgbGV0IGVycm9yTWVzc2FnZXIgPSBfLmlzRnVuY3Rpb24obWVzc2FnZXIpID8gbWVzc2FnZXIgOiAoKSA9PiBtZXNzYWdlcjtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZXIoY29udHJvbCwgdmFsaWRhdG9yQ29uZmlncywgbWVzc2FnZXJDb25maWdzKTtcbiAgZXJyb3JNZXNzYWdlID0gc3Bhbm5pZmllcihlcnJvck1lc3NhZ2UsIHByZWZpeCk7XG4gIFxuICBpZighJGVsLmxlbmd0aCkge1xuICAgIGxldCBzeW5jQXN5bmNDbGFzcyA9IGAke3ByZWZpeH0tYCArIChfYXN5bmMgPyAnYXN5bmMnIDogJ3N5bmMnKTtcbiAgICAkZWwgPSAkKCc8ZGl2Lz4nKTtcbiAgICAkZWwuYWRkQ2xhc3Moc3luY0FzeW5jQ2xhc3MpO1xuICAgICRlcnJvcnNDb250YWluZXIuYXBwZW5kKCRlbCk7XG4gICAgY2xhc3NJZEFzc2lnbmVyKHNldHRpbmdzLCAkZWwsICdlcnJvcicsIHZhbGlkYXRvck5hbWUpO1xuICAgIGVycm9yQ29uZmlncyA9IF8uZXh0ZW5kKGVycm9yQ29uZmlncywgeyRlbH0pO1xuICAgIFxuICAgIGlmKGVycm9yTWVzc2FnZUNsYXNzZXMgJiYgZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbml0aWFsKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoZXJyb3JNZXNzYWdlQ2xhc3Nlcy5pbml0aWFsKTtcbiAgICB9XG4gICAgXG4gICAgaWYoX2FzeW5jKSB7XG4gICAgICBlcnJvckNvbmZpZ3MucmVxdWVzdHMgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgZXJyb3JzW3ZhbGlkYXRvck5hbWVdID0gZXJyb3JDb25maWdzO1xuICB9XG5cbiAgJGVsLmh0bWwoZXJyb3JNZXNzYWdlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL2Vycm9yLWdlbmVyYXRvci9lcnJvci1nZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBsZXQge3ByZXByb2Nlc3Nvcn0gPSB2YWxpZGF0b3JEZWNsYXJhdGlvbjtcbiAgXG4gIGlmKCFfLmlzUGxhaW5PYmplY3QoY29uZmlncykpIHtcbiAgICBjb25maWdzID0ge3ZhbGlkYXRvcjogY29uZmlnc307XG4gIH1cbiAgXG4gIGlmKHByZXByb2Nlc3Nvcikge1xuICAgIGNvbmZpZ3MudmFsaWRhdG9yID0gcHJlcHJvY2Vzc29yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWdzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvcHJlcHJvY2Vzc29yL3ByZXByb2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyIGZyb20gJy4uL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplcic7XG5pbXBvcnQgaW5pdGlhbERhdGFTZXR0ZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXInO1xuaW1wb3J0IHJlcXVlc3RzTnVsbGlmaWVyICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvcmVxdWVzdHMtbnVsbGlmaWVyL3JlcXVlc3RzLW51bGxpZmllcic7XG5pbXBvcnQgaW5pdGlhbFZpc3VhbGl6ZXIgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsLXZpc3VhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyJztcbmltcG9ydCBmaW5hbERhdGFTZXR0ZXIgICAgICAgICAgICBmcm9tICcuL2ZpbmFsaXplci9maW5hbC1kYXRhLXNldHRlci9maW5hbC1kYXRhLXNldHRlcic7XG5pbXBvcnQgZmluYWxWaXN1YWxpemVyICAgICAgICAgICAgZnJvbSAnLi9maW5hbGl6ZXIvZmluYWwtdmlzdWFsaXplci9maW5hbC12aXN1YWxpemVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbikgPT4ge1xuICBpZihjb250cm9sLnZhbGlkVmFsdWUgPT09IGNvbnRyb2wudmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0gICBcbiAgXG4gIGxldCB7dmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yTmFtZVByZWZpeGVkLCB2YWxpZGF0b3J9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcbiAgbGV0IHthc3luY1Byb2dyZXNzVmlzdWFsaXplciwgZXJyb3JzLCB2YWxpZGF0aW9uU3RhdGVyfSA9IHZhbGlkaWZ5O1xuICBsZXQgZXJyb3JDb25maWdzID0gZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuICBsZXQgdmFsaWRhdGlvbklkID0gXy51bmlxdWVJZCgpO1xuXG4gIGlmKGNvbnRyb2wuaW52YWxpZFZhbHVlID09PSBjb250cm9sLnZhbHVlKSB7XG4gICAgbGV0IGVycm9yID0ge1t2YWxpZGF0b3JOYW1lUHJlZml4ZWRdOiB0cnVlfTtcbiAgICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCBlcnJvcikudmlzdWFsaXplKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlcnJvcik7XG4gIH1cbiAgXG4gIGluaXRpYWxEYXRhU2V0dGVyKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUpO1xuICByZXF1ZXN0c051bGxpZmllcihjb250cm9sLCB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uSWQpO1xuICBpbml0aWFsVmlzdWFsaXplcihjb250cm9sLCB2YWxpZGF0b3JOYW1lKTtcbiAgXG4gIGNsZWFyVGltZW91dChlcnJvckNvbmZpZ3MuYXN5bmNEZWJvdW5jZVRpbWVvdXQpO1xuICBcbiAgZXJyb3JDb25maWdzLmFzeW5jRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYodmFsaWRpZnkuc3luYykge1xuICAgICAgcmV0dXJuIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcihmYWxzZSk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcodHJ1ZSk7XG4gICAgXG4gICAgdmFsaWRhdG9yKGNvbnRyb2wsIGNvbmZpZ3MudmFsaWRhdG9yKS50aGVuKHZhbGlkYXRpb25TdGF0dXMgPT4ge1xuICAgICAgaWYoZXJyb3JDb25maWdzLnJlcXVlc3RzW3ZhbGlkYXRpb25JZF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YWxpZGF0aW9uU3RhdHVzID0gdmFsaWRhdGlvblN0YXR1c05vcm1hbGl6ZXIoc2V0dGluZ3MsIHZhbGlkYXRpb25TdGF0dXMpO1xuICAgICAgZmluYWxEYXRhU2V0dGVyKGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uLCB2YWxpZGF0aW9uU3RhdHVzKTtcbiAgICAgIGZpbmFsVmlzdWFsaXplcihzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cyk7ICAgICAgXG4gICAgfSk7XG4gIH0sIHNldHRpbmdzLmFzeW5jRGVib3VuY2VUaW1lKTtcbiAgXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1t2YWxpZGF0b3JOYW1lUHJlZml4ZWRdOiB0cnVlfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvYXN5bmMtdmFsaWRhdG9yLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yRGVjbGFyYXRpb24sIHZhbGlkYXRpb25TdGF0dXMpID0+IHtcbiAgbGV0IHtlcnJvcnMsIHZhbHVlLCB2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge2FzeW5jU3RhdHVzZXMsIGVycm9yczogX2Vycm9yc30gPSB2YWxpZGlmeTtcbiAgbGV0IHt2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3JOYW1lUHJlZml4ZWR9ID0gdmFsaWRhdG9yRGVjbGFyYXRpb247XG4gIFxuICBfZXJyb3JzW3ZhbGlkYXRvck5hbWVdLnJlcXVlc3RzID0ge307XG4gIHZhbGlkaWZ5LnN5bmMgPSBmYWxzZTtcbiAgYXN5bmNTdGF0dXNlc1t2YWxpZGF0b3JOYW1lXSA9IGZhbHNlO1xuICBcbiAgaWYoIXZhbGlkYXRpb25TdGF0dXMpIHtcbiAgICBlcnJvcnMgPSBfLm9taXQoZXJyb3JzLCBbdmFsaWRhdG9yTmFtZVByZWZpeGVkXSk7XG4gIH1cbiAgXG4gIF8uZXh0ZW5kKGVycm9ycywgdmFsaWRhdGlvblN0YXR1cyk7XG4gIFxuICBpZihfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgIGNvbnRyb2wudmFsaWRWYWx1ZSA9IHZhbHVlO1xuICAgIGVycm9ycyA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnRyb2wuaW52YWxpZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgXG4gIGNvbnRyb2wuc2V0RXJyb3JzKGVycm9ycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLWRhdGEtc2V0dGVyL2ZpbmFsLWRhdGEtc2V0dGVyLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luY1N0YXR1c2VzID0+IHtcbiAgcmV0dXJuIF8ucmVkdWNlKGFzeW5jU3RhdHVzZXMsIChjb3VudCwgc3RhdHVzKSA9PiB7XG4gICAgcmV0dXJuIGNvdW50ICs9ICtzdGF0dXM7XG4gIH0sIDApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWxpZGlmaWVyL3ZhbGlkYXRvci1jb25maWd1cmF0b3IvdmFsaWRhdG9yLWJ1aWxkZXIvYXN5bmMtdmFsaWRhdG9yL2ZpbmFsaXplci9maW5hbC12aXN1YWxpemVyL19saWIvYWN0aXZlLWFzeW5jcy1jb3VudGVyLnRzIiwiaW1wb3J0IGFjdGl2ZUFzeW5jc0NvdW50ZXIgZnJvbSAnLi9fbGliL2FjdGl2ZS1hc3luY3MtY291bnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdGlvblN0YXR1cykgPT4ge1xuICBsZXQge3ZhbGlkaWZ5fSA9IGNvbnRyb2w7XG4gIGxldCB7YXN5bmNTdGF0dXNlcywgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIsIHZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIFxuICBpZighYWN0aXZlQXN5bmNzQ291bnRlcihhc3luY1N0YXR1c2VzKSkge1xuICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnBlbmRpbmcoZmFsc2UpO1xuICAgIFxuICAgIGlmKCF2YWxpZGF0aW9uU3RhdHVzICYmIGNvbnRyb2wudmFsaWQpIHtcbiAgICAgIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLnN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXN5bmNQcm9ncmVzc1Zpc3VhbGl6ZXIuc3VjY2VzcyhmYWxzZSkuY29udGFpbmVyKGZhbHNlKTtcbiAgICAgIH0sIHNldHRpbmdzLmFzeW5jU3VjY2Vzc01lc3NhZ2VEdXJhdGlvbik7XG4gICAgfVxuICB9XG4gIFxuICB2YWxpZGF0aW9uU3RhdGVyLnNldCh2YWxpZGF0b3JOYW1lLCB2YWxpZGF0aW9uU3RhdHVzKS51cGRhdGVEZXBlbmRlbnRzKCkudmlzdWFsaXplKCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvZmluYWxpemVyL2ZpbmFsLXZpc3VhbGl6ZXIvZmluYWwtdmlzdWFsaXplci50cyIsImV4cG9ydCBkZWZhdWx0IChjb250cm9sLCB2YWxpZGF0b3JOYW1lKSA9PiB7XG4gIGxldCB7dmFsaWRpZnl9ID0gY29udHJvbDtcblxuICBjb250cm9sLnZhbGlkVmFsdWUgPSBjb250cm9sLmludmFsaWRWYWx1ZSA9IG51bGw7XG4gIHZhbGlkaWZ5LmFzeW5jU3RhdHVzZXNbdmFsaWRhdG9yTmFtZV0gPSB0cnVlO1xuICB2YWxpZGlmeS5zeW5jID0gZmFsc2U7ICBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9pbml0aWFsLWRhdGEtc2V0dGVyL2luaXRpYWwtZGF0YS1zZXR0ZXIudHMiLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCwgdmFsaWRhdG9yTmFtZSkgPT4ge1xuICBsZXQge2FzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLCB2YWxpZGF0aW9uU3RhdGVyfSA9IGNvbnRyb2wudmFsaWRpZnk7XG4gIGFzeW5jUHJvZ3Jlc3NWaXN1YWxpemVyLmNvbnRhaW5lcih0cnVlKS5zdWNjZXNzKGZhbHNlKTtcbiAgdmFsaWRhdGlvblN0YXRlci5zZXQodmFsaWRhdG9yTmFtZSwgbnVsbCkudmlzdWFsaXplKCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItYnVpbGRlci9hc3luYy12YWxpZGF0b3IvaW5pdGlhbGl6ZXIvaW5pdGlhbC12aXN1YWxpemVyL2luaXRpYWwtdmlzdWFsaXplci50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRyb2wsIHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25JZCkgPT4ge1xuICBsZXQge3JlcXVlc3RzfSA9IGNvbnRyb2wudmFsaWRpZnkuZXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xuXG4gIF8uZWFjaChyZXF1ZXN0cywgKHJlcXVlc3QsIGtleSkgPT4ge1xuICAgIHJlcXVlc3RzW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgXG4gIHJlcXVlc3RzW3ZhbGlkYXRpb25JZF0gPSBmYWxzZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL2FzeW5jLXZhbGlkYXRvci9pbml0aWFsaXplci9yZXF1ZXN0cy1udWxsaWZpZXIvcmVxdWVzdHMtbnVsbGlmaWVyLnRzIiwiaW1wb3J0IHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyIGZyb20gJy4uL19saWIvdmFsaWRhdGlvbi1zdGF0dXMtbm9ybWFsaXplcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgbGV0IHt2YWxpZGlmeX0gPSBjb250cm9sO1xuICBsZXQge3ZhbGlkYXRpb25TdGF0ZXJ9ID0gdmFsaWRpZnk7XG4gIGxldCB7dmFsaWRhdG9yLCB2YWxpZGF0b3JOYW1lfSA9IHZhbGlkYXRvckRlY2xhcmF0aW9uO1xuICBsZXQgdmFsaWRhdGlvblN0YXR1cyA9IHZhbGlkYXRvcihjb250cm9sLCBjb25maWdzLnZhbGlkYXRvcik7XG4gIFxuICBpZih2YWxpZGF0aW9uU3RhdHVzKSB7XG4gICAgdmFsaWRpZnkuc3luYyA9IHRydWU7XG4gIH1cbiAgXG4gIHZhbGlkYXRpb25TdGF0ZXIuc2V0KHZhbGlkYXRvck5hbWUsIHZhbGlkYXRpb25TdGF0dXMpLnVwZGF0ZURlcGVuZGVudHMoKS52aXN1YWxpemUoKTtcbiAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXNOb3JtYWxpemVyKHNldHRpbmdzLCB2YWxpZGF0aW9uU3RhdHVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3N5bmMtdmFsaWRhdG9yL3N5bmMtdmFsaWRhdG9yLnRzIiwiaW1wb3J0IHN5bmNWYWxpZGF0b3IgIGZyb20gJy4vc3luYy12YWxpZGF0b3Ivc3luYy12YWxpZGF0b3InO1xuaW1wb3J0IGFzeW5jVmFsaWRhdG9yIGZyb20gJy4vYXN5bmMtdmFsaWRhdG9yL2FzeW5jLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IChzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZih2YWxpZGF0b3JEZWNsYXJhdGlvbi5hc3luYykge1xuICAgICAgcmV0dXJuIGFzeW5jVmFsaWRhdG9yKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzeW5jVmFsaWRhdG9yKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmFsaWRpZmllci92YWxpZGF0b3ItY29uZmlndXJhdG9yL3ZhbGlkYXRvci1idWlsZGVyL3ZhbGlkYXRvci1idWlsZGVyLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBkYXRhSW5pdGlhbGl6ZXIgICAgIGZyb20gJy4vZGF0YS1pbml0aWFsaXplci9kYXRhLWluaXRpYWxpemVyJztcbmltcG9ydCBkZXBlbmRlbnRzUmVnaXN0cmFyIGZyb20gJy4vZGVwZW5kZW50cy1yZWdpc3RyYXIvZGVwZW5kZW50cy1yZWdpc3RyYXInO1xuaW1wb3J0IHByZXByb2Nlc3NvciAgICAgICAgZnJvbSAnLi9wcmVwcm9jZXNzb3IvcHJlcHJvY2Vzc29yJztcbmltcG9ydCBlbGVtZW50c0luaXRpYWxpemVyIGZyb20gJy4vZWxlbWVudHMtaW5pdGlhbGl6ZXIvZWxlbWVudHMtaW5pdGlhbGl6ZXInO1xuaW1wb3J0IGVycm9yR2VuZXJhdG9yICAgICAgZnJvbSAnLi9lcnJvci1nZW5lcmF0b3IvZXJyb3ItZ2VuZXJhdG9yJztcbmltcG9ydCB2YWxpZGF0b3JCdWlsZGVyICAgIGZyb20gJy4vdmFsaWRhdG9yLWJ1aWxkZXIvdmFsaWRhdG9yLWJ1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc2V0dGluZ3MsIHZhbGlkYXRvckRlY2xhcmF0aW9uKSA9PiB7XG4gIGxldCBkYXRhTmFtZXMgPSBbJ2FzeW5jJywgJ2NoZWNrYm94JywgJ3ZhbGlkYXRvck5hbWUnLCAnZGlyZWN0aXZlTmFtZVByZWZpeGVkJ107XG4gIGRhdGFOYW1lcy5wdXNoKCd2YWxpZGF0b3JOYW1lUHJlZml4ZWQnLCAnbWVzc2FnZXInKTtcbiAgbGV0IHN1cHBsZW1lbnRhbERhdGEgPSBfLnBpY2sodmFsaWRhdG9yRGVjbGFyYXRpb24sIGRhdGFOYW1lcyk7XG4gIGxldCBjb25maWd1cmF0b3IgPSAoY29udHJvbCwgY29uZmlncywgZWwpID0+IHtcbiAgICBkYXRhSW5pdGlhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIGVsKTtcbiAgICBkZXBlbmRlbnRzUmVnaXN0cmFyKGNvbnRyb2wpO1xuICAgIGNvbmZpZ3MgPSBwcmVwcm9jZXNzb3IoY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIGVsZW1lbnRzSW5pdGlhbGl6ZXIoc2V0dGluZ3MsIGNvbnRyb2wsIHZhbGlkYXRvckRlY2xhcmF0aW9uKTtcbiAgICBlcnJvckdlbmVyYXRvcihzZXR0aW5ncywgY29udHJvbCwgY29uZmlncywgdmFsaWRhdG9yRGVjbGFyYXRpb24pO1xuICAgIHJldHVybiB2YWxpZGF0b3JCdWlsZGVyKHNldHRpbmdzLCBjb250cm9sLCBjb25maWdzLCB2YWxpZGF0b3JEZWNsYXJhdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIF8uZXh0ZW5kKGNvbmZpZ3VyYXRvciwgc3VwcGxlbWVudGFsRGF0YSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbGlkaWZpZXIvdmFsaWRhdG9yLWNvbmZpZ3VyYXRvci92YWxpZGF0b3ItY29uZmlndXJhdG9yLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzY1X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJmb3Jtc1wiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9mb3Jtc1wiLFwiYW1kXCI6XCJAYW5ndWxhci9mb3Jtc1wifVxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5nVmFsaWRpZmllciBmcm9tICcuL3ZhbGlkaWZpZXIvdmFsaWRpZmllcic7XG5cbmV4cG9ydCB7bmdWYWxpZGlmaWVyfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy12YWxpZGlmaWVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==