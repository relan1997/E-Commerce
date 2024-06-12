import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/Product/Product";
import Footer from "../customer/components/Footer/Footer";
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetail'
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetail />}></Route>

        {/* <ProductDetails/>*/}{" "}
        {/*pls fix iska css so look from https://youtu.be/glMRU2ER1q8?t=13319 */}
        {/* <Checkout/>*/}{" "}
        {/*fix the location of the button from https://youtu.be/glMRU2ER1q8?t=18592 */}
        {/* <Order/>*/}{" "}
        {/*  fix the css in the order card where the 3 components are coming one below the other view yt video from 5.30 */}
        {/* <OrderDetail /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
