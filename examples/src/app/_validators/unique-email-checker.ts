const validatorName = 'uniqueEmailChecker';
const usedEmail = 'example@example.com';

export default {
  validator(control) {
    return new Promise(resolve => {
      setTimeout(() => {
        if(control.value !== usedEmail) {
          return resolve();
        }
        
        resolve({[validatorName]: true});
      }, 1500);
    });
  },
  
  messager: 'email is already registered',
  
  validatorName,
  
  async: true
};
