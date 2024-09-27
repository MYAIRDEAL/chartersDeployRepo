import React, { useEffect, useState } from 'react';
import DemandSearchCards from './DemandSearchCards';
import PageBanner from '../../PageBanner';
import { Link, useLocation, useParams } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import ErrorComp from '../../ErrorComp';
import EnquiryPopUp from '../../EnquiryPopUp';


const DemandSearch = ({ temp, setTemp }) => {


    let location = useLocation()

    const { selecttype } = useParams();

    let parsedData = {};
    try {
        parsedData = JSON.parse(decodeURIComponent(selecttype));
    } catch (error) {
        // handell in silently
    }

    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        const sendData = async () => {
            try {
                // let response = await axios.post('http://localhost:8000/api/admin/demandsearch', parsedData);
                let response = await axios.post('https://privatejetcharters-server-ttz1.onrender.com/api/admin/demandsearch', parsedData);
                setResponseData(response?.data?.data || []);
                
                // message.success('Request successful');
            } catch (error) {
                //  Handel this error silently
            }
        };

        sendData();
    }, []);

    return (
        <div className='bg-white'  >
            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>

            <PageBanner data={'Sub Category'} />

            <div className=' mt-[2rem] ml-[2rem]'>
                <ul className='flex gap-5 text-[1.3rem] text-hoverColor underline'>
                    <Link to={'/'}>
                        <li>
                            Home
                        </li>
                    </Link>
                </ul>
            </div>

            <div className='h-[4rem] flex items-center m-8'>
                <h1 className='text-[2rem] text-black text-center w-[100%]'>All Available Flights</h1>
            </div>
            <div className='flex flex-wrap w-full p-[2rem] justify-center md:min-h-[20rem] items-center gap-3 md:justify-evenly'>
                {responseData && responseData?.length > 0 ? (
                    responseData.map((element, index) => (
                        <DemandSearchCards key={index} props={element} />
                    ))
                ) : (
                    <ErrorComp />
                )}
            </div>
        </div>
    );
};

export default DemandSearch;
