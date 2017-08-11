import moduleInitializer from '../../_lib/module-initializer';
import Component         from '../initialization.component';

describe('initialization :: elements creation :: sync validators', () => {
  let valueSetter;

  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });

  it('creates errors container after input', async done => {
    let control = await valueSetter('name');
    expect(control.$el.next().hasClass('d-errors-container')).toBe(true);
    done();
  });
  
  it('adds error elements within errors container', async done => {
    let control = await valueSetter('name');
    expect(control.$el.next().children().length).toBe(2);
    done();
  });
  
  it('assigns appropriate error message to each error element', async done => {
    let control = await valueSetter('name');
    let $errorsContainer = control.$el.next();
    let $required = $errorsContainer.find('.d-error-required');
    let $minLength = $errorsContainer.find('.d-error-minLength');
    expect($required.text()).toMatch(/is required/);
    expect($minLength.text()).toMatch(/should be 5 characters/);
    done();
  });
  
  it('breaks an error message into words in span tags', async done => {
    let control = await valueSetter('name');
    let $errorsContainer = control.$el.next();
    let $required = $errorsContainer.find('.d-error-required');
    let $spans = $required.find('span');
    expect($spans.length).toBe(3);
    done();
  });
});
