import Link from "next/link"

const BtnMenu = (props) => {
    const {navigation: navigation} = props
    return (
      <>
      <div className="space-y-1 px-2 pt-2 pb-3 flex flex-row items-center">
                              {navigation.map(({name, href}) => (
                                <Link
                                  key={name}
                                  href={href}>
                                    <a
                                        className="block rounded-md px-3 py-2 text-base font-medium text-indigo-50 hover:bg-indigo-50 hover:text-indigo-500"
                                        >
                                        {name}
                                    </a>
                                </Link>
                              ))}
                          </div>
      </>
    )
  }
  
  export default BtnMenu