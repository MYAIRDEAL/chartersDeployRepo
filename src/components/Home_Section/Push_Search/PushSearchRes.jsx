import React, { useEffect, useState } from 'react';
import FightCard from '../FightCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowDown } from "react-icons/io";

function PushSearchRes() {
    const [pushRes, setPushRes] = useState([]);
    const [getType, setGetType] = useState([]);
    const [selectType, setSelectType] = useState('AllTypes');
    const [selectTypePopUp, setSelectTypePopUp] = useState(false);
    const [getAllTypes, setGetAllTypes] = useState(false);

    // Fetch all subcategories on component mount
    useEffect(() => {
        const fetchPushSearchRes = async () => {
            try {
                const response = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getallsubcategories');
                setPushRes(response?.data?.data);
            } catch (error) {
                // handell in silently
            }
        };
        fetchPushSearchRes();
    }, [getAllTypes]);

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
    }, []);

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
        setSelectTypePopUp(false); // Close popup after selecting type
    };

    return (
        <div className='bg-white flex flex-col justify-center items-center w-full p-[2rem]'>
            <div className='flex flex-col items-center justify-center'>
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

            {/* Type Selection Buttons */}
            <div className='w-auto px-10 py-2 flex items-center font-medium justify-center bg-hoverColor bg-opacity-45 rounded-3xl flex-wrap gap-2'>
                <button
                    className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg transition-all duration-700 ${selectType === 'AllTypes' ? 'text-hoverColor' : 'text-black'}`}
                    onClick={() => handleTypeClick('AllTypes')}
                >
                    All Types
                </button>
                {getType?.length > 0 ? (
                    getType.map((e) => (
                        e.active.toLowerCase() === 'yes' && (
                            <button
                                className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg transition-all duration-700 ${selectType === e.section ? 'text-hoverColor' : 'text-black'}`}
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

            {/* Display Fight Cards */}
            <div className='flex flex-wrap p-[2rem] gap-6 justify-center items-center'>
                {pushRes?.length > 0 ? (
                    pushRes.slice(0, 3).map((element, index) => (
                        <FightCard key={index} props={element} />
                    ))
                ) : (
                    <p>No Data Available</p>
                )}
            </div>

            {/* Conditional View More Button */}
            {pushRes.length > 3 && (
                <div className='md:mt-5 flex justify-end w-[94%]'>
                    <button className='w-[12rem] h-[3rem] text-[1.1rem] tracking-[0.3rem] bg-hoverColor text-white rounded-lg transition-all hover:scale-110 duration-700'>
                        <Link to={'/allavailablecharters'}>View More</Link>
                    </button>
                </div>
            )}
        </div>
    );
}

export default PushSearchRes;
