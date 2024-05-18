import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Film } from '../types/Films';
import axios from 'axios';

const Films: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    const getFilms = async () => {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
        getFilms(); 
    };

    return (
        <div>
            <h1>Films</h1>
            <Form className='mb-4' onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Search</Form.Label>
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        type="text" 
                        placeholder="Search for a film" />
                </Form.Group>
                    <div className="d-flex justify-content-end">
                    <Button 
                        variant="success" 
                        type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
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
