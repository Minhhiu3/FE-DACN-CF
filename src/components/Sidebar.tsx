import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Slideshow from './Slideshow';

const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
];

const ClientSidebarAndSlideshow: React.FC = () => {
    return (
        <div className="w-full px-4 sm:px-8 mt-4">

            {/* Danh mục ngang cho mobile */}
            <div className="lg:hidden overflow-x-auto whitespace-nowrap mb-4 hide-scrollbar">
                <div className="inline-flex gap-4">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="text-sm px-4 py-2 border rounded-full text-gray-700 hover:text-black cursor-pointer hover:font-medium bg-gray-100 shrink-0"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Danh mục dọc cho desktop */}
            <div className="flex gap-4">
                <div className="hidden lg:block w-64 p-4 shadow-sm h-fit border-r border-gray-300">
                    <ul className="space-y-3">
                        {categories.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center text-sm text-gray-700 hover:text-black cursor-pointer hover:font-medium"
                            >
                                {item}
                                <FiChevronRight />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* <div className="hidden sm:block h-auto relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 opacity-50"></div>
                </div> */}

                {/* Slideshow chiếm phần còn lại */}
                <div className="flex-1">
                    <Slideshow />
                </div>
            </div>
        </div>
    );
};

export default ClientSidebarAndSlideshow;
