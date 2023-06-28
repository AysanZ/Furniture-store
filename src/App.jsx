import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Value from './components/Value';
import About from './components/About';
import Category from './components/Category';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Home from './components/Home';
import Products from './components/Products';



const App = () => {
  return (
    <div className='max-w[1440px] mx-auto bg-bg' >
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/producs' element={<Products/>} />

      </Routes>
    <Footer/>
  </div>
  ) ;
};

export default App;
