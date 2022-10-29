/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {  XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from './navbar'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
            <div className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                <svg
                    className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <Popover>
                <div className="relative  pt-6 pb-6 px-5 sm:px-12 lg:px-3 bg-gray-600">
                    <Navbar navigation={navigation}  />
                </div>

                    <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div className="overflow-hidden rounded-lg bg-yellow-800 shadow-md ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center justify-between px-5 pt-4">
                            <div>
                            <img
                                className="h-8 w-auto"
                                src="https://res.cloudinary.com/dabysu4yd/image/upload/v1666402016/logo_ea3b5f272d.svg?updated_at=2022-10-22T01:26:57.535Z"
                                alt=""
                            />
                            </div>
                            <div className="-mr-2">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-yellow-600 p-2 text-yellow-400 hover:bg-yellow-100 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close main menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                            </div>
                        </div>
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-yellow-100 hover:bg-yellow-50 hover:text-yellow-900"
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        <a
                            href="#"
                            className="block w-full bg-gray-800 px-5 py-3 text-center font-medium text-yellow-100 hover:bg-gray-900"
                        >
                            Log in
                        </a>
                        </div>
                    </Popover.Panel>
                    </Transition>
                </Popover>

                <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">GuitarraLA la mejor tienda</span>{' '}
                        <span className="block text-yellow-500 xl:inline">de musica</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-8 py-3 text-base font-medium text-white hover:bg-yellow-700 md:py-4 md:px-10 md:text-lg"
                            >
                            Conocenos más
                        </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                            href="#"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-100 px-8 py-3 text-base font-medium text-yellow-700 hover:bg-yellow-400 md:py-4 md:px-10 md:text-lg"
                        >
                            Comprar mi guitarra
                        </a>
                        </div>
                    </div>
                    </div>
                </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                src="https://res.cloudinary.com/dabysu4yd/image/upload/v1666402016/header_2a3d58d564.jpg?updated_at=2022-10-22T01:26:56.884Z"
                alt=""
                />
            </div>

            </div>
  )
}
