import React, { useEffect, useRef, useState } from 'react';
import { Film } from '../types/Films.types';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { Col, Container, Row } from 'react-bootstrap';
import { apiService } from '../services/StarWarsAPI';
import  Pagination from '../components/Pagination';

const Films: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState<string>('');
    
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
        setSearchTerm(search);
        setPage(1);
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

            <Pagination
                hasPreviousPage={page > 1}
                hasNextPage={page < totalPages}
                onPrevious={() => setPage(page - 1)}
                onNext={() => setPage(page + 1)}
                page={page}
                totalPages={totalPages}
            />
        </Container>
    );
};

export default Films;
