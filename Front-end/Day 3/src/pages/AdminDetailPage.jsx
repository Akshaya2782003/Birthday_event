import  { useState } from 'react';
import '../assets/css/AdminDetailPagecss.css';

function AdminDetailPage() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'User 1', dateOfBirth: '27-08-2003', photo: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708845251/boy_dyzmeg.jpg' },
    { id: 2, name: 'User 2', dateOfBirth: '21-07-2001', photo: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708846483/boy_yxa8v8.avif' },
    { id: 3, name: 'User 3', dateOfBirth: '02-11-2005', photo: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708846361/boy3_kmmuhx.jpg' }
  ]);

  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [editPersonId, setEditPersonId] = useState(null);

  const handleAddPerson = () => {
    const newPerson = {
      id: Date.now(),
      name,
      dateOfBirth,
      photo
    };
    setPersons([...persons, newPerson]);
    setName('');
    setDateOfBirth('');
    setPhoto('');
    setPhotoName('');
  };

  const handleEditPerson = (id) => {
    const personToEdit = persons.find(person => person.id === id);
    if (personToEdit) {
      setName(personToEdit.name);
      setDateOfBirth(personToEdit.dateOfBirth);
      setPhoto(personToEdit.photo);
      setEditPersonId(id);
    }
  };

  const handleUpdatePerson = () => {
    setPersons(persons.map(person => person.id === editPersonId ? { ...person, name, dateOfBirth, photo } : person));
    setName('');
    setDateOfBirth('');
    setPhoto('');
    setPhotoName('');
    setEditPersonId(null);
  };

  const handleDeletePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
      setPhotoName(file.name);
    }
  };

  return (
    <div className='bgimage'>
    <div className="containerbir">
      <div className="form-group">
        <h1>Users of Party Worx</h1>
        <div style={{display:'flex'}}>
       
        <div>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
        
        <label className="upload-btn"style={{marginLeft:'300px'}} >
          {photoName || 'Upload Photo'}
          <input type="file" onChange={handleFileChange} style={{marginLeft:'300px'}} />
        </label>
        {editPersonId ? 
        <button className="button"  onClick={handleUpdatePerson}>Update</button> : <button className="button" style={{marginLeft:'50px',marginTop:'20px'}} onClick={handleAddPerson}>Add</button>}
        </div>
        </div>
      </div>
      <div className="card-containerw">
        {persons.map(person => (
          <div key={person.id} className="cardinfow">
            <div className="card-contentw">
              <div className="image-containerw">
                <img src={person.photo} className="image-containerw" alt="Person" />
              </div>
              <h2>{person.name}</h2>
              <p>Date of Birth: {person.dateOfBirth}</p>
            </div>
            <div className="card-actionsw">
              <div className="button-containerw">
                <button className="button btncss" onClick={() => handleEditPerson(person.id)}>Edit</button>
                <button className="button btncss" onClick={() => handleDeletePerson(person.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default AdminDetailPage;
