import React, { useState } from 'react';
import { Col, Container, Row, Figure, Button } from 'react-bootstrap';
import '../assets/css/marketing.css'
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';

const Marketing = () => {
  const templates = [
    {
      src: 'https://sabnode.com/wp-content/uploads/2023/11/gadgets.jpg',
      alt: 'temp1',
      title: 'Gadget Shop',
    },
    {
      src: 'https://sabnode.com/wp-content/uploads/2023/11/beauty.jpg',
      alt: 'temp2',
      title: 'Beauty Store',
    },
    {
      src: 'https://sabnode.com/wp-content/uploads/2023/11/cake.jpg',
      alt: 'temp3',
      title: 'Cake Shop',
    },
    {
      src: 'https://sabnode.com/wp-content/uploads/2023/11/coffee.jpg',
      alt: 'temp4',
      title: 'Coffee Shop',
    },
    {
      src: 'https://sabnode.com/wp-content/uploads/2023/11/fast-foods.jpg',
      alt: 'temp5',
      title: 'Fast Food',
    },
    {
      src: 'https://sabnode.com/wp-content/uploads/2023/11/furniture.jpg',
      alt: 'temp6',
      title: 'Furniture Store',
    },
  ];
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      title: 'APPRENTICE',
      monthlyPrice: 15,
      yearlyPrice: 150,
      yearlySavePrice: 30,
      features: [
        'All Social Platforms Accounts',
        'Social Media Automation',
        'Messenger Marketing',
        'Email Marketing',
        'SMS Marketing',
        'Ecommerce',
        'Google Sheets',
        'AI Generated Content',
        'Whitelabel / CNAME',
        'Google My Business Messages',
        'WhatsApp Marketing',
        'Omni Channel',
        'Booking Events',
        'Artificial Intelligence',
        'Webchat Widget',
      ],
    },
    {
      title: 'MASTER',
      monthlyPrice: 20,
      yearlyPrice: 200,
      yearlySavePrice: 40,
      features: [
        'All Social Platforms Accounts',
        'Social Media Automation',
        'Messenger Marketing',
        'Email Marketing',
        'SMS Marketing',
        'Ecommerce',
        'Google Sheets',
        'AI Generated Content',
        'Whitelabel / CNAME',
        'Google My Business Messages',
        'WhatsApp Marketing',
        'Omni Channel',
        'Booking Events',
        'Artificial Intelligence',
        'Webchat Widget',
      ],
    },
    {
      title: 'GRAND MASTER',
      monthlyPrice: 49,
      yearlyPrice: 490,
      yearlySavePrice: 98,
      features: [
        'All Social Platforms Accounts',
        'Social Media Automation',
        'Messenger Marketing',
        'Email Marketing',
        'SMS Marketing',
        'Ecommerce',
        'Google Sheets',
        'AI Generated Content',
        'Whitelabel / CNAME',
        'Google My Business Messages',
        'WhatsApp Marketing',
        'Omni Channel',
        'Booking Events',
        'Artificial Intelligence',
        'Webchat Widget',
      ],
    },
    {
      title: 'ULTRA GRAND MASTER',
      monthlyPrice: 197,
      yearlyPrice: 1950,
      yearlySavePrice: 390,
      features: [
        'All Social Platforms Accounts',
        'Social Media Automation',
        'Messenger Marketing',
        'Email Marketing',
        'SMS Marketing',
        'Ecommerce',
        'Google Sheets',
        'AI Generated Content',
        'Whitelabel / CNAME',
        'Google My Business Messages',
        'WhatsApp Marketing',
        'Omni Channel',
        'Booking Events',
        'Artificial Intelligence',
        'Webchat Widget',
      ],
    },
  ];
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
    <title>Marketing Master - in</title>
</Helmet>
      <section className="p-5 mx-5">

      <ScrollToTop />


        <Container>
          <Row className="g-5 px-5">
            <Col lg={6}>
              <h1 style={{letterSpacing: '3.6px'}}>
                <span className="text-purple">
                  The All-in-one Online Marketing Solution
                </span>{' '}
                For Your Business
              </h1>
              <Row className="gx-5 gy-0">
                <Col lg={6}>
                  <Button className="btnAll my-4">
                    GET STARTED <i className="fa-solid fa-rocket"></i>
                  </Button>
                </Col>
                <Col lg={6}>
                  <Button className="btnwhite my-4">
                    Watch now <i className="fa-solid fa-circle-play"></i>
                  </Button>
                </Col>
              </Row>
              <Row className="g-5">
                <Col lg={6}>
                  <img
                    className="img-fluid Meta-Badge"
                    src={require("https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/Meta-Badge.webp")}
                    alt="Meta Business Partner Badge"
                  />
                </Col>
                <Col lg={6} className="d-lg-flex justify-content-center align-items-center">
                  <p style={{ paddingRight: '1.25rem' ,marginBottom: '0px', fontSize: '9px', fontFamily: 'antonio', fontWeight: '200', lineHeight: '1.7em', wordSpacing: '1px', letterSpacing: '0.2px' }}>
                  <strong>CERTIFIED META BUSINESS PARTNER.</strong> Meta Business Partners help build scaled solutions for businesses across Facebook products and services for messaging and help them drive best-in-class business outcomes for their clients.
                </p>
            </Col>
          </Row>
        </Col>
        <Col lg={6} className="d-flex justify-content-center align-items-center">
          <video
            className="object-fit-cover img-fluid"
            src="https://sabnode.com/wp-content/uploads/2023/11/VID-20231109-WA0000.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
          ></video>
        </Col>
      </Row>
    </Container >
      </section >

      <section className="p-5">
        <Container>
          <h1 className="text-center">
            Everything You Need,<span className="text-purple"> In One Place</span>
          </h1>
          <p className="text-center py-3">
            You know what it’s like trying to set systems online, it can be a nightmare, right? Normally, you need to
            subscribe to loads of different platforms to take care of all this. Not only does this cost you a
            fortune in monthly subscriptions, but it also drains your time as you painstakingly learn how to use
            each platform. With Marketing Master IO, you get all this in one place. So you can conquer the online
            world with ease and in no time at all.
          </p>
          <video
            className="img-fluid d-block mx-auto object-fit-cover my-5" width='1140px'
            src="https://sabnode.com/wp-content/uploads/2023/11/VID-20231109-WA0000.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          />
        </Container>
      </section>

      <section className="py-5 px-1">
        <Container>
          <Row className="g-5">
            <Col md={6} className="order-md-1 order-2">
              <img src={require("../assets/img/Marketing/img1.webp")} alt="" className="img-fluid object-fit-cover" />
            </Col>
            <Col md={6} className="my-md-auto order-1 order-md-2">
              <i className="fa-solid fa-robot text-purple fs-1 my-4"></i>
              <h2><span className="text-purple">Build chatbots for Messenger, </span> Instagram, WhatsApp and Google Messages</h2>
              <small className="fs-md-3 d-block my-4">Connect with new customers every day – Create instant engagement – Build an army of loyal fans</small>
              <button className="btnAll mb-3 me-5">GET STARTED <i className="fa-solid fa-rocket"></i></button>
              <button className="btnwhite mb-3">Watch now <i className="fa-solid fa-circle-play"></i></button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 px-1">
        <Container>
          <Row className="g-5">
            <Col md={6} className="my-md-auto">
              <i className="fa-solid fa-chart-column text-purple fs-1 my-4"></i>
              <h2><span className="text-purple">Create a high converting</span> E-Commerce stores.</h2>
              <small className="d-block my-4">Increase your average order value (AOV) with one-click upsells. Rescue lost customers with abandon cart recovery messages. Maximize your store with physical & digital products</small>
              <button className="btnAll mb-3 me-5">GET STARTED <i className="fa-solid fa-rocket"></i></button>
              <button className="btnwhite mb-3">Watch now <i className="fa-solid fa-circle-play"></i></button>
            </Col>
            <Col md={6}>
              <img className="img-fluid object-fit-cover" src={require("../assets/img/Marketing/img-2.webp")} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 px-1">
        <Container>
          <Row className="g-5">
            <Col md={6} className="order-md-1 order-2">
              <img className="img-fluid object-fit-cover" src={require("../assets/img/Marketing/img-3.webp")} alt="" />
            </Col>
            <Col md={6} className="my-md-auto order-1 order-md-2">
              <i className="fa-solid fa-users-line text-purple fs-1 my-4"></i>
              <h2><span className="text-purple">FB Livestream Selling</span> Automation</h2>
              <small className="d-block my-4">Automatically reply to all comments and send private messenger chat – auto export customers to Google sheet</small>
              <button className="btnAll mb-3 me-5">GET STARTED <i className="fa-solid fa-rocket"></i></button>
              <button className="btnwhite mb-3">Watch now <i className="fa-solid fa-circle-play"></i></button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 px-1">
        <Container>
          <Row className="g-5">
            <Col md={6} className="my-md-auto">
              <i className="fa-regular fa-comments text-purple fs-1 my-4"></i>
              <h2><span className="text-purple">Automatically Reply to your Facebook and</span> Instagram Post's Comments</h2>
              <small className="d-block my-4">Force Facebook to show your posts to more people by employing the comment automation with auto follow-ups for Messenger and Instagram</small>
              <button className="btnAll mb-3 me-5">GET STARTED <i className="fa-solid fa-rocket"></i></button>
              <button className="btnwhite mb-3">Watch now <i className="fa-solid fa-circle-play"></i></button>
            </Col>
            <Col md={6}>
              <img className="img-fluid object-fit-cover" src={require("../assets/img/Marketing/img-4.png")} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 px-1">
        <Container>
          <Row className="g-5">
            <Col md={6} className="order-md-1 order-2">
              <img className="img-fluid object-fit-cover" src={require("../assets/img/Marketing/img-5.webp")} alt="" />
            </Col>
            <Col md={6} className="my-md-auto order-1 order-md-2">
              <i className="fa-solid fa-envelope text-purple fs-1 my-4"></i>
              <h2><span className="text-purple">Send SMS and Email broadcasts</span> or drip campaigns</h2>
              <small className="d-block my-4">Easily build high-converting Email marketing campaigns with our drag-and-drop email campaign builder</small>
              <button className="btnAll mb-3 me-5">GET STARTED <i className="fa-solid fa-rocket"></i></button>
              <button className="btnwhite mb-3">Watch now <i className="fa-solid fa-circle-play"></i></button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-body-secondary py-5">
        <Container className="text-center py-5">
          <h1 className="mb-3" style={{ fontSize: '42px' }}>
            Multiple <span className="text-purple"> Built-In Templates</span>
          </h1>
          <p>Create Your Store In 1-Click With Our Templates</p>
          <button className="btnAll mt-5">
            GET STARTED FOR FREE <i className="fa-solid fa-rocket"></i>
          </button>
        </Container>
      </section>

      <section className="templates my-5 py-5">
        <Container>
          <Row className="gx-3 gy-5 px-5">
            {templates.map((template, index) => (
              <Col md={4} key={index} className="position-relative">
                <img
                  className="rounded-4 img-fluid"
                  src={template.src}
                  alt={template.alt}
                />
                <div className="position-absolute">
                  <p style={{ fontFamily: 'Poppins' }} className="fw-bold">View Template</p>
                  <p style={{ fontFamily: 'Poppins' }}>{template.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className="text-center" style={{ backgroundColor: '#6f2ef4', padding: '2rem', marginTop: '7rem' }}>
          <h1 className="display-4 text-light" style={{ letterSpacing: '1.2px', marginTop: '2.8rem' }}>
            Read Customer Reviews
          </h1>
          <p className="lead text-light" style={{ marginTop: '1.6rem', letterSpacing: '0.5px' }}>
            Over 8,000+ sites across many industries use Sabnode to boost conversions. Customers rated Sabnode an average 4.7 out of 5 stars.
          </p>

          <Figure>
            <img
              className="img-fluid"
              src={require("../assets/img/sabnode-bio-links-66/6.webp")}
              alt="Customer Image"
              style={{ borderRadius: '50%', width: '30rem', height: 'auto', marginTop: '3rem' }}
            />
          </Figure>

          <div className="mb-3">
            <blockquote className="blockquote">
              <p className="mb-3 d-block w-75 mx-auto" style={{ color: '#ddd' }}>
                I have abandoned all the apps I was using before because Sabnode solves the marketing problem under one dashboard and it is easy and cost-effective. With Sabnode, I was able to save about 45% of what I was spending before and sales increased by 29%. If you are still thinking about getting Sabnode, jump in right away. You have everything to gain, nothing at all to lose.
              </p>
            </blockquote>
            <div className="review-stars mb-3">⭐⭐⭐⭐⭐</div>
            <footer className="blockquote-footer text-light">
              Yaren Öksz <cite title="Marketing Specialist">Marketing Specialist</cite>
            </footer>
          </div>
        </Container>
      </section>

      <section className="p-5">
        <div className="container">
          <h1 className="text-center">
            CHOOSE YOUR <span className="text-purple">PLAN</span>
          </h1>

          <div className="d-flex gap-5" style={{ marginTop: '5rem' }}>
            <button
              className={`plan-btn fw-bold fs-4 text-light ${isMonthly ? 'active' : ''} px-5 py-2 rounded-5 w-50`}
              style={{
                fontFamily: 'Poppins, sans-serif',
                outline: 'none',
                border: 'none',
                backgroundColor: isMonthly ? '#6f2ef4' : '#B787FF'
              }}
              onClick={() => {
                setIsMonthly(true);
                console.log('Monthly clicked', isMonthly);
              }}
            >
              Monthly
            </button>
            <button
              className={`plan-btn fw-bold fs-4 text-light ${!isMonthly ? 'active' : ''} px-5 py-2 rounded-5 w-50`}
              style={{
                fontFamily: 'Poppins, sans-serif',
                outline: 'none',
                border: 'none',
                backgroundColor: !isMonthly ? '#6f2ef4' : '#B787FF'
              }}
              onClick={() => {
                setIsMonthly(false);
                console.log('Yearly clicked', isMonthly);
              }}
            >
              Yearly
            </button>
          </div>

          <div className="container-fluid py-5">
            <div className="row g-3">
              {plans.map((plan, index) => (
                <div className="col-lg-3 p-0 col-md-6" key={index}>
                  <div className="pricing-card h-100 rounded-4 p-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <h3 className="plan-header text-purple" style={{fontWeight: 700, fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}>{plan.title}</h3>
                    <p className="text-dark" style={{ fontSize: '0.875rem', fontFamily: 'Poppins, sans-serif' }}>
                      {isMonthly ? 'Billed monthly' : 'Save'} (${isMonthly ? plan.monthlyPrice : plan.yearlySavePrice})
                    </p>
                    <p
                      style={{
                        fontSize: '3rem',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                      className="fw-bold mb-3 text-lg-start text-center text-purple"
                    >
                      ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}{' '}
                      <sub className="text-dark fs-5">USD / mo</sub>
                    </p>
                    <button className="btnAll w-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Buy Now
                    </button>
                    <p
                      className="text-dark mt-3 fw-medium"
                      style={{
                        fontSize: '0.75rem',
                        marginRight: '4rem',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      Access all features ⭐⭐⭐⭐⭐
                    </p>
                    <ul className="ms-0 ps-0 text-dark text-start mt-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="fa-regular fa-square-check text-purple"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="p-5 last-section">
        <Container fluid="xl">
          <Row className="g-4">
            {/* Image Section */}
            <Col lg={6}>
              <img
                src="https://sabnode.com/wp-content/uploads/2023/11/convert-visitor-into-customer-e-commerce.jpg"
                alt="Image showing e-commerce concept with a call to convert visitors into customers"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </Col>

            {/* Text Section */}
            <Col lg={6}>
              <p className="fw-bold ls-tight mb-3">BUILD YOUR ONLINE EMPIRE</p>
              <h1>Turn your Visitors into <span className="text-purple">Customers</span></h1>
              <p className="mb-3">The digital world moves at lightning speed. It’s constantly evolving and improving, and so are your customer’s needs and desires. For businesses that succeed in the digital world, the sky’s the limit. For those that don’t, they’re doomed to failure…</p>
              <p className="mb-2">If your business isn’t succeeding online, you’re missing out on millions of potential customers and unlimited profits. Every day gets worse as your loyal customers find new companies online. But don’t worry, Marketing Master Sabnode has EVERYTHING you need to help your business succeed online.</p>

              {/* Button Section */}
              <div className="d-flex justify-content-center justify-content-lg-start mt-5 mb-2">
                <Button className="btnAll" aria-label="Get Started for Free">
                  GET STARTED FOR FREE <i className="fa-solid fa-rocket"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  )
}

export default Marketing;