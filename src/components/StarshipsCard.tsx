import { Link } from "react-router-dom";
import { StarshipInterface } from "../types/StarWarsApi.Types";

const StarshipsCard = ({ starship }: { starship: StarshipInterface }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h2 className="card-title">{starship.name}</h2>
            <p className="card-text">🌌 Model: {starship.model}</p>
            <p className="card-text">🌍 Manufacturer: {starship.manufacturer}</p>
            <p className="card-text">🌑 Crew: {starship.crew}</p>
        </div>
        <div className="card-footer mt-auto "> 
        <Link to={`/starship/${starship.id}`} className="btn btn-success text-white text-decoration-none">
            Read more</Link>
        </div>
    </div>
    );
}

export default StarshipsCard;