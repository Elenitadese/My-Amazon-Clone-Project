import React, { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import clsses from './Cart.module.css';

import { Type } from '../../Utility/action.type';

// up and down arrows to add and remove
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";


function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

// ************ total number of my basket item taked
  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
    // initially start and sum up
  );




// ***************************
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };


// *******************
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

// *********************************************
  return (
    <Layout>
      <section className={clsses.container}>
        <div className={clsses.cart__container}>
          <h2>Hello {user?.name || ""}</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {/* then we  pass to rendering our basket */}
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item, id) => (
              <section key={id} className={clsses.cart_Product}>
                {/* to display we use our product card to be returned , it imported as props */}

                <ProductCard
                  product={item}
                  renderDesc={true} //we need the discription so true
                  flex={true}
                  renderAdd={false} // we do not want the button
                />

                <div className={clsses.button_Container}>
                  <button
                    className={clsses.amount_btn}
                    onClick={() => increment(item)}
                  >
                    {<FaRegArrowAltCircleUp size={55} />}
                  </button>

                  <span>{item.amount}</span>

                  <button
                    className={clsses.amount_btn}
                    onClick={() => decrement(item.id)}
                  >
                    {" "}
                    {<FaRegArrowAltCircleDown size={55} />}
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={clsses.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>

              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
