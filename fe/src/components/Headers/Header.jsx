import React, {useEffect,useState} from 'react';
import './Header.scss';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from '../../redux/actions/users'
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const Header = props => {
 let [resultado,  setResultado] = useState(1)
  let [cantUnit,  setcantUnit] = useState(0)
const history = useHistory()
useEffect(() => {

    let grandTotal = props.product_cart.reduce((sum, i) => {
          return sum + (i.price * i.unit)
        }, 0)
   let unitTotal = props.product_cart.reduce((sum, i) => {
         return sum +  i.unit
        }, 0)

setResultado(grandTotal)
setcantUnit(unitTotal)

   })
return (
        <header className="header">
          <div className="homeB">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/shop" exact>Shop</NavLink>
          </div>
          {props.user ?
                <div className="userZone">
                    <span>{props.user.email}</span>
                    <NavLink to="/" onClick={logout} >Logout</NavLink>
                    <NavLink to="/cesta" exact>
                        <div className="col-8 carrito">
                              <Button type="primary" icon={<ShoppingCartOutlined />}>
                              <p>{cantUnit} $</p>  
                            <p>{resultado} $</p>
                         </Button>
                         </div>         
                    </NavLink>
                </div> 
                :
                <div className="guestZone">
                    <NavLink to="/login" exact>Login</NavLink>
                    <NavLink to="/register" exact>Register</NavLink>
                </div>
            }
        </header>
    )
}
const mapStateToProps =(state)=>({user:state.user, product_cart:state.product_cart})
export default connect(mapStateToProps)(Header);