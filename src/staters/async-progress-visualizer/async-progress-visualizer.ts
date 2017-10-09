import * as _ from 'lodash';

export default class {
  private settings;
  private asyncs;
  private $el;
  private $elContainer;
  private pendingClass;
  
  constructor(settings, control) {
    let {asyncs, elements} = control.validify;
    let {$el, $elContainer} = elements;
    let pendingClass = `${settings.prefix}-async-pending`;
    
    _.extend(this, {$el, $elContainer, asyncs, pendingClass, settings});
  }
  
  private display(type, on) {
    let method = on ? 'removeClass': 'addClass';
    this.asyncs['$' + type][method](this.settings.asyncStatusHideClass);
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
      this.pending(on);
      this.success(on);
    }
    
    this.display('asyncsContainer', on);
  }

  pending(on) {
    let timeout = on ? this.settings.asyncMinimumPendingDuration : 0;
    
    return new Promise(resolve => {
      setTimeout(() => {
        if(!on) {
          this.classOperator('removeClass');
        }
        
        this.display('pending', on);
        
        resolve();
      }, timeout);  
    });
  }
  
  success(on) {
    this.display('success', on);
  }
}
