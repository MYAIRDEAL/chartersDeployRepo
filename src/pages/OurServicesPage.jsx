import React from 'react'
import PageBanner from '../components/PageBanner'

import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaTruckDroplet } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";


import AirportCount from '../components/AssertsCount';
import LearnMore from '../components/LearnMore';
import TellUs from '../components/TellUs';


function OurServicesPage() {
    return (

        <div className='bg-white '>


            <PageBanner data={'Our Services'} />

            {/* Section Two */}


            <div className='  flex  flex-col items-center justify-evenly'>
                <div className=' md:h-[20rem] h-[28rem] w-[100%]  flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='text-hoverColor tracking-[0.3rem] m-3'>
                            OUR SERVICES
                        </h1>
                    </div>
                    <div>
                        <h1 className='text-[3.5vw] m-3'>
                            We Have Best Luxury Services For You
                        </h1>
                    </div>
                    <div className='m-3 md:w-[50rem] text-center'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quo ab modi necessitatibus ipsam fugiat quis? Ipsam, dolorem sunt repudiandae, culpa ea, esse quibusdam reiciendis consequuntur reprehenderit quis aliquam aperiam! Nostrum laborum laboriosam alias.
                        </p>
                    </div>

                </div>

                <div className='  375:w-full flex flex-wrap items-center  rounded-md  justify-around' >

                    <div className=' hover:bg-hoverColor text-white  cursor-pointer transition-all duration-500 h-[16rem] md:w-[23rem] m-3 rounded-md'>

                        <div>
                            <FaPaperPlane className=' w-[3rem] h-[3rem] m-3 text-hoverColor' />
                        </div>
                        <div>
                            <h1 className='text-xl m-6 text-black'>Private Jet Charter</h1>
                            <p className='text-lg m-6 text-gray-500'>
                                We bring the right people together to challenge established thinking and drive transform in 2020
                            </p>
                        </div>
                    </div>

                    <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500 h-[16rem] md:w-[23rem] m-3  rounded-md'>
                        <div>
                            <CiStar className='w-[3rem] h-[3rem] m-3 text-hoverColor' />
                        </div>
                        <div>
                            <h1 className='text-xl m-6 text-black'>Private Jet Charter</h1>
                            <p className='text-lg m-6 text-gray-500'>
                                We bring the right people together to challenge established thinking and drive transform in 2020
                            </p>
                        </div>
                    </div>


                    <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500  h-[16rem] md:w-[23rem] m-3 rounded-md'>
                        <div>
                            <MdOutlineSettingsSuggest className='text-hoverColor  w-[3rem] h-[3rem] m-3' />
                        </div>
                        <div>
                            <h1 className='text-xl m-6 text-black'>Private Jet Charter</h1>
                            <p className='text-lg m-6 text-gray-500'>
                                We bring the right people together to challenge established thinking and drive transform in 2020
                            </p>
                        </div>
                    </div>


                    <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500  h-[16rem] md:w-[23rem] m-3 rounded-md'>
                        <div>
                            <FaTruckDroplet className='text-hoverColor  w-[3rem] h-[3rem] m-3' />
                        </div>
                        <div>
                            <h1 className='text-xl m-6 text-black'>Private Jet Charter</h1>
                            <p className='text-lg m-6 text-gray-500'>
                                We bring the right people together to challenge established thinking and drive transform in 2020
                            </p>
                        </div>
                    </div>


                    <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500 h-[16rem] md:w-[23rem] m-3  rounded-md'>
                        <div>
                            <CgProfile className='text-hoverColor  w-[3rem] h-[3rem] m-3' />
                        </div>
                        <div>
                            <h1 className='text-xl m-6 text-black'>Private Jet Charter</h1>
                            <p className='text-lg m-6 text-gray-500'>
                                We bring the right people together to challenge established thinking and drive transform in 2020
                            </p>
                        </div>
                    </div>

                    

                    <div className='hover:bg-hoverColor  text-white cursor-pointer transition-all duration-500 h-[16rem] md:w-[23rem] m-3  rounded-md'>
                        <div>
                            <FaCarAlt className=' text-hoverColor w-[3rem] h-[3rem] m-3' />
                        </div>
                        <div>
                            <h1 className='text-xl m-6 text-black'>Private Jet Charter</h1>
                            <p className='text-lg m-6 text-gray-500'>
                                We bring the right people together to challenge established thinking and drive transform in 2020
                            </p>
                        </div>
                    </div>



                </div>

            </div>


            {/* Section Two Ended */}

            <AirportCount/>

            <LearnMore/>

            <TellUs/>




        </div>

    )
}

export default OurServicesPage