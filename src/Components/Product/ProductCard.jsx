import  { useContext } from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


function ProductCard({product, flex, renderDesc, renderAdd})//props initiated at this

{
     if (!product) return null; 
    const { image, title, id, rating, price,description} = product;

    // we have to pass data contect to use context using our use context 

    const [state, dispatch] = useContext(DataContext)
    //  console.log(state)
    // our add to cart function
    const  addToCart = ()=>{
        dispatch({
            type:Type.ADD_TO_BASKET, //decide the action
            item:{
                 image, title, id, rating, price,description
            },
            
        })
         
    }

  return (
    <div className= {`${classes.card__container} 
    
{flex?classes.product__flexed: ''}`}> 
        <Link to ={`/product/${id}`}>
            <img src={image} alt="" className={classes.img__container}/>
        </Link>
        <div>
            <h3>{title}</h3>

            <div className= {classes.description}>

{renderDesc && <div >{description}</div> }</div> 
            <div className={ classes.rating}>
                {/*rating*/}
                <Rating value={rating?.rate || 0} precision={0.1} readOnly/>
                {/*count*/}
                <small>{rating?.count || 0}</small>
            </div>
            <div>
                {/*price*/}
                <CurrencyFormat amount = {price}/>



{  renderAdd &&  
            <button className={classes.button} onClick={addToCart}>add to cart</button>

            // our action button on click addtocart
            // then we have to go to our header and update state
                    
 }
            </div>
        </div>
    </div>
  )
}

export default ProductCard