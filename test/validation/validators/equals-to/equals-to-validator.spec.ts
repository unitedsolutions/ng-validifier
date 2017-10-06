import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './equals-to-validator.component';

describe('validation :: validators :: equals to', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('marks input as invalid', async done => {
    let passwordPromise = valueSetter('password', 'password');
    let confirmationPasswordPromise = valueSetter('confirmationPassword', 'passwor');
    let promises = [passwordPromise, confirmationPasswordPromise];
    let [passwordControl, confirmationControl] = await Promise.all(promises);
    
    expect(passwordControl.invalid).toBe(false);
    expect(confirmationControl.invalid).toBe(true);
    done();
  });
  
  it('marks input as valid', async done => {
    let passwordPromise = valueSetter('password', 'password');
    let confirmationPasswordPromise = valueSetter('confirmationPassword', 'password');
    let promises = [passwordPromise, confirmationPasswordPromise];
    let [passwordControl, confirmationControl] = await Promise.all(promises);
    
    expect(passwordControl.invalid).toBe(false);
    expect(confirmationControl.invalid).toBe(false);
    done();
  });
});
