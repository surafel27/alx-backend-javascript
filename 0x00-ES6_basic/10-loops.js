export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const indxValue of array) {
    const value = appendString + indxValue;
    newArray.push(value);
  }

  return newArray;
}
