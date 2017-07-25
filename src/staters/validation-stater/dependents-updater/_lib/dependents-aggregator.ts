export default function dependentsAggregator(control, all = []) {
  let {dependents = []} = control.validify;
  
  for(let dependent of dependents) {
    if(all.indexOf(dependent) === -1) {
      all.push(dependent);
      dependentsAggregator(dependent, all);
    }
  }
  
  return all;
}
