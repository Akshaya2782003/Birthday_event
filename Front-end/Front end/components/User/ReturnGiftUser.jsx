import  { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../../assets/css/Overlaycss.css';
import { MDBBtn } from 'mdb-react-ui-kit';
const ReturnGiftUser = () => {
  const [returnGifts, setReturnGifts] = useState([]);

  useEffect(() => {
    fetchReturnGifts();
  }, []);

  const fetchReturnGifts = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/gifts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setReturnGifts(response.data);
    } catch (error) {
      console.error('Error fetching return gifts:', error);
    }
  };

  const addToWishlist = async (id) => {
    try {
      const token = Cookies.get('token');
      const updatedReturnGifts = returnGifts.map(item => {
        if (item.id === id) {
          return {
            ...item,
            wishlisted: !item.wishlisted
          };
        }
        return item;
      });

      await axios.put(`http://localhost:8080/api/gifts/${id}`, updatedReturnGifts.find(item => item.id === id), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      fetchReturnGifts();
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {returnGifts.map(item => (
          <div key={item.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={item.image} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{item.name}</strong></p>
                <p style={{ margin: '0px' }}>Minimum Quantity: {item.minimumQuantity}</p>
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

export default ReturnGiftUser;
