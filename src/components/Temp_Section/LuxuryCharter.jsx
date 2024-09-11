import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import airbus from '../../assets/F-6.jpg';
import bosing from '../../assets/F-9.jpg';
import poilet from '../../assets/F-8.jpg';

function LuxuryCharter() {
    return (
        <div className='bg-white flex flex-col justify-around  min-h-screen m-0  w-full p-[2rem]'>
            <div className=' flex flex-col items-center justify-center '>

                <h2 className='text-[3rem] text-hoverColor mb-6'>
                    OUR LUXURY FLEETS
                </h2>
                
                <div className='p-4 rounded-lg max-w-4xl mx-auto'>
                    <p className='text-center text-gray-300 text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit doloribus porro vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit vel tempore quas.
                    </p>
                </div>

            </div>

            <div className='flex justify-around py-10 flex-wrap'>
                <div className='rounded-xl font-semibold p-6 max-w-md flex  flex-col justify-end bg-cover bg-center mb-4 md:mb-0 h-[400px] w-[450px]' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${airbus})` }}>
                    <div >
                        <h1 className='text-2xl text-white mb-2'>Airbus A380 - All Surya</h1>
                        <h2 className='text-hoverColor text-xl mb-4'>Nomaden 900</h2>
                    </div>
                    <div className='flex justify-between py-4 border-b-[3px] border-hoverColor'>
                        <h3 className='text-white'>5 - 16 Seats</h3>
                        <h3 className='text-white'>Price: $10,000/hr</h3>
                    </div>
                    <div className='flex items-center mt-4 p-2 cursor-pointer rounded'>
                        <MdKeyboardArrowRight className='text-hoverColor text-xl' />
                        <button className='text-hoverColor  bg-transparent outline-none border-none px-4 py-2 rounded'>
                            Book Now
                        </button>
                    </div>
                </div>
                <div className='rounded-xl font-semibold p-6 max-w-md flex flex-col justify-end bg-cover bg-center h-[400px] w-[450px] mb-4 md:mb-0' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${bosing})` }}>
                    <div >
                        <h1 className='text-2xl text-white mb-2'>
                            Boeing 747-8 VIP - All Surya</h1>
                        <h2 className='text-hoverColor text-xl mb-4'>Nomaden 900</h2>
                    </div>
                    <div className='flex justify-between py-4 border-b-[3px] border-hoverColor'>
                        <h3 className='text-white'>5 - 16 Seats</h3>
                        <h3 className='text-white'>Price: $10,000/hr</h3>
                    </div>
                    <div className='flex items-center mt-4 p-2 cursor-pointer rounded'>
                        <MdKeyboardArrowRight className='text-hoverColor text-xl' />
                        <button className='text-hoverColor  bg-transparent outline-none border-none px-4 py-2 rounded'>
                            Book Now
                        </button>
                    </div>
                </div>
                <div className='rounded-xl font-semibold p-6 max-w-md flex flex-col justify-end bg-cover bg-center h-[400px] w-[450px] mb-4 md:mb-0' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ), url(${poilet})` }}>
                    <div >
                        <h1 className='text-2xl text-white mb-2'>Boeing 767-33A ER - All Surya</h1>
                        <h2 className='text-hoverColor text-xl mb-4'>Nomaden 900</h2>
                    </div>
                    <div className='flex justify-between py-4 border-b-[3px] border-hoverColor'>
                        <h3 className='text-white'>5 - 16 Seats</h3>
                        <h3 className='text-white'>Price: $10,000/hr</h3>
                    </div>
                    <div className='flex items-center mt-4 p-2 cursor-pointer rounded'>
                        <MdKeyboardArrowRight className='text-hoverColor text-xl' />
                        <button className='text-hoverColor  bg-transparent outline-none border-none px-4 py-2 rounded'>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LuxuryCharter;
