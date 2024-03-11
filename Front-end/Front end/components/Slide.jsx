import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
  padding: '20px',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px'
}
const slideImages = [
  {
    url: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1709975367/slide_puzljo.jpg',
    
  },

  
  {
    url: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1710092536/Screenshot_2024-03-10_231112_vbygcp.png',
   
  },
  {
    url: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1710092526/ban2_ngumpx.png',
    
  },
];

const Slides = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
}
export default Slides