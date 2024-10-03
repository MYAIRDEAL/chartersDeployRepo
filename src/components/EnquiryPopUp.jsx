
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { message } from 'antd';

const EnquiryPopUp = (props) => {
    const { temp, setTemp } = props

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const now = new Date();
    const formattedDate = formatDate(now);



    const [formData, setFormData] = useState({
        enquiryname: localStorage.getItem('enquiryname') || '',
        enquiryemail: localStorage.getItem('enquiryemail') || '',
        enquiryphone: localStorage.getItem('enquiryphone') || '',
        enquirytype: localStorage.getItem('enquirytype') || '',
        enquirydate: formattedDate,
    });



    useEffect(() => {
        Object.keys(formData).forEach(key => {
            localStorage.setItem(key, formData[key]);
        });

        return () => {
            localStorage.clear();
        }

    }, [formData]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {


            if (formData.enquiryphone.length !== 10) {
                message.error('give phone number correctly')
                return 1
            }

            // await axios.post('http://localhost:8000/api/admin/addenquiry', formData);
            await axios.post('https://privatejetcharters-server-ttz1.onrender.com/api/admin/addenquiry', formData);
            setTemp(false)
            setFormData({
                enquiryname: '',
                enquiryemail: '',
                enquiryphone: '',
                enquirytype: ''
            });
            localStorage.clear(); // Clear the local storage upon successful submission
            message.success('Form submission is successful');
        } catch (error) {
            message.error('Form submission was unsuccessful. Please check your email.');
            // setTemp(false)
            // setFormData({
            //     enquiryname: '',
            //     enquiryemail: '',
            //     enquiryphone: '',
            //     enquirytype: ''
            // });
        }
    };





    return (
        <div className="App">
            {/* Modal Toggle Button */}
            {/* <button
                onClick={openModal}
                className="block text-hoverColor hover:text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                type="button"
            >
                ENQUIRE NOW
            </button> */}

            {/* Main Modal */}
            {temp && (
                <div
                    id="authentication-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* Modal Content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold tracking-[0.1rem] text-gray-900 dark:text-white">
                                    REQUEST A CALL BACK
                                </h3>
                                <button
                                    onClick={() => {
                                        setTemp(false)
                                    }}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal Body */}
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="flex items-start  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Name <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name='enquiryname'
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            onChange={handleChange}
                                            value={formData.enquiryname}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="flex items-start  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Email <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="enquiryemail"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                            onChange={handleChange}
                                            value={formData.enquiryemail}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="flex items-start  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Phone <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="enquiryphone"
                                            id="phone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                            onChange={handleChange}
                                            value={formData.enquiryphone}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="flex items-start  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Serivce <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="enquirytype"
                                            id="service"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                            onChange={handleChange}
                                            value={formData.enquirytype}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-hoverColor "

                                    >
                                        Get A Call
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EnquiryPopUp;
