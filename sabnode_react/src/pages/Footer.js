import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

function Footer() {
    return (
        <footer className="bg-light pt-4">
            <hr />
            <Container>
                <Row>
                    <Col className="text-start mb-2">
                        <p className="mb-0">Made with <FaHeart className="text-danger" /> by Sabnode</p>
                    </Col>
                    <Col className="text-end mb-2">
                        <FaFacebook className="mx-2" />
                        <FaInstagram className="mx-2" />
                        <FaLinkedin className="mx-2" />
                        <FaYoutube className="mx-2" />
                    </Col>
                </Row>
                <hr />
                <Row className="text-start" style={{ lineHeight: '1.5rem' }}>
                    <Col md={3} xs={12} className="mb-3">
                        <h5>Products</h5>
                        <ul className="list-unstyled">
                            <li><Link className='text-decoration-none' to="/instagram-automation">Email Marketing</Link></li>
                            <li><Link className='text-decoration-none' to="/sabnode-subscription-billing">Subscription Billing</Link></li>
                            <li><Link className='text-decoration-none' to="/sms-text-with-customers">SMS Text with Customers</Link></li>
                            <li><Link className='text-decoration-none' to="/whatsapp-connect-with-customers">WhatsApp Connect With Customers</Link></li>
                            <li><Link className='text-decoration-none' to="/messenger-chatbot">Messenger Chatbot</Link></li>
                            <li><Link className='text-decoration-none' to="/instagram-automation">Instagram Automation</Link></li>
                            <li><Link className='text-decoration-none' to="/sabnode-social-proofy">Social Proof</Link></li>
                            <li><Link className='text-decoration-none' to="/sabnode-bio-link">Bio Link</Link></li>
                        </ul>
                    </Col>

                    <Col md={3} xs={12} className="mb-3">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li>Reseller Program</li>
                            <li>Affiliate Program</li>
                            <li>Blogs</li>
                            <li>About Us</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12} className="mb-3">
                        <h5>Get in Touch</h5>
                        <ul className="list-unstyled">
                            <li>FAQs</li>
                            <li>Contact us</li>
                            <li>Sign in</li>
                            <li>Sign Up</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12} className="mb-3">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Refund Policy</li>
                        </ul>
                    </Col>

                    {/* Add other columns similarly */}
                </Row>
            </Container>
            <div className="bg-purple text-white py-3">
                <Container className="d-flex justify-content-between align-items-center">
                    <p className="mb-0" style={{ color: '#dddd' }}>&copy; 2024 Sabnode</p>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;
