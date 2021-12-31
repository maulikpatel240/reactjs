
import { store } from '../store';

export default function authHeader(gettoken = {}) {
  const token = gettoken && gettoken.token ?  gettoken.token : store.getState().auth.token;
  const contentType = gettoken && gettoken.contentType ?  gettoken.contentType : 'application/json';
  if (token) {
    return { "Authorization": `Bearer ${token}`, 'content-type' : contentType }
  }else{
    return {}
  }
}
