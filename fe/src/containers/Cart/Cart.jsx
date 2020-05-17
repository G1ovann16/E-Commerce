import React, { Component, Fragment, useState, useEffect } from 'react'
import './Cart.scss'
import { Col, Modal, Button, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import Product from '../../components/Products/Products';
import { connect } from "react-redux";
import { emptyCart, buy } from "../../redux/actions/ShopCar"; 
 
const Cart = props => {
  const [state,  setState] = useState(false)
  const [cant,  setCant] = useState()
  useEffect(() => {

  let grandTotal = props.product_cart.reduce((sum, i) => {
    return sum + (i.price * i.unit)
  }, 0)
  setCant(grandTotal);
  console.log(cant)
})

function showModal(){
  console.log(productIds)
      setState(true)
      buy(productIds)};
  
function  handleOk(e){
      setState(false)};
  
 function handleCancel(e) {
      console.log(e);
      setState(false)};

    let productIds = props.product_cart.map(producto => ({_id: producto._id, name: producto.name, unit: producto.unit, subtotal: producto.unit*producto.price}));
   console.log(productIds)
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    useEffect(() => {
        console.log(props.product_cart);
    })  

    return (<div className="product">
  
  {(props.product_cart)?.map(product => <Product showInput={true} key={product._id} product={product}/>)}
  <Button type="primary" onClick={()=>emptyCart()} shape="circle">delete</Button>
  {/* <Button type="primary" onClick={()=>buy(productIds)} shape="circle">Buy it</Button> */}
  <div>
        <Button type="primary" shape="circle" onClick={showModal}>
         Buy it
        </Button>
        <Modal
          title="Basic Modal"
          visible={state}
          onOk={handleOk}
          onCancel={handleCancel}>
         <div>
        {(props.compra?.productIds)?.map(producto => { 
         return <div>
        <p>{producto.unit} Unidades. {producto.name} {producto.subtotal?.toFixed(2)} €</p>
         </div>})}
        <p>Total Pedido: {cant} €</p>
        <p>Gracias por comprar en nuestra tienda</p>
          </div>
        </Modal>
      </div>
    </div> )
}
const mapStateToProps = (state) => ({ product_cart:[...state.product_cart], compra: state.compra})
export default connect(mapStateToProps)(Cart);