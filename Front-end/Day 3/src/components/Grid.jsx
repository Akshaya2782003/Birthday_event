import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import gift from '../assets/images/gift.png'

function Grid() {
  return (
    <Container>
      <Row>
        <Col>
            <img src={gift}/>
        </Col>
        <Col>
        <h1>jkcvjndbjkvn</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;