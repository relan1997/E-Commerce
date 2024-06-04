import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navigation/>
    </div>
    {/* <HomePage/> */}
    <Product/>
    <Footer/>
    </>
  )
}

export default App
