import strArrayifier from './_lib/str-arrayifier';

export default (dependencyNames, control) => {
  let {controlName} = control;
  dependencyNames = strArrayifier(dependencyNames, ',');
  if(dependencyNames.indexOf(controlName) !== -1) {
    throw new Error(`[${controlName}] cannot depend on itself`);
  }
  return dependencyNames;
};
