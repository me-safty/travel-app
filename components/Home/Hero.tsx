import React from "react"
export default function Hero() {
  return (
    <>
      <div className="mt-[100px] mb-[80px] max-w-[514px]">
        <h1 className="font-bold text-[72px] leading-tight text-[#1F1F36]">
          Plan Your Trip with Ease
        </h1>
        <p className="text-lg sm:text-xl my-5 text-[#2E2C48]">
          Customize your travel itinerary in minutes—pick your destination, set
          your preferences, and explore with confidence.
        </p>
        <button className="px-10 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-md transition duration-300 cursor-pointer">
          Get Started
        </button>
      </div>
    </>
  )
}
