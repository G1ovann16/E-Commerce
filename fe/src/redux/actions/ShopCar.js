import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

export const addCart = (product_cart) => {
    store.dispatch({ 
        type: 'ADD_CART',
        payload: product_cart
    });
}
export const addCantCart = (id) => {
    store.dispatch({ 
        type: 'ADD_CANT_CART',
        payload: id
    });
}
export const subCantCart = (id) => {
    store.dispatch({ 
        type: 'SUB_CANT_CART',
        payload: id
    });
}

export const buy = async(productIds) => {
    console.log(productIds)
    const res = await axios.post(API_URL + '/order', {productIds}, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    store.dispatch({ 
        type: 'BUY',
        payload: res.data
    });
    console.log(res.data)
    emptyCart()
}
  // CLEAR CARRITO
export const emptyCart = () => {
    store.dispatch({ 
        type: 'EMPTY_CART',
        payload: undefined
    });
}
export const clearOneProduct = (product) => {

    const manolo = store.getState()
    console.log(manolo.product_cart)
    product = manolo.product_cart.splice(product._id, 1)
    console.log(product, manolo.product_cart)
    store.dispatch({ 
        type: 'REMOVE_ONE_PRODUCT',
        payload: manolo.product_cart
    });
}