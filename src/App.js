import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Introduction from './component/Introduction/Introduction';
import About from './component/About/About';
import Project from './component/Project/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  window.onscroll = ()=> {scrollFunction()}

  const scrollFunction = () => {
    if((document.body.scrollTop >100 && document.body.scrollTop <900) || (document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 900) ) {
      console.log('scrolled 80')
      document.getElementById('navbar1').classList.remove('none')
      document.getElementById('navbar1').className='style_NavBarOnScroll__3Y5yu'
    } else if (document.body.scrollTop >= 900 || document.documentElement.scrollTop >= 900 ) {
      console.log('scrolled 900')
      document.getElementById('navbar1').className='none'
    } else {
      console.log('scrolled -80')
      document.getElementById('navbar1').classList.remove('none')
      document.getElementById('navbar1').className='style_NavBar__2zSuE'
    }
  }
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
