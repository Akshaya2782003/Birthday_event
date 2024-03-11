import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../../assets/css/Overlaycss.css';
import {
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const PhotographyCard = () => {
  const [photographyList, setPhotographyList] = useState([]);
  const [newPhotography, setNewPhotography] = useState({
    name: '',
    location: '',
    cost: null,
    image: '',
    wishlisted: false
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [editPhotography, setEditPhotography] = useState(null);

  useEffect(() => {
    fetchPhotography();
  }, []);

  const fetchPhotography = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/photography', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPhotographyList(response.data);
    } catch (error) {
      console.error('Error fetching photography:', error);
    }
  };

  const addPhotography = async () => {
    try {
      const token = Cookies.get('token');
      await axios.post('http://localhost:8080/api/photography', newPhotography, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchPhotography();
      setNewPhotography({ name: '', location: '', cost: null, image: '', wishlisted: false });
      setShowOverlay(false);
    } catch (error) {
      console.error('Error adding photography:', error);
    }
  };

  const deletePhotography = async (id) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/photography/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchPhotography();
    } catch (error) {
      console.error('Error deleting photography:', error);
    }
  };

  const cancel = () => {
    setNewPhotography({ name: '', location: '', cost: null, image: '', wishlisted: false });
    setEditPhotography(null);
    setShowOverlay(false);
  };

  const updatePhotography = async () => {
    try {
      const token = Cookies.get('token');
      await axios.put(`http://localhost:8080/api/photography/${editPhotography.id}`, editPhotography, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchPhotography();
      setEditPhotography(null);
      setShowOverlay(false);
    } catch (error) {
      console.error('Error updating photography:', error);
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
              <Link>Photography</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>

      <h2 style={{ margin: '0px' }}>Photography</h2>
      <MDBBtn
        color='info'
        size='lg'
        type="submit"
        style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
        onClick={() => setShowOverlay(true)}>
        Add New Photography
      </MDBBtn>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photographyList.map(photography => (
          <div key={photography.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={photography.image} alt={photography.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{photography.name}</strong></p>
                <p style={{ margin: '0px' }}>Location: {photography.location}</p>
                <p style={{ margin: '0px' }}>Cost: {photography.cost}</p>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e' }}
                  onClick={() => deletePhotography(photography.id)}>
                  Delete
                </MDBBtn>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginLeft: '10px' }}
                  onClick={() => {
                    setEditPhotography(photography);
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
            <h3>{editPhotography ? 'Edit Photography' : 'Add New Photography'}</h3>
            <div style={{ width: '400px' }}>
              <MDBInput className='nextline'
                label='Name'
                size="lg"
                type="text"
                placeholder="Name"
                value={editPhotography ? editPhotography.name : newPhotography.name}
                onChange={(e) => {
                  if (editPhotography) {
                    setEditPhotography({ ...editPhotography, name: e.target.value });
                  } else {
                    setNewPhotography({ ...newPhotography, name: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Location'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Location"
                value={editPhotography ? editPhotography.location : newPhotography.location}
                onChange={(e) => {
                  if (editPhotography) {
                    setEditPhotography({ ...editPhotography, location: e.target.value });
                  } else {
                    setNewPhotography({ ...newPhotography, location: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Cost'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Cost"
                value={editPhotography ? editPhotography.cost : newPhotography.cost}
                onChange={(e) => {
                  if (editPhotography) {
                    setEditPhotography({ ...editPhotography, cost: e.target.value });
                  } else {
                    setNewPhotography({ ...newPhotography, cost: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Image URL'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Image URL"
                value={editPhotography ? editPhotography.image : newPhotography.image}
                onChange={(e) => {
                  if (editPhotography) {
                    setEditPhotography({ ...editPhotography, image: e.target.value });
                  } else {
                    setNewPhotography({ ...newPhotography, image: e.target.value });
                  }
                }}
              />

              <center>
                <MDBBtn
                  color='info'
                  size='lg'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginTop: '25px' }}
                  onClick={editPhotography ? updatePhotography : addPhotography}>
                  {editPhotography ? 'Update' : 'Add Photography'}
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

export default PhotographyCard;
