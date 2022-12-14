import Link from "next/link"


const Guitarra = ({guitarra}) => {

const { nombre, descriccion, imagen, precio, url } = guitarra,
    acortarText = (item) => item.split(' ').slice(0,15).join(' ').toString();

    return (<>
           {/*  <!-- Card 1 --> */}
                    <Link href={url}>
                    <div tabindex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 cursor-pointer">
                        <div>
                            <img alt="person capturing an image" src={imagen.data.attributes.url} tabindex="0" className="focus:outline-none h-[25] bg-cover bg-center" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">{`$ ${precio}` }</p>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="flex items-center">
                                    <h2 tabindex="0" className="focus:outline-none text-lg font-semibold">{ nombre }</h2>
                                    <p tabindex="0" className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                                </div>
                                <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2">{ acortarText(descriccion) }</p>
                                
                                <div className="flex items-center justify-between py-4">
                                    <h2 tabindex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">
                                        {`ir a ${nombre}`}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 1 Ends --> */}
                    </Link>
                    </>
  )
}

export default Guitarra



