import _        from 'lodash';
import prefixer from '../_lib/prefixer';

export default validators => {
  return validators.map(validatorDeclaration => {
    let {validatorName} = validatorDeclaration;
    let validatorNamePrefixed = prefixer(validatorName);
    
    return _.extend(validatorDeclaration, {validatorNamePrefixed});
  });
};
