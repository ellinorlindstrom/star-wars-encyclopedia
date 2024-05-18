import React, { useState } from 'react';
import { Film } from '../types/Films';
import axios from 'axios';
import SearchForm from '../components/Searchform';

const Films: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(false);

    const getFilms = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/films/?search=${search}`);
            const data = response.data;
            setFilms(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Films</h1>
            <SearchForm onSubmit={getFilms} placeholder='Search for a film' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {films.length > 0 && (
                <ul>
                    {films.map((film, index) => (
                        <li key={index}>{film.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Films;
