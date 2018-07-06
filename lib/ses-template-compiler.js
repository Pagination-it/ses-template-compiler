module.exports = function handleString(str) {
  return str.replace(/\t|\n\s*|\r\s*/gm, '');
}