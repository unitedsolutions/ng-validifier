import * as _ from 'lodash';

export default (settings, $el) => {
  let classes = $el.attr('class');
  
  if(classes) {
    classes = classes.split(/\s+/);
  }

  return _.reduce(classes, (count, klass) => {
    if(klass.startsWith(`${settings.prefix}-error`)) {
      count++;
    }
    
    return count;
  }, 0);
};
