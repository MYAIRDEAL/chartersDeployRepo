import React, { useEffect, useState } from 'react'

import NavHeroBar from './NavHeroBar';
import OurServices from '../OurServices';
import AboutFlight from '../AboutFlight';
import LearnMore from '../LearnMore';
import Testimonials from '../Testimonials_Section/Testimonials';
import ShowEstimates from './Demand_Search/ShowEstimates';
import PushSearchRes from './Push_Search/PushSearchRes';
import OurFleets from './Our_Fleets/OurFleets';
import axios from 'axios';
import ContactusMain from '../Forms/Enquiry_Forms/ContactusMain'
import { message } from 'antd';
import ContactUsFormMain from '../Forms/Enquiry_Forms/ContactUsFormMain';
import EnquiryPopUp from '../EnquiryPopUp';

function MainHomeComp({ temp, setTemp }) {


    const [components, setComponents] = useState([]);


    useEffect(() => {
        const fetchComponents = async () => {
            try {
                // const response = await axios.get('http://localhost:8000/api/components');
                const response = await axios.get('https://privatejetcharters-server-ttz1.onrender.com/api/components');
                setComponents(response.data);
            } catch (error) {
                message.error('Server Down To Switch Components');
            }
        };
        fetchComponents();
    }, []);

    const componentMapping = {
        'NavHeroBar': NavHeroBar,
        'ShowEstimates': ShowEstimates,
        'OurServices': OurServices,
        'AboutFlight': AboutFlight,
        'LearnMore': LearnMore,
        'OurFleets': OurFleets,
        'PushSearchRes': PushSearchRes,
        'Testimonials': Testimonials,
        'ContactPage': ContactusMain,
    };


    return (
        <div className="Home ">



            {/* <div className='bg-red-700 absolute top-0 bottom-0 right-0 left-0 z-20  flex items-center'>
                <div className='bg-green-600 w-auto absolute top-0 right-0 left-0'>
                </div>
            </div> */}

            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>

            {/* <div className='  flex items-center z-50 top-0  bg-gray-600 bg-opacity-55 left-0 right-0 justify-center absolute'>
                <div className='bg-white rounded-lg'> */}
            {/* <ContactUsFormMain /> */}
            {/* </div> */}
            {/* // </div> */}


            {components.map((componentId) => {
                const Component = componentMapping[componentId];
                if (!Component) {
                    // console.error(`Component not found for id: ${componentId}`);
                    return null;
                }
                return <Component key={componentId} />;
            })}
        </div>
    );
}

export default MainHomeComp