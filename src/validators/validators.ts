import depsValidator         from './deps/deps';
import equalsToValidator     from './equals-to/equals-to';
import maxLengthValidator    from './max-length/max-length';
import minLengthValidator    from './min-length/min-length';
import requiredValidator     from './required/required';
import requiredTrueValidator from './required-true/required-true';

export default [
  depsValidator,
  equalsToValidator,
  maxLengthValidator,
  minLengthValidator,
  requiredValidator,
  requiredTrueValidator
];
