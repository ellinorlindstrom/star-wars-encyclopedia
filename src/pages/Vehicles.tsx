import React, { useEffect, useState } from 'react';
import { VehicleInterface } from '../types/StarWarsApi.Types';
import { getVehicles as fetchVehicle } from '../services/StarWarsAPI';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import VehiclesCard from '../components/VehiclesCard';
import Pagination from '../components/Pagination';
import useQueryParams from '../hooks/useQueryParams';

const Vehicles: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [vehicles, setVehicles] = useState<VehicleInterface[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const { getQueryParam, setQueryParam } = useQueryParams();
    const searchTerm = getQueryParam('search') || '';
    const page = parseInt(getQueryParam('page') || '1', 10);

    const getVehicles = async (search: string, page: number) => {
        try {
            setError(false);
            setLoading(true);
            const data = await fetchVehicle(search, page);
            setVehicles(data.results);
            setTotalPages(Math.ceil(data.count / 10));
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (search: string) => {
        setQueryParam('search', search);
        setQueryParam('page', '1');
    };

    const handlePageChange = (newPage: number) => {
        setQueryParam('page', newPage.toString());
    }

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

export default Vehicles