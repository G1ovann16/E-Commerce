import React from 'react'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
    return (<Link className="product" key={product._id} to={'/product/'+product._id}>
        <img src={product.image_path} alt="" />
        <span>{product.name}</span>
        <span>{product.price}€</span>
    </Link>
    )
}
export default Product;