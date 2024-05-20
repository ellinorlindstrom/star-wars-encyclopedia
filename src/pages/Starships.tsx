import React, { useEffect, useState } from 'react';
import { Starship } from '../types/Starships.types';
import { apiService } from '../services/StarWarsAPI';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import StarshipsCard from '../components/StarshipsCard';
import Pagination from '../components/Pagination';

const Starships: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [starships, setStarships] = useState<Starship[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const getStarships = async (search: string, page: number) => {
        try {
            setError(false);
            setLoading(true);
            const data = await apiService.getStarships(search, page);
            setStarships(data.results);
            setTotalPages(Math.ceil(data.count / 10));
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (search: string) => {
        setSearchTerm(search);
        setPage(1);
    }

    useEffect(() => {
        getStarships(searchTerm, page);
    }, [page, searchTerm]);

    return (
        <Container>
            <h1>Starships</h1>
            <SearchForm onSubmit={handleSearch} placeholder='Search for a starship' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {starships.length > 0 && (
                <Row>
                    {starships.map((starship, index) => (
                      <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                        <StarshipsCard starship={starship} />
                        </Col>
                    ))}
                </Row>
            )}
           {totalPages > 1 && (
            <Pagination
                hasPreviousPage={page > 1}
                hasNextPage={page < totalPages}
                onPrevious={() => setPage(page - 1)}
                onNext={() => setPage(page + 1)}
                page={page}
                totalPages={totalPages}
            />
            )}
        </Container>
    );
};

export default Starships