import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "../Orders/order.module.css";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../Utility/FireBase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return setOrders([]);

    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet</div>
          )}
          {orders.map((order) => (
            <div key={order.id}>
              <hr />
              <p>Order ID: {order.id}</p>
              {order.data.basket.map((item) => (
                <ProductCard flex={true} product={item} key={item.id} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
