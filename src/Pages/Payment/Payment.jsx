import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/FireBase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );
  const totalItem = basket.reduce((amount, item) => amount + item.amount, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    setCardError(e?.error?.message || "");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setCardError(null);

    try {
      // 1️⃣ Get clientSecret from backend
      const response = await axiosInstance.post("/payment/create", {
        amount: total * 100,
      });
      const { clientSecret } = response.data;

      // 2️⃣ Confirm payment
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: elements.getElement(CardElement) },
        }
      );

      if (error) throw new Error(error.message);

      // 3️⃣ Save order in Firestore
      if (user) {
        await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
          basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      }

      // 4️⃣ Clear basket & navigate to orders
      dispatch({ type: Type.EMPTY_BASKET });
      navigate("/orders", { state: { msg: "You have placed a new order" } });
    } catch (err) {
      console.error("Payment error:", err);
      setCardError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <div className={classes.payement__header}>
        Checkout item({totalItem}) items
      </div>

      <section className={classes.payment}>
        {/* Delivery Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>Ethiopia</div>
          </div>
        </div>
        <hr />

        {/* Basket items */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* Payment method */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />

                <div className={classes.payment__price}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>Total Order |</span>
                    <CurrencyFormat amount={total} />
                  </div>

                  <button type="submit" disabled={processing}>
                    {processing ? (
                      <div className={classes.loader}>
                        <ClipLoader color="gray" size={15} />
                        <p>Please wait</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
