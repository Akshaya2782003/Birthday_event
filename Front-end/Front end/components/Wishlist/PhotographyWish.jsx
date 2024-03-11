import  { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';

const PhotographyWish = () => {
  const [photographyItems, setPhotographyItems] = useState([]);

  useEffect(() => {
    fetchPhotographyItems();
  }, []);

  const fetchPhotographyItems = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/photography/wishlisted', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPhotographyItems(response.data);
    } catch (error) {
      console.error('Error fetching photography items:', error);
    }
  };

  const removeFromWishlist = async (item) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/wishlists/photography/${item.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Remove the item from the wishlist immediately
      setPhotographyItems(prevItems => prevItems.filter(photographyItem => photographyItem.id !== item.id));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photographyItems.map(item => (
          <div key={item.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={item.image} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{item.name}</strong></p>
                <p style={{ margin: '0px' }}>Type: {item.type}</p>
                <p style={{ margin: '0px' }}>Cost: {item.cost}</p>
                <MDBBtn
                  color='danger'
                  type="submit"
                  onClick={() => removeFromWishlist(item)}>
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

export default PhotographyWish;
