import { Link, useParams } from "react-router-dom";
import { PlanetDetailsInterface } from "../types/StarWarsApi.Types";
import { getPlanet as fetchPlanet } from "../services/StarWarsAPI";
import { useEffect, useState } from "react";

const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState<PlanetDetailsInterface | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const planetid = Number(id);

  const getPlanet = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPlanet(id);
      setPlanet(data);
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (planetid) {
      getPlanet(planetid);
    } else {
      setError("Invalid planet ID.");
      setLoading(false);
    }
  }, [planetid]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!planet) return <p>No planet data available</p>;

  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title press-start-2p-regular">{planet.name}</h2>
        <p className="card-text">Rotation Period: {planet.rotation_period}</p>
        <p className="card-text">Orbital Period: {planet.orbital_period}</p>
        <p className="card-text">Diameter: {planet.diameter}</p>
        <p className="card-text">Climate: {planet.climate}</p>
        <p className="card-text">Gravity: {planet.gravity}</p>
        <p className="card-text">Terrain: {planet.terrain}</p>
        <p className="card-text">Surface Water: {planet.surface_water}</p>
        <p className="card-text">Population: {planet.population}</p>
      </div>
      <div className="card-footer">
        <h4 className="card-subtitle mb-2 text-muted">Residents:</h4>
        {planet.residents.map((resident) => (
          <div className="card mb-2" key={resident.id}>
            <div className="card-body">
              <Link
                to={`/people/${resident.id}`}
                className="text-black text-decoration-none"
              >
                {resident.name}
              </Link>
            </div>
          </div>
        ))}
        <button
          className="black-button"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PlanetDetails;
