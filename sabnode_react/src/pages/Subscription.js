import React from 'react';
import '../assets/css/chandan.css';
import '../assets/css/slide.css';
import '../assets/css/accordion.css'
import { Container, Row, Col, Carousel, Card, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';



function Subscription() {



    
    const logos = [
        require('../assets/img/subscription/logo-06-1-1.webp'),
        require('../assets/img/subscription/logo-08-1-1.webp'),
        require('../assets/img/subscription/logo-05-1-1.webp'),
        require('../assets/img/subscription/logo-09-1-1.webp'),
        require('../assets/img/subscription/logo-10-1-1.png'),
        require('../assets/img/subscription/logo-11-1-1.webp'),
        require('../assets/img/subscription/logo-12-1-1.webp'),
        require('../assets/img/subscription/logo-13-1-1.webp'),
    ];

    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <>
        <Helmet>
        <title>Sabnode Subscription Billing - in</title>
    </Helmet>
            <Header />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Antonio&family=Roboto&family=Poppins&family=Montserrat& display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha384-...your-integrity-hash..." crossorigin="anonymous" />


            <section className='mt-5'>
                <Container>
                    <Row>
                        <Col md={4} className="text-center d-none d-md-block">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 380 65" width={132} height={23}>
                                <style>{`.st0{fill:#feb933}`}</style>
                                <path className="st0" d="M33.6.5L44 21.6 67.2 25 50.4 41.3l4 23.2-20.8-11-20.8 11 4-23.2L0 25l23.2-3.4zM111.8.5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L78.2 25l23.2-3.4zM190 .5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L156.4 25l23.2-3.4zM268.2.5l10.4 21.1 23.2 3.4L285 41.3l4 23.2-20.8-11-20.8 11 4-23.2L234.6 25l23.2-3.4zM346.4.5l10.4 21.1L380 25l-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L312.8 25l23.2-3.4z" />
                            </svg>
                            <h3 className="mt-3">"I can sell in CAD &amp; USD, Thanks to Sabnode!"</h3>
                        </Col>

                        <Col md={4} className="text-center d-none d-md-block">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 380 65" width={132} height={23}>
                                <style>{`.st0{fill:#feb933}`}</style>
                                <path className="st0" d="M33.6.5L44 21.6 67.2 25 50.4 41.3l4 23.2-20.8-11-20.8 11 4-23.2L0 25l23.2-3.4zM111.8.5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L78.2 25l23.2-3.4zM190 .5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L156.4 25l23.2-3.4zM268.2.5l10.4 21.1 23.2 3.4L285 41.3l4 23.2-20.8-11-20.8 11 4-23.2L234.6 25l23.2-3.4zM346.4.5l10.4 21.1L380 25l-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L312.8 25l23.2-3.4z" />
                            </svg>
                            <h3 className="mt-3">"The affiliate system is so useful!"</h3>
                        </Col>

                        <Col md={4} className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 380 65" width={132} height={23}>
                                <style>{`.st0{fill:#feb933}`}</style>
                                <path className="st0" d="M33.6.5L44 21.6 67.2 25 50.4 41.3l4 23.2-20.8-11-20.8 11 4-23.2L0 25l23.2-3.4zM111.8.5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L78.2 25l23.2-3.4zM190 .5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L156.4 25l23.2-3.4zM268.2.5l10.4 21.1 23.2 3.4L285 41.3l4 23.2-20.8-11-20.8 11 4-23.2L234.6 25l23.2-3.4zM346.4.5l10.4 21.1L380 25l-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L312.8 25l23.2-3.4z" />
                            </svg>
                            <h3 className="mt-3">"I love how easy it is to set up the account."</h3>
                        </Col>
                    </Row>

                    <h2 className="text-center mt-5 mb-0 dashboard">
                        <span className='text-purple'>
                            Effective One-Time &amp; Recurring Billing </span>
                        Solution with 🚀Affiliate Management Feature!
                    </h2>
                    <p className="text-center mt-3">
                        Automates recurring billing and helps you get paid on time.
                    </p>


                    <div className="text-center position-relative">
                        <img
                            src={require("../assets/img/subscription/Dashboard.png")}
                            className="img-fluid dashboardpng mt-2"
                            alt="dashboard"
                        />
                        <i className="fa-solid fa-circle-play position-absolute top-50 start-50 translate-middle fs-1 text-purple" />
                    </div>
                </Container>

                <div className="container mt-5 ">
                    <div className="row g-3">
                        <div className="col-md-6 d-flex flex-column align-items-center">
                            <ul className="list-unstyled" style={{ fontSize: 15 }}>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Smart Tax
                                    Automation
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Inbuilt
                                    Affiliate Module
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Multi-Tier
                                    Affiliate
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Dunning
                                    Management
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Paid Trial
                                    Memberships
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Bump Offer
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Receive
                                    Automatic E-mail Notification
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 ms-3 ms-md-0 d-flex flex-column align-items-center">
                            <ul className="list-unstyled" style={{ fontSize: 15 }}>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> No
                                    Transaction Fee
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Customizable
                                    Checkout Pages
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> EU VAT
                                    Validation
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Advanced
                                    Pricing Model
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Offer Free
                                    Trial
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Popup
                                    Checkout Page
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple" /> Offer
                                    One-Time &amp; Recurring Payment Plans
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <a href="" className="btn text-center btnAll mb-3">
                            SCHEDULE A DEMO <i className="fa-solid fa-calendar-days" />
                        </a>
                        <a
                            href=""
                            className="btn btnWhite ms-3 mb-3"
                        >
                            STARTS NOW ITS FREE <i className="fa-solid fa-rocket" />
                        </a>
                    </div>
                </div>
                <div className="container mt-4">
                    <ul className="d-flex gap-4 list-unstyled">
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple" />{" "}
                            Trusted by 27,000+ Customers
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple" />{" "}
                            30-Days Money Back Guarantee
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple" /> 1,000+
                            Video Tutorials
                        </li>
                    </ul>
                </div>
            </section>


            <section>
                <Container className="text-center" style={{ position: 'relative', bottom: '-60px' }}>
                    <Row className="g-4 reviews">
                        <Col md={4}>
                            <div className="bg-light p-3 rounded-3 bg-logo" style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.09)' }}>
                                <i class="fa-solid fa-dollar fs-1 text-purple" style={{ fontSize: '55px' }}></i>
                                <h3 className="text-dark">
                                    Supports 35+ Payment <br /> Gateways
                                </h3>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="bg-light p-3 rounded-3 bg-logo" style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.09)' }}>
                                <i class="fa-solid fa-circle-play fs-1 text-purple"></i>
                                <h3 className="text-dark">
                                    Helpful Tutorial <br /> Videos
                                </h3>
                            </div>
                        </Col>


                        <Col md={4}>
                            <div className="bg-light p-3 rounded-2 bg-logo" style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.09)' }}>
                                <i class="fa-solid fa-pen-to-square fs-1 text-purple"></i>
                                <h3 className="text-dark">
                                    GDPR <br /> Compliant
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container fluid className='bg-purple'>
                    <Container className="p-5 text-center manager">
                        <img
                            src={require("../assets/img/subscription/Huppe-Keith.png")}
                            className="rounded-circle mt-4"
                            alt="Hüppe Keith"
                        />
                        <p className="text-white">
                            “They have listened to the users and have made improvements consistently and
                            have always communicated in the group and have been open with timelines for
                            feature releases, provided video content, and answered all questions related
                            to using the product."
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 380 65" width={132} height={23}>
                            <style>{`.st0{fill:#feb933}`}</style>
                            <path className="st0" d="M33.6.5L44 21.6 67.2 25 50.4 41.3l4 23.2-20.8-11-20.8 11 4-23.2L0 25l23.2-3.4zM111.8.5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L78.2 25l23.2-3.4zM190 .5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L156.4 25l23.2-3.4zM268.2.5l10.4 21.1 23.2 3.4L285 41.3l4 23.2-20.8-11-20.8 11 4-23.2L234.6 25l23.2-3.4zM346.4.5l10.4 21.1L380 25l-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L312.8 25l23.2-3.4z" />
                        </svg>
                        <p className="text-white">Hüppe Keith</p>
                        <p className="text-white">Managing Partner</p>
                    </Container>
                </Container>
            </section>




            <Container style={{ marginTop: '11rem' }}>
                <h2 className="text-center business">
                    Trusted by <span className="text-purple">27,000 Businesses</span> Around The World.😍
                </h2>

                <Slider {...settings} className="customer-logos mt-5">
                    {logos.map((logo, index) => (
                        <div key={index} className="slide">
                            <img src={logo} alt={`Customer logo ${index + 1}`} className="img-fluid" />
                        </div>
                    ))}
                </Slider>
            </Container>


            <section className="bg-purple p-5" style={{ marginTop: '9rem' }}>
                <Container fluid className="text-center Collects">
                    <h2 className="text-white">
                        <span className="text-dark">Collects Payments </span>
                        for Your Products<br />and Services Without Any Hassle 💰
                    </h2>
                    <p className="text-white">Create flat fee, usage-based, or any other price structure with ease.</p>
                    <img
                        src={require("../assets/img/subscription/Collect-Payments-1024x563.png")}
                        alt="Collect Payments"
                        className="img-fluid"
                    />
                    <a
                        href=""
                        className="mt-3 btn px-4 py-3 btnWhite"
                    >
                        GET Sabnode SUBSCRIPTION BILLING NOW <i className="fa fa-rocket"></i>
                    </a>

                    <ul className="d-flex gap-3 mt-5 text-white list-unstyled">
                        <li><i className="fa-sharp fa-regular fa-square-check"></i> Trusted by 27,000+ Customers</li>
                        <li><i className="fa-sharp fa-regular fa-square-check"></i> 30-Days Money Back Guarantee</li>
                        <li><i className="fa-sharp fa-regular fa-square-check"></i> 1,000+ Video Tutorials</li>
                    </ul>
                </Container>
            </section>


            <section style={{ marginTop: '8rem' }}>
                <Container className="text-center Collects">
                    <h2>
                        <span className="text-purple">Create Customized </span>
                        Pages for Your Customers
                    </h2>
                    <p className='text-dark mt-3' style={{ fontSize: '18px' }}>Captivating checkout pages lead to higher conversion rates</p>
                    <img
                        src={require("../assets/img/subscription/Multi-Language3-1024x485.png")}
                        alt="Customized Pages"
                        className="img-fluid mt-4"
                    />
                    <a
                        href=""
                        className="bg-primary mt-3 btn px-4 py-3 btnAll"
                    >
                        GET Sabnode SUBSCRIPTION BILLING NOW <i className="fa fa-rocket"></i>
                    </a>

                    <ul className="d-flex gap-3 mt-5 list-unstyled">
                        <li><i className="fa-sharp fa-regular fa-square-check text-purple"></i> Trusted by 27,000+ Customers</li>
                        <li><i className="fa-sharp fa-regular fa-square-check text-purple"></i> 30-Days Money Back Guarantee</li>
                        <li><i className="fa-sharp fa-regular fa-square-check text-purple"></i> 1,000+ Video Tutorials</li>
                    </ul>
                </Container>
            </section>



            <section style={{ marginTop: '9rem' }}>
                <Container fluid className="Collects">
                    <h2 className="text-center mb-5">
                        <span className="text-purple">Create Customized</span> Pages for Your Customers
                    </h2>

                    <Row>
                        {/* Multilingual Checkout Page */}
                        <Col md={3} xs={12} className="d-flex flex-column justify-content-between customers" style={{ backgroundColor: '#96DAE2' }}>
                            <h3 className="text-center mt-5">Multilingual Checkout Page</h3>
                            <p className="text-center">
                                Engage more customers by creating checkout pages in the languages that they connect to.
                            </p>
                            <div className="px-4 d-flex justify-content-center">
                                <img
                                    src={require("../assets/img/subscription/multilingual.webp")}
                                    className="img-fluid mt-4"
                                    alt="Multilingual Checkout Page"
                                />
                            </div>
                        </Col>

                        {/* Multi-step Checkout Page */}
                        <Col md={3} xs={12} className="d-flex flex-column justify-content-between customers" style={{ backgroundColor: '#BBBBFF' }}>
                            <h3 className="text-center mt-5">Multi-step Checkout Page</h3>
                            <p className="text-center">
                                Don't want to ask for payment details right away? Split your payment page in two steps with multi-step checkout pages.
                            </p>
                            <div className="px-4 d-flex justify-content-center">
                                <img
                                    src={require("../assets/img/subscription/Multi-step.webp")}
                                    className="img-fluid mt-4"
                                    alt="Multi-step Checkout Page"
                                />
                            </div>
                        </Col>

                        {/* Popup Checkout Page */}
                        <Col md={3} xs={12} className="d-flex flex-column justify-content-between customers" style={{ backgroundColor: '#E1E090' }}>
                            <h3 className="text-center mt-5">Popup Checkout Page</h3>
                            <p className="text-center">
                                It's the most trending one. Also, no need to have a custom domain when offering popup checkout pages.
                            </p>
                            <div className="px-4 d-flex justify-content-center">
                                <img
                                    src={require("../assets/img/subscription/Popup-checkuot1.webp")}
                                    className="img-fluid mt-4"
                                    alt="Popup Checkout Page"
                                />
                            </div>
                        </Col>

                        {/* Embeddable Checkout Page */}
                        <Col md={3} xs={12} className="d-flex flex-column justify-content-between customers" style={{ backgroundColor: '#D2B6DE' }}>
                            <h3 className="text-center mt-5">Embeddable Checkout Page</h3>
                            <p className="text-center">
                                Embedd checkout pages directly into your website and it wouldn't even look like it's externally embedded.
                            </p>
                            <div className="px-4 d-flex justify-content-center">
                                <img
                                    src={require("../assets/img/subscription/Embeddable-Checkout-Page1.webp")}
                                    className="img-fluid mt-4"
                                    alt="Embeddable Checkout Page"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section style={{ marginTop: '7rem' }}>
                <Container className='Inbuilt'>
                    <Row>
                        <Col md={6}>
                            <h2><span className="text-purple">Inbuilt </span>Affiliate Management</h2>
                            <p>
                                Easily create, track and grow your own affiliate marketing programs. Affiliate tracking
                                application for E-Commerce and SaaS that integrates seamlessly with your site in just
                                minutes.
                            </p>

                            <ul className="mt-5 list-unstyled list">
                                <li><i className="fa-solid fa-circle-check text-purple"></i> Track affiliate sales on any website</li>
                                <li><i className="fa-solid fa-circle-check text-purple"></i> Commissions: Recurring, lifetime, fixed or %-based</li>
                                <li><i className="fa-solid fa-circle-check text-purple"></i> Accurate sales tracking with links and coupons</li>
                                <li><i className="fa-solid fa-circle-check text-purple"></i> Coupons for online, offline and mega influencers</li>
                                <li><i className="fa-solid fa-circle-check text-purple"></i> Create Affiliate Portals</li>
                            </ul>

                            <a href="" className="btn btn-primary fw-bold mt-4 px-3 py-3 btnAll">
                                GET SABNODE SUBSCRIPTION BILLING NOW <i className="fa-solid fa-rocket text-white"></i>
                            </a>

                            <ul className="mt-5 d-flex gap-3 list-unstyled flex-wrap">
                                <li><i className="fa-sharp fa-regular fa-square-check text-purple"></i> Trusted by 27,000+ Customers</li>
                                <li><i className="fa-sharp fa-regular fa-square-check text-purple"></i> 30-Days Money Back Guarantee</li>
                                <li><i className="fa-sharp fa-regular fa-square-check text-purple"></i> 1,000+ Video Tutorials</li>
                            </ul>
                        </Col>

                        <Col md={6} className="mt-4 mt-md-0 d-flex justify-content-center align-items-center">
                            <img
                                src={require("../assets/img/subscription/Connect-Multiple-SMTP01-e1700892947981.png")}
                                alt="Affiliate Management"
                                className="img-fluid rounded-4"
                                style={{ boxShadow: '10px 5px 50px 10px rgba(0, 0, 0, 0.07)' }}

                            />
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-purple" style={{ marginTop: '6rem' }}>
                <Container className="">
                    <Row className='g-5'>
                        <Col md={6} className="d-flex justify-content-center align-items-center">
                            <img
                                src={require("../assets/img/subscription/Add-Subscribers1-e1700888263589.png")}
                                alt="Affiliate Marketing Illustration"
                                className="img-fluid rounded-3"
                            />
                        </Col>

                        <Col md={6} className="mt-4 mt-md-0 py-4">
                            <h2>
                                <span className='text-white'>Inbuilt </span>Multi-tier Affiliate
                            </h2>
                            <p className="text-white">
                                A multi-tier commission system enables marketers to configure their affiliates, allowing parent affiliates to receive a commission for the sales made by their sub-affiliates. Suppose affiliate A refers a sale to affiliate B, who gets the standard (1st tier commission) and affiliate A gets the 2nd tier commission.
                            </p>
                            <p className="text-white mt-2">Commission</p>

                            <ul className="text-white list-unstyled list text-white mt-3">
                                <li>
                                    <i className="fa-solid fa-circle-check"></i> 1st Tier: 20%
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i> 2st Tier: 10%
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i> 3st Tier: 5%
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i> 4st Tier: 3%
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i> 5st Tier: 2%
                                </li>
                            </ul>

                            <a
                                href="#"
                                className="btn bg-white fw-bold mt-4 px-3 py-3 btnWhite"
                            >
                                GET SABNODE SUBSCRIPTION BILLING NOW {''}
                                <i className="fa-solid fa-rocket"></i>
                            </a>

                            <ul className="mt-5 d-flex gap-3 text-white list-unstyled flex-wrap">
                                <li>
                                    <i className="fa-sharp fa-regular fa-square-check"></i> Trusted by 27,000+ Customers
                                </li>
                                <li>
                                    <i className="fa-sharp fa-regular fa-square-check"></i> 30-Days Money Back Guarantee
                                </li>
                                <li>
                                    <i className="fa-sharp fa-regular fa-square-check"></i> 1,000+ Video Tutorials
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section style={{ marginTop: '7rem' }} className="p-5">
                <Container>
                    <Row className='g-5'>
                        <Col md={6}>
                            <h2>
                                <span className="text-purple">⚙️ Setup Advanced </span>Marketing Automations
                            </h2>
                            <p className='mt-3'>
                                Automation allows you to trigger emails based on opens, clicks, website engagement, and more to
                                create highly personalized experiences for your subscribers. Segment your subscribers & target
                                the right customer by sending relevant emails, and you would be able to reach your client’s inbox.
                            </p>

                            <ul className="mt-5 list-unstyled list text-muted">
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple"></i> Better personalization for prospects.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple"></i> It's automatic and doesn’t require (manual) intervention.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple"></i> Improve targeting and segmentation.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check text-purple"></i> Enhances user engagement.
                                </li>
                            </ul>

                            <a href="#" className="btn btnAll fw-bold mt-4 px-3 py-3">
                                GET SABNODE SUBSCRIPTION BILLING NOW{' '}
                                <i className="fa-solid fa-rocket text-white"></i>
                            </a>

                            <ul className="mt-5 d-flex gap-3 list-unstyled flex-wrap">
                                <li>
                                    <i className="fa-sharp fa-regular fa-square-check text-purple"></i> Trusted by 27,000+ Customers
                                </li>
                                <li>
                                    <i className="fa-sharp fa-regular fa-square-check text-purple"></i> 30-Days Money Back Guarantee
                                </li>
                                <li>
                                    <i className="fa-sharp fa-regular fa-square-check text-purple"></i> 1,000+ Video Tutorials
                                </li>
                            </ul>
                        </Col>

                        <Col md={6} className="mt-4 mt-md-0 d-flex justify-content-center align-items-center">
                            <img
                                src={require("../assets/img/subscription/Automation2.png")}
                                alt="Automation Illustration"
                                className="img-fluid rounded-3"
                                style={{ boxShadow: '10px 5px 50px 10px rgba(0, 0, 0, 0.07)' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="bg-purple position-relative" style={{ padding: '7rem' }}>
                <Container className="p-0">
                    <h2 className="text-center">
                        👉 How to Get Started with <span className="text-white">Sabnode Subscription Billing?</span>
                    </h2>

                    <p className="text-white mt-4">
                        All you have to do is create a product, integrate a payment gateway, and establish a plan.
                        Simply share the checkout pages with your clients, and you’re ready to accept payments.
                    </p>

                    <Row className="mt-5">
                        <Col md={4} className="text-center">
                            <img
                                src={require("../assets/img/subscription/Connect-Payment-Gateway-new-1024x784.png")}
                                alt="Step 1: Integrate Payment Gateway"
                                className="img-fluid"
                            />
                            <p className="text-white">
                                <strong>Step 1:</strong><br />Integrate Payment Gateway
                            </p>
                        </Col>

                        <Col md={4} className="text-center">
                            <img
                                src={require("../assets/img/subscription/Add-Pla-New-1024x784.png")}
                                alt="Step 2: Integrate Payment Gateway"
                                className="img-fluid"
                            />
                            <p className="text-white">
                                <strong>Step 2:</strong><br />Integrate Payment Gateway
                            </p>
                        </Col>

                        <Col md={4} className="text-center">
                            <img
                                src={require("../assets/img/subscription/Share-Checkout-Page-new-1024x784.png")}
                                alt="Step 3: Share The Checkout Pages"
                                className="img-fluid"
                            />
                            <p className="text-white">
                                <strong>Step 3:</strong><br />Share The Checkout Pages
                            </p>
                        </Col>
                    </Row>

                    <div className="text-center">
                        <a href="#" className="btn btnWhite bg-white mt-4 py-3">
                            GET SABNODE SUBSCRIPTION BILLING NOW <i className="fa-solid fa-rocket"></i>
                        </a>
                    </div>

                    <ul className="d-flex gap-4 mt-4 text-white mb-5 list-unstyled">
                        <li><i className="fa-sharp fa-regular fa-square-check"></i> Trusted by 27,000+ Customers</li>
                        <li><i className="fa-sharp fa-regular fa-square-check"></i> 30-Days Money Back Guarantee</li>
                        <li><i className="fa-sharp fa-regular fa-square-check"></i> 1,000+ Video Tutorials</li>
                    </ul>

                    <Container
                        className="text-center bg-white position-absolute start-50 top-25 translate-middle-x rounded-4"
                        style={{ boxShadow: '0px 0px 50px 20px rgba(0, 0, 0, 0.12)' }}
                    >
                        <Row className="p-5">
                            <Col md={4} className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 380 65" width={132} height={23}>
                                    <style>{`.st0{fill:#feb933}`}</style>
                                    <path className="st0" d="M33.6.5L44 21.6 67.2 25 50.4 41.3l4 23.2-20.8-11-20.8 11 4-23.2L0 25l23.2-3.4zM111.8.5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L78.2 25l23.2-3.4zM190 .5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L156.4 25l23.2-3.4zM268.2.5l10.4 21.1 23.2 3.4L285 41.3l4 23.2-20.8-11-20.8 11 4-23.2L234.6 25l23.2-3.4zM346.4.5l10.4 21.1L380 25l-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L312.8 25l23.2-3.4z" />
                                </svg>
                                <h3 className="mt-3">"I can sell in CAD & USD, Thanks to Pabbly!"</h3>
                            </Col>

                            <Col md={4} className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 380 65" width={132} height={23}>
                                    <style>{`.st0{fill:#feb933}`}</style>
                                    <path className="st0" d="M33.6.5L44 21.6 67.2 25 50.4 41.3l4 23.2-20.8-11-20.8 11 4-23.2L0 25l23.2-3.4zM111.8.5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L78.2 25l23.2-3.4zM190 .5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L156.4 25l23.2-3.4zM268.2.5l10.4 21.1 23.2 3.4L285 41.3l4 23.2-20.8-11-20.8 11 4-23.2L234.6 25l23.2-3.4zM346.4.5l10.4 21.1L380 25l-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L312.8 25l23.2-3.4z" />
                                </svg>
                                <h3 className="mt-3">"The affiliate system is so useful!"</h3>
                            </Col>

                            <Col md={4} className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 380 65" width={132} height={23}>
                                    <style>{`.st0{fill:#feb933}`}</style>
                                    <path className="st0" d="M33.6.5L44 21.6 67.2 25 50.4 41.3l4 23.2-20.8-11-20.8 11 4-23.2L0 25l23.2-3.4zM111.8.5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L78.2 25l23.2-3.4zM190 .5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L156.4 25l23.2-3.4zM268.2.5l10.4 21.1 23.2 3.4L285 41.3l4 23.2-20.8-11-20.8 11 4-23.2L234.6 25l23.2-3.4zM346.4.5l10.4 21.1L380 25l-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L312.8 25l23.2-3.4z" />
                                </svg>
                                <h3 className="mt-3">"I love how easy it is to set up the account."</h3>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>


            <section style={{ marginTop: '13rem' }}>
                <Container>
                    <h2 className="text-center">
                        💪 Create Powerful Pricing Plans <span className="text-purple">with Pabbly Subscription Billing</span>
                    </h2>

                    <p className="text-center mt-3 text-muted">
                        Create complicated pricing models, such as volume pricing and usage-based pricing, with ease.
                    </p>

                    <Carousel className="border mt-5" interval={3000} controls={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../assets/img/subscription/Variable-Timesale-Dimesale2.webp")}
                                alt="Variable Timesale Dimesale"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../assets/img/subscription/Tiered-2.webp")}
                                alt="Tiered Pricing"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../assets/img/subscription/Stair-step2.webp")}
                                alt="Stair-step Pricing"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require("../assets/img/subscription/Donation-Pay-your-own-pricing2.webp")}
                                alt="Donation Pay-your-own Pricing"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <div className="text-center mt-5">
                        <a href="#" className="btn btnAll">
                            GET SABNODE SUBSCRIPTION BILLING NOW <i className="fa-solid fa-rocket"></i>
                        </a>
                    </div>

                    <ul className="d-flex gap-4 mt-5 list-unstyled">
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> Trusted by 27,000+ Customers
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> 30-Days Money Back Guarantee
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> 1,000+ Video Tutorials
                        </li>
                    </ul>
                </Container>
            </section>



            <section className="mt-5">
                <Container
                    className="rounded-4 p-4 leo-koo"
                    style={{ boxShadow: '0px 0px 50px 15px rgba(0, 0, 0, 0.07)' }}
                >
                    <Row className="align-items-center">
                        {/* Image Section */}
                        <Col xs={12} md={3} className="text-center">
                            <img
                                src={require("../assets/img/subscription/lady.jpeg")}
                                height={200}
                                width={210}
                                alt="Leo Koo"

                                className="p-3 img-fluid rounded-circle"
                            />
                        </Col>

                        {/* Text Section */}
                        <Col xs={12} md={9} className='p-0'>
                            <h3>Leo Koo, Founder - WPStarters</h3>
                            <p>
                                "The best subscriptions application" Subscription Billing, please get yourself a copy soon.
                                I've spoken to their team of programming wizards; they are determined to be the
                                best subscriptions application in town."
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section style={{ marginTop: '7rem' }}>
                <Container className='tutorials'>
                    <h2 className="text-center">
                        Tutorial Videos Assist You{' '}
                        <span className="text-purple">
                            in Setting Up Subscription Billing on Your Platform!
                        </span>
                    </h2>

                    <p className="text-muted text-center mt-3 mx-auto w-75">
                        Joining a new platform and setting up an account may be quite
                        intimidating, but not when you have our video tutorials to help you
                        sail smoothly through the onboarding process.
                    </p>

                    <Row className="mt-5 g-5">
                        <Col md={6} className="position-relative">
                            <img
                                src={require("../assets/img/subscription/How-to-create-a-plan-1-1.webp")}
                                alt="Tutorial 1"
                                className="img-fluid rounded-4 videos"
                            />
                            <i className="fa-regular fa-circle-play position-absolute top-50 start-50 translate-middle fs-1 text-purple" />

                        </Col>

                        <Col md={6} className="position-relative">
                            <img
                                src={require("../assets/img/subscription/How-to-create-a-volume-discount-plan-1-1.webp")}
                                alt="Tutorial 2"
                                className="img-fluid rounded-4 videos"
                            />
                            <i className="fa-regular fa-circle-play position-absolute top-50 start-50 translate-middle fs-1 text-purple" />
                        </Col>
                        <Col md={6} className="position-relative">
                            <img
                                src={require("../assets/img/subscription/How-to-create-a-donation-plan1-1.webp")}
                                alt="Tutorial 3"
                                className="img-fluid rounded-4 videos"
                            />
                            <i className="fa-regular fa-circle-play position-absolute top-50 start-50 translate-middle fs-1 text-purple" />
                        </Col>

                        <Col md={6} className="position-relative">
                            <img
                                src={require("../assets/img/subscription/How-to-set-up-the-client-portal-1-1.webp")}
                                alt="Tutorial 4"
                                className="img-fluid rounded-4 videos"
                            />
                            <i className="fa-regular fa-circle-play position-absolute top-50 start-50 translate-middle fs-1 text-purple" />
                        </Col>
                    </Row>

                    <div className="mt-5 text-center">
                        <a className="btn btnAll">
                            GET SABNODE SUBSCRIPTION BILLING NOW
                        </a>
                    </div>

                    <ul className="d-flex gap-4 mt-5 list-unstyled flex-wrap">
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> Trusted by 27,000+ Customers
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> 30-Days Money Back Guarantee
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> 1,000+ Video Tutorials
                        </li>
                    </ul>
                </Container>
            </section>


            <section style={{ marginTop: '8rem' }}>
                <Container className="text-center">
                    <h2>
                        Customers <span className="text-purple">Who Are Trusting Us!❤</span>
                    </h2>
                    <p className="text-muted" style={{ fontSize: '20px' }}>
                        Non incentivized reviews from real users.
                    </p>
                    <img
                        src={require("../assets/img/subscription/PSB-User-Review-01-1024x863.png")}
                        alt="Customer Reviews"
                        className="img-fluid"
                    />

                    <div className="mt-5">
                        <a className=" btn btnAll">
                            GET SABNODE SUBSCRIPTION BILLING NOW <i className="fa-solid fa-rocket"></i>
                        </a>
                    </div>

                    <ul className="d-flex gap-4 mt-4 list-unstyled justify-">
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> Trusted by 27,000+ Customers
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> 30-Days Money Back Guarantee
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> 1,000+ Video Tutorials
                        </li>
                    </ul>
                </Container>
            </section>


            <section style={{ marginTop: '8rem' }} className='p-5 bg-purple'>
                <Container>
                    <Row>
                        <Col md={2} className='d-flex align-items-center'>
                            <img
                                src={require("../assets/img/subscription/moneyback-gurantee1.webp")}
                                alt="moneyback"
                                className="img-fluid"
                                height="388"
                                width="388"
                            />
                        </Col>

                        <Col md={8} className="text-center text-white">
                            <h2>
                                <span className="text-black">Find a Plan </span>That's Right for You
                            </h2>
                            <p className="mt-3 text-white">
                                Collect Unlimited Revenue. No Transaction Fees. Manage Unlimited
                                Affiliates
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 380 65" width={132} height={23}>
                                <style>{`.st0{fill:#feb933}`}</style>
                                <path className="st0" d="M33.6.5L44 21.6 67.2 25 50.4 41.3l4 23.2-20.8-11-20.8 11 4-23.2L0 25l23.2-3.4zM111.8.5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L78.2 25l23.2-3.4zM190 .5l10.4 21.1 23.2 3.4-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L156.4 25l23.2-3.4zM268.2.5l10.4 21.1 23.2 3.4L285 41.3l4 23.2-20.8-11-20.8 11 4-23.2L234.6 25l23.2-3.4zM346.4.5l10.4 21.1L380 25l-16.8 16.3 4 23.2-20.8-11-20.8 11 4-23.2L312.8 25l23.2-3.4z" />
                            </svg>
                            <h3 className="mt-3 text-white" style={{ fontSize: '15px' }}>
                                "You guys should buy it. I think it is worth a lot more than this"
                                - Hüppe Keith
                                <img
                                    src={require("../assets/img/subscription/Huppe-Keith2.png")}
                                    className="img-fluid rounded-circle ms-2"
                                    width="48"
                                    height="48"
                                    alt="Hüppe Keith"
                                />
                            </h3>

                            <a className=" btn text-white mt-2" style={{ border: 'white dashed' }}>
                                <span>With yearly plans, you're saving 20% on pricing</span>
                            </a>
                        </Col>
                    </Row>

                    <div class="d-flex gap-5 mt-5">
                        <button class="text-purple rounded-5 w-50 px-5 py-3 border-0">Monthly</button>
                        <button class="text-purple rounded-5 w-50 px-5 py-3 border-0">Yearly 🎉</button>
                    </div>

                    <Row className='mt-5'>
                        <Col md={3} className="mb-4">
                            <Card bg="light" text="dark" className="h-100">
                                <Card.Body className='cbody'>
                                    <Card.Title className='ctitle'>FREE</Card.Title>
                                    <h2 className='card-heading mt-4'>Send Unlimited Emails To</h2>

                                    <i className="fa-solid fa-circle-check text-purple w-100 text-center mt-4" style={{ fontSize: '120px' }}></i>

                                    <p className='mt-3'>100 subscribers</p>
                                    <h2 className='text-center price'>
                                        <span className="text-purple">$0</span>
                                        <span>7 days</span>
                                    </h2>
                                    <a className="btn w-100 mb-3 btnAll">
                                        SIGN UP
                                    </a>
                                    <p>Access all Features ⭐⭐⭐⭐⭐</p>
                                    <ul className="list-unstyled features">
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Drag & Drop
                                            Email Builder</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> SMTP Routing
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Automations</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Add Multiple
                                            SMTPs</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Unlimited Custom
                                            Field</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> In-built SMTP
                                            Included</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Auto-followups
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Connect External
                                            SMTP's</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Import Emails
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Marketing
                                            Automation</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Email
                                            Personalization</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Segmentation
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Email & Chat
                                            Support</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Throttle Emails
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Webform</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} className="mb-4">
                            <Card bg="light" text="dark" className="h-100">
                                <Card.Body className='cbody'>
                                    <Card.Title className='ctitle'>ROOKIE</Card.Title>
                                    <h2 className='card-heading mt-4'>Send Unlimited Emails To</h2>

                                    <i className="fa-solid fa-circle-check text-purple w-100 text-center mt-4" style={{ fontSize: '120px' }}></i>

                                    <p className='mt-3'>5,000 subscribers</p>
                                    <h2 className='text-center price'>
                                        <span className="text-purple">$29</span>
                                        <span>per mo</span>
                                    </h2>
                                    <a className="btn w-100 mb-3 btnAll">
                                        BUY NOW
                                    </a>
                                    <h2 className='rupees text-center mt-2'>Buy in INR ₹2385 /mo</h2>
                                    <p className='mt-3'>Access all Features ⭐⭐⭐⭐⭐</p>
                                    <ul className="list-unstyled features">
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Drag & Drop
                                            Email Builder</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> SMTP Routing
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Automations</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Add Multiple
                                            SMTPs</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Unlimited Custom
                                            Field</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> In-built SMTP
                                            Included</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Auto-followups
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Connect External
                                            SMTP's</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Import Emails
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Marketing
                                            Automation</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Email
                                            Personalization</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Segmentation
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Email & Chat
                                            Support</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Throttle Emails
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Webform</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} className="mb-4">
                            <Card bg="light" text="dark" className="h-100">
                                <Card.Body className='cbody'>
                                    <Card.Title className='ctitle'>PRO</Card.Title>
                                    <h2 className='card-heading mt-4'>Send Unlimited Emails To</h2>

                                    <i className="fa-solid fa-circle-check text-purple w-100 text-center mt-4" style={{ fontSize: '120px' }}></i>

                                    <p className='mt-3'>15,000 subscribers</p>
                                    <h2 className='text-center price'>
                                        <span className="text-purple">$49</span>
                                        <span>per mo</span>
                                    </h2>
                                    <a className="btn w-100 mb-3 btnAll">
                                        BUY NOW
                                    </a>
                                    <h2 className='rupees text-center mt-2'>Buy in INR ₹4032 /mo</h2>
                                    <p className='mt-3'>Access all Features ⭐⭐⭐⭐⭐</p>
                                    <ul className="list-unstyled features">
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Drag & Drop
                                            Email Builder</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> SMTP Routing
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Automations</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Add Multiple
                                            SMTPs</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Unlimited Custom
                                            Field</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> In-built SMTP
                                            Included</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Auto-followups
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Connect External
                                            SMTP's</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Import Emails
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Marketing
                                            Automation</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Email
                                            Personalization</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Segmentation
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Email & Chat
                                            Support</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Throttle Emails
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Webform</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} className="mb-4">
                            <Card bg="light" text="dark" className="h-100">
                                <Card.Body className='cbody'>
                                    <Card.Title className='ctitle'>ADVANCED</Card.Title>
                                    <h2 className='card-heading mt-4'>Send Unlimited Emails To</h2>

                                    <i className="fa-solid fa-circle-check text-purple w-100 text-center mt-3" style={{ fontSize: '120px' }}></i>

                                    <p className='mt-4'> 50,000 Subscribers</p>
                                    <h2 className='text-center price'>
                                        <span className="text-purple">$99</span>
                                        <span>per mo</span>
                                    </h2>
                                    <a className="btn w-100 mb-3 btnAll">
                                        BUY NOW
                                    </a>
                                    <h2 className='rupees text-center mt-2'>Buy in INR ₹8145 /mo</h2>
                                    <p className='mt-3'>Access all Features ⭐⭐⭐⭐⭐</p>
                                    <ul className="list-unstyled features">
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Drag & Drop
                                            Email Builder</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> SMTP Routing
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Automations</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Add Multiple
                                            SMTPs</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Unlimited Custom
                                            Field</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> In-built SMTP
                                            Included</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Auto-followups
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Connect External
                                            SMTP's</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Import Emails
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Marketing
                                            Automation</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Email
                                            Personalization</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Segmentation
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Email & Chat
                                            Support</li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Throttle Emails
                                        </li>
                                        <li><i class="fa-sharp fa-regular fa-square-check text-purple"></i> Webform</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                    <div class="mt-5 text-center">
                        <a href="" class="btn text-purple fw-bold py-3 bg-white btnWhite">GET
                            SABNODE SUBSCRIPTION BILLING NOW <i class="fa-solid fa-rocket"></i></a>
                    </div>

                    <ul class="d-flex gap-4 mt-4 text-white list-unstyled">
                        <li><i class="fa-sharp fa-regular fa-square-check"></i> Trusted by 27,000+ Customers</li>
                        <li><i class="fa-sharp fa-regular fa-square-check"></i> 30-Days Money Back Guarantee</li>
                        <li><i class="fa-sharp fa-regular fa-square-check"></i> 1,000+ Video Tutorials</li>
                    </ul>

                </Container>
            </section>



            <section style={{ marginTop: '9rem' }}>

                <Container className="my-5">
                    <div className="faq text-center">
                        <h2>Frequently Asked Questions</h2>
                        <p className='mt-4'>
                            Here are some of our most frequently asked questions. If your question is not listed here, please contact us.
                        </p>
                    </div>
                    <Row className='mt-5'>
                        <Col md={6}>
                            <Accordion id="accordionLeft">
                                <Accordion.Item eventKey="0" >
                                    <h4 className="accordion-header" id="heading1">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse1"
                                            aria-controls="collapse1"
                                        >
                                            Do You Support The Indian Payment Gateway?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="0" id="collapse1" aria-labelledby="heading1">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, We support multiple Indian payment gateways like Razorpay, Instamojo, and
                                                Cashfree on the checkout pages. By integrating these gateways, Sabnode allows businesses
                                                to accept payments from customers in India, as well as globally.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <h4 className="accordion-header" id="heading2">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse2"
                                            aria-controls="collapse2"
                                        >
                                            Can We Show Multiple Payment Gateways On The Checkout Page?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="1" id="collapse2" aria-labelledby="heading2">
                                        <div className="accordion-body">
                                            <p>Yes, You can show multiple payment gateways on the checkout page. Offering
                                                multiple
                                                payment gateways can definitely increase the chances of a successful transaction
                                                and
                                                can help improve conversion rates.
                                                <br />
                                                <br />
                                                Customers appreciate having a variety of payment options to choose from, and
                                                providing multiple options can increase the likelihood that they will find one
                                                that
                                                works for them.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <h4 className="accordion-header" id="heading3">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse3"
                                            aria-controls="collapse3"
                                        >
                                            Can we integrate affiliate management with any payment gateway?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="2" id="collapse3" aria-labelledby="heading3">
                                        <div className="accordion-body">
                                            <p>Yes, you can use our affliate management with any of the payment gateway. It uses cookies to track commissions, you can offer multiple payment gateways on the checkout page without affecting the affiliate commission tracking.
                                                <br /> <br />
                                                As long as the affiliate’s cookie is saved properly, the commission will automatically be generated, regardless of the payment gateway being used. This provides flexibility and convenience for both the business and its affiliates.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <h4 className="accordion-header" id="heading4">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse4"
                                            aria-controls="collapse4"
                                        >
                                            If I have my own sales landing page, is it possible to track affiliate sales on it?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="3" id="collapse4" aria-labelledby="heading4">
                                        <div className="accordion-body">
                                            <p>Yes, the affiliate system is designed to track all types of sales, regardless of the platform you use.
                                                <br /><br />
                                                Many of our customers sell their products through custom landing pages and struggle to properly attribute affiliate purchases. Sabnode Subscription Billing solves this issue by automatically tracking and attributing sales to the right affiliate.
                                                <br /><br />
                                                This works whether you use WordPress and a page builder plugin, a SaaS platform, or any other landing page creator. Simply add the link to the checkout page or use our popup checkout forms on your landing pages, and Sabnode Subscription Billing will start tracking sales and attributing them to the appropriate affiliate.
                                                <br /><br />
                                                Additionally, if you have customers who are directed to the signup page before making a purchase, sales will still be tracked through the affiliate system, even if they navigate through multiple pages before finally making the purchase.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <h4 className="accordion-header" id="heading5">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse5"
                                            aria-controls="collapse5"
                                        >
                                            Can we use Sabnode Subscription Billing with WordPress or any type of CMS?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="4" id="collapse5" aria-labelledby="heading5">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, Sabnode Subscription Billing is compatible with all types of CMS in the market, as well as technologies like PHP, React, Angular, Dot Net, and others.
                                                <br /> <br />
                                                The integration process is straightforward, as you can use checkout page links, embed the checkout form directly, or use the popup checkout form and embed it on your existing pages.
                                                <br /> <br />
                                                Additionally, you can utilize our APIs and webhooks to fully integrate Pabbly Subscription Billing with your platform.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <h4 className="accordion-header" id="heading6">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse6"
                                            aria-controls="collapse6"
                                        >
                                            Do you provide an API?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="5" id="collapse6" aria-labelledby="heading6">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we offer a comprehensive API for developers to integrate Sabnode Subscription Billing with custom platforms. Our APIs and webhooks allow for the integration of a wide range of external platforms to meet your custom requirements. Please check our Sabnode Subscription API doc for more detail –
                                                <br /> <br />
                                                Further using the APIs and Webhooks, we also provide Sabnode Subscription billing integrations to 800+ external platforms via  Sabnode Connect.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <h4 className="accordion-header" id="heading7">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse7"
                                            aria-controls="collapse7"
                                        >
                                            Does Sabnode Subscription Billing handle Tax Management for us?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="6" id="collapse7" aria-labelledby="heading7">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, Sabnode Subscription Billing allows you to set up tax rules based on country and state, as well as different tax percentages for different products. This gives you greater control and flexibility over your tax calculations.
                                                <br /> <br />
                                                Further, you can also set up multiple taxes on the checkout page. So you can charge a service tax, VAT tax and more on the same checkout page. The tax rates can vary based on your preset conditions.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7" className="accordion-item">
                                    <h4 className="accordion-header" id="heading8">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            className="accordion-button collapsed"
                                            data-bs-target="#collapse8"
                                            aria-controls="collapse8"
                                        >
                                            Is it possible to sell items from multiple brands through a single Sabnode Subscription account?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="7" id="collapse8" aria-labelledby="heading8">
                                        <div className="accordion-body">
                                            <p>
                                                The platform enables customization of customer-facing areas to showcase your brand to customers, with one custom domain per account. The customizations can be performed product and gateway-wise, allowing for efficient management of multiple brands within a single account. Features include:
                                                <br /> <br />
                                                Custom invoice prefixes and numbering for different products and gateways.
                                                Unique email notifications for each product.
                                                Different logos on checkout and thank-you pages.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <h4 className="accordion-header" id="heading9">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse9"
                                            aria-controls="collapse9"
                                        >
                                            Do you support EU VAT?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="8" id="collapse9" aria-labelledby="heading9">
                                        <div className="accordion-body">
                                            <p>
                                                Waplia Subscription has the necessary features to comply with EU VAT regulations, including configurable VAT rules based on customer location, EU VAT number validation, and EU VAT exempt tax option.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <h4 className="accordion-header" id="heading10">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse10"
                                            aria-controls="collapse10"
                                        >
                                            Do you support GST and GST Invoice for India?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="9" id="collapse10" aria-labelledby="heading10">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we do support GST based taxes. Further, we generate GST compliant invoices for the Indian payments.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="10">
                                    <h4 className="accordion-header" id="heading11">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse11"
                                            aria-controls="collapse11"
                                        >
                                            Do you support dunning for failed payments?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="10" id="collapse11" aria-labelledby="heading11">
                                        <div className="accordion-body">
                                            <p>
                                                Sabnode Subscription billing includes a powerful dunning feature that enables recovery of failed payments through multiple email reminders to customers. You can easily configure the number of dunning attempts for failed payments, helping to reduce churn and increase conversion rates.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="11">
                                    <h4 className="accordion-header" id="heading12">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse12"
                                            aria-controls="collapse12"
                                        >
                                            Do you support checkout pages in multiple languages?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="11" id="collapse12" aria-labelledby="heading12">
                                        <div className="accordion-body">
                                            <p>
                                                Sabnode Subscription allows for the creation of checkout pages in multiple languages, enabling customization of all elements on the checkout page in your desired language for easy payment collection.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>
                            </Accordion>
                        </Col>

                        <Col md={6}>
                            <Accordion id="accordionRight">
                                <Accordion.Item eventKey="12">
                                    <h4 className="accordion-header" id="heading13">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse13"
                                            aria-controls="collapse13"
                                        >
                                            Do you help us to reduce churn?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="12" id="collapse13" aria-labelledby="heading13">
                                        <div className="accordion-body">
                                            <p>
                                                We have an integrated dunning system that automatically follows up with customers for failed payments. The system sends multiple emails to customers based on your defined schedule until payment is received.
                                                <br /> <br />
                                                In case of payment gateway errors, we provide assistance to customers to help resolve the issue and reduce churn.
                                                <br /> <br />
                                                Our built-in failed payment features are powerful, allowing for automatic switch to a different payment gateway during checkout if necessary. We are the only system with this technology.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="13">
                                    <h4 className="accordion-header" id="heading14">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse14"
                                            aria-controls="collapse14"
                                        >
                                            What pricing modules are available in Sabnode Subscription Billing?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="13" id="collapse14" aria-labelledby="heading14">
                                        <div className="accordion-body">
                                            <p>
                                                We offer standard per-unit pricing, donation pricing, variable pricing, usage-based pricing, and more. Sabnode Subscription Billing can accommodate all types of pricing. You can create dynamic pricing similar to popular websites like eBay, Alibaba, etc
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="14">
                                    <h4 className="accordion-header" id="heading15">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse15"
                                            aria-controls="collapse15"
                                        >
                                            How can Sabnode Subscription Billing be integrated with a custom SAAS platform or third-party platform?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="14" id="collapse15" aria-labelledby="heading15">
                                        <div className="accordion-body">
                                            <p>
                                                We have provided a simple and efficient method for integrating Sabnode Subscription Billing into any custom application using Checkout Pages, Webhooks, and APIs.
                                                <br /> <br />
                                                1. Checkout Pages: The Checkout Pages allow you to collect payments through hosted, popup, and embeddable options. For example:
                                                <br /> <br />
                                                <br /> <br />
                                                You can also embed a complete checkout page for seamless payment collection.
                                                <br /> <br />
                                                With just one click on a button, you can redirect the user to the hosted checkout page for payment processing.
                                                <br /> <br />
                                                2. Webhooks: When a sale occurs, webhooks are provided so that you can receive all details of the buyer in the webhook. You can then use automation software such as Waplia Connect to transfer the webhook data into your custom application or CMS.
                                            </p>
                                        </div>

                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="15">
                                    <h4 className="accordion-header" id="heading16">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse16"
                                            aria-controls="collapse16"
                                        >
                                            Is it possible to offer add-ons and bump offers in addition to the main product to increase the average order value (AOV)?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="15" id="collapse16" aria-labelledby="heading16">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we do offer bump offers and add-on options on the checkout page. These options can help increase the average order value of your customers. To include a single item, you can use a bump offer in conjunction with your main offer. And if you wish to present multiple offers along with your main offer, you can add them all in the add-ons section.
                                                <br /> <br />
                                                Do you support the import of customers and subscriptions from Stripe into a Sabnode Subscriptions account?
                                                Yes, you can import customers and subscriptions from Stripe with ease, using either the ‘Import customers via Stripe’ method or the ‘Import customers via CSV’ method. You can go through the Sabnode Subscription Billing video tutorials for more information.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="16">
                                    <h4 className="accordion-header" id="heading17">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse17"
                                            aria-controls="collapse17"
                                        >
                                            Do you support the import of customers via CSV files?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="16" id="collapse17" aria-labelledby="heading17">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, you can easily upload your existing customer data through a CSV file to Sabnode Subscriptions Billing. You can go through the Sabnode Subscription Billing video tutorials for more information.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="17">
                                    <h4 className="accordion-header" id="heading18">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse18"
                                            aria-controls="collapse18"
                                        >
                                            Can we customize the hosted payment pages?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="17" id="collapse18" aria-labelledby="heading18">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, Sabnode Subscriptions offers the most powerful customization options, from changing the text, color, and spacing, to adding or removing sections, and even rearranging their positions as needed. You can also switch the layout type, from a two-column layout to a single column layout, or add a multi-step layout, among other options.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="18">
                                    <h4 className="accordion-header" id="heading19">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse19"
                                            aria-controls="collapse19"
                                        >
                                            Do you support multiple currencies and multiple payment gateways?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="18" id="collapse19" aria-labelledby="heading19">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we support over 35 payment gateways and around 55 currencies.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="19">
                                    <h4 className="accordion-header" id="heading20">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"

                                            data-bs-target="#collapse20"
                                            aria-controls="collapse20"
                                        >
                                            Do you store Credit Card information?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="19" id="collapse20" aria-labelledby="heading20">
                                        <div className="accordion-body">
                                            <p>
                                                No, credit card information is only stored with the payment gateway, and we do not retain any information with us.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="20">
                                    <h4 className="accordion-header" id="heading21">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse21"
                                            aria-controls="collapse21"
                                        >
                                            Is your system GDPR compliant?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="20" id="collapse21" aria-labelledby="heading21">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we adhere to all European customer data protection regulations. You can find more information in our Privacy Policy . The system securely stores the user details. The payment details such as credit card numbers, are stored exclusively by the payment gateway and not in our system.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="21">
                                    <h4 className="accordion-header" id="heading22">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse22"
                                            aria-controls="collapse22"
                                        >
                                            What is the refund policy period?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="21" id="collapse22" aria-labelledby="heading22">
                                        <div className="accordion-body">
                                            <p>
                                                If you are not satisfied with Sabnode Subscription Billing and the support we provide, we will gladly issue a full refund of the amount you paid within 30 days from the date of purchase.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>

                                <Accordion.Item eventKey="22">
                                    <h4 className="accordion-header" id="heading23">
                                        <Accordion.Button
                                            as="button"
                                            variant="link"
                                            data-bs-target="#collapse23"
                                            aria-controls="collapse23"
                                        >
                                            Is it possible to have a custom domain to display my branding?
                                        </Accordion.Button>
                                    </h4>
                                    <Accordion.Collapse eventKey="22" id="collapse23" aria-labelledby="heading23">
                                        <div className="accordion-body">
                                            <p>
                                                Yes, you can add a custom domain to showcase your brand. Each account can have a single custom domain. If you have multiple brands, you can use the embed checkout page method and popup checkout page option so that your brand name will be displayed on that page instead of Sabnode Subscription.
                                            </p>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion.Item>
                            </Accordion>

                        </Col>
                    </Row>
                </Container>
            </section>





            <section style={{ marginTop: "10rem" }}>
                <Container className="text-center team">
                    <h2 className="text-center">
                        We are Proud <span className="text-purple"> of Our Amazing Team 😍</span>
                    </h2>

                    <p className="text-center text-muted" style={{ fontSize: "16px" }}>
                        We started small, with only 3 members in our team. Over time, MagnetBrains LLC, the parent
                        company of Pabbly, grew into a team of over 100+ amazing people.
                    </p>

                    <img
                        src={require("../assets/img/subscription/office-photo.webp")}
                        alt="photo"
                        className="img-fluid rounded-3 mt-5"
                        style={{ boxShadow: "10px 5px 50px 10px rgba(0, 0, 0, 0.07)" }}
                    />

                    <h2 className="mt-3 text-center">Take Your Email Marketing To The Next Level!</h2>
                    <p className="w-75 mx-auto mt-4">
                        Start using Sabnode Email Marketing and experience a world-class email builder, create email newsletters in
                        a snap, and send great emails to your audience. Do amazing email marketing at an affordable price.
                    </p>

                    <a href="#" className="btn btnAll mt-4">
                        GET SABNODE SUBSCRIPTION BILLING NOW <i className="fa-solid fa-rocket"></i>
                    </a>

                    <ul className="d-flex gap-3 mt-3 list-unstyled">
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> Unlimited SMTP
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> Supports Webform
                        </li>
                        <li>
                            <i className="fa-sharp fa-regular fa-square-check text-purple"></i> Customizable Email Templates
                        </li>
                    </ul>
                </Container>
            </section>








            <Footer />
        </>

    );
}

export default Subscription;