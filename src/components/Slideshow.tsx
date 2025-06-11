import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
    '/images/qr.jpg',
    '/images/imgtest1.jpg',
    '/images/WD-105_Đàm Văn Hòa_SU25.png',
];

const Slideshow: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-80 overflow-hidden shadow-sm">

            {/* Slide images */}
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`slide-${i}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}


            <div className="absolute bottom-4 left-4 flex flex-col items-center gap-2 z-10">

                {/* Nút Mua Ngay */}
                <Link
                    to="#"
                    className=" mb-2 ml-4 text-white px-4 py-2 rounded hover:bg-gray-200 transition"
                >
                    Mua Ngay
                </Link>


                <div className="flex gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === index ? 'bg-red-600' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
