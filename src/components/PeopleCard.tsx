import { PeopleInterface } from "../types/StarWarsApi.Types";
import { Link } from 'react-router-dom';

const PeopleCard = ({ person }: { person: PeopleInterface }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h5 className="card-title">{person.name}</h5>
            <img src={person.image_url} alt={person.name} className="img-size mb-3" />
        </div>
        <div className="card-footer mt-auto "> 
            <Link to={`/people/${person.id}`} className="btn btn-success text-white text-decoration-none">
            Read more</Link>
        </div>
    </div>
    );
}

export default PeopleCard;