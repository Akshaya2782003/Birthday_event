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

const ReturnGiftCard = () => {
  const [returnGiftList, setReturnGiftList] = useState([]);
  const [newReturnGift, setNewReturnGift] = useState({
    name: '',
    minimumQuantity: null,
    cost: null,
    image: '',
    wishlisted: false
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [editReturnGift, setEditReturnGift] = useState(null);

  useEffect(() => {
    fetchReturnGift();
  }, []);

  const fetchReturnGift = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/gifts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setReturnGiftList(response.data);
    } catch (error) {
      console.error('Error fetching return gifts:', error);
    }
  };

  const addReturnGift = async () => {
    try {
      const token = Cookies.get('token');
      await axios.post('http://localhost:8080/api/gifts', newReturnGift, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchReturnGift();
      setNewReturnGift({ name: '', minimumQuantity: null, cost: null, image: '', wishlisted: false });
      setShowOverlay(false);
    } catch (error) {
      console.error('Error adding return gift:', error);
    }
  };

  const deleteReturnGift = async (id) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/gifts/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchReturnGift();
    } catch (error) {
      console.error('Error deleting return gift:', error);
    }
  };

  const cancel = () => {
    setNewReturnGift({ name: '', minimumQuantity: null, cost: null, image: '', wishlisted: false });
    setEditReturnGift(null);
    setShowOverlay(false);
  };

  const updateReturnGift = async () => {
    try {
      const token = Cookies.get('token');
      await axios.put(`http://localhost:8080/api/gifts/${editReturnGift.id}`, editReturnGift, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchReturnGift();
      setEditReturnGift(null);
      setShowOverlay(false);
    } catch (error) {
      console.error('Error updating return gift:', error);
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
              <Link>Return Gifts</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>

      <h2 style={{ margin: '0px' }}>Return Gifts</h2>
      <MDBBtn
        color='info'
        size='lg'
        type="submit"
        style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
        onClick={() => setShowOverlay(true)}>
        Add New Return Gift
      </MDBBtn>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {returnGiftList.map(returnGift => (
          <div key={returnGift.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={returnGift.image} alt={returnGift.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{returnGift.name}</strong></p>
                <p style={{ margin: '0px' }}>Minimum Quantity: {returnGift.minimumQuantity}</p>
                <p style={{ margin: '0px' }}>Cost: {returnGift.cost}</p>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e' }}
                  onClick={() => deleteReturnGift(returnGift.id)}>
                  Delete
                </MDBBtn>
                <MDBBtn
                  color='info'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginLeft: '10px' }}
                  onClick={() => {
                    setEditReturnGift(returnGift);
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
            <h3>{editReturnGift ? 'Edit Return Gift' : 'Add New Return Gift'}</h3>
            <div style={{ width: '400px' }}>
              <MDBInput className='nextline'
                label='Name'
                size="lg"
                type="text"
                placeholder="Name"
                value={editReturnGift ? editReturnGift.name : newReturnGift.name}
                onChange={(e) => {
                  if (editReturnGift) {
                    setEditReturnGift({ ...editReturnGift, name: e.target.value });
                  } else {
                    setNewReturnGift({ ...newReturnGift, name: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Minimum Quantity'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Minimum Quantity"
                value={editReturnGift ? editReturnGift.minimumQuantity : newReturnGift.minimumQuantity}
                onChange={(e) => {
                  if (editReturnGift) {
                    setEditReturnGift({ ...editReturnGift, minimumQuantity: e.target.value });
                  } else {
                    setNewReturnGift({ ...newReturnGift, minimumQuantity: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Cost'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Cost"
                value={editReturnGift ? editReturnGift.cost : newReturnGift.cost}
                onChange={(e) => {
                  if (editReturnGift) {
                    setEditReturnGift({ ...editReturnGift, cost: e.target.value });
                  } else {
                    setNewReturnGift({ ...newReturnGift, cost: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Image URL'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Image URL"
                value={editReturnGift ? editReturnGift.image : newReturnGift.image}
                onChange={(e) => {
                  if (editReturnGift) {
                    setEditReturnGift({ ...editReturnGift, image: e.target.value });
                  } else {
                    setNewReturnGift({ ...newReturnGift, image: e.target.value });
                  }
                }}
              />

              <center>
                <MDBBtn
                  color='info'
                  size='lg'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginTop: '25px' }}
                  onClick={editReturnGift ? updateReturnGift : addReturnGift}>
                  {editReturnGift ? 'Update' : 'Add Return Gift'}
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

export default ReturnGiftCard;
