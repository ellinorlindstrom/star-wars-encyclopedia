import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 1000,
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
  getFilms: (search: string) => get("films/", { search }),
  getPeople: (search: string) => get("people/", { search }),
  getPlanets: (search: string) => get("planets/", { search }),
  getSpecies: (search: string) => get("species/", { search }),
  getStarships: (search: string) => get("starships/", { search }),
  getVehicles: (search: string) => get("vehicles/", { search }),
};