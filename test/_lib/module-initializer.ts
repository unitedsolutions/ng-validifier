import * as _                from 'lodash';
import {TestBed}             from '@angular/core/testing';
import {FormsModule}         from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import * as ngValidifierApi  from '../../dist/ng-validifier.umd.js';
import asyncEmailValidator   from '../_validators/async-email';
import configs               from './configs';
import pause                 from './pause';
import _valueSetter          from './value-setter';

const {ngValidifier} = ngValidifierApi;

export default async (Component, _configs?, validators = []) => {
  _configs = _.extend({}, configs, _configs);
  validators = validators.concat(asyncEmailValidator);
  let ValidatorsModule = ngValidifier(_configs, validators);
  let delay = _configs.errorMessageDelays.invalid + 20;

  TestBed.configureTestingModule({
    imports: [FormsModule, ReactiveFormsModule, ValidatorsModule],
    declarations: [Component]
  });
  
  let fixture = TestBed.createComponent(Component);
  let component = fixture.componentInstance;
  let form = component['form'];
  let {controls} = form;
  let valueSetter = (name, value = '', customDelay?) => {
    return _valueSetter(fixture, controls, delay, name, value, customDelay);  
  };
  
  fixture.detectChanges();
  
  await pause(delay);
  
  return {valueSetter, configs: _configs};
};
