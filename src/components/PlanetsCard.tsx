import { Planet } from "../types/Planets.types";
import { Button } from 'react-bootstrap';

const PlanetsCard = ({ planet }: { planet: Planet }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h2 className="card-title">{planet.name}</h2>
            <p className="card-text">🌌 Population: {planet.population}</p>
            <p className="card-text">🌍 Climate: {planet.climate}</p>
            <p className="card-text">🌑 Terrain: {planet.terrain}</p>
        </div>
        <div className="card-footer mt-auto "> 
            <Button variant="success">Read more</Button>
        </div>
    </div>
    );
}

export default PlanetsCard;