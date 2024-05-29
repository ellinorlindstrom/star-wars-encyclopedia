import { Link } from "react-router-dom";
import { VehicleInterface } from "../types/StarWarsApi.Types";

const VehiclesCard = ({ vehicle }: { vehicle: VehicleInterface }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h2 className="card-title">{vehicle.name}</h2>
            <p className="card-text">🌌 Model: {vehicle.model}</p>
            <p className="card-text">🌍 Manufacturer: {vehicle.manufacturer}</p>
            <p className="card-text">🌑 Crew: {vehicle.crew}</p>
        </div>
        <div className="card-footer mt-auto "> 
        <Link to={`/vehicle/${vehicle.id}`} className="btn btn-success text-white text-decoration-none">
            Read more</Link>
        </div>
    </div>
    );
}

export default VehiclesCard;