export default function cleanSet(set, startString) {
  const len = startString.length;
  let result = '';
  if (len === 0) return result;
  for (const val of set) {
    if (val.startsWith(startString)) {
      const word = `${val.substr(len)}-`;
      result += word;
    }
  }
  return result.slice(0, -1);
}
