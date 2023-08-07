import React from 'react'
import { Navbar, Footer, Cgpa, Form, Home, Result, Developers } from './components'
import Loader from './loader/Loader'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Result />} exact/>
        <Route path="/developers" element={<Developers />} exact/>
        <Route path="/loader" element={<Loader />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
