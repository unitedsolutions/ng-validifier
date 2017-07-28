import * as _            from 'lodash';
import moduleInitializer from '../../_lib/module-initializer';
import Component         from './_components/component-sync';

describe('validation :: sync validators :: invalid result', () => {
  let valueSetter, configs;

  beforeEach(async done => {
    ({valueSetter, configs} = await moduleInitializer(Component));
    done();
  });

  it('obtains correct invalid results', async done => {
    let control = await valueSetter('name');
    let {_parent} = control;
    expect(control.valid).toBe(false);
    expect(_parent.invalid).toBe(true);
    done();
  });
  
  it('sets approprate error classes on an element', async done => {
    let control = await valueSetter('name');
    let {$el} = control;
    expect($el.hasClass('ng-dirty')).toBe(true);
    expect($el.hasClass('ng-invalid')).toBe(true);
    expect($el.hasClass('d-error-required')).toBe(true);
    expect($el.hasClass('d-error-minLength')).toBe(true);
    done();
  });
  
  it('sets appropriate error classes on element container', async done => {
    let control = await valueSetter('name');
    let {$elContainer} = control.validify.elements;
    expect($elContainer.hasClass('ng-dirty')).toBe(true);
    expect($elContainer.hasClass('ng-invalid')).toBe(true);
    expect($elContainer.hasClass('d-error-required')).toBe(true);
    expect($elContainer.hasClass('d-error-minLength')).toBe(true);
    done();
  });
  
  it('assigns appropriate error classes to error elements', async done => {
    let {invalid: invalidClasses} = configs.errorMessageClasses;
    let invalidClassesArr = invalidClasses.split(/\s+/);
    let control = await valueSetter('name');
    let $errors = control.$el.next().children();
    $errors = [$errors.eq(0), $errors.eq(1)];
    
    _.each($errors, $error => {
      let classes = $error.attr('class').split(/\s+/);
      let hasAll = invalidClassesArr.every(klass => classes.indexOf(klass) >= 0);
      expect(hasAll).toBe(true);
    });
    
    done();
  });
  
  it('removes appropriate non-error classes from error elements', async done => {
    let {valid: validClasses} = configs.errorMessageClasses;
    let validClassesArr = validClasses.split(/\s+/);
    let control = await valueSetter('name');
    let $errors = control.$el.next().children();
    $errors = [$errors.eq(0), $errors.eq(1)];
    
    _.each($errors, $error => {
      let classes = $error.attr('class').split(/\s+/);
      let hasNone = validClassesArr.every(klass => classes.indexOf(klass) === -1);
      expect(hasNone).toBe(true);
    });
    
    done();    
  });
  
  it('assigns a sync class if any of the sync validators failed', async done => {
    let control = await valueSetter('name');
    let {$elContainer} = control.validify.elements;
    expect($elContainer.hasClass('d-sync')).toBe(true);
    done();
  });
});
