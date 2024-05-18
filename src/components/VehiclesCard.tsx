import { Vehicle } from "../types/Vehicles.types";
import { Button } from 'react-bootstrap';

const VehiclesCard = ({ vehicle }: { vehicle: Vehicle }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h2 className="card-title">{vehicle.name}</h2>
            <p className="card-text">🌌 Model: {vehicle.model}</p>
            <p className="card-text">🌍 Manufacturer: {vehicle.manufacturer}</p>
            <p className="card-text">🌑 Crew: {vehicle.crew}</p>
        </div>
        <div className="card-footer mt-auto "> 
            <Button variant="success">Read more</Button>
        </div>
    </div>
    );
}

export default VehiclesCard;