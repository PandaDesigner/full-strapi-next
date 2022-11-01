import React from 'react'
import Layout from '../components/layout'

const page = {
    title: 'Contact',
    description: ''
  }
  
  const { title, description } = page

const Contact = () => {
  return (
    <Layout
    title={title}
    description={description}
    >
        <h1 className="text-3xl uppercase font-bold text-center">Contact</h1>
    </Layout>
  )
}

export default Contact