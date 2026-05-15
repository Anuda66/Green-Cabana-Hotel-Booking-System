import React from 'react'
import HederContact from '../components/HederContact'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <HederContact />
      <div className='mx-5 my-32 -mt-10 md:mx-10 lg:mx-20'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 lg:px-20'>
            <h1 class="leading-tight text-4xl font-bold text-primary-100">We'd Love to Hear from You</h1>
            <p class="mt-4 text-gray-500 text-md">Whether you have a question about our cabanas,<br></br> experiences, or anything else, our team is ready to help.</p>
            <div className='flex flex-col mt-5 '>
              <p className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm text-gray-500 text-md"><span><FaLocationDot /></span>Green Valley Wildlife Reserve, Tropical Highlands, 00100</p>
              <p className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm text-gray-500 text-md"><span><FaPhone className='' /></span>+1 (555) 234-5678</p>
              <p className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm text-gray-500 text-md"><span><MdEmail /></span>stay@greencabana.com</p>
              <p className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm text-gray-500 text-md"><span><FaClock /></span>eception: 24/7 | Activities: 6am–8pm</p>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <div className="">
              <div className="w-full max-w-2xl p-8 border shadow-md rounded-2xl lg-mt-0 sm:mt-10">
                <div className="space-y-5">
                  {/* Name & Email---------------------------------------------------------------------------- */}
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex-1">
                      <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-3 text-sm transition border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 text-sm transition border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                    </div>
                  </div>

                  {/* Subject---------------------------------------------------------------------------- */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" placeholder="How can we help?" className="w-full px-4 py-3 text-sm transition border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                  </div>

                  {/* Message---------------------------------------------------------------------------- */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
                    <textarea rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 text-sm transition border border-gray-200 rounded-lg outline-none resize-none focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                  </div>

                  {/* Submit---------------------------------------------------------------------------- */}
                  <button type="button" className="w-full py-3 text-sm font-semibold text-white transition bg-green-700 rounded-lg hover:bg-green-800 active:scale-95">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
