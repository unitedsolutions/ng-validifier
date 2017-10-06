import moduleInitializer from '../../_lib/module-initializer';
import Component         from './model-driven-form.component';

describe('misc :: model-driven form', () => {
  let valueSetter;
  
  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });
  
  it('assigns appropriate error message', async done => {
    let control = await valueSetter('name');
    let $errorsContainer = control.$el.next();
    let $required = $errorsContainer.find('.d-error-required');
    expect($required.text()).toMatch(/is required/);
    done();
  });
  
  it('correctly validates control', async done => {
    let control = await valueSetter('name', 'Dmitriy');
    expect(control.valid).toBe(true);
    done();
  });
});
