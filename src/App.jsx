import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Carousel from './Components/Carosule/Carousel'
import Capabilities from './Pages/Capabilities/Capabilities'
import CapabilityDetailes from './Pages/CapabilitiesDetailes/Capability_Detailes'
import Diffrence_Counts from './Pages/Diifrence_Counts/Diffrence_Counts'

import Footer from "./Components/Footer/Footer"
import Team from './Pages/Team_Detailes/Team'

import Testimonials from "./Pages/Testimonials/Testimonials"
import Contact from './Pages/Contact/Contact'
import Questions from './Questions/Questions'
const App = () => {
  return (
<>

<Navbar />

<Carousel />

<Capabilities />


<CapabilityDetailes />

<Diffrence_Counts />

<Team />

<Testimonials/>
<Questions />

<Contact />
<Footer />

</>
  )
}

export default App