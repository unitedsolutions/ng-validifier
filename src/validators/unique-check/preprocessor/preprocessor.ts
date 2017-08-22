import * as _ from 'lodash';

export default (control, configs, baseConfigs) => {
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
};
