 import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Order from './Pages/Orders/Order'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import ProtectedRoute from './Components/ProtectdRoute/ProtectedRoute'

// this import comes on building payment page 
// import { CheckoutProvider } from "@stripe/react-stripe-js/checkout";
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// initialize by my stripe publick key 
const stripePromise = loadStripe(
  "pk_test_51SAs5pPYJB6msNLGmRyZRSslDBE6RW0dt2ldfAGwasN5sW4wt6WpOsJtTDfIITScfTVlNDlTPJYY8d1w2bUh64Cx00IF5aib19"
);
function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/payments' element={
        <ProtectedRoute
         msg={" you must log in to pay"} 
        redirect = {"/payments"} >
    {/* wrap payment by element */}
  <Elements stripe={stripePromise}>
    <Payment />
  </Elements>

  </ProtectedRoute>
} />
   
      <Route path='/orders' element={
          <ProtectedRoute
        msg={" you must log in to access your orders"} 
        redirect = {"/orders"} >
          <Order />
        </ProtectedRoute>
        } />

      <Route path='/cart' element={<Cart />} />
      <Route path='/category/:categoryName' element={<Results />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
    </Routes>
  )
};

export default Routing


 
        

      
