import _ from 'lodash';

export default function ValidationStater(control) {
  _.extend(this, {control, state: {}});
}
