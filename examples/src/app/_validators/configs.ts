export default {
  prefix: 'v',

  selectors: {
    elementContainer: '.form-group',
    errorsContainer: ['appendTo', '.errors'],
    asyncStatusContainer: ['insertBefore', 'input']
  },
  
  errorMessageClasses: {
    initial: 'ng-valid'
  },

  errorMessageDelays: {
    valid: 300,
    invalid: 500
  },

  asyncDebounceTime: 500,

  asyncStatusHideClass: 'hidden',

  asyncSuccessMessageDuration: 2000,
  
  asyncMinimumPendingDuration: 1000,
  
  validatorConfigs: {
    uniqueCheck: {
      baseUrl: 'http://localhost:12321'
    }
  }
};
