import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import HeadNav from './HeadNav'
import FootNav from './FootNav'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'
import HomePage from './landingPage/home/HomePage'
import VerticalBtn from './VerticalBtn'
import AdmissionForm from './AdmissionForm'
import KiaBot from './ChatBot/KiaBot'
import CampusFacility from './landingPage/Campus/CampusFacility'
import AboutDev from './AboutDev'
import AboutFS from './landingPage/AboutFS/AboutFS'
import Admission from './landingPage/Admission/AdmissionPage'
import Contact from './landingPage/Contact/Contact'
import NotFoundPage from './NotFoundPage'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
  <VerticalBtn/>
    <HeadNav />
    <Navbar />
    <KiaBot/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/aboutDev' element={<AboutDev/>}/>
      <Route path='/aboutFS' element={<AboutFS/>}/>
      <Route path='/campus' element={<CampusFacility/>}/>
      <Route path='/admission' element={<Admission/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admissionForm' element={<AdmissionForm/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    <FootNav />
  </BrowserRouter>

)
