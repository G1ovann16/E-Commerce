import React, { useEffect, useState } from 'react'
import { Carousel, Input, Radio } from 'antd';
import { connect } from "react-redux";
import {  productsAll, productsRecently  } from '../../redux/actions/products';
import './Shop.scss'
import Product from '../../components/Products/Products';

const { Search } = Input;
const Shop = (props) => {
  const [search,  setSearch] = useState('')
  const [valueRadio,  setValueRadio] = useState(0)
  useEffect(() => {
    productsRecently()
    let value = '';
  },[])

  function handleRadio(e){
    console.log(props.productsRec)
    setValueRadio(e.target.value)
      // if ((e.target.value) == 1) {
      //   props.products.sort((a, b) => a.price - b.price)
      //   console.log(props.products,'menor')
      // }
      // else if((e.target.value) == 2) {
      //   props.products.sort((a, b) => b.price - a.price)
      //   console.log(props.products,'mayor')
      // }
    
  }

  function handleSearch(ev) {
    setSearch(ev.target.value)
  }
  return (
    <div className="Shop">
      <div className="row">
        <div className="col-8">
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio onClick={handleRadio} value={1}>Less Expensive </Radio>
          <Radio onClick={handleRadio} value={2}>More Expensive</Radio>
         </Radio.Group> 
         </div>
        <div className="col-8 busqueda">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onKeyUp={handleSearch}
          //  onSearch={value => console.log(value)}
          />
          <br />
          <br />
        </div>
      </div>
      <ul className="NavTop">
        <li className="display">
          <h3>DOG</h3>
          <h4>FOOD</h4>
          <h4>ACCESSORIES</h4>
          <h4>HELP</h4>
        </li>
        <li>
          <h3>BRAND</h3>
          <div className="col-8 searchBrand">
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="short"
              onSearch={value => console.log(value)}
            />
            <br />
            <br />
          </div>
        </li>
        <h3>OFERTS</h3>
        <h3>SERVICES</h3>
        <h3>BLOG</h3>
      </ul>
      <Carousel autoplay>
          {(props.productsRec)?.map(product =><div><img src={product.image_path[0]} alt=""/> </div>)}
       </Carousel>
      <div className="products">
        {props.products?.filter(product=>search ? product.name.includes(search):true)?.map(product => <Product key={product._id} product={product} />)}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({ products: state.products, productsRec: state.productsRec })
export default connect(mapStateToProps)(Shop);