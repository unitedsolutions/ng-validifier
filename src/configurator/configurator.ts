import * as _     from 'lodash';
import {settings} from '../_lib/vars';

export default configs => {
  _.extend(settings, configs);
};
