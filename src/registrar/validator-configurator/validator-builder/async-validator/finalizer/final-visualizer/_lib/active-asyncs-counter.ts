import * as _ from 'lodash';

export default asyncStatuses => {
  return _.reduce(asyncStatuses, (count, status) => {
    return count += +status;
  }, 0);
};
