import * as $          from 'jquery';
import * as _          from 'lodash';
import {Validators}    from '@angular/forms';
import {settings}      from '../../../_lib/vars';
import classIdAssigner from '../_lib/class-id-assigner';

export default (control, configs, validatorDeclaration) => {
  let {validatorName, validatorNamePrefixed, async: _async} = validatorDeclaration;
  let {messager} = Validators[validatorNamePrefixed];
  let {elements, errors} = control.validify;
  let baseErrorConfigs = {$el: $(), _async, validatorName, control};
  
  if(!messager) {
    return errors[validatorName] = baseErrorConfigs;
  }
  
  let errorConfigs = errors[validatorName] || baseErrorConfigs;
  let {$el} = errorConfigs;
  let {validator: validatorConfigs, messager: messagerConfigs} = configs;
  let {errorMessageClasses, prefix} = settings;
  let {$errorsContainer} = elements;
  let errorMessager = _.isFunction(messager) ? messager : () => messager;
  let errorMessage = errorMessager(control, validatorConfigs, messagerConfigs);
  
  if(!$el.length) {
    let syncAsyncClass = `${prefix}-` + (_async ? 'async' : 'sync');
    $el = $('<div/>');
    $el.addClass(syncAsyncClass);
    $errorsContainer.append($el);
    classIdAssigner($el, 'error', validatorName);
    errorConfigs = _.extend(errorConfigs, {$el});
    
    if(errorMessageClasses && errorMessageClasses.initial) {
      $el.addClass(errorMessageClasses.initial);
    }
    
    if(_async) {
      errorConfigs.requests = {};
    }
    
    errors[validatorName] = errorConfigs;
  }

  $el.html(errorMessage);
};
