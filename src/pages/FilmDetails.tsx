import { Link, useParams } from "react-router-dom";
import { FilmDetailsInterface } from "../types/StarWarsApi.Types";
import { getFilm as fetchFilm } from "../services/StarWarsAPI";
import { useEffect, useState } from "react";

const FilmDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<FilmDetailsInterface | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const filmId = Number(id);

  const getFilm = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      console.log(`Fetching film data for ID: ${id}`);
      const data = await fetchFilm(id);
      setFilm(data);
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filmId) {
      getFilm(filmId);
    } else {
      setError("Invalid film ID.");
      setLoading(false);
    }
  }, [filmId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!film) return <p>No film data available</p>;

  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title press-start-2p-regular">{film.title}</h2>
        <h3 className="card-subtitle mb-2 text-muted">
          Episode {film.episode_id}
        </h3>
        <p className="card-text">{film.opening_crawl}</p>
        <p className="card-text">Directed by: {film.director}</p>
        <p className="card-text">Produced by: {film.producer}</p>
        <p className="card-text">Release date: {film.release_date}</p>
        <img src={film.image_url} alt={film.title} className="img-fluid mb-3" />
      </div>
      <div className="card-footer">
        <h4 className="card-subtitle mb-2 text-muted">Characters:</h4>
        {film.characters.map((character) => (
          <div className="card mb-2" key={character.id}>
            <div className="card-body">
              <Link
                to={`/people/${character.id}`}
                className="text-black text-decoration-none"
              >
                {character.name}
              </Link>
            </div>
          </div>
        ))}

        <h4 className="card-subtitle mb-2 text-muted">Planets:</h4>
        {film.planets.map((planet) => (
          <div className="card mb-2" key={planet.id}>
            <div className="card-body">
              <Link
                to={`/planets/${planet.id}`}
                className="text-black text-decoration-none"
              >
                {planet.name}
              </Link>
            </div>
          </div>
        ))}
        <h4 className="card-subtitle mb-2 text-muted">Starships:</h4>
        {film.starships.map((starship) => (
          <div className="card mb-2" key={starship.id}>
            <div className="card-body">
              <Link
                to={`/starship/${starship.id}`}
                className="text-black text-decoration-none"
              >
                {starship.name}
              </Link>
            </div>
          </div>
        ))}
        <h4 className="card-subtitle mb-2 text-muted">Vehicles:</h4>
        {film.vehicles.map((vehicle) => (
          <div className="card mb-2" key={vehicle.id}>
            <div className="card-body">
              <Link
                to={`/vehicle/${vehicle.id}`}
                className="text-black text-decoration-none"
              >
                {vehicle.name}
              </Link>
            </div>
          </div>
        ))}
        <h4 className="card-subtitle mb-2 text-muted">Species:</h4>
        {film.species.map((specie) => (
          <div className="card mb-2" key={specie.id}>
            <div className="card-body">
              <Link
                to={`/species/${specie.id}`}
                className="text-black text-decoration-none"
              >
                {specie.name}
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

export default FilmDetail;
