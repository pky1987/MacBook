import React from 'react'
import { navLinks } from '../../constant'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
        <a href='#home' className='flex items-center gap-2'>
            <img src="/logo.svg" alt="logo"/></a>
            <ul className="flex gap-4">
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={`#${item.label.toLowerCase()}`}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className='flex items-center gap-3'>
                <button>
                    <img src="/search.svg" alt="Search"/>
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart"/>
                </button>
            </div>
    </nav>
  )
}

export default Navbar
