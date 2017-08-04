import * as _       from 'lodash';
import nameAccessor from './lib/name-accessor';

export default control => {
  let {controlName} = control;
  
  if(!controlName) {
    controlName = nameAccessor(control);
    _.extend(control, {
      controlName,
      controlNameProper: _.upperFirst(_.lowerCase(controlName))
    });
  }
};
