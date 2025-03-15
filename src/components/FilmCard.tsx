import React from "react";
import { FilmInterface } from "../types/StarWarsApi.Types";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
interface FilmCardProps {
  films: FilmInterface[];
}

const FilmCard: React.FC<FilmCardProps> = ({ films }) => {
  return (
    <Row>
      {films?.map((film) => (
        <Col sm={12} md={6} lg={3} key={film.id} className="mb-4">
          <div className="card h-100">
            <div className="card-body flex-grow-1">
              <h5 className="card-title">{film.title}</h5>
              <img
                src={film.image_url}
                alt={film.title}
                className="img-size mb-3"
              />
              <p className="card-text">📅 {film.release_date}</p>
            </div>
            <div className="card-footer mt-auto ">
              <Link
                to={`/films/${film.id}`}
                className="black-button"
              >
                Read more
              </Link>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default FilmCard;
