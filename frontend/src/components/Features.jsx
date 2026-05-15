import React from 'react'
import Cover1 from '../assets/cover1.jpg'
import Cover2 from '../assets/cover2.jpg'
import Cover3 from '../assets/cover3.jpg'
import { FaBed } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

function Features() {
    return (
        <div className='mx-5 my-32 md:mx-10 lg:mx-20 '>
            <div className='items-center mb-10 text-center '>
                <div className="inline-flex items-center px-6 py-1 mb-4 text-base font-medium text-black border border-gray-400 rounded-full bg-gray-400/30 hover:bg-gray-500/50 backdrop-blur-sm md:text-md">
                    <p>Our Cabanas</p>
                </div>
                <h1 className="mb-2 text-4xl font-bold text-center sm:text-6xl md:text-6xl md:mb-4">
                    Where Luxury Meets the Wild
                </h1>
                <p className="text-lg text-center text-gray-500 md:text-xl">
                    Each cabana is a sanctuary of comfort, designed to blend seamlessly with the<br className='hidden' />surrounding jungle.
                </p>
            </div>

            {/* Featurs------------------------------------------------------------------------------------------------------------------- */}
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                <div className="relative max-w-sm overflow-hidden shadow-lg cursor-pointer rounded-xl group">

                    {/* Image---------------------------------------------------------------------------- */}
                    <img
                        className="w-full transition-transform duration-500 group-hover:scale-110"
                        src={Cover1}
                        alt="Sunset in the mountains"
                    />

                    {/* Dark overlay — hidden by default, shows on hover */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-black/40 group-hover:opacity-100" />

                    <div className="px-6 py-4">
                        <div className="flex justify-between">
                            <p className='mb-2 text-xl font-bold'>Jungle Canopy Suite</p>
                            <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                                <FiDollarSign />200/night
                            </span>
                        </div>
                        <p className="text-base text-gray-400">
                            Elevated among the treetops with panoramic jungle views and a private balcony.
                        </p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaBed />1 Bed
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaUserFriends />2 Guests
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaRegSquare />65 Sqm
                        </span>
                    </div>
                </div>
                <div className="relative max-w-sm overflow-hidden shadow-lg cursor-pointer rounded-xl group">

                    {/* Image */}
                    <img
                        className="w-full transition-transform duration-500 group-hover:scale-110"
                        src={Cover2}
                        alt="Sunset in the mountains"
                    />

                    {/* Dark overlay — hidden by default, shows on hover */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-black/40 group-hover:opacity-100" />

                    <div className="px-6 py-4">
                        <div className="flex justify-between">
                            <p className='mb-2 text-xl font-bold'>Jungle Canopy Suite</p>
                            <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                                <FiDollarSign />200/night
                            </span>
                        </div>
                        <p className="text-base text-gray-400">
                            Elevated among the treetops with panoramic jungle views and a private balcony.
                        </p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaBed />1 Bed
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaUserFriends />2 Guests
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaRegSquare />65 Sqm
                        </span>
                    </div>
                </div>
                <div className="relative max-w-sm overflow-hidden shadow-lg cursor-pointer rounded-xl group">

                    {/* Image */}
                    <img
                        className="w-full transition-transform duration-500 group-hover:scale-110"
                        src={Cover3}
                        alt="Sunset in the mountains"
                    />

                    {/* Dark overlay — hidden by default, shows on hover */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-black/40 group-hover:opacity-100" />

                    <div className="px-6 py-4">
                        <div className="flex justify-between">
                            <p className='mb-2 text-xl font-bold'>Jungle Canopy Suite</p>
                            <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                                <FiDollarSign />200/night
                            </span>
                        </div>
                        <p className="text-base text-gray-400">
                            Elevated among the treetops with panoramic jungle views and a private balcony.
                        </p>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaBed />1 Bed
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaUserFriends />2 Guests
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            <FaRegSquare />65 Sqm
                        </span>
                    </div>
                </div>
            </div>

            {/* button--------------------------------------------------------- */}
            <div className='items-center mt-20 text-center '>
                <a href='/cabanas' className='px-5 py-2 text-lg text-center border-2 border-gray-500 rounded-full hover:bg-green-900 hover:text-white '> View All Cabanas</a>
            </div>
        </div>
    )
}

export default Features
