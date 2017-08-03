import * as _            from 'lodash';
import moduleInitializer from '../../_lib/module-initializer';
import Component         from '../initialization.component';

describe('initialization :: progress class assignment :: async validators', () => {
  let valueSetter, configs;

  beforeEach(async done => {
    ({valueSetter, configs} = await moduleInitializer(Component));
    done();
  });

  it('places identifying classes on async progress statuses container', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    let $asyncsContainer = control.$el.prev();
    expect($asyncsContainer.hasClass('d-asyncs-container')).toBe(true);
    expect($asyncsContainer.hasClass('d-asyncs-container-email')).toBe(true);
    done();
  });

  it('marks progress status messages with internally generated classes', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    let $progressElements = control.$el.prev().children();
    let $pending = $progressElements.eq(0);
    let $success = $progressElements.eq(1);
    expect($pending.hasClass('d-async-pending')).toBe(true);
    expect($pending.hasClass('d-async-pending-email')).toBe(true);
    expect($success.hasClass('d-async-success')).toBe(true);
    expect($success.hasClass('d-async-success-email')).toBe(true);
    done();
  });
  
  it('assigns user-specified classes to async progress elements', async done => {
    let control = await valueSetter('email', 'dmitriy@dmitriy');
    let $progressElements = control.$el.prev().children();
    let $pending = $progressElements.eq(0);
    let $success = $progressElements.eq(1);
    let {pending, success} = configs.asyncStatusClasses;
    let $els = {$pending, $success};
    
    _.each({pending, success}, (classes, handle) => {
      let $el = $els['$' + handle];
      _.compact(classes.split(/\s+/)).forEach(klass => {
        expect($el.hasClass(klass)).toBe(true);
      });
    });
    
    done();
  });
});
