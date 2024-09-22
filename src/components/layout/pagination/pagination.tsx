import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

interface PaginationsProperties {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginations: React.FC<PaginationsProperties> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number, event: React.MouseEvent) => {
    event.preventDefault();
    onPageChange(page);
  };

  return (
    <div>
      <Pagination className="w-[300px]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              size={"default"}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(Math.max(currentPage - 1, 1), e);
              }}
              // disabled={currentPage === 1}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                href="#"
                size={"default"}
                onClick={(e) => handlePageChange(index + 1, e)}
                className={`${
                  currentPage === index + 1 ? "bg-primary text-white" : ""
                }`}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              size={"default"}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(Math.min(currentPage + 1, totalPages), e);
              }}
              // disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Paginations;
