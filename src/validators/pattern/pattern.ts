import _ from 'lodash';

const validatorName = 'pattern';

export default {
  validator(control, pattern) {
    if(!pattern.test(control.value)) {
      return {[validatorName]: true};
    }
  },
  
  preprocessor(control, pattern) {
    if(!pattern) {
      throw new Error('specify regular expression pattern');
    }
    
    if(_.isString(pattern)) {
      pattern = new RegExp(`^${pattern}$`);
    }
    
    return pattern;
  },
  
  validatorName
};
