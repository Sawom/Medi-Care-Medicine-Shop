import { signOut } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
     alert('You are sign out');
  }

    return (
        <div className='navStyle'> 
        {[false,  ].map((expand) => (
        <Navbar  sticky='top' key={expand}  expand={expand} className="mb-3 txt ">
          <Container >
            <Navbar.Brand as={Link} to='/' > <span  > <img src={logo} height={50} alt="" /> <span style={{color:'white'}} > Medi Care Medicine Shop </span> </span>  </Navbar.Brand>
            <Navbar.Toggle  style={{color:'white'}}  aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Welcome to Medi Care
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end txt flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="home" >Home</Nav.Link>
                  <Nav.Link as={Link} to="home" >Medicines</Nav.Link>
                  <Nav.Link as={Link} to="about" >About</Nav.Link>
                  <Nav.Link as={Link} to="return" >Return Policy</Nav.Link>
                  <Nav.Link as={Link} to="terms" >Terms And Conditions</Nav.Link>
                   <br />
                  <span className='text-primary' > User: {user?.displayName && user.displayName} </span>
                  <span className='text-primary' > user id: {user?.uid && user.uid}</span> <br />
                  
                  {/* login / logout */}
                   {
                    user ?
                    <Button onClick={handleSignOut} >Sign Out</Button>
                    :
                    <Nav.Link as={Link} to="login" >Log in</Nav.Link> 
                  } 
                 </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container> 
        </Navbar> 
      ))}  <br />
        </div>
    );
};

export default Header;