
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Product from './components/Product';
import Review from './components/Review';
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';

function App() {
  return (
    <div>
      <Navbar />
      
       
       <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/review' element={<Review />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signin' element={<SignIn />}/>
        
       </Routes>

       
       <Footer />
       
       

        
        
          
        {/* <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="products">
           <Product />
        </div>

        <div id="review">
          <Review />
        </div>

        <div id="review">
          <Footer />
        </div> */}
      
    </div>
  )
}

export default App;
