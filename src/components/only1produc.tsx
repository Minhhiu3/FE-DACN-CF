import React from 'react';
import { Link } from 'react-router-dom';

import testImg from '../../public/images/imgtest1.jpg';

const PromoBanner: React.FC = () => {
    const product = {
        id: 1,
        name: "Wireless Headphones",
        price: "1.200.000₫",
        image: testImg,
        tag: "Best Seller"
    };

    return (
        <div className='flex flex-col items-center justify-center mt-8 mb-12'>
            <div className="relative w-[80%] h-80 sm:h-96 overflow-hidden mb-4">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />


                <div className="absolute inset-y-0 left-4 flex flex-col justify-between py-4 ml-5 mb-2">

                    <div className="text-green-500 text-xs sm:text-sm px-3 py-1 rounded-full shadow bg-white w-fit">
                        {product.tag}
                    </div>


                    <div className="text-white mt-20">
                        <h2 className="text-lg sm:text-2xl font-bold drop-shadow-md">{product.name}</h2>
                        <p className="text-md sm:text-lg drop-shadow">{product.price}</p>
                    </div>

                    <div className=' hidden sm:flex gap-2' >
                        <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs'>opt1</div>
                        <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs'>opt2</div>
                        <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs'>opt3</div>
                        <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs'>opt4</div>
                    </div>


                    <Link
                        to={`/products/${product.id}`}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold shadow-md transition w-fit"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
