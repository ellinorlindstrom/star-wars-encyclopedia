import { apiService } from "../services/StarWarsAPI";
import { Person } from "../types/People.types";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PeopleCard from "../components/PeopleCard";
import { Col, Container, Row } from "react-bootstrap";


const People: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(false);

    const getPeople = async (search: string) => {
        try {
            setError(false);
            setLoading(true);
            const data = await apiService.getPeople(search);
            setPeople(data.results);
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>People</h1>
            <SearchForm onSubmit={getPeople} placeholder='Search for a person' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {people.length > 0 && (
                <Row>
                    {people.map((person, index) => (
                        <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                        <PeopleCard key={index} person={person} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    )  
}

export default People;