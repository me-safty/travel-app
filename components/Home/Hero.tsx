import React from "react"
export default function Hero() {
  return (
    <>
      <div className="mt-[100px] mb-[80px] max-w-[514px]">
        <h2 className="font-bold text-[72px] leading-[110px] tracking-[0px] text-[#1F1F36]">
          Plan Your Trip with Ease
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-[#2E2C48]">
          Customize your travel itinerary in minutes—pick your destination, set
          your preferences, and explore with confidence.
        </p>
        <button className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-md transition duration-300">
          Get Started
        </button>
      </div>
    </>
  )
}
