// import { useParams } from "react-router-dom";
// import { FilmDetailsInterface } from "../types/StarWarsApi.Types";
// import { getFilm as fetchFilm } from "../services/StarWarsAPI";
// import { useEffect, useState } from "react";

// const FilmDetail = () => {
//     const { filmid } = useParams<{ filmid: string }>();
//     const [film, setFilm] = useState<FilmDetailsInterface | null>(null);
//     const [isLoading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);

//     const getFilm = async (id: number) => {
//         try {
//             setLoading(true);
//             setError(null);
//             console.log(`Fetching film data for ID: ${id}`);
//             const data = await fetchFilm(id);
//             setFilm(data);
//         } catch (error) {
//             setError('An error occurred');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (filmid) {
//             getFilm(filmid.toString()); 
//         } else {
//             setError('Invalid film ID.');
//             setLoading(false);
//         }
//     }, [filmid]);

//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     if (!film) return <p>No film data available</p>;

//     return (
//         <div className="card h-100">
//             <div className="card-body">
//                 <h2 className="card-title">{film.title}</h2>
//                 <h3 className="card-subtitle mb-2 text-muted">Episode {film.episode_id}</h3>
//                 <p className="card-text">{film.opening_crawl}</p>
//                 <p className="card-text">Directed by: {film.director}</p>
//                 <p className="card-text">Produced by: {film.producer}</p>
//                 <p className="card-text">Release date: {film.release_date}</p>
//                 <img src={film.image_url} alt={film.title} className="img-fluid mb-3" />
//             </div>
//             <div className="card-footer">
//                 <p>Characters:</p>
//                 <ul>
//                     {film.characters.map(character => (
//                         <li key={character.id}>{character.name}</li>
//                     ))}
//                 </ul>
//                 <p>Planets:</p>
//                 <ul>
//                     {film.planets.map(planet => (
//                         <li key={planet.id}>{planet.name}</li>
//                     ))}
//                 </ul>
//                 <p>Starships:</p>
//                 <ul>
//                     {film.starships.map(starship => (
//                         <li key={starship.id}>{starship.name}</li>
//                     ))}
//                 </ul>
//                 <p>Vehicles:</p>
//                 <ul>
//                     {film.vehicles.map(vehicle => (
//                         <li key={vehicle.id}>{vehicle.name}</li>
//                     ))}
//                 </ul>
//                 <p>Species:</p>
//                 <ul>
//                     {film.species.map(species => (
//                         <li key={species.id}>{species.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default FilmDetail;
