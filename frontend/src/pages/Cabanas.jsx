import React from 'react'
import HederCabana from '../components/HederCabana'
import Cover1 from '../assets/cover1.jpg'
import Cover2 from '../assets/cover2.jpg'
import Cover3 from '../assets/cover3.jpg'
import Cover4 from '../assets/cover4.jpg'
import Cover5 from '../assets/cover5.jpg'
import Cover6 from '../assets/cover6.jpg'
import { FaBed } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

function Cabanas() {
  return (
    <div>
      <HederCabana />
      <div className='mx-5 my-32 -mt-20 md:mx-10 lg:mx-20'>
        {/* Featurs------------------------------------------------------------------------------------------------------------------- */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-xl">
            <img className="w-full" src={Cover1} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <p className='mb-2 text-xl font-bold'>Jungle Canopy Suite</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FiDollarSign />200/night</span>
              </div>
              <p className="text-base text-gray-400">
                Elevated among the treetops with panoramic jungle views and a private balcony.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FaBed />1 Bed</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaUserFriends />2 Guests</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaRegSquare />65 Sqm</span>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-xl">
            <img className="w-full" src={Cover2} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <p className='mb-2 text-xl font-bold'>Riverside Retreat</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FiDollarSign />200/night</span>
              </div>
              <p className="text-base text-gray-400">
                Nestled by the river with an open-air bathroom and ambient jungle sounds.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FaBed />1 Bed</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaUserFriends />2 Guests</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaRegSquare />65 Sqm</span>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-xl">
            <img className="w-full" src={Cover3} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <p className='mb-2 text-xl font-bold'>Treehouse Villa</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FiDollarSign />200/night</span>
              </div>
              <p className="text-base text-gray-400">
                A luxurious treehouse experience with a private plunge pool and stunning canopy views.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FaBed />1 Bed</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaUserFriends />2 Guests</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaRegSquare />65 Sqm</span>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-xl">
            <img className="w-full" src={Cover4} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <p className='mb-2 text-xl font-bold'>Treehouse Villa</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FiDollarSign />200/night</span>
              </div>
              <p className="text-base text-gray-400">
                A luxurious treehouse experience with a private plunge pool and stunning canopy views.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FaBed />1 Bed</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaUserFriends />2 Guests</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaRegSquare />65 Sqm</span>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-xl">
            <img className="w-full" src={Cover5} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <p className='mb-2 text-xl font-bold'>Treehouse Villa</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FiDollarSign />200/night</span>
              </div>
              <p className="text-base text-gray-400">
                A luxurious treehouse experience with a private plunge pool and stunning canopy views.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FaBed />1 Bed</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaUserFriends />2 Guests</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaRegSquare />65 Sqm</span>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-xl">
            <img className="w-full" src={Cover6} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <p className='mb-2 text-xl font-bold'>Treehouse Villa</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FiDollarSign />200/night</span>
              </div>
              <p className="text-base text-gray-400">
                A luxurious treehouse experience with a private plunge pool and stunning canopy views.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FaBed />1 Bed</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaUserFriends />2 Guests</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FaRegSquare />65 Sqm</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cabanas
