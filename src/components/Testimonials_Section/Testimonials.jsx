import React from 'react';
import Attentent from '../../assets/F-5.jpg';
import Carousal from './Carousal';
import CarousalDetails from './CarousalDetails';
import PushFleetDetails from '../Home_Section/Push_Search/PushFleetDetails';


const Testimonials = () => {

    return (
        <div>
            <div
                className='relative  w-full  bg-cover bg-center bg-fixed  flex items-center justify-around flex-wrap'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Attentent})`
                }}
            >
                <Carousal />
                <CarousalDetails />
                {/* <PushFleetDetails /> */}

            </div>
            {/* <Temp /> */}
        </div>
    );
};

export default Testimonials;
