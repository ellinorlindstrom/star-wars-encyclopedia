import { StarshipInterface } from "../types/StarWarsApi.Types";
import { Button } from 'react-bootstrap';

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
            <Button variant="success">Read more</Button>
        </div>
    </div>
    );
}

export default StarshipsCard;