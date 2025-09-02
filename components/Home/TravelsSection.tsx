"use client"

import { useState } from "react"
import TravelCard from "../shared/TravelCard"
import DynamicPagination from "../shared/DynamicPagination"
import { tripsData } from "@/app/db"

const ITEMS_PER_PAGE = 8

export default function TravelsSection() {
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentTrips = tripsData.slice(startIndex, endIndex)
  const totalPages = Math.ceil(tripsData.length / ITEMS_PER_PAGE)

  return (
    <section className="mt-30">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Handpicked Trips
        </h2>
        <p className="text-lg text-gray-600">
          Browse well-planned trips designed for different travel styles and
          interests.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full pb-8 items-baseline border-b border-gray-200">
        {currentTrips.map((trip, index) => (
          <TravelCard
            key={index}
            {...trip}
          />
        ))}
      </div>
      <DynamicPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)
        }
      />
    </section>
  )
}
