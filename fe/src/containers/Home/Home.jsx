import React, { useEffect, useState } from 'react'
// import { API_URL } from '../../api-config';
// import axios from 'axios';
import { Carousel, Input, Button } from 'antd';
import './Home.scss'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { productsAll, productsRecently  } from '../../redux/actions/products';
import Product from '../../components/Products/Products';
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import shp from '../Shop/Shop'; 
//import store from "../../redux/store";
// import { rdx_nombresResultado } from "../../redux/actions/products";

const Home = (props) => {

    const { Search } = Input; 
    useEffect(() => {
      productsAll()
      productsRecently()
  }, [])

    return (
        <div className="Home">
     
            <Carousel autoplay>
              <div>
                <h3> 1 </h3>
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
           <div className="products">
           {(props.products)?.map(product => <Product key={product._id} product={product}/>)}
           </div>
                
        </div> 
    )
}

const mapStateToProps = (state) => ({ products: state.products })
export default connect(mapStateToProps)(Home);