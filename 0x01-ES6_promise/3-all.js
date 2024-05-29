import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => Promise.all([uploadPhoto(), createUser()])
  .then((result) => {
    const { firstName, lastName } = result[1];
    console.log(`${result[0].body} ${firstName} ${lastName}`);
  })

  .catch(() => {
    console.log('Signup system offline');
  });

export default handleProfileSignup;
