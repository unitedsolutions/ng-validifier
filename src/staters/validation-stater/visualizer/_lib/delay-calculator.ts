export default (settings, errorConfigs) => {
  let {errorMessageDelays: delays} = settings;
  let {_async, status, control} = errorConfigs;
  let {dirty} = control;
  return _async || !dirty ? 0 : status ? delays.invalid : delays.valid;
};
