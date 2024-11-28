    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import '../assets/css/jayant.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';
    import { Col, Container, Row, Button, Carousel, Card} from 'react-bootstrap';
    import { faRocket, faStar } from '@fortawesome/free-solid-svg-icons';
    import { Helmet } from 'react-helmet';
    import Header from './Header';
    import Footer from './Footer';
    import ScrollToTop from '../components/ScrollToTop';
    // import { Carousel } from 'bootstrap/dist/js/bootstrap.min.js';

    function InstagramAutomation() {
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
            <Header/>
                <Helmet>
                    <title>Instagram Automation - in</title>
                </Helmet>
                <section className="pt-5">
                    <Container className="mb-5 mt-4">
                    <ScrollToTop/>
                    
                        <Row className="align-items-center">
                            <Col lg={6} className="text-lg-left mb-4 mb-lg-0">
                                <div>
                                    <h2 className="folower_h2">
                                        <span className="text-purple">Discover the real power of</span> Instagram DMs
                                    </h2>
                                    <br />
                                    <p className="section_para">
                                        Attract quality leads, drive more sales, and reply to conversations 24/7 with Instagram DM Marketing
                                    </p>
                                    <br />
                                    <Button className="rounded btnAll">
                                        GET STARTED <FontAwesomeIcon icon={faRocket} />
                                    </Button>
                                </div>
                            </Col>
                            <Col lg={6} className="d-flex justify-content-center">
                                <img
                                    src={require('../assets/img/automation-instagram/automation-instagram_1.jpeg')}
                                    className="img-fluid"
                                    alt="Description of image"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-3 second_section">
                    <Container fluid>
                        <Row>
                            <Col md={4} className="text-center d-flex flex-column pt-4 px-3" style={{ backgroundColor: '#96dae2' }}>
                                <h3>Answer every FAQ</h3>
                                <p className="desc">
                                    Deliver fast responses 24/7 using Instagram DM <br />
                                    Marketing. It costs less than a virtual assistant <br />
                                    and never forgets to respond
                                </p>
                                <img
                                    className="img-fluid mt-5 px-5"
                                    width="612"
                                    height="809"
                                    src={require('../assets/img/automation-instagram/colored-blocks_answer-faq.webp')}
                                    alt="example1"
                                />
                            </Col>
                            <Col md={4} className="text-center d-flex flex-column pt-4 px-3" style={{ backgroundColor: '#e1e090' }}>
                                <h3>Convert more followers</h3>
                                <p className="desc">
                                    Build a contact list, generate and collect leads, <br />
                                    and re-engage prospects, so you only speak <br />
                                    with those who are interested
                                </p>
                                <img
                                    className="img-fluid mt-5 px-5"
                                    src={require('../assets/img/automation-instagram/colored-blocks_convert-more-followers.webp')}
                                    alt="example2"
                                />
                            </Col>
                            <Col md={4} className="bg-pink text-center d-flex flex-column pt-4 px-3" style={{ backgroundColor: '#d2b6de' }}>
                                <h3>Automate your IG funnel</h3>
                                <p className="desc">
                                    Shave down the time it takes to get a <br />
                                    prospect on a call, launch new collections, <br />
                                    gather reviews, and share partner products
                                </p>
                                <img
                                    className="img-fluid mt-5 px-5"
                                    src={require('../assets/img/automation-instagram/colored-blocks_automate-your-ig-funnel.webp')}
                                    alt="example3"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-5 px-1">
                    <Container fluid>
                        <Row>
                            <Col md={12} className="text-center d-flex flex-column pt-4 px-3 mt-3">
                                <h2 className="folower_h2">
                                    <span className="text-purple">Turn followers into </span>Dollars
                                </h2>
                            </Col>
                            <Col md={12} className="text-center pt-4 px-3 mb-5">
                                <Button className="rounded btnAll">
                                    GET STARTED <FontAwesomeIcon icon={faRocket} />
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-3 px-1">
                    <Container className="mb-5">
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <video
                                    className="img-fluid object-fit-cover h-100"
                                    src="https://mccdn.me/martcdn/next-lp/contents/instagram/feature_deliver-instant-support.webm"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </Col>
                            <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                                <div className="justify-content-start mt-4">
                                    <h2 className="video_h2">
                                        <span className="text-purple">Have more conversations<br /></span>that lead to sales
                                    </h2>
                                    <p>
                                        Launch limited-time special offers, and automate giveaways, challenges and quizzes to
                                        increase revenue, and scale your brand faster than ever before!
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="py-3 px-1">
                    <Container className="mb-5">
                        <Row>
                            <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                                <div className="justify-content-start">
                                    <h2 className="video_h2">
                                        <span className="text-purple">Build irresistible brand </span>awareness
                                    </h2>
                                    <p>
                                        Build trust, create a bond with your audience, and add a personal touch to increase
                                        engagement, and drive higher conversions.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <video
                                    className="img-fluid object-fit-cover h-100"
                                    src="https://mccdn.me/martcdn/next-lp/contents/instagram/feature_generate-qualified-leads.webm"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="py-3 px-1">
                    <Container className="mb-5">
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <video
                                    className="img-fluid object-fit-cover h-100"
                                    src="https://mccdn.me/martcdn/next-lp/contents/instagram-b/feature_ai-assistant-help.webm"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </Col>
                            <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                                <div className="justify-content-start">
                                    <h2 className="video_h2">
                                        <span className="text-purple">No tech experience? No worries </span>— let our AI Assistant help
                                    </h2>
                                    <p>
                                        Our intuitive AI Assistant can generate an Instagram chatbot conversation in minutes. Don’t like what’s
                                        generated? Don’t worry — you can regain control in just a few clicks.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-5 px-1">
                    <Container fluid>
                        <Row>
                            <Col md={12} className="text-center d-flex flex-column pt-4 px-3">
                                <h2 className="section_fifth_h2 mt-3">
                                    <span className="text-purple">Drive up to 60% </span><br />more sales
                                </h2>
                            </Col>
                            <Col md={12} className="text-center pt-4 px-3">
                                <Button className="rounded btnAll mb-5">
                                    GET STARTED <FontAwesomeIcon icon={faRocket} />
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-5 px-1">
                    <Container fluid>
                        <Row>
                            <Col md={12} className="text-center d-flex flex-column pt-4 px-3 mt-5">
                                <h2 className="sixth_entrepreneur">
                                    The Sabnode only link in bio trusted by <span className="text-purple">40M+ Entrepreneurs</span>
                                </h2>
                            </Col>
                            <Col md={12} className="text-center pt-4 px-3 mb-5 pb-4">
                                <img
                                    className="img-fluid"
                                    width="1024"
                                    height="98"
                                    src={require('../assets/img/automation-instagram/Manychat-for-Instagram.png')}
                                    alt="Manychat-for-Instagram-image"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-5">
                    <Container fluid className="text-center carousel-dark" style={{ backgroundColor: '#772ae7' }}>
                        <h2 className="display-3 mt-5 pt-5 text-light feedback">Quality Feedbacks</h2>
                        <p className="text-light mb-3">Worldwide Client’s Feedbacks</p>
                        <Carousel controls={true} indicators={false} className="carousel-dark" style={{ height: '24rem' }}>

                            {/* First Slide */}
                            <Carousel.Item>
                                <img
                                    className="rounded-circle shadow-1-strong mb-4 img-fluid"
                                    src={require('../assets/img/automation-instagram/testimonial_jenna-kutcher_1.jpeg')}
                                    alt="Maria Kate"
                                    style={{ maxWidth: '150px' }}
                                />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <p className="text-light mb-3" style={{ fontFamily: 'Montserrat, Sans-serif' }}>
                                            Sabnode is the best thing that ever happened to me. It's just running itself. I get so many emails and
                                            so many downloads on Instagram just because of Sabnode. With comment automation, I get sales, and I
                                            get a lot of engagement. It's like, WOW! It's insane!
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning">
                                            {[...Array(5)].map((_, idx) => (
                                                <li key={idx}><FontAwesomeIcon icon={faStar} /></li>
                                            ))}
                                        </ul>
                                        <p className="text-light mb-3" style={{ fontFamily: 'Montserrat, Sans-serif' }}>
                                            THERESA DIHN, NOTION AMBASSADOR @THERESA_NOTION, 22K FOLLOWERS
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>

                            {/* Second Slide */}
                            <Carousel.Item>
                                <img
                                    className="rounded-circle shadow-1-strong mb-4 img-fluid"
                                    src={require('../assets/img/automation-instagram/testimonial_nike-football_2.jpeg')}
                                    alt="Anna Deynah"
                                    style={{ maxWidth: '150px' }}
                                />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <p className="text-light mb-3" style={{ fontFamily: 'Montserrat, Sans-serif' }}>
                                            Sabnode is the best thing that ever happened to me. It's just running itself. I get so many emails and
                                            so many downloads on Instagram just because of Sabnode. With comment automation, I get sales, and I
                                            get a lot of engagement. It's like, WOW! It's insane!
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning">
                                            {[...Array(5)].map((_, idx) => (
                                                <li key={idx}><FontAwesomeIcon icon={faStar} /></li>
                                            ))}
                                        </ul>
                                        <p className="text-light" style={{ fontFamily: 'Montserrat, Sans-serif' }}>
                                            THERESA DIHN, NOTION AMBASSADOR @THERESA_NOTION, 22K FOLLOWERS
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>

                            {/* Third Slide */}
                            <Carousel.Item>
                                <img
                                    className="rounded-circle shadow-1-strong mb-4 img-fluid"
                                    src={require('../assets/img/automation-instagram/testimonial_theresa-dihn_3.jpeg')}
                                    alt="Anna Deynah"
                                    style={{ maxWidth: '150px' }}
                                />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <p className="text-light mb-3" style={{ fontFamily: 'Montserrat, Sans-serif' }}>
                                            We would definitely use Sabnode in the future. The team was helpful in answering our questions and
                                            assisting with the custom analytics dashboard. We imagine Sabnode could be used in the future for any
                                            social chatbot experience including campaigns that let us be as creative with the conversations as
                                            possible.
                                        </p>
                                        <ul className="list-unstyled d-flex justify-content-center text-warning">
                                            {[...Array(5)].map((_, idx) => (
                                                <li key={idx}><FontAwesomeIcon icon={faStar} /></li>
                                            ))}
                                        </ul>
                                        <p className="text-light" style={{ fontFamily: 'Montserrat, Sans-serif' }}>
                                            ROMINA THALER, UNIT9 SENIOR PRODUCER NIKE FOOTBALL X LIL M'BAPPE
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </section>

                <section className="py-5 px-1">
                    <Container fluid>
                        <Row>
                            <Col md={12} className="text-center d-flex flex-column pt-4 px-3">
                                <h2 className="elementor-heading">
                                    How to get started with{' '}
                                    <span className="text-purple">Sabnode IG DM Marketing</span>
                                </h2>
                            </Col>

                            <Col md={12} className="mt-5 mb-3 py-5 px-5">
                                <Row className="g-3">
                                    <Col md={4} className="d-flex justify-content-center align-items-center">
                                        <Card
                                            className="border-0"
                                            style={{ width: '63rem', height: '23rem', backgroundColor: '#edf2ed' }}
                                        >
                                            <Card.Body className="text-center">
                                                <Card.Title style={{ fontFamily: 'Montserrat, sans-serif' }}>STEP 1</Card.Title>
                                                <hr />
                                                {/* SVG icon for step 1 */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={140}
                                                    height={140}
                                                    viewBox="0 0 160 160"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M28.0282 33.19C47.8938 16.6188 76.2128 31.3355 82.5529 78.0682C82.5529 57.2981 96.9237 13.3385 126.511 29.1102C165.397 49.8386 117.635 111.82 76.2128 140.749C50.0071 93.2749 0.639019 56.0371 28.0282 33.19Z"
                                                        fill="#FF4B00"
                                                    />
                                                    <mask
                                                        id="mask0_765_21419"
                                                        style={{ maskType: "alpha" }}
                                                        maskUnits="userSpaceOnUse"
                                                        x={20}
                                                        y={25}
                                                        width={121}
                                                        height={116}
                                                    >
                                                        <path
                                                            d="M28.0282 33.19C47.8938 16.6188 76.2128 31.3355 82.5529 78.0682C82.5529 57.2981 96.9237 13.3385 126.511 29.1102C165.397 49.8386 117.635 111.82 76.2128 140.749C50.0071 93.2749 0.639019 56.0371 28.0282 33.19Z"
                                                            fill="#FF4B00"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask0_765_21419)">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M94.2805 43.5999C96.4123 39.6734 97.6874 35.1898 97.6874 31.516C97.6874 22.9351 90.7312 19 82.1504 19C73.5695 19 66.6133 22.9351 66.6133 31.516C66.6133 35.1898 67.8884 39.6734 70.0202 43.5999L45.0312 43.5999L45.0312 71.4153C41.0046 69.1402 36.3251 67.7695 32.516 67.7695C23.9351 67.7695 20 74.7257 20 83.3065C20 91.8874 23.9351 98.8436 32.516 98.8436C36.3251 98.8436 41.0046 97.4729 45.0312 95.1978L45.0312 122.148H123.58V94.6914C119.372 97.268 114.287 98.8438 110.203 98.8438C101.623 98.8438 97.6875 91.8876 97.6875 83.3067C97.6875 74.7258 101.623 67.7696 110.203 67.7696C114.287 67.7696 119.372 69.3453 123.58 71.9219V43.5999L94.2805 43.5999Z"
                                                            fill="#D2B6DE"
                                                        />
                                                    </g>
                                                    <mask id="path-4-inside-1_765_21419" fill="white">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M94.2805 43.5999C96.4123 39.6734 97.6874 35.1898 97.6874 31.516C97.6874 22.9351 90.7312 19 82.1504 19C73.5695 19 66.6133 22.9351 66.6133 31.516C66.6133 35.1898 67.8884 39.6734 70.0202 43.5999L45.0312 43.5999L45.0312 71.4153C41.0046 69.1402 36.3251 67.7695 32.516 67.7695C23.9351 67.7695 20 74.7257 20 83.3065C20 91.8874 23.9351 98.8436 32.516 98.8436C36.3251 98.8436 41.0046 97.4729 45.0312 95.1978L45.0312 122.148H123.58V94.6914C119.372 97.268 114.287 98.8438 110.203 98.8438C101.623 98.8438 97.6875 91.8876 97.6875 83.3067C97.6875 74.7258 101.623 67.7696 110.203 67.7696C114.287 67.7696 119.372 69.3453 123.58 71.9219V43.5999L94.2805 43.5999Z"
                                                        ></path>
                                                    </mask>
                                                    <path
                                                        d="M97.6874 31.516L96.6874 31.516V31.516H97.6874ZM94.2805 43.5999L93.4017 43.1228L92.5997 44.5999L94.2805 44.5999L94.2805 43.5999ZM66.6133 31.516L65.6133 31.516V31.516H66.6133ZM70.0202 43.5999L70.0202 44.5999L71.701 44.5999L70.899 43.1228L70.0202 43.5999ZM45.0312 43.5999L45.0312 42.5999L44.0312 42.5999L44.0312 43.5999L45.0312 43.5999ZM45.0312 71.4153L44.5393 72.2859L46.0312 73.1289L46.0312 71.4153L45.0312 71.4153ZM45.0312 95.1978L46.0312 95.1978L46.0312 93.4842L44.5393 94.3272L45.0312 95.1978ZM45.0312 122.148L44.0312 122.148L44.0312 123.148H45.0312V122.148ZM123.58 122.148V123.148H124.58V122.148H123.58ZM123.58 94.6914H124.58V92.9065L123.058 93.8386L123.58 94.6914ZM123.58 71.9219L123.058 72.7747L124.58 73.7069V71.9219H123.58ZM123.58 43.5999H124.58V42.5999L123.58 42.5999L123.58 43.5999ZM96.6874 31.516C96.6874 34.9883 95.4724 39.3087 93.4017 43.1228L95.1594 44.077C97.3522 40.0381 98.6874 35.3913 98.6874 31.516H96.6874ZM82.1504 20C86.3064 20 89.9597 20.9555 92.5464 22.8473C95.0924 24.7094 96.6874 27.5343 96.6874 31.516L98.6874 31.516C98.6874 26.9168 96.8044 23.4837 93.7271 21.233C90.6904 19.0121 86.5752 18 82.1504 18V20ZM67.6133 31.516C67.6133 27.5343 69.2083 24.7094 71.7543 22.8473C74.341 20.9555 77.9943 20 82.1504 20V18C77.7255 18 73.6103 19.0121 70.5736 21.233C67.4963 23.4837 65.6133 26.9168 65.6133 31.516L67.6133 31.516ZM70.899 43.1228C68.8283 39.3087 67.6133 34.9883 67.6133 31.516H65.6133C65.6133 35.3913 66.9485 40.0381 69.1413 44.077L70.899 43.1228ZM45.0312 44.5999L70.0202 44.5999L70.0202 42.5999L45.0312 42.5999L45.0312 44.5999ZM46.0312 71.4153L46.0312 43.5999L44.0312 43.5999L44.0312 71.4153L46.0312 71.4153ZM32.516 68.7695C36.1177 68.7695 40.6291 70.0766 44.5393 72.2859L45.5232 70.5446C41.3801 68.2038 36.5324 66.7695 32.516 66.7695V68.7695ZM21 83.3065C21 79.1505 21.9555 75.4972 23.8473 72.9105C25.7094 70.3645 28.5343 68.7695 32.516 68.7695V66.7695C27.9168 66.7695 24.4837 68.6525 22.233 71.7298C20.0121 74.7665 19 78.8817 19 83.3065H21ZM32.516 97.8436C28.5343 97.8436 25.7094 96.2486 23.8473 93.7026C21.9555 91.1159 21 87.4626 21 83.3065H19C19 87.7314 20.0121 91.8466 22.233 94.8832C24.4837 97.9606 27.9168 99.8436 32.516 99.8436V97.8436ZM44.5393 94.3272C40.6291 96.5365 36.1177 97.8436 32.516 97.8436V99.8436C36.5324 99.8436 41.3801 98.4093 45.5232 96.0684L44.5393 94.3272ZM46.0312 122.148L46.0312 95.1978L44.0312 95.1978L44.0312 122.148L46.0312 122.148ZM123.58 121.148H45.0312V123.148H123.58V121.148ZM122.58 94.6914V122.148H124.58V94.6914H122.58ZM110.203 99.8438C114.506 99.8438 119.769 98.1973 124.102 95.5442L123.058 93.8386C118.975 96.3388 114.069 97.8438 110.203 97.8438V99.8438ZM96.6875 83.3067C96.6875 87.7315 97.6996 91.8467 99.9205 94.8834C102.171 97.9607 105.604 99.8438 110.203 99.8438V97.8438C106.222 97.8438 103.397 96.2487 101.535 93.7027C99.643 91.116 98.6875 87.4627 98.6875 83.3067H96.6875ZM110.203 66.7696C105.604 66.7696 102.171 68.6527 99.9205 71.73C97.6996 74.7666 96.6875 78.8818 96.6875 83.3067H98.6875C98.6875 79.1506 99.643 75.4973 101.535 72.9106C103.397 70.3646 106.222 68.7696 110.203 68.7696V66.7696ZM124.102 71.0691C119.769 68.416 114.506 66.7696 110.203 66.7696V68.7696C114.069 68.7696 118.975 70.2746 123.058 72.7747L124.102 71.0691ZM122.58 43.5999V71.9219H124.58V43.5999H122.58ZM94.2805 44.5999L123.58 44.5999L123.58 42.5999L94.2805 42.5999L94.2805 44.5999Z"
                                                        fill="black"
                                                        mask="url(#path-4-inside-1_765_21419)"
                                                    />
                                                </svg>
                                                <Card.Text className="mb-5 desc_card">
                                                    Join 1 million+ smart brands and sign<br /> up for a risk-free trial
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4} className="d-flex justify-content-center align-items-center">
                                        <Card
                                            className="border-0"
                                            style={{ width: '63rem', height: '23rem', backgroundColor: '#edf2ed' }}
                                        >
                                            <Card.Body className="text-center">
                                                <Card.Title style={{ fontFamily: 'Montserrat, sans-serif' }}>STEP 2</Card.Title>
                                                <hr />
                                                {/* SVG icon for step 2 */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={140}
                                                    height={140}
                                                    viewBox="0 0 160 160"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_765_21440)">
                                                        <path
                                                            d="M14.6805 75.9407C15.7832 45.7509 58.8951 36.8987 81.3007 36.4071C103.706 35.9155 151.443 37.7692 155.293 72.1308C160.001 114.149 75.6984 132.88 38.0054 107.672L7.17357 124.927L21.9283 94.0929C17.3729 89.0063 14.4245 82.951 14.6805 75.9407Z"
                                                            fill="#00F6FF"
                                                        />
                                                        <mask
                                                            id="mask0_765_21440"
                                                            style={{ maskType: "alpha" }}
                                                            maskUnits="userSpaceOnUse"
                                                            x={7}
                                                            y={36}
                                                            width={149}
                                                            height={89}
                                                        >
                                                            <path
                                                                d="M14.6805 75.9407C15.7832 45.7509 58.8951 36.8987 81.3007 36.4071C103.706 35.9155 151.443 37.7692 155.293 72.1308C160.001 114.149 75.6984 132.88 38.0054 107.672L7.17357 124.927L21.9283 94.0929C17.3729 89.0063 14.4245 82.951 14.6805 75.9407Z"
                                                                fill="#00F6FF"
                                                            />
                                                        </mask>
                                                        <g mask="url(#mask0_765_21440)">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M67.3284 25.915H94.2787V39.4404C95.9983 40.0082 97.6683 40.685 99.2806 41.4626L108.808 31.935L127.865 50.9918L118.477 60.3801C119.305 62.035 120.026 63.7528 120.632 65.5244H133.887V92.4747H120.632C120.026 94.2455 119.305 95.9625 118.477 97.6167L127.867 107.007L108.811 126.064L99.282 116.535C97.6693 117.313 95.9988 117.99 94.2787 118.558V132.083H67.3284V118.28C65.7001 117.705 64.1184 117.031 62.5902 116.266L52.7932 126.063L33.7365 107.007L43.6728 97.0704C42.9566 95.5854 42.3258 94.0513 41.787 92.4747H27.7192L27.7192 65.5244H41.7867C42.3254 63.9479 42.9561 62.414 43.6722 60.929L33.7351 50.9919L52.7918 31.9351L62.5891 41.7324C64.1176 40.9672 65.6997 40.2932 67.3284 39.7177V25.915ZM80.8443 96.5367C91.1351 96.5367 99.4774 88.1944 99.4774 77.9036C99.4774 67.6128 91.1351 59.2705 80.8443 59.2705C70.5535 59.2705 62.2112 67.6128 62.2112 77.9036C62.2112 88.1944 70.5535 96.5367 80.8443 96.5367Z"
                                                                fill="#98E891"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M94.2787 25.915H94.7787V25.415H94.2787V25.915ZM67.3284 25.915V25.415H66.8284V25.915H67.3284ZM94.2787 39.4404H93.7787V39.8018L94.1219 39.9152L94.2787 39.4404ZM99.2806 41.4626L99.0634 41.913L99.3831 42.0672L99.6341 41.8162L99.2806 41.4626ZM108.808 31.935L109.162 31.5815L108.808 31.2279L108.455 31.5815L108.808 31.935ZM127.865 50.9918L128.218 51.3453L128.572 50.9918L128.218 50.6382L127.865 50.9918ZM118.477 60.3801L118.123 60.0265L117.868 60.2815L118.029 60.6039L118.477 60.3801ZM120.632 65.5244L120.159 65.6861L120.274 66.0244H120.632V65.5244ZM133.887 65.5244H134.387V65.0244H133.887V65.5244ZM133.887 92.4747V92.9747H134.387V92.4747H133.887ZM120.632 92.4747V91.9747H120.274L120.158 92.313L120.632 92.4747ZM118.477 97.6167L118.03 97.3929L117.869 97.7153L118.124 97.9703L118.477 97.6167ZM127.867 107.007L128.221 107.36L128.575 107.007L128.221 106.653L127.867 107.007ZM108.811 126.064L108.457 126.417L108.811 126.771L109.164 126.417L108.811 126.064ZM99.282 116.535L99.6356 116.181L99.3845 115.93L99.0648 116.085L99.282 116.535ZM94.2787 118.558L94.1219 118.083L93.7787 118.196V118.558H94.2787ZM94.2787 132.083V132.583H94.7787V132.083H94.2787ZM67.3284 132.083H66.8284V132.583H67.3284V132.083ZM67.3284 118.28H67.8284V117.927L67.4949 117.809L67.3284 118.28ZM62.5903 116.266L62.8141 115.819L62.4917 115.658L62.2367 115.913L62.5903 116.266ZM52.7932 126.063L52.4396 126.417L52.7932 126.771L53.1468 126.417L52.7932 126.063ZM33.7365 107.007L33.3829 106.653L33.0294 107.007L33.3829 107.36L33.7365 107.007ZM43.6728 97.0704L44.0264 97.4239L44.2774 97.1729L44.1232 96.8532L43.6728 97.0704ZM41.787 92.4747L42.2602 92.313L42.1446 91.9747H41.787V92.4747ZM27.7192 92.4747L27.2192 92.4747L27.2192 92.9747H27.7192V92.4747ZM27.7192 65.5244V65.0244H27.2192L27.2192 65.5244L27.7192 65.5244ZM41.7867 65.5244V66.0244H42.1443L42.2599 65.6861L41.7867 65.5244ZM43.6722 60.929L44.1226 61.1462L44.2768 60.8265L44.0258 60.5755L43.6722 60.929ZM33.7351 50.9919L33.3815 50.6383L33.028 50.9919L33.3815 51.3454L33.7351 50.9919ZM52.7918 31.9351L53.1454 31.5816L52.7918 31.228L52.4383 31.5816L52.7918 31.9351ZM62.5891 41.7324L62.2355 42.0859L62.4905 42.3409L62.8129 42.1795L62.5891 41.7324ZM67.3284 39.7177L67.4949 40.1892L67.8284 40.0713V39.7177H67.3284ZM94.2787 25.415H67.3284V26.415H94.2787V25.415ZM94.7787 39.4404V25.915H93.7787V39.4404H94.7787ZM99.4978 41.0123C97.8661 40.2253 96.1759 39.5403 94.4354 38.9656L94.1219 39.9152C95.8207 40.4761 97.4705 41.1447 99.0634 41.913L99.4978 41.0123ZM99.6341 41.8162L109.162 32.2886L108.455 31.5815L98.927 41.1091L99.6341 41.8162ZM108.455 32.2886L127.511 51.3453L128.218 50.6382L109.162 31.5815L108.455 32.2886ZM127.511 50.6382L118.123 60.0265L118.83 60.7336L128.218 51.3453L127.511 50.6382ZM121.105 65.3627C120.492 63.5697 119.762 61.8311 118.924 60.1563L118.029 60.6039C118.848 62.2389 119.561 63.9359 120.159 65.6861L121.105 65.3627ZM133.887 65.0244H120.632V66.0244H133.887V65.0244ZM134.387 92.4747V65.5244H133.387V92.4747H134.387ZM120.632 92.9747H133.887V91.9747H120.632V92.9747ZM118.924 97.8405C119.762 96.1664 120.492 94.4286 121.105 92.6364L120.158 92.313C119.561 94.0624 118.848 95.7587 118.03 97.3929L118.924 97.8405ZM128.221 106.653L118.831 97.2632L118.124 97.9703L127.514 107.36L128.221 106.653ZM109.164 126.417L128.221 107.36L127.514 106.653L108.457 125.71L109.164 126.417ZM98.9285 116.888L108.457 126.417L109.164 125.71L99.6356 116.181L98.9285 116.888ZM94.4354 119.033C96.1764 118.458 97.8671 117.773 99.4992 116.985L99.0648 116.085C97.4715 116.853 95.8212 117.522 94.1219 118.083L94.4354 119.033ZM94.7787 132.083V118.558H93.7787V132.083H94.7787ZM67.3284 132.583H94.2787V131.583H67.3284V132.583ZM66.8284 118.28V132.083H67.8284V118.28H66.8284ZM62.3664 116.714C63.913 117.488 65.5139 118.17 67.1618 118.752L67.4949 117.809C65.8864 117.241 64.3238 116.575 62.8141 115.819L62.3664 116.714ZM53.1468 126.417L62.9438 116.62L62.2367 115.913L52.4396 125.71L53.1468 126.417ZM33.3829 107.36L52.4396 126.417L53.1468 125.71L34.09 106.653L33.3829 107.36ZM43.3192 96.7168L33.3829 106.653L34.09 107.36L44.0264 97.4239L43.3192 96.7168ZM41.3139 92.6364C41.8592 94.2321 42.4976 95.7847 43.2224 97.2876L44.1232 96.8532C43.4155 95.3861 42.7925 93.8706 42.2602 92.313L41.3139 92.6364ZM27.7192 92.9747H41.787V91.9747H27.7192V92.9747ZM27.2192 65.5244L27.2192 92.4747L28.2192 92.4747L28.2192 65.5244L27.2192 65.5244ZM41.7867 65.0244H27.7192V66.0244H41.7867V65.0244ZM43.2219 60.7118C42.4971 62.2147 41.8588 63.7671 41.3136 65.3627L42.2599 65.6861C42.7921 64.1286 43.4151 62.6133 44.1226 61.1462L43.2219 60.7118ZM33.3815 51.3454L43.3187 61.2826L44.0258 60.5755L34.0886 50.6383L33.3815 51.3454ZM52.4383 31.5816L33.3815 50.6383L34.0886 51.3454L53.1454 32.2887L52.4383 31.5816ZM62.9426 41.3788L53.1454 31.5816L52.4383 32.2887L62.2355 42.0859L62.9426 41.3788ZM67.1618 39.2463C65.5134 39.8288 63.9122 40.5109 62.3652 41.2853L62.8129 42.1795C64.323 41.4235 65.886 40.7577 67.4949 40.1892L67.1618 39.2463ZM66.8284 25.915V39.7177H67.8284V25.915H66.8284ZM98.9774 77.9036C98.9774 87.9183 90.8589 96.0367 80.8443 96.0367V97.0367C91.4112 97.0367 99.9774 88.4705 99.9774 77.9036H98.9774ZM80.8443 59.7705C90.8589 59.7705 98.9774 67.889 98.9774 77.9036H99.9774C99.9774 67.3367 91.4112 58.7705 80.8443 58.7705V59.7705ZM62.7112 77.9036C62.7112 67.889 70.8296 59.7705 80.8443 59.7705V58.7705C70.2773 58.7705 61.7112 67.3367 61.7112 77.9036H62.7112ZM80.8443 96.0367C70.8296 96.0367 62.7112 87.9183 62.7112 77.9036H61.7112C61.7112 88.4705 70.2773 97.0367 80.8443 97.0367V96.0367Z"
                                                            fill="black"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_765_21440">
                                                            <rect width={160} height={160} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <Card.Text className="mb-5 desc_card">
                                                    Customize your marketing plan with<br /> our powerful tools
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4} className="d-flex justify-content-center align-items-center">
                                        <Card
                                            className="border-0"
                                            style={{ width: '63rem', height: '23rem', backgroundColor: '#edf2ed' }}
                                        >
                                            <Card.Body className="text-center">
                                                <Card.Title style={{ fontFamily: 'Montserrat, sans-serif' }}>STEP 3</Card.Title>
                                                <hr />
                                                {/* SVG icon for step 2 */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={140}
                                                    height={140}
                                                    viewBox="0 0 160 160"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_765_21474)">
                                                        <path
                                                            d="M11.1416 89.3795C10.6647 85.0358 63.5356 62.0674 88.4907 51.815C70.6414 52.4574 49.3474 49.0838 47.6651 44.1669C46.6958 41.3339 53.1436 25.7154 57.6332 18.2925C61.1168 12.5328 131.01 35.2931 133.494 38.8271C136.831 43.5748 131.239 97.7137 130.71 100.513C130.181 103.313 104.669 101.807 100.124 99.0581C96.4875 96.8587 93.8482 82.2643 99.0785 68.2705C90.7127 76.3217 43.9649 129.025 41.2689 129.89C37.8988 130.971 11.7377 94.8093 11.1416 89.3795Z"
                                                            fill="#FA0CF7"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M119.758 101.978C112.064 101.782 102.705 100.621 100.121 99.0581C96.4851 96.8588 93.8457 82.2644 99.0761 68.2706C95.5495 71.6646 85.2022 82.9935 74.2095 95.029C66.7299 103.218 58.9515 111.734 52.8196 118.301C43.3887 111.881 36.5904 102.194 33.7698 91.0485C32.5583 86.2614 32.1202 81.3617 32.43 76.5263C49.8565 68.111 73.9256 57.7979 88.4883 51.8151C71.2591 52.4352 50.8205 49.3134 47.9081 44.6737C53.4263 39.7491 60.0892 36.1719 67.384 34.3257L67.403 34.3209C77.4077 31.795 87.9727 32.6854 97.4345 36.8519C106.896 41.0184 114.718 48.2243 119.667 57.3351C124.616 66.4459 126.412 76.9441 124.772 87.1768C123.936 92.3964 122.23 97.3956 119.758 101.978Z"
                                                            fill="#E5BDBE"
                                                        />
                                                        <path
                                                            d="M67.066 34.5005C77.0707 31.9746 87.6357 32.865 97.0975 37.0315C106.559 41.198 114.381 48.4039 119.33 57.5147C124.279 66.6255 126.075 77.1237 124.435 87.3564C122.795 97.5891 117.813 106.975 110.272 114.036L115.445 129.536L99.2063 121.723C96.2591 123.179 93.1679 124.322 89.9829 125.132C78.0264 128.158 65.3513 126.286 54.7462 119.928C44.141 113.57 36.4744 103.246 33.4329 91.2281C30.3914 79.2102 32.2242 66.4825 38.5281 55.8449C44.832 45.2074 55.0906 37.5313 67.0471 34.5053L67.066 34.5005Z"
                                                            stroke="black"
                                                            strokeMiterlimit={10}
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_765_21474">
                                                            <rect width={160} height={160} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <Card.Text className="mb-5 desc_card">
                                                    Leverage
                                                    Instagram to generate more conversions, sales, and revenue
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={12} className="text-center pt-4 px-3">
                                        <Button className="rounded btnAll mb-5">
                                            GET STARTED <FontAwesomeIcon icon={faRocket} />
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Footer/>
            </>
        );
    }

    export default InstagramAutomation;