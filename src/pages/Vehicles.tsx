import React, { useState } from 'react';
import { Vehicle } from '../types/Vehicles.types';
import { apiService } from '../services/StarWarsAPI';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import VehiclesCard from '../components/VehiclesCard';

const Vehicles: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(false);

    const getVehicles = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const data = await apiService.getVehicles(search);
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
                        <VehiclesCard vehicle={vehicle} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Vehicles