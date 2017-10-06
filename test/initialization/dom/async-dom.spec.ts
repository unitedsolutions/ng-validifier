import moduleInitializer from '../../_lib/module-initializer';
import Component         from '../initialization.component';

describe('initialization :: elements creation :: async validators', () => {
  let valueSetter;
  let configs = {
    selectors: {
      elementContainer: '.element-container',
      errorsContainer: ['prependTo'],
      asyncStatusContainer: ['appendTo']
    }
  };

  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component, configs));
    done();
  });

  it('creates errors container before input', async done => {
    let control = await valueSetter('email');
    expect(control.$el.prev().hasClass('d-errors-container')).toBe(true);
    done();
  });
  
  it('adds only one element within errors container', async done => {
    let control = await valueSetter('email');
    expect(control.$el.prev().children().length).toBe(1);
    done();
  });
  
  it('augments async error element after async validator runs', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    expect(control.$el.prev().children().length).toBe(2);
    done();
  });
  
  it('generates appropriate async error message', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    let matchRx = new RegExp('must be equal to dmitriy@dmitriy.org');
    expect(control.$el.prev().children(':last').text()).toMatch(matchRx);
    done();
  });
});
