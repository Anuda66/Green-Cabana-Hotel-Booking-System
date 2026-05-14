import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";


function NavBar() {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(false);


    return (

        <div className="fixed top-0 left-0 z-50 w-full bg-primary-200">
            <div className='px-5 md:px-14 sm:px-10'>
                <div className="flex items-center justify-between py-4 m-2 text-sm ">

                    {/* App Logo---------------------------------- */}
                    <div>
                        <p className="text-lg font-bold text-green-600">Green Cabana</p>
                    </div>

                    <ul className="items-start hidden gap-5 font-medium md:flex">
                        <NavLink onClick={() => scrollTo(0, 0)} to={"/"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Home</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                        </NavLink>
                        <NavLink onClick={() => scrollTo(0, 0)} to={"/cabanas"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Cabanas</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                        </NavLink>
                        <NavLink onClick={() => scrollTo(0, 0)} to={"/experiences"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Experiences</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                        </NavLink>

                        <NavLink onClick={() => scrollTo(0, 0)} to={"/gallery"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Gallery</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200 " />
                        </NavLink>

                        <NavLink onClick={() => scrollTo(0, 0)} to={"/about"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">About</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200 " />
                        </NavLink>

                        <NavLink onClick={() => scrollTo(0, 0)} to={"/contact"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110 hover:text-secondary-50"> Contact</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                        </NavLink>
                        <div>
                            <p onClick={() => navigate('/booking')} className="px-3 py-2 text-white transition duration-300 ease-in-out delay-150 bg-green-900 rounded-full cursor-pointer hover:text-secondary hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Book Now</p>
                        </div>
                    </ul>
                    {/*Menu Icon ----------------------------------------*/}
                    <RiMenuUnfold4Fill onClick={() => setShowMenu(true)} className="w-10 h-6 text-white md:hidden" />
                </div>
                <div className="flex items-center gap-4">

                    
                    {/* Mobile menu---------------------------------------------------- */}
                    <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 overflow-hidden  transition-all fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-20 `} style={{ opacity: '1', transform: 'none', transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out' }}>
                        <div className="flex items-center justify-between px-7 ">
                            {/* App Logo-----------------------------------------------------*/}
                            <div>
                                <p className="text-lg font-bold text-green-600">Green Cabana</p>
                            </div>
                            {/* Close Icon--------------------------------------------------*/}
                            <RxCross2 onClick={() => setShowMenu(false)} className="w-10 h-6 text-white md:hidden" />
                        </div>
                        <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium text-white">
                            <NavLink onClick={() => setShowMenu(false)} to={'/'}>Home
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to={'/cabanas'}>Cabanas
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to={'/experiences'}>Experiences
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to={'/gallery'}>Gallery
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to={'/about'}>About
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to={'/contact'}>Contact
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </NavLink>
                            <div>
                            <p onClick={() => navigate('/booking')} className="px-3 py-2 text-white transition duration-300 ease-in-out delay-150 bg-green-900 rounded-full cursor-pointer hover:text-secondary hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Book Now</p>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
