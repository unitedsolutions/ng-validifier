import * as _ from 'lodash';

export default (control, newDependents) => {
  let {validify} = control;
  let {dependents} = validify;
  
  if(!_.isArray(newDependents)) {
    newDependents = [newDependents];
  }
  
  if(!dependents) {
    _.set(validify, 'dependents', dependents = []);
  }
  
  dependents.push(...newDependents);
};
