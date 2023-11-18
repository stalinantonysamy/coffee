
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-10">
    <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">     
      <div className=" w-full md:w-1/4">
        <h1 className=" font-semibold text-xl pb-4">CafePulse</h1>
        <p className=" text-sm">
          Welcome to our coffee haven! Explore our aromatic brews, savor
          artisanal flavors, and discover the perfect roast to elevate your
          daily ritual.
        </p>
      </div>
      <div>
        <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
        <nav className=" flex flex-col gap-2">
          <Link to='/menu'
            className=" hover:text-backgroundColor transition-all cursor-pointer" >            
            Menu
            </Link>

            <Link to='/about'
            className=" hover:text-backgroundColor transition-all cursor-pointer" >            
            About Us
            </Link>

            <Link to='/product'
            className=" hover:text-backgroundColor transition-all cursor-pointer" >            
            Products
            </Link>

            <Link to='review'
            className=" hover:text-backgroundColor transition-all cursor-pointer" >            
            Reviews
            </Link>         
                  
        </nav>
      </div>
      <div>
        <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
        <nav className=" flex flex-col gap-2">
          <Link to="/"
            className=" hover:text-backgroundColor transition-all cursor-pointer">         
            Cappuccino
            </Link>
            <Link to="/"
            className=" hover:text-backgroundColor transition-all cursor-pointer">         
            Latte
            </Link>
            <Link to="/"
            className=" hover:text-backgroundColor transition-all cursor-pointer">         
            Americano
            </Link>
        </nav>
      </div>
      <div>
        <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
        <nav className=" flex flex-col gap-2">
        <Link to="/"
            className=" hover:text-backgroundColor transition-all cursor-pointer">         
            CafePlus@email.com
            </Link>
            <Link to="/"
            className=" hover:text-backgroundColor transition-all cursor-pointer">            
            +91 9942824623
            </Link>
            <Link to="/"
            className=" hover:text-backgroundColor transition-all cursor-pointer">
            Social media
            </Link>
        </nav>
      </div>
    </div>
    <div>
      <p>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-backgroundColor px-2">
            
            champion programmers 
          </span>

          <span className='px-1'>
           | All rights reserved
           </span>
        </p>
      </p>
    </div>
  </div>
  )
}

export default Footer
