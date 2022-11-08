import Layout from '../components/layout'
import Guitarra from '../components/guitarra'


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
      <div tabindex="0" class="focus:outline-none">
      <div class="mx-auto container py-8">
        <div class="flex flex-wrap items-center lg:justify-between justify-center">
      {guitarra.map(guitarra =>(
        <Guitarra
        key={guitarra.id}
        guitarra={guitarra.attributes}
        />
      )
)}
      </div>
    </div>
  </div>
    </main>
    </Layout>
  )
}

export default VirtualShop;

export async function getStaticProps(){

  const resp = await fetch(`${process.env.API_URL}/guitarras/?populate=*`)
  const { data:guitarra } = await resp.json()
  return {
     props:{
      guitarra
     }
  }
}

/* 
export async function getServerSideProps(){

  const res = await fetch(`${process.env.API_URL}/guitarras/?populate=*`)
  const { data:guitarra } = await res.json()
  return {
     props:{
      guitarra
     }
  }

}
 */

