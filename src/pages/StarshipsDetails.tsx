import { Link, useParams } from "react-router-dom";
import { StarshipDetailsInterface } from "../types/StarWarsApi.Types";
import { getStarship as fetchStarship } from "../services/StarWarsAPI";
import { useEffect, useState } from "react";

const StarshipDetails = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState<StarshipDetailsInterface | null>(
    null
  );
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const starshipid = Number(id);

  const getStarship = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      console.log(`Fetching starship data for ID: ${id}`);
      const data = await fetchStarship(id);
      setStarship(data);
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (starshipid) {
      getStarship(starshipid);
      console.log("Starship ID:", starshipid);
    } else {
      setError("Invalid starship ID.");
      console.log("Invalid starship ID:", starshipid);
      setLoading(false);
    }
  }, [starshipid]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!starship) return <p>No starship data available</p>;

  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title press-start-2p-regular">{starship.name}</h2>
        <p className="card-text">Model: {starship.model}</p>
        <p className="card-text">Starship Class: {starship.starship_class}</p>
        <p className="card-text">Manufacturer: {starship.manufacturer}</p>
        <p className="card-text">Cost in Credits: {starship.cost_in_credits}</p>
        <p className="card-text">Length: {starship.length}</p>
        <p className="card-text">Crew: {starship.crew}</p>
        <p className="card-text">Passengers: {starship.passengers}</p>
        <p className="card-text">
          Max Atmosphering Speed: {starship.max_atmosphering_speed}
        </p>
        <p className="card-text">
          Hyperdrive Rating: {starship.hyperdrive_rating}
        </p>
        <p className="card-text">MGLT: {starship.MGLT}</p>
        <p className="card-text">Cargo Capacity: {starship.cargo_capacity}</p>
        <p className="card-text">Consumables: {starship.consumables}</p>
      </div>
      <div className="card-footer">
        <h4 className="card-subtitle mb-2 text-muted">Pilots:</h4>
        {starship.pilots && starship.pilots.length > 0 ? (
          starship.pilots.map((pilot) => (
            <div className="card mb-2" key={pilot.id}>
              <div className="card-body">
                <Link
                  to={`/people/${pilot.id}`}
                  className="text-black text-decoration-none"
                >
                  {pilot.name}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No pilots available</p>
        )}
        <h4 className="card-subtitle mb-2 text-muted">Films:</h4>
        {starship.films.map((film) => (
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

export default StarshipDetails;
