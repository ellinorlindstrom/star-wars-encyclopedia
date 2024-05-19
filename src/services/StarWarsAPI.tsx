import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapi.dev/api/"
});

const get = async (endpoint: string, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const apiService = {
  getFilms: (search: string, page: number) => get("films/", { search, page }),
  getPeople: (search: string, page: number) => get("people/", { search, page }),
  getPlanets: (search: string, page: number) => get("planets/", { search, page }),
  getSpecies: (search: string, page: number) => get("species/", { search, page }),
  getStarships: (search: string, page: number) => get("starships/", { search, page }),
  getVehicles: (search: string, page: number) => get("vehicles/", { search, page }),
};