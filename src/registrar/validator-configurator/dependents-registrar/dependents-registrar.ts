import dependentsSetter     from '../../../_lib/dependents-setter';
import {dependencyRequests} from '../../../_lib/vars';

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
