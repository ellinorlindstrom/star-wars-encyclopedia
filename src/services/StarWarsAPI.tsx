import axios from 'axios';

export async function getStarWarsData() {
try {
  const response = await axios.get('https://swapi.dev/api/');
  return response.data;
}
catch (error) {
  console.error(error);
}}

export async function getFilms() {
try {
  const response = await axios.get('https://swapi.dev/api/films/');
  return response.data;
}
catch (error) {
  console.error(error);
}}

export async function getPeople() {
try {
  const response = await axios.get('https://swapi.dev/api/people/');
  return response.data;
}
catch (error) {
  console.error(error);
}}

export async function getPlanets() {
try {
  const response = await axios.get('https://swapi.dev/api/planets/');
  return response.data;
} catch (error) {
    console.error(error);
}}

export async function getSpecies() {
try {
  const response = await axios.get('https://swapi.dev/api/species/');
  return response.data;
} catch (error) {
    console.error(error);
}}

export async function getStarships() {
try {
  const response = await axios.get('https://swapi.dev/api/starships/');
  return response.data;
}
catch (error) {
  console.error(error);
}}

export async function getVehicles() {
try {
  const response = await axios.get('https://swapi.dev/api/vehicles/');
  return response.data;
}
catch (error) {
  console.error(error);
}}

