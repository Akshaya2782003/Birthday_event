import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Cardscss.css';

function CakeCards() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
    if (index === 0) {
      console.log('Action for the first card');
    } else if (index === 1) {
      console.log('Action for the second card');
    }
  };

  const cardData = [
    {
      title: 'Party Hall',
      description: 'Rock.. Vibe..',
      imageSrc: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708525785/venue_3_xzmayr.jpg'
    },
    {
      title: 'Banquet Hall',
      description: 'Cool Event...',
      imageSrc: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708525784/venue_2_myyej6.jpg'
    },
    {
      title: 'Resort',
      description: 'Enjoy..Chill..',
      imageSrc: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708526156/resort_mjjzxb.jpg'
    }
    
  ];

  return (
    <div className="cards-container1">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className={`cards ${activeCard === index ? 'active' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <Card.Img variant="top" src={card.imageSrc} />
          <Card.Body>
            <Card.Title style={{ color: '#26867e' }}>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CakeCards;
