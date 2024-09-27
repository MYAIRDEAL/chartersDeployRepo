import React from 'react'

import BlogContent from './BlogContent';
import PageBanner from '../../components/PageBanner';
import EnquiryPopUp from '../../components/EnquiryPopUp';

function Blog({ temp, setTemp }) {
    return (

        <div>
            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>

            <PageBanner data={'Blog Post'} />
            <BlogContent />
        </div>

    )
}

export default Blog