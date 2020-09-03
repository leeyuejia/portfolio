import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Introduction from './component/Introduction/Introduction';
import About from './component/About/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <About/>
      
      {/* <About/>
      <Project/>
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
