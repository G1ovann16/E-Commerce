import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// PRODUCTSALL
export const productsAll = async() => {
    console.log('platano')
  try {
      const res = await axios.get(API_URL + '/product')
      store.dispatch({ 
          type: 'PRODUCTSALL',
          payload: res.data
        });
        console.log(res.data)
  } catch (error) {
      console.log(error,'platano2')
      
  }
}
export const productsRecently = async() => {
    const res = await axios.get(API_URL + '/product/recently')
    store.dispatch({ 
        type: 'PRODUCTSRECENTLY',
        payload: res.data
    });
}