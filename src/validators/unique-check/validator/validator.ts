import {validatorName} from '../_lib/vars';

export default (control, configs) => {
  let {fieldName, ignore, ignoreCase, path} = configs;
  let {value} = control;

  if(ignoreCase) {
    value = value.toLowerCase();
  }
  
  if(!value || ignore.indexOf(value) !== -1) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    let params = {[fieldName]: value};
    
    control.http.get(path, {params}).subscribe(data => {
      resolve(data.length ? {[validatorName]: true} : null);
    }, error => {
      reject(error.message);
    });
  });
};
