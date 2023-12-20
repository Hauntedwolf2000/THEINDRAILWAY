import React from 'react'
import { Link, Navigate} from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import dp from './img/dp.png';
import notdp from './img/notdp.png';


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
					  <Nav.Link href="/abt" className='m-3 navbar-brand mb-0 h1 pb-4'>About</Nav.Link>
				  </Nav>

				  <Dropdown>
      				<Dropdown.Toggle  id="dropdown-basic">
        Services
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="Fnt">Search My Train</Dropdown.Item>
        <Dropdown.Item href="Snt">Find My Train</Dropdown.Item>
        {auth &&<Dropdown.Item href="/bok">Book My train</Dropdown.Item>}
        <Dropdown.Item href="ScrollingTicker">ALERT</Dropdown.Item>
        <Dropdown.Item href="contact">CONTACT</Dropdown.Item>
        {auth &&<Dropdown.Item href="/cancel">Cancel my tkt</Dropdown.Item>}
        <Dropdown.Item href="/pnr">PNR</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
			  </Navbar.Collapse>

		  </Container>
	  </Navbar>
	<div>
		  </div></>
  );
    
}

export default Home