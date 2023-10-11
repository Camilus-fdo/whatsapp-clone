const getLocalToken = () => localStorage.getItem('userToken')

const setLocalToken = (token) => localStorage.setItem('userToken', token)

const removeLocalToken = () => localStorage.removeItem('userToken')

const saveLocalUserData = (userData) => localStorage.setItem('user', userData)

const removeLocalUserData = () => localStorage.removeItem('user')

const getLoggedUser = () => localStorage.getItem('user')

const isLoggedIn = () => {
  if (getLocalToken() !== null) {
    return true
  } else {
    return false
  } 
}

export default {
  getLocalToken,
  setLocalToken,
  removeLocalToken,
  isLoggedIn,
  saveLocalUserData,
  removeLocalUserData,
  getLoggedUser
}