import React from 'react'
import { Link, Navigate} from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import dp from './img/dp.png';
import notdp from './img/notdp.png';
import c3 from './img/c3.jpg';
import { MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBIcon} from 'mdb-react-ui-kit';
import Textss from '../../cmncomp/Textss';
import Footer from '../../cmncomp/Footer';

const Fnt = () => {

  const [fromStation, setFromStation] = useState('');
  const [destStation, setDestStation] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8081/search?from=${fromStation}&dest=${destStation}`);
      const data = await response.json();
      setResults(data);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
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

  const [isSwapped, setIsSwapped] = useState(false);
  const handleSwapClick = () => {
    const temp = fromStation;
    setFromStation(destStation);
    setDestStation(temp);
    setIsSwapped(!isSwapped);
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
      			  <Dropdown.Toggle  id="dropdown-basic">Services</Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item href="Fnt">Find My Train</Dropdown.Item>
                  <Dropdown.Item href="Snt">Search My Train</Dropdown.Item>
                  <Dropdown.Item href="#action-3">Book My train</Dropdown.Item>
                  <Dropdown.Item href="ScrollingTicker">ALERT</Dropdown.Item>
                  <Dropdown.Item href="#action-3">CONTACT</Dropdown.Item>
                  <Dropdown.Item href="/pnr">PNR</Dropdown.Item>
                   </Dropdown.Menu>
                  </Dropdown>
			    </Navbar.Collapse>

		  </Container>
	  </Navbar>
	
      
    
    
    
    <div
      className="min-h-screen d-flex justify-content-center align-items-center  pb-lg-5 pt-lg-5"
      style={{
        backgroundImage: `url(${c3})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      
      }}
    >
      <div className="bg-black bg-opacity-50 p-4 text-white text-center rounded-3 align-items-center">
        <h1 className="display-3">FIND MY TRAIN</h1>
        <p className="lead"><div className="p-4">
      <div className="mb-4">
        <label htmlFor="source" className="block mb-1 pe-4 font-bold">
          Source:
        </label>
        <input
                type="text"
                className="w-full border p-2 ms-4 rounded"
                placeholder='Enter Source'
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="destination" className="block mb-1 font-bold pe-3">
                Destination:
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder='Enter Destination'
                value={destStation}
                onChange={(e) => setDestStation(e.target.value)}
              />
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded" onClick={handleSearch}>Search</button>
            <button className="bg-white text-black rounded-5 py-2 px-4 ml-2 focus:outline-none" onClick={handleSwapClick}>Swap</button>

    </div></p>
      </div>
    </div>
    {showResults && (
    <section className="vh-10" style={{ backgroundColor: '#5f59f7' }}>
    <h3 className='text-light display-3 text-center'>Search Results:</h3>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol xl="10">
            <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                
                <MDBCardText className="small">
                  <MDBIcon far icon="star" size="lg" />
                  <strong><ul>
        {results.map((train) => (
          <li className='fs-5 p-2 bg-light border' key={train.train_number}>
            Train No: {train.train_number}, Train Name: {train.train_name},
            Departure Time : {train.departure_time}, Arrival Time : {train.arrival_time}
          </li>
        ))}
      </ul></strong>
                </MDBCardText>
                
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    )}
    <Textss/>
    <Footer/>


    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
    
}

export default Fnt