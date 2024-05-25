import { Link, useParams } from "react-router-dom";
import { VehicleDetailsInterface} from "../types/StarWarsApi.Types";
import { getVehicle as fetchVehicle } from "../services/StarWarsAPI";
import { useEffect, useState } from "react";

const VehicleDetails = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState<VehicleDetailsInterface | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const vehicleid = Number(id);

    const getVehicle = async (id: number) => {
        try {
            setLoading(true);
            setError(null);
            console.log(`Fetching vehicle data for ID: ${id}`);
            const data = await fetchVehicle(id);
            setVehicle(data);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (vehicleid) {
            getVehicle(vehicleid);
            console.log('Vehicle ID:', vehicleid);
        } else {
            setError('Invalid vehicle ID.');
            console.log('Invalid vehicle ID:', vehicleid);
            setLoading(false);
        }
    }, [vehicleid]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (!vehicle) return <p>No vehicle data available</p>;

    return (
        <div className="card h-100">
            <div className="card-body">
                <h2 className="card-title">{vehicle.name}</h2>
                <p className="card-text">Model: {vehicle.model}</p>
                <p className="card-text">Vehicle Class: {vehicle.vehicle_class}</p>
                <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
                <p className="card-text">Length: {vehicle.length}</p>
                <p className="card-text">Cost in Credits: {vehicle.cost_in_credits}</p>
                <p className="card-text">Crew: {vehicle.crew}</p>
                <p className="card-text">Passengers: {vehicle.passengers}</p>
                <p className="card-text">Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
                <p className="card-text">Cargo Capacity: {vehicle.cargo_capacity}</p>
                <p className="card-text">Consumables: {vehicle.consumables}</p>
                </div>
                <div className="card-footer">
                <h4 className="card-subtitle mb-2 text-muted">Pilots:</h4>
                {vehicle.pilots && vehicle.pilots.length > 0 ? (
                    vehicle.pilots.map((pilot) => (
                        <div className="card mb-2" key={pilot.id}>
                            <div className="card-body">
                                <Link to={`/people/${pilot.id}`} className="text-black text-decoration-none">{pilot.name}</Link>
                            </div>
                        </div>
                    ))            
                ) : (
                    <p>No pilots available</p>
                )}
                <h4 className="card-subtitle mb-2 text-muted">Films:</h4>
                {vehicle.films.map((film) => (
                    <div className="card mb-2" key={film.id}>
                        <div className="card-body">
                            <Link to={`/films/${film.id}`} className="text-black text-decoration-none">{film.title}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default VehicleDetails;