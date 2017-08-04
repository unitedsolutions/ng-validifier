import moduleInitializer from '../../_lib/module-initializer';
import Component         from '../initialization.component';

describe('initialization :: progress elements creation :: async validators', () => {
  let valueSetter;

  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });

  it('places async progress statuses container before input', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    expect(control.$el.prev().hasClass('d-asyncs-container')).toBe(true);
    done();
  });
  
  it('creates two async status elements', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    expect(control.$el.prev().children().length).toBe(2);
    done();
  });
});
