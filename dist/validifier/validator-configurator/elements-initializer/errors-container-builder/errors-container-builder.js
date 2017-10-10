import $ from 'jquery';
import * as _ from 'lodash';
import classIdAssigner from '../../_lib/class-id-assigner';
import containerAdder from '../_lib/container-adder';
export default function (settings, control) {
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
//# sourceMappingURL=errors-container-builder.js.map