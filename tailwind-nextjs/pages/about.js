import Layout from '../components/layout'
import NavBar from '../components/layout/navbar'

const page = {
    title: 'About',
    description: ''
  }
  
  const { title, description } = page

const About = () => {
  return (
    <Layout
    title={title}
    description={description}
    >
        <h1 className="text-2xl mt-2 ml-5 uppercase font-bold">
            About
        </h1>
    </Layout>
  )
}

export default About