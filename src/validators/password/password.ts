import * as _          from "lodash";
import validator       from "./validator/validator";
import preprocessor    from "./preprocessor/preprocessor";
import messager        from "./messager/messager";
import {validatorName} from "./_lib/vars";

export default {
  validator,
  preprocessor,
  messager,
  validatorName,
};
