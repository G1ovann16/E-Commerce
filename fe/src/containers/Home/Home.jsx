import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api-config';
import axios from 'axios';
import './Home.scss'
import Product from '../../components/Products/Products';
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(API_URL + '/products')
            .then(res => setProducts(res.data))
            .catch(console.error)
    }, [])
    return (
        <div className="products">
            {products.map(product => <Product product={product}/>)}
        </div>
    )
}
export default Home;