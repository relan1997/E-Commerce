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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navigation/>
    </div>
    {/* <HomePage/> */}
    {/* <Product/> */}
    {/* <ProductDetails/>*/} {/*pls fix iska css so look from https://youtu.be/glMRU2ER1q8?t=13319 */}
    {/* <Cart/> */}
    {/* <Checkout/>*/}  {/*fix the location of the button from https://youtu.be/glMRU2ER1q8?t=18592 */}
    <Order/>   {/* fix the css in the order card where the 3 components are coming one below the other view yt video from 5.30 */}
    <Footer/>
    </>
  )
}

export default App
