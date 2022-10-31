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
    <footer className='bg-red-500'>
        <div className='container flex flex-wrap mx-auto items-center'>
            <div className='w-3/4 '>
            <h1 className='flex-1'>Footer</h1>
            </div>
            <div className='flex flex-col p-5 space-y-1 w-1/4 items-end'>
            <h2 className='text-white font-bold  text-lg mr-2'>Menu</h2>
                {navigation.map(({name, href}) => (
                <Link
                key={name}
                href={href}>
                        <a
                            className={`block rounded-md px-3 py-2 text-base font-medium ease-in-out duration-300 hover:text-gray-100 text-yellow-500 hover:bg-yellow-500/25  items-end}`}
                            >
                            {name}
                        </a>
                    </Link>
                ))}
            </div>
            <div className='w-4/4 w-[100%] text-center  text-white py-2'>
                <p>
                    web hecha por pedro fernandez
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer