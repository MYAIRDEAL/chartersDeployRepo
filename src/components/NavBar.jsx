import React, { useState } from 'react';
import heroicon from '../assets/Logo.png';

import { Link } from 'react-router-dom';

function NavBar() {

    const [popUpMenu, setpopUpMenu] = useState(false)

    return (
        <nav className=' text-white'>
            <div className='flex items-center justify-between h-[5rem] px-4 md:px-8' id='navBar'>
                <div className='w-[13rem] h-[4rem]  flex items-center justify-center cursor-pointer'>
                    <Link to={'/'}>
                        {/* <img src={heroicon} alt="Logo" className='h-full object-contain' /> */}
                        <h1 className='text-[2rem] font-bold'>Book<span className='text-hoverColor'>Any</span>Jet</h1>
                    </Link>
                </div>
                <div className='md:hidden'>
                    <button className='text-white' onClick={() => {
                        if (popUpMenu === true) {
                            setpopUpMenu(false)
                        }
                        else {
                            setpopUpMenu(true)
                        }
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`hidden md:flex md:w-[35rem]`}>
                    <ul className='flex items-center font-semibold transition-all duration-200 justify-around flex-grow'>
                        <li className='hover:text-hoverColor cursor-pointer hover:scale-105 transition-all duration-200 '> <Link to={'/'}>Home</Link> </li>
                        <li className='hover:text-hoverColor cursor-pointer hover:scale-105 transition-all duration-200 '><Link to={'/aboutus'}>About Us</Link></li>
                        <li className='hover:text-hoverColor cursor-pointer hover:scale-105 transition-all duration-200 '> <Link to={'/services'} > Services </Link> </li>
                        <li className='hover:text-hoverColor cursor-pointer hover:scale-105 transition-all duration-200 '> <Link to={'/packages'}> Packages </Link> </li>
                        <li className='hover:text-hoverColor cursor-pointer hover:scale-105 transition-all duration-200 '> <Link to={'/blogs'}>Blogs</Link> </li>
                        <li className='hover:text-hoverColor cursor-pointer hover:scale-105 transition-all duration-200 '> <Link to={'/contactusmain/contactuspage'}>Contact Us</Link> </li>
                    </ul>
                </div>

                {/* Enquire Button */}
                <div className='border sm:flex hidden rounded-md border-hoverColor transition-transform transform duration-500 ease-in-out hover:scale-110 h-[3rem]  items-center justify-center text-hoverColor w-[10rem] hover:bg-hoverColor hover:text-white'>
                    <button>
                        <Link to={'/contactusmain/contactuspage'}>ENQUIRE NOW</Link>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden  ${popUpMenu ? '' : 'hidden'}`}>
                <div className='flex flex-col items-center py-4 space-y-4 bg-black'>
                    <ul className='space-y-2'>
                        <li className='hover:text-hoverColor cursor-pointer'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='hover:text-hoverColor cursor-pointer'>
                            <Link to={'/aboutus'}>About Us</Link>
                        </li>
                        <li className='hover:text-hoverColor cursor-pointer'>
                            <Link to={'/services'} > Services </Link>
                        </li>
                        <li className='hover:text-hoverColor cursor-pointer'>
                            <Link to={'/packages'}> Packages </Link>
                        </li>
                        <li className='hover:text-hoverColor cursor-pointer'>
                            <Link to={'/blogs'}>Blogs</Link>
                        </li>
                        <li className='hover:text-hoverColor cursor-pointer'>
                            <Link to={`/contactusmain/contactuspage`} >Contact Us</Link>
                        </li>
                    </ul>

                    <div className='border rounded-md border-hoverColor transition-transform transform duration-500 ease-in-out hover:scale-110 h-[3rem] flex items-center justify-center text-hoverColor w-[10rem] hover:bg-hoverColor hover:text-white'>
                        <Link to={`/contactusmain/contactuspage`}>
                            <button>
                                ENQUIRE NOW
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
