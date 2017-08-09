import * as $                  from 'jquery';
import * as _                  from 'lodash';
import classIdAssigner         from '../../_lib/class-id-assigner';
import containerAdder          from '../_lib/container-adder';
import AsyncProgressVisualizer from '../../../../staters/async-progress-visualizer/async-progress-visualizer';

export default (settings, control, validatorDeclaration) => {
  let {validify, controlName} = control;
  let {asyncs = {}, elements} = validify;
  
  if(!validatorDeclaration.async || !_.isEmpty(asyncs)) {
    return;
  }
  
  let {asyncStatusHideClass, selectors} = settings;
  let {asyncStatusContainer} = selectors;
  let {$el, $elContainer} = elements;
  let $asyncsContainer = $('<div/>');
  let $pending = $('<div/>');
  let $success = $('<div/>');

  classIdAssigner(settings, $asyncsContainer, 'asyncs-container', controlName);
  classIdAssigner(settings, $pending, 'async-pending', controlName);
  classIdAssigner(settings, $success, 'async-success', controlName);
  
  $asyncsContainer.addClass(asyncStatusHideClass);
  $pending.addClass(asyncStatusHideClass);
  $success.addClass(asyncStatusHideClass);
  $asyncsContainer.append($pending).append($success);
  
  _.extend(asyncs, {$asyncsContainer, $pending, $success});
  _.extend(validify, {asyncs, asyncStatuses: {}});
  
  containerAdder($el, $asyncsContainer, $elContainer, asyncStatusContainer);
  validify.asyncProgressVisualizer = new AsyncProgressVisualizer(settings, control);
};
