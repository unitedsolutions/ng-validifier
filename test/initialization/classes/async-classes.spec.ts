import moduleInitializer from '../../_lib/module-initializer';
import Component         from '../_component/component';

describe('initialization :: class assignment :: async validators', () => {
  let valueSetter;

  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });

  it('places identifying classes on asynchronous error elements', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    let $errors = control.$el.next().children();
    let $asyncEmail = $errors.eq(1);
    expect($asyncEmail.hasClass('d-error')).toBe(true);
    expect($asyncEmail.hasClass('d-error-asyncEmail')).toBe(true);
    done();
  });
  
  it('marks error elements for asynchronous validators as asynchronous', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    let $errors = control.$el.next().children();
    let $asyncEmail = $errors.eq(1);
    expect($asyncEmail.hasClass('d-async')).toBe(true);
    done();
  });
});
