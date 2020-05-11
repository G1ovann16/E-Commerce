import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api-config';
import axios from 'axios';
import { Carousel, Input, Button } from 'antd';
import './Home.scss'
import { ShoppingCartOutlined } from '@ant-design/icons';
import Product from '../../components/Products/Products';
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import shp from '../Shop/Shop'; 
//import store from "../../redux/store";
// import { rdx_nombresResultado } from "../../redux/actions/products";


const Home = (props) => {

  // const [state ,setState] = useState({});

//this.pulsador = this.pulsador.bind(this);  

//  const handleChange = ev => {
//         setState({ [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value });
//     };

//    function pulsador(){
//         //guardamos en REDUX el valor de nombre.  
//         // store.dispatch({
//         //     type: 'NOMBRE_SEARCH',
//         //     payload: this.state.nombre,
//         // });

//         //accion de REDUX
//         rdx_nombresResultado(setState.nombre);

//         //linkeamos al siguiente componente. 

//         props.history.push("/shop");
//     }

    const { Search } = Input; 
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(API_URL + '/product')
            .then(res => {
              setProducts(res.data)
              console.log(res.data,  products);
            })
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
           <div className="produ">
              {products.map(product => <Product key={product._id} product={product}/>)}
           </div>
                {/* <pre>{JSON.stringify(this.state, null,2)}</pre> */}
                {/* <div>
                    ACTUALMENTE ESTAMOS EN EL CONTENEDOR 1.
                </div>
                <div className="inputN">
                    <input type="text" name="nombre" value={setState.nombre} onChange={this.handleChange} ></input>
                </div>
                <div> */}
                    {/* <button className="linkButton" onClick={() => {this.pulsador()}}>Link al contenedor 2.</button>
                </div> */}
        </div> 
    )
}
// const mapStateToProps = (state) => { // ese state es de redux
// 	return ({
//         nombresResultado: state.nombresResultado,
//     })
// }

// export default connect(mapStateToProps)(withRouter(Home));

export default Home;