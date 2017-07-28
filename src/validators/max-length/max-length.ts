const validatorName = 'maxLength';

export default {
  validator(control, maxLength) {
    if(control.value.length > maxLength) {
      return {[validatorName]: true};
    }
  },
  
  preprocessor(control, maxLength) {
    if(!maxLength) {
      throw new Error('maximum length should be defined');
    }
    
    return +maxLength;
  },
  
  messager(control, maxLength) {
    return `${control.controlNameProper} should be less than ${maxLength} characters`;
  },
  
  validatorName
};
