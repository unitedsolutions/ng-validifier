import * as _     from 'lodash';
import {settings} from '../../_lib/vars';

export default name => {
  let {prefix} = settings;
  
  if(prefix && name) {
    name = prefix + _.upperFirst(name);
  }
  
  return name;
};
