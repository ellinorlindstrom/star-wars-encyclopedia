import { getPeople as fetchPeople } from "../services/StarWarsAPI";
import { PeopleInterface } from "../types/StarWarsApi.Types"
import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import PeopleCard from "../components/PeopleCard";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../components/Pagination";
import useQueryParams from "../hooks/useQueryParams";


const People: React.FC = () => {
    const [error, setError] = useState<string | false>(false);
    const [people, setPeople] = useState<PeopleInterface[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const { getQueryParam, setQueryParam } = useQueryParams();

    const searchTerm = getQueryParam('search') || '';
    const page = parseInt(getQueryParam('page') || '1', 10);

    const getPeople = async (search: string, page: number) => {
        try {
            setError(false);
            setLoading(true);
            const data = await fetchPeople(search, page);
            setPeople(data.results);
            setTotalPages(Math.ceil(data.count / 10));
            console.log('People:', people)
        } catch (error) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (search: string) => {
        setQueryParam('search', search);
        setQueryParam('page', '1');
    };

    const handlePageChange = (newPage: number) => {
        setQueryParam('page', newPage.toString());
    };

    useEffect(() => {
        getPeople(searchTerm, page);
    }, [page, searchTerm]);

    return (
        <Container>
            <h1>People</h1>
            <SearchForm onSubmit={handleSearch} placeholder='Search for a person' />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
                <Row>
                        {people.map((person, index) => (
                            <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                            <PeopleCard key={index} person={person} />
                            </Col>
                        ))}
                </Row>
            {totalPages > 1 && (
            <Pagination
                hasPreviousPage={page > 1}
                hasNextPage={page < totalPages}
                onPrevious={() => handlePageChange(page - 1)}
                onNext={() => handlePageChange(page + 1)}
                page={page}
                totalPages={totalPages}
            />
            )}
        </Container>
    )  
}

export default People;