import React, { useState } from 'react';
import { Container, Nav, Button, Navbar as BootstrapNavbar, Card, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaReceipt, FaRobot, FaHandHoldingUsd, FaUser, FaEnvelope, FaGlobe, FaWhatsapp, FaSms, FaChartLine } from 'react-icons/fa';
// import '../assets/css/style.css';

const services = [
  {
    icon: <FaInstagram />,
    title: 'Instagram Automation',
    href: '/sabnode-bio-links-66',
    description: 'Attract quality leads, drive more sales, and reply to conversations 24/7 with Instagram DM Marketing'
  },
  { 
    icon: <FaReceipt />, title: 'Subscription Billing', description: 'Effective One-Time & Recurring Billing Solution with Affiliate Management Feature!' 
  },
  { 
    icon: <FaRobot />, title: 'Messenger Chatbot', description: 'Automate customer interaction and enhance customer satisfaction with 24/7 chatbot support.' 
  },
  { 
    icon: <FaHandHoldingUsd />, title: 'Social Proof', description: 'Increase visitor trust and conversions by showcasing social proof on your website.' 
  },
  { 
    icon: <FaUser />, title: 'Sabnode Bio Link 66', description: 'Create a unique and customizable bio link page for easy access to your social media links.' 
  },
  { 
    icon: <FaEnvelope />, title: 'Email Marketing', description: 'Sabnode Bio Link Pages - Create your own unique & highly customizable bio link page with ease.' 
  },
  { 
    icon: <FaGlobe />, title: 'Sitespy', description: 'Comprehensive analytics and SEO tools to analyze and optimize your website.' 
  },
  { 
    icon: <FaWhatsapp />, title: 'WhatsApp Connect', description: 'Automate and manage customer communication via WhatsApp with ease.' 
  },
  { 
    icon: <FaSms />, title: 'SMS Text with Customers', description: 'Enhance customer engagement and communication with SMS marketing.' 
  },
  { 
    icon: <FaChartLine />, title: 'Marketing Master', description: 'All-in-one marketing solution to boost your business growth and reach.' 
  },
  { 
    icon: <FaUser />, title: 'Sabnode Bio Link', description: 'Everything you are. In one, simple link in bio.' 
  },
];

const Navbar1 = () => {
  // Dropdown state for showing/hiding services
  const [showDropdown, setShowDropdown] = useState(false);

  // Hover event handlers for the dropdown
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <>
      {/* Navbar */}
      <BootstrapNavbar bg="light" expand="lg"  style={{marginTop:'7rem'}}>
        <Container className="bg-block">
          <img src={require('../assets/img/sabhnode.jpg')} alt="Sabnode" style={{ width: 'auto', height: '50px'  }} />
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#products"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Products
              </Nav.Link>
              <Button className='text-decoration-none' variant="link" href='/login'>Sign In</Button>
              <Nav.Link href="/signup" className="btnsingup">
                Sign Up Free
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Dropdown Menu (for services) */}
      {showDropdown && (
        <Container className="dropdown-menu-custom">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {services.map((service, index) => (
              <Col key={index}>
                <Card className="text-center h-100">
                  <Card.Body>
                    <div className="icon" style={{ fontSize: '2rem', color: '#6c63ff' }}>
                      {service.icon}
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Navbar1;
