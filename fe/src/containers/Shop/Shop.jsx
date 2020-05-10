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
          <ul className="NavTop">
            <li className="display">
              <h3>DOG</h3>
                <li><h4>FOOD</h4></li>
                <li><h4>ACCESSORIES</h4></li>
                <li><h4>HELP</h4></li>
            </li>
            <li>
              <h3>BRAND</h3>
              <div className="col-8 searchBrand">
            <Search
                 placeholder="input search text"
                 enterButton="Search"
                 size="short"
                 onSearch={value => console.log(value)}
                  />
                <br />
                <br />
                </div>
            </li>
            <li><h3>OFERTS</h3></li>
            <li><h3>SERVICES</h3></li>
            <li><h3>BLOG</h3></li>
          </ul>
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