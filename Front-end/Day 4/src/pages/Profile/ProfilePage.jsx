
import ProfileNavPage from '../Profile/ProfileNavPage';
import ProfileInfoPage from '../Profile/ProfileInfoPage'

function ProfilePage() 
{
  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <ProfileNavPage />
        <ProfileInfoPage/>
      </div>
    </div>
  );
}

export default ProfilePage;
