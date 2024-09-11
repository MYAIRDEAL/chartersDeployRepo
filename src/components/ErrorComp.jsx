import React from 'react'

import Error from '../assets/Error.gif'
import { Link } from 'react-router-dom';

function ErrorComp() {
    return (

        <div className='bg-white flex flex-col items-center justify-center'>


            <div>
                <img src={Error} alt="" className='md:w-[20rem] w-[15rem] ' />
            </div>

            <div className=' flex items-center justify-center flex-col'>
                <h1 className='md:text-[2rem] '>Searching in a Dark Room ...</h1>
                {/* <p className='md:w-[40rem] md:text-[1.2rem] text-center p-2'>
                    we searched high and low but couldn't find what your're looking for. Let's find a better place for you to go.
                </p> */}

                <ul className='font-semibold md:text-[1.1rem] text-blue-300'>
                    <Link to={'/'}> <li className='underline m-2'>Home</li></Link>
                    <Link to={'/contactusmain/tellus'}><li className='underline m-2'>Tell Us Your Requirment</li></Link>
                </ul>


            </div>
        </div>

    )
}

export default ErrorComp