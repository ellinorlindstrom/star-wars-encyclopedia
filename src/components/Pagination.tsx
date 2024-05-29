import { Link } from "react-router-dom";

// Typdefinition för egenskaperna som förväntas i Pagination-komponenten
interface PaginationProps {
  hasNextPage: boolean; // Anger om det finns en nästa sida
  hasPreviousPage: boolean; // Anger om det finns en föregående sida
  onNext: () => void; // Funktion som anropas för att gå till nästa sida
  onPrevious: () => void; // Funktion som anropas för att gå till föregående sida
  page: number; // Nuvarande sida
  totalPages: number; // Totalt antal sidor
}

// Pagination-komponenten som tar emot props definierade i PaginationProps
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
      {/* Länk för att gå till föregående sida */}
      <Link
        to={`?page=${page - 1}`} // URL-parameter för föregående sida
        onClick={(e) => {
          e.preventDefault(); // Förhindrar standardbeteendet för länken
          if (hasPreviousPage) { // Kollar om det finns en föregående sida
            onPrevious(); // Anropar onPrevious-funktionen för att gå till föregående sida
          }
        }}
        className={`btn btn-dark ${!hasPreviousPage ? "disabled" : ""}`} // Tillägg av klass "disabled" om det inte finns någon föregående sida
      >
        Previous
      </Link>

      {/* Visar nuvarande sida och totalt antal sidor */}
      <p>
        Page {page} of {totalPages}
      </p>

      {/* Länk för att gå till nästa sida */}
      <Link
        to={`?page=${page + 1}`} // URL-parameter för nästa sida
        onClick={(e) => {
          e.preventDefault(); // Förhindrar standardbeteendet för länken
          if (hasNextPage) { // Kollar om det finns en nästa sida
            onNext(); // Anropar onNext-funktionen för att gå till nästa sida
          }
        }}
        className={`btn btn-dark ${!hasNextPage ? "disabled" : ""}`} // Tillägg av klass "disabled" om det inte finns någon nästa sida
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
