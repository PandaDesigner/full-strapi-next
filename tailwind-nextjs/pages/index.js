import Layout from "../components/layout";


const page = {
  title: 'Home',
  description: 'Pagina especializada en la distribucion de instrumentos musicales de la mejor calidad'
}

const { title, description } = page

const  Home = () => {
  return (
    <>
    <Layout
    title={title}
    description={description}
    >
      <h1 className="text-2xl mt-2 ml-5 uppercase font-bold">desde Home</h1>

    </Layout>

    </>
  )
}

export default Home
