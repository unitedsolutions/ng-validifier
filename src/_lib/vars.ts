const dependencyRequests = new WeakMap();

const settings = {
  prefix: 'v',

  selectors: {
    elementContainer: '.form-group',
    errorsContainer: ['insertAfter', 'input'],
    asyncStatusContainer: ['insertBefore', 'input']
  },
  
  errorMessageClasses: {
    initial: 'valid',
    valid: 'hidden',
    invalid: 'alert alert-danger'
  },

  errorMessageDelays: {
    valid: 300,
    invalid: 500
  },

  asyncDebounceTime: 500,

  asyncStatusClasses: {
    hidden: 'hidden',
    pending: 'alert alert-info',
    success: 'alert alert-success'
  },
  
  asyncSuccessMessageDuration: 1000
};

export {
  dependencyRequests, 
  settings
};
