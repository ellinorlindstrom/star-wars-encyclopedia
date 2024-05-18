import { Person } from "../types/People";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';


const People: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    const getPeople = async () => {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
        getPeople(); 
    };

    return (
        <div>
            <h1>People</h1>
            <Form className='mb-4' onChange={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Search</Form.Label>
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        type="text" 
                        placeholder="Search for a person" />
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