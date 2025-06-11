import React from "react";
import TitleComponnent from "./TitleComponnent";
const images = [
    '/images/qr.jpg',
    '/images/imgtest1.jpg',
    '/images/WD-105_Đàm Văn Hòa_SU25.png',
];
const Fetured = () => {
    return (
        <>
            <TitleComponnent label="Bộ sưu tập" title="Mới nhất" />
            <div className="grid grid-cols-2 gap-4 p-4">
                {/* PlayStation 5 (Chiếm 2 hàng) */}
                <div className="row-span-2 relative rounded-lg overflow-hidden">
                    <img
                        src={images[1]}
                        alt="PS5"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-xl font-bold">PlayStation 5</h2>
                        <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                        <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
                    </div>
                </div>

                {/* Women's Collections */}
                <div className="relative rounded-lg overflow-hidden">
                    <img
                        src={images[1]}
                        alt="Women's Collections"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-xl font-bold">Women’s Collections</h2>
                        <p className="text-sm">Featured woman collections that give you another vibe.</p>
                        <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
                    </div>
                </div>

                {/* Speakers & Perfume */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Speakers */}
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            src={images[1]}
                            alt="Speakers"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-bold">Speakers</h2>
                            <p className="text-sm">Amazon wireless speakers</p>
                            <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
                        </div>
                    </div>

                    {/* Perfume */}
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            src={images[2]}
                            alt="Perfume"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-bold">Perfume</h2>
                            <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                            <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fetured;
