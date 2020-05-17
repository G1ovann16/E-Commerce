import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Headers/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Register from './containers/User/Register/Register';
import Login from './containers/User/Login/Login';
import  Cart  from "./containers/Cart/Cart";
import ProductDetail from './containers/ProductDetail/ProductDetailFuncional';
import Shop from './containers/Shop/Shop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/shop" component={Shop} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/cesta" component={Cart} exact/>
          <Route path="/product/:_id" component={ProductDetail} exact/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
