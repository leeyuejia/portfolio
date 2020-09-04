import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Introduction from './component/Introduction/Introduction';
import About from './component/About/About';
import Project from './component/Project/Project';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <About/>
      <Project/>
      {/* <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
