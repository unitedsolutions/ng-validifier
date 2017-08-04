import * as _     from 'lodash';
import {settings} from '../../../../../_lib/vars';

export default $el => {
  let {prefix} = settings;
  let classes = $el.attr('class');
  
  if(classes) {
    classes = classes.split(/\s+/);
  }

  return _.reduce(classes, (count, klass) => {
    if(klass.startsWith(`${prefix}-error`)) {
      count++;
    }
    
    return count;
  }, 0);
};
