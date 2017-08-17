export default (name, checkbox) => {
  let checkboxType = '[type=checkbox]';
  let controlTypes = ['formControlName', 'formControl', 'ngModel']
  checkbox = checkbox ? `input${checkboxType}` : `:not(${checkboxType})`;
  
  return controlTypes.reduce((selector, controlType) => {
    selector.push(`${checkbox}[${name}][${controlType}]`);
    return selector;
  }, []).join(',');
};
