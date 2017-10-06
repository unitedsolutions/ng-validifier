const validatorName = 'minLength';

export default {
  validator(control, minLength) {
    if(control.value.length < minLength) {
      return {[validatorName]: true};
    }
  },
  
  preprocessor(control, minLength) {
    if(!minLength) {
      throw new Error('minimum length should be defined');
    }
    
    return +minLength;
  },
  
  messager(control, minLength) {
    return `${control.controlNameProper} should be ${minLength} characters`;
  },
  
  validatorName
};
