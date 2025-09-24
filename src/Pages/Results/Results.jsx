import React, { useEffect } from 'react'
import classes from './results.module.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import { useState } from 'react'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function Results() {
    const [results, setResults] = useState([]);
    const [isLoading, setisLoading] = useState(false)
    const {categoryName} = useParams()
    useEffect(() => {
     console.log(categoryName)
    axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res)=>{
            console.log(res)
            setResults(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    
       
    }, [])
    
    
  return (
    <Layout> 
        <section>
            <h1 style={{padding: "30px"}}>Results</h1>
            <p style={{padding: "30px"}}>category/{categoryName}</p>
            <hr />
            {isLoading?(<Loader/>):(
                 <div className={classes.products__container}>
                {results?.map((Product)=>(
                    <ProductCard
                    key={productUrl.id}
                    renderAdd={true}
                    product={Product}
                    />
                ))}
               </div>

            )}
               
        </section>
    </Layout>
  )
}

export default Results