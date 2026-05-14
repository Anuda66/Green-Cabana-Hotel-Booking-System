import React from 'react'
import HederAbout from '../components/HederAbout'
import img1 from '../assets/cover6.jpg'
import { GoDotFill } from "react-icons/go";

function About() {
  return (
    <div>
      <HederAbout />

      <div className='mx-5 my-32 md:mx-10 lg:mx-20 '>
        {/* Page containt---------------------------------------*/}
        <div className='h-screen '>
          <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl">
            <div class="w-full h-64 lg:w-1/2 lg:h-auto ">
              <img class="h-full w-full object-cover rounded-3xl" src={img1} alt="Winding mountain road" />
            </div>

            <div class="max-w-lg bg-white md:max-w-2xl md:z-10 shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 border-2 rounded-3xl -mt-20">

              <div class="flex flex-col p-12 md:px-16 ">
                <div >
                  <p className="inline-flex items-center px-6 py-1 mb-4 text-base font-medium text-black border border-gray-400 rounded-full bg-gray-400/30 hover:bg-gray-500/50 backdrop-blur-sm md:text-md">Since 2015</p>
                </div>
                <h2 className="mb-2 text-3xl font-bold text-center sm:text-4xl md:text-5xl md:mb-4">	Born from a Love of the Wild</h2>
                <div className="text-left text-gray-500 text-md md:text-lg">
                  <p>Safari Green Cabana Resort was born from a simple belief: that luxury and nature can coexist beautifully. Nestled within a protected wildlife reserve, our resort offers an unparalleled escape where every cabana is designed to celebrate the jungle, not conquer it. </p>
                </div>
                <br />
                <div className="text-left text-gray-500 text-md md:text-lg">
                  <p>Our team of conservationists, architects, and hospitality experts work together to ensure that every aspect of your stay enriches both you and the environment. From solar-powered amenities to organic farm-to-table dining, sustainability isn't just a goal—it's our foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
