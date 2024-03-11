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

const FoodCard = () => {
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState({
    name: '',
    price: null,
    minimumQuantity: null,
    menu: [],
    image: ''
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [editFood, setEditFood] = useState(null);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/foods', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setFoods(response.data);
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  const addFood = async () => {
    try {
      const token = Cookies.get('token');
      await axios.post('http://localhost:8080/api/foods', newFood, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchFoods();
      setNewFood({
        name: '',
        price: null,
        minimumQuantity: null,
        menu: [],
        image: ''
      });
      setShowOverlay(false);
    } catch (error) {
      console.error('Error adding food:', error);
    }
  };

  const deleteFood = async (id) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/foods/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchFoods();
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  const cancel = () => {
    setNewFood({
      name: '',
      price: null,
      minimumQuantity: null,
      menu: [],
      image: ''
    });
    setEditFood(null);
    setShowOverlay(false);
  };

  const updateFood = async () => {
    try {
      const token = Cookies.get('token');
      await axios.put(`http://localhost:8080/api/foods/${editFood.id}`, editFood, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchFoods();
      setEditFood(null);
      setShowOverlay(false);
    } catch (error) {
      console.error('Error updating food:', error);
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
              <Link>Food</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCol>
      </MDBRow>

      <h2 style={{ margin: '0px' }}>Foods</h2>
      <MDBBtn
        color='info'
        size='lg'
        type="submit"
        style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
        onClick={() => setShowOverlay(true)}>
        Add New Food
      </MDBBtn>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {foods.map(food => (
          <div key={food.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={food.image} alt={food.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <p style={{ margin: '0px' }}><strong>{food.name}</strong></p>
              <p style={{ margin: '0px' }}>Price: {food.price}</p>
              <p style={{ margin: '0px' }}>Minimum Quantity: {food.minimumQuantity}</p>
              <p style={{ margin: '0px' }}>Menu: {food.menu.join(', ')}</p>
              <MDBBtn
                color='info'
                type="submit"
                style={{ backgroundColor: '#26867e' }}
                onClick={() => deleteFood(food.id)}>
                Delete
              </MDBBtn>
              <MDBBtn
                color='info'
                type="submit"
                style={{ backgroundColor: '#26867e', marginLeft: '10px' }}
                onClick={() => {
                  setEditFood(food);
                  setShowOverlay(true);
                }}>
                Edit
              </MDBBtn>
            </div>
          </div>
        ))}
      </div>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h3>{editFood ? 'Edit Food' : 'Add New Food'}</h3>
            <div style={{ width: '400px' }}>
              <MDBInput className='nextline'
                label='Name'
                size="lg"
                type="text"
                placeholder="Name"
                value={editFood ? editFood.name : newFood.name}
                onChange={(e) => {
                  if (editFood) {
                    setEditFood({ ...editFood, name: e.target.value });
                  } else {
                    setNewFood({ ...newFood, name: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Price'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Price"
                value={editFood ? editFood.price : newFood.price}
                onChange={(e) => {
                  if (editFood) {
                    setEditFood({ ...editFood, price: e.target.value });
                  } else {
                    setNewFood({ ...newFood, price: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Minimum Quantity'
                id='formControlLg'
                size="lg"
                type="number"
                placeholder="Minimum Quantity"
                value={editFood ? editFood.minimumQuantity : newFood.minimumQuantity}
                onChange={(e) => {
                  if (editFood) {
                    setEditFood({ ...editFood, minimumQuantity: e.target.value });
                  } else {
                    setNewFood({ ...newFood, minimumQuantity: e.target.value });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Menu'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Menu"
                value={editFood ? editFood.menu.join(', ') : newFood.menu.join(', ')}
                onChange={(e) => {
                  const menuItems = e.target.value.split(',').map(item => item.trim());
                  if (editFood) {
                    setEditFood({ ...editFood, menu: menuItems });
                  } else {
                    setNewFood({ ...newFood, menu: menuItems });
                  }
                }}
              />
              <MDBInput className='nextline'
                label='Image URL'
                id='formControlLg'
                size="lg"
                type="text"
                placeholder="Image URL"
                value={editFood ? editFood.image : newFood.image}
                onChange={(e) => {
                  if (editFood) {
                    setEditFood({ ...editFood, image: e.target.value });
                  } else {
                    setNewFood({ ...newFood, image: e.target.value });
                  }
                }}
              />
              <center>
                <MDBBtn
                  color='info'
                  size='lg'
                  type="submit"
                  style={{ backgroundColor: '#26867e', marginTop: '25px' }}
                  onClick={editFood ? updateFood : addFood}>
                  {editFood ? 'Update' : 'Add Food'}
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

export default FoodCard;
