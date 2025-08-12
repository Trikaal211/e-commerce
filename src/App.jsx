import { HomePage } from './Pages/HomePage'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Routes, Route} from 'react-router'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'

import './App.css'
function App() {
    const [cart, setCart] = useState([]);
  useEffect(()=>{
     axios.get('/api/cart-items')
 .then((response)=>{
  setCart(response.data);
 })
  },[]);

  return (
 
    <Routes>
      <Route index element={ <HomePage cart = {cart}/>} />
       <Route path="/checkout" element={<CheckoutPage/>} />
       <Route path="/orders" element={<OrdersPage/>} />

      </Routes>
  
   
   
  )
}

export default App
