import React from 'react'
import Layout from '../../Components/Layout/Layout'
import CarouselEffect from '../../Components/Carousel/CarouselEffect'
import Category from '../../Components/Catagory/Category'
import Product from '../../Components/Product/Product'
function Landing() {
  return (
    <Layout> 
       < CarouselEffect/>
       < Category/>
       <Product/>
    </Layout>
  )
}

export default Landing