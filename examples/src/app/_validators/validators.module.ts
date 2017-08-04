import {Validators} from '@angular/forms';
import {ngValidifyConfigurator, ngValidifyRegistrar} from 'ng-validify';
import configs from './configs';
import uniqueEmailCheckerValidator from './unique-email-checker';

ngValidifyConfigurator(configs);
let ValidatorsModule = ngValidifyRegistrar([uniqueEmailCheckerValidator]);

Validators['vMaxLength'].messager = (control, maxLength) => {
  let {controlNameProper} = control;
  let nameSpan = `<span class = "control-name">${controlNameProper} </span>`;  
  return nameSpan + `should be no more than ${maxLength} characters`;
};

export default ValidatorsModule;
