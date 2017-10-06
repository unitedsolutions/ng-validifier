import * as _            from 'lodash';
import moduleInitializer from '../../../_lib/module-initializer';
import Component         from './sync-process.component';

describe('validation :: sync validators :: valid result', () => {
  let valueSetter, configs;

  beforeEach(async done => {
    ({valueSetter, configs} = await moduleInitializer(Component));
    done();
  });
  
  it('returns correct valid results', async done => {
    let control = await valueSetter('name', 'Dmitriy');
    let {_parent} = control;
    expect(control.valid).toBe(true);
    expect(_parent.invalid).toBe(false);
    done();
  });
  
  it('sets appropriate non-error classes on element container', async done => {
    let control = await valueSetter('name', 'Dmitriy');
    let {$elContainer} = control.validify.elements;
    expect($elContainer.hasClass('ng-dirty')).toBe(true);
    expect($elContainer.hasClass('ng-invalid')).toBe(false);
    expect($elContainer.hasClass('d-error-required')).toBe(false);
    expect($elContainer.hasClass('d-error-minLength')).toBe(false);
    expect($elContainer.hasClass('ng-valid')).toBe(true);
    done();
  });

  it('sets approprate non-error classes on an element', async done => {
    let control = await valueSetter('name', 'Dmitriy');
    let {$el} = control;
    expect($el.hasClass('ng-dirty')).toBe(true);
    expect($el.hasClass('ng-invalid')).toBe(false);
    expect($el.hasClass('d-error-required')).toBe(false);
    expect($el.hasClass('d-error-minLength')).toBe(false);
    expect($el.hasClass('ng-valid')).toBe(true);
    done();
  });

  it('removes appropriate error classes from error elements', async done => {
    let {invalid: invalidClasses} = configs.errorMessageClasses;
    let invalidClassesArr = invalidClasses.split(/\s+/);
    let control = await valueSetter('name', 'Dmitriy');
    let $errors = control.$el.next().children();
    $errors = [$errors.eq(0), $errors.eq(1)];
    
    _.each($errors, $error => {
      let classes = $error.attr('class').split(/\s+/);
      let hasNone = invalidClassesArr.every(klass => classes.indexOf(klass) === -1);
      expect(hasNone).toBe(true);
    });
    
    done();
  });
  
  it('assigns appropriate non-error classes to error elements', async done => {
    let {valid: validClasses} = configs.errorMessageClasses;
    let validClassesArr = validClasses.split(/\s+/);
    let control = await valueSetter('name', 'Dmitriy');
    let $errors = control.$el.next().children();
    $errors = [$errors.eq(0), $errors.eq(1)];
    
    _.each($errors, $error => {
      let classes = $error.attr('class').split(/\s+/);
      let hasAll = validClassesArr.every(klass => classes.indexOf(klass) >= 0);
      expect(hasAll).toBe(true);
    });
    
    done();    
  });
  
  it('removes a sync class when all sync validators passed', async done => {
    let control = await valueSetter('name', 'Dmitriy');
    let {$elContainer} = control.validify.elements;
    expect($elContainer.hasClass('d-sync')).toBe(false);
    done();
  });
});
