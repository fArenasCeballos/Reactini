import '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

import Button from 'react-bootstrap/Button';
import imagen4 from './Img/4.jpg';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen4} />
      <Card.Body>
        <Card.Title>Roblox</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;