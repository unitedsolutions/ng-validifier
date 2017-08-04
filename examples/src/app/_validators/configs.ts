export default {
  prefix: 'v',

  selectors: {
    elementContainer: '.form-group',
    errorsContainer: ['appendTo', '.errors'],
    asyncStatusContainer: ['insertBefore', 'input']
  },
  
  errorMessageClasses: {
    initial: 'valid',
    valid: 'inactive-error',
    invalid: 'active-error'
  },

  errorMessageDelays: {
    valid: 300,
    invalid: 500
  },

  asyncDebounceTime: 500,

  asyncStatusClasses: {
    hidden: 'hidden',
    pending: 'async-pending',
    success: 'async-success'
  },

  asyncSuccessMessageDuration: 2000
};
