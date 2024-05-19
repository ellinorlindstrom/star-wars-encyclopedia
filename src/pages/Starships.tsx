import React, { useState } from 'react';
import { Starship } from '../types/Starships.types';
import { apiService } from '../services/StarWarsAPI';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import StarshipsCard from '../components/StarshipsCard';

const Starships: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [starships, setStarships] = useState<Starship[]>([]);
    const [loading, setLoading] = useState(false);

    const getStarships = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const data = await apiService.getStarships(search);
            setStarships(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>Starships</h1>
            <SearchForm onSubmit={getStarships} placeholder='Search for a starship' />
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
        </Container>
    );
};

export default Starships