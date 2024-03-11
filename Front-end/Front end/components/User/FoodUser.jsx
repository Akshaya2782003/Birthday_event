import  { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import '../../assets/css/Overlaycss.css'; // Assuming you have your custom CSS file imported here

const FoodUser = () => {
  const [foods, setFoods] = useState([]);

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

  const addToWishlist = async (id) => {
    try {
      const token = Cookies.get('token');
      const updatedFoods = foods.map(food => {
        if (food.id === id) {
          return {
            ...food,
            wishlisted: !food.wishlisted
          };
        }
        return food;
      });

      await axios.put(`http://localhost:8080/api/foods/${id}`, updatedFoods.find(food => food.id === id), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      fetchFoods();
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {foods.map(food => (
          <div key={food.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={food.image} alt={food.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{food.name}</strong></p>
                <p style={{ margin: '0px' }}>Price: {food.price}</p>
                <p style={{ margin: '0px' }}>Minimum Quantity: {food.minimumQuantity}</p>
                <p style={{ margin: '0px' }}>Menu: {food.menu.join(', ')}</p>
                {food.wishlisted ? (
                  <MDBBtn
                    color='danger'
                    type="submit"
                    onClick={() => addToWishlist(food.id)}>
                    Remove from Wishlist
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    color='success'
                    type="submit"
                    onClick={() => addToWishlist(food.id)}>
                    Add to Wishlist
                  </MDBBtn>
                )}
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodUser;
