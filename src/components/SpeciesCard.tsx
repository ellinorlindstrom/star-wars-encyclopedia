import { SpeciesInterface } from "../types/StarWarsApi.Types";
import { Link } from 'react-router-dom';

const SpeciesCard = ({ species }: { species: SpeciesInterface }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h2 className="card-title">{species.name}</h2>
            <p className="card-text">🌌 Classification: {species.classification}</p>
            <p className="card-text">🌍 Designation: {species.designation}</p>
            <p className="card-text">🌑 Language: {species.language}</p>
        </div>
        <div className="card-footer mt-auto "> 
            <Link to={`/species/${species.id}`} className="btn btn-success text-white text-decoration-none">
            Read more</Link>
        </div>
    </div>
    );
}

export default SpeciesCard;