import React from 'react'
import HederExperiences from '../components/HederExperiences'
import img1 from '../assets/cover7.jpg'
import img2 from '../assets/cover5.jpg'
import { FiDollarSign } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

function Experiences() {
  return (
    <div>
      <HederExperiences />
      <div className='mx-5 md:mx-10 lg:mx-20 '>
        {/* Page containt---------------------------------------------------- */}
        <div class="min-h-screen flex flex-col   justify-center bg-white -mt-20 lg:-mt-40">
          <div data-theme="teal" class="mx-auto ">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <img class="h-full object-cover rounded-3xl shadow-xl" src={img1} width="733" height="412" alt='""' typeof="foaf:Image" />
                </div>
              </div>
              <div class="p-6 bg-grey">
                <div className="pt-4 pb-2 ">
                  <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FaRegClock />4 hours</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FiDollarSign />150/person</span>
                </div>
                <div class="leading-relaxed">
                  <h2 class="leading-tight text-4xl font-bold text-primary-100">Safari Expedition</h2>
                  <p class="mt-4 text-gray-600">Embark on a guided jeep safari through the wildlife reserve, spotting elephants, leopards, and exotic birds.</p>
                </div>
                {/* button--------------------------------------------------------- */}
                <div className='mt-10 '>
                  <a href='/booking' className='px-5 py-2 text-lg text-center text-white bg-green-900 border-2 border-gray-500 rounded-full hover:bg-green-700 hover:text-white'> Book This Experience</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="min-h-screen flex flex-col   justify-center bg-white -mt-20 lg:-mt-40">
          <div data-theme="teal" class="mx-auto ">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="p-6 bg-grey">
                <div className="pt-4 pb-2 ">
                  <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full "><FaRegClock />4 hours</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"><FiDollarSign />150/person</span>
                </div>
                <div class="leading-relaxed">
                  <h2 class="leading-tight text-4xl font-bold text-primary-100">Jungle Trekking</h2>
                  <p class="mt-4 text-gray-600">Hike through ancient rainforest trails with an expert naturalist guide.</p>
                </div>
                {/* button--------------------------------------------------------- */}
                <div className='mt-10 '>
                  <a href='/booking' className='px-5 py-2 text-lg text-center text-white bg-green-900 border-2 border-gray-500 rounded-full hover:bg-green-700 hover:text-white'> Book This Experience</a>
                </div>
              </div>
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <img class="h-full object-cover rounded-3xl shadow-xl" src={img2} width="733" height="412" alt='""' typeof="foaf:Image" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
