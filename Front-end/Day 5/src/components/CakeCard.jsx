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
      title: 'Cakes',
      description: 'Cakes of your taste...',
      imageSrc: 'https://www.cakebuzz.co.in/wp-content/uploads/2023/08/Choco-Vanilla.webp'
    },
    {
      title: 'Customized Cakes',
      description: 'Cakes of your idea...',
      imageSrc: 'https://www.cakebuzz.co.in/wp-content/uploads/2022/06/Elephant-Themed-Birthday-Cake-300x300.jpg'
    },
    {
      title: 'Cupcake',
      description: 'Cupcake',
      imageSrc: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708521416/cupcake_uytar0.jpg'
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
