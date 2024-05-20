import React, { useEffect, useState } from 'react';
import { Planet } from '../types/Planets.types';
import { apiService } from '../services/StarWarsAPI';
import SearchForm from '../components/SearchForm';
import { Col, Container, Row } from 'react-bootstrap';
import PlanetsCard from '../components/PlanetsCard';
import Pagination from '../components/Pagination';

const Planets: React.FC = () => {
  const [error, setError] = useState<string | false>(false);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState<string>('');


  const getPlanets = async (search: string, page: number) => {
    try {
      setError(false);
      setLoading(true);
      const data = await apiService.getPlanets(search, page);
      setPlanets(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlanets(searchTerm, page);
  }, [page, searchTerm]);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    setPage(1);
  }

  return (
    <Container>
    <h1>Planets</h1>
    <SearchForm onSubmit={handleSearch} placeholder='Search for a planet' />
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {planets.length > 0 && (
      <Row>
        {planets.map((planet, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-4">
            <PlanetsCard planet={planet} />
          </Col>
        ))}
      </Row>
    )}
       {totalPages > 1 && (
            <Pagination
                hasPreviousPage={page > 1}
                hasNextPage={page < totalPages}
                onPrevious={() => setPage(page - 1)}
                onNext={() => setPage(page + 1)}
                page={page}
                totalPages={totalPages}
            />
            )}

    </Container>
  )
}

export default Planets