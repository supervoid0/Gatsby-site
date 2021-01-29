import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

function index() {
  return (
    <Layout>
      <h1>
        This is a test
      </h1>
      <p>Check these..</p>
      <Link to="/Blog">Blog</Link>
    </Layout>
  )
}

export default index

