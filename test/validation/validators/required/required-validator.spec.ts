import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './required-validator.component';

describe('validation :: validators :: required', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('marks input as invalid', async done => {
    let control = await valueSetter('name');
    expect(control.invalid).toBe(true);
    done();
  });
  
  it('marks input as valid', async done => {
    let control = await valueSetter('name', 'Dmitriy');
    expect(control.valid).toBe(true);
    done();
  });
});
