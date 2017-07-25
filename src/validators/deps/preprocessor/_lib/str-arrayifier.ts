export default (str, char) => {
  let rx = new RegExp(`\\s*${char}\\s*`);
  return str.split(rx).map(piece => piece.trim());
};
