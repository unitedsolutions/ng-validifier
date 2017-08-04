import * as _   from 'lodash';
import prefixer from '../../../_lib/prefixer';

export default validationStatus => {
  if(_.isPlainObject(validationStatus)) {
    let key = _.keys(validationStatus)[0];
    let value = validationStatus[key];
    key = prefixer(key);
    validationStatus = {[key]: value};
  }
  
  return validationStatus;
};
