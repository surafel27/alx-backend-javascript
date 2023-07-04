export default function cleanSet(set, startString) {
  const len = startString.length;
  let result = '';
  if (len === 0 || !set || !(set instanceof Set) || typeof startString !== 'string') return result;
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const word = `${val.substr(len)}-`;
      result += word;
    }
  }
  return result.slice(0, -1);
}
