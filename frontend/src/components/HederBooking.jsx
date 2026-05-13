import React from 'react'
import Cover from '../assets/cover6.jpg'

function HederBooking() {
    return (
        <div>
            <div className=''>
                {/*Cover Image section-----------------------------*/}
                <div className="relative w-full h-48 mt-16 mb-24 sm:h-56 md:h-64 lg:h-72 xl:h-96">

                    {/* Image container */}
                    <img src={Cover} alt="Cover" className="object-cover w-full h-full animate-fadeIn" />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Bottom white gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>

                    {/* Text content container */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
                        <div className="inline-flex items-center px-6 py-1 text-base font-medium text-white border border-gray-500 rounded-full bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-sm">
                            <p>Reservations</p>
                        </div>
                        <h1 className="mb-2 text-5xl font-bold text-center text-white sm:text-6xl md:text-6xl md:mb-4">
                            Book Your Stay
                        </h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HederBooking
