import { SpeciesDetails } from "../types/Species.types";
import { Button } from 'react-bootstrap';

const SpeciesCard = ({ species }: { species: SpeciesDetails }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h2 className="card-title">{species.name}</h2>
            <p className="card-text">🌌 Classification: {species.classification}</p>
            <p className="card-text">🌍 Designation: {species.designation}</p>
            <p className="card-text">🌑 Language: {species.language}</p>
        </div>
        <div className="card-footer mt-auto "> 
            <Button variant="success">Read more</Button>
        </div>
    </div>
    );
}

export default SpeciesCard;