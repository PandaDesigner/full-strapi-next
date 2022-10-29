import Hero from "../components/hero";
import Header from "../components/header"
import Homes from "../components/layout/homes";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const  Home = () => {
  return (
    <>
    <Homes navigation={navigation}/>
      {/* <Header/> */}
    </>
  )
}

export default Home
