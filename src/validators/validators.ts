import depsValidator         from './deps/deps';
import maxLengthValidator    from './max-length/max-length';
import minLengthValidator    from './min-length/min-length';
import requiredValidator     from './required/required';
import requiredTrueValidator from './required-true/required-true';

export default [
  depsValidator,
  maxLengthValidator,
  minLengthValidator,
  requiredValidator,
  requiredTrueValidator
];
