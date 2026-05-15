import React from 'react'
import HederBooking from '../components/HederBooking'
import { useState } from 'react'

const cabanas = [
  'Jungle View Cabana',
  'River Side Cabana',
  'Tree Top Cabana',
  'Garden Cabana',
  'Sunset Cabana',
]


function Booking() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cabana: '',
    checkIn: '',
    checkOut: '',
    adults: '1',
    children: '0',
    specialRequests: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log('Booking Data:', formData)
    // connect your API here
  }

  const inputClass =
    'w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition bg-white'

  const labelClass = 'block mb-1 text-sm font-medium text-gray-700'


  return (
    <div className='mt-10'>
      <HederBooking />
      <div className='mx-5 my-32 -mt-10 md:mx-10 lg:mx-20'>
        <div className="flex items-center justify-center min-h-screen px-4 py-16 bg-gray-50">
          <div className="w-full max-w-3xl">

            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800">Book Your Stay</h2>
              <p className="mt-2 text-gray-500">Reserve your perfect jungle retreat</p>
            </div>

            <div className="p-8 bg-white shadow-md rounded-2xl">

              {/* Section — Personal Info */}
              <div className="mb-6">
                <h3 className="pb-2 mb-4 text-sm font-semibold tracking-widest text-green-700 uppercase border-b border-gray-100">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 77 123 4567"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Section — Booking Details */}
              <div className="mb-6">
                <h3 className="pb-2 mb-4 text-sm font-semibold tracking-widest text-green-700 uppercase border-b border-gray-100">
                  Booking Details
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {/* Cabana Type */}
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Select Cabana</label>
                    <select
                      name="cabana"
                      value={formData.cabana}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Choose a cabana...</option>
                      {cabanas.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Check In */}
                  <div>
                    <label className={labelClass}>Check-In Date</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Check Out */}
                  <div>
                    <label className={labelClass}>Check-Out Date</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Adults */}
                  <div>
                    <label className={labelClass}>Adults</label>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  {/* Children */}
                  <div>
                    <label className={labelClass}>Children</label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {[0, 1, 2, 3].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>

              {/* Section — Special Requests */}
              <div className="mb-8">
                <h3 className="pb-2 mb-4 text-sm font-semibold tracking-widest text-green-700 uppercase border-b border-gray-100">
                  Special Requests
                </h3>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any dietary requirements, accessibility needs, special occasions..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-3.5 text-sm font-semibold text-white transition bg-green-700 rounded-lg hover:bg-green-800 active:scale-95"
              >
                Confirm Booking
              </button>

              <p className="mt-4 text-xs text-center text-gray-400">
                By confirming, you agree to our terms and cancellation policy.
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Booking
