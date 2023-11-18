
import React from 'react'
import ReviewCard from '../Layouts/ReviewCard'
import img1 from '../Assets/pic1.png'
import img2 from '../Assets/pic2.png'
import img3 from '../Assets/pic3.png'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
      
       <div className='mt-20'>
       <h1 className='font-semibold text-center text-4xl'>Customer's Reviews </h1>
       </div>
       
       <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8 mb-20'>
        
          <ReviewCard img={img1} title="John Deo"/>
          <ReviewCard img={img2} title="Olivia Ava"/>
          <ReviewCard img={img3} title="Sofia Zoe"/>
       </div>
    </div>
  )
}

export default Review
