import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from '../../api-config';
export default class ProductDetail extends Component {
    
    constructor(props){
        super(props);
        this.state={
            product:{}
        }
    }
    componentDidMount(){
        const {_id} = this.props.match.params;
        axios.get(API_URL+'/products/'+_id)
        .then(res=>console.log(res.data))
    }
    render() {
        return (
            <div>
                    Product Detail
            </div>
        )
    }
}
