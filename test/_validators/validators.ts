import minLengthValidator  from './min-length/min-length';
import requiredValidator   from './required/required';
import equalsToValidator   from './equals-to/equals-to';
import asyncEmailValidator from './async-email/async-email';

export default [
  requiredValidator,
  minLengthValidator,
  equalsToValidator,
  asyncEmailValidator
];
