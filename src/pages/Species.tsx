import React, { useEffect, useState } from 'react';
import { SpeciesDetails } from '../types/Species.types';
import { apiService } from '../services/StarWarsAPI';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import SpeciesCard from '../components/SpeciesCard';
import Pagination from '../components/Pagination';
import useQueryParams from '../hooks/useQueryParams';

const Species: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [species, setSpecies] = useState<SpeciesDetails[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const { getQueryParam, setQueryParam } = useQueryParams();
    const searchTerm = getQueryParam('search') || '';
    const page = parseInt(getQueryParam('page') || '1', 10);


    const getSpecies = async (search: string, page: number) => {
        try {
            setError(false);
            setLoading(true);
            const data = await apiService.getSpecies(search, page);
            setSpecies(data.results);
            setTotalPages(Math.ceil(data.count / 10));
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (search: string) => {
        setQueryParam('search', search);
        setQueryParam('page', '1');
    };

    const handlePageChange = (newPage: number) => {
        setQueryParam('page', newPage.toString());
    }


    useEffect(() => {
        getSpecies(searchTerm, page);
    }, [page, searchTerm]);

    return (
        <Container>
            <h1>Species</h1>
            <SearchForm onSubmit={handleSearch} placeholder='Search for a species' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
                {species.length > 0 && (
                    <Row>
                    {species.map((species, index) => (
                        <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                        <SpeciesCard key={index} species={species} />
                        </Col>
                    ))}
                </Row>
            )}
             {totalPages > 1 && (
            <Pagination
                hasPreviousPage={page > 1}
                hasNextPage={page < totalPages}
                onPrevious={() => handlePageChange(page - 1)}
                onNext={() => handlePageChange(page + 1)}
                page={page}
                totalPages={totalPages}
            />
            )}
        </Container>
    );
};


export default Species