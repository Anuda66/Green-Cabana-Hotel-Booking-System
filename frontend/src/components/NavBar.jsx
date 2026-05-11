import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaCloud } from "react-icons/fa";

function NavBar() {
    return (

        <div className='fixed top-0 left-0 w-full bg-white shadow-md '>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <div className='flex items-center justify-between py-5 font-medium'>
                    <Link to={'/'} className='flex items-center gap-2'>
                        <p className='text-2xl font-bold text-blue-800'>Green Cabana</p>
                    </Link>

                    <ul className='items-center hidden gap-10 text-gray-700 sm:flex text-md '>
                        <NavLink to="/" className='flex flex-col items-center gap-1 '>
                            <p>Home</p>
                            <hr className='w-3/4 border-none h-[2px] bg-yellow-500 hidden' />
                        </NavLink>
                        <NavLink to="/cabanas" className='flex flex-col items-center gap-1'>
                            <p>Cabanas</p>
                            <hr className='w-3/4 border-none h-[2px] bg-yellow-500 hidden' />
                        </NavLink>
                        <NavLink to="/experiences" className='flex flex-col items-center gap-1'>
                            <p>Experiences</p>
                            <hr className='w-3/4 border-none h-[2px] bg-yellow-500 hidden' />
                        </NavLink>

                        <NavLink to="/gallery" className='flex flex-col items-center gap-1'>
                            <p>Gallery</p>
                            <hr className='w-3/4 border-none h-[2px] bg-yellow-500 hidden' />
                        </NavLink>
                        <NavLink to="/about" className='flex flex-col items-center gap-1'>
                            <p>About</p>
                            <hr className='w-3/4 border-none h-[2px] bg-yellow-500 hidden' />
                        </NavLink>
                        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                            <p>Contact</p>
                            <hr className='w-3/4 border-none h-[2px] bg-yellow-500 hidden' />
                        </NavLink>
                        <NavLink to="/booking" className='flex flex-col items-center gap-1 px-4 py-2 text-white bg-green-700 rounded-full'>
                            <p>Book Now</p>
                            <hr className='w-3/4 border-none h-[2px] bg-yellow-500 hidden ' />
                        </NavLink>

                        {/* <li className='flex items-center'>
                {
                  token ?
                    <div>
                      <button onClick={() => navigate('/subscriptions')} className='items-center px-4 py-2 text-base font-medium border border-transparent rounded-md shadow-sm cursor-pointer btn-primary text-primary bg-accent hover:bg-yellow-400'>Dashboard</button>
                    </div>
                    : <button onClick={() => navigate('/login')} className='px-4 py-2 text-white bg-blue-800 rounded-md cursor-pointer hover:bg-blue-700'>Sign In</button>
                }
              </li> */}
                    </ul>
                    {/* <img onClick={() => setVisible(true)} src={menu} alt='menu Icon' className='w-5 cursor-pointer sm:hidden ' /> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar
