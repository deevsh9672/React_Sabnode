import React from 'react'
import { Button, Container, Row, Col,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCirclePlay ,faSquareCheck} from '@fortawesome/free-solid-svg-icons';
import '../assets/css/caursel_rtl.css'
import '../assets/css/crausel.css'
import '../assets/css/shivam.css'
import ScrollToTop from '../components/ScrollToTop';

function MarketingMaster() {

    const plans = [
        {
           title: "ROOKIE",
           price: "$29",
           duration: "per month",
           buyInINR: "₹2265 /mo",
           description: "Best suited for Start-Ups",
        },
        {
           title: "PRO",
           price: "$49",
           duration: "per month",
           buyInINR: "₹4022 /mo",
           description: "Best suited for SMEs",
        },
        {
           title: "ADVANCED",
           price: "$99",
           duration: "per month",
           buyInINR: "₹6453 /mo",
           description: "Best suited for Enterprises",
        },
     ];
  
     const features = [
        "Drag & Drop Email Builder",
        "SMTP Routing",
        "Automations",
        "Add Multiple SMTPs",
        "Unlimited Custom Field",
        "In-built SMTP Included",
        "Auto-followups",
        "Connect External SMTPs",
        "Import Emails",
        "Marketing Automation",
        "Email Personalization",
        "Segmentation",
        "Email & Chat Support",
        "Throttle Emails",
        "Webform",
     ];
  return (
<>
    <div>MarketingMaster</div>


    <div>
    <ScrollToTop />

    <Container className="marketing">
       {/* Featurette 1 */}
       <Row className="featurette p-5">
          <Col md={7}>
             <h2 className="featurette-heading" style={{ lineHeight: '1.3' }}>
                <span className="text-purple">
                   The All-in-one Online Marketing Solution
                </span> 
                For Your Business
             </h2>
             <div className="d-flex gap-lg-5 mt-lg-5">
                <Button variant="primary" className="btnAll">
                   Get Started Free <FontAwesomeIcon icon={faRocket} />
                </Button>
                <Button variant="primary" className="btnAll">
                   Watch Demo <FontAwesomeIcon icon={faCirclePlay} />
                </Button>
             </div>
             <div className="d-lg-flex gap-lg-5">
                <img
                   src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/Meta-Badge.webp"
                   alt="Meta Business Partner"
                   width="200px"
                />
                <span className="m-lg-2">
                   CERTIFIED META BUSINESS PARTNER. Meta Business Partners help build scaled solutions for businesses across Facebook products and services for messaging, and help them drive best-in-class business outcomes for their clients.
                </span>
             </div>
          </Col>
          <Col md={5} className="mt-5 pt-5">
             <video
                className="elementor-video"
                src="https://sabnode.com/wp-content/uploads/2023/11/VID-20231109-WA0000.mp4"
                autoPlay
                loop
                muted
                controlsList="nodownload"
                style={{ width: '100%', height: '100%' }}
             />
          </Col>
       </Row>

       <hr />

       <Container>
          <h2 className="text-center mt-5" style={{ lineHeight: '1.3' }}>
             Everything You Need, <span className="text-purple">In One Place</span>
          </h2>
          <p className="mt-4 text-center mb-lg-5">
             You know what it’s like trying to set systems online, it can be a nightmare, right? Normally, you need to subscribe to loads of different platforms to take care of all this. Not only does this cost you a fortune in monthly subscriptions. But it also drains your time as you painstakingly learn how to use each platform. With Marketing Master IO, you get all this in one place. So you can conquer the online world with ease and in no time at all.
          </p>
       </Container>

       <div className="container text-center position-relative">
          <video
             className="elementor-video"
             src="https://sabnode.com/wp-content/uploads/2023/11/VID-20231109-WA0000.mp4"
             autoPlay
             loop
             muted
             controlsList="nodownload"
             style={{ width: '100%', height: '100%' }}
          />
          <FontAwesomeIcon icon={faCirclePlay} className="position-absolute top-50 start-50 translate-middle fs-1" />
       </div>

       <hr className="featurette-divider" />

       {/* Featurette 2 */}
       <Row className="featurette p-lg-5">
          <Col md={7} className="order-md-2">
             <h2 className="featurette-heading" style={{ lineHeight: '1.3' }}>
                <span className="text-purple lin"> Build chatbots for Messenger, </span>
                <span className="text-body-secondary">Instagram, WhatsApp and Google Messages.</span>
             </h2>
             <p className="lead">Connect with new customers every day – Create instant engagement – Build an army of loyal fans</p>
             <div className="d-flex gap-lg-5 mt-lg-5">
                <Button variant="primary" className="btnAll">
                   Get Started Free <FontAwesomeIcon icon={faRocket} />
                </Button>
                <Button variant="primary" className="btnAll">
                   Watch Demo <FontAwesomeIcon icon={faCirclePlay} />
                </Button>
             </div>
          </Col>
          <Col md={5} className="order-md-1">
             <img
                src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/image-1331x1536.webp"
                alt="Chatbot Image"
                style={{ width: '100%' }}
             />
          </Col>
       </Row>

       <hr className="featurette-divider" />

       {/* Featurette 3 */}
       <Row className="featurette p-lg-5">
          <Col md={7}>
             <h2 className="featurette-heading" style={{ lineHeight: '1.3', color: '#181818', fontFamily: 'Anton, Sans-serif', fontSize: '28px', fontWeight: 500, letterSpacing: '1.2px' }}>
                <span className="text-purple">Create a high converting </span>
                <span>E-Commerce stores.</span>
             </h2>
             <p className="lead">
                Increase your average order value (AOV) with one-click upsells. Rescue lost customers with abandon cart recovery messages. Maximize your store with physical & digital products.
             </p>
             <div className="d-flex gap-lg-5 mt-lg-5">
                <Button variant="primary" className="btnAll">
                   Get Started Free <FontAwesomeIcon icon={faRocket} />
                </Button>
                <Button variant="primary" className="btnAll">
                   Watch Demo <FontAwesomeIcon icon={faCirclePlay} />
                </Button>
             </div>
          </Col>
          <Col md={5}>
             <img
                src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/payment-1536x1152.webp"
                alt="E-Commerce Image"
                style={{ width: '100%' }}
             />
          </Col>
       </Row>

       <hr className="featurette-divider" />

       {/* Featurette 4 */}
       <Row className="featurette">
          <Col md={7} className="order-md-2">
             <h2 className="featurette-heading" style={{ lineHeight: '1.3', color: '#181818', fontFamily: 'Anton, Sans-serif', fontSize: '28px', fontWeight: 500, letterSpacing: '1.2px' }}>
                <span className="text-purple">FB Livestream Selling </span>
                <span>Automation</span>
             </h2>
             <p className="lead">
                Automatically reply to all comments and send private messenger chat – auto export customers to Google sheet
             </p>
             <div className="d-flex gap-lg-5 mt-lg-5">
                <Button variant="primary" className="btnAll">
                   Get Started Free <FontAwesomeIcon icon={faRocket} />
                </Button>
                <Button variant="primary" className="btnAll">
                   Watch Demo <FontAwesomeIcon icon={faCirclePlay} />
                </Button>
             </div>
          </Col>
          <Col md={5} className="order-md-1">
             <img
                src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/image-1331x1536.webp"
                alt="FB Livestream Image"
                style={{ width: '100%' }}
             />
          </Col>
       </Row>
    </Container>




 </div>


 <div>
         {/* Featurette 1 */}
         <hr className="featurette-divider" />
         <Row className="featurette">
            <Col md={7}>
               <h2 className="featurette-heading" style={{ lineHeight: '1.3' }}>
                  <span className="text-purple">Automatically Reply to your Facebook and </span>
                  <span>Instagram Post's Comments</span>
               </h2>
               <p className="lead">
                  Force Facebook to show your posts to more people by employing the comment automation with auto follow-ups for Messenger and Instagram
               </p>
               <div className="d-flex gap-lg-5 mt-lg-5">
                  <Button variant="primary" className="btnAll">
                     Get Started Free <FontAwesomeIcon icon={faRocket} />
                  </Button>
                  <Button variant="primary" className="btnAll">
                     Watch Demo <FontAwesomeIcon icon={faCirclePlay} />
                  </Button>
               </div>
            </Col>
            <Col md={5}>
               <img
                  src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/payment-1536x1152.webp"
                  alt=""
                  style={{ width: '100%' }}
               />
            </Col>
         </Row>
         <hr className="featurette-divider" />

         {/* Featurette 2 */}
         <Row className="featurette">
            <Col md={7} className="order-md-2">
               <h2 className="featurette-heading" style={{ lineHeight: '1.3' }}>
                  <span className="text-purple">Send SMS and Email broadcasts</span>
                  <span className="text-dark"> or drip campaigns</span>
               </h2>
               <p className="lead">
                  Easily build high-converting Email marketing campaigns with our drag-and-drop email campaign builder
               </p>
               <div className="d-flex gap-lg-5 mt-lg-5">
                  <Button variant="primary" className="btnAll">
                     Get Started Free <FontAwesomeIcon icon={faRocket} />
                  </Button>
                  <Button variant="primary" className="btnAll">
                     Watch Demo <FontAwesomeIcon icon={faCirclePlay} />
                  </Button>
               </div>
            </Col>
            <Col md={5} className="order-md-1">
               <img
                  src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/image-1331x1536.webp"
                  alt=""
                  style={{ width: '100%' }}
               />
            </Col>
         </Row>
         <hr className="featurette-divider" />

         {/* Templates Section */}
         <Container>
            <h2 className="text-center mt-5">
               <span className="text-purple">Multiple </span> Built-In Templates
            </h2>
            <p className="mt-4 text-center mb-lg-5">
               You know what it’s like trying to set systems online, it can be a nightmare, right? Normally, you need to subscribe to loads of different platforms to take care of all this. Not only does this cost you a fortune in monthly subscriptions, but it also drains your time as you painstakingly learn how to use each platform. With Marketing Master IO, you get all this in one place. So you can conquer the online world with ease and in no time at all.
            </p>
            <div className="d-flex gap-lg-5 mt-lg-5 justify-content-center">
               <Button variant="primary" className="btnAll">
                  Get Started Free <FontAwesomeIcon icon={faRocket} />
               </Button>
            </div>
         </Container>
         <hr className="featurette-divider" />

         {/* Card Section */}
         <Container className="text-center">
            <Row className="d-flex justify-content-around">
               {[1, 2, 3].map((item, index) => (
                  <Col lg={4} key={index} className="card">
                     <Card>
                        <Card.Img
                           variant="top"
                           src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                        />
                        <Card.Body>
                           <Card.Text>
                              Card Heading
                           </Card.Text>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>
         </Container>

         {/* Card Section - Second Row */}
         <Container className="text-center">
            <Row className="pt-3 d-flex justify-content-around">
               {[4, 5, 6].map((item, index) => (
                  <Col lg={4} key={index} className="card">
                     <Card>
                        <Card.Img
                           variant="top"
                           src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                        />
                        <Card.Body>
                           <Card.Text>
                              Card Heading
                           </Card.Text>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>
         </Container>
      </div>#

      <section className="p-5 bg-purple" style={{ marginTop: '8rem' }}>
         <Container>
            <div className="text-center">
               <h1>Find a Plan <span className="text-white">That's Right for You</span></h1>
               <p className="mt-3 text-white">
                  Collect Unlimited Revenue. No Transaction Fees. Manage Unlimited Affiliates
               </p>
               <img
                  src="assets/img/subscription/Stars-1.svg"
                  alt="img"
                  className="img-fluid"
                  width="132"
                  height="23"
               />
               <p className="text-white fs-6 mt-2">
                  "You guys should buy it. I think it is worth a lot more than this" - Hüppe Keith
               </p>
               <a href="/" className="btn text-white" style={{ border: 'white dashed' }}>
                  <span>With yearly plans, you're saving 20% on pricing</span>
               </a>
            </div>
            <div className="d-flex justify-content-evenly" style={{ marginTop: '5rem' }}>
               <Button variant="outline-light" style={{ width: '25%', borderRadius: '360px' }}>
                  Monthly
               </Button>
               <Button variant="outline-light" style={{ width: '25%', borderRadius: '360px' }}>
                  Yearly
               </Button>
            </div>

            {/* Plan Cards Section */}
            <div className="container py-5">
               <Row className="justify-content-center">
                  {/* FREE Plan */}
                  <Col md={3} className="mb-4">
                     <Card bg="light" text="dark">
                        <Card.Body>
                           <h5 className="card-title">FREE</h5>
                           <p className="card-text">Best suited for Short trials</p>
                           <h2>0</h2>
                           <p>7 days</p>
                           <p>Buy in INR ₹2265 /mo</p>
                           <Button variant="primary" className="w-100 mb-3">
                              SIGN UP
                           </Button>
                           <p style={{ fontSize: '13px' }}>Access all Features ⭐⭐⭐⭐⭐</p>
                           <ul className="list-unstyled">
                              {[
                                 'Drag & Drop Email Builder',
                                 'SMTP Routing',
                                 'Automations',
                                 'Add Multiple SMTPs',
                                 'Unlimited Custom Field',
                                 'In-built SMTP Included',
                                 'Auto-followups',
                                 'Connect External SMTPs',
                                 'Import Emails',
                                 'Marketing Automation',
                                 'Email Personalization',
                                 'Segmentation',
                                 'Email & Chat Support',
                                 'Throttle Emails',
                                 'Webform',
                              ].map((feature, index) => (
                                 <li key={index}>
                                    <FontAwesomeIcon icon={faSquareCheck} className="text-purple" /> {feature}
                                 </li>
                              ))}
                           </ul>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Container>
      </section>


      <section className="p-5 bg-purple" style={{ marginTop: '8rem' }}>
         <Container>
            <Row className="justify-content-center">
               {/* Map through the plans */}
               {plans.map((plan, index) => (
                  <Col md={3} className="mb-4" key={index}>
                     <Card bg="light" text="dark">
                        <Card.Body>
                           <h5 className="card-title">{plan.title}</h5>
                           <p className="card-text">{plan.description}</p>
                           <h2>{plan.price}</h2>
                           <p>{plan.duration}</p>
                           <p>Buy in INR {plan.buyInINR}</p>
                           <Button variant="primary" className="w-100 mb-3">
                              BUY NOW
                           </Button>
                           <p style={{ fontSize: '13px' }}>Access all Features ⭐⭐⭐⭐⭐</p>
                           <ul className="list-unstyled">
                              {/* Map through the features for each plan */}
                              {features.map((feature, index) => (
                                 <li key={index}>
                                    <FontAwesomeIcon icon={faSquareCheck} className="text-purple" /> {feature}
                                 </li>
                              ))}
                           </ul>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>
         </Container>
      </section>    

      <section className="p-5 bg-purple text-white">
      <Container>
        {/* Subscription Button Section */}
        <div className="mt-3 mb-5 text-center">
          <Button className="btnAll">
            Get Sabnode subscription Billing Now 
            <FontAwesomeIcon icon={faRocket} />
          </Button>
        </div>

        {/* Features List Section */}
        <ul className="d-flex gap-4 mt-3" style={{ fontSize: '12px' }}>
          <li><FontAwesomeIcon icon={faSquareCheck} /> Trusted by 27,000+ Customers</li>
          <li><FontAwesomeIcon icon={faSquareCheck} /> 30-Days Money Back Guarantee</li>
          <li><FontAwesomeIcon icon={faSquareCheck} /> 1,000+ Video Tutorials</li>
        </ul>
      </Container>

      <hr className="featurette-divider" />

      {/* Featurette Section */}
      <Container>
        <Row className="featurette p-lg-5">
          <Col md={7} className="order-md-2">
            <h2 className="featurette-heading" style={{ lineHeight: '1.3' }}>
              <span className="text-purple">Build chatbots for Messenger, </span>
              <span className="text-body-secondary">Instagram, WhatsApp and Google Messages.</span>
            </h2>
            <p className="lead">Connect with new customers every day – Create instant engagement – Build an army of loyal fans</p>
            <div className="d-flex gap-lg-5 mt-lg-5">
              <Button className="btnAll">
                Get Started Free <FontAwesomeIcon icon={faRocket} />
              </Button>
            </div>
          </Col>
          <Col md={5} className="order-md-1">
            <img 
              src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/image-1331x1536.webp" 
              alt="Chatbots for Messenger"
              style={{
                width: '100%',  // ensure the image fits within the container
                height: 'auto',
              }}
            />
          </Col>
        </Row>
      </Container>

      <hr className="featurette-divider" />
    </section>

    
</>

  )
}

export default MarketingMaster