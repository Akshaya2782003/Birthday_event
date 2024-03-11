
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

const DecorationWish = () => {
  const [decorations, setDecorations] = useState([]);

  useEffect(() => {
    fetchDecorations();
  }, []);

  const fetchDecorations = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/decorations/wishlisted', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setDecorations(response.data);
    } catch (error) {
      console.error('Error fetching decorations:', error);
    }
  };

  const removeFromWishlist = async (decoration) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/wishlists/decorations/${decoration.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Remove the decoration from the wishlist immediately
      setDecorations(prevDecorations => prevDecorations.filter(item => item.id !== decoration.id));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {decorations.map(decoration => (
          <div key={decoration.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={decoration.image} alt={decoration.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{decoration.name}</strong></p>
                <p style={{ margin: '0px' }}>Theme: {decoration.theme}</p>
                <p style={{ margin: '0px' }}>Cost: {decoration.cost}</p>
                <MDBBtn
                  color='danger'
                  type="submit"
                  onClick={() => removeFromWishlist(decoration)}>
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

export default DecorationWish;
