import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <div className="bg-black text-white text-sm px-4 py-2 flex justify-between items-center">
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
                    <button className="font-bold underline ml-1">ShopNow</button>
                </p>
                <select className="bg-black text-white text-sm">
                    <option>English</option>
                    <option>Tiếng Việt</option>
                </select>
            </div>


            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">

                <div className="text-xl font-bold">Exclusive</div>


                <nav className="hidden lg:flex items-center gap-8">

                    <div className="flex gap-6 text-sm">
                        <Link to="/" className="no-underline hover-underline text-Button text-center text-base font-normal leading-6 text-black/90">Trang chủ</Link>
                        <Link to="/contact" className="no-underline hover-underline text-Button text-center text-base font-normal leading-6 text-black/90">Liên hệ</Link>
                        <Link to="/about" className="no-underline hover-underline text-Button text-center text-base font-normal leading-6 text-black/90">Giới thiệu</Link>
                        <Link to="/signup" className="no-underline hover-underline text-Button text-center text-base font-normal leading-6 text-black/90">Đăng ký</Link>
                        <Link to="/products" className="no-underline hover-underline block text-sm text-Button text-center text-base font-normal leading-6 text-black/90">Sản phẩm</Link>
                    </div>


                    <div className="relative">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-gray-100 text-sm px-4 py-2 rounded-md w-64 placeholder:text-gray-500"
                        />
                        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>


                    <div className="flex gap-5 text-xl items-center">
                        <FiHeart className="cursor-pointer" />
                        <FiShoppingCart className="cursor-pointer" />
                        <FiUser className="cursor-pointer" />
                    </div>
                </nav>


                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>
            </header>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden bg-white shadow-md px-4 py-4 space-y-3 border"
                    >
                        <Link to="/" className="no-underline hover-underline block text-sm text-Button text-center text-base font-normal leading-6 text-black/90">Trang chủ</Link>
                        <Link to="/contact" className="no-underline hover-underline block text-sm text-Button text-center text-base font-normal leading-6 text-black/90">Liên hệ</Link>
                        <Link to="/about" className="no-underline hover-underline block text-sm text-Button text-center text-base font-normal leading-6 text-black/90">Giới thiệu</Link>
                        <Link to="/signup" className="no-underline hover-underline block text-sm text-Button text-center text-base font-normal leading-6 text-black/90">Đăng ký</Link>
                        <Link to="/products" className="no-underline hover-underline block text-sm text-Button text-center text-base font-normal leading-6 text-black/90">Sản phẩm</Link>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full px-4 py-2 bg-gray-100 rounded-md text-sm"
                            />
                            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>

                        <div className="flex gap-6 text-xl mt-2">
                            <FiHeart />
                            <FiShoppingCart />
                            <FiUser />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
