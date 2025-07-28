import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home';
import ProductDetail from './pages/productDetail';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useState } from "react"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';

function App() {
  const [cartItems,setCartItems]=useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
        </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
