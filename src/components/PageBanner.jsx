import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import flightfront from '../assets/F-12.jpg'

function PageBanner({data}) {

    return (
        <div
            className=" h-[60vh]  bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${flightfront})`,
            }}
        >
            <div className="flex items-center justify-between p-[3rem] h-full text-white">
                <div className='text-[4vw]'>
                    <h1>
                        {data}
                    </h1>
                </div>
                <div className='md:flex hidden flex-col items-center md:items-start md:justify-center mb-4 md:mb-0'>
                    <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaFacebook />}</div>
                    <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaInstagram />}</div>
                    <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaTwitter />}</div>
                    <div className='border border-hoverColor m-2 p-2 rounded-full hover:bg-hoverColor cursor-pointer text-xl'>{<FaYoutube />}</div>
                </div>
            </div>
        </div>
    )
}

export default PageBanner