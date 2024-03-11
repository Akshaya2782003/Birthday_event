import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import '../assets/css/NavTabcss.css';

import { Link } from 'react-router-dom';
import CakeUser from '../components/User/CakeUser'
import DecorationUser from '../components/User/DecorationUser';
import VenueUser from '../components/User/VenueUser';
import ReturnGiftUser from '../components/User/ReturnGiftUser';
import FoodUser from '../components/User/FoodUser';
import PhotographyUser from '../components/User/PhotographyUser';

import EntertainmentUser from '../components/User/EntertainmentUser';

function NavTabs() {

  const tabs = [
    {
      id: 'Birthday Cakes',
      title: 'Birthday Cakes',
      content: <CakeUser/>
    },
    {
      id: 'Photography',
      title: 'Photography',
      content: <PhotographyUser/>
    },
    {
      id: 'Venue',
      title: 'Venue',
      content: <VenueUser/>
    },
    {
      id: 'Decorations',
      title: 'Decorations',
      content:<DecorationUser/>
    },
    {
      id: 'Food',
      title: 'Food',
      content: <FoodUser/>
    },
    {
      id: 'Entertainment',
      title: 'Entertainment',
      content: <EntertainmentUser/>
    },
    {
      id: 'Return Gift',
      title: 'Return Gift',
      content: <ReturnGiftUser/>
    },
    {
      id: 'Retirn Gift',
      title:<Link to ='/wish'>Checkout</Link>,
      content: <ReturnGiftUser/>
    },
 
    
  ];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Container fluid style={{}}> 
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                {tabs.map(tab => (
                  <Nav.Item key={tab.id}>
                    <Nav.Link eventKey={tab.id} className={activeTab !== tab.id ? 'inactive-tab' : 'activeTab'} >{tab.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Card.Header>
            <Card.Body>
              {tabs.map(tab => (
                <div key={tab.id} id={tab.id} style={{ display: tab.id === activeTab ? 'block' : 'none' }}>
                  <Card.Text>{tab.content}</Card.Text>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NavTabs;
