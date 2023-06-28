import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(([photoResult, userResult]) => {
    const { body } = photoResult;
    const { firstName, lastName } = userResult;
    const user = `${body} ${firstName} ${lastName}`;
    console.log(user);
  });
}
