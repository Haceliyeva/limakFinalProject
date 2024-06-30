import React from 'react'
import Brands from '../../Components/HomePage/Brands/Brands'
import Certificates from '../../Components/HomePage/Certificates/Certificates'
import Countries from '../../Components/HomePage/Countries/Countries'
import Header from '../../Components/HomePage/Header/Header'
import Footer from '../../Components/HomePage/Footer/Footer'
import News from '../../Components/HomePage/News/News'
import Stores from '../../Components/HomePage/Stores/Stores'
import Order from '../../Components/HomePage/Order/Order'

const Home = () => {
  return (
    <div>
      <Header/>
      <Brands/>
      <Order/>
      <Stores/>
      <News/>
      <Countries/>
      <Certificates/>
      <Footer/>
   </div>
  )
}

export default Home
