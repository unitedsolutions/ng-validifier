import _                    from 'lodash';
import {dependencyRequests} from '../../../_lib/vars';
import dependentsSetter     from '../../../_lib/dependents-setter';
import strArrayifier        from './_lib/str-arrayifier';
import {dependenciesTable}  from './_lib/vars';

export default (control, dependencyNames) => {
  let {_parent, controlName} = control;
  
  dependencyNames = strArrayifier(dependencyNames, ',');

  if(dependencyNames.indexOf(controlName) !== -1) {
    throw new Error(`form control [${controlName}] cannot depend on itself`);
  }

  let {controls} = _parent;
  let table = dependenciesTable.get(_parent);

  if(table) {
    var dependentRecords = table[controlName];
  } else {
    dependenciesTable.set(_parent, table = {});
  }
  
  _.each(dependencyNames, dependencyName => {
    if((dependentRecords || []).indexOf(dependencyName) !== -1) {
      throw new Error(`[${controlName}] and [${dependencyName}] depend on each other`);
    }
    
    let dependencyRecord = table[dependencyName];
    
    if(!dependencyRecord) {
      dependencyRecord = table[dependencyName] = [];
    }
    
    dependencyRecord.push(controlName);
    
    let dependencyControl = controls[dependencyName];
    
    if(dependencyControl) {
      return dependentsSetter(dependencyControl, control);
    }

    let records = dependencyRequests.get(_parent);
      
    if(!records) {
      dependencyRequests.set(_parent, records = {});
    }
    
    dependencyRecord = records[dependencyName];
    
    if(!dependencyRecord) {
      dependencyRecord = records[dependencyName] = [];
    }
    
    dependencyRecord.push(control);
  });

  return dependencyNames;
};
