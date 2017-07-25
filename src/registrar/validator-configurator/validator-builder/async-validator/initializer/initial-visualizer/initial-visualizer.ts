export default (control, validatorName) => {
  let {asyncProgressVisualizer, validationStater} = control.validify;
  asyncProgressVisualizer.container(true).success(false);
  validationStater.set(validatorName, null).visualize();
};
