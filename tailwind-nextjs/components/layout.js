import Head from 'next/head'
import Footer from './layout/footer'
import NavBar from './layout/navbar'

const Layout = ({children, title = '', description = ''}) => {
 return (<>
              <Head>
                <title> {`GuitarraLA - ${title}`} </title>
                <meta name='description' content={description} />
              </Head>
            <NavBar/>
            <div className={`container mx-auto`}>
            {children}
            </div>
            <Footer/>
        </>)
}

export default Layout