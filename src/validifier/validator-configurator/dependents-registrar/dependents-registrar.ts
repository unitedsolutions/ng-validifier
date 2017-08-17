import {dependencyRequests} from '../../../_lib/vars';
import dependentsSetter     from '../../../dependents-setter/dependents-setter';

export default control => {
  let {_parent, controlName} = control;
  let parentRecords = dependencyRequests.get(_parent);
  
  if(parentRecords) {
    let dependentRecords = parentRecords[controlName];

    if(dependentRecords) {
      dependentsSetter(control, dependentRecords);
      delete parentRecords[controlName];
    }
  }
};
