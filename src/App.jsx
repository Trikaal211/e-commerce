import { HomePage } from './Pages/HomePage'
import {Routes, Route} from 'react-router'

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={ <HomePage/>} />
       <Route path="/checkout" element={ <div>checkout</div>} />

      </Routes>
   
   
  )
}

export default App
