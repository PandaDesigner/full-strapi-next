import React from 'react'
import Layout from '../components/layout'
import ListadoGuitarra from '../components/listado-guitarra'


const page = {
    title: 'Virtual Shop',
    description: ''
  }
  
  const { title, description } = page

const VirtualShop = ({guitarra}) => {

  console.log(guitarra);
  return (
    <Layout
    title={title}
    description={description}
    >
    <main className='container p-[2rem]'>
      <h1 className="text-3xl uppercase font-bold text-center text-yellow-500 mb-5">Nuestra Colección</h1>

      <ListadoGuitarra/>

    </main>
    </Layout>
  )
}

export default VirtualShop;

export async function getStaticProps(){

  const res = await fetch(`${process.env.API_URL}/guitarras/?populate=*`)
  const { data:guitarra } = await res.json()
  return {
     props:{
      guitarra
     }
  }

}


