import { Container, Row, Col, Button, Card, Accordion, ListGroup } from 'react-bootstrap'
import '../style.css'

import { Helmet } from 'react-helmet';


import { FaFile, FaAddressCard, FaCalendarAlt, FaWrench, FaGlobe, FaProjectDiagram } from 'react-icons/fa';


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from '../components/ScrollToTop';

function Biolink66() {
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
        <title>Sabnode-Bio-Links-66 - in</title>
      </Helmet>

      {/* First section */}
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Antonio&family=Roboto&family=Poppins&family=Montserrat& display=swap" rel="stylesheet" />

      <Container className="text-center">
        <Row className="align-items-start">
          <Col md={6}>
            <h1 style={{ marginTop: '8.7rem', textAlign: 'start' }}>
              <span className="text-purple mb-1 " style={{ fontSize: '3.5rem' }}>
                Do everything with<br />
              </span>
              <span className="text-large h1" style={{ fontSize: '4rem' }}>
                one platform.
              </span>
            </h1>
            <div className="image" style={{ marginTop: '1.7rem', marginLeft: '-6rem' }}>
              <p className="">
                <img draggable="false" role="img" className="emoji" alt="🔗" height="16" width="16"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f517.svg" color='#616161' /> Short Link –
                <img draggable="false" role="img" className="emoji" alt="📱" height="16" width="16"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4f1.svg" /> Bio Pages –
                <img draggable="false" role="img" className="emoji" alt="🤳" height="16" width="16"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f933.svg" /> QR codes –
                <img draggable="false" role="img" className="emoji" alt="👤" height="16" width="16"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f464.svg" /> Vcard links –
                <img draggable="false" role="img" className="emoji" alt="📃" height="16" width="16"
                  src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4c3.svg" /> File links
              </p>
            </div>
            <Button className="rounded  btn btn-light btnAll" style={{ marginLeft: '-24.1rem', marginTop: '1.4rem', width: '10rem', height: '2.9rem', fontFamily: 'Anton, Sans-serif' }}>
              GET STARTED <i className="fas fa-rocket" />
            </Button>
          </Col>
          <Col md={6}>
            <img width={1000} height={1000} src={require("../assets/img/sabnode-bio-links-66/1.png")} className="img-fluid" alt="Description of image" />
          </Col>
        </Row>
      </Container>
      {/* Second section */}
      <Container className="text-center" style={{ marginTop: '8rem' }}>
        <Row className="align-items-start">
          <Col md={6}>
            <img style={{ width: '546px', height: '320px' }} src={require('../assets/img/sabnode-bio-links-66/2.jpg')} />

          </Col>
          <Col md={6} className="text-left" style={{ marginTop: '-8rem' }}>
            <div style={{ marginTop: '3.3rem' }}>
              <div style={{ marginTop: '2rem' }}>
                <div >
                  <i style={{ fontSize: '2rem', marginTop: '4rem' }} class="fa-solid fa-bookmark text-purple" ></i>

                </div>
              </div>
              <h1>Sabnode <span className="text-purple">Bio Link</span> Pages</h1>
            </div>
            <div style={{ marginTop: '1rem', fontFamily: '"Antonio", Sans-serif' }}>
              <p className="text-dark" style={{ fontFamily: 'Antonio, Sans-serif' }}>Create your own unique & highly customizable bio link page with ease.</p>
            </div>
            <div style={{ marginTop: '2.1rem' }}>
              <ul style={{ listStyle: 'none', marginLeft: '-2rem' }}>
                <li style={{ fontFamily: '"Roboto", Sans-serif' }}
                  className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple" /> Custom colors & branding</li>
                <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list custom-list" /> Password protection, sensitive content warning</li>
                <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list custom-list" /> SEO settings</li>
                <li className="text-dark"><i className="fa-solid fa-circle-check text-purple custom-list custom-list" /> Tons of ready-to-use components</li>
                <li className="text-dark"><i className="fa-solid fa-circle-check text-purple custom-list custom-list" /> Tons of ready-to-use components</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Third Section. */}

      <Container className="text-center" style={{ marginTop: '8rem' }}>
        <Row className="align-items-start">
          <Col md={6} className="text-md-left text-center ">

            <div className='icons ' style={{ textAlign: 'start' }}>
              <svg aria-hidden="true" class="e-font-icon-svg e-fas-link" width={62} height={62} fill='#772ae7 ' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>

            </div>

            <h1 style={{
              fontSize: '3rem', textAlign: 'start', lineHeight: '6rem'
            }}>
              <span className="text-purple">Shortened</span> links
            </h1>
            <p style={{ color: 'black', textAlign: 'start', marginTop: '1.6rem' }}>
              Yes! You can use our service as a shortener as well.
            </p>
            <ul style={{ listStyle: 'none', marginLeft: '-2rem', textAlign: 'start', marginTop: '1.8rem' }}>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Scheduling &amp; expiration limits</li>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Country, device &amp; language targeting</li>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> A/B Rotation</li>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Password protection, sensitive content warning</li>
            </ul>
          </Col>
          <Col md={6}>
            <img style={{ width: '33.5rem ', height: '10.4rem', marginTop: '6rem' }} src={require('../assets/img/sabnode-bio-links-66/3.png')} />

          </Col>
        </Row>
      </Container>

      {/* Fourth Section */}
      <Container className="text-center" style={{ marginTop: '7rem' }}>
        <Row className="align-items-start">
          <Col md={6}>
            <img style={{ marginTop: '1.2rem', width: '33.5rem', height: '20.5rem' }} src={require('../assets/img/sabnode-bio-links-66/4.jpg')} />

          </Col>
          <Col md={6} className="text-left">
            <i className="fa-solid fa-qrcode text-purple" style={{ fontSize: '3rem' }} />
            <h1 style={{ marginTop: '2.8rem' }}><span className="text-purple">QR</span> Codes</h1>
            <p style={{ color: 'black', marginTop: '1.7rem' }}>
              Fully featured QR code generator system with easy-to-use templates.
            </p>
            <ul style={{ listStyle: 'none', marginLeft: '-2rem', marginTop: '2.9rem' }}>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Custom colors with gradients</li>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Custom logo</li>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Multiple QR shapes to choose from</li>
              <li className="text-dark"><i className="fa-solid fa-circle-check text-purple custom-list" /> Vcard, WiFi, Calendar, Location, etc. templates</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Five Section */}

      <Container className="text-center" style={{ marginTop: '11rem' }}>
        <Row className="align-items-start">
          <Col md={6} className="text-left">
            {/* <img style={{width:'3rem'}} src={require('../assets/img/sabnode-bio-links-66/diagram.png')} /> */}

            <i className="fa-solid fa-chart-simple text-purple" style={{ fontSize: '3rem' }} />
            <h1><span className="text-purple" style={{ marginLeft: '0rem', marginTop: '2rem' }}>Built-in</span> Analytics</h1>
            <p style={{ fontWeight: 'lighter' }}>
              Easy to understand, yet detailed and comprehensive analytics for all your links. GDPR, CCPA, and PECR compliant.
            </p>
            <ul style={{ listStyle: 'none', marginLeft: '-2rem' }}>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Countries &amp; cities</li>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Referrers &amp; UTMs</li>
              <li className="text-dark mt-1"><i className="fa-solid fa-circle-check text-purple custom-list" /> Devices &amp; operating systems</li>
              <li className="text-dark"><i className="fa-solid fa-circle-check text-purple custom-list" /> Browsers, Languages</li>
            </ul>
          </Col>
          <Col md={6}>
            <img src={require('../assets/img/sabnode-bio-links-66/5.png')} style={{ marginTop: '0rem', width: '33.5rem', height: '17.3rem' }} />

          </Col>
        </Row>
      </Container>

      {/* Six Section */}


      <Container fluid className="text-center" style={{ backgroundColor: '#6f2ef4', padding: '2rem', marginTop: '7rem' }}>
        <h1 className="display-4 text-light" style={{ letterSpacing: '1.2px', marginTop: '2.8rem' }}>
          Read Customer Reviews
        </h1>
        <p className="lead text-light" style={{ marginTop: '1.6rem', letterSpacing: '-1.9px' }}>
          Over 8,000+ sites across many industries use Sabnode to boost conversions. Customers rated Sabnode an average 4.7 out of 5 stars.
        </p>
        <div class="">
          <figure>
            <img class="img-fluid" src={require("../assets/img/sabnode-bio-links-66/6.webp")}
              style={{ borderRadius: '50%', width: '32rem', height: '23rem', boxShadow: 'none', height: 'auto', marginTop: '6rem' }} />

          </figure>
        </div>

        <p className=" mb-3">
          <p style={{ color: '#ddd' }}>
            "Our customers have told us that <br /> Sabnode clearly influences their <br /> purchasing decisions."
          </p>
          <div className="review-stars mb-3">★★★★★</div>
          <footer className="footer text-light">
            Yaren Öksz <cite title="Marketing Specialist">Marketing Specialist</cite>
          </footer>
        </p>
      </Container>

      {/* Seven Section */}

      <Container className="text-center mt-5">
        <Row className="justify-content-center" style={{ marginTop: '7rem' }}>
          <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>
            <span className="text-purple">Who is Sabnode a</span> perfect fit for?
          </h1>
        </Row>
        <Row style={{ fontFamily: 'Anton, Sans-serif' }} className="align-items-start mt-5">
          {[
            {
              title: 'File Links',
              text: 'Generate dynamic, advanced & downloadable links to files.',
              icon: <FaFile className="text-purple" style={{ fontSize: '3rem', margin: '1rem' }} />,
            },
            {
              title: 'Vcard Links',
              text: 'Create dynamic digital contact cards, tracked & downloadable.',
              icon: <FaAddressCard className="text-purple" style={{ fontSize: '3rem', margin: '1rem' }} />,
            },
            {
              title: 'Event Links',
              text: 'Create dynamic event links, tracked & downloadable.',
              icon: <FaCalendarAlt className="text-purple" style={{ fontSize: '3rem', margin: '1rem' }} />,
            },
            {
              title: 'Tools',
              text: 'We are offering a set of 120 useful web tools as a bonus.',
              icon: <FaWrench className="text-purple" style={{ fontSize: '3rem', margin: '1rem' }} />,
            },
            {
              title: 'Custom Domains',
              text: 'Connect your own domain or use our predefined ones.',
              icon: <FaGlobe className="text-purple" style={{ fontSize: '3rem', margin: '1rem' }} />,
            },
            {
              title: 'Projects',
              text: 'The easiest way to categorize your managed resources.',
              icon: <FaProjectDiagram className="text-purple" style={{ fontSize: '3rem', margin: '1rem' }} />,
            },
          ].map((item, index) => (
            <Col sm={6} md={4} key={index} className="mb-4">
              <Card style={{ textAlign: 'start', border: 'none', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.4)' }}>
                {item.icon}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Eight Section. */}
      <div style={{ backgroundColor: '#6f2ef4', marginTop: '7rem', paddingBottom: '5rem' }}>
        <Container className="text-center">
          <div>
            <h1 style={{ fontSize: '4rem', letterSpacing: '1.2px', lineHeight: '13rem' }}>
              <span className="text-dark">Pricing </span>
              <span className="text-light">Plans</span>
            </h1>
          </div>
          <div>
            <p style={{ color: '#ddd', marginTop: '-3rem' }}>
              Choose and get exactly what you need.
            </p>
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={4} className="mb-3">
                <Button variant="light" className="btn-hover-purple" style={{ width: '19rem', fontFamily: 'Anton, Sans-serif', height: '4rem' }}>
                  Monthly
                </Button>
              </Col>
              <Col xs={12} md={4} className="mb-3">
                <Button variant='sucess' className="  btn btn-light btn-hover-green" style={{ width: '19rem', height: '4rem', fontFamily: 'Anton, Sans-serif' }}>
                  Yearly 🎉
                </Button>

              </Col>

              <Col xs={12} md={4} className="mb-3">

                <Button variant="light" className="btn-hover-red" style={{ width: '19rem', fontFamily: 'Anton, Sans-serif', height: '4rem' }}>
                  Lifetime              </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>



      <Container className="py-5" >
        <Row className="text-center">
          {/* Free Plan */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div
              style={{
                height: '100%',
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
              }}
              className="pricing-card"
            >
              <h3 className="plan-header text-purple text-center" style={{ textAlign: 'start', fontWeight: 'bold' }}>
                FREE
              </h3>
              <p className="text-dark text-center" style={{ textAlign: 'center' }}>
                Free forever plan
              </p>
              <p style={{ fontSize: '3rem', fontWeight: 'bold' }} className="text-center text-purple">
                FREE
              </p>
              <Button variant="primary" className="rounded btn btn-light btnAll" style={{ padding: '10px 20px', fontFamily: 'Anton, Sans-serif', fontSize: '1rem', width: '16rem' }}>
                SIGN UP
              </Button>
              <p className="text-dark mt-3 fw-medium" style={{ fontSize: '0.9rem', marginRight: '4rem' }}>
                Access all features ⭐⭐⭐⭐⭐
              </p>
              <ul className="text-dark text-start mt-3" style={{ listStyle: 'none' }}>
                {[
                  '25 Biolink Pages',
                  '10 Biolink Blocks',
                  '250 Shortened Links',
                  '2 File Links',
                  '5 QR Codes',
                  '50 Projects',
                  '5 Splash Pages',
                  'Custom Domains',
                  '365 days statistics retention',
                  'No forced splash page',
                  'Custom Back-half',
                  'Deep linking',
                  'SEO Features',
                  'Extra fonts',
                  'Custom Back-half',

                  'Removable branding',
                  'Custom Backgrounds',
                  'Custom branding',
                  'Do follow links',
                  'Leap link',
                  'Custom CSS',
                  'Custom JS',
                  '10 Biolink Blocks',

                  'In-depth Statistics',
                  'Cloaking short URLs',
                  'Auto open app on mobile',
                  'UTM Parameters',
                  'Password protection',
                  'Sensitive content',
                  'No ads',
                  'API access',
                ].map((feature, index) => (
                  <li key={index}>
                    <i className="fa-regular fa-square-check text-purple"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Golden Plan */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div
              style={{
                height: '100%',
                padding: '20px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
              className="pricing-card"
            >
              <h3 className="plan-header text-purple" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                GOLDEN
              </h3>
              <p className="text-dark" style={{ textAlign: 'center' }}>
                The agency plan
              </p>
              <p style={{ fontSize: '3rem', fontWeight: 'bold' }} className= " text-center text-purple">
                $4.99 <span style={{ fontSize: '1.5rem' }} className="text-dark">/per mo</span>
              </p>
              <Button variant="primary" className="rounded btnAll btn btn-light" style={{
                padding: '10px 20px', fontFamily: 'Anton, Sans-serif', fontSize: '1rem',
                width: '16rem'
              }}>
                BUY NOW
              </Button>
              <p className="text-dark mt-3 fw-medium" style={{ fontSize: '0.9rem', marginRight: '4rem' }}>
                Access all features ⭐⭐⭐⭐⭐
              </p>
              <ul className="text-dark text-start mt-3" style={{ listStyle: 'none' }}>
                {[
                  'Unlimited Biolink Pages',
                  'Unlimited Biolink Blocks',
                  'All Enabled Biolink Blocks',
                  'Unlimited Shortened Links',
                  'Unlimited File Links',
                  'Unlimited Projects',
                  'Unlimited Vcard Links',
                  'Unlimited Event Links',
                  '25 QR Codes',
                  'Unlimited Pixels',
                  'Unlimited Custom Domains',
                  '365 days statistics retention',
                  'No forced splash page',
                  'Custom Back-half',
                  'Deep linking',
                  'Removable branding',
                  'Custom Backgrounds',
                  'Leap link',
                  'SEO Features',
                  'Extra fonts',
                  'Custom CSS',
                  'Custom JS',
                  'In-depth Statistics',
                  'Links scheduling & limiter',
                  'Cloaking short URLs',
                  'Auto open app on mobile',
                  'UTM Parameters',
                  'Password protection',
                  'Sensitive content',
                  'No ads',
                  'API access',
                ].map((feature, index) => (
                  <li key={index}>
                    <i className="fa-regular fa-square-check text-purple"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Custom Plan */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div
              style={{
                height: '100%',
                padding: '20px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
              }}
              className="pricing-card"
            >
              <h3 className="plan-header text-purple" style={{ fontSize:'2rem',  textAlign: 'center', fontWeight: 'bold' }}>
                Custom
              </h3>
              <p className="text-dark" style={{ textAlign: 'center' }}>
                The agency plan
              </p>
              <p style={{ fontSize: '3rem', fontWeight: 'bold' }} className="text-center text-purple">
                TBD <span style={{ fontSize: '1.5rem' }} className="text-dark"></span>
              </p>
              <Button variant="primary" className="rounded btn btn-light  btnAll" style={{ padding: '10px 20px', fontFamily: 'Anton, Sans-serif', fontSize: '1rem', width: '16rem' }}>
                BUY NOW
              </Button>
              <p className="text-dark mt-3 fw-medium" style={{ fontSize: '0.9rem', marginRight: '4rem' }}>
                Access all features ⭐⭐⭐⭐⭐
              </p>
              <ul className="text-dark text-start mt-3" style={{ listStyle: 'none' }}>
                {[
                  'Unlimited Biolink Pages',
                  'Unlimited Biolink Blocks',
                  'All Enabled Biolink Blocks',
                  'Unlimited Shortened Links',
                  'Unlimited File Links',
                  'Unlimited Projects',
                  'Unlimited Vcard Links',
                  'Unlimited Event Links',
                  '25 QR Codes',
                  'Unlimited Pixels',
                  'Unlimited Custom Domains',
                  '365 days statistics retention',
                  'No forced splash page',
                  'Custom Back-half',
                  'Deep linking',
                  'Removable branding',
                  'Custom Backgrounds',
                  'Leap link',
                  'SEO Features',
                  'Extra fonts',
                  'Custom CSS',
                  'Custom JS',
                  'In-depth Statistics',
                  'Links scheduling & limiter',
                  'Cloaking short URLs',
                  'Auto open app on mobile',
                  'UTM Parameters',
                  'Password protection',
                  'Sensitive content',
                  'No ads',
                  'API access',
                ].map((feature, index) => (
                  <li key={index}>
                    <i className="fa-regular fa-square-check text-purple"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Button className="rounded btnAll" style={{ marginLeft: '33rem', marginTop: '-3rem', fontFamily: 'Anton, Sans-serif', width: '19rem', height: '4rem' }}>
        GET STARTED <i className="fas fa-rocket" />
      </Button>

      {/* </div> */}


      {/* Nine section */}

      <Container style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Row>
          <Col>
            <h1> Tracking  <span className='text-purple'>pixels</span>  </h1>
            <p style={{ fontFamily: 'Antonio, Sans-serif' }}>

              All the links easily integrate with any of the following pixel providers.
            </p>

          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <div class=" " style={{ marginTop: '2.8rem', textAlign: 'center' }} >
            <i style={{ color: 'blue' }} class="fa-brands fa-facebook fa-2x mx-2"></i>
            <i style={{ color: 'black' }} class="fa-brands fa-google fa-2x mx-2"></i>
            <i style={{ color: 'rebeccapurple' }} class="fa-brands fa-pinterest fa-2x mx-2"></i>
            <i style={{ color: 'black' }} class="fa-brands fa-tiktok fa-2x mx-2"></i>
            <i style={{ color: 'red' }} class="fa-brands fa-quora fa-2x mx-2"></i>

            <i style={{ color: 'yellow' }} class="fa-brands fa-snapchat fa-2x mx-2"></i>
            <i style={{ color: 'blue' }} class="fa-brands fa-linkedin fa-2x mx-2"></i>

          </div>

        </Row>

      </Container>
      <Container>
        <Button className="rounded btnAll" style={{ marginLeft: '25rem', marginTop: '3rem', width: '19rem', height: '3rem' }}>
          GET STARTED <i className="fas fa-rocket" />
        </Button>
      </Container>


      <Container className="text-start" style={{ marginTop: '0.7rem', marginLeft: '-0.8rem' }}>
        <Row className="align-items-start">
          <Col>
            <ListGroup className="text-dark mt-3">
              <Row style={{ listStyle: 'none', border: 'none' }}>
                <Col md={2}>
                  <i class="fa-regular fa-square-check text-purple" /> Custom Domains
                </Col>
                <Col md={2}>
                  <li> <i class="fa-regular fa-square-check text-purple" /> Tools & Projects</li>
                </Col>
                <Col md={3}>
                  <i class="fa-regular fa-square-check text-purple" />Multiple Links
                </Col>
              </Row>
            </ListGroup>
          </Col>
        </Row>
      </Container>











      <section className="faq">
        <h1 className="text-center my-5" style={{ letterSpacing: '5.4px' }}>
          Frequently Asked Questions
        </h1>
        <div style={{ marginTop: '-2rem' }}>
          <p className="text-dark text-center">
            Send personalized emails, set automation workflows, add multiple SMTPs, and much more.
          </p>
        </div>

        <Accordion defaultActiveKey="0" style={{ marginTop: '5rem' }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Can I connect multiple delivery servers?
            </Accordion.Header>
            <Accordion.Body>
              Yes, you can connect multiple SMTPs, which helps you to send emails, even if one of your SMTP accounts is suspended.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Does Sabnode have an inbuilt SMTP Server, what is the cost?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we have our inbuilt SMTP, i.e. Pabbly “send with us”. Use this SMTP without any hassle. We do not charge anything extra for this.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Does Sabnode charge any fee to connect External SMTP?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we have our inbuilt SMTP, i.e. Pabbly “send with us”. Use this SMTP without any hassle. We do not charge anything extra for this.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Is there any email sending limit?
          </Accordion.Header>
          <Accordion.Body>
            If you are sending from an external SMTP, there is no limit. If you send via inbuilt SMTP, it has a per-day sending limit. Suppose you subscribe to a 50k subscribers plan. Then you will be granted 50k emails per day with inbuilt SMTP. But to start with you’ll be able to send 500 emails per day; once you start sending, we’ll check your campaign stats (bounce/complaint rate) and gradually increase the limit.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Can I schedule emails using Sabnode Email Marketing?
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can either send the emails instantly or choose to schedule them on a particular date and time.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Can I check the stats of the email campaign sent?
          </Accordion.Header>
          <Accordion.Body>
            Yes, each email campaign sent has its own campaign report. You can check the sent, opened, clicked, and unsubscribed rates. You can also track the number of times a particular link was clicked, as well as the receivers' country/browser/device/OS stats.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Can I delete subscribers and add new ones?
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can delete up to 50% of subscribers monthly and add new ones in place of those. This will enable you to keep your list updated. For example, if you opt for a 50,000 subscriber plan, you can delete up to 25,000 subscribers every month and add new ones in their place.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            What happens if I add a duplicate email?
          </Accordion.Header>
          <Accordion.Body>
            We count unique email addresses; if you add the same email to multiple lists, it will be counted as one subscriber.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Can I resend an email to non-openers?
          </Accordion.Header>
          <Accordion.Body>
            Yes, Sabnode offers an auto-follow-up option that allows you to resend the emails only to non-openers on a particular date and time.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      </section>









      <Footer/>

    </>

  )
}
export default Biolink66;