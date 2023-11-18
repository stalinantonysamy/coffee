
import React from 'react'
import img1 from '../Assets/product1.jpg'
import img2 from '../Assets/product2.jpg'
import img3 from '../Assets/product3.jpg'
import ProductCard from '../Layouts/ProductCard'

const Product = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32
    px-5 bg-backgroundColor'>
      <br/>
      <br/>
      <div className='mt-10'>
      <h1 className='font-semibold text-center text-4xl lg:mt-14 mb-8'>Our Products</h1>
      </div>
      
      <br />
      
      <div className='flex flex-col lg:flex-row gap-12 justify-center'>
          <ProductCard img={img1} title="Nespresso"/>
          <ProductCard img={img2} title="AeroPress"/>
          <ProductCard img={img3} title="Chemex"/>
     </div>
      <br/>
     <div className='flex flex-col lg:flex-row gap-12 justify-center mb-10'>
          <ProductCard img={img1} title="Nespresso"/>
          <ProductCard img={img2} title="AeroPress"/>
          <ProductCard img={img3} title="Chemex"/>
     </div>
     
      
    </div>
  )
}

export default Product
