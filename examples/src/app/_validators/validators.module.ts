import {ngValidifyConfigurator}    from 'ng-validify';
import configs                     from './configs';
import uniqueEmailCheckerValidator from './unique-email-checker';

export default ngValidifyConfigurator(configs, [uniqueEmailCheckerValidator]);
