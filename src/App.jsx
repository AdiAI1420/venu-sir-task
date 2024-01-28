import React from 'react'

import "./index.css"
import Navbar from './Components/Navbar/Navbar'
import Carouseldata from './Components/Carosule/Carouseldata'
import Capabilities from './Pages/Capabilities/Capabilities'
import CapabilityDetailes from './Pages/CapabilitiesDetailes/Capability_Detailes'


import Footer from "./Components/Footer/Footer"
import Team from './Pages/Team_Detailes/Team'

import Testimonials from "./Pages/Testimonials/Testimonials"
import Contact from './Pages/Contact/Contact'

import About from './Pages/Company/About/About'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiffrenceCounts from './Pages/Diifrence_Counts/DiffrenceCounts'


const App = () => {
  return (
<>

<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Carouseldata/>} />
<Route path="/about" element={<About />} />

</Routes>

</BrowserRouter>





<Footer />

</>
  )
}

export default App