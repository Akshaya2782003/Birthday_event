import  { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../../assets/css/Overlaycss.css';
import {
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBBreadcrumb,
  MDBCol,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const DecorationCard = () => {
  const [decorations, setDecorations] = useState([]);
  const [newDecoration, setNewDecoration] = useState({
    name: '',
    theme: '',
    cost: null,
    image: '',
    wishlisted: false
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [editDecoration, setEditDecoration] = useState(null);

  useEffect(() => {
    fetchDecorations();
  }, []);

  const fetchDecorations = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/decorations', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setDecorations(response.data);
    } catch (error) {
      console.error('Error fetching decorations:', error);
    }
  };

  const addDecoration = async () => {
    try {
      const token = Cookies.get('token');
      await axios.post('http://localhost:8080/api/decorations', newDecoration, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchDecorations();
      setNewDecoration({ name: '', theme: '', cost: null, image: '', wishlisted: false });
      setShowOverlay(false);
    } catch (error) {
      console.error('Error adding decoration:', error);
    }
  };

  const deleteDecoration = async (id) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/decorations/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchDecorations();
    } catch (error) {
      console.error('Error deleting decoration:', error);
    }
  };

  const cancel = () => {
    setNewDecoration({ name: '', theme: '', cost: null, image: '', wishlisted: false });
    setEditDecoration(null);
    setShowOverlay(false);
  };

  const updateDecoration = async () => {
    try {
      const token = Cookies.get('token');
      await axios.put(`http://localhost:8080/api/decorations/${editDecoration.id}`, editDecoration, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchDecorations();
      setEditDecoration(null);
      setShowOverlay(false);
    } catch (error) {
      console.error('Error updating decoration:', error);
    }
  };

  return (
    <div style={{ margin: '60px' }}>
      <MDBRow>
        <MDBCol>
          <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
            <MDBBreadcrumbItem>
              <Link to='/adminpage'>Home</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link>Decoration</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>
      <h2 style={{ margin: '0px' }}>Decorations</h2>
      <MDBBtn
        color='info'
        size='lg'
        type="submit"
        style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
        onClick={() => setShowOverlay(true)}>
        Add New Decoration
      </MDBBtn>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {decorations.map(decoration => (
          <div key={decoration.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={decoration.image} alt={decoration.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{decoration.name}</strong></p>
                <p style={{ margin: '0px' }}>Theme: {decoration.theme}</p>
                <p style={{ margin: '0px' }}>Cost: {decoration.cost}</p>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e' }}
                  onClick={() => deleteDecoration(decoration.id)}>
                  Delete
                </MDBBtn>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginLeft: '10px' }}
                  onClick={() => {
                    setEditDecoration(decoration);
                    setShowOverlay(true);
                  }}>
                  Edit
                </MDBBtn>
              </center>
            </div>
          </div>
        ))}
      </div>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h3>{editDecoration ? 'Edit Decoration' : 'Add New Decoration'}</h3>
            <div style={{ width: '400px' }}>
              <MDBInput className='nextline'
                label='Name'
                size="lg"
                type="text"
                placeholder="Name"
                value={editDecoration ? editDecoration.name : newDecoration.name}
                onChange={(e) => {
                  if (editDecoration) {
                    setEditDecoration({ ...editDecoration, name: e.target.value });
                  } else {
                    setNewDecoration({ ...newDecoration, name: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Theme'
                size="lg"
                type="text"
                placeholder="Theme"
                value={editDecoration ? editDecoration.theme : newDecoration.theme}
                onChange={(e) => {
                  if (editDecoration) {
                    setEditDecoration({ ...editDecoration, theme: e.target.value });
                  } else {
                    setNewDecoration({ ...newDecoration, theme: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Cost'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Cost"
                value={editDecoration ? editDecoration.cost : newDecoration.cost}
                onChange={(e) => {
                  if (editDecoration) {
                    setEditDecoration({ ...editDecoration, cost: e.target.value });
                  } else {
                    setNewDecoration({ ...newDecoration, cost: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Image URL'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Image URL"
                value={editDecoration ? editDecoration.image : newDecoration.image}
                onChange={(e) => {
                  if (editDecoration) {
                    setEditDecoration({ ...editDecoration, image: e.target.value });
                  } else {
                    setNewDecoration({ ...newDecoration, image: e.target.value });
                  }
                }}
              />

              <center>
                <MDBBtn
                  color='info'
                  size='lg'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginTop: '25px' }}
                  onClick={editDecoration ? updateDecoration : addDecoration}>
                  {editDecoration ? 'Update' : 'Add Decoration'}
                </MDBBtn>
                <MDBBtn
                  color='info'
                  size='lg'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
                  onClick={cancel}>
                  Cancel
                </MDBBtn>
              </center>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DecorationCard;
