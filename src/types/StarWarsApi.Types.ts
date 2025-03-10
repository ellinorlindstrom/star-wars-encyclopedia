export interface Entity {
    id: number;
    name: string;
}

export interface Film {
    id: number;
    title: string;
}

export interface Person extends Entity {
    birth_year: string;
    eye_color: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    wiki_link: string;
    image_url: string;
    affiliations: string[];
    created: string;
    edited: string;
}

export interface FilmInterface extends Film {
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    image_url: string;
    created: string;
    edited: string;
    characters_count: number;
    planets_count: number;
    starships_count: number;
    vehicles_count: number;
    species_count: number;
}

export interface FilmDetailsInterface extends FilmInterface {
    characters: Entity[];
    planets: PlanetInterface[];
    starships: Entity[];
    vehicles: Entity[];
    species: Entity[];
}

export interface PeopleInterface extends Person {
    films_count: number;
    species_count: number;
    starships_count: number;
    vehicles_count: number;
    homeworld: Entity;
}

export interface PeopleDetailsInterface extends PeopleInterface {
    films: Film[];
    starships: Entity[];
    vehicles: Entity[];
    species: Entity[];
}

export interface PlanetInterface extends Entity {
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    wiki_link: string;
    image_url: string;
    created: string;
    edited: string;
    films_count: number;
    residents_count: number;
    residents: Person[];
}

export interface PlanetDetailsInterface extends PlanetInterface {
    residents: Person[];
}

export interface SpeciesInterface extends Entity {
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    created: string;
    edited: string;
    people_count: number;
    films_count: number;
    homeworld: Entity;
}

export interface SpeciesDetailsInterface extends SpeciesInterface {
    people: Entity[];
    films: Film[];
}

export interface StarshipInterface extends Entity {
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    pilots_count: number;
    films_count: number;
}

export interface StarshipDetailsInterface extends StarshipInterface {
    pilots: Entity[];
    films: Film[];
}

export interface VehicleInterface extends Entity {
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    pilots_count: number;
    films_count: number;
}

export interface VehicleDetailsInterface extends VehicleInterface {
    pilots: Entity[];
    films: Film[];
}