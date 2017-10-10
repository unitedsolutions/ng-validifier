(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash'), require('@angular/core'), require('ng-http-client-plus'), require('jquery'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash', '@angular/core', 'ng-http-client-plus', 'jquery', '@angular/forms'], factory) :
	(factory((global.ngValidifier = {}),global._,global.ng.core,global.ngHttpClientPlus,global.$,global.ng.forms));
}(this, (function (exports,_,core,ngHttpClientPlus,$,forms) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

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

var validatorName = 'deps';

var validator = function (control, dependencyNames) {
    var controls = control._parent.controls;
    for (var _i = 0, dependencyNames_1 = dependencyNames; _i < dependencyNames_1.length; _i++) {
        var dependencyName = dependencyNames_1[_i];
        var dependencyControl = controls[dependencyName];
        if (!dependencyControl) {
            console.warn("dependency [" + dependencyName + "] is not declared");
        }
        if (!dependencyControl || dependencyControl.invalid) {
            return _a = {}, _a[validatorName] = true, _a;
        }
    }
    var _a;
};

var strArrayifier = function (str, char) {
    var rx = new RegExp("\\s*" + char + "\\s*");
    return str.split(rx).map(function (piece) { return piece.trim(); });
};

var dependencyNamesTransformer = function (dependencyNames, control) {
    var controlName = control.controlName;
    dependencyNames = strArrayifier(dependencyNames, ',');
    if (dependencyNames.indexOf(controlName) !== -1) {
        throw new Error("[" + controlName + "] cannot depend on itself");
    }
    return dependencyNames;
};

var dependencyDependentsMap = new WeakMap();

var formDependencyMapGetter = function (_parent) {
    var formDependencyDependentsMap = dependencyDependentsMap.get(_parent);
    if (!formDependencyDependentsMap) {
        dependencyDependentsMap.set(_parent, formDependencyDependentsMap = {});
    }
    return formDependencyDependentsMap;
};

var dependentTracker = function (dependencyName, control) {
    var _parent = control._parent, controlName = control.controlName;
    var formDependencyDependentsMap = formDependencyMapGetter(_parent);
    var controlDependents = formDependencyDependentsMap[controlName];
    if ((controlDependents || []).indexOf(dependencyName) > -1) {
        throw new Error("[" + controlName + "] and [" + dependencyName + "] depend on each other");
    }
    var dependents = formDependencyDependentsMap[dependencyName];
    if (!dependents) {
        dependents = formDependencyDependentsMap[dependencyName] = [];
    }
    dependents.push(controlName);
};

var dependentsSetter = function (control, newDependents) {
    var validify = control.validify;
    var dependents = validify.dependents;
    if (!_.isArray(newDependents)) {
        newDependents = [newDependents];
    }
    if (!dependents) {
        _.set(validify, 'dependents', dependents = []);
    }
    dependents.push.apply(dependents, newDependents);
};

var dependencyRequestRegistrar = function (dependencyName, control) {
    var _parent = control._parent;
    var formDependencyRequests = dependencyRequests.get(_parent);
    if (!formDependencyRequests) {
        dependencyRequests.set(_parent, formDependencyRequests = {});
    }
    var dependents = formDependencyRequests[dependencyName];
    if (!dependents) {
        dependents = formDependencyRequests[dependencyName] = [];
    }
    dependents.push(control);
};

var dependentRegistrar = function (dependencyName, control) {
    var dependencyControl = control._parent.controls[dependencyName];
    if (dependencyControl) {
        return dependentsSetter(dependencyControl, control);
    }
    dependencyRequestRegistrar(dependencyName, control);
};

var preprocessor = function (control, dependencyNames) {
    dependencyNames = dependencyNamesTransformer(dependencyNames, control);
    _.each(dependencyNames, function (dependencyName) {
        dependentTracker(dependencyName, control);
        dependentRegistrar(dependencyName, control);
    });
    return dependencyNames;
};

var dependencyNamesStringifier = function (dependencyNames) {
    return dependencyNames.map(function (dependencyName) {
        return _.upperFirst(_.lowerCase(dependencyName));
    }).join(', ');
};

var messager = function (control, dependencyNames) {
    var controlNameProper = control.controlNameProper;
    dependencyNames = dependencyNamesStringifier(dependencyNames);
    return controlNameProper + " depends on " + dependencyNames;
};

var depsValidator = {
    validator: validator,
    preprocessor: preprocessor,
    messager: messager,
    validatorName: validatorName
};

var validatorName$1 = 'email';
var emailRx = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
var emailValidator = {
    validator: function (control) {
        if (!emailRx.test(control.value)) {
            return _a = {}, _a[validatorName$1] = true, _a;
        }
        var _a;
    },
    messager: function (control) {
        return control.controlNameProper + " is not a valid email";
    },
    validatorName: validatorName$1
};

var validatorName$2 = 'emailGov';
var emailGovRx = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*(\.(gov|mil))$/;
var emailGovValidator = {
    validator: function (control) {
        if (!emailGovRx.test(control.value)) {
            return _a = {}, _a[validatorName$2] = true, _a;
        }
        var _a;
    },
    messager: function (control) {
        return control.controlNameProper + " is not a valid government email";
    },
    validatorName: validatorName$2
};

var validatorName$3 = 'equalsTo';
var equalsToValidator = {
    validator: function (control, equalsTo) {
        var value = control.value, _parent = control._parent;
        var equalsToControl = _parent.controls[equalsTo];
        if (!value || value !== equalsToControl.value) {
            return _a = {}, _a[validatorName$3] = true, _a;
        }
        var _a;
    },
    messager: function (control, validatorConfigs) {
        return control.controlNameProper + " must equal to " + validatorConfigs;
    },
    validatorName: validatorName$3
};

var validatorName$4 = 'maxLength';
var maxLengthValidator = {
    validator: function (control, maxLength) {
        var value = control.value;
        if (!value || value.length > maxLength) {
            return _a = {}, _a[validatorName$4] = true, _a;
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
    validatorName: validatorName$4
};

var validatorName$5 = 'minLength';
var minLengthValidator = {
    validator: function (control, minLength) {
        if (control.value.length < minLength) {
            return _a = {}, _a[validatorName$5] = true, _a;
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
    validatorName: validatorName$5
};

var validatorName$6 = 'pattern';
var patternValidator = {
    validator: function (control, pattern) {
        if (!pattern.test(control.value)) {
            return _a = {}, _a[validatorName$6] = true, _a;
        }
        var _a;
    },
    preprocessor: function (control, pattern) {
        if (!pattern) {
            throw new Error('specify regular expression pattern');
        }
        if (_.isString(pattern)) {
            pattern = new RegExp("^" + pattern + "$");
        }
        return pattern;
    },
    validatorName: validatorName$6
};

var validatorName$7 = 'required';
var requiredValidator = {
    validator: function (control) {
        if (!control.value) {
            return _a = {}, _a[validatorName$7] = true, _a;
        }
        var _a;
    },
    messager: function (control) {
        return control.controlNameProper + " is required";
    },
    validatorName: validatorName$7
};

var directiveName = 'required';
var validatorName$8 = 'requiredTrue';
var requiredTrueValidator = {
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
    validatorName: validatorName$8,
    checkbox: true
};

var validatorName$9 = 'uniqueCheck';

var validator$1 = function (control, configs) {
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
            resolve(data.length ? (_a = {}, _a[validatorName$9] = true, _a) : null);
            var _a;
        }, function (error) {
            reject(error.message);
        });
        var _a;
    });
};

var preprocessor$1 = function (control, configs, baseConfigs) {
    if (!_.isPlainObject(configs)) {
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
    else if (!_.isArray(ignore)) {
        ignore = [ignore];
    }
    if (_.isUndefined(ignoreCase)) {
        ignoreCase = true;
    }
    if (ignoreCase) {
        ignore = ignore.map(function (ignore) { return (ignore + '').toLowerCase(); });
    }
    if (baseUrl) {
        path = baseUrl + path;
    }
    return _.extend(configs, { fieldName: fieldName, ignore: ignore, ignoreCase: ignoreCase, path: path });
};

var messager$1 = function (control) {
    var controlNameProper = control.controlNameProper;
    return "Value provided for " + controlNameProper + " field already exists";
};

var uniqueCheckValidator = {
    validator: validator$1,
    preprocessor: preprocessor$1,
    messager: messager$1,
    validatorName: validatorName$9,
    async: true
};

var internalValidators = [
    depsValidator,
    requiredValidator,
    minLengthValidator,
    maxLengthValidator,
    patternValidator,
    emailValidator,
    emailGovValidator,
    equalsToValidator,
    requiredTrueValidator,
    uniqueCheckValidator
];

var prefixer = function (settings, name) {
    var prefix = settings.prefix;
    if (prefix && name) {
        name = prefix + _.upperFirst(name);
    }
    return name;
};

var nameAccessor = function (control) {
    var controls = control._parent.controls;
    var controlNames = _.keys(controls);
    for (var _i = 0, controlNames_1 = controlNames; _i < controlNames_1.length; _i++) {
        var controlName = controlNames_1[_i];
        if (controls[controlName] === control) {
            return controlName;
        }
    }
};

var nameAssigner = function (control) {
    var controlName = control.controlName;
    if (!controlName) {
        controlName = nameAccessor(control);
        _.extend(control, {
            controlName: controlName,
            controlNameProper: _.upperFirst(_.lowerCase(controlName))
        });
    }
};

var _constructor = function (settings, control) {
    _.extend(this, { settings: settings, control: control, state: {} });
};

var stateSetter = function (validatorName, validationStatus) {
    var _a = this.control.validify, silent = _a.silent, errors = _a.errors;
    var errorConfigs = errors[validatorName];
    _.extend(this, { silent: silent, dependents: undefined });
    errorConfigs.status = validationStatus;
    if (!silent) {
        _.extend(this, { errorConfigs: errorConfigs });
    }
    return this;
};

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

var dependentsUpdater = function () {
    var _a = this, silent = _a.silent, dependents = _a.dependents, control = _a.control;
    if (!silent) {
        if (!control.validify.ignoreDependents) {
            dependents = dependentsAggregator(control);
            var _loop_1 = function (dependent) {
                setTimeout(function () {
                    _.extend(dependent.validify, { silent: true, ignoreDependents: true });
                    dependent.updateValueAndValidity();
                });
            };
            for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
                var dependent = dependents_1[_i];
                _loop_1(dependent);
            }
            _.extend(this, { dependents: dependents });
        }
    }
    return this;
};

var delayCalculator = function (settings, errorConfigs) {
    var delays = settings.errorMessageDelays;
    var _async = errorConfigs._async, status = errorConfigs.status, control = errorConfigs.control;
    var dirty = control.dirty;
    return _async || !dirty ? 0 : status ? delays.invalid : delays.valid;
};

var errorsCounter = function (settings, $el) {
    var classes = $el.attr('class');
    if (classes) {
        classes = classes.split(/\s+/);
    }
    return _.reduce(classes, function (count, klass) {
        if (klass.startsWith(settings.prefix + "-error")) {
            count++;
        }
        return count;
    }, 0);
};

var errorsVisualizer = function (settings, errorConfigs) {
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
    if (!errorsCounter(settings, $elContainer)) {
        $elContainer.removeClass('ng-invalid').addClass('ng-valid');
        $elContainer.removeClass(_async ? asyncClass : syncClass);
    }
};

var visualizer = function () {
    var _this = this;
    if (!this.silent) {
        setTimeout(function () {
            var _a = _this, control = _a.control, _b = _a.dependents, dependents = _b === void 0 ? [] : _b, errorConfigs = _a.errorConfigs;
            var delay = delayCalculator(_this.settings, errorConfigs);
            clearTimeout(errorConfigs.visualizationTimeout);
            errorConfigs.visualizationTimeout = setTimeout(function () {
                dependents.unshift(control);
                _.each(dependents, function (control) {
                    var validify = control.validify;
                    _.extend(validify, { silent: false, ignoreDependents: false });
                    _.each(validify.errors, _.partial(errorsVisualizer, _this.settings, _));
                });
            }, delay);
        });
    }
};

_.extend(_constructor.prototype, {
    set: stateSetter,
    updateDependents: dependentsUpdater,
    visualize: visualizer
});

var dataInitializer = function (settings, control, el) {
    var validify = control.validify;
    if (!validify) {
        el = el.nativeElement;
        nameAssigner(control);
        validify = {
            elements: {},
            errors: {},
            validationStater: new _constructor(settings, control)
        };
        _.extend(control, { validify: validify, el: el, $el: $(el) });
    }
};

var dependentsRegistrar = function (control) {
    var _parent = control._parent, controlName = control.controlName;
    var parentRecords = dependencyRequests.get(_parent);
    if (parentRecords) {
        var dependentRecords = parentRecords[controlName];
        if (dependentRecords) {
            dependentsSetter(control, dependentRecords);
            delete parentRecords[controlName];
        }
    }
};

var preprocessor$2 = function (settings, control, configs, validatorDeclaration) {
    var preprocessor = validatorDeclaration.preprocessor;
    if (!_.isPlainObject(configs)) {
        configs = { validator: configs };
    }
    if (preprocessor) {
        var validatorConfigs = settings.validatorConfigs;
        if (validatorConfigs) {
            var validatorName = validatorDeclaration.validatorName;
            var baseConfigs = validatorConfigs[validatorName];
            _.extend(configs, { baseConfigs: baseConfigs });
        }
        configs.validator = preprocessor(control, configs.validator, baseConfigs);
    }
    return configs;
};

var classIdAssigner = function (settings, $el, baseClass, controlName) {
    var prefix = settings.prefix;
    var classes = [baseClass, baseClass + "-" + controlName];
    var classesStr = classes.map(function (klass) { return prefix + "-" + klass; }).join(' ');
    $el.addClass(classesStr);
};

var containerAdder = function ($el, $container, $containerContainer, insertionSpec) {
    var _a = (function () {
        if (!$containerContainer.length) {
            return ['insertAfter', $el];
        }
        var action = insertionSpec[0], anchor = insertionSpec[1];
        var $insertionPoint = (function () {
            if (!anchor) {
                return $containerContainer;
            }
            return $(anchor, $containerContainer);
        })();
        return [action, $insertionPoint];
    })(), action = _a[0], $insertionPoint = _a[1];
    $container[action]($insertionPoint);
};

var errorsContainerBuilder = function (settings, control) {
    var $el = control.$el, validify = control.validify, controlName = control.controlName;
    var elements = validify.elements;
    if (!_.isEmpty(elements)) {
        return;
    }
    var _a = settings.selectors, elementContainer = _a.elementContainer, errorsContainer = _a.errorsContainer;
    var $elContainer = elementContainer ? $el.closest(elementContainer) : $();
    var $errorsContainer = $('<div/>');
    classIdAssigner(settings, $el, 'el', controlName);
    classIdAssigner(settings, $elContainer, 'el-container', controlName);
    classIdAssigner(settings, $errorsContainer, 'errors-container', controlName);
    _.extend(elements, { $el: $el, $elContainer: $elContainer, $errorsContainer: $errorsContainer });
    containerAdder($el, $errorsContainer, $elContainer, errorsContainer);
};

var default_1 = /** @class */ (function () {
    function default_1(settings, control) {
        var _a = control.validify, asyncs = _a.asyncs, elements = _a.elements;
        var $el = elements.$el, $elContainer = elements.$elContainer;
        var pendingClass = settings.prefix + "-async-pending";
        _.extend(this, { $el: $el, $elContainer: $elContainer, asyncs: asyncs, pendingClass: pendingClass, settings: settings });
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

var asyncContainerBuilder = function (settings, control, validatorDeclaration) {
    var validify = control.validify, controlName = control.controlName;
    var _a = validify.asyncs, asyncs = _a === void 0 ? {} : _a, elements = validify.elements;
    if (!validatorDeclaration.async || !_.isEmpty(asyncs)) {
        return;
    }
    var asyncStatusHideClass = settings.asyncStatusHideClass, selectors = settings.selectors;
    var asyncStatusContainer = selectors.asyncStatusContainer;
    var $el = elements.$el, $elContainer = elements.$elContainer;
    var $asyncsContainer = $('<div/>');
    var $pending = $('<div/>');
    var $success = $('<div/>');
    classIdAssigner(settings, $asyncsContainer, 'asyncs-container', controlName);
    classIdAssigner(settings, $pending, 'async-pending', controlName);
    classIdAssigner(settings, $success, 'async-success', controlName);
    $asyncsContainer.addClass(asyncStatusHideClass);
    $pending.addClass(asyncStatusHideClass);
    $success.addClass(asyncStatusHideClass);
    $asyncsContainer.append($pending).append($success);
    _.extend(asyncs, { $asyncsContainer: $asyncsContainer, $pending: $pending, $success: $success });
    _.extend(validify, { asyncs: asyncs, asyncStatuses: {} });
    containerAdder($el, $asyncsContainer, $elContainer, asyncStatusContainer);
    validify.asyncProgressVisualizer = new default_1(settings, control);
};

var elementsInitializer = function (settings, control, validatorDeclaration) {
    errorsContainerBuilder(settings, control);
    asyncContainerBuilder(settings, control, validatorDeclaration);
};

var spannifier = function (errorMessage, prefix) {
    var generalClass = prefix + '-error-word';
    return errorMessage.split(/\s+/).map(function (word, index) {
        var specificClass = generalClass + '-' + index;
        return "<span class = \"" + generalClass + " " + specificClass + "\">" + word + "</span>";
    }).join(' ');
};

var errorGenerator = function (settings, control, configs, validatorDeclaration) {
    var validatorName = validatorDeclaration.validatorName, validatorNamePrefixed = validatorDeclaration.validatorNamePrefixed, _async = validatorDeclaration.async;
    var messager = validatorDeclaration.messager;
    var _a = control.validify, elements = _a.elements, errors = _a.errors;
    var baseErrorConfigs = { $el: $(), _async: _async, validatorName: validatorName, control: control };
    if (!messager) {
        return errors[validatorName] = baseErrorConfigs;
    }
    var errorConfigs = errors[validatorName] || baseErrorConfigs;
    var $el = errorConfigs.$el;
    var validatorConfigs = configs.validator, messagerConfigs = configs.messager, baseConfigs = configs.baseConfigs;
    var errorMessageClasses = settings.errorMessageClasses, prefix = settings.prefix;
    var $errorsContainer = elements.$errorsContainer;
    var errorMessager = _.isFunction(messager) ? messager : function () { return messager; };
    var errorMessage = errorMessager(control, validatorConfigs, messagerConfigs, baseConfigs);
    errorMessage = spannifier(errorMessage, prefix);
    if (!$el.length) {
        var syncAsyncClass = prefix + "-" + (_async ? 'async' : 'sync');
        $el = $('<div/>');
        $el.addClass(syncAsyncClass);
        $errorsContainer.append($el);
        classIdAssigner(settings, $el, 'error', validatorName);
        errorConfigs = _.extend(errorConfigs, { $el: $el });
        if (errorMessageClasses && errorMessageClasses.initial) {
            $el.addClass(errorMessageClasses.initial);
        }
        if (_async) {
            errorConfigs.requests = {};
        }
        errors[validatorName] = errorConfigs;
    }
    $el.html(errorMessage);
};

var validationStatusNormalizer = function (settings, validationStatus) {
    if (_.isPlainObject(validationStatus)) {
        var key = _.keys(validationStatus)[0];
        var value = validationStatus[key];
        key = prefixer(settings, key);
        validationStatus = (_a = {}, _a[key] = value, _a);
    }
    return validationStatus;
    var _a;
};

var syncValidator = function (settings, control, configs, validatorDeclaration) {
    var validify = control.validify;
    var validationStater = validify.validationStater;
    var validator = validatorDeclaration.validator, validatorName = validatorDeclaration.validatorName;
    var validationStatus = validator(control, configs.validator, configs.baseConfigs);
    if (validationStatus) {
        validify.sync = true;
    }
    validationStater.set(validatorName, validationStatus).updateDependents().visualize();
    return validationStatusNormalizer(settings, validationStatus);
};

var initialDataSetter = function (control, validatorName) {
    var validify = control.validify;
    control.validValue = control.invalidValue = null;
    validify.asyncStatuses[validatorName] = true;
    validify.sync = false;
};

var requestsNullifier = function (control, validatorName, validationId) {
    var requests = control.validify.errors[validatorName].requests;
    _.each(requests, function (request, key) {
        requests[key] = true;
    });
    requests[validationId] = false;
};

var initialVisualizer = function (control, validatorName) {
    var _a = control.validify, asyncProgressVisualizer = _a.asyncProgressVisualizer, validationStater = _a.validationStater;
    asyncProgressVisualizer.container(true);
    asyncProgressVisualizer.success(false);
    validationStater.set(validatorName, null).visualize();
};

var pauser = function (time, settings) {
    time = _.now() - time;
    time = (settings.asyncMinimumPendingDuration || time) - time;
    if (time < 0) {
        time = 0;
    }
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
};

var finalDataSetter = function (control, validatorDeclaration, validationStatus) {
    var errors = control.errors, value = control.value, validify = control.validify;
    var asyncStatuses = validify.asyncStatuses, _errors = validify.errors;
    var validatorName = validatorDeclaration.validatorName, validatorNamePrefixed = validatorDeclaration.validatorNamePrefixed;
    _errors[validatorName].requests = {};
    validify.sync = false;
    asyncStatuses[validatorName] = false;
    if (!validationStatus) {
        errors = _.omit(errors, [validatorNamePrefixed]);
    }
    _.extend(errors, validationStatus);
    if (_.isEmpty(errors)) {
        control.validValue = value;
        errors = '';
    }
    else {
        control.invalidValue = value;
    }
    control.setErrors(errors);
};

var activeAsyncsCounter = function (asyncStatuses) {
    return _.reduce(asyncStatuses, function (count, status) {
        return count += +status;
    }, 0);
};

var finalVisualizer = function (settings, errorConfigs, control, validatorName, validationStatus) {
    var validify = control.validify;
    var asyncStatuses = validify.asyncStatuses, asyncProgressVisualizer = validify.asyncProgressVisualizer, validationStater = validify.validationStater;
    if (!activeAsyncsCounter(asyncStatuses)) {
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
};

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _$$1 = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_$$1) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _$$1.label++; return { value: op[1], done: false };
                case 5: _$$1.label++; y = op[1]; op = [0]; continue;
                case 7: op = _$$1.ops.pop(); _$$1.trys.pop(); continue;
                default:
                    if (!(t = _$$1.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _$$1 = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _$$1.label = op[1]; break; }
                    if (op[0] === 6 && _$$1.label < t[1]) { _$$1.label = t[1]; t = op; break; }
                    if (t && _$$1.label < t[2]) { _$$1.label = t[2]; _$$1.ops.push(op); break; }
                    if (t[2]) _$$1.ops.pop();
                    _$$1.trys.pop(); continue;
            }
            op = body.call(thisArg, _$$1);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var asyncValidator = function (settings, control, configs, validatorDeclaration) {
    if (control.validValue === control.value) {
        return Promise.resolve();
    }
    var validatorName = validatorDeclaration.validatorName, validatorNamePrefixed = validatorDeclaration.validatorNamePrefixed, validator = validatorDeclaration.validator;
    var validify = control.validify;
    var asyncProgressVisualizer = validify.asyncProgressVisualizer, errors = validify.errors, validationStater = validify.validationStater;
    var errorConfigs = errors[validatorName];
    var validationId = _.uniqueId();
    if (control.invalidValue === control.value) {
        var error = (_a = {}, _a[validatorNamePrefixed] = true, _a);
        validationStater.set(validatorName, error).visualize();
        return Promise.resolve(error);
    }
    initialDataSetter(control, validatorName);
    requestsNullifier(control, validatorName, validationId);
    initialVisualizer(control, validatorName);
    clearTimeout(errorConfigs.successTimeout);
    clearTimeout(errorConfigs.asyncDebounceTimeout);
    errorConfigs.asyncDebounceTimeout = setTimeout(function () {
        if (validify.sync) {
            return asyncProgressVisualizer.container(false);
        }
        var time = _.now();
        asyncProgressVisualizer.pending(true);
        validator(control, configs.validator, configs.baseConfigs).then(function (validationStatus) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pauser(time, settings)];
                    case 1:
                        _a.sent();
                        if (errorConfigs.requests[validationId]) {
                            return [2 /*return*/];
                        }
                        validationStatus = validationStatusNormalizer(settings, validationStatus);
                        finalDataSetter(control, validatorDeclaration, validationStatus);
                        finalVisualizer(settings, errorConfigs, control, validatorName, validationStatus);
                        return [2 /*return*/];
                }
            });
        }); });
    }, settings.asyncDebounceTime);
    return Promise.resolve((_b = {}, _b[validatorNamePrefixed] = true, _b));
    var _a, _b;
};

var validatorBuilder = function (settings, control, configs, validatorDeclaration) {
    return function () {
        if (validatorDeclaration.async) {
            return asyncValidator(settings, control, configs, validatorDeclaration);
        }
        return syncValidator(settings, control, configs, validatorDeclaration);
    };
};

var validatorConfigurator = function (settings, validatorDeclaration) {
    var dataNames = ['async', 'checkbox', 'validatorName', 'directiveNamePrefixed'];
    dataNames.push('validatorNamePrefixed', 'messager');
    var supplementalData = _.pick(validatorDeclaration, dataNames);
    var configurator = function (control, configs, el) {
        dataInitializer(settings, control, el);
        dependentsRegistrar(control);
        configs = preprocessor$2(settings, control, configs, validatorDeclaration);
        elementsInitializer(settings, control, validatorDeclaration);
        errorGenerator(settings, control, configs, validatorDeclaration);
        return validatorBuilder(settings, control, configs, validatorDeclaration);
    };
    return _.extend(configurator, supplementalData);
};

var selectorAssembler = function (name, checkbox) {
    var checkboxType = '[type=checkbox]';
    var controlTypes = ['formControlName', 'formControl', 'ngModel'];
    checkbox = checkbox ? "input" + checkboxType : ":not(" + checkboxType + ")";
    return controlTypes.reduce(function (selector, controlType) {
        selector.push(checkbox + "[" + name + "][" + controlType + "]");
        return selector;
    }, []).join(',');
};

var directivesGenerator = function (validators) {
    return validators.map(function (validatorConfigurator) {
        var _async = validatorConfigurator.async, checkbox = validatorConfigurator.checkbox, validatorNamePrefixed = validatorConfigurator.validatorNamePrefixed;
        var directiveNamePrefixed = validatorConfigurator.directiveNamePrefixed;
        var directiveName = directiveNamePrefixed || validatorNamePrefixed;
        var selector = selectorAssembler(directiveName, checkbox);
        var providers = [{
                provide: _async ? forms.NG_ASYNC_VALIDATORS : forms.NG_VALIDATORS,
                useExisting: core.forwardRef(function () { return ValidatorDirectiveClass; }),
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
                    _.extend(control, { http: this.http });
                }
                _.extend(this, {
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
            ValidatorDirectiveClass.decorators = [
                { type: core.Directive, args: [{ selector: selector, providers: providers },] },
            ];
            /** @nocollapse */
            ValidatorDirectiveClass.ctorParameters = function () { return [
                { type: core.ElementRef, },
                null,
            ]; };
            ValidatorDirectiveClass.propDecorators = {
                'configs': [{ type: core.Input, args: ["" + directiveName,] },],
            };
            return ValidatorDirectiveClass;
        }());
        
        return ValidatorDirectiveClass;
    });
};

var moduleGenerator = function (settings, validators) {
    validators = validators.map(function (validator) {
        var validatorName = validator.validatorName, directiveName = validator.directiveName;
        var validatorNamePrefixed = prefixer(settings, validatorName);
        var directiveNamePrefixed = prefixer(settings, directiveName);
        _.extend(validator, { validatorNamePrefixed: validatorNamePrefixed, directiveNamePrefixed: directiveNamePrefixed });
        return validatorConfigurator(settings, validator);
    });
    var directives = directivesGenerator(validators);
    var ValidatorModule = /** @class */ (function () {
        function ValidatorModule() {
        }
        ValidatorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ngHttpClientPlus.HttpClientPlusModule],
                        declarations: directives,
                        exports: directives
                    },] },
        ];
        /** @nocollapse */
        ValidatorModule.ctorParameters = function () { return []; };
        return ValidatorModule;
    }());
    return ValidatorModule;
};

var validifier = function (settings$$1, validators) {
    if (validators === void 0) { validators = []; }
    settings$$1 = _.extend({}, settings, settings$$1);
    validators.push.apply(validators, internalValidators);
    return moduleGenerator(settings$$1, validators);
};

exports.ngValidifier = validifier;

Object.defineProperty(exports, '__esModule', { value: true });

})));
