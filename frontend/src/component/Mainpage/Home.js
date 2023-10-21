import React from 'react'
import { Link, Navigate} from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown , Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import dp from './img/dp.png';
import c2 from './img/c2.jpg';
import c1 from './img/c1.jpg'
import c3 from './img/c3.jpg';
import c4 from './img/c4.jpg';
import notdp from './img/notdp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Modal from '../../cmncomp/Modal';

const Home = () => {
  const [auth,setAuth]= useState(false);
  const [messege,setMessege]=useState('');
  const [name,setName]=useState('');
  axios.defaults.withCredentials=true;

  useEffect(()=>{
    axios.get('http://localhost:8081')
    .then(res =>{
      if(res.data.valid){
        Navigate('/')
      }  
      if(res.data.Status ==='Sucess'){
        setAuth(true)
        setName(res.data.name)
      }else{
        setAuth(false)
        setMessege(res.data.Error)
        
      }
    })
  },[])


  const handleDelete =()=>{
    axios.get('http://localhost:8081/logout')
    .then(res=>{
      window.location.reload(true);
    }).catch(err => console.log(err));
  }

  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <><Navbar bg="primary" variant="dark" expand="md" expanded={expanded} className='position-relative'>
		  <Container>
			  <Navbar.Brand href="#"><img src={logo} alt="Logo" style={{ width: "30%", height: "40%" }} /></Navbar.Brand>
			  <Navbar.Toggle onClick={toggleNavbar} />
			  <Navbar.Collapse className="justify-content-end">
        <div >{
      auth?
      <div>
        <Dropdown>
					  <Dropdown.Toggle id="dropdown-basic">
						  <img src={dp} alt="Logo" style={{ width: "40px", height: "40px" }} className='object-cover border-4 border-gray-400 rounded-circle cursor-pointer ' />
					  </Dropdown.Toggle>

					  <Dropdown.Menu>
						  <Dropdown.Item ><h5>You are Authorised<br></br>{name}</h5></Dropdown.Item>
						  <Dropdown.Item ><button className='btn btn-danger' onClick={handleDelete}>Logout</button></Dropdown.Item>
					  </Dropdown.Menu>
				  </Dropdown>
      </div>
      :
      <div>
        <Dropdown>
					  <Dropdown.Toggle id="dropdown-basic">
						  <img src={notdp} alt="Logo" style={{ width: "40px", height: "40px" }} className='object-cover border-4 border-gray-400 rounded-circle cursor-pointer ' />
					  </Dropdown.Toggle>
					  <Dropdown.Menu>
						  <Dropdown.Item ><h5>{messege}</h5></Dropdown.Item>
              <Dropdown.Item ><h5>LOGIN NOW</h5></Dropdown.Item>
						  <Dropdown.Item ><Link to="/login" className='btn btn-primary'>LOGIN</Link></Dropdown.Item>
					  </Dropdown.Menu>
				  </Dropdown>
      </div>
    }
    </div>
				  <Nav onClick={toggleNavbar}>
					  <Link to="/" className='m-3 navbar-brand mb-0 h1 pb-4'>Home</Link>
					  <Nav.Link href="#about" className='m-3 navbar-brand mb-0 h1 pb-4'>About</Nav.Link>
				  </Nav>

				  <Dropdown>
      				<Dropdown.Toggle  id="dropdown-basic">
        Services
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="Fnt">Search My Train</Dropdown.Item>
        <Dropdown.Item href="Snt">Find My Train</Dropdown.Item>
        {auth && <Dropdown.Item href="/Bok">Book My train</Dropdown.Item>}
        <Dropdown.Item href="ScrollingTicker">ALERT</Dropdown.Item>
        <Dropdown.Item href="#action-3">CONTACT</Dropdown.Item>
        <Dropdown.Item href="/pnr">PNR</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
			  </Navbar.Collapse>

		  </Container>
	  </Navbar>
	<div>
	<Carousel activeIndex={index} onSelect={handleSelect} className="carousel-buttons-container ">


      <Carousel.Item>
	  <img className="d-block w-100 "  src={c1}  alt="Second slide" />
        <Carousel.Caption>
          <h3>NOW SEARCHING TRAIN MADE EASY</h3>
		  <Button href='/fnt' variant="primary" className='pt-40'>Search Ur Train</Button>
          <p>Now you can search the train using the from and to locations and also c the trains their respeted timings</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img className="d-block w-100" src={c2}  alt="Second slide" />
        <Carousel.Caption>
          <h3>Finding my train is made EASY with ease</h3>
		  <Button href='/snt' variant="danger">Find Ur Train</Button>
          <p>Now u can view the respected train details using its respected train number all its intermediate stationns with there timings can be known</p>
        </Carousel.Caption>
      </Carousel.Item>

	  <Carousel.Item>
        <img className="d-block w-100" src={c3}  alt="Second slide" />
        <Carousel.Caption>
          <h3>Bookings Made Easy</h3>
		  {auth && <Button href='/Bok' variant="danger">Book Ur Seat</Button>}
          <p>Book Your Seat Now </p>
        </Carousel.Caption>
      </Carousel.Item>

	  <Carousel.Item>
        <img className="d-block w-100" src={c4}  alt="Second slide" />
        <Carousel.Caption>
          <h3>Find The Status of Ur Booked Train</h3>
		  <Button variant="danger">Find The Status</Button>
          <p>Now you can find the status of ur ticketbefore boarding</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

    <div className="text-center">
      <h1 className="font-weight-bold pt-5">ALL ABOUT INDIAN RAILWAY</h1>
    </div>



    <div class="container text-center">
      <div class="row pt-lg-5">
         <div class="col ">
            <img src={c3} alt="YourImage" className="img-fluid rounded-5 pt-4" style={{ width: '100%', height: '100%' }}/>
         </div>
         <div class="col">
            <h1 className="mb-4">MOMMENTS</h1>
            <p>This is the content section of the grid layout.</p>
            <Button variant="danger">Button 2</Button>
         </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row pt-lg-5">
      <div class="col">
            <h1 className="mb-4">Indian Railways is a statutory body under the ownership of the Ministry of Railways, Government of India that operates India's national railway system.</h1>
            <p>This is the content section of the grid layout.</p>
            <Button variant="danger">Button 2</Button>
         </div>
         <div class="col ">
            <img src={c3} alt="YourImage" className="img-fluid rounded-5 pt-4" style={{ width: '75%', height: '75%' }}/>
         </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row pt-lg-5 pb-lg-5">
         <div class="col pt-lg-5">
            <img src={c3} alt="YourImage" className="img-fluid rounded-5 pt-4 border border-danger border-5 " style={{ width: '70%', height: '70%' }}/>
         </div>
         <div class="col">
            <h1 className="mb-4 ps-5">Indian Railways is a statutory body under the ownership of the Ministry of Railways, Government of India that operates India's national railway system.</h1>
            <Button variant="danger">Button 2</Button>
         </div>
      </div>
    </div>
    <Modal/>

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

		  </div></>
  );
    
}

export default Home