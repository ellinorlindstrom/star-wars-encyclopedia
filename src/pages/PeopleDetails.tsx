import { Link, useParams } from "react-router-dom";
import { PeopleDetailsInterface} from "../types/StarWarsApi.Types";
import { getPerson as fetchPerson } from "../services/StarWarsAPI";
import { useEffect, useState } from "react";

const PeopleDetails = () => {
    const { id } = useParams();
    const [person, setPerson] = useState<PeopleDetailsInterface | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const personId = Number(id);

    const getPerson = async (id: number) => {
        try {
            setLoading(true);
            setError(null);
            console.log(`Fetching person data for ID: ${id}`);
            const data = await fetchPerson(id);
            setPerson(data);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (personId) {
            getPerson (personId); 
            console.log('Person ID:', personId)
        } else {
            setError('Invalid person ID.');
            console.log('Invalid person ID:', personId)
            setLoading(false);
        }
    }, [personId]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (!person) return <p>No person data available</p>;

    return (
        <div className="card h-100">
            <div className="card-body">
                <h2 className="card-title">{person.name}</h2>
                <img src={person.image_url} alt={person.name} className="img-fluid mb-3" style={{ width: '300px', height: 'auto', display: 'inline', margin: '0 auto' }}  />
                <p className="card-subtitle mb-2 text-muted">Birth year: {person.birth_year}</p>
                <p className="card-text">Eye color: {person.eye_color}</p>
                <p className="card-text">Hair color: {person.hair_color}</p>
                <p className="card-subtitle mb-2 text-muted">Height: {person.height}</p>
                <p className="card-text">Mass: {person.mass}</p>
                <p className="card-text">Skin color: {person.skin_color}</p>
                <p className="card-text">Wiki link: <a href={person.wiki_link} target="_blank" rel="noopener noreferrer">{person.wiki_link}</a></p>
                <p className="card-text">Affiliations: {person.affiliations.join(', ')}</p>

                <h4 className="card-subtitle mb-2 text-muted">Films</h4>
                {person.films.map((film) => (
                        <div className="card mb-2" key={film.id}>
                        <div className="card-body">
                            <Link to={`/films/${film.id}`} className="text-black text-decoration-none">{film.title}</Link>
                        </div>
                        </div>
                    ))}

                <h4 className="card-subtitle mb-2 text-muted">Starships:</h4>
                {person.starships && person.starships.length > 0 ? (
                    person.starships.map((starship) => (
                        <div className="card mb-2" key={starship.id}>
                        <div className="card-body">
                            <Link to={`/starship/${starship.id}`} className="text-black text-decoration-none">{starship.name}</Link>
                        </div>
                        </div>
                    ))
                ) : (
                    <p>No starships available</p>
                )}

            <h4 className="card-subtitle mb-2 text-muted">Vehicles:</h4>
                {person.vehicles && person.vehicles.length > 0 ? (
                    person.vehicles.map((vehicle) => (
                        <div className="card mb-2" key={vehicle.id}>
                        <div className="card-body">
                            <Link to={`/vehicle/${vehicle.id}`} className="text-black text-decoration-none">{vehicle.name}</Link>
                        </div>
                        </div>
                    ))
                ) : (
                    <p>No vehicles available</p>
                )}

            <h4 className="card-subtitle mb-2 text-muted">Species:</h4>
                {person.species && person.species.length > 0 ? (
                    person.species.map((specie) => (
                        <div className="card mb-2" key={specie.id}>
                        <div className="card-body">
                            <Link to={`/species/${specie.id}`} className="text-black text-decoration-none">{specie.name}</Link>
                        </div>
                        </div>
                           ))
                        ) : (
                            <p>No specie to show</p>
                        )}

                <h3 className="card-subtitle mb-2 text-muted">Homeworld</h3>
                <div className="card mb-2">
                <div className="card-body">
                <Link to={`/planets/${person.homeworld.id}`} className="text-black text-decoration-none">{person.homeworld.name}</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleDetails;