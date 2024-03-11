import axios from 'axios';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useEffect, useState } from 'react';
import '../../assets/css/Overlaycss.css';

const CakeUser = () => {
  const [cakes, setCakes] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  useEffect(() => {
    fetchCakes();
  }, []);

  const fetchCakes = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get('http://localhost:8080/api/cakes', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCakes(response.data);
    } catch (error) {
      console.error('Error fetching cakes:', error);
    }
  };

  const addToWishlist = async (id) => {
    try {
      const token = Cookies.get('token');
      const updatedCakes = cakes.map(cake => {
        if (cake.id === id) {
          return {
            ...cake,
            wishlisted: !wishlist.includes(id)
          };
        }
        return cake;
      });

      setWishlist(prevWishlist => {
        if (prevWishlist.includes(id)) {
          return prevWishlist.filter(cakeId => cakeId !== id);
        } else {
          return [...prevWishlist, id];
        }
      });

      await axios.put(`http://localhost:8080/api/cakes/${id}`, updatedCakes.find(cake => cake.id === id), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      fetchCakes();
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cakes.map(cake => (
          <div key={cake.id} style={{ margin: '30px', border: '1px solid black', padding: '10px', width: '270px' }}>
            <img src={cake.image} alt={cake.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div>
              <center>
                <p style={{ margin: '0px' }}><strong>{cake.name}</strong></p>
                <p style={{ margin: '0px' }}>Weight: {cake.weight}</p>
                <p style={{ margin: '0px' }}>Cost: {cake.cost}</p>
                {cake.wishlisted ? (
                  <MDBBtn
                    color='danger'
                    type="submit"
                    onClick={() => addToWishlist(cake.id)}>
                    Remove from Wishlist
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    color='success'
                    type="submit"
                    onClick={() => addToWishlist(cake.id)}>
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

export default CakeUser;
