import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api-config';
import axios from 'axios';
import { Carousel, Input, Button } from 'antd';
import './Home.scss'
import { ShoppingCartOutlined } from '@ant-design/icons';
import Product from '../../components/Products/Products';
const Home = () => {
    const { Search } = Input; 
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(API_URL + '/products')
            .then(res => setProducts(res.data))
            .catch(console.error)
    }, [])
    return (
        <div className="Home">
     
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
        {/* <div className="produ">
            {products.map(product => <Product key={product._id} product={product}/>)}
         </div> */}
          </div> 
    )
}
export default Home;