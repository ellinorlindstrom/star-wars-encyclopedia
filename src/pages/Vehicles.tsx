import React, { useState } from 'react';
import { Vehicle } from '../types/Vehicles.types';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';

const Vehicles: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(false);

    const getVehicles = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/vehicles/?search=${search}`);
            const data = response.data;
            setVehicles(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>Vehicles</h1>
            <SearchForm onSubmit={getVehicles} placeholder='Search for a vehicle' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {vehicles.length > 0 && (
                <Row>
                    {vehicles.map((vehicle, index) => (
                      <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                        <li key={index}>{vehicle.name}</li>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Vehicles