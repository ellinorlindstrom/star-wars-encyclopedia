import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface SearchFormProps {
    onSubmit: (search: string) => void;
    placeholder: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit, placeholder }) => {
    const [search, setSearch] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(search);
    };

    return (
        <Form className='mb-4' onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Search</Form.Label>
                <Form.Control
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder={placeholder} />
            </Form.Group>
            <div className="d-flex justify-content-end">
                <Button
                    variant="success"
                    type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default SearchForm;