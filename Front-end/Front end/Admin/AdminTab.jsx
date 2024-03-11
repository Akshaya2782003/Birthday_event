import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import CakeCards from '../components/CakeCard';
import ChocolateCards from '../components/ChocolateCards';
import DecorationCard from '../components/DecorationCard';
import VenueCard from '../components/VenueCard';
import PhotographCard from '../components/PhotographCard';
import '../assets/css/NavTabcss.css';
import { Container, Row, Col } from 'react-bootstrap';

function AdminTab()
{
  const tabs = [
    {
      id: 'Birthday Cakes',
      title: 'Birthday Cakes',
      content: <CakeCards/>
    },
    {
      id: 'Chocolates',
      title: 'Chocolates',
      content: <ChocolateCards/>
    },
    {
      id: 'Banquet Hall',
      title: 'Banquet Hall',
      content: <VenueCard/>
    },
    {
      id: 'Decorations',
      title: 'Decorations',
      content:<DecorationCard/>
    },
    {
      id: 'Photographs',
      title: 'Photographs',
      content: <PhotographCard/>
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

export default AdminTab;
