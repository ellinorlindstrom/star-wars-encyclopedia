import React, { useState } from 'react';
import { Vehicle } from '../types/Vehicles';
import axios from 'axios';
import SearchForm from '../components/Searchform';

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
        <div>
            <h1>Vehicles</h1>
            <SearchForm onSubmit={getVehicles} placeholder='Search for a vehicle' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {vehicles.length > 0 && (
                <ul>
                    {vehicles.map((vehicle, index) => (
                        <li key={index}>{vehicle.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Vehicles