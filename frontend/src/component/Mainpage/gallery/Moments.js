import React from 'react'
import image32 from './images/image32.jpg';
import image33 from './images/image33.jpg';
import image34 from './images/image34.jpg';
import image35 from './images/image35.jpg';
import image36 from './images/image36.jpg';
import image37 from './images/image37.jpg';
import image38 from './images/image38.jpg';
import image39 from './images/image39.jpg';
import image40 from './images/image40.jpg';
import image41 from './images/image41.jpg';
import image42 from './images/image42.jpg';
import image43 from './images/image43.jpeg';
import image44 from './images/image44.jpg';
import image45 from './images/image45.jpg';
import image46 from './images/image46.jpg';
import image47 from './images/image47.jpg';
import image48 from './images/image48.jpg';
import image49 from './images/image49.jpg';
import image50 from './images/image50.jpg';
import image51 from './images/image51.jpg';
import image52 from './images/image52.jpg';
import SC from '../../../cmncomp/Sc';
import Footer from '../../../cmncomp/Footer';

import './TrainPage.css' ; // Import your CSS file for stylin
const trainData = [
  {
    id: 1,
    imageUrl: image32,
    description: 'Tirupathi Temple \n Tirupathi Express',
  },
  {
    id: 2,
    imageUrl: image33,
    description: 'Velakanni Church \n Velakanni Express',
  },
  {
    id: 3,
    imageUrl: image34,
    description: 'Mahabalipuram temple \nChennai Express',
  },
  {
    id: 4,
    imageUrl: image35,
    description: 'Pondicherry Express',
  },
  {
    id: 5,
    imageUrl: image36,
    description: 'Murdeshwara Temple \n Mangalore Express',
  },
  {
    id: 6,
    imageUrl: image37,
    description: 'Tanjore Temple \n Tanjore Express',
  },
  {
    id: 6,
    imageUrl: image38,
    description: 'Santa Cruz Cathedral Basilica \n Kochuveli Express',
  },{
    id: 6,
    imageUrl: image39,
    description: ' Sanchi Stupa Hazrat Nizamuddin Rajdhani Express',
  },{
    id: 6,
    imageUrl: image40,
    description: ' Charminar \n Kacheguda SF Express',
  },{
    id: 6,
    imageUrl: image41,
    description: 'New Delhi Gate \n Chandigarh SF Express',
  },{
    id: 6,
    imageUrl: image42,
    description: 'Gateway of India \n Mumbai LTT Express',
  },{
    id: 6,
    imageUrl: image43,
    description: 'Golden temple \n Paschim SF Express',
  },{
    id: 6,
    imageUrl: image44,
    description: 'Hawa Mahal \n Jaipur SF Express',
  },{
    id: 6,
    imageUrl: image45,
    description: 'Fort Aguada \n Vasco-da-Gama Amaravati Express',
  },{
    id: 6,
    imageUrl: image46,
    description: ' Laxmi Vilas Palace \n Palace Queen Humsafar Express',
  },{
    id: 6,
    imageUrl: image47,
    description: 'Taj Mahal \n Renigunta SF Express',
  },{
    id: 6,
    imageUrl: image48,
    description: 'The Great budhha statue\n Humsafar Express',
  },{
    id: 6,
    imageUrl: image49,
    description: 'Sivasagar \n Guwahati Express',
  },{
    id: 6,
    imageUrl: image50,
    description: ' Jaganath Puri Temple \n Muzaffarpur Express',
  },
  {
    id: 6,
    imageUrl: image51,
    description: 'Rasmancha \n Howrah Duronto Express',
  },
  {
    id: 6,
    imageUrl: image52,
    description: ' Qutab Mimar \n Hazrat Nizamuddin Duronto Express',
  },
  // Add similar data for the other 10 images
];


const Moments = () => {
  return (
    <><SC /><div>
     <h1 style={{ textAlign: 'center' }}>Heritage of India</h1>
      <div className="train-container">
        {trainData.map((train) => (
          <div key={train.id} className="train-box">
            <div className="image-container">
              <img src={train.imageUrl} alt={train.description} />
              <div className="image-description">
                <p>{train.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div><Footer/></>
  );
};


export default Moments;