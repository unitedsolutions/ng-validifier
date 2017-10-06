import {dependencyDependentsMap} from '../../_lib/vars';

export default _parent => {
  let formDependencyDependentsMap = dependencyDependentsMap.get(_parent);
  
  if(!formDependencyDependentsMap) {
    dependencyDependentsMap.set(_parent, formDependencyDependentsMap = {});
  }
  
  return formDependencyDependentsMap;
};

