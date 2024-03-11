import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';

const FoodWish = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/foods/wishlisted', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setFoods(response.data);
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  const removeFromWishlist = async (food) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/wishlists/foods/${food.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Remove the food from the wishlist immediately
      setFoods(prevFoods => prevFoods.filter(item => item.id !== food.id));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
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
                <p style={{ margin: '0px' }}>Type: {food.type}</p>
                <p style={{ margin: '0px' }}>Cost: {food.cost}</p>
                <MDBBtn
                  color='danger'
                  type="submit"
                  onClick={() => removeFromWishlist(food)}>
                  Remove from Wishlist
                </MDBBtn>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodWish;
