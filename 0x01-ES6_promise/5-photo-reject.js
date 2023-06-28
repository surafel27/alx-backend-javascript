export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (filename) {
      const err = new Error(`${filename} cannot be processed`);
      reject(err);
    } else {
      resolve();
    }
  });
}
