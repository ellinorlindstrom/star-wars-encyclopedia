import React, { useState } from 'react';
import { Film } from '../types/Films.types';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import FilmCard from '../components/FilmCard';
import { Col, Container, Row } from 'react-bootstrap';

const Films: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(false);

    const getFilms = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/films/?search=${search}`);
            const data = response.data;
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
