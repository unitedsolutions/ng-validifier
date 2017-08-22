import pause from './pause';

export default async (fixture, delay, name, value, customDelay?) => {
  return new Promise(async resolve => {
    (async function controlGetter() {
      let component = fixture.componentInstance;
      let form = component['form'];
      let {controls} = form;
      let control = controls[name];
      
      if(!control) {
        await pause(delay);
        controlGetter();
      } else {
        control.setValue(value);
        control.markAsDirty();
        control.updateValueAndValidity();
        fixture.detectChanges();
        await pause(delay || customDelay);
        resolve(control);
      }
    })();
  });
};
