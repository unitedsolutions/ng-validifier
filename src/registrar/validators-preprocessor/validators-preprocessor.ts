import * as _   from 'lodash';
import prefixer from '../_lib/prefixer';

export default validators => {
  return validators.map(validatorDeclaration => {
    let {validatorName, directiveName} = validatorDeclaration;
    let validatorNamePrefixed = prefixer(validatorName);
    let directiveNamePrefixed = prefixer(directiveName);
    
    return _.extend(validatorDeclaration, {
      validatorNamePrefixed,
      directiveNamePrefixed
    });
  });
};
