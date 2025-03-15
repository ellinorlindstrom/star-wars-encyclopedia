import { Link } from "react-router-dom";

interface PaginationProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNext: () => void;
  onPrevious: () => void;
  page: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  hasNextPage,
  hasPreviousPage,
  onNext,
  onPrevious,
  page,
  totalPages,
}) => {
  return (
    <div className="mb-5 mt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
      <Link
        to={`?page=${page - 1}`}
        onClick={(e) => {
          e.preventDefault();
          if (hasPreviousPage) {
            onPrevious();
          }
        }}
        className={`black-button ${!hasPreviousPage ? "disabled" : ""}`}
      >
        Previous
      </Link>
      <p className="mb-0">
        Page {page} of {totalPages}
      </p>

      <Link
        to={`?page=${page + 1}`}
        onClick={(e) => {
          e.preventDefault();
          if (hasNextPage) {
            onNext();
          }
        }}
        className={`black-button ${!hasNextPage ? "disabled" : ""}`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
