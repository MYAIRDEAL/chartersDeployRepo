import React, { useEffect, useState } from 'react'
import FightCard from '../FightCard'
import axios from 'axios'
import ErrorComp from '../../ErrorComp'
import { Link } from 'react-router-dom'

function AllAvailableCharters() {


    const [pushRes, setPushRes] = useState([])
    console.log(pushRes)

    useEffect(() => {

        let pushSearchResFunction = async () => {

            try {
                // let pushResData = await axios.get('http://localhost:8000/api/admin/getallsubcategories')
                let pushResData = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getallsubcategories')
                setPushRes(pushResData?.data?.data)
            }
            catch (error) {
                console.log(error)
            }

        }
        pushSearchResFunction()

    }, [])

    return (
        <div className='bg-white min-h-screen  w-full p-[2rem]'>

            <div >
                <ul className='flex  text-[1.3rem] underline text-hoverColor'>
                    <Link to={'/'}>
                        <li>
                            Home
                        </li>
                    </Link>
                </ul>
            </div>

            <h1 className=' text-[2rem] text-hoverColor text-center font-bold'>All Available Charters</h1>

            <div className=' flex flex-wrap w-full p-[2rem] justify-center items-center gap-7'>

                {
                    pushRes?.length > 0 ? pushRes.map((element, index) => (
                        < FightCard key={index} props={element} />
                    ))
                        :
                        <ErrorComp />
                }
            </div>
        </div>

    )
}

export default AllAvailableCharters