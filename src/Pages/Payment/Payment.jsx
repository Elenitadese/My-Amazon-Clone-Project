import React,{useContext, useState} from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../Api/axios'
import { ClipLoader } from "react-spinners";
import { db } from '../../Utility/FireBase'
 import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'
import { Type } from '../../Utility/action.type'
function Payment() {

  const [{user,basket}, dispatch] = useContext(DataContext)

    const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

   const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
 },0);
 const [cardError, setCardError] = useState(null)
 const stripe = useStripe();
 const elements = useElements();
 const navigate = useNavigate()

 const handleChange =(e)=>{
  e?.error?.message? setCardError(e?.error?.message):setCardError("")

 }
 const [prcessing, setProcessing] = useState(false)

 const handlePayment = async(e)=>{
  e.preventDefault()

  try{
  // 1. backend || function ---> contact to the client secret
    setProcessing(true)
     
      const response = await axiosInstance.post('/payment/create', {
      amount: total * 100,
});
const { clientSecret } = response.data;

  // 2 client side (react side confirmation) 

      const  {paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,{
          payment_method: {
          card: elements.getElement(CardElement)
        }
      })
         

  // 3 after the confirmation ---> oreder firestore database to save , clear basket 
await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
  basket: basket,
  amount: paymentIntent.amount,
  created: paymentIntent.created
});
// empty in the basket
      dispatch({type:Type.EMPTY_BASKET})

  setProcessing(false)
  navigate("/orders", {state:{msg:"you have placed new order"}} )
  } catch(error){
    console.log(error)
     setProcessing(false)

  }}
 
  return (
    <Layout>
      {/* {Header} */}
       <div className= {classes.payement__header} >chekout item({totalItem}) items</div>


       {/* payment method */}
       <section className={classes.payment} >
        {/* address */}
        <div className={classes.flex}>
          <h3>Dellivery Address</h3>
          <div  >  
            <div>{user?.email}</div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={classes.flex}>
           <h3> Review items and delivery</h3>
          <div> 
            {
              basket?.map((item)=><ProductCard  key={item.id}  product={item} flex={true}/>)
            } 
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form  onSubmit={handlePayment}>
                {/* error */}
                {cardError && ( <small style={{color: 'red'}}>{cardError}</small>)} 
                {/* card element */}
                <CardElement onChange={handleChange}/> 

                {/* price */}
              <div className={classes.payment__price}>
                 <div style={{ display: "flex", gap: "10px" }}>
       <span>Total Order |</span>
       <CurrencyFormat amount={total} />
            </div>

                <button type='submit'>
                  {
                    prcessing?(
                      <div className={classes.loader}>
                        <ClipLoader color='gray' size={15}/>
                        <p>please wait</p>
                      </div>
                    ):(
                  "Pay Now")}</button>
              </div>
              </form>
           
            </div>
          </div>
        </div>
       </section>
      </Layout>
  )
}

export default Payment