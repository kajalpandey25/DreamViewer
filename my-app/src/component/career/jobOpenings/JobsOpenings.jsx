import React from 'react'
import Layout from '../../layout/Layout'
import JobsHeader from './JobsHeader'
import JobsForm from './JobsForm'

const JobOpenings = () => {
  return (
    <>
        <Layout>
            <JobsHeader/>
            <JobsForm/>
        </Layout>
    </>
  )
}

export default JobOpenings