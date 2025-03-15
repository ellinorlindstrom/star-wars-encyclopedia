import { PlanetInterface } from "../types/StarWarsApi.Types";
import { Link } from "react-router-dom";

const PlanetsCard = ({ planet }: { planet: PlanetInterface }) => {
  return (
    <div className="card h-100">
      <div className="card-body flex-grow-1">
        <h4 className="card-title">{planet.name}</h4>
        <p className="card-text">🌌 Population: {planet.population}</p>
        <p className="card-text">🌍 Climate: {planet.climate}</p>
        <p className="card-text">🌑 Terrain: {planet.terrain}</p>
      </div>
      <div className="card-footer mt-auto ">
        <Link to={`/planets/${planet.id}`} className="black-button">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PlanetsCard;
