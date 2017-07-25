import _ from 'lodash';

export default function(control) {
  _.extend(this, {control, state: {}});
}
