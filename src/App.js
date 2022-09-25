import './App.css';
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import GMap from './component/GMap';
import Home from './component/Home';
import Navbar from './Tools/Navbar';
import Footer from './Tools/Footer';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<GMap />} />
      </Routes>
      <Footer />
    </div>


  )
}

export default App;
