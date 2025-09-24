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
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe
('pk_test_51RWRZpCLscHmGgvyN8mIdxagkixu4DhcIWxaCaC0iE3tvZNseo0lZeZaieUlThSPWhhsBFV78JGowOrRruL1LNrQ00wwdkiSQc');
function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/payments' element={
        <ProtectedRoute
         msg={" you must log in to pay"} 
        redirect = {"/payments"} >
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


 
        

      
