import * as _ from 'lodash';

export default function(settings, control) {
  _.extend(this, {settings, control, state: {}});
}
