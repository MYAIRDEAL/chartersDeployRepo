import React from 'react'

import building from '../../assets/F-11.jpg'
import light from '../../assets/F-10.jpg'

import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";


function OurPackage() {
    return (

        <div className='h-[220vh] 700:h-[240vh]  900:h-[100vh] 1024:h-[100vh] w-[100%] bg-white flex flex-wrap justify-around items-center'>

            <div className=' w-[30rem] 900:h-auto 700:h-[30vh] mb-10 md:p-10 p-7'>
                <h1 className='text-hoverColor text-[1.2rem] tracking-[0.3rem]' >OUR PACKAGES</h1>
                <p className='md:text-[3.5rem] text-[2rem]'>
                    We Have Best Luxury Packages For You
                </p>
                <p className='text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non faucibus congue, lectus quam viverra nulla.
                </p>
                <button className=' bg-hoverColor text-white rounded-lg text-[1.2rem] p-4 tracking-widest'>
                    VIEW PACKAGES
                </button>
            </div>

            <div className=' flex'>

                <div className=' text-white md:w-[28rem] w-[22.5rem] h-[85vh] 700:h-[85vh] mb-4 900:h-auto 1024:h-[85vh] md:rounded-xl bg-cover bg-center
                flex flex-col justify-end' style={{
                        background: ` linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${building})`
                    }} >

                    <div className=' h-[50vh] flex flex-col justify-around p-10'>
                        <div>
                            <h1 className='text-[1.5rem]'>
                                Modern glamour in Boston
                            </h1>
                            <p className='text-[1.1rem] w-[20rem]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className='gap-3 grid'>
                            <div className='flex items-center'>

                                <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor' />
                                <li className='pl-3 flex text-[1.1rem]'>
                                    Nulla at maximus leo non molestie diam.
                                </li>z
                            </div>
                            <div className='flex items-center '>
                                <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor ' />
                                <li className=' pl-3 flex text-[1.1rem]'>
                                    Suspendisse auctor felis ipsum.
                                </li>
                            </div>
                            <div className='flex items-center ' >
                                <FaCircleCheck className='h-[1.1rem] w-[1.1rem]  text-hoverColor' />
                                <li className='pl-3 flex text-[1.1rem]'>
                                    Donec sit amet dui.
                                </li>
                            </div>
                        </div>
                        <div className='flex justify-between h-[2.5rem] items-center cursor-pointer text-hoverColor'>
                            <div className='flex cursor-pointer  hover:scale-110 transition-all duration-700 items-center'>
                                <MdOutlineKeyboardArrowRight className='text-[1.5rem]' />
                                <button className='text-[1.4rem]'>BOOK NOW</button>
                            </div>
                            <div className='border-2 hover:bg-black hover:text-white hover:scale-110 transition-all duration-700 h-[100%] cursor-pointer w-[2.5rem] flex items-center justify-center rounded-full border-hoverColor'>
                                <FaPlay />
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className=' flex'>

                <div className=' text-white md:w-[28rem] w-[22.5rem] h-[85vh] 700:h-[85vh] 900:h-auto 1024:h-[85vh] md:rounded-xl bg-cover bg-center
                flex flex-col justify-end' style={{
                        background: ` linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${light})`
                    }} >


                    <div className=' h-[50vh] flex flex-col justify-around p-10'>
                        <div>
                            <h1 className='text-[1.5rem]'>
                                Modern glamour in Boston
                            </h1>
                            <p className='text-[1.1rem] w-[20rem]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className='gap-3 grid'>
                            <div className='flex items-center'>

                                <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor' />
                                <li className='pl-3 flex text-[1.1rem]'>
                                    Nulla at maximus leo non molestie diam.
                                </li>
                            </div>
                            <div className='flex items-center '>
                                <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor ' />
                                <li className=' pl-3 flex text-[1.1rem]'>
                                    Suspendisse auctor felis ipsum.
                                </li>
                            </div>
                            <div className='flex items-center ' >
                                <FaCircleCheck className='h-[1.1rem] w-[1.1rem]  text-hoverColor' />
                                <li className='pl-3 flex text-[1.1rem]'>
                                    Donec sit amet dui.
                                </li>
                            </div>
                        </div>

                        <div className='flex justify-between h-[2.5rem] items-center  text-hoverColor'>
                            <div className='flex items-center  hover:scale-110 transition-all duration-700 cursor-pointer'>
                                <MdOutlineKeyboardArrowRight className='text-[1.5rem]' />
                                <button className='text-[1.4rem]'>BOOK NOW</button>
                            </div>
                            <div className='border-2 cursor-pointer  hover:bg-black hover:text-white hover:scale-110 transition-all duration-700 h-[100%] w-[2.5rem] flex items-center justify-center rounded-full border-hoverColor'>
                                <FaPlay />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default OurPackage