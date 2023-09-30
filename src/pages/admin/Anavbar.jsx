import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import img1 from "./../../assets/ppp.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function Anavbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    navigate("/");
    sessionStorage.removeItem("role");
    toast.success('Logout Sucessfull',{position: toast.POSITION.TOP_CENTER}); 

  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <div
            style={{
              height: 100,
              width: 100,
              borderRadius: "50%",
              backgroundColor: "green",
            }}
          >
            {/* {user.email.charAt(0)} */}
          </div>
          <Offcanvas.Title>Welcome</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>Email aunu oaryo</div>

          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Nav.Link>ppp</Nav.Link>
              </Card.Header>
            </Card>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar bg="light" className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <img
              height="80px"
              width="80px"
              src={img1}
              alt=""
              onClick={handleShow}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Link className="nav-link" to={"/dashboard"}>
              Home
            </Link>
            <Link className="nav-link" to={"/adddata"}>
              Add Property
            </Link>
            <Link className="nav-link" to={"/propertyList"}>
              Property List
            </Link>
            
          </Nav>
          <Nav>
            <Navbar.Brand href="#home">EMaiL</Navbar.Brand>
            <button type="button" class="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Anavbar;
