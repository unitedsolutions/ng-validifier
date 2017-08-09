export default (errorMessage, prefix) => {
  let generalClass = prefix + '-error-word';
  
  return errorMessage.split(/\s+/).map((word, index) => {
    let specificClass = generalClass + '-' + index;
    return `<span class = "${generalClass} ${specificClass}">${word}</span>`;
  }).join(' ');
};
