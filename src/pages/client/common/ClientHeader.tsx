import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <>
            {/* Banner top */}
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

            {/* Main Header */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="text-xl font-bold">Royal Shoe</div>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    <div className="flex gap-6 text-sm">
                        <Link to="/" className="text-black/90">Trang chủ</Link>
                        <Link to="/contact" className="text-black/90">Liên hệ</Link>
                        <Link to="/about" className="text-black/90">Giới thiệu</Link>
                        {!isLoggedIn && (
                            <Link to="/register" className="text-black/90">Đăng ký</Link>
                        )}
                        <Link to="/products" className="text-black/90">Sản phẩm</Link>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-gray-100 text-sm px-4 py-2 rounded-md w-64 placeholder:text-gray-500"
                        />
                        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    {/* Icons */}
                    <div className="flex gap-5 text-xl items-center relative">
                        <FiHeart className="cursor-pointer" />
                        <FiShoppingCart className="cursor-pointer" />
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <FiUser className="cursor-pointer" />
                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-50 text-sm"
                                    >
                                        {isLoggedIn ? (
                                            <>
                                                <Link
                                                    to="/user-profile"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Thông tin cá nhân
                                                </Link>
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Đăng xuất
                                                </button>
                                            </>
                                        ) : (
                                            <Link
                                                to="/login"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Đăng nhập
                                            </Link>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </nav>

                {/* Mobile menu button */}
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

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden bg-white shadow-md px-4 py-4 space-y-3 border"
                    >
                        <Link to="/" className="block text-black/90">Trang chủ</Link>
                        <Link to="/contact" className="block text-black/90">Liên hệ</Link>
                        <Link to="/about" className="block text-black/90">Giới thiệu</Link>
                        {!isLoggedIn && <Link to="/register" className="block text-black/90">Đăng ký</Link>}
                        <Link to="/products" className="block text-black/90">Sản phẩm</Link>
                        <Link to={isLoggedIn ? "/user-profile" : "/login"} className="block text-black/90">
                            {isLoggedIn ? "Thông tin cá nhân" : "Đăng nhập"}
                        </Link>
                        {isLoggedIn && (
                            <button onClick={handleLogout} className="block text-left text-black/90 w-full">
                                Đăng xuất
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
