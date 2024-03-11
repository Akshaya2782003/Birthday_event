import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';

const EntertainmentWish = () => {
  const [entertainments, setEntertainments] = useState([]);

  useEffect(() => {
    fetchEntertainments();
  }, []);

  const fetchEntertainments = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/entertainment/wishlisted', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setEntertainments(response.data);
    } catch (error) {
      console.error('Error fetching entertainments:', error);
    }
  };

  const removeFromWishlist = async (entertainment) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/wishlists/entertainment/${entertainment.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Remove the entertainment from the wishlist immediately
      setEntertainments(prevEntertainments => prevEntertainments.filter(item => item.id !== entertainment.id));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {entertainments.map(entertainment => (
          <div key={entertainment.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={entertainment.image} alt={entertainment.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{entertainment.name}</strong></p>
                <p style={{ margin: '0px' }}>Type: {entertainment.type}</p>
                <p style={{ margin: '0px' }}>Cost: {entertainment.cost}</p>
                <MDBBtn
                  color='danger'
                  type="submit"
                  onClick={() => removeFromWishlist(entertainment)}>
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

export default EntertainmentWish;
