import React from 'react'
import Layout from '../../component/layout/Layout'

import SocialMediaSection from '../../component/getStart/SocialMediaSection'

import PortDetailContent from '../../component/profolioC/protfolioDetail/PortDetailContent'
import ImageCarousel from '../../component/profolioC/ImageCarousel'
import PortDetailHeader from '../../component/profolioC/protfolioDetail/PortDetailHeader'


const Portfolio = () => {
  return (
 <>
 <Layout>
    <PortDetailHeader/>
    {/* <ImageCarousel/> */}
    <PortDetailContent/>
    <SocialMediaSection/>
 </Layout>
 
 </>
  )
}

export default Portfolio