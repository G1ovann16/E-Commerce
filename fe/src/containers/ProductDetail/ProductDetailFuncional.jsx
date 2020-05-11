import React, { Component, Fragment, useState, useEffect } from 'react'
import axios from "axios";
import { API_URL } from '../../api-config';
import './ProductDetail.scss'
import { useParams } from 'react-router-dom';
const ProductDetailFuncional = props => {
    const [product, setProduct] = useState({})
    const { _id } = useParams();//extraemos el parámetro _id de la ruta (ActivatedRoute para recoger params)
    useEffect(() => {
        axios.get(API_URL + '/product/' + _id)//hacemos la petición para obtener ese producto en detalle
            .then(res => setProduct(res.data))//actualizamos el estado acorde a la respuesta del servi
    }, []);
    return (<div className="product">
        <img src={product.image_path} alt="" />
        <div className="detail">
            <span>{product.price}€</span>
            <span>{product.stock} unidades</span>
            <span>{product.name}</span>
            <span>{product.description}</span>
        </div>
    </div> )
}
export default ProductDetailFuncional;