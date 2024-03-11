import  { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';

const VenueUser = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/venues', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const addToWishlist = async (id) => {
    try {
      const token = Cookies.get('token');
      const updatedVenues = venues.map(venue => {
        if (venue.id === id) {
          return {
            ...venue,
            wishlisted: !venue.wishlisted
          };
        }
        return venue;
      });

      await axios.put(`http://localhost:8080/api/venues/${id}`, updatedVenues.find(venue => venue.id === id), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      fetchVenues();
    } catch (error) {
      console.error('Error updating wishlist:', error);
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
                <p style={{ margin: '0px' }}>Members: {venue.members}</p>
                <p style={{ margin: '0px' }}>Cost: {venue.cost}</p>
                {venue.wishlisted ? (
                  <MDBBtn
                    color='danger'
                    type="submit"
                    onClick={() => addToWishlist(venue.id)}>
                    Remove from Wishlist
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    color='success'
                    type="submit"
                    onClick={() => addToWishlist(venue.id)}>
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

export default VenueUser;

// Frontend (React Component)




// import { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FaHeart } from 'react-icons/fa';

// const VenueUser = () => {
//   const [venues, setVenues] = useState([]);
//   const userId = Cookies.get('userId'); // replace 'userId' with the name of your cookie

//   useEffect(() => {
//     const token = Cookies.get('token'); // replace 'token' with the name of your cookie

//     // fetch the venues
//     fetch('http://localhost:8080/api/venues', {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     })
//       .then(response => response.json())
//       .then(venuesData => {
//         // fetch the wishlist for the current user and category 'Venues'
//         fetch(`http://localhost:8080/api/wishlists/user/${userId}?category=Venues`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         })
//           .then(response => response.json())
//           .then(wishlistData => {
//             // update the wishlisted property of the venues that are in the wishlist
//             const wishlistedVenueIds = wishlistData.map(item => item.venueId);
//             setVenues(venuesData.map(venue => ({ ...venue, wishlisted: wishlistedVenueIds.includes(venue.id) })));
//           });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, [userId]);

//   const handleWishlistClick = (venue) => {
//     const token = Cookies.get('token'); // replace 'token' with the name of your cookie

//     if (venue.wishlisted) {
//       // if the venue is already in the wishlist, send a DELETE request
//       fetch(`http://localhost:8080/api/wishlists/${venue.id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       })
//         .then(() => {
//           // update the venue's wishlisted status in the state
//           setVenues(venues.map(v => v.id === venue.id ? { ...v, wishlisted: false } : v));
//         })
//         .catch(error => console.error('Error deleting wishlist item:', error));
//     } else {
//       // if the venue is not in the wishlist, send a POST request
//       fetch('http://localhost:8080/api/wishlists', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           itemName: venue.name,
//           category: 'Venues',
//           imgUrl: venue.imageUrl,
//           userId
//         })
//       })
//         .then(() => {
//           // update the venue's wishlisted status in the state
//           setVenues(venues.map(v => v.id === venue.id ? { ...v, wishlisted: true } : v));
//         })
//         .catch(error => console.error('Error adding wishlist item:', error));
//     }
//   };

//   return (
//     <Container>
//       {venues.reduce((acc, venue, index) => {
//         if (index % 4 === 0) acc.push([]);
//         acc[acc.length - 1].push(venue);
//         return acc;
//       }, []).map((venuesRow, index) => (
//         <Row key={index} className="mb-4">
//           {venuesRow.map((venue) => (
//             <Col key={venue.id} md={3}>
//               <Card className="mt-4">
//                 <Card.Img variant="top" src={venue.imageUrl} />
//                 <Card.Body>
//                   <Card.Title>{venue.name}</Card.Title>
//                   <Card.Text>
//                     <strong>Location:</strong> {venue.location}
//                     <br />
//                     <strong>Capacity:</strong> {venue.capacity}
//                     <br />
//                     <strong>Price:</strong> {venue.price}
//                     <br />
//                     <strong>Available:</strong> {venue.available ? 'Yes' : 'No'}
//                   </Card.Text>
//                   <FaHeart onClick={() => handleWishlistClick(venue)} color={venue.wishlisted ? 'red' : 'grey'} />
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       ))}
//     </Container>
//   );
// };

// export default VenueUser;
