import React, { Component, Fragment, useState, useEffect } from 'react'
import './Cart.scss'
import { Col, Card, Button, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import Product from '../../components/Products/Products';
import { connect } from "react-redux";
import { emptyCart, buy } from "../../redux/actions/ShopCar"; 
 
const Cart = props => {

    let productIds = props.product_cart.map(producto => ({_id: producto._id, unit: producto.unit, subtotal: producto.unit*producto.price}));
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    useEffect(() => {
        console.log(props.product_cart);
    })  

    return (<div className="product">
  
  {(props.product_cart)?.map(product => <Product showInput={true} key={product._id} product={product}/>)}
  <Button type="primary" onClick={()=>emptyCart()} shape="circle">delete</Button>
  <Button type="primary" onClick={()=>buy(productIds)} shape="circle">Buy it</Button>
  
    </div> )
}
const mapStateToProps = (state) => ({ product_cart:[...state.product_cart]})
export default connect(mapStateToProps)(Cart);