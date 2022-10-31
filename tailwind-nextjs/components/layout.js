
import Head from 'next/head'
import NavBar from './layout/navbar'

const Layout = ({children, title = '', description = ''}) => {
 return (<>

    <Head>
      <title> {`GuitarraLA - ${title}`} </title>
      <meta name='description' content={description} />

    </Head>
    <NavBar/>

    {children}

 </>)
}

export default Layout