import  { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../../assets/css/Overlaycss.css';
import {
  MDBInput,
  MDBBtn,
  MDBRow,MDBBreadcrumb,
  MDBCol,MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const CakeCard = () => {

  const [cakes, setCakes] = useState([]);
  const [newCake, setNewCake] = useState({
    name: '',
    weight: null,
    cost: null,
    image: ''
  });
  const [showOverlay, setShowOverlay] = useState(false); // State to control overlay visibility
  const [editCake, setEditCake] = useState(null); // State to store the cake being edited

  useEffect(() => {
    fetchCakes();
  }, []);

  const fetchCakes = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/cakes', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCakes(response.data);
    } catch (error) {
      console.error('Error fetching cakes:', error);
    }
  };

  const addCake = async () => {
    try {
      const token = Cookies.get('token');
      await axios.post('http://localhost:8080/api/cakes', newCake, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchCakes(); // Refresh cake list after adding
      setNewCake({ name: '', weight: null, cost: null, image: '' }); // Reset form fields
      setShowOverlay(false); // Hide overlay after adding cake
    } catch (error) {
      console.error('Error adding cake:', error);
    }
  };

  const deleteCake = async (id) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/cakes/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchCakes(); // Refresh cake list after deletion
    } catch (error) {
      console.error('Error deleting cake:', error);
    }
  };

  const cancel = () => {
    setNewCake({ name: '', weight: null, cost: null, image: '' }); // Reset form fields
    setEditCake(null); // Reset edit cake
    setShowOverlay(false); // Hide overlay
  };

  const updateCake = async () => {
    try {
      const token = Cookies.get('token');
      await axios.put(`http://localhost:8080/api/cakes/${editCake.id}`, editCake, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchCakes(); // Refresh cake list after updating
      setEditCake(null); // Reset edit state
      setShowOverlay(false); // Hide overlay
    } catch (error) {
      console.error('Error updating cake:', error);
    }
  };

  return (

    <div style={{margin:'60px'}}>

        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to='/adminpage'>Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
              <Link>Cake</Link>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

      <h2 style={{margin:'0px'}}>Cakes</h2>
      <MDBBtn
        color='info'
        size='lg'
        type="submit"
        style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
        onClick={() => setShowOverlay(true)}>
        Add New Cake
      </MDBBtn>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cakes.map(cake => (
          <div key={cake.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={cake.image} alt={cake.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{cake.name}</strong></p>
                <p style={{ margin: '0px' }}>Weight: {cake.weight}</p>
                <p style={{ margin: '0px' }}>Cost: {cake.cost}</p>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e' }}
                  onClick={() => deleteCake(cake.id)}>
                  Delete
                </MDBBtn>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginLeft: '10px' }}
                  onClick={() => {
                    setEditCake(cake);
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
            <h3>{editCake ? 'Edit Cake' : 'Add New Cake'}</h3>
            <div style={{ width: '400px' }}>
              <MDBInput className='nextline'
                label='Name'
                size="lg"
                type="text"
                placeholder="Name"
                value={editCake ? editCake.name : newCake.name}
                onChange={(e) => {
                  if (editCake) {
                    setEditCake({ ...editCake, name: e.target.value });
                  } else {
                    setNewCake({ ...newCake, name: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Weight'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Weight"
                value={editCake ? editCake.weight : newCake.weight}
                onChange={(e) => {
                  if (editCake) {
                    setEditCake({ ...editCake, weight: e.target.value });
                  } else {
                    setNewCake({ ...newCake, weight: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Cost'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Cost"
                value={editCake ? editCake.cost : newCake.cost}
                onChange={(e) => {
                  if (editCake) {
                    setEditCake({ ...editCake, cost: e.target.value });
                  } else {
                    setNewCake({ ...newCake, cost: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Image URL'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Image URL"
                value={editCake ? editCake.image : newCake.image}
                onChange={(e) => {
                  if (editCake) {
                    setEditCake({ ...editCake, image: e.target.value });
                  } else {
                    setNewCake({ ...newCake, image: e.target.value });
                  }
                }}
              />


              
              <center>
                <MDBBtn
                  color='info'
                  size='lg'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginTop: '25px' }}
                  onClick={editCake ? updateCake : addCake}>
                  {editCake ? 'Update' : 'Add Cake'}
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

export default CakeCard;
