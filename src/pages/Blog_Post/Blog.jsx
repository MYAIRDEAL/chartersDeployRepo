import React from 'react'

import BlogContent from './BlogContent';
import PageBanner from '../../components/PageBanner';

function Blog() {
    return (

        <div>
            <PageBanner data={'Blog Post'} />
            <BlogContent />
        </div>

    )
}

export default Blog