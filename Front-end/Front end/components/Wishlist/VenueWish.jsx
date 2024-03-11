import  { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';

const VenueWish = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/venues/wishlisted', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const removeFromWishlist = async (venue) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://localhost:8080/api/wishlists/venues/${venue.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Remove the venue from the wishlist immediately
      setVenues(prevVenues => prevVenues.filter(item => item.id !== venue.id));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {venues.map(venue => (
          <div key={venue.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={venue.image} alt={venue.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{venue.name}</strong></p>
                <p style={{ margin: '0px' }}>Location: {venue.location}</p>
                <p style={{ margin: '0px' }}>Capacity: {venue.capacity}</p>
                <MDBBtn
                  color='danger'
                  type="submit"
                  onClick={() => removeFromWishlist(venue)}>
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

export default VenueWish;
