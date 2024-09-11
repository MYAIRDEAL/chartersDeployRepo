import React from 'react'
import { Link } from 'react-router-dom'

function CarousalDetails() {
    return (

        <div className=' md:w-[25rem]'>
            <div className='m-4'>
                <h1 className='text-hoverColor tracking-[0.5rem] text-xl'>
                    TESTIMONIALS
                </h1>
            </div>
            <div className='m-4'>
                <h1 className='text-white 1487:text-[2.5rem]'>
                    What Cllient Says About Flights
                </h1>
            </div>
            <div className='m-4'>
                <p className='text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptas cupiditate veniam nesciunt illo vitae nemo quis. Odit, natus consequuntur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a exercitationem voluptatum ea culpa dicta iste ratione corrupti tempora eaque?
                </p>
            </div>

            <div className='text-hoverColor border-[2px] hover:scale-110 transition-all duration-500 rounded-lg h-[4rem] w-[19rem] hover:bg-hoverColor hover:text-white flex items-center justify-center m-4 my-6 border-hoverColor'>
                <Link to={'/testimonials'}>

                    <button className='outline-none border-none text-[0.9rem] p-4 font-semibold tracking-[0.4rem] '>
                        VIEW TESTIMONIALS
                    </button>

                </Link>
            </div>

        </div>

    )
}

export default CarousalDetails