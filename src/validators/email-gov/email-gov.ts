const validatorName = 'emailGov';
const emailGovRx = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*(\.(gov|mil))$/;

export default {
  validator(control) {
    if(!emailGovRx.test(control.value)) {
      return {[validatorName]: true};
    }
  },
  
  messager(control) {
    return `${control.controlNameProper} is not a valid email`;
  },
  
  validatorName
};
