import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div><div className='pt-5'>
    <footer className="bg-primary text-whitept-5 p-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="list-unstyled d-flex mb-0">
            <li className="me-3">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </li>
            <li className="me-3">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </li>
          </ul>
          <p className="mb-0">© 2023 Dino. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div></div>
  )
}

export default Footer