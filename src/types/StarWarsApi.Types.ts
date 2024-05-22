
export interface FilmInterface {
    id: number;
    title: string;
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

export interface FilmDetailsInterface {
    id: number;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    image_url: string;
    created: string;
    edited: string;
    characters: {
        id: number;
        name: string;
    }[]
    planets: PlanetInterface[];
    starships: {
        id: number;
        name: string;
    }[];
    vehicles: {
        id: number;
        name: string;
    }[];
    species: {
        id: number;
        name: string;
    }[];
}

export interface PeopleInterface {
    id: number;
    name: string;
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
    films_count: number;
    species_count: number;
    starships_count: number;
    vehicles_count: number;
    homeworld: {
        id: number;
        name: string;
    };
}

export interface PeopleDetailsInterface {
    id: number;
    name: string;
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
    films: FilmInterface[];
    planets: PlanetInterface[];
    starships: {
        id: number;
        name: string;
    }[];
    vehicles: {
        id: number;
        name: string;
    }[];
    species: {
        id: number;
        name: string;
    }[];
    homeworld: {
        id: number;
        name: string;
    };
}

export interface PlanetInterface {
    id: number;
    name: string;
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
}

export interface PlanetDetailsInterface {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    created: string;
    edited: string;
    residents: {
        id: number;
        name: string;
    }[];
    }

export interface SpeciesInterface {
    id: number;
    name: string;
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
    homeworld: {
        id: number;
        name: string;
    };
}

export interface SpeciesDetailsInterface {
    id: number;
    name: string;
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
    people: {
        id: number;
        name: string;
    }[];
    homeworld: {
        id: number;
        name: string;
    };
    films: {
        id: number;
        title: string;
    }[];
}

export interface StarshipInterface {
    id: number;
    name: string;
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

export interface StarshipDetailsInterface {
    id: number;
    name: string;
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
    pilots: {
        id: number;
        name: string;
    }[];
    films: {
        id: number;
        title: string;
    }[];
}

export interface VehicleInterface {
    id: number;
    name: string;
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

export interface VehicleDetailsInterface {
    id: number;
    name: string;
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
    pilots: {
        id: number;
        name: string;
    }[];
    films: {
        id: number;
        title: string;
    }[];
}
