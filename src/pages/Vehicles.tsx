import React, { useEffect, useState } from 'react';
import { Vehicle } from '../types/Vehicles.types';
import { apiService } from '../services/StarWarsAPI';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import VehiclesCard from '../components/VehiclesCard';
import Pagination from '../components/Pagination';

const Vehicles: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const getVehicles = async (search: string, page: number) => {
        try {
            setError(false);
            setLoading(true);
            const data = await apiService.getVehicles(search, page);
            setVehicles(data.results);
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
    };

    useEffect(() => {
        getVehicles(searchTerm, page);
    }, [page, searchTerm]);

    return (
        <Container>
            <h1>Vehicles</h1>
            <SearchForm onSubmit={handleSearch} placeholder='Search for a vehicle' />
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

export default Vehicles