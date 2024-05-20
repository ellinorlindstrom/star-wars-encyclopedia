import React, { useEffect, useState } from 'react';
import { SpeciesDetails } from '../types/Species.types';
import { apiService } from '../services/StarWarsAPI';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import SpeciesCard from '../components/SpeciesCard';
import Pagination from '../components/Pagination';

const Species: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [species, setSpecies] = useState<SpeciesDetails[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState<string>('');


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

    useEffect(() => {
        getSpecies(searchTerm, page);
    }, [page, searchTerm]);

    const handleSearch = (search: string) => {
        setSearchTerm(search);
        setPage(1);
    };

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
                onPrevious={() => setPage(page - 1)}
                onNext={() => setPage(page + 1)}
                page={page}
                totalPages={totalPages}
            />
            )}
        </Container>
    );
};


export default Species