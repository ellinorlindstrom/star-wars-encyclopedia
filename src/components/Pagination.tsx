import Button from 'react-bootstrap/Button'

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
    totalPages 
}) => {
    return (
        <div className="mb-5 mt-3 d-flex justify-content-between">
            <Button 
                onClick={onPrevious} 
                disabled={!hasPreviousPage}
                variant='secondary'
            >
                Previous
            </Button>

            <p>Page {page} of {totalPages}</p>

            <Button 
                onClick={onNext} 
                disabled={!hasNextPage}
                variant='secondary'
            >
                Next
            </Button>
        </div>
    );
}

export default Pagination;