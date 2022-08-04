import '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

import Button from 'react-bootstrap/Button';
import imagen2 from './Img/2.jpg';
import imagen3 from './Img/3.jpg';
import imagen4 from './Img/4.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function BasicExample() {
  return (
  <CardGroup>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen2} />
      <Card.Body>
        <Card.Title>Subway Surfs</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen3} />
      <Card.Body>
        <Card.Title>Warzon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen4} />
      <Card.Body>
        <Card.Title>Mortal Kombat</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  </CardGroup>
  );
}

export default BasicExample;