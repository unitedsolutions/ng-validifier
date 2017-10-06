import {validatorName} from '../_lib/vars';

export default (control, dependencyNames) => {
  let {controls} = control._parent;
  
  for(let dependencyName of dependencyNames) {
    let dependencyControl = controls[dependencyName];

    if(!dependencyControl) {
      console.warn(`dependency [${dependencyName}] is not declared`);
    }

    if(!dependencyControl || dependencyControl.invalid) {
      return {[validatorName]: true};
    }
  }
};
