import React from "react"
export default function Hero() {
  return (
    <>
      <div className="mt-[100px] mb-[80px] max-w-[514px]">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4">
          Plan Your Trip with Ease
        </h2>
        <p className="text-lg sm:text-xl mb-8">
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
