import moduleInitializer from '../../../_lib/module-initializer';
import pause             from '../../../_lib/pause';
import Component         from './async-email-validator.component';

describe('validation :: validators :: async email', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('marks input as invalid', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    await pause(600);
    expect(control.invalid).toBe(true);
    done();
  });
  
  it('marks input as valid', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy.org');
    await pause(600);
    expect(control.valid).toBe(true);
    done();
  });
});
