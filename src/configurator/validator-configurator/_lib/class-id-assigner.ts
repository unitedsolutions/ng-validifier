export default (settings, $el, baseClass, controlName) => {
  let {prefix} = settings;
  let classes = [baseClass, `${baseClass}-${controlName}`];
  let classesStr = classes.map(klass => `${prefix}-${klass}`).join(' ');
  $el.addClass(classesStr);
};
