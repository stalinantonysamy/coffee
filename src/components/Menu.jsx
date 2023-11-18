
import React from 'react'
import MenuCard from '../Layouts/MenuCard'
import img1 from '../Assets/menu1.jpg'
import img2 from '../Assets/menu2.jpg'
import img3 from '../Assets/menu3.jpg'
import img4 from '../Assets/menu4.jpg'
import img5 from '../Assets/menu5.jpg'
import img6 from '../Assets/menu6.jpg'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
      <h1 className='font font-semibold text-center text-4xl mt-32 mb-8'>Our Menu</h1>
      <br />
      <div className='flex flex-wrap pb-8 gap-8 justify-center'>
        <MenuCard img={img1} title="Espresso"/>
        <MenuCard img={img2} title="Cappuccino"/>
        <MenuCard img={img3} title="Latte"/>
        <MenuCard img={img4} title="Americano"/>
        <MenuCard img={img5} title="Macchiato"/>
        <MenuCard img={img6} title="Doppio"/>
      </div>
    </div>
  )
}

export default Menu
