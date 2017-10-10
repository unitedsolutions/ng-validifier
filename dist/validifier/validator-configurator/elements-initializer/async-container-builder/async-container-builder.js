import $ from 'jquery';
import * as _ from 'lodash';
import classIdAssigner from '../../_lib/class-id-assigner';
import containerAdder from '../_lib/container-adder';
import AsyncProgressVisualizer from '../../../../staters/async-progress-visualizer/async-progress-visualizer';
export default function (settings, control, validatorDeclaration) {
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
    validify.asyncProgressVisualizer = new AsyncProgressVisualizer(settings, control);
};
//# sourceMappingURL=async-container-builder.js.map