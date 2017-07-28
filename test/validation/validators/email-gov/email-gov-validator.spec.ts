import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './email-gov-validator.component';

describe('validation :: validators :: email gov', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('marks input as invalid', async done => {
    let control = await valueSetter('email', 'some.person@dmitriy.org');
    expect(control.invalid).toBe(true);
    done();
  });
  
  it('marks input as valid', async done => {
    let control = await valueSetter('email', 'some.person@gsa.gov');
    expect(control.valid).toBe(true);
    done();
  });
});
