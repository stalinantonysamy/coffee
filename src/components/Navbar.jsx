
import React,{useState} from 'react'
import { SiCoffeescript } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Button from '../Layouts/Button';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai';

const Navbar = () => {


    const [menu, setMenu] = useState(false);

    const handleChange =()=>{
        setMenu(!menu);
    };

    const closeMenu =()=>{

        setMenu(false);
    };
    return (
        <div className='fixed w-full z-10'>

            <div>
                <div className='flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r
                from-backgroundColor to-brightColor shadow-[0]'>
                   <Link to="/">
                    <div className='flex flex-row items-center cursor-pointer gap-2'>
                        <span>
                            <SiCoffeescript size={25} />
                        </span>
                        <h1 className='text-xl font-bold'>CafePlus</h1>
                    </div>
                    </Link>
                    <nav className='hidden md:flex flex-row items-center text-lg font-bold gap-8'>          
                        
                        <Link to="/">Home</Link>   
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>  
                        
                        <Link to="/menu">Menu</Link>              
                         <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>  
                        
                        <Link to="/about">About Us</Link> 
                         <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>                           
                        
                        <Link to="/product">Products</Link>
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>            
                        
                        <Link to="/review">Reviews</Link>
                       
                       <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>  
                       

                    </nav>
                    <div>
                        <Link to="/login"><Button title="Login" /></Link>
                    </div>

                    <div className='md:hidden flex items-center'>
                        {menu ? (

                            <AiOutlineClose size={25} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenuUnfold size={25} onClick={handleChange} />

                        )}
                    
                
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0" : "translate-x-full"} lg:hidden
                
                flex flex-col absolute bg-[#13262f] text-white left-0 top-16 font-semibold text-2xl
                text-center pt-8 pb-10 gap-12 w-full h-fit transition-transform duration-300`}>
                                       
                       <p className="cursor-pointer group relative inline-block hover:text-brightColor"
                        onClick={closeMenu}
                        >
                            <Link to="/">Home</Link> 
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>  
                        </p>

                        <p className="cursor-pointer group relative inline-block hover:text-brightColor"                                   
                        onClick={closeMenu}
                        >
                         <Link to="/menu">Menu</Link> 
                         
                         <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>  
                         </p>

                        <p className="cursor-pointer group relative inline-block hover:text-brightColor"                 
                          onClick={closeMenu}
                          >
                         <Link to="/about">About Us</Link>
                         <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>  
                         </p>

                        <p className="cursor-pointer group relative inline-block hover:text-brightColor"               
                        onClick={closeMenu}
                        >

                        <Link to="/product">Products</Link>
                        <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>  
                        </p>

                        <p className="cursor-pointer group relative inline-block hover:text-brightColor"                 
                        onClick={closeMenu}
                        >
                       <Link to="/review">Reviews</Link>
                       
                       <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black
                        transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>  
                       </p>

                     {/* <Button title="Login"/> */}
                </div>
            </div>

        </div>
    )
}

export default Navbar
