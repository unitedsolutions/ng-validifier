import moduleInitializer from '../../_lib/module-initializer';
import Component         from '../_component/component';

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
    let $errors = control.$el.next().children();
    expect($errors.eq(0).text()).toMatch(/is required/);
    expect($errors.eq(1).text()).toMatch(/should be 5 characters/);
    done();
  });
});
