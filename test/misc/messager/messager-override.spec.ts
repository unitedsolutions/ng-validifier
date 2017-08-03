import moduleInitializer from '../../_lib/module-initializer';
import Component         from './messager-override.component';

describe('misc :: messagers :: override', () => {
  let valueSetter;
  
  beforeEach(async done => {
    let messagers = {dRequired: 'field is necessary'};
    ({valueSetter} = await moduleInitializer(Component, undefined, undefined, messagers));
    done();
  });
  
  it('assigns error message from new messager', async done => {
    let control = await valueSetter('name');
    let $errorsContainer = control.$el.next();
    let $required = $errorsContainer.find('.d-error-required');
    expect($required.text()).toBe('field is necessary');
    done();
  });
});
