import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="Footer">
        <div className="wrap">
          <div className="row top">
            <div className="col-8">
              <h3>Information</h3>  
                <ul>
                    <li>Shop Information</li>
                    <li>Payment Information And Commission</li>
                    <li>Privacy And Cookies Policy</li>
                </ul>
             </div>
            <div className="col-8">
                <h3>Order</h3>
            <ul>
                <li>My Order</li>
                <li>Order Status</li>
                <li>Order Cancellation</li>
            </ul>    
            </div>
          </div>
          <div className="row buttom">
              <div className="col-6">Contact</div>
              <div className="col-6">Social Network</div>
              <div className="col-6">email</div>
          </div>  
         </div>            
        </footer>
    )
}
export default Footer;