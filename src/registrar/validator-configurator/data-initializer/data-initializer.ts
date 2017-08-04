import * as $           from 'jquery';
import * as _           from 'lodash';
import nameAssigner     from './name-assigner/name-assigner';
import ValidationStater from '../../../staters/validation-stater/validation-stater';

export default (control, el) => {
  let {validify} = control;
  
  if(!validify) {
    el = el.nativeElement;
    nameAssigner(control);
    
    validify = {
      elements: {},
      errors: {},
      validationStater: new ValidationStater(control)
    };
    
    _.extend(control, {validify, el, $el: $(el)});
  }
};
