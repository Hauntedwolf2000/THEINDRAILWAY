import React from 'react'
import image14 from './images/image14.jpg';
import image15 from './images/image15.jpg';
import image16 from './images/image16.jpg';
import image17 from './images/image17.jpg';
import image18 from './images/image18.jpg';
import image19 from './images/image19.jpg';
import image20 from './images/image20.jpg';
import image21 from './images/image21.jpg';
import image22 from './images/image22.jpg';
import image23 from './images/image23.jpg';
import image24 from './images/image24.jpg';
import image25 from './images/image25.jpg';
import image26 from './images/image26.jpg';
import image27 from './images/image27.jpg';
import image28 from './images/image28.jpg';
import image29 from './images/image29.jpg';
import image30 from './images/image30.jpg';
import image31 from './images/image31.jpg';
import SC from "../../../cmncomp/Sc";
import Footer from "../../../cmncomp/Footer";

import './TrainPage.css' ; // Import your CSS file for stylin
const trainData = [
  {
    id: 1,
    imageUrl: image14,
    description: 'Sealdah Railway Station \n Kolkata',
  },
  {
    id: 2,
    imageUrl: image15,
    description: 'Chhatrapati Shivaji Terminus Railway Station \n Mumbai',
  },
  {
    id: 3,
    imageUrl: image16,
    description: 'Central Railway station \n Chennai',
  },
  {
    id: 4,
    imageUrl: image17,
    description: 'Kanpur Railway Station \n Kanpur',
  },
  {
    id: 5,
    imageUrl: image18,
    description: 'Kalyan Junction \n Maharashtra',
  },
  {
    id: 6,
    imageUrl: image19,
    description: 'Howrah Railway Station \n West Bengal',
  },
  {
    id: 6,
    imageUrl: image20,
    description: 'Barog Railway Station \n  Himachal Pradesh',
  },
  {
    id: 6,
    imageUrl: image21,
    description: 'Dudh Sagar Railway Station \n Goa',
  },
  {
    id: 6,
    imageUrl: image22,
    description: 'Ghoom Railway Station \n Darjeeling',
  },
  {
    id: 6,
    imageUrl: image23,
    description: 'Haflong Railway Station \n  Assam',
  },
  {
    id: 6,
    imageUrl: image24,
    description: 'Karwar Railway Station \n Karnataka',
  },
  {
    id: 6,
    imageUrl: image25,
    description: 'Kathgodam Railway Station \n Uttarakhand',
  },
  {
    id: 6,
    imageUrl: image26,
    description: 'Melatuur Railway Station \n Kerala  ',
  },
  {
    id: 6,
    imageUrl: image27,
    description: 'Ooty Railway Station \n  Tamil Nadu',
  },
  {
    id: 6,
    imageUrl: image28,
    description: 'Sakleshpur Railway Station \n Doddanagara, Karnataka',
  },
  {
    id: 6,
    imageUrl: image29,
    description: 'Shimla Railway Station \n  Shimla, Himachal Pradesh',
  },
  {
    id: 6,
    imageUrl: image30,
    description: 'Sivok Railway Station\n Sivok Hill Forest, West Bengal',
  },
  {
    id: 6,
    imageUrl: image31,
    description: 'Wellington Railway Station \n  Coonoor, Tamil Nadu',
  },
  // Add similar data for the other 10 images
];


const Stations = () => {
  return (
    <><SC /><div>
     <h1 style={{ textAlign: 'center' }}> Our Famous Stations </h1>
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


export default Stations;