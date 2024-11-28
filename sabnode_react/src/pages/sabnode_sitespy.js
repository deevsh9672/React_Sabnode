import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/siteway.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Carousel, CarouselItem, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FaCheckCircle, FaSearch } from 'react-icons/fa';
import { faChartLine, faGlobe, faLocationDot, faRocket } from '@fortawesome/free-solid-svg-icons';
// import { Form } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';

function Sabnode_Sitespy() {
    return (
        <>
              <ScrollToTop />

        <Header/>
        <Helmet>
    <title>sabnode-sitespy - in</title>
</Helmet>
            <Container fluid style={{ backgroundColor: '#772ae7', minHeight: '40rem' }}>
                <Row className="g-4 align-items-center mx-auto " style={{ maxWidth: '90%' }}>
                    {/* Left Content */}
                    <Col md={6} className="text-center text-lg-start mt-3 p-4">
                        <h2 className="text-white display-3 mb-2 mt-3">
                            Sab<span style={{ color: 'black' }}>node</span>
                        </h2>
                        <p className="text-white mt-3" style={{ fontFamily: 'Montserrat Alternates, Sans-serif', lineHeight: '1.9', fontSize: '14px' }}>
                            The Most Complete Visitor Analytics & SEO package includingvisitor analytics (unique visitor, page view, bounce rate, average stay time, average visit, traffic analysis, top refferer, new & returning visitor, content overview, country & browser report, os & device report etc.) , web analytics (whois data, social media data, moz check, search engine index, google page rank, IP analysis, malware check ) , SEO tools (link analysis, keyword position analysis, auto keyword suggestion,page status check etc.).
                        </p>

                        <div className="d-flex justify-content-center justify-content-lg-start g-3 mt-5">
                            <Button className="btnlal d-flex align-items-center" href="#">
                                DETAILED FEATURES &nbsp;
                                <FaCheckCircle className="me-2" size={20} />
                            </Button>

                            <Button className="btnAll ms-3 d-flex align-items-center" href="#">
                                SIGN UP NOW &nbsp;
                                <FaCheckCircle className="me-2" size={20} />
                            </Button>
                        </div>
                    </Col>

                    {/* Right Content */}
                    <Col md={6} className="text-center mt-5 p-5">
                        <img
                            src={require('../assets/img/subnode_sitespy/img1.png')}
                            alt="Subnode"
                            className="img-fluid border-dashed"
                        />

                        <Form className="d-flex mt-3 position-relative" role="search">
                            <InputGroup style={{ overflow: 'hidden', borderRadius: '50px', backgroundColor: 'white' }}>
                                <span className="position-absolute top-50 translate-middle-y ps-3" style={{ color: '#772ae7' }}>
                                    <FaSearch style={{ margin: '22px' }} />
                                </span>
                                <Form.Control
                                    type="search"
                                    placeholder="Enter Search Keyword"
                                    aria-label="Search"
                                    className="border-0 ps-5"
                                    style={{ backgroundColor: 'white' }}
                                />
                                <Button className="btnAll" type="submit">
                                    Search
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="mt-5 p-5">
                {/* Header Section */}
                <div className="text-center">
                    <h2 className="fw-bold" style={{ fontSize: '42px' }}>
                        <span style={{ color: '#772ae7' }}>Key Features :</span> Sabnode
                    </h2>
                    <p className="mt-3 fontpop">The Most Complete Visitor Analytics & SEO Tools</p>
                </div>

                {/* Feature Cards Section */}
                <Row className="justify-content-center mt-4 p-5">
                    {/* Feature Card 1 */}
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="h-100">
                            <Card.Body className="text">
                                <FontAwesomeIcon icon={faChartLine} style={{ color: '#772ae7', fontSize: '55px' }} className="mb-3" />
                                <h3 className="mt-2">Visitor Analytics</h3>
                                <p className="fontpop">
                                    It has the ability to analyze your own website's information.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Feature Card 2 */}
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="h-100">
                            <Card.Body className="text">
                                <FontAwesomeIcon icon={faGlobe} style={{ color: '#772ae7', fontSize: '55px' }} className="mb-3" />
                                <h3 className="mt-2">Website Analytics</h3>
                                <p className="fontpop">
                                    It can analyze any other website's information.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Feature Card 3 */}
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="h-100">
                            <Card.Body className="text">
                                <FontAwesomeIcon icon={faLocationDot} style={{ color: '#772ae7', fontSize: '55px' }} className="mb-3" />
                                <h3 className="mt-2">Native API</h3>
                                <p className="fontpop">
                                    It has a native API that allows developers to integrate its features into other apps.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <Container fluid>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Text Content */}
                    <Col lg={6} md={6} sm={12} className="mb-4 p-5">
                        <h2
                            className="elementor-heading-title elementor-size-default"
                            style={{ fontSize: '42px' }}
                        >
                            <span style={{ color: '#772AE7' }}>Website</span> Analytics
                        </h2>
                        <p className="fontpop">
                            Alexa data, SimilarWeb data, Whois data, Social media data, Moz check, DMOZ check,
                            search engine index, Google page rank, IP analysis, malware check
                        </p>
                        <Button className="btnAll mt-4" type="submit">
                            GET STARTED FOR FREE{' '}
                            <FontAwesomeIcon
                                icon={faRocket}
                                style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                            />
                        </Button>
                    </Col>

                    {/* Right Section - Image */}
                    <Col lg={6} md={6} sm={12} className="mb-4 text-center p-5">
                        <img src={require('../assets/img/subnode_sitespy/img2.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: '#772ae7' }}>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Image */}
                    <Col lg={6} md={12} className="text-center p-4">
                        <img src={require('../assets/img/subnode_sitespy/visitor.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>

                    {/* Right Section - Text and Button */}
                    <Col lg={6} md={12} className="text-center text-lg-start mt-5 p-3">
                        <h2
                            className="elementor-heading-title elementor-size-default text-white"
                            style={{ fontSize: '42px' }}
                        >
                            Visitor <span style={{ color: '#000' }}>Analysis</span>
                        </h2>
                        <p className="text-white fontpop">
                            Unique Visitor, Page View, Bounce Rate, Average Stay Time, Average Visit, Traffic
                            Analysis, Top Referrer, New & Returning Visitor, Content Overview, Country & Browser
                            Report, OS & Device Report
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
                            <a href="#">
                                <Button className="btnAll">
                                    GET STARTED FOR FREE{' '}
                                    <FontAwesomeIcon
                                        icon={faRocket}
                                        style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                                    />
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Text and Button */}
                    <Col lg={6} md={6} sm={12} className="mb-4 p-4 ">
                        <h2
                            className="elementor-heading-title elementor-size-default"
                            style={{ fontSize: '42px' }}
                        >
                            <span style={{ color: '#772AE7' }}>Rank &amp;</span> Index Analytics
                        </h2>
                        <p
                            className="fontpop"
                            style={{ fontSize: '14px' }}
                        >
                            Alexa Rank, Alexa Data, MOZ Check, Google Index, Yahoo Index, Bing Index
                        </p>
                        <Button className="btnAll mt-4">
                            GET STARTED FOR FREE{' '}
                            <FontAwesomeIcon
                                icon={faRocket}
                                style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                            />
                        </Button>
                    </Col>

                    {/* Right Section - Image */}
                    <Col lg={6} md={6} sm={12} className="mb-4 text-center p-3">
                        <img src={require('../assets/img/subnode_sitespy/rank.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: '#772ae7' }}>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Image */}
                    <Col lg={6} md={12} className="text-center mt-5 p-3">
                        <img src={require('../assets/img/subnode_sitespy/social.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>

                    {/* Right Section - Text and Button */}
                    <Col lg={6} md={12} className="text-center text-lg-start mt-5 p-3">
                        <h2
                            className="elementor-heading-title elementor-size-default text-white"
                            style={{ fontSize: '42px' }}
                        >
                            Social Network <span style={{ color: '#000' }}>Analysis</span>
                        </h2>
                        <p className="text-white fontpop">
                            Facebook Share, Xing Share, Reddit Score Up & Down, Pinterest Pin, Buffer Share, StumbleUpon View
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
                            <a href="#">
                                <Button className="btnAll">
                                    GET STARTED FOR FREE{' '}
                                    <FontAwesomeIcon
                                        icon={faRocket}
                                        style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                                    />
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="p-5">
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Text and Button */}
                    <Col lg={6} md={6} sm={12} className="mb-4">
                        <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '42px' }}>
                            IP <span style={{ color: '#772AE7' }}>Analytics</span>
                        </h2>
                        <p className="fontpop mt-3" style={{ fontSize: '14px' }}>
                            What is my IP, Domain IP Information, Sites in Same IP, IPv6 Compatibility Check, IP Canonical Check, IP Traceout
                        </p>

                        <Button className="btnAll mt-4" type="submit">
                            GET STARTED FOR FREE{' '}
                            <FontAwesomeIcon
                                icon={faRocket}
                                style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                            />
                        </Button>
                    </Col>

                    {/* Right Section - Image */}
                    <Col lg={6} md={6} sm={12} className="mb-4 text-center p-3">
                        <img src={require('../assets/img/subnode_sitespy/ip.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: '#772ae7' }}>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Image */}
                    <Col lg={6} md={12} className="text-center p-4">
                        <img src={require('../assets/img/subnode_sitespy/img3.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>

                    {/* Right Section - Text and Button */}
                    <Col lg={6} md={12} className="text-center text-lg-start p-3">
                        <h2 className="elementor-heading-title elementor-size-default text-white" style={{ fontSize: '42px' }}>
                            Domain <span style={{ color: '#000' }}>Analysis</span>
                        </h2>
                        <p className="text-white fontpop" style={{ fontSize: '14px' }}>
                            Whois Search, Auction Domain List, DNS Information, Server Information
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
                            <a href="#">
                                <Button className="btnAll">
                                    GET STARTED FOR FREE{' '}
                                    <FontAwesomeIcon
                                        icon={faRocket}
                                        style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                                    />
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Text and Button */}
                    <Col lg={6} md={6} sm={12} className="mb-4 p-5">
                        <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '42px' }}>
                            <span style={{ color: '#772AE7' }}>Keyword </span> Analytics
                        </h2>
                        <p className="fontpop pt-2" style={{ fontSize: '14px' }}>
                            Keyword Analyzer, Keyword Position, Keyword Position Tracking (Daily), Correlated Trending Keywords, Keyword Auto Suggestion
                        </p>
                        <Button className="btnAll mt-3" type="submit">
                            GET STARTED FOR FREE{' '}
                            <FontAwesomeIcon
                                icon={faRocket}
                                style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                            />
                        </Button>
                    </Col>

                    {/* Right Section - Image */}
                    <Col lg={6} md={6} sm={12} className="mb-4 text-center p-4">
                        <img src={require('../assets/img/subnode_sitespy/img4.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: '#772ae7' }}>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Image */}
                    <Col lg={6} md={12} className="text-center mt-5 p-3">
                        <img src={require('../assets/img/subnode_sitespy/link.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>

                    {/* Right Section - Text and Button */}
                    <Col lg={6} md={12} className="text-center text-lg-start mt-5 p-4">
                        <h2 className="elementor-heading-title elementor-size-default text-white" style={{ fontSize: '42px' }}>
                            Link <span style={{ color: '#000' }}>Analysis</span>
                        </h2>
                        <p className="text-white fontpop" style={{ fontSize: '16px' }}>
                            Link Analyzer (internal, external, doFollow, noFollow), Page Status Check
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
                            <a href="#">
                                <Button className="btnAll">
                                    GET STARTED FOR FREE{' '}
                                    <FontAwesomeIcon
                                        icon={faRocket}
                                        style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                                    />
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Text and Button */}
                    <Col lg={6} md={6} sm={12} className="mb-4 p-3">
                        <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '42px' }}>
                            <span style={{ color: '#772AE7' }}>Code </span> Minifier
                        </h2>
                        <p className="fontpop">
                            HTML code minifier, CSS code minifier, JS code minifier
                        </p>
                        <Button className="btnAll mt-4" type="submit">
                            GET STARTED FOR FREE{' '}
                            <FontAwesomeIcon
                                icon={faRocket}
                                style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                            />
                        </Button>
                    </Col>

                    {/* Right Section - Image */}
                    <Col lg={6} md={6} sm={12} className="mb-4 text-center p-3">
                        <img src={require('../assets/img/subnode_sitespy/code.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: '#772ae7' }}>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Image */}
                    <Col lg={6} md={12} className="text-center mt-5 p-4">
                        <img src={require('../assets/img/subnode_sitespy/malware.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>

                    {/* Right Section - Text and Button */}
                    <Col lg={6} md={12} className="text-center text-lg-start mt-5 p-3">
                        <h2 className="elementor-heading-title elementor-size-default text-white" style={{ fontSize: '42px' }}>
                            Malware <span style={{ color: '#000' }}>Scan</span>
                        </h2>
                        <p className="text-white fontpop">
                            Google Safe Browser, Norton, VirusTotal (67 different scans)
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
                            <a href="#">
                                <Button className="btnAll">
                                    GET STARTED FOR FREE{' '}
                                    <FontAwesomeIcon
                                        icon={faRocket}
                                        style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                                    />
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Text */}
                    <Col lg={6} md={6} sm={12} className="mb-4 p-5">
                        <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '42px' }}>
                            <span style={{ color: '#772AE7' }}>Bitly URL </span> Shortener
                        </h2>
                        <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Shorten any URL with bulk import facilities
                        </p>
                        <Button className="btnAll mt-3" type="submit">
                            GET STARTED FOR FREE{' '}
                            <FontAwesomeIcon
                                icon={faRocket}
                                style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                            />
                        </Button>
                    </Col>

                    {/* Right Section - Image */}
                    <Col lg={6} md={6} sm={12} className="mb-4 text-center p-5">
                        <img src={require('../assets/img/subnode_sitespy/bitly.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ backgroundColor: '#772ae7' }}>
                <Row
                    className="g-4 align-items-center mx-auto"
                    style={{ minHeight: '40rem', maxWidth: '90%' }}
                >
                    {/* Left Section - Image */}
                    <Col lg={6} md={12} className="text-center mt-5 p-3">
                        <img src={require('../assets/img/subnode_sitespy/bouns.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>

                    {/* Right Section - Text */}
                    <Col lg={6} md={12} className="text-center text-lg-start mt-5 p-5">
                        <h2 className="elementor-heading-title elementor-size-default text-white" style={{ fontSize: '37px' }}>
                            Google Tools &amp;<span style={{ color: '#000' }}> Utilities</span>
                        </h2>

                        <p className="text-white mt-3" style={{ fontFamily: 'Poppins, Sans-serif', fontSize: '15px' }}>
                            Google URL Shortener + Analytics, Email Encoder/Decoder, URL Encoder/Decoder,
                            Base64 Encoder/Decoder, Meta Tag Generator, Robot Code Generator, Plagiarism Check,
                            Valid Email Check, Duplicate Email Filter, URL Canonical Check, Gzip Check
                        </p>

                        <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
                            <a href="#">
                                <Button className="btnAll">
                                    GET STARTED FOR FREE{' '}
                                    <FontAwesomeIcon
                                        icon={faRocket}
                                        style={{ color: '#ffffff', fontSize: '20px', padding: '2px' }}
                                    />
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="mt-5 p-5 justify-content-center">
                <Row className="align-items-center">
                    <h2 className="elementor-heading-title elementor-size-default text-center" style={{ fontSize: '42px' }}>
                        Application's <span style={{ color: '#772AE7' }}> Overview</span>
                    </h2>

                    <Carousel id="carouselExample" interval={2000}>
                        <CarouselItem className="p-5">
                            <Row>
                                <Col md={6}>
                                    <img src={require('../assets/img/subnode_sitespy/analysistule.png')} alt="Image 1" className="d-block w-100" />
                                </Col>
                                <Col md={6}>
                                    <img src={require('../assets/img/subnode_sitespy/utilities.png')} alt="Image 1" className="d-block w-100" />
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem className="p-5">
                            <Row>
                                <Col md={6}>
                                    <img src={require('../assets/img/subnode_sitespy/url.png')} alt="Image 1" className="d-block w-100" />
                                </Col>
                                <Col md={6}>
                                    <img src={require('../assets/img/subnode_sitespy/keyword.png')} alt="Image 1" className="d-block w-100" />
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem className="p-5">
                            <Row>
                                <Col md={6}>
                                    <img src={require('../assets/img/subnode_sitespy/security.png')} alt="Image 1" className="d-block w-100" />
                                </Col>
                                <Col md={6}>
                                    <img src={require('../assets/img/subnode_sitespy/codeimage.png')} alt="Image 1" className="d-block w-100" />
                                </Col>
                            </Row>
                        </CarouselItem>
                        <CarouselItem className="p-5">
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <img src={require('../assets/img/subnode_sitespy/native.png')} alt="Image 1" className="d-block w-50" />
                                </Col>
                            </Row>
                        </CarouselItem>
                    </Carousel>
                </Row>
            </Container>

            <Container fluid className="mt-5 p-5">
                <Row className="align-items-center">
                    <h2 className="elementor-heading-title elementor-size-default text-center" style={{ color: '#772AE7' }}>
                        Quality Feedbacks
                    </h2>

                    <Carousel id="carouselExample" interval={2000} className="col-12 p-5">
                        <Carousel.Item>
                            <Row>
                                <Col className="text-center">
                                    <img src={require('../assets/img/subnode_sitespy/Testimonial-Riley-Lemon.jpg')} alt="Riley Lemon" className="d-block w-25 mx-auto" style={{ borderRadius: '50%' }} />
                                    <p style={{ fontFamily: 'Montserrat Alternates, Sans-serif' }}>
                                        "Sabnode simplifies the process of creators to share multiple parts of themselves in one included link."
                                    </p>
                                    <div>
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa-solid fa-star text-warning"></i>
                                        ))}
                                    </div>
                                    <p style={{ fontFamily: 'Poppins, Sans-serif', fontWeight: 'bold' }}>Riley Lemon</p>
                                    <p className="fontpop text-center" style={{ fontSize: '12px' }}>Youtuber, Content Creator</p>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row>
                                <Col className="text-center">
                                    <img src={require('../assets/img/subnode_sitespy/Testimonial-Patti-Chimkire-New.jpg')} alt="Patti Chimkire" className="d-block w-25 mx-auto" style={{ borderRadius: '50%' }} />
                                    <p style={{ fontFamily: 'Montserrat Alternates, Sans-serif' }}>
                                        "Sabnode helps my customers get where they need to go. It's so fast and easy."
                                    </p>
                                    <div>
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa-solid fa-star text-warning"></i>
                                        ))}
                                    </div>
                                    <p style={{ fontFamily: 'Poppins, Sans-serif', fontWeight: 'bold' }}>Patti Chimkiri</p>
                                    <p className="fontpop text-center" style={{ fontSize: '12px' }}>Founder and Pastry Baker, Bali Ches</p>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row>
                                <Col className="text-center">
                                    <img src={require('../assets/img/subnode_sitespy/Testimonial-Luke-Kidgell2.jpg')} alt="Luke Kidgel" className="d-block w-25 mx-auto" style={{ borderRadius: '50%' }} />
                                    <p style={{ fontFamily: 'Montserrat Alternates, Sans-serif' }}>
                                        "I use Sabnode to better understand my audience and what converts them."
                                    </p>
                                    <div>
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa-solid fa-star text-warning"></i>
                                        ))}
                                    </div>
                                    <p style={{ fontFamily: 'Poppins, Sans-serif', fontWeight: 'bold' }}>Luke Kidgell</p>
                                    <p className="fontpop text-center" style={{ fontSize: '12px' }}>Comedian</p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: '#772ae7' }}>
                <Row className="align-items-center mx-auto" style={{ minHeight: '30rem', maxWidth: '90%' }}>

                    {/* Left Section */}
                    <Col md={4} className="mb-5 p-2">
                        <h3 className="text-white" style={{ fontSize: '37px' }}>Get the Greatest app !</h3>
                        <p className="text-white mt-3" style={{ fontFamily: 'Poppins, Sans-serif' }}>
                            SiteSpy provides you trial package. So click on the button and explore it.
                        </p>
                        <Button className="mt-2 btnlal" type="submit">
                            7 Days Free Trial{' '}
                            <FontAwesomeIcon icon={faRocket} style={{ color: '#772ae7', fontSize: '20px', padding: '2px' }} />
                        </Button>
                    </Col>

                    {/* Center Section */}
                    <Col md={4} className="text-center mt-5">
                        <img src={require('../assets/img/subnode_sitespy/hand-mockup.png')} alt="Website Analytics" className="img-fluid" />
                    </Col>

                    {/* Right Section */}
                    <Col md={4} className="mb-5">
                        <h3 className="text-white mt-2" style={{ fontSize: '37px' }}>Amazing Prices</h3>
                        <p className="text-white mt-3" style={{ fontFamily: 'Poppins, Sans-serif', fontSize: '14px' }}>
                            Greatest Visitor Analytics & SEO Tools Software with very reasonable prices.
                            So explore the plans and get the best software on the earth.
                        </p>

                        <Button className="mt-2 btnlal" type="submit">
                            Get the App - Price Plans{' '}
                            <svg
                                aria-hidden="true"
                                className="icon ms-2"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                            >
                                <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <h2 className="text-center" style={{ fontSize: '42px' }}>
                    Contact <span style={{ color: '#772AE7' }}>Us</span>
                </h2>

                <Form className="mt-5">
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="name">

                                <Form.Control
                                    type="text"
                                    placeholder="Your name"
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="email">

                                <Form.Control
                                    type="email"
                                    placeholder=" Your Email"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="phone">

                                <Form.Control
                                    type="tel"
                                    placeholder="Phone number"
                                    required
                                />
                            </Form.Group>
                        </Col>

                        

                        <Col md={6}>
                            <Form.Group controlId="doubt">
                                {/* Dropdown for selecting options */}
                                <Form.Select aria-label="Doubt" required>
                                    <option>Doubt</option> 
                                    <option>Others</option>
                                    <option value="interested">Interested</option>
                                    <option value="others">Choose Topic</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="message">

                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Your message"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="text-center mb-2">
                        <Button type="submit" className="btnsend">
                            Send
                        </Button>
                    </div>
                </Form>
            </Container>
            <Footer/>
        </>
    );
}

export default Sabnode_Sitespy;