import { Link, useParams } from "react-router-dom";
import { SpeciesDetailsInterface } from "../types/StarWarsApi.Types";
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
      const data = await fetchSpecies(id);
      setSpecies(data);
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (speciesid) {
      getSpecies(speciesid);
    } else {
      setError("Invalid species ID.");
      setLoading(false);
    }
  }, [speciesid]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!species) return <p>No species data available</p>;

  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title press-start-2p-regular">{species.name}</h2>
        <p className="card-text">Classification: {species.classification}</p>
        <p className="card-text">Designation: {species.designation}</p>
        <p className="card-text">Average Height: {species.average_height}</p>
        <p className="card-text">
          Average Lifespan: {species.average_lifespan}
        </p>
        <p className="card-text">Eye Colors: {species.eye_colors}</p>
        <p className="card-text">Hair Colors: {species.hair_colors}</p>
        <p className="card-text">Skin Colors: {species.skin_colors}</p>
        <p className="card-text">Language: {species.language}</p>
      </div>
      <div className="card-footer">
        <h4 className="card-subtitle mb-2 text-muted">People:</h4>
        {species.people.map((person) => (
          <div className="card mb-2" key={person.id}>
            <div className="card-body">
              <Link
                to={`/people/${person.id}`}
                className="text-black text-decoration-none"
              >
                {person.name}
              </Link>
            </div>
          </div>
        ))}
        <h4 className="card-subtitle mb-2 text-muted">Homeworld:</h4>
        <div className="card mb-2">
          <div className="card-body">
            <Link
              to={`/planets/${species.homeworld.id}`}
              className="text-black text-decoration-none"
            >
              {species.homeworld.name}
            </Link>
          </div>
        </div>
        <h4 className="card-subtitle mb-2 text-muted">Films:</h4>
        {species.films.map((film) => (
          <div className="card mb-2" key={film.id}>
            <div className="card-body">
              <Link
                to={`/films/${film.id}`}
                className="text-black text-decoration-none"
              >
                {film.title}
              </Link>
            </div>
          </div>
        ))}
        <button
          className="btn btn-success mb-3 mt-3"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SpeciesDetails;
