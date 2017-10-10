import $               from 'jquery';
import * as _          from 'lodash';
import classIdAssigner from '../../_lib/class-id-assigner';
import containerAdder  from '../_lib/container-adder';

export default (settings, control) => {
  let {$el, validify, controlName} = control;
  let {elements} = validify;
  
  if(!_.isEmpty(elements)) {
    return;
  }
  
  let {elementContainer, errorsContainer} = settings.selectors;
  let $elContainer = elementContainer ? $el.closest(elementContainer) : $();
  let $errorsContainer = $('<div/>');

  classIdAssigner(settings, $el, 'el', controlName);
  classIdAssigner(settings, $elContainer, 'el-container', controlName);
  classIdAssigner(settings, $errorsContainer, 'errors-container', controlName);
  
  _.extend(elements, {$el, $elContainer, $errorsContainer});
  containerAdder($el, $errorsContainer, $elContainer, errorsContainer);
};
