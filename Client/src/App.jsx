 import React from 'react'
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import JobDetails from './Pages/JobDetails';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddJob from './Pages/AddJob';

 function App() {
   return (
  <div>
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-job' element={<AddJob />} />
        <Route path='/job/:id' element={<JobDetails />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
   )
 }
 
 export default App