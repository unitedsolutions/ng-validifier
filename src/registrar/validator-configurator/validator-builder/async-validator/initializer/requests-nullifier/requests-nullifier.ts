import _ from 'lodash';

export default (control, validatorName, validationId) => {
  let {requests} = control.validify.errors[validatorName];

  _.each(requests, (request, key) => {
    requests[key] = true;
  });
  
  requests[validationId] = false;
};
