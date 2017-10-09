import * as _ from 'lodash';

export default (time, settings) => {
  time = _.now() - time;
  time = (settings.asyncMinimumPendingDuration || time) - time;
  
  if(time > 0) {
    time = 0;
  }
  
  return new Promise(resolve => setTimeout(resolve, time));
};
