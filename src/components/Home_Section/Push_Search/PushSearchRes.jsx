import React, { useEffect, useState } from 'react';

import FightCard from '../FightCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PushSearchRes() {



    const [pushRes, setPushRes] = useState([])

    useEffect(() => {

        let pushSearchResFunction = async () => {

            try {
                let pushResData = await axios.get('http://localhost:8000/api/admin/getallsubcategories')
                setPushRes(pushResData.data.data)
            }
            catch (error) {
                console.error('Unable to fetch the All flight Details')
            }

        }
        pushSearchResFunction()

    }, [])


    return (
        <div className='bg-white   w-full p-[2rem]'>
            <div className=' flex flex-col items-center justify-center '>
                <h1 className='text-xl text-hoverColor mb-4'>
                    OUR LUXURY CHARTER
                </h1>
                <h2 className='1487:text-[3rem] 344:text-[1.2rem] text-black mb-6'>
                    We Provide Luxury Deals for You
                </h2>
                <div className='p-4 rounded-lg max-w-4xl mx-auto'>
                    <p className='text-center text-gray-300 text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit doloribus porro vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit vel tempore quas.
                    </p>
                </div>
            </div>

            <div className=' flex flex-wrap p-[2rem] gap-6 justify-center  items-center  '>


                {
                    pushRes?.length > 0? pushRes?.slice(0, 3).map((element, index) => (
                        < FightCard key={index} props={element} />
                    ))
                    :
                    ''
                }


            </div>

            {
                // ### Here We doing Conditional Rendering ###
                pushRes?.length > 3 ?
                    (
                        <div className='md:mt-5  flex   justify-end w-[94%]'>
                            <button className='w-[12rem] h-[3rem] text-[1.1rem] tracking-[0.3rem] bg-hoverColor text-white rounded-lg transition-all hover:scale-110 duration-700'>
                                <Link to={'/allavailablecharters'} >View More</Link>
                            </button>
                        </div>
                    )
                    : ''
            }
        </div>
    );
}

export default PushSearchRes;

