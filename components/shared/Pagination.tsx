import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationExample() {
  return (
    <Pagination className="pagination mt-20">
      <PaginationContent className="paginationContent w-full justify-between">
        <PaginationItem className="paginationItem">
          <PaginationPrevious
            href="#"
            className="paginationPrevious"
          />
        </PaginationItem>
        <div className="flex">
          <PaginationItem>
            <PaginationLink
              href="#"
              className="paginationLink"
            >
              1
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              href="#"
              className="paginationLink"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="paginationLink"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="paginationLink"
            >
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="paginationLink"
            >
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="paginationLink"
            >
              6
            </PaginationLink>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationEllipsis className="paginationEllipsis" />
          </PaginationItem> */}
        </div>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="paginationNext"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
