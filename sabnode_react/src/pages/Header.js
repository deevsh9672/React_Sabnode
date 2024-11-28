import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Card } from 'react-bootstrap'; 
 
import '../assets/css/style.css'
import Navbar1 from './Navbar';

const Header = () => {
  // Timer state
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  // Target time in seconds (example 1 hour = 4800 seconds)
  const targetTimeInSeconds = 4800;

  // Countdown logic
  useEffect(() => {
    let remainingTime = targetTimeInSeconds;

    const interval = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        setTime({
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetTimeInSeconds]);


  return (
    <>
      {/* Header Section */}
      <Container fluid style={{ position:'fixed' ,top:'0', zIndex: '9999', backgroundColor: '#ff1493', color: '#fff', textAlign: 'center', padding: '0 0', marginTop: '0' }}>
        
        
                <Row className="justify-content-center align-items-center">
        <Col xs={12} md={4} className="mb-3 mb-md-0">
        <img fetchpriority="high" width="80" height="80" src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/diwali-deepavali-1.gif" class="attachment-large size-large wp-image-1420" alt="" />          </Col>


{/* <video src='../assets/img/footer/Animation - 1730971019690.mp4' width="100%" height="auto" loop autoPlay muted /> */}


          <Col xs={12} md={4} className="mb-3 mb-md-0">


        
            {/* Lifetime Deal Badge with h4 */}
            <h5 style={{ fontSize: '18px',  margin:'-3.5rem', color:'yellow'}}>
              {/* <Badge > */}
                GET LIFETIME DEAL AT JUST <sapn >$</sapn>99
              {/* </Badge> */}                                                                                                                                                                       
            </h5>
          </Col>
          <Col xs={12} md={4} className="mb-3 mb-md-0" text="light">
            <p style={{color:'white'}} >Discount is automatically applied on the<br /> checkout page!</p>
            <br/>
            <Button className="btnheader " variant="center">CLAIM MY DISCOUNT</Button>
          </Col>

          <Col xs={12} md={4} className="d-flex justify-content-center" style={{ marginTop:'-7.4rem'}}>
          <div style={{ margin:'0.3rem',  borderRadius: '8px', width:'3rem',height:'4rem', padding: '10px', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>
  <h5>{time.hours < 10 ? `0${time.hours}` : time.hours}</h5>
  <p>HRS</p>
</div>


<div style={{  margin:'0.3rem', borderRadius: '8px', width:'3rem',height:'4rem',padding: '10px', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>

              <h5>{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</h5>
              <p>MIN</p>
            </div>
            <div style={{ margin:'0.3rem', borderRadius: '8px', width:'3rem',height:'4rem',padding: '10px', backgroundColor: '#fff', color: '#000', textAlign: 'center' }}>
            <h5>{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h5>
              <p > SEC</p>
           
            </div>
              
{/* <Row>

            <Col xs={12} md={4} className="mb-3 mb-md-0" text="light">
            <div>
    <p >
        ⭐Don't Miss Out On Your Chance To Save! ⭐
    </p>
</div>
          </Col>
</Row> */}
           



            
          </Col>
        
        </Row>
      </Container>

    <Navbar1/>

    </>
  );
};

export default Header;
