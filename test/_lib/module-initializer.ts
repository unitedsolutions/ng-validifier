import * as _                    from 'lodash';
import {TestBed}                 from '@angular/core/testing';
import {FormsModule, Validators} from '@angular/forms';
import * as ngValidifyApi        from '../../dist/ng-validify.umd.js';
import asyncEmailValidator       from '../_validators/async-email';
import configs                   from './configs';
import pause                     from './pause';
import _valueSetter              from './value-setter';

const {ngValidifyConfigurator, ngValidifyRegistrar} = ngValidifyApi;

export default async (Component, _configs?, validators = [], messagers = {}) => {
  _configs = _.extend({}, configs, _configs);
  ngValidifyConfigurator(_configs);
  validators = validators.concat(asyncEmailValidator);
  let ValidatorsModule = ngValidifyRegistrar(validators);
  let delay = _configs.errorMessageDelays.invalid + 20;
  
  _.each(messagers, (messager, validatorNamePrefixed) => {
    _.extend(Validators[validatorNamePrefixed], {messager});
  });
  
  TestBed.configureTestingModule({
    imports: [FormsModule, ValidatorsModule],
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
