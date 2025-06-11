import React, { useState } from 'react';
import TitleComponnent from './TitleComponnent';
import {
    FiSmartphone,
    FiMonitor,
    FiWatch,
    FiCamera,
    FiHeadphones,
} from 'react-icons/fi';
import { FaGamepad } from 'react-icons/fa';

type Category = {
    name: string;
    icon: React.ReactNode;
};

const categories: Category[] = [
    { name: 'Điện thoại', icon: <FiSmartphone size={28} /> },
    { name: 'Máy tính', icon: <FiMonitor size={28} /> },
    { name: 'Đồng hồ thông minh', icon: <FiWatch size={28} /> },
    { name: 'Camera', icon: <FiCamera size={28} /> },
    { name: 'Tai nghe', icon: <FiHeadphones size={28} /> },
    { name: 'Gaming', icon: <FaGamepad size={28} /> },
];

const CategoriesSelec: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(4);

    return (
        <>
            <TitleComponnent label="Danh mục" title="Danh sách danh mục" />
            <div className="mb-4 flex flex-wrap justify-center gap-10">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-24 h-24 border flex flex-col items-center justify-center gap-2 
            text-sm transition 
            ${index === activeIndex
                                ? 'bg-red-500 text-white border-red-500'
                                : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                        {category.icon}
                        <span className="font-medium">{category.name}</span>
                    </button>
                ))}
            </div></>
    );
};

export default CategoriesSelec;
