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
      title: 'Candy',
      description: 'Sugar, sweet, your smile...',
      imageSrc: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708525298/decoration_pxnusa.png'
    },
    {
      title: 'Chocolates',
      description: 'Chocolaty love, my delight',
      imageSrc: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708526482/flower_decor_y5eek0.jpg'
    },
    {
      title: 'Chocolate hamper',
      description: 'Overflowing with chocolatey goodness.',
      imageSrc: 'https://res.cloudinary.com/dbhfpccxj/image/upload/v1708526477/artificial_flower_p1a3hc.jpg'
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
