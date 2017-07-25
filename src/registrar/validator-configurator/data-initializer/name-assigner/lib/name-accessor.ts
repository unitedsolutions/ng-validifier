import _ from 'lodash';

export default control => {
  let {controls} = control._parent;
  let controlNames = _.keys(controls);
  for(let controlName of controlNames) {
    if(controls[controlName] === control) {
      return controlName;
    }
  }
};
