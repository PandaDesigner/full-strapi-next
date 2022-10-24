import { Popover } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'


const Navbar = (props) => {
    const { navigation } = props
  return (
        <>
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                        <div className="flex w-full items-center justify-between md:w-auto">
                            <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt="Your Company"
                                className="h-8 w-auto sm:h-10"
                                src="https://res.cloudinary.com/dabysu4yd/image/upload/v1666402016/logo_ea3b5f272d.svg?updated_at=2022-10-22T01:26:57.535Z"
                            />
                            </a>
                            <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                            </div>
                        </div>
                        </div>
                        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-900">
                            {item.name}
                            </a>
                        ))}
                        <a href="#" className="font-medium text-white hover:text-indigo-500">
                            Log in
                        </a>
                        </div>
                    </nav>
        </>
  )
}

export default Navbar