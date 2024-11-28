import '../assets/css/jayant.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Col, Container, Row, Button, Card, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';


function SmsTextWithCustomers() {
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
                <title>SMS Text With Customers - in</title>
            </Helmet>
            <section className="pt-3 mt-5">
                <Container className="mb-5 mt-5">
                    <Row className="align-items-center">
                        <Col lg={12} className="text-lg-center mb-4 mb-lg-0">
                            <div>
                                <h2 className="folower_h2">
                                    <span className="text-purple">Increase Your Reach with</span> SMS Messaging
                                </h2>
                                <br />
                                <p className="mb-3">
                                    85% of customers prefer to receive a text message over a call or Email. Reach
                                    more customers by incorporating SMS messaging in your campaigns.
                                </p>
                                <br />
                                <Button className="rounded btnAll mt-4 mb-4">
                                    GET STARTED <i className="fa-solid fa-rocket"></i>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-3">
                <Container className="mb-5">
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <img
                                className="img-fluid object-fit-cover h-100 w-100"
                                src={require('../assets/img/sms-text-with-customers/sender_sms_campaign-1024x600-1.jpeg')}
                                alt="img"
                                style={{ borderRadius: "10px 10px 10px 10px" }}
                            />
                        </Col>
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                            <div className="justify-content-start">
                                <p>REACH EVERYONE, INSTANTLY</p>
                                <h2 className="video_h2">
                                    <span className="text-purple">
                                        Run high-performing
                                        <br />
                                    </span>
                                    campaigns
                                </h2>
                                <p>
                                    90% of text messages are read within 3 minutes, making SMS a great channel
                                    for time-sensitive messages. Boost your conversions by sending subscribers
                                    sales, coupons, and drip content via SMS.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-3">
                <Container className="mb-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                            <div className="justify-content-start">
                                <p>SABNODE MADE EASY</p>
                                <h2 className="video_h2">
                                    <span className="text-purple">Connect with customers<br /></span>
                                    on any channel
                                </h2>
                                <p>
                                    Start a conversation on Facebook Messenger or Instagram and keep it going via SMS. Or,
                                    re-engage them on SMS to drive back to Messenger or Instagram–the possibilities are endless.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <img
                                className="img-fluid object-fit-cover h-100 w-100"
                                src={require('../assets/img/sms-text-with-customers/Social-media-advertising-and-design-tips-1.jpg')}
                                alt="Connect with customers"
                                style={{ borderRadius: '10px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-3">
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
                                <p>PERSONALIZE EVERY CONVERSATION</p>
                                <h2 className="video_h2">
                                    <span className="text-purple">Make every conversational<br /></span>
                                    feel personal
                                </h2>
                                <p>
                                    Segment and send updates, appointment reminders, customized content, special offers, and more.
                                    Choose an audience based on their interactions with your brand.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-3">
                <Container className="mb-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                            <div className="justify-content-start">
                                <p>EXPERIENCES THAT FEEL HUMAN</p>
                                <h2 className="video_h2">
                                    <span className="text-purple">Engage customers<br /></span>
                                    with a conversation
                                </h2>
                                <p>
                                    Build automated, personal texting journeys in Flow Builder. Have a real person take over at
                                    any time with Live Chat.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <img
                                className="img-fluid object-fit-cover h-100 w-100"
                                src={require('../assets/img/sms-text-with-customers/Whatsapp_chatbot_integration_hero1.png')}
                                alt="Engage customers"
                                style={{ borderRadius: '10px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-3">
                <Container className="mb-5">
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <img
                                className="img-fluid object-fit-cover h-100 w-100"
                                src={require('../assets/img/sms-text-with-customers/How-Do-You-Collect-Feedback-on-Chatbots-1024x512.png')}
                                alt="Collect Reviews and Feedback"
                                style={{ borderRadius: '10px' }}
                            />
                        </Col>
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                            <div className="justify-content-start">
                                <p>NEVER STOP LISTENING</p>
                                <h2 className="video_h2">
                                    <span className="text-purple">Collect Reviews</span> and Feedback
                                </h2>
                                <p>
                                    Let customers share their opinion in a single character or send them to a rich survey experience. Set up a smart delay
                                    to remind them to complete a review after they’ve received their purchase.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-3">
                <Container className="mb-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                            <div className="justify-content-start">
                                <p>NURTURE YOUR CUSTOMERS</p>
                                <h2 className="video_h2">
                                    <span className="text-purple">Create delightful</span> SMS drip campaigns
                                </h2>
                                <p>
                                    From 7-day challenges to monthly newsletters, use SMS to nurture your customers toward conversion.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <img
                                className="img-fluid object-fit-cover h-100 w-100"
                                src={require('../assets/img/sms-text-with-customers/Customer-lists-and-drip-campaigns@2x-2.png')}
                                alt="Create delightful SMS drip campaigns"
                                style={{ borderRadius: '10px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-3">
                <Container className="mb-5">
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <img
                                className="img-fluid object-fit-cover h-100 w-100"
                                src={require('../assets/img/sms-text-with-customers/3-1024x768.jpeg')}
                                alt="Collect phone numbers"
                                style={{ borderRadius: '10px' }}
                            />
                        </Col>
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                            <div className="justify-content-start">
                                <p>HELP YOUR CUSTOMERS TO BUY</p>
                                <h2 className="video_h2">
                                    <span className="text-purple">Collect phone numbers</span> from your site
                                </h2>
                                <p>
                                    Let your customers easily share their phone numbers with you when they visit your eCommerce
                                    store so you can send text order updates or abandoned cart reminders.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-3">
                <Container className="mb-5">
                    <Row>
                        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center">
                            <div className="justify-content-start">
                                <p>TELL A RICHER STORY</p>
                                <h2 className="video_h2">
                                    <span className="text-purple">Get Creative with</span> Multimedia Messaging
                                </h2>
                                <p>
                                    Share photos to show off your product gallery, send coupon QR codes to drive sales or just stay connected during special moments like birthdays and anniversaries with funny gifs.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <img
                                className="img-fluid object-fit-cover h-100 w-100"
                                src={require('../assets/img/sms-text-with-customers/timelne_image.png')}
                                alt="Get Creative with Multimedia Messaging"
                                style={{ borderRadius: '10px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 px-1">
                <Container fluid>
                    <Row>
                        <Col md={12} className="text-center d-flex flex-column pt-4 px-3">
                            <h2 className="folower_h2 mt-3">
                                Why <span className="text-purple">Sabnode?</span>
                            </h2>
                        </Col>
                        <Col md={12} className="text-center pt-4 px-3 mb-5 pb-3">
                            <Row className="g-3">
                                {/* Feature Card 1 */}
                                <Col lg={4} md={6} sm={12} className="mb-4">
                                    <Card className="card_style h-100 border-0">
                                        <Card.Body>
                                            <i className="fa-solid fa-users fa-2xl mb-3" style={{ color: '#772ae7' }}></i>
                                            <h3 className="mt-2">1M+ Customers</h3>
                                            <p className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Over one million businesses chose Sabnode to grow
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Feature Card 2 */}
                                <Col lg={4} md={6} sm={12} className="mb-4">
                                    <Card className="card_style h-100 border-0">
                                        <Card.Body>
                                            <i className="fa-solid fa-file-zipper fa-2xl mb-3" style={{ color: '#772ae7' }}></i>
                                            <h3 className="mt-2">1B+ Conversations</h3>
                                            <p className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Over one billion conversations powered by Sabnode annually
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Feature Card 3 */}
                                <Col lg={4} md={6} sm={12} className="mb-4">
                                    <Card className="card_style h-100 border-0">
                                        <Card.Body>
                                            <i className="fa-solid fa-map-location-dot fa-2xl mb-3" style={{ color: '#772ae7' }}></i>
                                            <h3 className="mt-2">190+ Countries</h3>
                                            <p className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Businesses send messages via Sabnode in over 190 countries
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 px-1">
                <Container fluid>
                    <Row>
                        <Col md={12} className="text-center d-flex flex-column pt-4 px-3">
                            <h2 className="sms_h2 mt-3">
                                <span className="text-purple">Looking for </span> an Expert
                            </h2>
                            <p className="sms_p">
                                Our experts can help you craft your marketing strategy and create killer funnels to grow your business.
                            </p>
                        </Col>
                        <Col md={12} className="text-center pt-4 px-3">
                            <Button className="rounded btnAll mb-5">
                                GET STARTED <i className="fa-solid fa-rocket"></i>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 px-1 mt-3">
                <Container fluid>
                    <Row>
                        <Col md={12} className="text-center d-flex flex-column pt-4 px-3 mt-5">
                            <h2 className="entrepreneur">
                                Trusted by <span className="text-purple">40M+ Brands</span>
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="text-center pt-4 px-3 mb-5 pb-4">
                            <img
                                className="img-fluid"
                                width="1024"
                                height="98"
                                src={require('../assets/img/sms-text-with-customers/Manychat-for-Instagram.png')}
                                alt="Manychat for Instagram"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="faq container-xl container-fluid">
                <h2 className=" frequently_asked_questions display-5 text-center mt-5 mb-3 pt-5">
                    Frequently Asked Questions
                </h2>
                <hr style={{ width: '73%', margin: 'auto' }} />
                <Accordion id="accordionPanelsStayOpenExample" alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            What is Sabnode's SMS Pricing Policy?
                        </Accordion.Header>
                        <Accordion.Body>

                            The SMS channel is only available on the PRO plan. Payments related to sending or receiving SMS are handled directly by Twilio. You can consult Twilio’s pricing to determine your pricing through Twilio.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Can Sabnode Receive SMS Messages?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes! Sabnode can send and receive SMS messages from phone numbers bought in Twilio. We enable 2-way conversation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            How Many Characters Can I Use in One SMS Message?
                        </Accordion.Header>
                        <Accordion.Body>
                            SMS messages are limited to 160 characters. You can send up to 640 characters (charged as four text messages) in a single Sabnode message. If you need more than 640 characters, you can send follow-up messages.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            How Do I Activate SMS?
                        </Accordion.Header>
                        <Accordion.Body>
                            SMS messaging is available for Sabnode Pro users. You can learn how to get started with this channel on our help center. To use the SMS channel, you only need a Sabnode account and a phone number purchased from Sabnode.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
            <Footer/>
        </>
    );
}

export default SmsTextWithCustomers;