import React, { useEffect, useState } from 'react'
import FightCard from '../FightCard'
import axios from 'axios'
import ErrorComp from '../../ErrorComp'
import { Link } from 'react-router-dom'
import EnquiryPopUp from '../../EnquiryPopUp'

function AllAvailableCharters({ temp, setTemp }) {


    const [pushRes, setPushRes] = useState([])
    const [getType, setGetType] = useState([]);
    const [selectType, setSelectType] = useState('AllTypes');
    const [getAllTypes, setGetAllTypes] = useState(false);


    useEffect(() => {

        let pushSearchResFunction = async () => {

            try {
                // let pushResData = await axios.get('http://localhost:8000/api/admin/getallsubcategories')
                let pushResData = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getallsubcategories')
                setPushRes(pushResData?.data?.data)
            }
            catch (error) {
                // handell in silently
            }

        }
        pushSearchResFunction()

    }, [getAllTypes])





    // Fetch all types on component mount
    useEffect(() => {
        const fetchAllTypes = async () => {
            try {
                const response = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getalltypes');
                setGetType(response?.data?.data);
            } catch (error) {
               // handell in silently
            }
        };
        fetchAllTypes();
    }, [getAllTypes]);

    // Filter subcategories based on selected type
    useEffect(() => {
        const fetchFilteredSubcategories = async () => {
            try {
                const response = await axios.post(`http://localhost:8000/api/admin/filterSubCategoryByType/${selectType}`);
                setPushRes(response?.data?.data);
            } catch (error) {
                // handell in silently
            }
        };

        // Fetch data only when a specific type is selected
        if (selectType !== 'AllTypes') {
            fetchFilteredSubcategories();
            setGetAllTypes(false)
        }
        else {
            setGetAllTypes(true)
        }
    }, [selectType]);

    // Event handler to toggle type selection popup
    const handleTypeClick = (type) => {
        setSelectType(type);
        // setSelectTypePopUp(false); // Close popup after selecting type
    };


    return (
        <div className='bg-white min-h-screen  w-full p-[2rem]'>

<div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>


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

            {/* Type Selection Buttons */}
            <div className='w-auto px-10 py-2 sticky top-3 target:bg-hoverLighColor flex items-center font-medium justify-center bg-hoverLighColor rounded-3xl flex-wrap gap-2'>
                <button
                    className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg transition-all duration-700 ${selectType === 'AllTypes' ? 'text-amber-800' : 'text-black'}`}
                    onClick={() => handleTypeClick('AllTypes')}
                >
                    All Types
                </button>
                {getType?.length > 0 ? (
                    getType.map((e) => (
                        e.active === 'yes' && (
                            <button
                                className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg transition-all duration-700 ${selectType === e.section ? 'text-amber-800' : 'text-black'}`}
                                onClick={() => handleTypeClick(e.section)}
                                key={e._id}
                            >
                                {e.section}
                            </button>
                        )
                    ))
                ) : (
                    <p className='text-black'>No Type Available</p>
                )}
            </div>
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