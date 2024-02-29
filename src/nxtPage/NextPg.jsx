import React from 'react'
import ProductShow from './ProductShow'
import Productinfo from './Productinfo'
import Header from '../components/navbar/header'
import Footer from '../section/footer/Footer'

const NextPg = () => {
  return (
    <div>
    <Header/>
    <ProductShow/>
    <Productinfo/>
    {/* <Productinfo/>
    <Productinfo/>
    <Productinfo/>
    <Productinfo/> */}
    <Footer/>
    </div>
  )
}

export default NextPg