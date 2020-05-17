import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

export const login = async (user) => {
    const res = await axios.post(API_URL + '/users/login', user);
    localStorage.setItem('authToken', res.data.token); //guardamos el token en localstorage
    store.dispatch({//this.userService.setUser(res.user)
        type:'LOGIN',
        payload:res.data.user
    });
}
export const logout = async () => {
    const res = await axios.get(API_URL + '/users/logout',{
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken'); //guardamos el token en localstorage
    store.dispatch({//this.userService.setUser(res.user)
        type:'LOGOUT',
    })
    return res;
}