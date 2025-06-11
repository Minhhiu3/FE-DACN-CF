import React from 'react';
import Sidebar from './Sidebar';
import Slideshow from './Slideshow';

const HomeSection: React.FC = () => {

    return (
        <div className="grid grid-cols-12 gap-4 px-4 py-6">

            {/* Sidebar */}
            <div className="sm:hidden col-span-3">
                <Sidebar />
            </div>

            {/* Slideshow */}
            <div className=" col-span-9">
                <Slideshow />
            </div>
        </div>
    );
};

export default HomeSection;
