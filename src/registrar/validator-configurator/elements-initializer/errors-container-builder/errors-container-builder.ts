import * as $          from 'jquery';
import * as _          from 'lodash';
import {settings}      from '../../../../_lib/vars';
import classIdAssigner from '../../_lib/class-id-assigner';
import containerAdder  from '../_lib/container-adder';

export default control => {
  let {$el, validify, controlName} = control;
  let {elements} = validify;
  
  if(!_.isEmpty(elements)) {
    return;
  }
  
  let {elementContainer, errorsContainer} = settings.selectors;
  let $elContainer = elementContainer ? $el.closest(elementContainer) : $();
  let $errorsContainer = $('<div/>');

  classIdAssigner($el, 'el', controlName);
  classIdAssigner($elContainer, 'el-container', controlName);
  classIdAssigner($errorsContainer, 'errors-container', controlName);
  
  _.extend(elements, {$el, $elContainer, $errorsContainer});
  containerAdder($el, $errorsContainer, $elContainer, errorsContainer);
};
