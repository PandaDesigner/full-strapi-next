import { Container } from '@mui/material'
import Head from 'next/head'
import NavBar from './navBar'


const Layout = ({children, title = '', description = ''}) => {
  return (
    <>
    <Head>
      <title>{`GuitarraLA - ${title}`}</title>
      <meta name='description' content={description}></meta>
    </Head>
    <Container maxWidth='xl' >
    <NavBar/>
        {children}
    </Container>
    </>
  )
}

export default Layout