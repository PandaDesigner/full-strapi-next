import Link from 'next/link'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Virtual Shop', href: '/virtualShop' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

const Footer = () => {
  return (
    <footer className='bg-slate-900'>
        <div className='container flex flex-wrap flex-col md:flex-row-reverse justify-between mx-auto items-center'>
            <div className='justify-center text-center md:text-left'>
            <p className='text-white py-5'>
                Todos los derechos Reservados {new Date().getFullYear()}
            </p>
            </div>
            <div className='flex flex-wrap p-5 justify-between'>
            {/* <h2 className='text-white font-bold  text-lg mr-2'>Menu</h2> */}
                {navigation.map(({name, href}) => (
                <Link
                key={name}
                href={href}>
                        <a
                            className={`block rounded-md px-3 py-1 text-base font-medium ease-in-out duration-300 hover:text-yellow-300 text-slate-100 items-end}`}
                            >
                            {name}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer