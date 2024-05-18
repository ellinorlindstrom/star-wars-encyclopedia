import { Person } from "../types/People.types";
import { Button } from 'react-bootstrap';

const PeopleCard = ({ person }: { person: Person }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h2 className="card-title">{person.name}</h2>
            <p className="card-text">📅 Birth year: {person.birth_year}</p>
            <p className="card-text">👁️ Eye color: {person.eye_color}</p>
            <p className="card-text">💇 Hair color: {person.hair_color}</p>
        </div>
        <div className="card-footer mt-auto "> 
            <Button variant="success">Read more</Button>
        </div>
    </div>
    );
}

export default PeopleCard;