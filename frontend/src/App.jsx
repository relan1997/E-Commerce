import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'
import Order from './customer/components/Order/Order'
import OrderDetail from './customer/components/Order/OrderDetail'
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './Routers/CustomerRouters'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      
    <Routes>
      <Route path='/*' element={<CustomerRouters/>}></Route>{/* path agar empty  slash ke form mai aaya toh yeh waala component trigger hoga*/}
    </Routes>


    
    </div>
    
    
    </>
  )
}

export default App
