import { HomePage } from './Pages/HomePage'
import { BrowserRouter,Routes, Route} from 'react-router'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'

import './App.css'


function App() {

  return (
    <BrowserRouter basename="/e-commerce" >
    <Routes>
      <Route index element={ <HomePage/>} />
       <Route path="/checkout" element={<CheckoutPage/>} />
       <Route path="/orders" element={<OrdersPage/>} />

      </Routes>
      </BrowserRouter>
   
   
  )
}

export default App
