import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { Carousel, Input, Button } from 'antd';
import './Home.scss'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { productsAll, productsRecently  } from '../../redux/actions/products';
import Product from '../../components/Products/Products';


const Home = (props) => {
  useEffect(() => {
    productsAll()
    productsRecently()

}, [])

    const { Search } = Input; 

    return (
        <div className="Home">
     
            <Carousel autoplay className="carru">
              <div>
                <h3> 
                  <img src="https://puppis.vteximg.com.br/arquivos/ids/171119/2005%20Alimento%20Humedo%20Banner%20Web%20Desktop.png?v=637244937127800000" alt=""/> 
              </h3>
              </div>
              <div>
                <h3>
                <img src="https://puppis.vteximg.com.br/arquivos/ids/171122/2005%20Banner-Website-Desktop--Descanso-Wepets-D.png?v=637246611403930000" alt=""/> 
                </h3>
              </div>
              <div>
                <h3>
                <img src="https://puppis.vteximg.com.br/arquivos/ids/171115/Website%20Banner%20Desktop%20Exclusivo%20Online%20PIEDRITAS_WEB.png?v=637244673614430000" alt=""/>
                </h3>
              </div>
              <div>
                <h3>
                <img src="https://puppis.vteximg.com.br/arquivos/ids/171102/Web-Banner-Desktop-Puppis-One-.jpg?v=637244110302300000" alt=""/>
                </h3>
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