import React from 'react'
import Layout from '../../layout/Layout'
import WhyUsHeader from './WhyUsHeader'
import WhyUsMid from './WhyUsMid'
import WhyUsCards from './WhyUsCards'

const WhyUs = () => {
  return (
    <>
        <Layout>
            <WhyUsHeader/>
            <WhyUsMid/>
            <WhyUsCards/>
        </Layout>
    </>
  )
}

export default WhyUs