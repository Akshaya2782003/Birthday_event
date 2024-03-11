import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';

const DecorationUser = () => {
  const [decorations, setDecorations] = useState([]);

  useEffect(() => {
    fetchDecorations();
  }, []);

  const fetchDecorations = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/decorations', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setDecorations(response.data);
    } catch (error) {
      console.error('Error fetching decorations:', error);
    }
  };

  const addToWishlist = async (id) => {
    try {
      const token = Cookies.get('token');
      const updatedDecorations = decorations.map(decoration => {
        if (decoration.id === id) {
          return {
            ...decoration,
            wishlisted: !decoration.wishlisted
          };
        }
        return decoration;
      });

      await axios.put(`http://localhost:8080/api/decorations/${id}`, updatedDecorations.find(decoration => decoration.id === id), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      fetchDecorations();
    } catch (error) {
      console.error('Error updating wishlist:', error);
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
                {decoration.wishlisted ? (
                  <MDBBtn
                    color='danger'
                    type="submit"
                    onClick={() => addToWishlist(decoration.id)}>
                    Remove from Wishlist
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    color='success'
                    type="submit"
                    onClick={() => addToWishlist(decoration.id)}>
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

export default DecorationUser;



