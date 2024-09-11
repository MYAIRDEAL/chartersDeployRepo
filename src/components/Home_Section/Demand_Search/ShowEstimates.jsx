import React, { useEffect, useRef, useState } from 'react';
import { DatePicker, message } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { IoMdSwap } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiFlightTakeoffFill } from "react-icons/ri";
import '../../../componentCss/ShowEstimatesCss.css'
import axios from 'axios';

import { useNavigate } from 'react-router-dom'; // Import correctly

const ShowEstimates = () => {
    const [dateData, setDate] = useState(localStorage.getItem('dateData') || '');
    const onChange = (date, dateString) => {
        setDate(dateString);
    };

    const [fromValue, setFromValue] = useState(localStorage.getItem('fromvalue') || 'Goa');
    const [toValue, setToValue] = useState(localStorage.getItem('tovalue') || 'Hyderabad');
    const [selectType, setSelectType] = useState('');
    const [formData, setFormData] = useState(null);

    const handleFromChange = (e) => setFromValue(e.target.value);
    const handleToChange = (e) => setToValue(e.target.value);

    const [passengers, setPassengers] = useState(localStorage.getItem('passengers') || '0');

    useEffect(() => {
        localStorage.setItem('passengers', passengers)
        localStorage.setItem('tovalue', toValue)
        localStorage.setItem('fromvalue', fromValue)
        localStorage.setItem('dateData', dateData)
    }, [passengers, toValue, fromValue, dateData])

    const handleSwap = () => {
        setFromValue(toValue);
        setToValue(fromValue);
    };

    const [selectTypePopUp, setSelectTypePopUp] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event?.target)) {
            setSelectTypePopUp(false);
        }
    };

    const handleOptionClick = (option) => {
        setSelectType(option);
        setSelectTypePopUp(false);
    };



    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formHandler = (element) => {
        element.preventDefault();

        const capitalizeFirstLetter = (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        };

        let arrival = capitalizeFirstLetter(element.target?.to?.value);
        let departure = capitalizeFirstLetter(element.target?.from?.value);
        let pax = element.target?.passengers?.value;
        let date = dateData;
        let section = selectType;

        let postData = { arrival, departure, pax, date, section };

        if (arrival?.length !== 0 && departure?.length !== 0 && pax?.length !== 0 && date?.length !== 0 && section?.length !== 0) {
            setFormData(postData);
        }
        else {
            message.error('Fill All the Details or Select Valid Type')
            setFormData(false);
        }

    };

    const navigate = useNavigate(); // Initialize correctly

    useEffect(() => {
        const sendData = () => {
            if (formData) {
                try {

                    // Serialize the response if it's an object
                    const responseData = JSON.stringify(formData);

                    // Encode the data to make it URL-safe
                    const encodedData = encodeURIComponent(responseData);

                    navigate(`/subcategory/${encodedData}`); // Passing encoded data in URL

                } catch (error) {
                    console.error('Server is Busy try after some time');
                }
            }
        };

        sendData();
    }, [formData]);

    const [getType, setGetType] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let temp = await axios.get('http://localhost:8000/api/admin/getalltypes');
                setGetType(temp.data?.data || []);
            } catch (error) {
                console.error('Server is Busy try after some time');
            }
        };

        fetchData();
    }, [])

    return (
        <div className='  w-full py-[3rem] flex flex-col justify-center items-center'>
            <h1 className='md:text-[2.5rem] text-[1.5rem] text-white font-semibold'>Private Jet Charters</h1>
            <div className=' w-[75%] font-semibold md:flex hidden flex-wrap gap-2'>
                {
                    getType?.length > 0 ? (
                        getType.map((e) => {
                            if (e.active === 'yes') {
                                return (
                                    <button
                                        className={`w-[10rem] h-[2.5rem] mx-3 outline-none rounded-lg text-white transition-all duration-700 ${selectType === e.section ? 'bg-hoverColor text-white' : 'border-2 border-hoverColor'}`}
                                        onClick={() => setSelectType(e.section)}
                                        key={e._id}
                                    >
                                        {e.section}
                                    </button>
                                );
                            }
                            return null;
                        })

                    ) :
                        (
                            <p className='text-hoverColor'>No Type Available</p>
                        )
                }
            </div>

            <div className='w-[80%] md:hidden flex flex-col relative' ref={dropdownRef}>
                <div
                    className='w-[50%] flex items-center justify-around rounded-lg bg-hoverColor text-white cursor-pointer'
                    onClick={() => setSelectTypePopUp(prev => !prev)}
                >
                    <p className='mt-2 flex items-center'>{selectType || 'Select Type'}</p>
                    <IoIosArrowDown />
                </div>
                <div
                    className={`absolute w-[50%] mt-2 rounded-lg bg-selectType ${selectTypePopUp ? 'block' : 'hidden'} z-10`}
                    style={{ top: '100%' }}
                >
                    <ul className='list-none p-0 m-0'>

                        {
                            getType?.length > 0 ? (
                                getType.map((element, index) => {

                                    if (element.active === 'yes') {
                                        return (
                                            <li
                                                className={`text-[1.2rem] transition-all duration-300 text-white py-2 pl-5 ${selectType === `${element.section}` ? 'bg-hoverColor' : ''}`}
                                                onClick={() => handleOptionClick(`${element.section}`)}
                                                key={index}
                                            >
                                                {element.section}
                                            </li>
                                        );
                                    }
                                    return null;
                                })

                            ) :
                                (
                                    <p className='text-hoverColor'>No Type Available</p>
                                )
                        }

                    </ul>
                </div>
            </div>

            <form action="#" method='post' onSubmit={formHandler}>
                <div className="form  " >
                    <div id='first'>
                        <label htmlFor='from' className='flex gap-4 text-white'>Departure {<RiFlightTakeoffFill />} Arrival</label>
                        <div id='oneinnerdiv'>
                            <input
                                type='text'
                                name='from'
                                id='from'
                                placeholder='VOBL'
                                value={fromValue} onChange={handleFromChange}
                            />

                            <IoMdSwap id='icon' onClick={handleSwap} className='cursor-pointer border-none outline-none' />

                            <input
                                type='text'
                                name='to'
                                id='to'
                                placeholder='OMDW'
                                value={toValue}
                                onChange={handleToChange}
                            />
                        </div>
                    </div>

                    <div className='second '>
                        <label htmlFor='departure' >Date</label>
                        <DatePicker
                            format='DD-MM-YYYY'
                            id='date'
                            // value={dateData}
                            onChange={onChange}
                        />
                    </div>

                    <div className='third'>
                        <label htmlFor='passengers' >Passengers</label>
                        <input
                            type='number'
                            name='passengers'
                            value={passengers}
                            placeholder='0'
                            onChange={(e) => setPassengers(e.target.value)}

                        />
                    </div>

                    <div className='seven hover:scale-105  duration-200 ' >
                        <button type='submit' className='tracking-[0.2rem]' >
                            SEARCH
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default ShowEstimates;
