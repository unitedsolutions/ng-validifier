import $ from 'jquery';

export default ($el, $container, $containerContainer, insertionSpec) => {
  let [action, $insertionPoint] = (() => {
    if(!$containerContainer.length) {
      return ['insertAfter', $el];
    }
    
    let [action, anchor] = insertionSpec;
    let $insertionPoint = (() => {
      if(!anchor) {
        return $containerContainer;
      }
      
      return $(anchor, $containerContainer);
    })();

    return [action, $insertionPoint];
  })();
  
  $container[action]($insertionPoint);
};
