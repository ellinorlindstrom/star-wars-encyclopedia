import React, { useState } from 'react';
import { SpeciesDetails } from '../types/Species.types';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import SpeciesCard from '../components/SpeciesCard';

const Species: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [species, setSpecies] = useState<SpeciesDetails[]>([]);
    const [loading, setLoading] = useState(false);

    const getSpecies = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/species/?search=${search}`);
            const data = response.data;
            setSpecies(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>Species</h1>
            <SearchForm onSubmit={getSpecies} placeholder='Search for a species' />
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
        </Container>
    );
};


export default Species