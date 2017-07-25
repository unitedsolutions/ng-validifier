const validatorName = 'minLength';

export default {
  validator(control, minLength) {
    if(control.value.length < minLength) {
      return {[validatorName]: true};
    }
  },
  
  preprocessor(control, minLength) {
    return +minLength;
  },
  
  messager(control, minLength, messagerConfigs = {noFieldName: ''}) {
    let {controlNameProper} = control;
    let {noFieldName} = messagerConfigs;
    let message = `should be ${minLength} characters`;
    
    if(!noFieldName) {
      message = `${controlNameProper} ${message}`;
    }
    
    return message;
  },
  
  validatorName,
  
  directive: true
};
