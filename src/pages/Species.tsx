import { Col, Container, Row } from 'react-bootstrap';
import { getSpecies as fetchSpecies } from '../services/StarWarsAPI';
import { SpeciesInterface } from '../types/StarWarsApi.Types';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import SpeciesCard from '../components/SpeciesCard';
import useQueryParams from '../hooks/useQueryParams';

const Species: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [loading, setLoading] = useState(false);
    const [showLoadingMessage, setShowLoadingMessage] = useState(false);
    const [species, setSpecies] = useState<SpeciesInterface[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const { getQueryParam, setQueryParam } = useQueryParams();
    const location = useLocation();
    const category = location.pathname.split('/')[1];
    const page = parseInt(getQueryParam('page') || '1', 10);
    const searchTerm = getQueryParam('search') || '';


    const getSpecies = async (search: string, page: number) => {
        try {
            setError(false);
            setLoading(true);
            setShowLoadingMessage(true);
            const data = await fetchSpecies(search, page);
            setSpecies(data.results);
            setTotalPages(Math.ceil(data.count / 10));
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
            setTimeout(() => {
                setShowLoadingMessage(false);
            }, 2000); 
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

    const loadingMessage = searchTerm ? `Searching for ${searchTerm}...` : `Searching for ${category}...`;

    return (
        <Container>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <SearchForm onSubmit={handleSearch} placeholder={`Search for a ${category}👽`} />
            {error && <p>{error}</p>}
            {(loading || showLoadingMessage) && <p>{loadingMessage}</p>}
            {!loading && !showLoadingMessage && species.length === 0 && <h5>No {category} found🐣</h5>}
            {!loading && !showLoadingMessage && species.length > 0 && (
                    <Row>
                    {species.map((species, index) => (
                        <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                        <SpeciesCard key={index} species={species} />
                        </Col>
                    ))}
                </Row>
            )}
             {!loading && !showLoadingMessage && totalPages > 1 && (
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