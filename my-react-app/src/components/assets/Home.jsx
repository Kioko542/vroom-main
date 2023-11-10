import React from 'react'
import Showcase from './Showcase'
import ProductList from './productList'
import Newsletter from './Newsletter'
import Footer from './footer'

const Home = () => {
  return (
    <div>
       
    <div className="top-section">
     <Showcase />
     <Newsletter />
     <ProductList />
     <Footer />
      </div>
    </div>
  )
}

export default Home
