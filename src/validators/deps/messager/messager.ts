import dependencyNamesStringifier from './_lib/dependency-names-stringifier';

export default (control, dependencyNames) => {
  let {controlNameProper} = control;
  dependencyNames = dependencyNamesStringifier(dependencyNames);
  return `${controlNameProper} depends on ${dependencyNames}`;
};
