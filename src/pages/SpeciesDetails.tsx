import { useParams } from "react-router-dom";
import { SpeciesDetailsInterface} from "../types/StarWarsApi.Types";
import { getSpecie as fetchSpecies } from "../services/StarWarsAPI";
import { useEffect, useState } from "react";

const SpeciesDetails = () => {
    const { id } = useParams();
    const [species, setSpecies] = useState<SpeciesDetailsInterface | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const speciesid = Number(id);

    const getSpecies = async (id: number) => {
        try {
            setLoading(true);
            setError(null);
            console.log(`Fetching species data for ID: ${id}`);
            const data = await fetchSpecies(id);
            setSpecies(data);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (speciesid) {
            getSpecies(speciesid);
            console.log('Species ID:', speciesid);
        } else {
            setError('Invalid species ID.');
            console.log('Invalid species ID:', speciesid);
            setLoading(false);
        }
    }, [speciesid]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (!species) return <p>No species data available</p>;

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">{species.name}</h5>
                <p className="card-text">Classification: {species.classification}</p>
                <p className="card-text">Designation: {species.designation}</p>
                <p className="card-text">Average Height: {species.average_height}</p>
                <p className="card-text">Average Lifespan: {species.average_lifespan}</p>
                <p className="card-text">Eye Colors: {species.eye_colors}</p>
                <p className="card-text">Hair Colors: {species.hair_colors}</p>
                <p className="card-text">Skin Colors: {species.skin_colors}</p>
                <p className="card-text">Language: {species.language}</p>
                <h6 className="card-subtitle mb-2 text-muted">People:</h6>
                {species.people.map((person) => (
                    <div className="card mb-2" key={person.id}>
                        <div className="card-body">
                            <h6 className="card-title">{person.name}</h6>
                        </div>
                    </div>
                ))}
                <h6 className="card-subtitle mb-2 text-muted">Homeworld:</h6>
                <div className="card mb-2">
                    <div className="card-body">
                        <h6 className="card-title">{species.homeworld.name}</h6>
                    </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Films:</h6>
                {species.films.map((film) => (
                    <div className="card mb-2" key={film.id}>
                        <div className="card-body">
                            <h6 className="card-title">{film.title}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpeciesDetails;