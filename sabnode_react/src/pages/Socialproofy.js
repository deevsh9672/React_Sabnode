import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap'
import { FaGlobe, FaLaptop, FaDownload, FaHeadphones, FaRocket, FaUserTie, FaUser, FaBuilding } from 'react-icons/fa';
// import './style/style.css';
import socialProofyImage from '../assets/img/sabnode-social-proofy/social-proofy-integrations-desktop.svg';

import '../assets/css/social.css';

import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';

function Socialproofy() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    return (
        <>
              <ScrollToTop />

        <Header/>
        <Helmet>
    <title>Sabnode-Social Proofy - in</title>
</Helmet>
            {/* section-1 */}
            <Container className="text-center mt-5">
                <h1 className="display-3">
                    Turn your Visitors into <span className="text-purple">Customers</span>
                </h1>
                <Row className="justify-content-center mt-3 color ">
                    <Col xs={12} md="auto" className="d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <i className="fa-solid fa-circle-check text-purple me-1 " />
                        <span>No credit card required</span>
                    </Col>
                    <Col xs={12} md="auto" className="d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <i className="fa-solid fa-circle-check text-purple me-1" />
                        <span>1,000+ people signed up last month</span>
                    </Col>
                    <Col xs={12} md="auto" className="d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        <i className="fa-solid fa-circle-check text-purple me-1" />
                        <span>100% Free</span>
                    </Col>
                    <Col xs={12} md="auto" className="d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-circle-check text-purple me-1" />
                        <span>GDPR- &amp; CCPA-ready</span>
                    </Col>
                </Row>
            </Container>

            {/* section-2 */}
            <div className="container mt-5 pt-3 mb-5">
                <div
                    className="row align-items-center"
                    style={{ margin: "15px 0px 150px 0px" }}
                >
                    {/* Left content */}
                    <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                        <h2 className="">
                            Convert up to <span className="text-purple">300% more visitors</span>{" "}
                            <br /> into leads, demos, and sales.
                        </h2>
                        <p className="p-text mt-3 text-secondary">
                            Sabnode is an intuitive and visual way to engage, convert and
                            communicate with <br /> users.
                        </p>
                        <div className="mt-4">
                            <button
                                className="btn btnAll mb-4 "
                                style={{ backgroundColor: "#7c4dff", borderColor: "#7c4dff" }}
                            >
                                <i className="fa-brands fa-google" /> Sign up with Google
                            </button>
                            <button className="btn btnAll mb-4  ms-2  bg-light">
                                <i className="fa-regular fa-envelope" />
                                Sign up with Email
                            </button>
                        </div>
                    </div>
                    {/* Right side YouTube video */}
                    <div className="col-12 col-md-6">
                        <div className="ratio ratio-16x9">
                            <iframe
                                width={560}
                                height={315}
                                src="https://www.youtube.com/embed/om4YRyeCsYY?si=OV3BMZ1ALB7BsBXQ"
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}


            {/* section-3 */}
            <Container className="mt-5 mb-5 text-center">
                <h2>
                    Trusted by leading brands from <span className="text-purple">84 countries</span>
                </h2>
            </Container>

            <Container>
                <>
                    {/*---------- B A N N E R ----------*/}
                    <div className="partners-logo-slider bg-white">
                        {/* <div className="slide-track">
                            <div className="slide">
                                <img
                                    src={require('./img/sabnode-social-proofy/social-proofy-atolye-store.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('./img/sabnode-social-proofy/social-proofy-famosos.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('./img/sabnode-social-proofy/social-proofy-fiedler-apotheke.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('./img/sabnode-social-proofy/social-proofy-gotmovers.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('./img/sabnode-social-proofy/social-proofy-house-of-silk.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('../assets/img/sabnode-social-proofy/social-proofy-kemi-active.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('../assets/img/sabnode-social-proofy/social-proofy-unpocoshop.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('../assets/img/sabnode-social-proofy/social-proofy-zerowater.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('./img/sabnode-social-proofy/social-proofy-atolye-store.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('../assets/img/sabnode-social-proofy/social-proofy-famosos.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('../assets/img/sabnode-social-proofy/social-proofy-fiedler-apotheke.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={require('../assets/img/sabnode-social-proofy/social-proofy-gotmovers.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                />
                            </div>
                            <div className="slide">
                                {/* <img
                                    src={require('../assets/img/sabnode-social-proofy/social-proofy-house-of-silk.jpg.webp')}
                                    height={100}
                                    width={250}
                                    alt=""
                                /> */}
                            {/* </div> */}
                        {/* </div> */} 
                    </div>
                </>

            </Container>

            <Container>
                {/* First Card */}
                <Row className="mt-5 mb-5 py-4">
                    <Col md={6} className="d-flex align-items-start ">
                        <Card.Img
                            variant="top"
                            src={require("../assets/img/sabnode-social-proofy/How-to-increase-your-confidence-StartupTalky-e1700893802384-1024x556.jpg")}
                            className="img-fluid rounded-5"
                            alt="Description of image"
                        />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center ">
                        <i className="fa-solid fa-chart-pie fs-1 text-purple mt-3" />
                        <h2 className='mt-4'>
                            <span className='text-purple'>Boost confidence with</span> <br /> Recent Activity
                        </h2>
                        <Card.Text className="p-text text-secondary mt-3">
                            Recent Activity shows a live feed of real people who have recently taken action on your site. Perfect on high-traffic pages such as your homepage, content opt-ins, and webinar registrations. <br /> Average conversion lift: 15%
                        </Card.Text>
                    </Col>
                </Row>

                {/* Second Card */}
                <Row className="mt-5 py-4">
                    <Col md={6} className="d-flex flex-column justify-content-center order-2 order-md-1">
                        <i className="fa-solid fa-chart-simple fs-1 text-purple mt-3" />
                        <h2 className='mt-4'>
                            <span className='text-purple'>Build credibility with</span> <br /> Conversion Counter
                        </h2>
                        <Card.Text className="p-text mt-4">
                            Conversion Counter shows the total number of people who have recently taken action on your site. Great for high-traffic pages such as content opt-ins, webinar registrations, and free trials.<br />  Average conversion lift: 10%
                        </Card.Text>
                    </Col>
                    <Col md={6} className="order-1 order-md-2">
                        <Card.Img
                            variant="top"
                            src={require('../assets/img/sabnode-social-proofy/image-5-1024x536-1.png')}
                            className="img-fluid rounded-5"
                            alt="Description of image"
                        />
                    </Col>
                </Row>

                {/* Third Card */}
                <Row className="mt-5 py-4">
                    <Col md={6}>
                        <Card.Img
                            src={require('../assets/img/sabnode-social-proofy/live_visit_home.png')}
                            className="img-fluid rounded-5 mt-5"
                            alt="Description of image"
                        />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-users fs-1 text-purple mt-3" />
                        <h2 className='mt-4'>
                            <span className='text-purplepp'>Create scarcity with</span> <br /> Live Visitor Count
                        </h2>
                        <Card.Text className="p-text text-secondary mt-4">
                            Recent Activity shows a live feed of real people who have recently taken action on your site. Perfect on high-traffic pages such as your homepage, content opt-ins, and webinar registrations. <br /> Average conversion lift: 15%
                        </Card.Text>
                    </Col>
                </Row>

                {/* Fourth Card */}
                <Row className="mt-5 mb-5 py-4">
                    <Col md={6} className="d-flex flex-column justify-content-center order-2 order-md-1">
                        <i className="fa-solid fa-globe fs-1 text-purple mt-3" />
                        <h2 className=" mt-4 ">
                            <span className='text-purple'>All the widgets you need</span> on <br />  your website
                        </h2>
                        <Card.Text className="p-text text-secondary">
                            Sabnode provides more than 30+ widgets that you can use on your website. Using these widgets, you can collect leads, add social proof, and increase your sales by creating FOMO. You can manage all the widgets you need from a single platform.
                        </Card.Text>
                    </Col>
                    <Col md={6} className="order-1 order-md-2">
                        <Card.Img
                            variant="top"
                            src={require('../assets/img/sabnode-social-proofy/social-proofy-all-in-one-chat-widget-1024x700.png')}
                            className="img-fluid object-fit-cover"
                            alt="Description of image"
                        />
                    </Col>
                </Row>
            </Container>

            {/* who is sabnode part */}
            <Container className=" mt-5">
                <hr />
                <h1 className="text-center mt-5 ">
                    <span className="text-purple">Who is Sabnode a</span> perfect fit for?
                </h1>

                <Container className="mt-5 mb-5">
                    <Row className="">
                        {/* First Card */}
                        <Col xs={12} md={4} className="mb-4">
                            <Card className="border-0 shadow-sm">
                                <Card.Body>
                                    <div className=" mb-3">
                                        <FaUserTie className="fa-3x text-purple" />
                                    </div>
                                    <Card.Title className='whoistitle'>Marketing directors</Card.Title>
                                    <Card.Text className="whois fs-6 fitsecp">
                                        Increase visitors' trust in your website and convert more traffic.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Second Card */}
                        <Col xs={12} md={4} className="mb-4">
                            <Card className="border-0 shadow-sm">
                                <Card.Body>
                                    <div className="icon mb-3">
                                        <FaUser className="fa-3x text-purple" />
                                    </div>
                                    <Card.Title className='whoistitle'>Founders and entrepreneurs</Card.Title>
                                    <Card.Text className="whois fs-6 fitsecp">
                                        Authentically build your credibility by showing how effective your proposals are.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Third Card */}
                        <Col xs={12} md={4} className="mb-4">
                            <Card className="border-0 shadow-sm">
                                <Card.Body>
                                    <div className="icon mb-3">
                                        <FaBuilding className="fa-3x text-purple" />
                                    </div>
                                    <Card.Title className='whoistitle'>Marketing agencies</Card.Title>
                                    <Card.Text className="whois fs-6 fitsecp">
                                        Complete the installation with one line of code and integrate with all platforms.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* finish */}

            {/* new section start */}
            <section className="text-center py-5 bg-light">
                <Container>
                    <h2 className="mb-4 fs-1">
                        Integrated with your <span className="text-purple">tech stack</span>
                    </h2>
                    <p className="p-text mb-5 fs-6 text-secondary">
                        Sabnode works well with all platforms: Shopify, Magento, ClickFunnels,
                        WooCommerce, Wix &amp; more.
                    </p>
                    <Row className="g-3 justify-content-center">
                        <Col xs="auto">
                            <div className="img-fluid">
                                <img
                                    src={socialProofyImage}
                                    alt="Icon 1"
                                    className="img-fluid"
                                    style={{ width: '80rem' }}
                                />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            {/*  Fit For Section  */}
            <section className="py-5">
                <Container>
                    <h1 className="text-center display-5 ">
                        <span className="text-purple">Who is Sabnode a </span>perfect fit for?
                    </h1>

                    <Row className="mt-5">
                        {/* First Row */}
                        <Col md={4} className="mb-4">
                            <Card className="h-100 rounded-3 shadow border-0">
                                <Card.Body>
                                    <FaGlobe className="fs-1 text-purple" />
                                    <Card.Title className=" mt-3 whoistitle">Unlimited websites</Card.Title>
                                    <Card.Text className="text-secondary fs-6 fitsecp">
                                        We have no website limits on any plan. Add all your websites at no added cost!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 border-0 shadow rounded-3">
                                <Card.Body>
                                    <FaUser className="fs-1 text-purple" />
                                    <Card.Title className=" mt-3 whoistitle">Smarter visitor targeting</Card.Title>
                                    <Card.Text className="text-secondary fs-6 fitsecp">
                                        Target visitors by URL, device, and User Attributes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 border-0 shadow rounded-3">
                                <Card.Body>
                                    <FaLaptop className="fs-1 text-purple" />
                                    <Card.Title className=" mt-3 whoistitle">Multi-device support</Card.Title>
                                    <Card.Text className="text-secondary fs-6 fitsecp">
                                        All our features support desktop and mobile versions of your website.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        {/* Second Row */}
                        <Col md={4} className="mb-4">
                            <Card className="h-100 border-0 shadow rounded-3">
                                <Card.Body>
                                    <FaDownload className="fa-rotate-180 fs-1 text-purple" />
                                    <Card.Title className=" mt-3 whoistitle">Export or send</Card.Title>
                                    <Card.Text className="text-secondary fs-6 fitsecp">
                                        Export or send your data to your CRM platform.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 border-0 shadow rounded-3">
                                <Card.Body>
                                    <FaDownload className="fs-1 text-purple" />
                                    <Card.Title className=" mt-3 whoistitle">Easy installation</Card.Title>
                                    <Card.Text className="text-secondary fs-6 fitsecp">
                                        Fast installation using one script and support for dozens of platforms.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 border-0 shadow rounded-3">
                                <Card.Body>
                                    <FaHeadphones className="fs-1 text-purple" />
                                    <Card.Title className=" mt-3 whoistitle">Reliable customer support</Card.Title>
                                    <Card.Text className="text-secondary fs-6 fitsecp">
                                        Got a question? We’ll get back to you ASAP!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* last section */}
            <section className="text-center py-5 bg-light">
                <Container>
                    <h2 className="text-center display-5 f">
                        Turn your Visitors into <span className="text-purple">Customers</span>
                    </h2>
                    <p className="p-text mb-4 fs-6 text-secondary">
                        Sabnode is an intuitive and visual way to engage, convert and communicate with users.
                    </p>
                    <p>
                        <div className="text-secondary me-1" >
                            <i className="fa-solid fa-circle-check text-purple me-1" />
                            No credit card required

                            <i className="fa-solid fa-circle-check text-purple me-1 ms-3 " />
                            Instant customer support
                        </div>

                        <span className="text-primary"> </span>
                        {/* className="text-purple me-0" > 
                        <i className="fa-solid fa-circle-check text-purple me-1" /> */}
                    </p>
                    <Button className="btnAll">
                        Get Started For Free <FaRocket />
                    </Button>
                </Container>
            </section>
            <Footer/>

        </>
    )
}

export default Socialproofy;