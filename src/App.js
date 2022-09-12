import React from 'react'
import Artist from './components/Artist';
import Contact from './components/Contact';
import Form from './components/Form';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Map from './components/Map';

import Navbar from './components/Navbar';
import Piercing from './components/Piercing';
import Welcome from './components/Welcome';




function App() {
  return (
    <>
      <Navbar/> 
      <Header/> 
      <Welcome/>
      <Artist/>
      <Gallery/>
      <Piercing/>
      <Contact/>
      <Form/>
      <Map/>

    </>
    
    
  );
}

export default App;
