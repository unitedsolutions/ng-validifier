import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './required-true-validator.component';

describe('validation :: validators :: required true', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('marks input as invalid', async done => {
    let control = await valueSetter('name', false);
    expect(control.invalid).toBe(true);
    done();
  });
  
  it('marks input as valid', async done => {
    let control = await valueSetter('name', true);
    expect(control.valid).toBe(true);
    done();
  });
});
