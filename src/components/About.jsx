import React from 'react'
import img from '../Assets/about.jpg';
import { Button } from 'react-scroll';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32
    px-5 bg-backgroundColor'>
      <div className='mt-20'>
      <h1 className='font-semibold text-center text-4xl lg:mt-14 mb-8'>About Us</h1>
      </div>
      <br />
      <div className='flex flex-col lg:flex-row items-center gap-5 mb-20'>

        <div className='w-full lg:w-2/4'>
            <img className='rounded-lg' src={img} />
        </div>

        <div className='w-full lg:w-2/4 p-4 space-y-3'>
            <h2 className='font-semibold text-3xl'>What Makes Our Coffee Special ? </h2>
            <p>Welcome to our coffee haven! Explore our aromatic brews, savor artisanal flavors, and discover the perfect roast to elevate your daily ritual.savor artisanal flavors, and discover the perfect roast to elevate your daily ritual,savor artisanal flavors, and discover the perfect roast to elevate your daily ritual,savor artisanal flavors.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos obcaecati impedit dolore, perferendis necessitatibus rem natus ab cumque dolorum laborum nisi ex quasi deserunt vero possimus tenetur aperiam architecto sit?
            </p>

            <Button title='Learn More' />
        </div>
      </div>
    </div>
  )
}

export default About
