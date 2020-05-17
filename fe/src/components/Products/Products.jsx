import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Button, InputNumber } from 'antd';
import { addCantCart, subCantCart, clearOneProduct, buy } from "../../redux/actions/ShopCar"; 

// import { ShoppingCartOutlined } from '@ant-design/icons';
import './Products.scss'
import { clear } from 'redux-localstorage-simple';
// const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
const Product = ({ product, showInput }) => {
const [total,  setTotal] = useState(product?.price*product.unit) 

function addValue(value) {
   setTotal((value+1)*product?.price)
   addCantCart(product._id);
}
function subValue(value) {
   setTotal((value-1)*product?.price)
   subCantCart(product._id);
}

    return (
 
     <Card
        hoverable
        style={{ width: 220 }}
        cover={
           <Link className="product" key={product._id} to={'/product/'+product._id}>
           <img src={product.image_path} alt="" />
            </Link>
            }>
        <div className="date">
        <Col>{product.name}</Col>
        <Col>{product.price} €</Col>

      {showInput ? 
         <div className="resu">
            {/* <InputNumber min={1} max={product.stock} defaultValue={product.unit}  onChange={onChange} />  */}
            <p>{product.unit} </p>
            <Col>
               <Button type="primary" onClick={()=>addValue(product.unit)} shape="circle">+</Button>
               <Button type="primary" onClick={()=>subValue(product.unit)} shape="circle">-</Button>
               <Button type="primary" onClick={()=>buy(product)} shape="circle">X</Button>
            </Col>
            <Col>Precio Total: {total}.00 $</Col> 
         </div>
            :
         <Link className="product" key={product._id} to={'/product/'+product._id}>
          <Button type="primary" htmlType="submit">
              Detalls
          </Button>
          </Link>
      }
        </div>
        {/* <ShoppingCartOutlined onClick={()=>addCart(product)} /> */}
     </Card>
    
    )
}
export default Product;

// const arr1 = []
// var todos lso pedidos = arr.map(function callback(currentValue, index, array) {
//   pedidos[index] = currentValue._id
//   var nuevo_array2 = arr1.map(function callback(currentValue, index, array){
//    if (currentValue._id === currentValue)
//     cont ++; 3
//     splice()
//   }
// }
// perdidos cmplero = [{

//    id= 0,
//   cont = 0
// }
// ]
// [{1,3} {2,1} {3,1}]