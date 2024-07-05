import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/footer';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Wooden from './components/pages/Wooden';
import Consulting from './components/pages/Consulting';
import Gallery from './components/pages/Gallery';
import Privacy from './components/pages/Privacy';

import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';



// change "component" to "element" e.g.           <Route path="/" element={<Home />} />
// dl from https://www.youtube.com/watch?v=T2MhVxJxsL0
// import Routes.  
function App() {



  
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/wooden' element={<Wooden/>} />
        <Route path='/consulting' element={<Consulting/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/privacy' element={<Privacy/>} />


           </Routes>
{/* <Footer/> */}
    </>
  )
}

export default App;

