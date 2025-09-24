 import classes from './Header.module.css';
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import LowerHeader from './LowerHeader';
import { Link,  useNavigate } from 'react-router-dom';
// use context have to be imported then data pro
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';


import {auth} from '../../Utility/FireBase'
import { Type } from '../../Utility/action.type';
const Header = () => {
 const [{user,basket}, dispatch] = useContext(DataContext)
 const navigate = useNavigate();
 
 const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
 },0);

  return (
    
    < section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section */}
          <div className={classes.search}>
            <select name="">
              <option value="">All</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon"
            />
            <IoSearch size={38} />
          </div>

          {/* Right Side Options */}
          <div className={classes.order__container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={!user && "/auth"}>
            <div>
              {
                user?(
                  <>
                  <p>Hello, {user?.email?.split('@')[0]} </p>
                  {/* <span onClick={()=>auth.signOut}>Sign Out</span> */}
                  <span
  onClick={() => {
    auth.signOut().then(() => {
      // Optionally clear user from context (though Firebase listener should handle it)
      dispatch({ type: Type.SET_USER, user: null });
      navigate("/auth", { state: { msg: "You have been signed out." } });
    });
  }}
>
  Sign Out
</span>

                  </>
                ):(
                  <>
                  <p>Hello, Sign In</p>
                   <span>Account & Lists</span>
                  </>
                   
                )

              }
            </div>
            </Link>

            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart} >
              <BiCart size={35} />
              <span>{ totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>


  );
};

export default Header;
