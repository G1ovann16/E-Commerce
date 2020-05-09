import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api-config';
import axios from 'axios';
import { Carousel, Input, Button } from 'antd';
import './Shop.scss'
import { ShoppingCartOutlined } from '@ant-design/icons';
import Product from '../../components/Products/Products';
const Shop = () => {
    const { Search } = Input; 
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(API_URL + '/products')
            .then(res => setProducts(res.data))
            .catch(console.error)
    }, [])
    return (
        <div className="Shop">
          <div className="row">
              <div className="col-8"> </div>
              <div className="col-8 busqueda">
            <Search
                 placeholder="input search text"
                 enterButton="Search"
                 size="large"
                 onSearch={value => console.log(value)}
                  />
                <br />
                <br />
                </div>
              <div className="col-8 carrito"> 
              <Button type="primary" icon={<ShoppingCartOutlined />}>
                 <p>$ 0.00</p> 
              </Button>
               </div>
          </div> 
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
export default Shop;