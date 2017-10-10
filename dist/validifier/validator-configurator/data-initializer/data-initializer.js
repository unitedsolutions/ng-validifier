import $ from 'jquery';
import * as _ from 'lodash';
import nameAssigner from './name-assigner/name-assigner';
import ValidationStater from '../../../staters/validation-stater/validation-stater';
export default function (settings, control, el) {
    var validify = control.validify;
    if (!validify) {
        el = el.nativeElement;
        nameAssigner(control);
        validify = {
            elements: {},
            errors: {},
            validationStater: new ValidationStater(settings, control)
        };
        _.extend(control, { validify: validify, el: el, $el: $(el) });
    }
};
//# sourceMappingURL=data-initializer.js.map