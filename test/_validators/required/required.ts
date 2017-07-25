const validatorName = 'required';

export default {
  validator(control) {
    if(!control.value) {
      return {[validatorName]: true};
    }
  },

  messager(control) {
    let {controlNameProper} = control;
    return `${controlNameProper} is required`;
  },

  validatorName
};
