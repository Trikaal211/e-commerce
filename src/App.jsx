import { HomePage } from './Pages/HomePage'
import {Routes, Route} from 'react-router'

import './App.css'
import { CheckoutPage } from './Pages/CheckoutPage'

function App() {

  return (
    <Routes>
      <Route index element={ <HomePage/>} />
       <Route path="/checkout" element={<CheckoutPage/>} />

      </Routes>
   
   
  )
}

export default App
