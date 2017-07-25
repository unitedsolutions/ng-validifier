import pause from './pause';

export default async (fixture, controls, delay, name, value, customDelay?) => {
  let control = controls[name];
  control.setValue(value);
  control.markAsDirty();
  control.updateValueAndValidity();
  fixture.detectChanges();
  await pause(customDelay || delay);
  return control;
};
