import { Person } from "../types/People.types";
import { useState } from "react";
import axios from 'axios';
import SearchForm from "../components/SearchForm";


const People: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(false);

    const getPeople = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/people/?search=${search}`);
            const data = response.data;
            setPeople(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>People</h1>
            <SearchForm onSubmit={getPeople} placeholder='Search for a person' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {people.length > 0 && (
                <ul>
                    {people.map((person, index) => (
                        <li key={index}>{person.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )  
}

export default People;