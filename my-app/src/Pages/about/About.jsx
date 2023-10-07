import React from 'react'
import Layout from '../../component/layout/Layout'
import AboutHeader from '../../component/about/aboutSection/AboutHeader';
import SocialMediaSection from '../../component/getStart/SocialMediaSection';
import AboutMiddleSection from '../../component/about/aboutSection/AboutMiddleSection';

const About = () => {
  return (
    <>
    <Layout>
      <AboutHeader/>
      <AboutMiddleSection/>
      <SocialMediaSection/>
    </Layout>
    </> 
  )
}

export default About;