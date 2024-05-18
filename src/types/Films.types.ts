export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters_count: number;
    planets_count: number;
    starships_count: number;
    vehicles_count: number;
    species_count: number;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
}
