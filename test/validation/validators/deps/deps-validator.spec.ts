import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './deps-validator.component';

describe('validation :: validators :: deps', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('marks input as invalid', async done => {
    let firstNamePromise = valueSetter('firstName', '');
    let lastNamePromise = valueSetter('lastName', 'Nesterkin');
    let promises = [firstNamePromise, lastNamePromise];
    let [firstNameControl, lastNameControl] = await Promise.all(promises);
    
    expect(firstNameControl.valid).toBe(false);
    expect(lastNameControl.valid).toBe(false);
    done();
  });
  
  it('marks input as valid', async done => {
    let firstNamePromise = valueSetter('firstName', 'Dmitriy');
    let lastNamePromise = valueSetter('lastName', 'Nesterkin');
    let promises = [firstNamePromise, lastNamePromise];
    let [firstNameControl, lastNameControl] = await Promise.all(promises);
    
    expect(firstNameControl.valid).toBe(true);
    expect(lastNameControl.valid).toBe(true);
    done();
  });
});
