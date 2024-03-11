import  { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';

const ReturnGiftWish = () => {
  const [returnGifts, setReturnGifts] = useState([]);

  useEffect(() => {
    fetchReturnGifts();
  }, []);

  const fetchReturnGifts = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/gifts/wishlisted', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setReturnGifts(response.data);
    } catch (error) {
      console.error('Error fetching return gifts:', error);
    }
  };

  const removeFromWishlist = async (returnGift) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/wishlists/gifts/${returnGift.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Remove the return gift from the wishlist immediately
      setReturnGifts(prevReturnGifts => prevReturnGifts.filter(item => item.id !== returnGift.id));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {returnGifts.map(returnGift => (
          <div key={returnGift.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={returnGift.image} alt={returnGift.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{returnGift.name}</strong></p>
                <p style={{ margin: '0px' }}>Minimum Quantity: {returnGift.minimumQuantity}</p>
                <p style={{ margin: '0px' }}>Cost: {returnGift.cost}</p>
                <MDBBtn
                  color='danger'
                  type="submit"
                  onClick={() => removeFromWishlist(returnGift)}>
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

export default ReturnGiftWish;
