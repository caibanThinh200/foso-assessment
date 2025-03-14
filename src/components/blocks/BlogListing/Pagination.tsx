"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const ITEMS_PER_PAGE = 10;

function PaginationBlog() {
  const [currentPage] = useState(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const endIndex = startIndex + ITEMS_PER_PAGE;
  // const currentItems = items.slice(startIndex, endIndex);

  // const handleNext = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePrevious = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages < 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 4) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent className="justify-between w-full">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <ul className="flex gap-8 items-center">
          {getPageNumbers().map((page) => (
            <PaginationItem key={page}>
              <PaginationLink isActive={page === 1} href="/">
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        </ul>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
export default PaginationBlog;
