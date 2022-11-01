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
      <h1 className="text-3xl uppercase font-bold text-center text-yellow-500">desde Home</h1>

    </Layout>

    </>
  )
}

export default Home
