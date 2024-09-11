import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaRegNewspaper } from "react-icons/fa";
import { AiTwotoneMessage } from "react-icons/ai";

import couples from '../../assets/G-5.jpg'
import lady from '../../assets/F-9.jpg'
import sofa from '../../assets/F-20.jpg'
import TellUs from '../../components/TellUs';

import AirportCount from '../../components/AssertsCount';

function BlogContent() {
    return (

        <div className='bg-white'>

            <div className=' flex flex-col items-center'>
                <h3 className='text-hoverColor tracking-[0.3rem] m-5'>OUR LOG</h3>
                <h1 className='text-[2.5rem]'>Latest Blog</h1>
                <p className='md:w-[50%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non faucibus congue, lectus quam viverra nulla, quis egestas neque sapien ac magna.
                </p>
            </div>

            <div className='mb-[10rem] flex flex-wrap justify-around items-center'>

                <div className='w-[28rem] h-[40rem] flex justify-around  rounded-xl flex-col  m-4  shadow-lg p-3 '>
                    <div className='m-3 hover:rotate-6 transition-all cursor-pointer duration-500'>
                        <img src={couples} alt="" />
                    </div>
                    <div className='flex m-3 justify-around'>
                        <div className='flex m-3 gap-2'>
                            <SlCalender className='text-hoverColor w-6 h-6' />
                            <p> May 13, 2022</p>
                        </div>
                        <div className='flex m-3 gap-2'>
                            <FaRegNewspaper className='text-hoverColor w-6 h-6' />
                            <p> News</p>
                        </div>
                        <div className='flex m-3 gap-2'>
                            <AiTwotoneMessage className='text-hoverColor w-6 h-6' />
                            <p> 0 </p>
                        </div>
                    </div>
                    <div className='m-3'>
                        <h1 className='text-[1.3rem]'>Thinking of a Trip to Asia this…</h1>
                        <p className='text-[1.1rem] text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in felis tempor, facilisis mauris quis, volutpat mauris.
                        </p>
                    </div>


                </div>


                <div className='w-[28rem] h-[40rem] flex justify-around  rounded-xl flex-col  m-4  shadow-lg p-3 '>
                    <div className='m-3 hover:rotate-6 transition-all cursor-pointer duration-500'>
                        <img src={lady} alt="" />
                    </div>
                    <div className='flex m-3 justify-around'>
                        <div className='flex m-3 gap-2'>
                            <SlCalender className='text-hoverColor w-6 h-6' />
                            <p> May 13, 2022</p>
                        </div>
                        <div className='flex m-3 gap-2'>
                            <FaRegNewspaper className='text-hoverColor w-6 h-6' />
                            <p> News</p>
                        </div>
                        <div className='flex m-3 gap-2'>
                            <AiTwotoneMessage className='text-hoverColor w-6 h-6' />
                            <p> 0 </p>
                        </div>
                    </div>
                    <div className='m-3'>
                        <h1 className='text-[1.3rem]'> This new tech makes your prop plane… </h1>
                        <p className='text-[1.1rem] text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in felis tempor, facilisis mauris quis, volutpat mauris.
                        </p>
                    </div>


                </div>


                <div className='w-[28rem] h-[40rem] flex justify-around  rounded-xl flex-col   m-4  shadow-lg p-3 '>
                    <div className='m-3 hover:rotate-6 transition-all cursor-pointer duration-500'>
                        <img src={sofa} alt="" />
                    </div>
                    <div className='flex m-3 justify-around'>
                        <div className='flex m-3 gap-2'>
                            <SlCalender className='text-hoverColor w-6 h-6' />
                            <p> May 13, 2022</p>
                        </div>
                        <div className='flex m-3 gap-2'>
                            <FaRegNewspaper className='text-hoverColor w-6 h-6' />
                            <p> News</p>
                        </div>
                        <div className='flex m-3 gap-2'>
                            <AiTwotoneMessage className='text-hoverColor w-6 h-6' />
                            <p> 0 </p>
                        </div>
                    </div>
                    <div className='m-3'>
                        <h1 className='text-[1.3rem]'> Working As a Chef on a Private… </h1>
                        <p className='text-[1.1rem] text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in felis tempor, facilisis mauris quis, volutpat mauris.
                        </p>
                    </div>
                </div>


            </div>

            <AirportCount />
            <TellUs />
        </div>

    )
}

export default BlogContent