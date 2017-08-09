import * as _ from 'lodash';

export default (settings, name) => {
  let {prefix} = settings;
  
  if(prefix && name) {
    name = prefix + _.upperFirst(name);
  }
  
  return name;
};
