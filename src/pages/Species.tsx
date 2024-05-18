import  Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Species() {
  return (
    <div>
      <h1>Species</h1>
      <Form className='mb-4'>
      <Form.Group className='mb-3'>
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="Search for a species" />
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

export default Species