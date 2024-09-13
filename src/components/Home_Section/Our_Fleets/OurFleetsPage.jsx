import React, { useEffect, useState } from 'react'

import PageBanner from '../../PageBanner'
import OurFleetsCard from './OurFleetsCard'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ErrorComp from '../../ErrorComp'


function OurFleetsPage() {


    const [getSubCategory, setGetSubCategory] = useState([]);



    let { type } = useParams();

    useEffect(() => {
        let getSubCategory = async () => {
            try {
                // let temp = await axios.get(`http://localhost:8000/api/admin/filter/${type}`)
                let temp = await axios.get(`https://privatejetcharters-server-ttz1.onrender.com/api/admin/filter/${type}`)
                // console.log(type)
                setGetSubCategory(temp?.data?.sortedData || [])
            }
            catch (error) {
                console.log(error)
            }
        }
        getSubCategory()
    }, [])

    return (
        <div className='bg-white'>

            <PageBanner data={'Premium High Class Fleet'} />
            <div className=' mt-[2rem] ml-[2rem]'>
                <ul className='flex gap-5 text-hoverColor underline text-[1.3rem]'>

                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>

                </ul>
            </div>
            <div className='min-h-[70vh] 375:py-4   flex flex-wrap items-center gap-6 justify-center'>

                {
                    getSubCategory?.length > 0 ? getSubCategory.map((element, index) => (
                        <OurFleetsCard key={index} props={element} />
                    ))
                        :
                        <ErrorComp />
                }
            </div>

        </div>
    )
}

export default OurFleetsPage