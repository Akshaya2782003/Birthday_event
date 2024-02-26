import '../../assets/css/ProfileNavcss.css';
function ProfileNavPage() {
  return (
    <div className="profile-nav col-md-3">
      <div className="panel">
        <div className="user-heading round">
          <a href="#">
            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
          </a>
          <h1>Akshaya Hariram</h1>
          <p>akshayahariram@gmail.com</p>
        </div>
        <div className="containerimage">
                <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708842507/cakecandle_dvfsg9.jpg' />
        </div>

      </div>
    </div>
  );
}

export default ProfileNavPage;
