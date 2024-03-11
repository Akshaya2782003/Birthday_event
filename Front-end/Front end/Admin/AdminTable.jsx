import  { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {MDBBtn} from 'mdb-react-ui-kit';

const AdminTable = () => {
  // Sample data for features
  const navigate = useNavigate();
  const [features, setFeatures] = useState([
    { id: 1, feature: 'Cake', page: 'caketable' },
    { id: 2, feature: 'Venue', page: 'venuetable' },
    { id: 3, feature: 'Photography', page: 'photographytable' },
    { id: 4, feature: 'Decoration', page: 'decorationtable' },
    { id: 5, feature: 'Food', page: 'foodtable' },
    { id: 6, feature: 'Entertainment', page: 'entertainmenttable' },
    { id: 7, feature: 'Return Gift', page: 'gifttable' },
  ]);

  const [newFeature, setNewFeature] = useState('');

  const [editedFeature, setEditedFeature] = useState(null);

  const handleEdit = (id) => {
    // Find the feature to edit
    const featureToEdit = features.find((feature) => feature.id === id);
    // Set the feature to be edited in state
    setEditedFeature(featureToEdit);
  };

  const handleSaveEdit = () => {
    // Save the edited feature
    setFeatures(features.map((feature) => {
      if (feature.id === editedFeature.id) {
        return editedFeature;
      }
      return feature;
    }));
    // Reset edited feature state
    setEditedFeature(null);
  };

  const handleRemove = (id) => {
    // Remove the feature
    setFeatures(features.filter((feature) => feature.id !== id));
  };

  const handleCancelEdit = () => {
    // Reset edited feature state
    setEditedFeature(null);
  };

  const handleChange = (e) => {
    // Update the edited feature state
    setEditedFeature({
      ...editedFeature,
      feature: e.target.value
    });
  };

  const handleAddFeature = () => {
    if (newFeature.trim() !== '') {
      const newId = features.length > 0 ? features[features.length - 1].id + 1 : 1;
      setFeatures([...features, { id: newId, feature: newFeature }]);
      setNewFeature('');
    }
  };

  const handleAdd = (id) => {
    const featureToAdd = features.find((feature) => feature.id === id);
    if (featureToAdd && featureToAdd.page) {
      navigate(`/${featureToAdd.page}`);
      console.log('Add functionality triggered for feature id:', id);
    } else {
      console.error('Invalid feature or page not specified.');
    }
  };

  return (
    <div style={{ margin: '100px', marginTop: '50px' }}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new feature"
          value={newFeature}
          onChange={(e) => setNewFeature(e.target.value)}
        />
        
        <MDBBtn
        color='info'
        size='lg'
        type="submit"
        style={{ backgroundColor: '#26867e', marginTop: '25px', marginLeft: '10px' }}
        onClick={handleAddFeature}>
        Add Feature
      </MDBBtn>
      </div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>ID</th>
            <th>Feature</th>
            <th style={{ float: 'right' ,marginRight:'80px'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.id}>
              <td>{feature.id}</td>
              <td>
                {editedFeature && editedFeature.id === feature.id ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editedFeature.feature}
                    onChange={handleChange}
                  />
                ) : (
                  feature.feature
                )}
              </td>
              <td style={{ textAlign: 'right' }}>
                {editedFeature && editedFeature.id === feature.id ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                      onClick={() => handleEdit(feature.id)}
                    >
                      Edit
                    </button>


                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                      onClick={() => handleAdd(feature.id)}
                    >
                      View
                    </button>

                    

                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                      onClick={() => handleRemove(feature.id)}
                    >
                      Remove
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
