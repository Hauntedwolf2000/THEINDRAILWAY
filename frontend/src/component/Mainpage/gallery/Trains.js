import React from 'react'
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';
import image13 from './images/image13.jpg';
import './TrainPage.css' ; // Import your CSS file for stylin
import Sc from '../../../cmncomp/Sc';
import Footer from '../../../cmncomp/Footer';
const trainData = [
  {
    id: 1,
    imageUrl: image13,
    description: 'Yuva Express \n Dhanbad and New Delhi',
  },
  {
    id: 2,
    imageUrl: image2,
    description: 'Antyodaya Express \n Tambaram to Nagercoil Jn ',
  },
  {
    id: 3,
    imageUrl: image3,
    description: 'Darjeeling Himalayan Railway \n Siliguri Junction to Rontong',
  },
  {
    id: 4,
    imageUrl: image4,
    description: 'Gatimaan Express \n H.NIZAMUDDIN To JHANSI JN ',
  },
  {
    id: 5,
    imageUrl: image5,
    description: 'Humsafar Express \n Kochuveli to Smvt Bengaluru',
  },
  {
    id: 6,
    imageUrl: image6,
    description: 'Kalka-Shimla Heritage Track \n Kalka to Shimla',
  },
  {
    id: 6,
    imageUrl: image7,
    description: 'Maharaja Express \n Delhi to Mumbai',
  }, {
    id: 6,
    imageUrl: image8,
    description: 'Vande Bharat Express \n Bangalore to Chennai',
  }, {
    id: 6,
    imageUrl: image9,
    description: 'Nilgiri Mountain Railway \n Mettupalayam to Ooty',
  }, {
    id: 6,
    imageUrl: image10,
    description: 'Samjhauta Express \n Delhi to Attari ',
  }, {
    id: 6,
    imageUrl: image11,
    description: 'Suvidha Express \n Yesvantpur toJaipur',
  }, {
    id: 6,
    imageUrl: image12,
    description: 'Uday Express \n  Bengaluru to Coimbatore ',
  }, 
  {
    id: 1,
    imageUrl: image13,
    description: 'Yuva Express \n Dhanbad and New Delhi',
  },
  {
    id: 2,
    imageUrl: image2,
    description: 'Antyodaya Express \n Tambaram to Nagercoil Jn ',
  },
  {
    id: 3,
    imageUrl: image3,
    description: 'Darjeeling Himalayan Railway \n Siliguri Junction to Rontong',
  },
  {
    id: 4,
    imageUrl: image4,
    description: 'Gatimaan Express \n H.NIZAMUDDIN To JHANSI JN ',
  },
  {
    id: 5,
    imageUrl: image5,
    description: 'Humsafar Express \n Kochuveli to Smvt Bengaluru',
  },
  {
    id: 6,
    imageUrl: image6,
    description: 'Kalka-Shimla Heritage Track \n Kalka to Shimla',
  },
  {
    id: 6,
    imageUrl: image7,
    description: 'Maharaja Express \n Delhi to Mumbai',
  }, {
    id: 6,
    imageUrl: image8,
    description: 'Vande Bharat Express \n Bangalore to Chennai',
  }, {
    id: 6,
    imageUrl: image9,
    description: 'Nilgiri Mountain Railway \n Mettupalayam to Ooty',
  }, {
    id: 6,
    imageUrl: image10,
    description: 'Samjhauta Express \n Delhi to Attari ',
  }, {
    id: 6,
    imageUrl: image11,
    description: 'Suvidha Express \n Yesvantpur toJaipur',
  }, {
    id: 6,
    imageUrl: image12,
    description: 'Uday Express \n  Bengaluru to Coimbatore ',
  },{
    id: 1,
    imageUrl: image13,
    description: 'Yuva Express \n Dhanbad and New Delhi',
  },
  {
    id: 2,
    imageUrl: image2,
    description: 'Antyodaya Express \n Tambaram to Nagercoil Jn ',
  },
  {
    id: 3,
    imageUrl: image3,
    description: 'Darjeeling Himalayan Railway \n Siliguri Junction to Rontong',
  },
  {
    id: 4,
    imageUrl: image4,
    description: 'Gatimaan Express \n H.NIZAMUDDIN To JHANSI JN ',
  },
  {
    id: 5,
    imageUrl: image5,
    description: 'Humsafar Express \n Kochuveli to Smvt Bengaluru',
  },
  {
    id: 6,
    imageUrl: image6,
    description: 'Kalka-Shimla Heritage Track \n Kalka to Shimla',
  },
  {
    id: 6,
    imageUrl: image7,
    description: 'Maharaja Express \n Delhi to Mumbai',
  }, {
    id: 6,
    imageUrl: image8,
    description: 'Vande Bharat Express \n Bangalore to Chennai',
  }, {
    id: 6,
    imageUrl: image9,
    description: 'Nilgiri Mountain Railway \n Mettupalayam to Ooty',
  }, {
    id: 6,
    imageUrl: image10,
    description: 'Samjhauta Express \n Delhi to Attari ',
  }, {
    id: 6,
    imageUrl: image11,
    description: 'Suvidha Express \n Yesvantpur toJaipur',
  }, {
    id: 6,
    imageUrl: image12,
    description: 'Uday Express \n  Bengaluru to Coimbatore ',
  },
  // Add similar data for the other 10 images
];


const Trains = () => {
  return (
    <><Sc /><div>
     <h1 style={{ textAlign: 'center' }}> Our Locomotives </h1>
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


export default Trains;