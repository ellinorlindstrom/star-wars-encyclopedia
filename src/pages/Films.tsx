import React, { useState } from 'react';
import { Film } from '../types/Films.types';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { Col, Container, Row } from 'react-bootstrap';
import { apiService } from '../services/StarWarsAPI';

const Films: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(false);

    const getFilms = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const data = await apiService.getFilms(search);
            setFilms(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>Films</h1>
            <SearchForm onSubmit={getFilms} placeholder="Search for a film" />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <Row>
                {films.map((film, index) => (
                    <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                        <FilmCard film={film} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Films;
