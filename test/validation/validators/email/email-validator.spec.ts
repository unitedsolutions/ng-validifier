import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './email-validator.component';

describe('validation :: validators :: email', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('marks input as invalid', async done => {
    let control = await valueSetter('email', 'dmitriy@');
    expect(control.invalid).toBe(true);
    done();
  });
  
  it('marks input as valid', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy.org');
    expect(control.valid).toBe(true);
    done();
  });
});
