import _ from 'lodash';

export default dependencyNames => {
  return dependencyNames.map(dependencyName => {
    return _.upperFirst(_.lowerCase(dependencyName));
  }).join(', ');
};
