import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import logo from './assets/logo.png';
// import Age from "./assets/BlueARBand.png";
// import "./css/Age_restriction.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Age_restriction() {
  // const values = [true]
  const page = localStorage.getItem('MY_APP_STATE'); 
  const [fullscreen, setFullscreen] = useState(true);
  let firstpage= page?false:true;
  const [show, setShow] = useState(firstpage);
  const [data, Setdate] = useState(false);
  const clickHandle = () =>{
    return Setdate("!We're sorry.")
  }
  
 


  return (
    <>
      
      <Modal show={show} fullscreen={fullscreen}>
      
        <Modal.Header>
        {/* <img src={logo} className="Age_restriction__logo" width="130px" alt="Italian Trulli"></img> */}
        <h1>Data</h1>
        </Modal.Header>


        <Modal.Body>
        {/* <img className="Age_restriction__image" src={Age} alt="Italian Trulli"></img> */}
        <h4>Restrict</h4>
        <Container>
          <Row className="Age_restriction__row">
            <Col className="Age_restriction__buttoncontrol">
          <Button className="Age_restriction__btn" variant="primary" onClick={() => {
            localStorage.setItem('MY_APP_STATE', true);
            setShow(false)
          } }>
            I am 21+ years of Age
          </Button>
          </Col>
          <Col className="Age_restriction__buttoncontrol">
          <Button className="Age_restriction__btn" variant="primary" onClick={clickHandle }>
          I am not 21+ years of Age
          </Button>
          </Col>
          </Row>
          <Row>
            <Col>
            <h1 className="Age_restriction__Message">{data}</h1>
            </Col>
          </Row>
          
          </Container>
        
          
        </Modal.Body>

      </Modal>
    </>
  );
}

export default Age_restriction;
// render(<Example />);