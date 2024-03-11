import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';

const CakeWish = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  const fetchWishlistItems = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/cakes/wishlisted', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setWishlistItems(response.data);
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const token = Cookies.get('token');
      
      // Update the wishlistItems state to set wishlisted to false for the item being removed
      setWishlistItems(prevItems => prevItems.map(item => {
        if (item.id === id) {
          return { ...item, wishlisted: false };
        }
        return item;
      }));
      
      // Make an HTTP request to update the backend
      await axios.put(`http://localhost:8080/api/cakes/${id}`, { wishlisted: false }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  };

  return (
    <div style={{margin:'0px'}}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {wishlistItems.map(item => (
          <div key={item.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={item.image} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{item.name}</strong></p>
                <p style={{ margin: '0px' }}>Weight: {item.weight}</p>
                <p style={{ margin: '0px' }}>Cost: {item.cost}</p>
                <MDBBtn
                  color='danger'
                  type="submit"
                  onClick={() => removeFromWishlist(item.id)}>
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

export default CakeWish;
