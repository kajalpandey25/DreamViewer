import React from 'react'

import Banner from '../../component/banner/Banner'

import Footer from '../../component/layout/footer/Footer'

import SocialMediaSection from '../../component/getStart/SocialMediaSection'
import AboutHeading from '../../component/about/AboutHeading'
import ServiceCards from '../../component/services/ServiceCards'
import ServiceHeading from '../../component/services/ServiceHeading'
import AboutImage from '../../component/about/AboutImage'
import AboutBox from '../../component/about/AboutBox'
import PortfolioHeading from '../../component/profolioC/PortHeading'

import TestimonialSlider from '../../component/testimonial/TestimonialSlider'
import TestimonialHeading from '../../component/testimonial/TestimonalHeading'
import Header from '../../component/layout/header/Header'
import TechnoHeading from '../../component/technology/TechnoHeading'
import LagoCarousel from '../../component/technology/LogoCarousel'
import PortHeading from '../../component/profolioC/PortHeading'
import ImageCarousel from '../../component/profolioC/ImageCarousel'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <TechnoHeading/>
      <LagoCarousel/>

      <div id='services'>
        <ServiceHeading/>
        <ServiceCards/>
      </div>
      {/* our work */}
      <PortHeading/>
      <ImageCarousel/>
      
      <AboutHeading/>
      <AboutImage/>
      <AboutBox/>
      <SocialMediaSection/>
      <div id='testimonials'>
        <TestimonialHeading/>
        <TestimonialSlider/>
      </div>
      <Footer/>
    </>
  )
}

export default Home





// import React from 'react'

// import Banner from '../../component/banner/Banner'

// import Footer from '../../component/layout/footer/Footer'

// import SocialMediaSection from '../../component/getStart/SocialMediaSection'
// import AboutHeading from '../../component/about/about/AboutHeading'
// import ServiceCards from '../../component/services/ServiceCards'
// import ServiceHeading from '../../component/services/ServiceHeading'
// import AboutImage from '../../component/about/about/AboutImage'
// import AboutBox from '../../component/about/about/AboutBox'
// import PortfolioHeading from '../../component/profolioC/PortHeading'

// import TestimonialSlider from '../../component/testimonial/TestimonialSlider'
// import TestimonialHeading from '../../component/testimonial/TestimonalHeading'
// import Header from '../../component/layout/header/Header'




// const Home = () => {
//   return (
//     <>
//       <Header/>
//       <Banner/>
//       <div id='services'>
//         <ServiceHeading/>
//         <ServiceCards/>
//       </div>
//       <PortfolioHeading/>
//       <PortfolioCard/>
      
//       <AboutHeading/>
//       <AboutImage/>
//       <AboutBox/>
//       <SocialMediaSection/>
//       <div id='testimonials'>
//         <TestimonialHeading/>
//         <TestimonialSlider/>
//       </div>
//       <Footer/>
//     </>
//   )
// }

// export default Home