import React from 'react';
import { debounce } from '../utils/debounce';

const NavBar = ({ search, setSearch }: { search: string, setSearch: (newVal: string) => void }) => {

    const handleSearch = debounce((text: string) => {
        setSearch(text.toLocaleLowerCase())
    }, 1000)

    return (
        <div className="flex justify-center bg-[#123]">
            <div className="self-center top-0 w-full max-w-7xl ">
                <div className="flex justify-between items-center border-b border-white">
                    <div className="flex mx-2"> <a href="/" className="flex">
                        <div className="mx-2 my-4 text-2xl text-white hover:border-b border-white hover:font-bold font-medium">
                            Explore</div>
                    </a> </div>
                    <ul className="hidden md:flex items-center text-[18px] font-semibold pr-10">
                        <li className="text-white hover:border-b border-white hover:font-bold font-medium mx-4 my-1"><a
                            href="/">Home</a></li>
                        <li className="text-white hover:border-b border-white hover:font-bold font-medium mx-4 my-1"><a
                            href="/">About</a></li>
                        <li className="text-white hover:border-b border-white hover:font-bold font-medium mx-4 my-1"><a
                            href="/">Tour</a></li>
                        <li className="text-white hover:border-b border-white hover:font-bold font-medium mx-4 my-1"><a
                            href="/">Hotels</a></li>
                        <li className="text-white hover:border-b border-white hover:font-bold font-medium mx-4 my-1">Blog</li>
                        <li className="text-white hover:border-b border-white hover:font-bold font-medium mx-4 my-1"><a
                            href="/">Contact</a></li>
                        <li className="border-white font-medium mx-4 my-1">
                            {/* <ion-icon name="search" className="text-2xl mt-2"></ion-icon> */}
                            <input onChange={(e) => handleSearch(e.target.value)} placeholder='Search..' className='px-2 py-1 rounded-lg' />
                        </li>
                    </ul> <button className="block p-3 mx-10 md:hidden hover:bg-gray-200 rounded-xl group">
                        <div className="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
                        <div className="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
                        <div className="w-5 my-[3px] h-[3px] bg-gray-600"></div>
                        <div
                            className="absolute top-0 -right-full opacity-0 w-[60%] border bg-white group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                            <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                                <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"> <a
                                    href="/">Home</a> </li>
                                <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"> <a
                                    href="/">About</a> </li>
                                <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"> <a
                                    href="/">Tour</a> </li>
                                <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"> <a
                                    href="/">Hotels</a> </li>
                                <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"> <a
                                    href="/">Blog</a> </li>
                                <li className="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1"> <a
                                    href="/">Contact</a> </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
