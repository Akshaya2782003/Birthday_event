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

const VenueCard = () => {
  const [venues, setVenues] = useState([]);
  const [newVenue, setNewVenue] = useState({
    name: '',
    location: '',
    members: null,
    cost: null,
    image: '',
    wishlisted: false
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [editVenue, setEditVenue] = useState(null);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/venues', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const addVenue = async () => {
    try {
      const token = Cookies.get('token');
      await axios.post('http://localhost:8080/api/venues', newVenue, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchVenues();
      setNewVenue({ name: '', location: '', members: null, cost: null, image: '', wishlisted: false });
      setShowOverlay(false);
    } catch (error) {
      console.error('Error adding venue:', error);
    }
  };

  const deleteVenue = async (id) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/venues/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchVenues();
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  const cancel = () => {
    setNewVenue({ name: '', location: '', members: null, cost: null, image: '', wishlisted: false });
    setEditVenue(null);
    setShowOverlay(false);
  };

  const updateVenue = async () => {
    try {
      const token = Cookies.get('token');
      await axios.put(`http://localhost:8080/api/venues/${editVenue.id}`, editVenue, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchVenues();
      setEditVenue(null);
      setShowOverlay(false);
    } catch (error) {
      console.error('Error updating venue:', error);
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
              <Link>Venue</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>
      <h2 style={{ margin: '0px' }}>Venues</h2>
      <MDBBtn
        color='info'
        size='lg'
        type="submit"
        style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
        onClick={() => setShowOverlay(true)}>
        Add New Venue
      </MDBBtn>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {venues.map(venue => (
          <div key={venue.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={venue.image} alt={venue.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{venue.name}</strong></p>
                <p style={{ margin: '0px' }}>Location: {venue.location}</p>
                <p style={{ margin: '0px' }}>Members: {venue.members}</p>
                <p style={{ margin: '0px' }}>Cost: {venue.cost}</p>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e' }}
                  onClick={() => deleteVenue(venue.id)}>
                  Delete
                </MDBBtn>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginLeft: '10px' }}
                  onClick={() => {
                    setEditVenue(venue);
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
            <h3>{editVenue ? 'Edit Venue' : 'Add New Venue'}</h3>
            <div style={{ width: '400px' }}>
              <MDBInput className='nextline'
                label='Name'
                size="lg"
                type="text"
                placeholder="Name"
                value={editVenue ? editVenue.name : newVenue.name}
                onChange={(e) => {
                  if (editVenue) {
                    setEditVenue({ ...editVenue, name: e.target.value });
                  } else {
                    setNewVenue({ ...newVenue, name: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Location'
                size="lg"
                type="text"
                placeholder="Location"
                value={editVenue ? editVenue.location : newVenue.location}
                onChange={(e) => {
                  if (editVenue) {
                    setEditVenue({ ...editVenue, location: e.target.value });
                  } else {
                    setNewVenue({ ...newVenue, location: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Members'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Members"
                value={editVenue ? editVenue.members : newVenue.members}
                onChange={(e) => {
                  if (editVenue) {
                    setEditVenue({ ...editVenue, members: e.target.value });
                  } else {
                    setNewVenue({ ...newVenue, members: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Cost'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Cost"
                value={editVenue ? editVenue.cost : newVenue.cost}
                onChange={(e) => {
                  if (editVenue) {
                    setEditVenue({ ...editVenue, cost: e.target.value });
                  } else {
                    setNewVenue({ ...newVenue, cost: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Image URL'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Image URL"
                value={editVenue ? editVenue.image : newVenue.image}
                onChange={(e) => {
                  if (editVenue) {
                    setEditVenue({ ...editVenue, image: e.target.value });
                  } else {
                    setNewVenue({ ...newVenue, image: e.target.value });
                  }
                }}
              />

              <center>
                <MDBBtn
                  color='info'
                  size='lg'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginTop: '25px' }}
                  onClick={editVenue ? updateVenue : addVenue}>
                  {editVenue ? 'Update' : 'Add Venue'}
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

export default VenueCard;
