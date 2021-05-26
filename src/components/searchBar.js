import { Form, Button, Row, Col} from 'react-bootstrap'
const SearchBar = ({handleChange, inputValue, isInputValid, handleSearchClick, isLoading}) => {

const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
}
    return (
        <Form onSubmit={handleSubmit}>
        <Row>
            <Col xs={9} md={10}>
            <Form.Group controlId="ipSearchInput">
            <div style={{height: 40}}>
                <Form.Control type="text" placeholder="Enter IP address or URL" onChange={handleChange} value={inputValue} isInvalid={!isInputValid}/>
                <Form.Control.Feedback type="invalid">
                    Please enter a valid IP address or URL
                </Form.Control.Feedback>
            </div>
            </Form.Group>
            </Col>
            <Col xs={3} md={2} className="text-right">
            <Button disabled={!isInputValid || !inputValue} variant="primary" onClick={() => handleSearchClick()}>
                Submit
            </Button>
            </Col>
        </Row>
      </Form>
    )
}
export default SearchBar