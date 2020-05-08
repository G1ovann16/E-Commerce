import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from '../../api-config';
import './ProductDetail.scss'
export default class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount() {
        console.log(this.props)
        const { _id } = this.props.match.params;
        axios.get(API_URL + '/products/' + _id)
            .then(res => this.setState({ product: res.data }))
    }
    render() {
        return (
            <div className="product">
                <img src={this.state.product.image_path} alt="" />
                <span>{this.state.product.name}</span>
                <span>{this.state.product.price}€</span>
                <span>{this.state.product.stock} unidades</span>
                <span>{this.state.product.description}</span>
            </div>
        )
    }
}
