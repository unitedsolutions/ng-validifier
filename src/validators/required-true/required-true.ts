const directiveName = 'required';
const validatorName = 'requiredTrue';

export default {
  validator(control) {
    if(control.value !== true) {
      return {[directiveName]: true};
    }
  },

  messager(control) {
    return `${control.controlNameProper} is required`;
  },

  directiveName,

  validatorName,
  
  checkbox: true
};
