import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import qr from '../../../components/common/img/qr.jpg';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-10">
            <div className="max-w-screen-xl mx-auto 
                      grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-5 
                      gap-10">
                {/* Cột 1 */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
                    <p className="font-semibold mb-2">Subscribe</p>
                    <p className="text-sm mb-4">Get 10% off your first order</p>
                    <form className="flex items-center border border-white rounded bg-black overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-black text-white placeholder:text-gray-500 px-4 py-2 focus:outline-none w-full"
                        />
                        <button type="submit" className="px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6-6m6 6l-6 6" />
                            </svg>
                        </button>
                    </form>
                </div>

                {/* Cột 2 */}
                <div>
                    <h3 className="text-lg font-bold mb-4 ml-8">Support</h3>
                    <ul className="text-sm space-y-2">
                        <li>111 Bijoy sarani, Dhaka, Bangladesh</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                {/* Cột 3 */}
                <div>
                    <h3 className="text-lg font-bold mb-4 ml-8">Account</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="no-underline hover:underline text-white/50">My Account</a></li>
                        <li><a href="#" className="no-underline hover:underline text-white/50">Login/Register</a></li>
                        <li><a href="#" className="no-underline hover:underline text-white/50">Cart</a></li>
                        <li><a href="#" className="no-underline hover:underline text-white/50">Wishlist</a></li>
                        <li><a href="#" className="no-underline hover:underline text-white/50">Shop</a></li>
                    </ul>
                </div>

                {/* Cột 4 */}
                <div>
                    <h3 className="text-lg font-bold mb-4 ml-8">Quick Link</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="no-underline hover:underline text-white/50">Privacy Policy</a></li>
                        <li><a href="#" className="no-underline hover:underline text-white/50">Terms of Use</a></li>
                        <li><a href="#" className="no-underline hover:underline text-white/50">FAQ</a></li>
                        <li><a href="#" className="no-underline hover:underline text-white/50">Contact Us</a></li>
                    </ul>
                </div>

                {/* Cột 5 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Download App</h3>
                    <p className="text-sm text-gray-400 mb-4">Save $3 with new user</p>
                    <div className="flex gap-4 items-start mb-4">
                        <img src={qr} alt="QR Code" className="w-[90px] h-[90px] object-contain" />
                        <div className="flex flex-col gap-2">
                            <a
                                href="https://play.google.com/store/apps/details?id=tenApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Google Play"
                                    className="w-36"
                                />
                            </a>
                            <a
                                href="https://apps.apple.com/app/idtenApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    className="w-36"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaTiktok /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Exclusive. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
