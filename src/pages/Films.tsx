import React, { useEffect, useState } from 'react';
import { Film } from '../types/Films.types';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { Col, Container, Row } from 'react-bootstrap';
import { apiService } from '../services/StarWarsAPI';
import  Pagination from '../components/Pagination';
import useQueryParams from '../hooks/useQueryParams';

const Films: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const { getQueryParam, setQueryParam } = useQueryParams();

    const searchTerm = getQueryParam('search') || '';
    const page = parseInt(getQueryParam('page') || '1', 10);
    
    const getFilms = async (search: string, page: number) => {
        try {
            setError(false);
            setLoading(true);
            const data = await apiService.getFilms(search, page);
            setFilms(data.results);
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
    }

    const handlePageChange = (newPage: number) => {
        setQueryParam('page', newPage.toString());
    }

    useEffect(() => {
        getFilms(searchTerm, page);
    }, [page, searchTerm]);

    return (
        <Container>
            <h1>Films</h1>
            <SearchForm onSubmit={handleSearch} placeholder="Search for a film" />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <Row>
                {films.map((film, index) => (
                    <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                        <FilmCard film={film} />
                    </Col>
                ))}
            </Row>

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

export default Films;
