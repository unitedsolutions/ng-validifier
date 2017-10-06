export default {
  prefix: 'd',

  selectors: {
    elementContainer: '.element-container',
    errorsContainer: ['insertAfter', 'input'],
    asyncStatusContainer: ['insertBefore', 'input']
  },
  
  errorMessageClasses: {
    initial: 'valid',
    valid: 'hidden',
    invalid: 'alert alert-danger'
  },

  errorMessageDelays: {
    valid: 30,
    invalid: 50
  },

  asyncDebounceTime: 0,

  asyncStatusHideClass: 'hidden',

  asyncSuccessMessageDuration: 1000
};
