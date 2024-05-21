import { Button } from 'react-bootstrap';
import { PlanetInterface } from "../types/StarWarsApi.Types";

const PlanetsCard = ({ planet }: { planet: PlanetInterface }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h4 className="card-title">{planet.name}</h4>
            <img src={planet.image_url} alt={planet.name} className="img-fluid mb-3" />
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