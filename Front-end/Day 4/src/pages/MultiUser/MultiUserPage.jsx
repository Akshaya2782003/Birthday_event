import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../../assets/css/MultiUsercss.css'
const Author = ({ photo, profileLink }) => (
  <div className="author">
    <Link to={profileLink} className="account-photo account-product-owner">
      <div className="mask">
        <img src={photo} className="photo" alt="Author" />
      </div>
    </Link>
  </div>
);

const AuthorsContainer = ({ authors }) => (
  <div className="authors-container" data-collaborators={authors.length}>
    {authors.map((author, index) => (
      <Author key={index} photo={author.photo} profileLink={author.profileLink} />
    ))}
  </div>
);

const MultiUserPage = () => 
{
  const authors = [
    { photo: "https://res.cloudinary.com/dbhfpccxj/image/upload/v1708846361/boy3_kmmuhx.jpg", profileLink: "/admin" }, // Example profile link
    { photo: "https://res.cloudinary.com/dbhfpccxj/image/upload/v1708846361/boy3_kmmuhx.jpg", profileLink: "/" }, // Example profile link
  ];

  return (
    <div className='con'>
        <div className='con1'>
              <h1>Select The User Role</h1>
             <AuthorsContainer authors={authors} />
      </div>
    </div>
  );
};

export default MultiUserPage;
