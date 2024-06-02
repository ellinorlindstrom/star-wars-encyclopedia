import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

interface SearchFormProps {
  onSubmit: (search: string) => void;
  placeholder: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit, placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const inputSearchQueryEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(searchInput);
  };

  return (
    <Form className="mb-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Search the Galaxy 💫</Form.Label>
        <Form.Control
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder}
          ref={inputSearchQueryEl}
          value={searchInput}
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Link
          to={`?search=${searchInput}`}
          className="btn btn-dark text-white text-decoration-none"
        >
          Search
        </Link>
      </div>
    </Form>
  );
};

export default SearchForm;
