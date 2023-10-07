import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/about/About'
import Testimonal from '../Pages/testimonial/Testimonial'
// services imports
import Ui_ux from '../component/services/ui_ux/Ui_ux'
import MobileApp from '../component/services/mobileApp/MobileApp'
import WebDevelopment from '../component/services/webDevelopment/WebDevelopment'
import ErpSoftware from '../component/services/erpSoftware/ErpSoftware'
import Gaming from '../component/services/gaming/Gaming'
import Blockchain from '../component/services/blockchain/Blockchain'
// import Chatbot from '../component/services/chatbot/Chatbot'
// career
import JobOpenings from '../component/career/jobOpenings/JobOpenings'
import WhyUs from '../component/career/whyUs/WhyUs'
import ContactUs from '../component/contact/ContactUs'
import TestimonialHeading from '../component/testimonial/TestimonalHeading'
import Portfolio from '../Pages/portfolio/Portfolio'
import Blog from '../Pages/blog/Blog'
// blog detail
import Blog1 from '../Pages/blogdetail/Blog1'
import Blog2 from '../Pages/blogdetail/Blog2'
import Blog3 from '../Pages/blogdetail/Blog3'
import Blog4 from '../Pages/blogdetail/Blog4'
import Blog5 from '../Pages/blogdetail/Blog5'
import Blog6 from '../Pages/blogdetail/Blog6'


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<ContactUs/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        {/* Services */}
        <Route path='/uiux' element={<Ui_ux/>}/>
        <Route path='/mobileApp' element={<MobileApp/>}/>
        <Route path='/WebDevelopement' element={<WebDevelopment/>}/>
        <Route path='/erpSoftware' element={<ErpSoftware/>}/>
        <Route path='/gaming' element={<Gaming/>}/>
        <Route path='/blockchain' element={<Blockchain/>}/>
        {/* <Route path='/chatbot' element={<Chatbot/>}/> */}
        {/* Career */}
        <Route path='/jobOpenings' element={<JobOpenings/>}/>
        <Route path='/whyUs' element={<WhyUs/>}/>
        {/* blog Detail */}
        <Route path='/blog1' element={<Blog1/>}/>
        <Route path='/blog2' element={<Blog2/>}/>
        <Route path='/blog3' element={<Blog3/>}/>
        <Route path='/blog4' element={<Blog4/>}/>
        <Route path='/blog5' element={<Blog5/>}/>
        <Route path='/blog6' element={<Blog6/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes