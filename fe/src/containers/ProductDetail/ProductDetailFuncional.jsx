import React, { Component, Fragment, useState, useEffect } from 'react'
import './ProductDetail.scss'
import {  Button } from 'antd';
import { useParams, NavLink } from 'react-router-dom';
import Product from '../../components/Products/Products';
import { connect } from "react-redux";
import { addCart } from "../../redux/actions/ShopCar"; 
const ProductDetailFuncional = props => {
    let productoactual ={};
    let checkactual ={};
    const [active,  setActive] = useState(false)
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    useEffect(() => {
        console.log(active, props.products)
        console.log(props.product_cart)

        check()
    })   
      productoactual = (props.products)?.find(product => product._id === _id)
      checkactual = (props.product_cart)?.find(product => product._id === productoactual._id)
   
    function check() {
        (checkactual ? setActive(true) : setActive(false))
        console.log(active);
    }


    function addProductoToCart(productoactual){
       productoactual.unit = productoactual.unit? productoactual.unit + 1 : 1;
    //    productoactual.active = true;
        addCart(productoactual);
        console.log(active);
        setActive(true)
        console.log(active);
    } 

//for (let i = 0; i < props.products?.length; i++) {
//     console.log(props.products?.length)
//     if(props.products[i]._id === _id ){
//         productoactual = props.products[i];
//         break;
//     }
// }
    return (<div className="product">
  
        
        <img src={productoactual?.image_path} alt="" />
       <div className="wraper">

            <span>{productoactual?.name}</span><br/>
            <span>{productoactual?.price}€</span><br/>
            <span>{productoactual?.stock} unidades</span><br/>
        <Button type="primary" disabled={active} onClick={()=>{addProductoToCart(productoactual)}} htmlType="submit">
        <NavLink to="/cesta" exact>ADD PRODUCT</NavLink>
        </Button>
       </div>
            <span>Overvierw: <br/> {productoactual?.description}</span><br/>
    </div> )
}
const mapStateToProps = (state) => ({ products: state.products, product_cart: state.product_cart  })
export default connect(mapStateToProps)(ProductDetailFuncional);