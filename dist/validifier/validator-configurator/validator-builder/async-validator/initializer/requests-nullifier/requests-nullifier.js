import * as _ from 'lodash';
export default function (control, validatorName, validationId) {
    var requests = control.validify.errors[validatorName].requests;
    _.each(requests, function (request, key) {
        requests[key] = true;
    });
    requests[validationId] = false;
};
//# sourceMappingURL=requests-nullifier.js.map