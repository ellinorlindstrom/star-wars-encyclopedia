export interface Entity {
    id: number;
    name: string;
}

export type Character = Entity;
export type Planet = Entity;
export type Starship = Entity;
export type Vehicle = Entity;
export type Species = Entity;