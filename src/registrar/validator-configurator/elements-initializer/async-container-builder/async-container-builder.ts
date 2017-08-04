import * as $                  from 'jquery';
import * as _                  from 'lodash';
import {settings}              from '../../../../_lib/vars';
import classIdAssigner         from '../../_lib/class-id-assigner';
import containerAdder          from '../_lib/container-adder';
import AsyncProgressVisualizer from '../../../../staters/async-progress-visualizer/async-progress-visualizer';

export default (control, validatorDeclaration) => {
  let {validify, controlName} = control;
  let {asyncs = {}, elements} = validify;
  
  if(!validatorDeclaration.async || !_.isEmpty(asyncs)) {
    return;
  }
  
  let {asyncStatusClasses, selectors} = settings;
  let {asyncStatusContainer} = selectors;
  let {$el, $elContainer} = elements;
  let $asyncsContainer = $('<div/>');
  let $pending = $('<div/>');
  let $success = $('<div/>');

  classIdAssigner($asyncsContainer, 'asyncs-container', controlName);
  classIdAssigner($pending, 'async-pending', controlName);
  classIdAssigner($success, 'async-success', controlName);
  
  $asyncsContainer.addClass(asyncStatusClasses.hidden);
  $pending.addClass(asyncStatusClasses.hidden).addClass(asyncStatusClasses.pending);
  $success.addClass(asyncStatusClasses.hidden).addClass(asyncStatusClasses.success);
  $asyncsContainer.append($pending).append($success);
  
  _.extend(asyncs, {$asyncsContainer, $pending, $success});
  _.extend(validify, {asyncs, asyncStatuses: {}});
  
  containerAdder($el, $asyncsContainer, $elContainer, asyncStatusContainer);
  validify.asyncProgressVisualizer = new AsyncProgressVisualizer(control);
};
