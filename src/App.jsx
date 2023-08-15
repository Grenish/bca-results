import React from 'react'
import { Navbar, Footer, Gpa, Home, Result, Developers } from './components'
import { GpaCalculator } from './Proto'
import Loader from './loader/Loader'
import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Result />} exact/>
        <Route path="/developers" element={<Developers />} exact/>
        <Route path="/loader" element={<Loader />} />
        <Route path="/calc" element={<GpaCalculator />}/>
        <Route path="/gpa" element={<Gpa />} exact/>
      </Routes>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
