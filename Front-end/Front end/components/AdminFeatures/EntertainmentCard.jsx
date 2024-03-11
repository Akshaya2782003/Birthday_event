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

const EntertainmentCard = () => {
  const [entertainmentList, setEntertainmentList] = useState([]);
  const [newEntertainment, setNewEntertainment] = useState({
    name: '',
    duration: null,
    cost: null,
    image: '',
    wishlisted: false
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [editEntertainment, setEditEntertainment] = useState(null);

  useEffect(() => {
    fetchEntertainment();
  }, []);

  const fetchEntertainment = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/entertainment', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setEntertainmentList(response.data);
    } catch (error) {
      console.error('Error fetching entertainment:', error);
    }
  };

  const addEntertainment = async () => {
    try {
      const token = Cookies.get('token');
      await axios.post('http://localhost:8080/api/entertainment', newEntertainment, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchEntertainment();
      setNewEntertainment({ name: '', duration: null, cost: null, image: '', wishlisted: false });
      setShowOverlay(false);
    } catch (error) {
      console.error('Error adding entertainment:', error);
    }
  };

  const deleteEntertainment = async (id) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/entertainment/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchEntertainment();
    } catch (error) {
      console.error('Error deleting entertainment:', error);
    }
  };

  const cancel = () => {
    setNewEntertainment({ name: '', duration: null, cost: null, image: '', wishlisted: false });
    setEditEntertainment(null);
    setShowOverlay(false);
  };

  const updateEntertainment = async () => {
    try {
      const token = Cookies.get('token');
      await axios.put(`http://localhost:8080/api/entertainment/${editEntertainment.id}`, editEntertainment, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchEntertainment();
      setEditEntertainment(null);
      setShowOverlay(false);
    } catch (error) {
      console.error('Error updating entertainment:', error);
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
              <Link>Entertainment</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>

      <h2 style={{ margin: '0px' }}>Entertainment</h2>
      <MDBBtn
        color='info'
        size='lg'
        type="submit"
        style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
        onClick={() => setShowOverlay(true)}>
        Add New Entertainment
      </MDBBtn>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {entertainmentList.map(entertainment => (
          <div key={entertainment.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={entertainment.image} alt={entertainment.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{entertainment.name}</strong></p>
                <p style={{ margin: '0px' }}>Duration: {entertainment.duration}</p>
                <p style={{ margin: '0px' }}>Cost: {entertainment.cost}</p>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e' }}
                  onClick={() => deleteEntertainment(entertainment.id)}>
                  Delete
                </MDBBtn>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginLeft: '10px' }}
                  onClick={() => {
                    setEditEntertainment(entertainment);
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
            <h3>{editEntertainment ? 'Edit Entertainment' : 'Add New Entertainment'}</h3>
            <div style={{ width: '400px' }}>
              <MDBInput className='nextline'
                label='Name'
                size="lg"
                type="text"
                placeholder="Name"
                value={editEntertainment ? editEntertainment.name : newEntertainment.name}
                onChange={(e) => {
                  if (editEntertainment) {
                    setEditEntertainment({ ...editEntertainment, name: e.target.value });
                  } else {
                    setNewEntertainment({ ...newEntertainment, name: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Duration'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Duration"
                value={editEntertainment ? editEntertainment.duration : newEntertainment.duration}
                onChange={(e) => {
                  if (editEntertainment) {
                    setEditEntertainment({ ...editEntertainment, duration: e.target.value });
                  } else {
                    setNewEntertainment({ ...newEntertainment, duration: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Cost'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Cost"
                value={editEntertainment ? editEntertainment.cost : newEntertainment.cost}
                onChange={(e) => {
                  if (editEntertainment) {
                    setEditEntertainment({ ...editEntertainment, cost: e.target.value });
                  } else {
                    setNewEntertainment({ ...newEntertainment, cost: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Image URL'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Image URL"
                value={editEntertainment ? editEntertainment.image : newEntertainment.image}
                onChange={(e) => {
                  if (editEntertainment) {
                    setEditEntertainment({ ...editEntertainment, image: e.target.value });
                  } else {
                    setNewEntertainment({ ...newEntertainment, image: e.target.value });
                  }
                }}
              />

              <center>
                <MDBBtn
                  color='info'
                  size='lg'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginTop: '25px' }}
                  onClick={editEntertainment ? updateEntertainment : addEntertainment}>
                  {editEntertainment ? 'Update' : 'Add Entertainment'}
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

export default EntertainmentCard;
