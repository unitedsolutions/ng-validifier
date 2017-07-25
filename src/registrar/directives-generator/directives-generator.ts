import _                 from 'lodash';
import selectorAssembler from './_lib/selector-assembler';
import {Directive, Input, forwardRef, ElementRef} from '@angular/core';
import {NG_VALIDATORS, NG_ASYNC_VALIDATORS} from '@angular/forms';

export default validators => {
  return validators.map(validatorConfigurator => {
    let {async: _async, checkbox, validatorNamePrefixed} = validatorConfigurator;
    let selector = selectorAssembler(validatorNamePrefixed, checkbox);

    let providers = [{
      provide: _async ? NG_ASYNC_VALIDATORS : NG_VALIDATORS,
      useExisting: forwardRef(() => ValidatorDirectiveClass),
      multi: true        
    }];
    
    @Directive({selector, providers}) class ValidatorDirectiveClass {
      private validator;
      private onChange;
      private control;
    
      @Input(`${validatorNamePrefixed}`) private configs;
    
      constructor(private el: ElementRef) {}
    
      ngOnChanges(changes) {
        if('configs' in changes) {
          if(!this.control) {
            return;
          }
          
          this.createValidator();
          if(this.onChange) {
            this.onChange();
          }
        }
      }
    
      validate(control?) {
        let error = {[validatorNamePrefixed]: true};
        
        _.extend(this, {
          control, 
          validate() { 
            return this.validator()
          }
        });
        
        this.createValidator();
        
        return _async ? Promise.resolve(error) : error; 
      }
    
      registerOnValidatorChange(fn) {
        this.onChange = fn; 
      }
    
      private createValidator() {
        this.validator = validatorConfigurator(this.control, this.configs, this.el);
        setTimeout(() => this.validate());
      }
    };

    return ValidatorDirectiveClass;
  });
};
