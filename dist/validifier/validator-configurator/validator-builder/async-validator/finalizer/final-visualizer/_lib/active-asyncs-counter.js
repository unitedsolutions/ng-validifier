import * as _ from 'lodash';
export default function (asyncStatuses) {
    return _.reduce(asyncStatuses, function (count, status) {
        return count += +status;
    }, 0);
};
//# sourceMappingURL=active-asyncs-counter.js.map