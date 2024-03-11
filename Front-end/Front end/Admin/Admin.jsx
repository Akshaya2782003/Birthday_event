// AdminPanel.js
import { useState } from 'react';
import { Container, Table, Form, Button, Modal,Card } from 'react-bootstrap';
const AdminPanel = () => {
  const initialElements = [
    { id: 1, name: 'Venues', status: 'Available', items: ['Venue1', 'Venue2'] },
    { id: 2, name: 'Decorations', status: 'Available', items: ['Decoration1', 'Decoration2'] },
    { id: 3, name: 'Photography', status: 'Available', items: ['Photography1', 'Photography2'] },
    { id: 4, name: 'Cakes', status: 'Available', items: ['Cake1', 'Cake2'] },
    { id: 5, name: 'Entertainment', status: 'Available', items: ['Entertainment1', 'Entertainment2'] },
    { id: 6, name: 'Return Gifts', status: 'Available', items: ['Return Gift1', 'Return Gift2'] },
    { id: 7, name: 'Food', status: 'Available', items: ['Food1', 'Food2'] },
  ];

  const [elements, setElements] = useState(initialElements);
  const [selectedElement, setSelectedElement] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [elementName, setElementName] = useState('');
  const [elementStatus, setElementStatus] = useState('Available');
  const [elementItems, setElementItems] = useState([]);

  const handleOperation = (element) => {
    setSelectedElement(element);
    setShowModal(true);
    setElementName(element.name);
    setElementStatus(element.status);
    setElementItems(element.items || []);
  };
  
  const handleSave = () => {
    if (selectedElement && selectedElement.name === 'Venues') {
      setElements((prevElements) =>
        prevElements.map((element) =>
          element.id === selectedElement.id
            ? { ...element, name: elementName, status: elementStatus, items: elementItems }
            : element
        )
      );
    }

    handleClose();
  };

  const handleAddItem = () => {
    setElementItems((prevItems) => [...prevItems, '']);
  };

  const handleDeleteItem = (index) => {
    setElementItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleClose = () => {
    setShowModal(false);
    setElementName('');
    setElementStatus('Available');
    setElementItems([]);
    setSelectedElement(null);
  };
  const currentUser = {
    email: 'dharani@example.com',
    firstName: 'Dharani',
    lastName: 'Dharan',
    role: 'Administrator',
    registrationDate: '2022-01-01',
  };
  
  const adminProfileCard = (
    <div className="d-flex justify-content-center align-items-center text-align-center">
  <Card style={{ width: '50%', marginBottom: '20px' }}>
    <Card.Body className="d-flex justify-content-between align-items-center">
      <div>
        <Card.Title>Current User</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {currentUser.email}
        </Card.Text>
        <Card.Text>
          <strong>First Name:</strong> {currentUser.firstName}
        </Card.Text>
        <Card.Text>
          <strong>Last Name:</strong> {currentUser.lastName}
        </Card.Text>
        <Card.Text>
          <strong>Role:</strong> {currentUser.role}
        </Card.Text>
        <Card.Text>
          <strong>Registration Date:</strong> {currentUser.registrationDate}
        </Card.Text>
      </div>

      <img
        src="img.com" 
        alt="Admin Profile"
        style={{ marginLeft: '20px', border: '1px solid black', width: '100px', height: '100px' }}
      />
    </Card.Body>
  </Card>
    </div>
  );
  


  
  return (
    <Container>
      <h1>Admin Panel</h1>
      {adminProfileCard}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.status}</td>
              <td>
                <Button variant="warning" onClick={() => handleOperation(element)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={handleSave}>
        Save
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Element</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formElementName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter element name"
                value={elementName}
                onChange={(e) => setElementName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formElementStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={elementStatus}
                onChange={(e) => setElementStatus(e.target.value)}
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </Form.Control>
            </Form.Group>
            {selectedElement && selectedElement.name === 'Venues' && (
              <>
                <Form.Group controlId="formElementItems">
                  <Form.Label>Items</Form.Label>
                  {elementItems.map((item, index) => (
                    <div key={index} className="d-flex">
                      <Form.Control
                        type="text"
                        placeholder={`Enter item ${index + 1}`}
                        value={item}
                        onChange={(e) => {
                          const updatedItems = [...elementItems];
                          updatedItems[index] = e.target.value;
                          setElementItems(updatedItems);
                        }}
                      />
                      <Button
                        variant="danger"
                        className="ml-2"
                        onClick={() => handleDeleteItem(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                  <Button variant="success" onClick={handleAddItem}>
                    Add Item
                  </Button>
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          <br />
    </Container>
  );
};

export default AdminPanel;
