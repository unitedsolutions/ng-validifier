import * as _               from 'lodash';
import dependentsAggregator from './_lib/dependents-aggregator';

export default function() {
  let {silent, dependents, control} = this;
  
  if(!silent) {
    if(!control.validify.ignoreDependents) {
      dependents = dependentsAggregator(control);
      for(let dependent of dependents) {
        setTimeout(() => {
          _.extend(dependent.validify, {silent: true, ignoreDependents: true});
          dependent.updateValueAndValidity();
        });
      }
      
      _.extend(this, {dependents});
    }
  }
  
  return this;
}
