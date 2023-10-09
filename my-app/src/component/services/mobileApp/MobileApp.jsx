import React from 'react'
import Layout from '../../layout/Layout'
import MobileAppHeader from './MobileAppHeader'
import MobileAppMid from './MobileAppMid'

const MobileApp = () => {
  return (
    <>
      <Layout>
        <MobileAppHeader/>
        <MobileAppMid/>
      </Layout>
    </>
  )
}

export default MobileApp