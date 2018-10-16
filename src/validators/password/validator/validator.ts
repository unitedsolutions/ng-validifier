import { validatorName } from "../_lib/vars";
import * as _ from "lodash";
import { words } from "../_lib/words";
import { names } from "../_lib/names";
// import fs from "fs";
// const fs = require("fs");
// import * as fs from "fs";

export default (control, configs) => {
  let {
    minLength,
    maxLength,
    containsLowerCase,
    containsUpperCase,
    containsNumber,
    containsSpecialCharacter,
    prohibitDictionaryWord,
    prohibitGenericWord,
    prohibitPersonName,
    prohibitConsecutive
  } = configs;
  let { value } = control;

  if (value.length < 1) {
    return { [validatorName]: true };
  }

  if (containsLowerCase === true) {
    const regEx = /^(?=.*[a-z])/;

    if (!regEx.test(value)) {
      return { [validatorName]: true };
    }
  }

  if (containsUpperCase === true) {
    const upperCaseRegEx = /^(?=.*[A-Z])/;

    if (!upperCaseRegEx.test(value)) {
      return { [validatorName]: true };
    }
  }

  if (containsNumber === true) {
    const numberRegEx = /^(?=.*[0-9])/;

    if (!numberRegEx.test(value)) {
      return { [validatorName]: true };
    }
  }

  if (containsSpecialCharacter === true) {
    const specialCharacterRegEx = /^(?=.*[!@#\$%\^&\*])/;

    if (!specialCharacterRegEx.test(value)) {
      return { [validatorName]: true };
    }
  }

  if (prohibitDictionaryWord === true) {
    const wordList = value.toLowerCase().split(/[!@#\$%\^&\*0123456789]+/);
    for (var _i = 0; _i < wordList.length; _i++) {
      const word = wordList[_i];
      if (word.length < 4) {
        continue; // ignore word shorter than 3 characters
      }
      const index = words.indexOf(word);
      if (index > 0) {
        return { [validatorName]: true };
      }
    }
  }

  if (prohibitGenericWord === true) {
    const genericWords = value
      .toLowerCase()
      .replace(/!/, "l")
      .replace(/@/, "a")
      .replace(/$/, "s")
      .replace(/0/, "o")
      .replace(/2/, "z")
      .replace(/1/, "i")
      .replace(/3/, "e")
      .replace(/4/, "a")
      .replace(/5/, "s")
      .replace(/6/, "g")
      .replace(/9/, "q")
      .split(/[!@#\$%\^&\*0123456789]+/);
    for (var _i = 0; _i < genericWords.length; _i++) {
      const word = genericWords[_i];

      if (word.length < 4) {
        continue; // ignore word shorter than 3 characters
      }
      const index = words.indexOf(word);
      if (index > 0) {
        return { [validatorName]: true };
      }
    }
  }

  if (prohibitPersonName === true) {
    const wordList = value.toLowerCase().split(/[!@#\$%\^&\*0123456789]+/);
    for (var _i = 0; _i < wordList.length; _i++) {
      const word = wordList[_i];
      if (word.length < 4) {
        continue; // ignore word shorter than 3 characters
      }
      const index = names.indexOf(word);
      if (index > 0) {
        return { [validatorName]: true };
      }
    }

    const genericWords = value
      .toLowerCase()
      .replace(/!/, "l")
      .replace(/@/, "a")
      .replace(/$/, "s")
      .replace(/0/, "o")
      .replace(/2/, "z")
      .replace(/1/, "i")
      .replace(/3/, "e")
      .replace(/4/, "a")
      .replace(/5/, "s")
      .replace(/6/, "g")
      .replace(/9/, "q")
      .split(/[!@#\$%\^&\*0123456789]+/);
    for (var _i = 0; _i < genericWords.length; _i++) {
      const word = genericWords[_i];

      if (word.length < 4) {
        continue; // ignore word shorter than 3 characters
      }
      const index = names.indexOf(word);
      if (index > 0) {
        return { [validatorName]: true };
      }
    }
  }

  if (prohibitConsecutive === true) {
    const consecutiveString = "abcdefghijklmnopqrstuvwxyz qwertyuiop asdfghjkl zxcvbnm";
    const wordList = value.toLowerCase().split(/[!@#\$%\^&\*0123456789]+/);
    for (var _i = 0; _i < wordList.length; _i++) {
      const word = wordList[_i];
      if (word.length < 4) {
        continue; // ignore word shorter than 3 characters
      }
      const index = consecutiveString.indexOf(word);
      if (index > 0) {
        return { [validatorName]: true };
      }
    }

    const genericWords = value
      .toLowerCase()
      .replace(/!/, "l")
      .replace(/@/, "a")
      .replace(/$/, "s")
      .replace(/0/, "o")
      .replace(/2/, "z")
      .replace(/1/, "i")
      .replace(/3/, "e")
      .replace(/4/, "a")
      .replace(/5/, "s")
      .replace(/6/, "g")
      .replace(/9/, "q")
      .split(/[!@#\$%\^&\*0123456789]+/);
    for (var _i = 0; _i < genericWords.length; _i++) {
      const word = genericWords[_i];

      if (word.length < 4) {
        continue; // ignore word shorter than 3 characters
      }
      const index = consecutiveString.indexOf(word);
      if (index > 0) {
        return { [validatorName]: true };
      }
    }

    const consecutiveNumbers = "01234567890";
    const numbers = value.toLowerCase().split(/[!@#\$%\^&\*abcdefghijklmnopqrstuvwxyz]+/);

    for (var _i = 0; _i < numbers.length; _i++) {
      const word = numbers[_i];
      if (word.length < 4) {
        continue; // ignore word shorter than 3 characters
      }
      const index = consecutiveNumbers.indexOf(word);
      if (index >= 0) {
        return { [validatorName]: true };
      }
    }
  }

  if (minLength > 0) {
    if (value.length < minLength) {
      return { [validatorName]: true };
    }
  }

  if (maxLength > 0) {
    if (value.length > maxLength) {
      return { [validatorName]: true };
    }
  }
};
