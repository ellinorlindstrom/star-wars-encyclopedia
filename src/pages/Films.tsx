import React, { useEffect, useState } from 'react';
import { FilmInterface } from '../types/StarWarsApi.Types';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { Col, Container, Row } from 'react-bootstrap';
import { getFilms as fetchFilms } from '../services/StarWarsAPI';
import Pagination from '../components/Pagination';
import useQueryParams from '../hooks/useQueryParams';

const Films: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [films, setFilms] = useState<FilmInterface[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const { getQueryParam, setQueryParam } = useQueryParams();

    const searchTerm = getQueryParam('search') || '';
    const page = parseInt(getQueryParam('page') || '1', 10);
    
    const getFilms = async (search: string, page: number) => {
        try {
            setError(false);
            setLoading(true);
            const data = await fetchFilms(search, page);
            setFilms(data.results);
            setTotalPages(Math.ceil(data.count / 10));
            console.log('Film:', films)
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
            <FilmCard films={films} />
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
