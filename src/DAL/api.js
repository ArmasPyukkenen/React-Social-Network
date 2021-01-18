import * as axios from 'axios';

const baseURL = "https://social-network.samuraijs.com/api/1.0/"

const anonymousInstance = axios.create({
  baseURL
})

const credentialsInstance = axios.create({
  baseURL,
  withCredentials: true
});

const authorizedInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "API-KEY" : ""
  }
})

export default {

  getLoggedUserInfo() {
    return credentialsInstance.get('auth/me').then(res => res.data);
  },
  
  getUsers(currentPage = 1, pageSize = 10) {
    return credentialsInstance.get(`users/?page=${currentPage}&count=${pageSize}`).then(res => res.data);
  },
  
  followUser(userId) {
    return authorizedInstance.post('follow/' + userId).then(res => res.data.resultCode);
  },
  
  unfollowUser(userId) {
    return authorizedInstance.delete('follow/' + userId).then(res => res.data.resultCode);
  },
  
  getProfile(userId) {
    return anonymousInstance.get('profile/' + userId).then(res => res.data);
  },

  getStatus(userId) {
    return anonymousInstance.get('profile/status/' + userId).then(res => res.data)
  },

  putStatus(status) {
    return authorizedInstance.put('profile/status', {status}).then(res => res.data.resultCode)
  }
}