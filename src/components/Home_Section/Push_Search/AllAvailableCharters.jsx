import React, { useEffect, useState } from 'react';
import FightCard from '../FightCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EnquiryPopUp from '../../EnquiryPopUp';

function AllAvailableCharters({ temp, setTemp }) {
    const [pushRes, setPushRes] = useState([]);
    const [getType, setGetType] = useState([]);
    const [selectType, setSelectType] = useState('AllTypes');
    const [getAllTypes, setGetAllTypes] = useState(false);

    useEffect(() => {
        let pushSearchResFunction = async () => {
            try {
                let pushResData = await axios.get(
                    'https://privatejetcharters-server-ttz1.onrender.com/api/admin/getallsubcategories'
                );
                setPushRes(pushResData?.data?.data);
            } catch (error) {
                // handle silently
            }
        };
        pushSearchResFunction();
    }, [getAllTypes]);

    useEffect(() => {
        const fetchAllTypes = async () => {
            try {
                const response = await axios.get(
                    'https://privatejetcharters-server-ttz1.onrender.com/api/admin/getalltypes'
                );
                setGetType(response?.data?.data);
            } catch (error) {
                // handle silently
            }
        };
        fetchAllTypes();
    }, [getAllTypes]);

    useEffect(() => {
        const fetchFilteredSubcategories = async () => {
            try {
                const response = await axios.post(
                    `https://privatejetcharters-server-ttz1.onrender.com/api/admin/filterSubCategoryByType/${selectType}`
                );
                setPushRes(response?.data?.data);
            } catch (error) {
                setPushRes('');
                // handle silently
            }
        };

        if (selectType !== 'AllTypes') {
            fetchFilteredSubcategories();
            // setGetAllTypes(false);
        } else {
            if (getAllTypes) {
                setGetAllTypes(false);
            }
            else {
                setGetAllTypes(true);
            }
        }
    }, [selectType]);

    const handleTypeClick = (type) => {
        setSelectType(type);
    };

    return (
        <div className="bg-white min-h-screen w-full p-4 md:p-8">
            <div className="absolute z-50 right-0 border border-hoverColor cursor-pointer mt-2 mr-5 rounded-lg">
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>

            <div>
                <ul className="flex text-xl underline text-hoverColor">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                </ul>
            </div>

            <h1 className="text-3xl text-hoverColor text-center font-bold my-6">
                All Available Charters
            </h1>

            {/* Type Selection Buttons */}
            <div className="w-full px-6 py-3  bg-hoverLighColor rounded-full flex justify-center flex-wrap gap-3">
                <button
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${selectType === 'AllTypes' ? 'text-amber-800 font-semibold bg-white' : 'text-black bg-hoverLighColor'}`}
                    onClick={() => handleTypeClick('AllTypes')}
                >
                    All Types
                </button>
                {getType?.length > 0 ? (
                    getType.map(
                        (e) =>
                            e.active === 'yes' && (
                                <button
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${selectType === e.section ? 'text-amber-800 font-semibold bg-white' : 'text-black bg-hoverLighColor'}`}
                                    onClick={() => handleTypeClick(e.section)}
                                    key={e._id}
                                >
                                    {e.section}
                                </button>
                            )
                    )
                ) : (
                    <button
                        className={`px-2 h-[2.5rem] mx-3 outline-none rounded-lg transition-all duration-700`}
                    >
                        No Types Available
                    </button>
                    // <p className="text-black">No Type Available</p>
                )}
            </div>

            {/* Charter Cards */}
            <div className="flex flex-wrap w-full justify-center items-center gap-6 py-8">
                {pushRes?.length > 0 ? (
                    pushRes.map((element, index) => <FightCard key={index} props={element} />)
                ) : (
                    <h2 className="text-2xl text-gray-600">No Data Found !!!</h2>
                )}
            </div>
        </div>
    );
}

export default AllAvailableCharters;
