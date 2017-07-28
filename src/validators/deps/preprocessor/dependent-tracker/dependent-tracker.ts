import formDependencyMapGetter   from './form-dependency-map-getter/form-dependency-map-getter';

export default (dependencyName, control) => {
  let {_parent, controlName} = control;
  let formDependencyDependentsMap = formDependencyMapGetter(_parent);
  let controlDependents = formDependencyDependentsMap[controlName];
  
  if((controlDependents || []).indexOf(dependencyName) > -1) {
    throw new Error(`[${controlName}] and [${dependencyName}] depend on each other`);
  }
  
  let dependents = formDependencyDependentsMap[dependencyName];
  
  if(!dependents) {
    dependents = formDependencyDependentsMap[dependencyName] = [];
  }
  
  dependents.push(controlName);
};
