import React from 'react'

import "./index.css"
import Navbar from './Components/Navbar/Navbar'



import Footer from "./Components/Footer/Footer"


import About from './Pages/Company/About/About'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Frontend from './Pages/Services/Semicondutor/Front-end-design-and-verification/Frontend'
import ContactPage from './Pages/ContactPage/contact'

import Educationcenter from './Pages/Resource/EducationCenter/Educationcenter'
import Blogs from './Pages/Resource/Blog/Blogs'
import Lifeatinsemi from './Pages/Careers/LifeAtInsemi/Lifeatinsemi'


import "./App.css"
import Currentopennings from './Pages/Careers/currentopenings/Currentopennings'
import Insemi from './Pages/Insemi/Insemi'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import BackToTop from 'react-custom-back-to-top-button';
import Frenend from './Pages/Services/FrontDesignVerification/Frenend'
import PhysicalDesign from './Pages/Services/PhysicalDesign/PhysicalDesign'
import DesignforTest from './Pages/Services/DesignforTest/DesignforTest'
import FoundationIPDesign from './Pages/Services/FoundationIPDesign/FoundationIPDesign'
import PostSiliconValidationEmulation from './Pages/Services/PostSiliconValidationEmulation/PostSiliconValidationEmulation'
import EmbeddedSystemSolutions from './Pages/Services/EmbeddedSystemSolutions/EmbeddedSystemSolutions'
import SoftwareDevelopmentTesting from './Pages/Services/SoftwareDevelopmentTesting/SoftwareDevelopmentTesting'

const App = () => {
  return (
<>

<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Insemi/>} />
<Route path="/about" element={<About />} />

<Route path="/frontend" element={<Frontend  />} />
<Route path="/Contact" element={<ContactPage  />} />
<Route path="/Educationcenter" element={<Educationcenter  />} />
<Route path="/Blogs" element={<Blogs  />} />
<Route path="/Lifeatinsemi" element={<Lifeatinsemi  />} />
<Route path="/Currentopennings" element={<Currentopennings  />} />

// links add
<Route path="/Frenend" element={<Frenend  />} />
<Route path="/PhysicalDesign" element={<PhysicalDesign  />} />
<Route path="/DesignforTest" element={<DesignforTest  />} />
<Route path="/FoundationIPDesign" element={<FoundationIPDesign  />} />
<Route path="/PostSiliconValidationEmulation" element={<PostSiliconValidationEmulation  />} />
<Route path="/EmbeddedSystemSolutions" element={<EmbeddedSystemSolutions  />} />
<Route path="/SoftwareDevelopmentTesting" element={<SoftwareDevelopmentTesting  />} />

</Routes>

</BrowserRouter>
<BackToTop  icon={<i className='fa fa-arrow-up '></i>}/>



<Footer />
<ToastContainer />


</>
  )
}

export default App



