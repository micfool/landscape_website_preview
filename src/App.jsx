import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ServicesPage from './Pages/ServicesPage'
import Navbar from './components/Navbar'
import ProjectsPage from './Pages/ProjectsPage'
import ContactPage from './Pages/ContactPage '
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contactus" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App