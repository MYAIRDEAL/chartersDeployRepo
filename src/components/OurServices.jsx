import React from 'react'

import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaTruckDroplet } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


import imag from '../assets/F-2.jpg'
import { Link } from 'react-router-dom';
function OurServices() {
    return (
        <div className=' flex items-center  py-[4rem] bg-white justify-around flex-wrap  flex-row '>
            <div className='  h-[28rem]  flex flex-col  justify-center min-w-[20rem] w-[30%]   1367:w-[30%] 1487:w-[30%]'>
                <div>
                    <h1 className='text-hoverColor m-3'>
                        OUR SERVICES
                    </h1>
                </div>
                <div>
                    <h1 className='text-[2.5vw] m-3'>
                        We Have Best Luxury Services For You
                    </h1>
                </div>
                <div className='m-3'>
                    <p className='text-[0.9rem]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quo ab modi necessitatibus ipsam fugiat quis? Ipsam, dolorem sunt repudiandae, culpa ea, esse quibusdam reiciendis consequuntur reprehenderit quis aliquam aperiam! Nostrum laborum laboriosam alias.
                    </p>
                </div>

                <Link to={'/services'}>

                    <button className='border transition-all hover:scale-105 duration-500 m-3 text-white outline-none border-none rounded-md bg-hoverColor w-[10rem] h-[3rem]'>VIEW SERVICES</button>

                </Link>

            </div>

            <div className=' flex flex-wrap w-full md:w-[60%] items-center py-10  bg-cover md:rounded-md  justify-around' style={{
                backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),  url(${imag})`
            }}>

                <div className=' hover:bg-hoverColor text-white  cursor-pointer transition-all duration-500 h-[15rem] md:w-[21rem] m-3 rounded-md'>

                    <div>
                        <FaPaperPlane className=' 375:w-[2rem] 375:h-[2rem] 380:w-[2.3rem] 380:h-[3rem] m-3' />
                    </div>
                    <div>
                        <h1 className='380:text-[1.3rem] m-6'>Private Jet Charter</h1>
                        <p className='text-[1rem] m-6'>
                            We bring the right people together to challenge established thinking and drive transform in 2020
                        </p>
                    </div>
                </div>


                <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500 h-[15rem] md:w-[21rem] m-3 rounded-md'>
                    <div>
                        <MdOutlineSettingsSuggest className=' 375:w-[2rem] 375:h-[2rem] 380:w-[2.3rem] 380:h-[3rem] m-3' />
                    </div>
                    <div>
                        <h1 className='380:text-[1.3rem] m-6'>Private Jet Charter</h1>
                        <p className='text-[1rem] m-6'>
                            We bring the right people together to challenge established thinking and drive transform in 2020
                        </p>
                    </div>
                </div>


                <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500  h-[15rem] md:w-[21rem] m-3 rounded-md'>
                    <div>
                        <FaTruckDroplet className=' 375:w-[2rem] 375:h-[2rem] 380:w-[2.3rem] 380:h-[3rem] m-3' />
                    </div>
                    <div>
                        <h1 className='380:text-[1.3rem] m-6'>Private Helicopter</h1>
                        <p className='text-[1rem] m-6'>
                            We bring the right people together to challenge established thinking and drive transform in 2020
                        </p>
                    </div>
                </div>


                <div className='hover:bg-hoverColor text-white cursor-pointer transition-all duration-500 h-[15rem] md:w-[21rem] m-3  rounded-md'>
                    <div>
                        <CgProfile className=' 375:w-[2rem] 375:h-[2rem] 380:w-[2.3rem] 380:h-[3rem] m-3' />
                    </div>
                    <div>
                        <h1 className='380:text-[1.3rem] m-6'>Private Ambulance</h1>
                        <p className='text-[1rem] m-6'>
                            We bring the right people together to challenge established thinking and drive transform in 2020
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurServices