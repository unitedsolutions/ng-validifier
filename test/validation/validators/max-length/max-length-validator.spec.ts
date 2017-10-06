import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './max-length-validator.component';

describe('validation :: validators :: maxLength', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('marks input as invalid', async done => {
    let control = await valueSetter('name', 'Dmitriy');
    expect(control.invalid).toBe(true);
    done();
  });
  
  it('marks input as valid', async done => {
    let control = await valueSetter('name', 'Dmit');
    expect(control.valid).toBe(true);
    done();
  });
});
