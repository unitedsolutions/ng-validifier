const validatorName = 'asyncEmail';
const testValue = 'dmitriy@dmitriy.org';

export default {
  validator(control, timeout) {
    return new Promise(resolve => {
      setTimeout(() => {
        if(control.value === testValue) {
          return resolve();
        }
        
        resolve({[validatorName]: true});
      }, timeout);
    });
  },
  
  preprocessor(control, timeout) {
    if(!timeout) {
      return 0;
    }
    
    return +timeout;
  },

  messager(control) {
    return `${control.controlNameProper} must be equal to ${testValue}`;
  },

  validatorName,
  
  async: true
};
