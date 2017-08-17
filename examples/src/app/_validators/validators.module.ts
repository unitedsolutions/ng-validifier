import {ngValidifier}              from 'ng-validifier';
import configs                     from './configs';
import uniqueEmailCheckerValidator from './unique-email-checker';

export default ngValidifier(configs, [uniqueEmailCheckerValidator]);
