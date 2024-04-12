'use client'

import { close, logo, menu } from "@/assets"
import { navLinks } from "@/constants"
import Image from 'next/image'
import { useState } from "react"

const Navbar = () => {

    const [toggle,setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <Image src={logo} alt="HooBank" className="w-[124px] h-[32px] cursor-pointer"/>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-20">
                {navLinks.map((links,index)=>
                     (
                        <li className="text-white text-[16px] font-normal font-poppins cursor-pointer" key={links.id}>
                            <a href={`#${links.id}`}>{links.title}</a>
                        </li>
                    ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <Image src={toggle ? close : menu} alt="Menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle((prev)=> !prev)}/>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1 gap-2">
                {navLinks.map((links,index)=>
                     (
                        <li className="text-white text-[16px] font-normal font-poppins cursor-pointer" key={links.id}>
                            <a href={`#${links.id}`}>{links.title}</a>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar