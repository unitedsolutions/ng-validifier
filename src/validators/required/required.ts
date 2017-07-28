const validatorName = 'required';

export default {
  validator(control) {
    if(!control.value) {
      return {[validatorName]: true};
    }
  },

  messager(control) {
    return `${control.controlNameProper} is required`;
  },

  validatorName
};
