import moduleInitializer from '../_lib/module-initializer';
import Component         from './_components/component-sync-with-deps';

describe('validation :: sync validators :: with deps', () => {
  let valueSetter;

  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });

  it('does not validate input if dependency is not satisfied', async done => {
    let control = await valueSetter('confirmationPassword', 'password');
    expect(control.valid).toBe(false);
    done();
  });
  
  it('validates when dependency is satisfied and equal to dependent', async done => {
    let passwordPromise = valueSetter('password', 'password');
    let confirmationPromise = valueSetter('confirmationPassword', 'password');
    let controls = await Promise.all([passwordPromise, confirmationPromise]);
    let [passwordControl, confirmationControl] = controls;
    expect(passwordControl.valid).toBe(true);
    expect(confirmationControl.valid).toBe(true);
    expect(passwordControl._parent.invalid).toBe(false);
    done();
  });
});
