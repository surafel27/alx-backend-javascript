export default function cleanSet(set, startString) {
  let result = '';
  if ( !set || !startString || !(set instanceof Set) || typeof startString !== 'string') return result;
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const word = `${val.substring(startString.length)}-`;
      result += word;
    }
  }
  return result.slice(0, -1);
}
