import * as _       from 'lodash';
import {HttpParams} from '@angular/common/http';

const validatorName = 'uniqueCheck';

export default {
  validator(control, configs) {
    let {fieldName, ignore, ignoreCase, path} = configs;
    let {value} = control;

    if(ignoreCase) {
      value = value.toLowerCase();
    }
    
    if(!value || ignore.indexOf(value) !== -1) {
      return Promise.resolve();
    }

    let params = new HttpParams();
    params = params.append(fieldName, value);

    return new Promise((resolve, reject) => {
      control.http.get(path, {params}).subscribe(data => {
        resolve(data.length ? {[validatorName]: true} : null);
      }, error => {
        reject(error.message);
      });
    });
  },
  
  preprocessor(control, configs, baseConfigs) {
    if(!_.isPlainObject(configs)) {
      configs = {path: configs};
    }
    
    let {fieldName, ignore, ignoreCase, path} = configs;
    
    if(baseConfigs) {
      var {baseUrl} = baseConfigs;
    }
    
    if(!fieldName) {
      fieldName = control.controlName;
    }
    
    if(!ignore) {
      ignore = [];
    } else if(!_.isArray(ignore)) {
      ignore = [ignore];
    }
    
    if(_.isUndefined(ignoreCase)) {
      ignoreCase = true;
    }
    
    if(ignoreCase) {
      ignore = ignore.map(ignore => (ignore + '').toLowerCase());
    }
    
    if(baseUrl) {
      path = baseUrl + path;
    }
    
    return _.extend(configs, {fieldName, ignore, ignoreCase, path});
  },
  
  messager(control) {
    let {controlNameProper} = control;
    return `Value provided for ${controlNameProper} field already exists`;
  },
  
  validatorName,
  
  async: true
};
