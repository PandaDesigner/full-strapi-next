import Image from 'next/image'
import React from 'react'
import Navbar from './navBar'
import Logo from '../../public/img/logo.svg'



const Homes = (props) => {
const {navigation} = props
  return (
    <>
    <nav className="bg-indigo-500">
    <div className='container flex items-center mx-auto flex-grow justify-between'>
    <Image src={Logo} className='w-1/2 flex-1' width={150} height={80} alt='Logo' />
    <Navbar navigation={navigation} className='flex-auto'/>

    </div>

    </nav>

    </>
  )
}

export default Homes