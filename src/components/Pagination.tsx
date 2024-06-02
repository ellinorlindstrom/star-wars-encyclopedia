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
    <div className="mb-5 mt-3 d-flex justify-content-between">
      <Link
        to={`?page=${page - 1}`}
        onClick={(e) => {
          e.preventDefault();
          if (hasPreviousPage) {
            onPrevious();
          }
        }}
        className={`btn btn-dark ${!hasPreviousPage ? "disabled" : ""}`}
      >
        Previous
      </Link>
      <p>
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
        className={`btn btn-dark ${!hasNextPage ? "disabled" : ""}`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
