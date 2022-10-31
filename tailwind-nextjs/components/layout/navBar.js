import Image from 'next/image'
import React from 'react'
import Logo from '../../public/img/logo.svg'
import BtnMenu from './btnMenu'
import { useRouter } from "next/router"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Virtual Shop', href: '/virtualShop' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' }
];

const NavBar = () => {

  const router = useRouter()
  const { pathname } = router

  return (
    <header className={`bg-[url('https://res.cloudinary.com/dabysu4yd/image/upload/v1666402016/header_2a3d58d564.jpg?updated_at=2022-10-22T01:26:56.884Z')]  bg-cover bg-center` }>
        <nav className={`py-[5rem] bg-gradient-to-r from-zinc-900/[.5] to-zinc-900/[.9]`}>
          <div className={`container flex items-center mx-auto flex-grow justify-between flex-col md:flex-row `}>
            <Image src={Logo} className='md:w-1/2 md:flex-1 md:mb-4' width={250} height={80} alt='Logo' />
            <BtnMenu navigation={navigation} pathname={pathname} className='md:flex-auto'/>
          </div>
        </nav>
    </header>
  )
}

export default NavBar