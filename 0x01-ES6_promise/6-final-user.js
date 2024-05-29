/* eslint-disable */
import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'
const result = []
const handleProfileSignup = (firstName, lastName, fileName) =>  Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((values) => {
values.map(({status, value, reason}) =>
  result.push({
    status,
    value: status === 'rejected' ? reason.toString() : value
  })
)
  return result
  })

export default handleProfileSignup;
