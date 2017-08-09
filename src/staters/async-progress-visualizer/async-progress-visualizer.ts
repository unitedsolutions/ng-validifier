import * as _ from 'lodash';

export default class {
  private hiddenClass;
  private asyncs;
  private $el;
  private $elContainer;
  private pendingClass;
  
  constructor(settings, control) {
    let {asyncs, elements} = control.validify;
    let {$el, $elContainer} = elements;
    let pendingClass = `${settings.prefix}-async-pending`;
    
    _.extend(this, {
      $el, $elContainer, asyncs, pendingClass,
      hiddenClass: settings.asyncStatusHideClass
    });
  }
  
  private display(type, on) {
    let method = on ? 'removeClass': 'addClass';
    this.asyncs['$' + type][method](this.hiddenClass);
    return this;
  }
  
  private classOperator(operation) {
    let {$el, $elContainer, pendingClass} = this;
    $el[operation](pendingClass);
    $elContainer[operation](pendingClass);
  }
  
  container(on) {
    if(on) {
      this.classOperator('addClass');  
    } else {
      this.pending(on).success(on);
    }
    
    return this.display('asyncsContainer', on);
  }
  
  pending(on) {
    if(!on) {
      this.classOperator('removeClass');
    }
    
    return this.display('pending', on);
  }
  
  success(on) {
    return this.display('success', on);
  }
}
