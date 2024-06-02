import { Col, Container, Row } from "react-bootstrap";
import { getPlanets as fetchPlanets } from "../services/StarWarsAPI";
import { PlanetInterface } from "../types/StarWarsApi.Types";
import Pagination from "../components/Pagination";
import PlanetsCard from "../components/PlanetsCard";
import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import useQueryParams from "../hooks/useQueryParams";
import { useLocation } from "react-router-dom";

const Planets: React.FC = () => {
  const [error, setError] = useState<string | false>(false);
  const [loading, setLoading] = useState(false);
  const [planets, setPlanets] = useState<PlanetInterface[]>([]);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const { getQueryParam, setQueryParam } = useQueryParams();
  const location = useLocation();
  const category = location.pathname.split("/")[1];
  const page = parseInt(getQueryParam("page") || "1", 10);
  const searchTerm = getQueryParam("search") || "";

  const getPlanets = async (search: string, page: number) => {
    try {
      setError(false);
      setLoading(true);
      setShowLoadingMessage(true);
      const data = await fetchPlanets(search, page);
      setPlanets(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowLoadingMessage(false);
      }, 2000);
    }
  };

  const handleSearch = (search: string) => {
    setQueryParam("search", search);
    setQueryParam("page", "1");
  };

  const handlePageChange = (newPage: number) => {
    setQueryParam("page", newPage.toString());
  };

  useEffect(() => {
    getPlanets(searchTerm, page);
  }, [page, searchTerm]);

  const loadingMessage = searchTerm
    ? `Searching for ${searchTerm}...`
    : `Searching for ${category}...`;

  return (
    <Container>
      <h1 className="press-start-2p-regular">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <SearchForm
        onSubmit={handleSearch}
        placeholder={`Search for a ${category}🪐`}
      />
      {error && <p>{error}</p>}
      {(loading || showLoadingMessage) && (
        <p className="press-start-2p-regular">{loadingMessage}</p>
      )}
      {!loading && !showLoadingMessage && planets.length === 0 && (
        <h5>No {category} found 🤯</h5>
      )}
      {!loading && !showLoadingMessage && planets.length > 0 && (
        <Row>
          {planets.map((planet, index) => (
            <Col sm={12} md={6} lg={4} key={index} className="mb-4">
              <PlanetsCard planet={planet} />
            </Col>
          ))}
        </Row>
      )}
      {!loading && !showLoadingMessage && totalPages > 1 && (
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
  );
};

export default Planets;
