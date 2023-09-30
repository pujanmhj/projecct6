import img1 from '../assets/ppp.jpg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navstyle.css';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
function Nabbar() {
  const navigate = useNavigate();

  const login = () => {
      navigate('/login');
  } 
  const Alogin = () => {
    navigate('/alogin');
}
  const signup = () => {
    navigate('/signup');
}

  return (
    <>
        <Navbar  bg="light"  className="mb-3 navbar sticky-lg-top">
          <Container fluid>
            <Navbar.Brand href="/"><img height = "80px" width="80px" src={img1} alt="" /></Navbar.Brand>
            <Navbar.Toggle  />
            <Nav className="justify-content-center flex-grow-1 pe-3">
            <Link className="nav-link"  to={"/"}>Home</Link>
            <Link className="nav-link" to={"/booking"}>Booking</Link>
            <Link className="nav-link" to={"/contact"}>Contact</Link>
            <Link  className="nav-link"to={"/about"}>About</Link>
          </Nav>
          <Nav>
          {/* <button type="button" class="btn btn-light" onClick={Alogin} >Admin Login</button> */}
          <button type="button" class="btn btn-light" onClick={login} >Login</button>
          <button type="button" class="btn btn-light" onClick={signup}>Signup</button>
          </Nav>
          </Container>
        </Navbar>
    </>
  );
}

export default Nabbar;