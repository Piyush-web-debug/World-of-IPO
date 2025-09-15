import React, { useState } from "react";
import "../App.css";

const Pagination = ({ totalPages = 4, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (onPageChange) {
        onPageChange(page); // ✅ callback for parent component
      }
    }
  };

  return (
    <div className="pagination-container">
      {/* First Page */}
      <button
        className="pagination-btn"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        «
      </button>

      {/* Previous Page */}
      <button
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {/* Dynamic Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={`pagination-number ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Next Page */}
      <button
        className="pagination-btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>

      {/* Last Page */}
      <button
        className="pagination-btn"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
