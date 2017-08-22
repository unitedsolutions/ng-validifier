import moduleInitializer from '../../../_lib/module-initializer';
import pause             from '../../../_lib/pause';
import Component         from './unique-check-validator.component';

describe('validation :: validators :: unique check', () => {
  let valueSetter;
  
  beforeEach(async done => {
    let settings = {
      validatorConfigs: {
        uniqueCheck: {
          baseUrl: 'http://localhost:12321'
        }
      }
    };
    
    ({valueSetter} = await moduleInitializer(Component, settings));
    done();
  });
  
  it('marks input as invalid', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy.org');
    await pause(600);
    expect(control.invalid).toBe(true);
    done();
  });
  
  it('marks input as valid', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy.com');
    await pause(600);
    expect(control.valid).toBe(true);
    done();
  });
});
