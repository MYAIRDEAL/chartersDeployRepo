import React from 'react';
import { Link } from 'react-router-dom';

function LuxuryCharter() {
   
    return (
        <div className='flex flex-col justify-around items-center py-[5rem]  w-full p-[2rem]'>
            <div className='flex flex-col items-center justify-center '>
                <h2 className='md:text-[3rem] text-hoverColor mb-6'>
                    OUR LUXURY FLEETS
                </h2>
            </div>
            <div className='flex justify-around items-center    flex-wrap   w-[80vw]'>
                <Link to={`/ourfleets/very light jet`}>
                    <div
                        className='cursor-pointer font-semibold flex  items-center justify-center hover:border-b-[4px]   border-hoverColor h-[5rem] w-[16rem] '                       
                    >
                        <h1 className='text-white md:text-[1.7rem] text-[1.3rem]'>Very Light Jets</h1>

                    </div>
                </Link>
                <Link to={`/ourfleets/mid size`}>
                    <div
                       className='cursor-pointer font-semibold flex  items-center justify-center hover:border-b-[4px]  transition-all duration-150   border-hoverColor  h-[5rem] w-[16rem] '
                        
                    >
                        <h1 className='text-white md:text-[1.7rem] text-[1.3rem]'>Mid Size</h1>
                    </div>
                </Link>
                <Link to={`/ourfleets/super light jet`}>
                    <div
                        className='cursor-pointer font-semibold flex  items-center justify-center hover:border-b-[4px]  transition-all duration-150   border-hoverColor  h-[5rem] w-[16rem] '
                        
                    >
                        <h1 className='text-white md:text-[1.7rem] text-[1.3rem]'>Super Light Jet</h1>
                    </div>
                </Link>
                <Link to={`/ourfleets/turbo prop aircraft`}>
                    <div
                       className='cursor-pointer font-semibold flex  items-center justify-center transition-all duration-150 hover:border-b-[4px]  border-hoverColor  h-[5rem] w-[16rem] '
                        
                    >
                        <h1 className='text-white md:text-[1.7rem] text-[1.3rem]'>Turbo prop Aircraft</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default LuxuryCharter;
