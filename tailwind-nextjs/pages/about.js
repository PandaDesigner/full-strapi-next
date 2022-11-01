import Image from 'next/future/image'
import Layout from '../components/layout'
import NavBar from '../components/layout/navbar'

const page = {
    title: 'About',
    description: 'Sobre nosotros somos la mejor Tienda de Guitarra'
  }
  
  const { title, description } = page

const About = () => {
  return (
    <Layout
    title={title}
    description={description}
    >
      <main className='container p-[2rem]'>
        <h1 className="text-3xl uppercase font-bold text-center text-yellow-500 mb-5">
            About
        </h1>
        <div className='grid gap-8 md:grid-cols-2 items-center'>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros' className='self-stretch'/>
          <div>
            <p>
              Laboris quis esse duis cillum duis deserunt quis occaecat qui nulla. Incididunt cupidatat consequat est amet sit aliquip non laborum ut. Eu officia veniam sit amet commodo consectetur excepteur ad ex. Aute qui occaecat magna veniam esse excepteur tempor ex. Laboris quis esse duis cillum duis deserunt quis occaecat qui nulla. Incididunt cupidatat consequat est amet sit aliquip non laborum ut. Eu officia veniam sit amet commodo consectetur excepteur ad ex. Aute qui occaecat magna veniam esse excepteur tempor ex laboris quis esse duis cillum duis deserunt quis occaecat qui nulla. Incididunt cupidatat consequat est amet sit aliquip non laborum ut. Eu officia veniam sit amet commodo consectetur excepteur ad ex. Aute qui occaecat magna veniam Aute qui occaecat magna veniam esse excepteur tempor ex.
            </p>
            <br/>
            <p>
              Laboris quis esse duis cillum duis deserunt quis occaecat qui nulla. Incididunt cupidatat consequat est amet sit aliquip non laborum ut. Eu officia veniam sit amet commodo consectetur excepteur ad ex. Aute qui occaecat magna veniam esse excepteur tempor ex. Laboris quis esse duis cillum duis deserunt quis occaecat qui nulla. Incididunt cupidatat consequat est amet sit aliquip non laborum ut. Eu officia veniam sit amet commodo consectetur excepteur ad ex. Aute qui occaecat magna veniam esse excepteur tempor ex laboris quis esse duis cillum duis deserunt quis occaecat qui nulla. Incididunt cupidatat consequat est amet sit aliquip non laborum ut.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About