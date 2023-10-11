import BaseAPI from '../BaseAPI'
import utils from '../../../utils'

/**
 * AuthService Class that can be use to connect the auth apis
 */
export default class AuthService extends BaseAPI {
  signIn (payload) {
    return new Promise((resolve, reject) => {
      const pathArr = ['auth', 'login']

      this.post(payload, pathArr).then((response) => {
        utils.setLocalToken(response.data.access_token)
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}