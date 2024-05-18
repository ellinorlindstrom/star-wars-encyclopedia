import { Film } from '../types/Films.types';
import { Button } from 'react-bootstrap';


const FilmCard = ({ film }: { film: Film }) => {
    return (
        <div className="card h-100"> 
        <div className="card-body flex-grow-1">
            <h2 className="card-title">{film.title}</h2>
            <p className="card-text">Episode {film.episode_id}</p>
            <p className="card-text">📅 Released {film.release_date}</p>
            <p className="card-text">🧍 {film.characters.length} characters</p>
        </div>
        <div className="card-footer mt-auto "> 
            <Button variant="success">Read more</Button>
        </div>
    </div>
    );
}

export default FilmCard;