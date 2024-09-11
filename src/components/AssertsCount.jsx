import React from 'react';
import fram from '../assets/flightBack.jpg';
import { PiCertificateBold } from "react-icons/pi";
import { FaGlobeEurope, FaPaperPlane } from "react-icons/fa";
import { TbMapPin2 } from "react-icons/tb";

import '../componentCss/AirportCountCss.css';

function AssertsCount() {
    return (
        <div className='flex flex-col md:flex-row  bg-transparent bg-cover bg-center md:h-[15rem] justify-around items-center w-full h-auto flex-wrap p-4'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fram})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            {/* Card 1 */}
            <div className='flex flex-col cursor-pointer items-center 768:w-[10rem]   h-auto md:h-[13rem] mb-4 md:mb-0 border-animation'>
                <div className='mb-2'>
                    <PiCertificateBold className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] text-hoverColor' />
                </div>
                <div className='flex items-center'>
                    <div className='mr-1'>
                        <h1 className='768:text-[2rem] 1024:text-[4rem]  mb-1 text-white'>
                            89
                        </h1>
                    </div>
                    <div className='text-hoverColor text-xl md:text-2xl'>
                        +
                    </div>
                </div>
                <div>
                    <p className='text-sm md:text-base text-gray-300'>
                        Professional Pilots
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col items-center cursor-pointer w-full 768:w-[10rem] h-auto md:h-[13rem] mb-4 md:mb-0 border-animation'>
                <div className='mb-2'>
                    <FaGlobeEurope className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] text-hoverColor' />
                </div>
                <div className='flex items-center'>
                    <div className='mr-1'>
                        <h1 className='768:text-[2rem] 1024:text-[4rem] mb-1 text-white'>
                            289
                        </h1>
                    </div>
                    <div className='text-hoverColor text-xl md:text-2xl'>
                        +
                    </div>
                </div>
                <div>
                    <p className='text-sm md:text-base text-gray-300'>
                        Professional Pilots
                    </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col items-center w-full 768:w-[10rem] cursor-pointer h-auto md:h-[13rem] mb-4 md:mb-0 border-animation'>
                <div className='mb-2'>
                    <FaPaperPlane className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] text-hoverColor' />
                </div>
                <div className='flex items-center'>
                    <div className='mr-1'>
                        <h1 className='768:text-[2rem] 1024:text-[4rem]  mb-1 text-white'>
                            59
                        </h1>
                    </div>
                    <div className='text-hoverColor text-xl md:text-2xl'>
                        +
                    </div>
                </div>
                <div>
                    <p className='text-sm md:text-base text-gray-300'>
                        Professional Pilots
                    </p>
                </div>
            </div>

            {/* Card 4 */}
            <div className='flex flex-col items-center w-full 768:w-[10rem] h-auto md:h-[13rem] cursor-pointer mb-4 md:mb-0 border-animation'>
                <div className='mb-2'>
                    <TbMapPin2 className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] text-hoverColor' />
                </div>
                <div className='flex items-center'>
                    <div className='mr-1'>
                        <h1 className='768:text-[2rem] 1024:text-[4rem]  mb-1 text-white'>
                            129
                        </h1>
                    </div>
                    <div className='text-hoverColor text-xl md:text-2xl'>
                        +
                    </div>
                </div>
                <div>
                    <p className='text-sm md:text-base text-gray-300'>
                        Professional Pilots
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AssertsCount;
