import * as _ from "lodash";

export default (control, configs, baseConfigs) => {

  if(!_.isPlainObject(configs)) {
    configs = {path: configs};
  }

  let {minLength,
      maxLength,
      containsLowerCase,
      containsUpperCase,
      containsNumber,
      containsSpecialCharacter,
      prohibitDictionaryWord,
      prohibitGenericWord,
      prohibitPersonName,
      prohibitConsecutive} = baseConfigs;

  if(!minLength) {
    minLength = 8; // default
  }

  if(!maxLength) {
    maxLength = 0; // default, infinitive
  }

  if(_.isUndefined(containsLowerCase)) {
    containsLowerCase = true;
  }

  if(_.isUndefined(containsUpperCase)) {
    containsUpperCase = true;
  }

  if(_.isUndefined(containsNumber)) {
    containsNumber = true;
  }

  if(_.isUndefined(containsSpecialCharacter)) {
    containsSpecialCharacter = true;
  }

  if(_.isUndefined(prohibitDictionaryWord)) {
    prohibitDictionaryWord = true;
  }

  if(_.isUndefined(prohibitGenericWord)) {
    prohibitGenericWord = true;
  }

  if(_.isUndefined(prohibitPersonName)) {
    prohibitPersonName = true;
  }

  if(_.isUndefined(prohibitConsecutive)) {
    prohibitConsecutive = true;
  }

  return _.extend(configs, {minLength,
                            maxLength,
                            containsLowerCase,
                            containsUpperCase,
                            containsNumber,
                            containsSpecialCharacter,
                            prohibitDictionaryWord,
                            prohibitGenericWord,
                            prohibitPersonName,
                            prohibitConsecutive});
};
