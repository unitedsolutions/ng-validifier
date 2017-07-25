import moduleInitializer from '../../_lib/module-initializer';
import Component         from '../_component/component';

describe('initialization :: class assignment :: all validators', () => {
  let valueSetter;

  beforeEach(async done => {
    ({valueSetter} = await moduleInitializer(Component));
    done();
  });

  it('prefixes ng-validify-assigned classes with specified phrase', async done => {
    let control = await valueSetter('name');
    expect(control.$el.hasClass('d-el')).toBe(true);
    done();
  });

  it('patches input element with identifying classes', async done => {
    let control = await valueSetter('name');
    let {$el} = control;
    expect($el.hasClass('d-el')).toBe(true);
    expect($el.hasClass('d-el-name')).toBe(true);
    done();
  });
  
  it('assigns identifying classes to an element container', async done => {
    let control = await valueSetter('name');
    let {$elContainer} = control.validify.elements;
    expect($elContainer.hasClass('d-el-container')).toBe(true);
    expect($elContainer.hasClass('d-el-container-name')).toBe(true);
    done();
  });
  
  it('adds identifying classes to an errors container', async done => {
    let control = await valueSetter('name');
    let {$errorsContainer} = control.validify.elements;
    expect($errorsContainer.hasClass('d-errors-container')).toBe(true);
    expect($errorsContainer.hasClass('d-errors-container-name')).toBe(true);
    done();
  });
});
