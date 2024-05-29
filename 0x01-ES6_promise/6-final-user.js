/* eslint-disable */
import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'
const handleProfileSignup = (firstName, lastName, fileName) =>  Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((values) => {
    const arr = []
    for (const item of values) {
      arr.push({status: item.status, value: item.value || item.reason})
    }
    return arr
  })

export default handleProfileSignup;

