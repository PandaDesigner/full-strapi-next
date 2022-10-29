import React from 'react'

const Navbar = (props) => {
  const {navigation} = props
  return (
    <>
    <div className="space-y-1 px-2 pt-2 pb-3 flex flex-row items-center">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-indigo-50 hover:bg-indigo-50 hover:text-indigo-500"
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
    </>
  )
}

export default Navbar