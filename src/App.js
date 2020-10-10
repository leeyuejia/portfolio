import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import './App.css';
import Navbar from './component/Navbar';
import Introduction from './component/Introduction/Introduction';
import About from './component/About/About';
import Project from './component/Project/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

const scrollFunction = () => {
  if((document.body.scrollTop > 100 && document.body.scrollTop < 900) || (document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 900) ) {
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


function App() {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme)
  }

  const darkTheme = {
    state: true,
    toggle : toggleTheme,
    darkerBgColor : '#121419',
    darkBgColor: '#1B1F26',
    highlightColor: '#FFB633',
    secondaryColor: '#666666',
    primaryColor: '#E6E6E6',
    lightColor: '#F2F2F2'
}

  const lightTheme = {
    state:false,
    toggle : toggleTheme,
    darkerBgColor : '#FBFAF5', //  ghost white
    darkBgColor: '#334657', // slate metal blue
    highlightColor: '#FF685D', // pale red
    secondaryColor: '#504949', //  30% black
    primaryColor: '#282525', // 15% black
    lightColor: '#363030' // 20% black
}


  window.onscroll = ()=> {scrollFunction()}
  

  return (
    <ThemeProvider theme = {theme ? darkTheme: lightTheme}>
      <div className="App">
        {/* <Navbar toggleTheme={toggleTheme}/> */}
        <Navbar/>
        <Introduction/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
