import React from "react";
import Button from "./Button";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1)  return null;

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </Button>

      <span className="text-sm text-gray-700 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;