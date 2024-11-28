import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Container, Row, Col, Accordion,Carousel } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa'; // Importing Font Awesome Link Icon
// import { faRocket}from '@fortawesome/free-solid-svg-icons';
import { FaRocket } from 'react-icons/fa'; // Importing Font Awesome Rocket Icon
import '../assets/css/aashish.css'
import '../assets/css/bio.css'
import Header from './Header';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
function BioLink() {

  // Carousel settings
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

      <Header />

      <Helmet>
        <title>Sabnode Bio Links-in</title>
      </Helmet>

      <section className="bio-section">
        <Container className="mb-3 pt-5">
          <Row>
            <Col md={6} className="mb-3">
              <img
                src={require("../assets/img/sabnode-bio-links-66/14.png")}
                alt="Description of the image"
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            <Col md={6} className="mt-3">
              <h2 className="bio-header">
                Everything you are.
                <span className="bio-subheader">
                  In one, <br /> simple link in bio.
                </span>
              </h2>
              <p className="bio-description">
                Join 40M+ people using Bio Link for their link in bio. One link to help you
                share everything you create, curate, and sell from your Instagram, TikTok, Twitter,
                YouTube, and other social media profiles.
              </p>

              <div className="d-grid gap-2">
                <Button className="btnAll claim-button">
                  CLAIM YOUR BIO LINK <FaLink />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: '#ffffff' }} className="p-lg-3">
        <Container className="mx-auto mt-5 mb-3 p-lg-3">
          <Row>
            <Col md={6} className="mt-5">
              <h2
                style={{
                  fontSize: '38px',
                  fontWeight: 'bold',
                  letterSpacing: '1.2px',
                  marginRight: '5px',
                }}
              >
                <span style={{ color: '#772ae7' }}>Create and Customize</span> your Bio Link in minutes
              </h2>
              <p className="mt-4">
                Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more.
                It all comes together in a link in bio landing page designed to convert.
              </p>
              <div className="d-grid gap-2 mb-5 mt-4">
                <Button
                  // variant="primary"
                  style={{ width: '239px', padding: '18px' }}
                  className="btnAll anton-regular"
                >
                  GET STARTED FOR FREE <i className="fa-solid fa-rocket"></i>
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={require("../assets/img/sabnode-bio-links-66/13.jpg")}
                alt="Description of the image"
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
          </Row>
        </Container>
      </section>


      <section className="analyze-section">
        <Container className="mx-auto mt-5 mb-2 p-lg-2">
          <Row className="align-items-center" style={{ minHeight: '35rem' }}>
            {/* Image Column */}
            <Col lg={6} md={12} className="mt-3">
              <img
                src={require("../assets/img/sabnode-bio-links-66/12.webp")}
                alt="Description of the image"
                className="img-fluid rounded"
                style={{ width: '100%', maxHeight: '100%' }}
              />
            </Col>

            {/* Text Column */}
            <Col lg={6} md={12} className="mt-3 p-4 text-center text-lg-start">
              <h2 className="analyze-header">
                Analyze your audience
                <span> and keep your followers engaged</span>
              </h2>
              <p className="analyze-description">
                Track your engagement over time, monitor revenue and learn what’s converting
                your audience. Make informed updates on the fly to keep them coming back.
              </p>
              <div className="d-grid gap-2 mt-4">
                <Button
                  className=" btnAll  analyze-button"
                >
                  GET STARTED FOR FREE <FaRocket />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Unify your content Section */}
      <section style={{ backgroundColor: '#ffffff' }} className="p-lg-5">
        <div className="row container mx-auto mt-5 mb-3 p-lg-2">
          <div className="col-md-6" style={{ marginTop: '70px' }}>
            <h2 style={{ color: '#772ae7', fontSize: '42px', fontWeight: '500', letterSpacing: '1.2px' }}>
              Unify your content. <span style={{ color: '#000' }}>F*ck the algorithm. Get paid.</span>
            </h2>
            <p className="mt-4">It’s time to get your content seen. Find out how in the 2024 Creator Report.</p>
            <div className="d-grid gap-2 mb-5 mt-4">
              <Button className="btnAll anton-regular" style={{ width: '315px', padding: '18px 2px' }}>
                Read the 2024 Creator Report <FaRocket />
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={require("../assets/img/sabnode-bio-links-66/11.png")} alt="Description of the image" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Share your Bio Link Section */}
      <section style={{ backgroundColor: '#772AE7' }} className="p-lg-5 py-4">
        <Container className="mx-auto mt-4 mb-3">
          <Row className="align-items-center" style={{ minHeight: '32rem' }}>
            <Col lg={6} md={12} className="mt-3">
              <img src={require("../assets/img/sabnode-bio-links-66/10.png")} alt="Description of the image" className="img-fluid rounded" style={{ width: '100%', maxHeight: '100%' }} />
            </Col>
            <Col lg={6} md={12} className="mt-4 text-center text-lg-start">
              <h2 style={{ color: '#ffffff', fontSize: '2.3rem', letterSpacing: '1.2px' }}>
                Share your Bio Link <span style={{ color: '#000' }}>from your Instagram, TikTok, Twitter, and other bios</span>
              </h2>
              <p className="mt-3" style={{ color: 'white', fontSize: '1rem' }}>
                Add your unique Bio Link URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.
              </p>
              <div className="d-grid gap-2 mt-5 mb-5">
                <Button className="btnAll anton-regular" style={{ width: '100%', maxWidth: '280px', padding: '15px' }}>
                  GET STARTED FOR FREE <FaRocket />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* The only link in bio trusted by 40M+ Entrepreneurs Section */}
      <div className="banner_section mt-5">
        <div className="text">
          <h2
            className="elementor-heading-title elementor-size-default"
            style={{ fontSize: '42px', fontWeight: 600 }}
          >
            The only link in bio trusted by{' '}
            <span style={{ color: '#772AE7' }}>40M+ Entrepreneurs</span>
          </h2>
        </div>

        {/* <Container>
          <Row>
            <Col>
              <div className="wrap">
                <Slider {...settings}>
                  <div className="item">
                    <img
                      src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                      alt="Carousel item 1"
                      width={50}
                      height={20}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/img/sabnode-bio-links-66/8.jpg")}
                      alt="Carousel item 2"
                      width={50}
                      height={20}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                      alt="Carousel item 3"
                      width={50}
                      height={20}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                      alt="Carousel item 4"
                      width={50}
                      height={20}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/img/sabnode-bio-links-66/8.jpg")}
                      alt="Carousel item 5"
                      width={50}
                      height={20}


                    />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container> */}

      <Carousel className="border mt-5" interval={1500} controls={true}>
                        <Carousel.Item>
                          <Container>
                            <Row>
                            <Col>
                              <img
                                className="d-block  mt-3 w-100 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/8.jpg")}
                                alt="Variable Timesale Dimesale"
                                style={{borderRadius:'2rem'}}
                            />
                              </Col>
                              <Col>
                              <img
                                className="d-block w-100 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                                alt="Variable Timesale Dimesale"
                              
                            />
                              </Col>
                              <Col>
                              <img
                                className="d-block w-100 mt-3 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/8.jpg")}
                                alt="Variable Timesale Dimesale"
                                style={{borderRadius:'2rem'}}
                            />
                              </Col>
                            </Row>
                          </Container>
                            
                            
                        </Carousel.Item>

                        <Carousel.Item>
                        <Container>
                            <Row>
                            <Col>
                              <img
                                className="d-block  mt-3 w-100 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                                alt="Variable Timesale Dimesale"
                                style={{borderRadius:'2rem'}}
                            />
                              </Col>
                              <Col>
                              <img
                                className="d-block w-100 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/8.jpg")}
                                alt="Variable Timesale Dimesale"
                              
                            />
                              </Col>
                              <Col>
                              <img
                                className="d-block w-100 mt-3 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                                alt="Variable Timesale Dimesale"
                                style={{borderRadius:'2rem'}}
                            />
                              </Col>
                            </Row>
                          </Container>
                        </Carousel.Item>

                        <Carousel.Item>
                        <Container>
                            <Row>
                            <Col>
                              <img
                                className="d-block  mt-3 w-100 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/8.jpg")}
                                alt="Variable Timesale Dimesale"
                                style={{borderRadius:'2rem'}}
                            />
                              </Col>
                              <Col>
                              <img
                                className="d-block w-100 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                                alt="Variable Timesale Dimesale"
                              
                            />
                              </Col>
                              <Col>
                              <img
                                className="d-block w-100 mt-3 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/8.jpg")}
                                alt="Variable Timesale Dimesale"
                                style={{borderRadius:'2rem'}}
                            />
                              </Col>
                            </Row>
                          </Container>
                        </Carousel.Item>

                        <Carousel.Item>
                        <Container>
                            <Row>
                            <Col>
                              <img
                                className="d-block  mt-3 w-100 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                                alt="Variable Timesale Dimesale"
                                style={{borderRadius:'2rem'}}
                            />
                              </Col>
                              <Col>
                              <img
                                className="d-block w-100 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/8.jpg")}
                                alt="Variable Timesale Dimesale"
                              
                            />
                              </Col>
                              <Col>
                              <img
                                className="d-block w-100 mt-3 h-100"
                                src={require("../assets/img/sabnode-bio-links-66/7.webp")}
                                alt="Variable Timesale Dimesale"
                                style={{borderRadius:'2rem'}}
                            />
                              </Col>
                            </Row>
                          </Container>
                        </Carousel.Item>
                    </Carousel>

      </div>


      <Container className="mt-5 mb-5">
        <h1 className="text-center mt-5 mb-3" style={{  fontSize: '45px', fontFamily: 'Poppins, Sans-serif' }}>
          Frequently Asked Questions
        </h1>
        <hr style={{ width: '84%', marginLeft: 'auto', marginRight: 'auto' }} />
<section   className="faq">

        <Accordion flush defaultActiveKey="0" id="accordionFlushExample">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why do I need a link in bio tool?</Accordion.Header>
            <Accordion.Body>
              Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date. <br />
              A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Is Sabnode the original link in bio tool?</Accordion.Header>
            <Accordion.Body>
              The short answer? Yes! <br />
              Back in 2016, we created Sabnode as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Sabnode remains the leading, biggest, and most popular link-in-bio solution – but that’s just the beginning. You can use your Sabnode URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Sabnode Bio Link, you don’t need one!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Can you get paid and sell things from a Sabnode Bio Link?</Accordion.Header>
            <Accordion.Body>
              Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Sabnode Bio Link. <br />
              A lot of Sabnode Bio Link creators see incredible results with online sales on Sabnode, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Bio Link, your customers won’t even need to leave your social media to go to another site and pay!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Is Sabnode safe to use on all of my social media profiles?</Accordion.Header>
            <Accordion.Body>
              Sabnode is trusted by all social platforms, and is even used on many of Facebook, Instagram, and TikTok’s own social media accounts! Because Sabnode is the original and most popular link-in-bio tool, the URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>What makes Sabnode better than the other link in bio options?</Accordion.Header>
            <Accordion.Body>
              Sabnode Bio Link invented the bio link tool in 2016, and it continues the world’s most popular bio link to this day – with 40M+ people using it as their trusted place to share, sell, and grow online. Join them on Sabnode Bio Link today and see for yourself!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>How can I drive more traffic to and through my Bio Link?</Accordion.Header>
            <Accordion.Body>
              Sharing your Bio Link on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>How many links should I have on my Sabnode Bio Link?</Accordion.Header>
            <Accordion.Body>
              This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Bio Link at once (based on our most successful creators).
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>Do I need a website to use Sabnode Bio Link?</Accordion.Header>
            <Accordion.Body>
              No, you don’t! Sabnode Bio Link can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>Where can I download the app?</Accordion.Header>
            <Accordion.Body>
              Find it in the App Store, and in the Google Play store!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
</section>

      </Container>
      <Footer />
    </>
  )
}

export default BioLink;