import React from 'react'
import Layout from '../components/layout'

const page = {
    title: 'Blogs',
    description: ''
  }
  
  const { title, description } = page

const Blogs = () => {
  return (
    <Layout
    title={title}
    description={description}
    >
        <div className='container'>
        <h1 className="text-2xl mt-2 ml-5 uppercase font-bold">{title}</h1>
        </div>
    </Layout>
  )
}

export default Blogs