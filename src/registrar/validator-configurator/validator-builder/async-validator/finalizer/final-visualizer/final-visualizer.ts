import {settings}          from '../../../../../../_lib/vars';
import activeAsyncsCounter from './_lib/active-asyncs-counter';

export default (control, validatorName, validationStatus) => {
  let {validify} = control;
  let {asyncStatuses, asyncProgressVisualizer, validationStater} = validify;
  
  if(!activeAsyncsCounter(asyncStatuses)) {
    asyncProgressVisualizer.pending(false);
    
    if(!validationStatus && control.valid) {
      asyncProgressVisualizer.success(true);
      setTimeout(() => {
        asyncProgressVisualizer.success(false).container(false);
      }, settings.asyncSuccessMessageDuration);
    }
  }
  
  validationStater.set(validatorName, validationStatus).updateDependents().visualize();
};
