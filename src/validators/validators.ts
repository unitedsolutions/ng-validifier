import depsValidator         from './deps/deps';
import emailValidator        from './email/email';
import equalsToValidator     from './equals-to/equals-to';
import maxLengthValidator    from './max-length/max-length';
import minLengthValidator    from './min-length/min-length';
import patternValidator      from './pattern/pattern';
import requiredValidator     from './required/required';
import requiredTrueValidator from './required-true/required-true';

export default [
  depsValidator,
  emailValidator,
  equalsToValidator,
  maxLengthValidator,
  minLengthValidator,
  patternValidator,
  requiredValidator,
  requiredTrueValidator
];
