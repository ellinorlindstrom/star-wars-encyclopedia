import React, { useState } from 'react';
import { Planet } from '../types/Planets.types';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import PlanetsCard from '../components/PlanetsCard';

const Planets: React.FC = () => {
  const [error, setError] = useState<string | false>(false);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(false);

  const getPlanets = async (search: string) => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(`https://swapi.dev/api/planets/?search=${search}`);
      const data = response.data;
      setPlanets(data.results);
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
    <h1>Planets</h1>
    <SearchForm onSubmit={getPlanets} placeholder='Search for a planet' />
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {planets.length > 0 && (
      <Row>
        {planets.map((planet, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-4">
            <PlanetsCard planet={planet} />
          </Col>
        ))}
      </Row>
    )}

    </Container>
  )
}

export default Planets