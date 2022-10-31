import React from 'react'
import Layout from '../components/layout'

const page = {
    title: 'Virtual Shop',
    description: ''
  }
  
  const { title, description } = page

const VirtualShop = () => {
  return (
    <Layout
    title={title}
    description={description}
    >
    <h1 className="text-2xl mt-2 ml-5 uppercase font-bold">VirtualShop</h1>
    </Layout>
  )
}

export default VirtualShop