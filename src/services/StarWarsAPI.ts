import axios from "axios";
import { 
    FilmInterface, 
    FilmDetailsInterface, 
    PeopleInterface, 
    PeopleDetailsInterface, 
    PlanetInterface, 
    PlanetDetailsInterface, 
    SpeciesInterface, 
    SpeciesDetailsInterface, 
    StarshipInterface, 
    StarshipDetailsInterface, 
    VehicleInterface, 
    VehicleDetailsInterface 
} from "../types/StarWarsApi.Types";

const instance = axios.create({
    baseURL: "https://swapi.thehiveresistance.com/api",
    timeout: 50000,
    headers: { 
        Accept: "application/json",
        "Content-Type": "application/json" 
    }
});

const get = async <T>(endpoint: string, params?: object): Promise<T> => { 
    console.log('Endpoint:', endpoint)
    const response = await instance.get<T>(endpoint, { params });
    console.log('Response:', response)
    return response.data;
}

export const getFilms = async (search: string, page: number) => {
    const data = await get<{ data: FilmInterface[], total: number }>("films/", { search, page });
    return { results: data.data, count: data.total };
}

export const getFilm = async (id: number) => {
    return get<FilmDetailsInterface>(`films/${id}/`);
    
}

export const getPeople = async (search: string, page: number) => {
    const data = await get<{ data: PeopleInterface[], total: number }>("people/", { search, page });
    return { results: data.data, count: data.total };
}

export const getPerson = async (id: number) => {
    console.log('ID:', id);
    return get<PeopleDetailsInterface>(`people/${id}/`);
}

export const getPlanets = async (search: string, page: number) => {
    const data = await get<{ data: PlanetInterface[], total: number }>("planets/", { search, page });
    return { results: data.data, count: data.total };
}

export const getPlanet = async (id: number) => {
    return get<PlanetDetailsInterface>(`/planets/${id}/`);
}

export const getSpecies = async (search: string, page: number) => {
    const data = await get<{ data: SpeciesInterface[], total: number }>("species/", { search, page });
    return { results: data.data, count: data.total };
}

export const getSpecie = async (id: number) => {
    return get<SpeciesDetailsInterface>(`/species/${id}/`);
}

export const getStarships = async (search: string, page: number) => {
    const data = await get<{ data: StarshipInterface[], total: number }>("starships/", { search, page });
    return { results: data.data, count: data.total };
}

export const getStarship = async (id: number) => {
    return get<StarshipDetailsInterface>(`/starships/${id}/`);
}

export const getVehicles = async (search: string, page: number) => {
    const data = await get<{ data: VehicleInterface[], total: number }>("vehicles/", { search, page });
    return { results: data.data, count: data.total };
}

export const getVehicle = async (id: number) => {
    return get<VehicleDetailsInterface>(`/vehicles/${id}/`);
}

export default instance;
