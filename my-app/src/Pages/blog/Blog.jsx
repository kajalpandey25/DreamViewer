import React from 'react'
import BlogSectionHeader from '../../component/blog/blog/blogSection/BlogSectionHeader'
import Layout from '../../component/layout/Layout'
import BlogSectionContent from '../../component/blog/blog/blogSection/BlogSectionContent'
import SocialMediaSection from '../../component/getStart/SocialMediaSection'

const Blog = () => {
  return (
    <>
    <Layout>
<BlogSectionHeader/>
<BlogSectionContent/>
<SocialMediaSection/>
    </Layout>
   
    
    </>
  )
}

export default Blog