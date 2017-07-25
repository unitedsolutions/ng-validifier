import moduleInitializer from '../../_lib/module-initializer';
import Component         from '../_component/component';

describe('initialization :: class assignment :: sync validators', () => {
  let valueSetter;

  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });

  it('places identifying classes on synchronous error elements', async done => {
    let control = await valueSetter('name');
    let $errors = control.$el.next().children();
    let $required = $errors.eq(0);
    let $minLength = $errors.eq(1);
    expect($required.hasClass('d-error')).toBe(true);
    expect($minLength.hasClass('d-error-minLength')).toBe(true);
    done();
  });
  
  it('marks error elements for synchronous validators as synchronous', async done => {
    let control = await valueSetter('name');
    let $errors = control.$el.next().children();
    let $required = $errors.eq(0);
    let $minLength = $errors.eq(1);
    expect($required.hasClass('d-sync')).toBe(true);
    expect($minLength.hasClass('d-sync')).toBe(true);
    done();
  });
});
