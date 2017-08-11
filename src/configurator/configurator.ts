import * as _                     from 'lodash';
import {settings as mainSettings} from '../_lib/vars';
import internalValidators         from '../validators/validators';
import moduleGenerator            from './module-generator/module-generator';

export default (settings, validators = []) => {
  settings = _.extend({}, mainSettings, settings);
  validators.push(...internalValidators);
  return moduleGenerator(settings, validators);
};
