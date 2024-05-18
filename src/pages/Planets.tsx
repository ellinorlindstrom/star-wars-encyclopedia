import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


function Planets() {
  return (
    <div>
    <h1>Planets</h1>
    <Form className='mb-4'>
      <Form.Group className='mb-3'>
        <Form.Label>Search</Form.Label>
        <Form.Control type="text" placeholder="Search for a planet" />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button 
          variant="success" 
          type="submit">
          Submit
        </Button>
      </div>
    </Form>

    </div>
  )
}

export default Planets