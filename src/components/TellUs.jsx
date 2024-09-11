import React from 'react'

import backflight from '../assets/F-4.jpg'
import { Link } from 'react-router-dom'

function TellUs() {
    return (
        <div className=' flex justify-center bg-white md:py-16'>


            <div
                className='flex md:rounded-lg justify-center items-center flex-col bg-center bg-cover md:w-[90%] md:h-[20rem] p-5'
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backflight})` }}
            >
                <h1 className='text-white text-center text-[1.5rem] 1024:text-[2.5rem] p-4'>
                    Tell us your requirements and one of our charter experts will send you a quote.
                </h1>

                <p className='text-white text-center '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non faucibus congue, lectus quam viverra nulla, quis egestas neque sapien ac magna.
                </p>

                <Link to={'/contactus'}>

                    <button className=' px-4 py-2 rounded h-[3rem] border tracking-[0.2rem] border-hoverColor text-hoverColor transition-all hover:scale-110 duration-500'>
                        ENQUIRE NOW
                    </button>

                </Link>
            </div>


        </div>
    )
}

export default TellUs