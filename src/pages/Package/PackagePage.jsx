import React from 'react';
import building from '../../assets/F-11.jpg';
import light from '../../assets/F-10.jpg';

import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import PageBanner from '../../components/PageBanner';

function PackagePage() {
    return (
        <div>
            <PageBanner data={'Flights Packages'} />

            {/* Second Section */}
            <div className='h-auto w-full flex bg-white flex-wrap justify-around items-center py-10'>
                <div className='w-full md:w-[30rem]  mb-10 md:p-10 p-7 text-center md:text-left'>
                    <h1 className='text-hoverColor  text-[1.2rem] tracking-[0.3rem]'>OUR PACKAGES</h1>
                    <p className='md:text-[3.5rem] text-[2rem] mt-2'>
                        We Have Best Luxury Packages For You
                    </p>
                    <p className='text-gray-400 mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non faucibus congue, lectus quam viverra nulla.
                    </p>
                    <button className='bg-hoverColor text-white rounded-lg text-[1.2rem] p-4 tracking-widest mt-4'>
                        VIEW PACKAGES
                    </button>
                </div>

                <div  >
                    <div className='flex flex-wrap justify-center w-full  lg:w-[30rem] mb-4'>
                    <div className='text-white w-full h-auto md:h-auto md:rounded-xl bg-cover bg-center flex flex-col justify-end'
                        style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${building})`
                        }}>
                        <div className='h-auto flex flex-col justify-around p-6 md:p-10'>
                            <div>
                                <h1 className='text-[1.5rem]'>
                                    Modern glamour in Boston
                                </h1>
                                <p className='text-[1.1rem] w-full md:w-[20rem]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>

                            <div className='gap-3 grid'>
                                <div className='flex items-center'>
                                    <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor' />
                                    <li className='pl-3 text-[1.1rem]'>
                                        Nulla at maximus leo non molestie diam.
                                    </li>
                                </div>
                                <div className='flex items-center'>
                                    <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor' />
                                    <li className='pl-3 text-[1.1rem]'>
                                        Suspendisse auctor felis ipsum.
                                    </li>
                                </div>
                                <div className='flex items-center'>
                                    <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor' />
                                    <li className='pl-3 text-[1.1rem]'>
                                        Donec sit amet dui.
                                    </li>
                                </div>
                            </div>

                            <div className='flex justify-between items-center mt-4 cursor-pointer text-hoverColor'>
                                <div className='flex items-center hover:scale-110 transition-all duration-700'>
                                    <MdOutlineKeyboardArrowRight className='text-[1.5rem]' />
                                    <button className='text-[1.4rem]'>BOOK NOW</button>
                                </div>
                                <div className='border-2 hover:bg-black hover:text-white hover:scale-110 transition-all duration-700 h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full border-hoverColor'>
                                    <FaPlay />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center w-full lg:w-[30rem]'>
                    <div className='text-white w-full h-auto  md:h-auto md:rounded-xl bg-cover bg-center flex flex-col justify-end'
                        style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${light})`
                        }}>
                        <div className='h-auto flex flex-col justify-around p-6 md:p-10'>
                            <div>
                                <h1 className='text-[1.5rem]'>
                                    Modern glamour in Boston
                                </h1>
                                <p className='text-[1.1rem] w-full md:w-[20rem]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>

                            <div className='gap-3 grid'>
                                <div className='flex items-center'>
                                    <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor' />
                                    <li className='pl-3 text-[1.1rem]'>
                                        Nulla at maximus leo non molestie diam.
                                    </li>
                                </div>
                                <div className='flex items-center'>
                                    <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor' />
                                    <li className='pl-3 text-[1.1rem]'>
                                        Suspendisse auctor felis ipsum.
                                    </li>
                                </div>
                                <div className='flex items-center'>
                                    <FaCircleCheck className='h-[1.1rem] w-[1.1rem] text-hoverColor' />
                                    <li className='pl-3 text-[1.1rem]'>
                                        Donec sit amet dui.
                                    </li>
                                </div>
                            </div>

                            <div className='flex justify-between items-center mt-4 cursor-pointer text-hoverColor'>
                                <div className='flex items-center hover:scale-110 transition-all duration-700'>
                                    <MdOutlineKeyboardArrowRight className='text-[1.5rem]' />
                                    <button className='text-[1.4rem]'>BOOK NOW</button>
                                </div>
                                <div className='border-2 hover:bg-black hover:text-white hover:scale-110 transition-all duration-700 h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full border-hoverColor'>
                                    <FaPlay />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
            {/* Second Section Ends */}
        </div>
    )
}

export default PackagePage;
