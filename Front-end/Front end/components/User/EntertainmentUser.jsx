import  { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';

const EntertainmentUser = () => {
  const [entertainmentItems, setEntertainmentItems] = useState([]);

  useEffect(() => {
    fetchEntertainmentItems();
  }, []);

  const fetchEntertainmentItems = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/entertainment', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setEntertainmentItems(response.data);
    } catch (error) {
      console.error('Error fetching entertainment items:', error);
    }
  };

  const addToWishlist = async (id) => {
    try {
      const token = Cookies.get('token');
      const updatedEntertainmentItems = entertainmentItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            wishlisted: !item.wishlisted
          };
        }
        return item;
      });

      await axios.put(`http://localhost:8080/api/entertainment/${id}`, updatedEntertainmentItems.find(item => item.id === id), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      fetchEntertainmentItems();
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {entertainmentItems.map(item => (
          <div key={item.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={item.image} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{item.name}</strong></p>
                <p style={{ margin: '0px' }}>Duration: {item.duration}</p>
                <p style={{ margin: '0px' }}>Cost: {item.cost}</p>
                {item.wishlisted ? (
                  <MDBBtn
                    color='danger'
                    type="submit"
                    onClick={() => addToWishlist(item.id)}>
                    Remove from Wishlist
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    color='success'
                    type="submit"
                    onClick={() => addToWishlist(item.id)}>
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

export default EntertainmentUser;
