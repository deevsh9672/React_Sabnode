import React from 'react';
import { Container, Row, Col, Button,Card ,Carousel,Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../assets/css/ajay.css'
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';


const AutomateSales = () => {
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
                <title>Instagram Automation - in</title>
            </Helmet>
<Container className="px-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5 px-5">
      <Col xs={10} sm={8} lg={6}>
      <img 
        src={require('../assets/img/WhatsApp connect with Customers/Automate.png')} // Adjust path accordingly
        className="d-block mx-lg-auto img-fluid" 
        alt="Automate on WhatsApp" 
        width="700" 
        height="500" 
        loading="lazy" 
      />
    </Col>
        <Col lg={6}>
          <h1 className="display-3 text-body-emphasis lh-1 mb-3 head-1">
            <span className="text-purple">Automate & sell on WhatsApp</span> like never before
          </h1>
          <p className="mb-3">Boost sales, automate answers, and reengage your contacts with ease.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button variant="primary" size="lg" className="px-4 me-md-2 btnAll">
              GET STARTED
            </Button>
          </div>
        </Col>
      </Row>
    </Container>

<Container>
<Row className="text-center bg-body-tertiary">
  <Col className="py-5 w-75 mx-auto">
    <h4 className="display-3 text-body-emphasis">
      <span className="text-purple">All your chats, leads,</span> and sales in one place, on one number. Always
    </h4>
  </Col>
</Row>

<Row>
  <Col md={4} className="text-center pt-5" style={{ backgroundColor: '#96dae2' }}>
    <Card className="border-0 mx-3" style={{ backgroundColor: '#96dae2' }}>
      <Card.Header className="bg-transparent border-0 p-0">
        <h3 className="mt-2">Automated responses, no delays. Ever.</h3>
      </Card.Header>
      <Card.Body className="p-0">
        <p>
          Respond to leads without wasting precious time. Automate answers to repetitive questions, letting
          automation take the wheel before a human is even needed. Don't worry - your human agents can
          step in at any time!
        </p>
      </Card.Body>
      <Card.Footer className="border-0 bg-transparent p-0 pt-4">
        <img src={require("../assets/img/WhatsApp connect with Customers/fletchergoods.webp")} alt="" style={{ width: 'auto', height: '450px' }} />
      </Card.Footer>
    </Card>
  </Col>

  <Col md={4} className="text-center pt-5" style={{ backgroundColor: '#e1e08f' }}>
    <Card className="border-0 mx-3" style={{ backgroundColor: '#e1e08f' }}>
      <Card.Header className="bg-transparent border-0 p-0 pt-4">
        <h3>Convert more customers with WhatsApp Broadcasts</h3>
      </Card.Header>
      <Card.Body className="p-0">
        <p>
          Run high-converting remarketing campaigns on WhatsApp. Reengage your entire contacts list at once, and
          take advantage of 1,000 free business-initiated messages every month.
        </p>
      </Card.Body>
      <Card.Footer className="border-0 bg-transparent p-0 pt-4">
        <img src={require("../assets/img/WhatsApp connect with Customers/fletchergoods.webp")} alt="" style={{ width: 'auto', height: '450px' }} />
      </Card.Footer>
    </Card>
  </Col>

  <Col md={4} className="text-center pt-5" style={{ backgroundColor: '#d2b6de' }}>
    <Card className="border-0 p-0 mx-3" style={{ backgroundColor: '#d2b6de' }}>
      <Card.Header className="bg-transparent border-0 p-0">
        <h3>Empower Your Sales: One Number, Complete Overview.</h3>
      </Card.Header>
      <Card.Body className="p-0">
        <p>
          Create a system where every agent, every lead, every conversation is assigned and answered on a single
          phone number. Keep track of open conversations and interested leads for a 360-degree view of your sales
          process.
        </p>
      </Card.Body>
      <Card.Footer className="border-0 bg-transparent p-0 pt-5">
        <img src={require("../assets/img/WhatsApp connect with Customers/fletchergoods.webp")} alt="" style={{ width: 'auto', height: '450px' }} />
      </Card.Footer>
    </Card>
  </Col>
</Row>
</Container>


    <div>
      {/* First Section */}
      <Row className="text-center bg-body-tertiary">
        <Col className="py-5">
          <Container>
            <h2 className="display-4">
              <span className="text-purple">24/7 lead qualification,</span> remarketing, and sales
            </h2>
            <div className="mt-5">
              <Button variant="primary" size="lg" className="btnAll">
                GET STARTED
              </Button>
            </div>
          </Container>
        </Col>
      </Row>

      {/* Second Section */}
      <Container className="px-5 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5 px-5">
          <Col lg={6}>
            <h1 className="text-body-emphasis lh-1 mb-3 head-1">
              <span className="text-purple">Qualified Leads <br /></span> automatically
            </h1>
            <p>
              Qualify leads and assign them to your sales team instantly. Give priority to high-potential buyers,
              ensuring you never miss an opportunity.
            </p>
          </Col>
          <Col xs={10} sm={8} lg={6}>
            <img
              src={require("../assets/img/WhatsApp connect with Customers/Qualified Leads.jpg")}
              className="d-block mx-lg-auto img-fluid"
              alt="Qualified Leads"
              loading="lazy"
              style={{ borderRadius: '20px' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Third Section */}
      <Container className="px-5 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5 px-5">
          <Col xs={10} sm={8} lg={6}>
            <img
              src=
              {require("../assets/img/WhatsApp connect with Customers/Drive leads.webp")}
              className="img-fluid"
              alt="Drive Leads"
              width="500px"
              height="auto"
            />
          </Col>
          <Col lg={6}>
            <h1 className="text-body-emphasis lh-1 mb-3 head-1">
              <span className="text-purple">Drive leads from ads directly </span>to WhatsApp, day and night
            </h1>
            <p>
              No more pausing your campaigns during busy times! With automation, not only can you automatically qualify leads
              from ads when your human agents are offline, but they can also pick up the conversation at any time.
            </p>
          </Col>
        </Row>
      </Container>
    </div>



    <div>
      {/* First Section: Top-tier security */}
      <Container className="px-5 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5 px-5">
          <Col lg={6}>
            <h1 className="text-body-emphasis lh-1 mb-3 head-1">
              <span className="text-purple">Top-tier security</span> that gives you peace of mind
            </h1>
            <p>
              Feel confident knowing your sensitive data is safe thanks to robust security protocols. Plus, you’re in
              control with roles management, ensuring the right people have the right permissions – no more, no less.
            </p>
          </Col>
          <Col xs={10} sm={8} lg={6}>
            <img
              src={require("../assets/img/WhatsApp connect with Customers/ Top-tier security.png")}
              className="img-fluid"
              alt="Digital Security"
            />
          </Col>
        </Row>
      </Container>

      {/* Second Section: Integrate with the tools */}
      <Container className="px-5 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5 px-5">
          <Col xs={10} sm={8} lg={6}>
            <img
              src={require("../assets/img/WhatsApp connect with Customers/Integrate with the tools.jpg")}
              className="img-fluid"
              alt="WhatsApp Sales Header"
              width="500px"
              height="auto"
              style={{ borderRadius: '20px' }}
            />
          </Col>
          <Col lg={6}>
            <h1 className="text-body-emphasis lh-1 mb-3 head-1">
              <span className="text-purple">Integrate with the tools</span> you love
            </h1>
            <p>
              Connect to your CRM or Google Sheets, and let your sales agents fall into place as leads are automatically
              assigned and actioned.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Third Section: No tech experience */}
      <Container className="px-4 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5 px-5">
          <Col lg={6}>
            <h1 className="text-body-emphasis lh-1 mb-3 head-1">
              <span className="text-purple">No tech experience? No worries </span> — let our AI Assistant help
            </h1>
            <p>
              Our intuitive AI Assistant can generate a WhatsApp chatbot conversation in minutes. Don’t like what’s
              generated? Don’t worry — you can regain control in just a few clicks.
            </p>
          </Col>
          <Col xs={10} sm={8} lg={6}>
            <img
              src={require("../assets/img/WhatsApp connect with Customers/No tech experience.png")}
              className="img-fluid"
              alt="Digital Security"
              style={{ borderRadius: '20px' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Fourth Section: Trusted by 1M+ Brands */}
      <Row className="text-center bg-transparent">
        <Col className="py-5">
          <Container>
            <h2 className="display-4 text-body-emphasis">
              Trusted by <span className="text-purple">1M+ Brands</span>
            </h2>
            <div>
              <img
                src={require("../assets/img/WhatsApp connect with Customers/Trusted by.png")}
                alt="Trusted by"
                style={{
                  width: '100%',
                }}
              />
            </div>
          </Container>
        </Col>
      </Row>

      {/* Fifth Section: Quality Feedbacks (Carousel) */}
      <Container fluid style={{ backgroundColor: '#772AE7' }}>
        <h2 className="text-center pt-4 display-4 text-light">Quality Feedbacks</h2>
        <h5 className="text-center text-light">Worldwide Client’s Feedbacks</h5>

        <Carousel id="testimonialCarousel" className="carousel slide" data-ride="carousel">
          <Carousel.Item className="carousel-inner">
            <div className="text-center">
              <p className="text-light my-4">
                At Gold's Gym Costa Rica, Sabnode hasn't just been about tech; it's been about heart. Starting with just
                Messenger and then branching into Instagram and WhatsApp, we've built communities, connected stories, and
                crafted real experiences. Every small-to-medium enterprise looking to build authentic connections, trust when
                I say this: Sabnode is your bridge. We did it, and so can you. Let's inspire and get inspired!
              </p>

              <img
                src={require("https://sabnode.com/wp-content/uploads/2023/11/testimonial_golds-gym.webp")}
                alt="Gold's Gym"
                style={{ width: '400px', borderRadius: '20px' }}
              />
              <div className="testimonial-content pb-3">
                <div className="rating">
                  <i className="fa fa-star" style={{ color: '#FFD43B' }}></i>
                  <i className="fa fa-star" style={{ color: '#FFD43B' }}></i>
                  <i className="fa fa-star" style={{ color: '#FFD43B' }}></i>
                  <i className="fa fa-star" style={{ color: '#FFD43B' }}></i>
                  <i className="fa fa-star" style={{ color: '#FFD43B' }}></i>
                </div>
                <p className="text-light">FERNANDA MELENDEZ MUSSIO GOLD'S GYM COSTA RICA</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>


    <Container className="px-5 my-5" id="custom-cards">
      <h2 className="display-6 text-center head-1">
        How to get started with <span className="text-purple">ManyChat IG DM Marketing</span>
      </h2>
      
      <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {/* Step 1 */}
        <Col>
          <Card className="h-100 shadow-lg border-0" style={{ backgroundColor: '#edf2ed' }}>
            <Card.Body className="text-center">
              <h2 className="my-3">STEP 1</h2>
              <hr className="w-75 mx-auto" />
              <div className="elementor-icon-box-icon mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                  fill="none"
                >
                  <path
                    d="M28.0282 33.19C47.8938 16.6188 76.2128 31.3355 82.5529 78.0682C82.5529 57.2981 96.9237 13.3385 126.511 29.1102C165.397 49.8386 117.635 111.82 76.2128 140.749C50.0071 93.2749 0.639019 56.0371 28.0282 33.19Z"
                    fill="#FF4B00"
                  ></path>
                </svg>
              </div>
              <p>Join 1 million+ smart brands and sign up for a risk-free trial</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Step 2 */}
        <Col>
          <Card className="h-100 shadow-lg border-0" style={{ backgroundColor: '#edf2ed' }}>
            <Card.Body className="text-center">
              <h2 className="my-3">STEP 2</h2>
              <hr className="w-75 mx-auto" />
              <div className="elementor-icon-box-icon mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                  fill="none"
                >
                  <g clipPath="url(#clip0_765_21440)">
                    <path
                      d="M14.6805 75.9407C15.7832 45.7509 58.8951 36.8987 81.3007 36.4071C103.706 35.9155 151.443 37.7692 155.293 72.1308C160.001 114.149 75.6984 132.88 38.0054 107.672L7.17357 124.927L21.9283 94.0929C17.3729 89.0063 14.4245 82.951 14.6805 75.9407Z"
                      fill="#00F6FF"
                    ></path>
                  </g>
                </svg>
              </div>
              <p>Use the ManyChat automation tools to start engaging with your audience</p>
            </Card.Body>
          </Card>
        </Col>
{/* step 3 */}
        <Col>
      <Card className="card-cover h-100 overflow-hidden shadow-lg border-0" style={{ backgroundColor: '#edf2ed' }}>
        <h2 className="my-3 text-center">STEP 3</h2>
        <hr className="w-75 mx-auto" />
        <div className="elementor-icon-box-icon mx-auto">
          <span className="elementor-icon elementor-animation-">
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
              <g clipPath="url(#clip0_765_21474)">
                <path
                  d="M11.1416 89.3795C10.6647 85.0358 63.5356 62.0674 88.4907 51.815C70.6414 52.4574 49.3474 49.0838 47.6651 44.1669C46.6958 41.3339 53.1436 25.7154 57.6332 18.2925C61.1168 12.5328 131.01 35.2931 133.494 38.8271C136.831 43.5748 131.239 97.7137 130.71 100.513C130.181 103.313 104.669 101.807 100.124 99.0581C96.4875 96.8587 93.8482 82.2643 99.0785 68.2705C90.7127 76.3217 43.9649 129.025 41.2689 129.89C37.8988 130.971 11.7377 94.8093 11.1416 89.3795Z"
                  fill="#FA0CF7"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M119.758 101.978C112.064 101.782 102.705 100.621 100.121 99.0581C96.4851 96.8588 93.8457 82.2644 99.0761 68.2706C95.5495 71.6646 85.2022 82.9935 74.2095 95.029C66.7299 103.218 58.9515 111.734 52.8196 118.301C43.3887 111.881 36.5904 102.194 33.7698 91.0485C32.5583 86.2614 32.1202 81.3617 32.43 76.5263C49.8565 68.111 73.9256 57.7979 88.4883 51.8151C71.2591 52.4352 50.8205 49.3134 47.9081 44.6737C53.4263 39.7491 60.0892 36.1719 67.384 34.3257L67.403 34.3209C77.4077 31.795 87.9727 32.6854 97.4345 36.8519C106.896 41.0184 114.718 48.2243 119.667 57.3351C124.616 66.4459 126.412 76.9441 124.772 87.1768C123.936 92.3964 122.23 97.3956 119.758 101.978Z"
                  fill="#E5BDBE"
                ></path>
                <path
                  d="M67.066 34.5005C77.0707 31.9746 87.6357 32.865 97.0975 37.0315C106.559 41.198 114.381 48.4039 119.33 57.5147C124.279 66.6255 126.075 77.1237 124.435 87.3564C122.795 97.5891 117.813 106.975 110.272 114.036L115.445 129.536L99.2063 121.723C96.2591 123.179 93.1679 124.322 89.9829 125.132C78.0264 128.158 65.3513 126.286 54.7462 119.928C44.141 113.57 36.4744 103.246 33.4329 91.2281C30.3914 79.2102 32.2242 66.4825 38.5281 55.8449C44.832 45.2074 55.0906 37.5313 67.0471 34.5053L67.066 34.5005Z"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_765_21474">
                  <rect width="160" height="160" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <p className="text-center">Leverage Instagram to generate more conversions, sales, and revenue</p>
        </div>
      </Card>
    </Col>

      </Row>
    </Container>

    <Container className="my-5">
      <h2 className="display-5 text-center mt-5 mb-3">Frequently Asked Questions</h2>
      <hr style={{ width: '73%', marginLeft: 'auto', marginRight: 'auto' }} />
      
      <Accordion flush className="mt-3 " defaultActiveKey="0">
        {/* FAQ Item 1 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>How much does Sabnode for WhatsApp cost?</Accordion.Header>
          <Accordion.Body>
            <p className="my-4">
              Sabnode for WhatsApp is an additional charge on top of paying for Sabnode Pro. The pricing breaks
              down as the following:
            </p>
            <p className="my-4">
              Charged on a per new conversation basis (24-hour window) divided into two categories: Business-Initiated
              and Contact-Initiated. Your first 1000 conversations per month are free. 
              Pricing varies based on country. Learn more here.
              To use WhatsApp Automation, please load your Sabnode Wallet under Settings.
            </p>
            <p className="my-4">
              A Business-initiated conversation is when a business starts a conversation by sending a message to the
              contact for the first time, or 24 hours after the contact’s last message (24-hour messaging window).
              Business-initiated conversations must be sent via a Message Template.
            </p>
            <p className="my-4">
              A Contact-initiated conversation is when a business starts a conversation by replying to a contact’s message.
              This type of conversation includes anytime a business replies to a contact within the 24-hour messaging window.
              Businesses can send an unlimited number of messages of any type during this window.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* FAQ Item 2 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I integrate my WhatsApp account with other Sabnode channels?</Accordion.Header>
          <Accordion.Body>
            <p className="my-4">
              Yes, you can connect your WhatsApp number to an already existing Sabnode account.
            </p>
            <p className="my-4">
              On the Flow level, while you cannot connect WhatsApp messages directly to other channels currently, 
              you can collect emails and phone numbers to re-engage using Sabnode email and/or SMS channels in the future.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* FAQ Item 3 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do I need a phone number to use Sabnode for WhatsApp?</Accordion.Header>
          <Accordion.Body>
            <p className="my-4">
              Yes, to use Sabnode for WhatsApp you will need a unique phone number.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* FAQ Item 4 */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Are conversations viewable and answerable on the mobile WhatsApp Business App?</Accordion.Header>
          <Accordion.Body>
            <p className="my-4">
              After connecting, your conversations will not be viewable and answerable on the mobile WhatsApp Business
              App but are easily viewable within the Sabnode Live Chat interface.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  
      <Accordion flush className="" defaultActiveKey="0">
        {/* FAQ Item 1 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Are existing phone numbers compatible with Sabnode?</Accordion.Header>
          <Accordion.Body>
            <p className="my-4">
              While they can be, we strongly recommend using a new phone number that is not currently in use with other WhatsApp apps.
            </p>
            <p className="my-4">
              If you’d want to use an existing phone number in the future for other WA apps in the future (e.g., for WhatsApp Business App or personal WhatsApp app), save it and use a brand new number.
            </p>
            <p className="my-4">
              You can also use the number provided by Sabnode (available only if WhatsApp is activated as an additional channel in your existing account).
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* FAQ Item 2 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Is Facebook Business Manager verification required?</Accordion.Header>
          <Accordion.Body>
            <p className="my-4">
              For all customer-initiated conversations (inbound messaging), Business Verification is not a necessary step to get started.
            </p>
            <p className="my-4">
              For business-initiated conversations (outbound messaging), businesses will need to go through the Facebook Business Manager verification process to gain this access. We will walk you through the approval process.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* FAQ Item 3 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Are you allowed to switch to Sabnode from another Business Solution Provider (BSP)?</Accordion.Header>
          <Accordion.Body>
            <p className="my-4">
              Yes, if you’d like to do so and keep your old number, please contact our support team.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* FAQ Item 4 */}
        <Accordion.Item eventKey="3" className="border-bottom">
          <Accordion.Header>Do I need a website to use Sabnode Bio Link?</Accordion.Header>
          <Accordion.Body>
            <p className="my-4">
              Yes, until one of the following things happens:
            </p>
            <p className="my-4">
              1. 30 days pass from the moment of successful phone number connection. <br />
              2. 1000 contacts are gained. <br />
              3. First 1000 free conversations end.
            </p>
            <p className="my-4">
              After one of those actions happens, Manychat for WhatsApp will only be available for Pro accounts.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
<Footer/>
</>


  );
};

export default AutomateSales;
