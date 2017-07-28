import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './pattern-validator.component';

describe('validation :: validators :: pattern', () => {
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
    let control = await valueSetter('name', '0123456789');
    expect(control.valid).toBe(true);
    done();
  });
});
