import errorsCounter from './_lib/errors-counter';

export default (settings, errorConfigs) => {
  let {validatorName, status: validationStatus} = errorConfigs;
  let {$el: $errorEl, _async, control} = errorConfigs;
  let {errorMessageClasses, prefix} = settings;
  let {dirty, validify} = control;
  let {$el, $elContainer, $errorsContainer} = validify.elements;
  let errorClass = `${prefix}-error-${validatorName}`;
  let syncClass = `${prefix}-sync`;
  let asyncClass = `${prefix}-async`;
  
  if(dirty) {
    $elContainer.removeClass('ng-pristine').addClass('ng-dirty');
  } else {
    $elContainer.addClass('ng-pristine');
  }

  if(_async) {
    $elContainer.addClass(asyncClass).removeClass(syncClass);
    $errorsContainer.addClass(asyncClass).removeClass(syncClass);
  } else {
    $elContainer.addClass(syncClass).removeClass(asyncClass);
    $errorsContainer.addClass(syncClass).removeClass(asyncClass);
  }

  if(validationStatus) {
    $el.addClass(errorClass);
    $elContainer.removeClass('ng-valid').addClass('ng-invalid').addClass(errorClass);
    $errorEl.removeClass('ng-valid').removeClass(errorMessageClasses.valid);
    return $errorEl.addClass('ng-invalid').addClass(errorMessageClasses.invalid);
  }
  
  $errorEl.removeClass('ng-invalid').removeClass(errorMessageClasses.invalid);
  $errorEl.addClass('ng-valid').addClass(errorMessageClasses.valid);
  $elContainer.removeClass(errorClass);
  $el.removeClass(errorClass);

  if(!errorsCounter(settings, $elContainer)) {
    $elContainer.removeClass('ng-invalid').addClass('ng-valid');
    $elContainer.removeClass(_async ? asyncClass : syncClass);
  }
};
