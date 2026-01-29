
import "./App.css";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Routers
import Home from "./pages/home/home";
import TopHeader from './component/header/TopHeader'
import ButtonHeader from './component/header/ButtonHeader';
import ProductDeatlais from "./pages/home/productDetails/productDeatlais";
import Cart from "./pages/cart/cart";
function App() {
  return (
    <>
    <div class="bubbles" id="bubbleBox"></div>
    <header>
     <TopHeader/>
      <ButtonHeader/>
    </header>
      
     
      <Routes>
       <Route path="/" element ={ <Home/>}/>
       <Route path="/cart" element ={ <Cart/>}/>
       <Route path="/products/:id" element ={< ProductDeatlais/>}/>
      </Routes>
     </>
  ) 
}

export default App
