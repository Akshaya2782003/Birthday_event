import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';

export default function AProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState('Akshaya');
  const [email, setEmail] = useState('akshaya@gmail.com');
  const [phone, setPhone] = useState('(+91) 8300730877');
  const [dob, setDob] = useState('27-08-2003');
  const [address, setAddress] = useState('No.40, Bryant Nager 1st Street Thoothukudi');

  const handleLogout = () => {
    
    console.log("Logged out");
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to='/adminpage'>Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
              <Link>Admin Profile</Link>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://res.cloudinary.com/dbhfpccxj/image/upload/v1709731957/girl1_qtgcu7.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">ADMIN</p>
                <p className="text-muted mb-4">{fullName}</p>
                <div className="d-flex justify-content-center mb-2">
                  {!isEditing ? (
                    <MDBBtn onClick={handleEditProfile} style={{backgroundColor:'#26867e'}}>Edit</MDBBtn>
                  ) : (
                    <MDBBtn onClick={handleSaveProfile}>Save</MDBBtn>
                  )}
                  <MDBBtn onClick={handleLogout} outline className="ms-1">Logout</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {!isEditing ? (
                      <MDBCardText className="text-muted">{fullName}</MDBCardText>
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    )}
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {!isEditing ? (
                      <MDBCardText className="text-muted">{email}</MDBCardText>
                    ) : (
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    )}
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {!isEditing ? (
                      <MDBCardText className="text-muted">{phone}</MDBCardText>
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    )}
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>DOB</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {!isEditing ? (
                      <MDBCardText className="text-muted">{dob}</MDBCardText>
                    ) : (
                      <input
                        type="date"
                        className="form-control"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    )}
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {!isEditing ? (
                      <MDBCardText className="text-muted">{address}</MDBCardText>
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Account :</span> User Status</MDBCardText>
                    
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>User</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100}  style={{backgroundColor:'#26867e'}} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Customers</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100}  style={{backgroundColor:'#26867e'}}/>
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Feedback</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100}  style={{backgroundColor:'#26867e'}}/>
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Orders</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100}  style={{backgroundColor:'#26867e'}} />
                    </MDBProgress>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Services :</span> Customer Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Cakes</MDBCardText>
                    <MDBProgress className="rounded" >
                      <MDBProgressBar width={80} valuemin={0} valuemax={100}  style={{backgroundColor:'#26867e'}}/>
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Venue</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100}  style={{backgroundColor:'#26867e'}}/>
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Decoration</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100}  style={{backgroundColor:'#26867e'}}/>
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Photograph</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100}  style={{backgroundColor:'#26867e'}}/>
                    </MDBProgress>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

  );
}
