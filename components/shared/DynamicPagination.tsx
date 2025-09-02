"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function DynamicPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <Pagination className="mt-10">
      <PaginationContent className="w-full justify-between items-center">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 1) onPageChange(currentPage - 1)
            }}
            className="bg-white shadow-md px-4 py-2 rounded hover:bg-gray-100 transition"
          />
        </PaginationItem>
        <div className="flex gap-1">
          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  onPageChange(page)
                }}
                className={`px-4 py-2 rounded transition ${
                  currentPage === page
                    ? "bg-blue-600 text-white shadow-md rounded-[8px]"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        </div>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages) onPageChange(currentPage + 1)
            }}
            className="bg-white shadow-md px-4 py-2 rounded hover:bg-gray-100 transition"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
