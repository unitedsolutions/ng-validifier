import {dependencyRequests} from '../../../../../_lib/vars';

export default (dependencyName, control) => {
  let {_parent} = control;
  let formDependencyRequests = dependencyRequests.get(_parent);
    
  if(!formDependencyRequests) {
    dependencyRequests.set(_parent, formDependencyRequests = {});
  }
  
  let dependents = formDependencyRequests[dependencyName];
  
  if(!dependents) {
    dependents = formDependencyRequests[dependencyName] = [];
  }
  
  dependents.push(control);    
};
