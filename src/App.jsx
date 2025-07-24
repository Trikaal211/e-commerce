import { HomePage } from './Pages/HomePage'
import { HashRouter,Routes, Route} from 'react-router-dom'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'

import './App.css'


function App() {

  return (
    <HashRouter>
    <Routes>
      <Route index element={ <HomePage/>} />
       <Route path="/checkout" element={<CheckoutPage/>} />
       <Route path="/orders" element={<OrdersPage/>} />

      </Routes>
      </HashRouter>
   
   
  )
}

export default App
