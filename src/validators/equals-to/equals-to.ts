const validatorName = 'equalsTo';

export default {
  validator(control, equalsTo) {
    let {value, _parent} = control;
    let equalsToControl = _parent.controls[equalsTo];

    if(!value || value !== equalsToControl.value) {
      return {[validatorName]: true};
    }
  },

  messager(control, validatorConfigs) {
    return `${control.controlNameProper} must equal to ${validatorConfigs}`;
  },

  validatorName
}
