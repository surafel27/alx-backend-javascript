export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (!filename) {
      resolve(undefined);
    } else {
      const err = new Error('cannot be processed');
      const allError = `${filename} ${err}`;
      reject(allError);
    }
  });
}
