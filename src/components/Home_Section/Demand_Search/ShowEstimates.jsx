import React, { useEffect, useRef, useState } from 'react';
import { DatePicker, message } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { IoMdSwap } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiFlightTakeoffFill } from "react-icons/ri";
import '../../../componentCss/ShowEstimatesCss.css'
import axios from 'axios';
// import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import { useNavigate } from 'react-router-dom'; // Import correctly

const ShowEstimates = () => {
    const [dateData, setDate] = useState(localStorage.getItem('dateData') || '');


    const [fromValue, setFromValue] = useState(localStorage.getItem('fromvalue') || '');
    const [toValue, setToValue] = useState(localStorage.getItem('tovalue') || '');
    const [selectType, setSelectType] = useState('');
    const [formData, setFormData] = useState(null);

    const handleFromChange = (e) => setFromValue(e.target.value);
    const handleToChange = (e) => setToValue(e.target.value);

    const [passengers, setPassengers] = useState(localStorage.getItem('passengers') || '');

    useEffect(() => {
        localStorage.setItem('passengers', passengers)
        localStorage.setItem('tovalue', toValue)
        localStorage.setItem('fromvalue', fromValue)
        localStorage.setItem('dateData', dateData)

        return () => {
            localStorage.clear();
        }

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
        console.log(date)


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
                    // handell in silently
                }
            }
        };

        sendData();
    }, [formData]);

    const [getType, setGetType] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // let temp = await axios.get('http://localhost:8000/api/admin/getalltypes');
                let temp = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/admin/getalltypes');
                setGetType(temp.data?.data || []);
            } catch (error) {
                // handell in silently
            }
        };

        fetchData();
    }, [])


    const [selectedDate, setSelectedDate] = useState(null);



    const onChange = (date) => {
        if (date) {
            setSelectedDate(date);
            setDate(date.format('DD-MM-YYYY')); // Format only if the date is not null
        } else {
            setSelectedDate(null);
            setDate(''); // Clear the date state if the DatePicker is cleared
        }
    };



    return (
        <div className='  w-full py-[3rem] flex flex-col justify-center items-center'>
            <h1 className='md:text-[2.5rem] text-[1.5rem] text-white font-semibold'>Private Jet Charters</h1>
            {/* <div className=' w-[80%] font-semibold md:flex hidden flex-wrap gap-2'>
                {
                    getType?.length > 0 ? (
                        getType.map((e) => {
                            if (e.active.toLowerCase() === 'yes') {
                                return (
                                    <button
                                        className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg text-white transition-all duration-700 ${selectType === e.section ? 'bg-hoverColor text-white' : 'border-2 border-hoverColor'}`}
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
            </div> */}

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
                    <ul className='list-none p-0 m-0 '>

                        {
                            getType?.length > 0 ? (
                                getType.map((element, index) => {

                                    if (element.active.toLowerCase() === 'yes') {
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


            {/* <dir className='flex flex-col'> */}

            <div className=' w-[80%] font-semibold md:flex hidden flex-wrap gap-2'>
                {
                    getType?.length > 0 ? (
                        getType.map((e) => {
                            if (e.active.toLowerCase() === 'yes') {
                                return (
                                    <button
                                        className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg text-white transition-all duration-700 ${selectType === e.section ? 'bg-hoverColor text-white' : 'border-2 border-hoverColor'}`}
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
                            <p className='text-hoverColor '>No Type Available</p>
                        )
                }
            </div>

            <form action="#" method='post' className='md:bg-black my-3 rounded-xl' onSubmit={formHandler}>
                <div className="form" >
                    <div id='first'>
                        <label htmlFor='from' className='flex md:gap-[10.7rem] gap-[5rem] pl-3 pt-1 text-white transform translate-y-[3px]'>
                            <span>Departure</span> <span>Arrival</span></label>
                        <div id='oneinnerdiv'>
                            <input
                                type='text'
                                name='from'
                                id='from'
                                placeholder='Departure'
                                value={fromValue} onChange={handleFromChange}
                            />

                            <div id='icon'>
                                <IoMdSwap onClick={handleSwap} className='cursor-pointer w-full h-full border-none outline-none' />
                            </div>

                            <input
                                type='text'
                                name='to'
                                id='to'
                                placeholder='Arrival'
                                value={toValue}
                                onChange={handleToChange}
                                className='pr-3'
                            />
                        </div>
                    </div>

                    {/* <div className='second '>
                        <label htmlFor='departure' >Date</label>
                        <DatePicker
                            format='DD-MM-YYYY'
                            id='date'
                            // value={dateData}
                            onChange={onChange}
                        />
                    </div> */}

                    <div className='second '>
                        <label htmlFor='departure' >Date</label>
                        <DatePicker
                            format='DD-MM-YYYY'
                            id='date'
                            value={selectedDate}
                            onChange={onChange}
                            disabledDate={(current) => current && current < dayjs().startOf('day')} // Disable previous dates
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
                        <button type='submit' className='tracking-[0.2rem] !h-[2.3rem] mt-[0.1rem]' >
                            SEARCH
                        </button>
                    </div>
                </div>
            </form>
            {/* </dir> */}
        </div>
    );
};
export default ShowEstimates;
