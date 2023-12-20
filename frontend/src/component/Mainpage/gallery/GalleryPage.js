import React from 'react';
import './gallery.css';
import image1 from './images/image1.jpg';
import image2 from './images/exterior.jpg';
import image3 from './images/Manali.jpg';
const GalleryPage = () => {
  const galleryData = [
    {
      id: 1,
      imageUrl: image1,
      description: 'Indian Railways is one of the worlds largest and most extensive railway networks. Spanning across India, it operates thousands of trains daily, connecting remote areas to major cities. Its a lifeline for transportation, offering diverse classes of service, from luxury to basic, and plays a pivotal role in Indias economic and social fabric.' ,
      readMoreLink: '/Trains',
    },
    {
      id: 2,
      imageUrl: image2,
      description: 'Indian Railways is the largest rail network in Asia and the second largest in the world. Indian Railways transports 2.5 crore passengers daily with over a 1.4 million people working as its employees. Most railway stations in India are sites of buzzing activity but some of them are busier than the rest...',
      readMoreLink: '/Stations',
    },
    {
      id: 3,
      imageUrl: image3,
      description: 'These cities in South India are well-connected by efficient railway networks. Chennai, Mangalore, Velankanni, Tanjore, Pondicherry, and Tirupathi all have their respective railway stations that facilitate easy travel within the region and to other parts of the country, making them vital transportation hubs in the South.',
      readMoreLink: '/Moments',
    }
  ];

  return (
    <div className="gallery-container">
      {galleryData.map((item) => (
        <div key={item.id} className="gallery-item">
          <img src={item.imageUrl} alt={item.description} />
          <p>{item.description}</p>
          <a href={item.readMoreLink}>Read More</a>
        </div>
      ))}
    </div>
  );
      };
export default GalleryPage;