import React from "react"
// import Image from "next/image"
export default function Hero() {
  return (
    <>
      {/* <div
      className=" absolute
    h-[500px]
    w-full
    left-0
    top-0
    overflow-hidden
    -z-10       
      "
    >
      <Image
        src="/assets/images/hero-img.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
    </div> */}
      <div className="mt-[100px] mb-[80px] max-w-[514px]">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Plan Your Trip with Ease
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Customize your travel itinerary in minutes—pick your destination, set
          your preferences, and explore with confidence.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-md transition duration-300">
          Get Started
        </button>
      </div>
    </>
  )
}
