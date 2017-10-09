export default (control, validatorName) => {
  let {asyncProgressVisualizer, validationStater} = control.validify;
  asyncProgressVisualizer.container(true);
  asyncProgressVisualizer.success(false);
  validationStater.set(validatorName, null).visualize();
};
