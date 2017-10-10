import * as _ from 'lodash';
import _constructor from './_constructor/constructor';
import stateSetter from './state-setter/state-setter';
import dependentsUpdater from './dependents-updater/dependents-updater';
import visualizer from './visualizer/visualizer';
_.extend(_constructor.prototype, {
    set: stateSetter,
    updateDependents: dependentsUpdater,
    visualize: visualizer
});
export default _constructor;
//# sourceMappingURL=validation-stater.js.map