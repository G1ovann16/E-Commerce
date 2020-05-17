import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// PRODUCTSALL
export const productsAll = async() => {
    const res = await axios.get(API_URL + '/product/all')
    store.dispatch({ 
        type: 'PRODUCTSALL',
        payload: res.data
    });
}
export const productsRecently = async() => {
    const res = await axios.get(API_URL + '/product')
    store.dispatch({ 
        type: 'PRODUCTSRECENTLY',
        payload: res.data
    });
}