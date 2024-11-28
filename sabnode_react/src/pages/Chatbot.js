import React, { useState } from 'react';
import { Col, Container, Row, Modal, Accordion, Button } from 'react-bootstrap';
import '../assets/css/chatbot.css';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';


const Chatbot = () => {
    // eslint-disable-next-line no-unused-vars
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
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        // Reset video src to remove autoplay
        const videoIframe = document.getElementById('youtube-video');
        videoIframe.src = videoIframe.src.replace("?autoplay=1", "");
    };
    return (
        <>
        <Header/>
         <Helmet>
                <title>Messenger Chatbot-in</title>
            </Helmet>
            <div className="py-5 px-1">
                <Container fluid="xl">
                    <Row>
                        <Col md={6} className="p-5">
                            <h1 style={{fontSize: '65px'}}>
                                <span className="text-purple">Your Customers are on</span> Facebook Messenger
                            </h1>
                            <br />
                            <p>
                                Waplia is the #1 Facebook Messenger chatbot that automates getting and keeping
                                customers happy, so you have more time for everything else.
                            </p>
                            <br />
                            <Button className="btnAll">
                                GET STARTED <i className="fa-solid fa-rocket"></i>
                            </Button>
                        </Col>
                        <Col md={6} className="p-5">
                            <img
                                className="img-fluid h-100 object-fit-cover rounded-4"
                                src="https://sabnode.com/in/wp-content/uploads/sites/2/2023/11/0_rGoPNZoQdYH6SGN8-1024x683.jpg"
                                alt="phone"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className="py-5 px-1">
                <Container>
                    <h1 className="text-center">
                        <span className="text-purple">Deliver on</span> Mobile
                    </h1>
                    <p className="text-center mt-4">
                        2.4B people will use Facebook Messenger next year and it’s one of the
                        most popular mobile apps in the world. Be there with Sabnode’s built
                        for mobile chatbot tools.
                    </p>
                    <Row className="g-5 mt-1">
                        <Col md={6} className="d-flex flex-column align-items-center">
                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <i className="fa-solid fa-circle-check text-purple"></i> Quality Leads
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa-solid fa-circle-check text-purple"></i> Book Appointments
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa-solid fa-circle-check text-purple"></i> Send Order Updates
                                    </p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6} className="d-flex flex-column align-items-center">
                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <i className="fa-solid fa-circle-check text-purple"></i> Quality Leads
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa-solid fa-circle-check text-purple"></i> Book Appointments
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa-solid fa-circle-check text-purple"></i> Send Order Updates
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 example">
                <Container fluid>
                    <Row>
                        <Col md={4} className="text-center d-flex flex-column pt-5 px-3" style={{ backgroundColor: '#96DAE2' }}>
                            <h4>Answer every FAQ</h4>
                            <p>
                                Deliver fast responses 24/7 using Instagram DM Marketing. It costs less than a virtual assistant and never
                                forgets to respond.
                            </p>
                            <img
                                className="img-fluid mt-auto mx-4 pt-4 vh-md-100"
                                src={require("../assets/img/chatbot/colored-blocks_answer-faq.webp")}
                                alt="example1"
                            />
                        </Col>

                        <Col md={4} className="text-center d-flex flex-column pt-5 px-3" style={{ backgroundColor: '#E1E090' }}>
                            <h4>Convert more followers</h4>
                            <p>
                                Build a contact list, generate and collect leads, and re-engage prospects, so you only speak with those
                                who are interested.
                            </p>
                            <img
                                className="img-fluid mt-auto mx-4 pt-4 vh-md-100"
                                src={require("../assets/img/chatbot/colored-blocks_convert-more-followers.webp")}
                                alt="example2"
                            />
                        </Col>

                        <Col md={4} className="bg-pink text-center d-flex flex-column pt-5 px-3">
                            <h4>Automate your Messenger funnel</h4>
                            <p>
                                Shave down the time it takes to get a prospect on a call, launch new collections, gather reviews, and
                                share partner products.
                            </p>
                            <img
                                className="img-fluid mt-auto mx-4 pt-4 vh-md-100"
                                src={require("../assets/img/chatbot/colored-blocks_automate-your-ig-funnel.webp")}
                                alt="example3"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 px-1 steps">
                <Container className="text-center">
                    <h2 className="fs-1 text-center">
                        Connect with your Customers <span className="text-purple">at Every Stage</span>
                    </h2>
                    <Row className="my-5 g-3">
                        <Col md={4}>
                            <div className="steps-content">
                                <div className="pt-3 px-4">
                                    <p className="fs-2 text-dark text-start mb-4" style={{ fontSize: '36px' }}>STEP 1</p>
                                    <hr className="w-100" />
                                </div>
                                <div className="text-center mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="133" height="122" viewBox="0 0 133 122"
                                        fill="none">
                                        <path
                                            d="M13.3404 18.347L0.015625 121.372L89.2564 77.0016L59.0769 118.044L78.7444 121.372L132.016 59.0324L68.6545 0.787598L45.5721 7.82254L90.402 43.9752L13.3404 18.347Z"
                                            fill="#00F613"></path>
                                        <path
                                            d="M104.249 75.4089L117.133 45.3505L91.5199 21.8054H62.9144L90.4023 43.972L23.7378 21.8054H23.4181H23.7378L23.3901 21.6906L35.3303 75.4089H104.249Z"
                                            fill="#E1E090"></path>
                                        <path
                                            d="M23.8525 109.519L41.9801 100.506C40.1019 99.1713 37.8107 98.3827 35.3302 98.3827C29.1055 98.3827 24.0388 103.338 23.8525 109.519Z"
                                            fill="#E1E090"></path>
                                        <path
                                            d="M85.1055 109.87C85.1055 111.068 85.2887 112.226 85.6302 113.313L98.2813 98.5069C97.7287 98.4262 97.1667 98.3827 96.5924 98.3827C90.2466 98.3827 85.1055 103.527 85.1055 109.87Z"
                                            fill="#E1E090"></path>
                                        <path
                                            d="M35.3296 75.4087L21.9271 90.7236H111.907M4.69678 6.4873H20.0116L35.3265 75.4087H104.248L127.222 21.8053H23.4173M108.079 109.869C108.079 116.212 102.935 121.356 96.592 121.356C90.2494 121.356 85.1051 116.212 85.1051 109.869C85.1051 103.527 90.2463 98.3825 96.592 98.3825C102.938 98.3825 108.079 103.524 108.079 109.869ZM46.8165 109.869C46.8165 116.212 41.6722 121.356 35.3296 121.356C28.9869 121.356 23.8427 116.212 23.8427 109.869C23.8427 103.527 28.9838 98.3825 35.3296 98.3825C41.6753 98.3825 46.8165 103.524 46.8165 109.869Z"
                                            stroke="black" stroke-miterlimit="10"></path>
                                    </svg>
                                    <p className="detail mt-3 mb-5 text-center">
                                        Automatically Qualify Leads <br />
                                        Recover Abandoned Carts <br />
                                        Send Coupons & Promotions
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="steps-content">
                                <div className="pt-3 px-4">
                                    <p className="fs-2 text-dark text-start mb-4" style={{ fontSize: '36px' }}>STEP 2</p>
                                    <hr className="w-100" />
                                </div>
                                <div className="text-center mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="173" height="122" viewBox="0 0 173 122"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M90.4319 19.1638C90.9659 14.0936 89.8064 10.0414 86.7237 7.55413C76.6701 -0.5575 49.9679 11.0469 27.0828 33.4733C4.19763 55.8997 -6.20437 80.6557 3.84926 88.7673C10.5346 94.1613 24.5816 90.8372 39.9727 81.4101C39.1832 87.3162 40.81 91.466 43.7684 93.8521C50.215 99.0515 68.2642 91.1338 87.6206 75.596C87.642 78.5506 88.6905 81.3385 91.6466 83.0495C95.1802 85.0964 100.268 84.7868 104.511 83.5713C110.134 81.9658 114.95 79.0302 119.555 76.0429C122.661 74.0275 125.7 71.9392 128.672 69.781L162.106 89.2707L147.39 54.446C151.246 50.8898 154.952 47.1995 158.502 43.3836C163.938 37.541 169.612 30.6662 171.463 23.1264C172.011 20.8903 172.191 18.5337 171.521 16.3205C170.928 14.371 169.857 12.9491 168.471 11.9342H168.477C164.931 9.33108 159.347 9.42282 154.601 10.1625C148.92 11.0455 143.858 13.5568 139.183 16.2459C137.524 17.197 135.893 18.1768 134.291 19.1841C135.469 14.3167 134.663 10.4584 131.342 8.02976C123.42 2.23747 107.792 6.95642 90.4319 19.1638Z"
                                            fill="#FA0CF7"></path>
                                        <mask id="mask0_543_12071" maskUnits="userSpaceOnUse" x="30"
                                            y="0" width="101" height="91">
                                            <path
                                                d="M116.669 39.4914C107.105 32.1345 94.7328 27.7097 82.1211 27.07C76.2038 26.8034 70.1072 27.3365 64.9669 29.9488C59.8266 32.561 55.8817 37.4123 56.061 42.6901C56.2403 47.4881 59.7668 51.8596 64.3094 54.4719C68.852 57.0841 74.2314 58.2036 79.6107 58.8967C93.9557 60.7092 108.779 59.6963 122.646 55.9113L130.416 82.2469C115.413 89.6039 97.6615 92.6959 80.8659 89.977C64.0703 87.2582 48.3506 78.5151 39.0861 65.6672C29.8216 52.8192 26.9526 35.7597 33.9458 21.8455C41.6563 6.43857 57.9737 0.787598 74.9486 0.787598C93.7167 0.787598 114.457 5.79884 130.356 15.4481C125.634 23.3382 121.151 31.4415 116.669 39.4914Z"
                                                fill="#D9D9D9"></path>
                                        </mask>
                                        <g mask="url(#mask0_543_12071)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M90.4319 19.1638C90.9659 14.0936 89.8064 10.0414 86.7237 7.55413C76.6701 -0.5575 49.9679 11.0469 27.0828 33.4733C4.19763 55.8997 -6.20437 80.6557 3.84926 88.7673C10.5346 94.1613 24.5816 90.8372 39.9727 81.4101C39.1832 87.3162 40.81 91.466 43.7684 93.8521C50.215 99.0515 68.2642 91.1338 87.6206 75.596C87.642 78.5506 88.6905 81.3385 91.6466 83.0495C95.1802 85.0964 100.268 84.7868 104.511 83.5713C110.134 81.9658 114.95 79.0302 119.555 76.0429C122.661 74.0275 125.7 71.9392 128.672 69.781L162.106 89.2707L147.39 54.446C151.246 50.8898 154.952 47.1995 158.502 43.3836C163.938 37.541 169.612 30.6662 171.463 23.1264C172.011 20.8903 172.191 18.5337 171.521 16.3205C170.928 14.371 169.857 12.9491 168.471 11.9342H168.477C164.931 9.33108 159.347 9.42282 154.601 10.1625C148.92 11.0455 143.858 13.5568 139.183 16.2459C137.524 17.197 135.893 18.1768 134.291 19.1841C135.469 14.3167 134.663 10.4584 131.342 8.02976C123.42 2.23747 107.792 6.95642 90.4319 19.1638Z"
                                                fill="#96DAE2"></path>
                                        </g>
                                        <path
                                            d="M116.669 39.4914C107.105 32.1345 94.7328 27.7097 82.1211 27.07C76.2038 26.8034 70.1072 27.3365 64.9669 29.9488C59.8266 32.561 55.8817 37.4123 56.061 42.6901C56.2403 47.4881 59.7668 51.8596 64.3094 54.4719C68.852 57.0841 74.2314 58.2036 79.6107 58.8967C93.9557 60.7092 108.779 59.6963 122.646 55.9113L130.416 82.2469C115.413 89.6038 97.6615 92.6959 80.8659 89.977C64.0703 87.2582 48.3506 78.5151 39.0861 65.6672C29.8216 52.8192 26.9526 35.7597 33.9458 21.8455C41.6563 6.43857 57.9737 0.787598 74.9486 0.787598C93.7167 0.787598 114.457 5.79884 130.356 15.4481C125.634 23.3382 121.151 31.4415 116.669 39.4914Z"
                                            stroke="black" stroke-miterlimit="10"></path>
                                        <path
                                            d="M128.861 45.9972C130.893 44.1313 133.164 42.4787 135.555 41.0926C138.663 39.28 141.532 39.7598 143.863 41.3059C144.879 41.9456 145.597 42.7986 146.374 43.7049L153.247 51.8081L172.015 40.0264"
                                            stroke="black" stroke-miterlimit="10"></path>
                                        <path d="M109.375 7.01074L98.3184 30.4282" stroke="black" stroke-miterlimit="10"></path>
                                        <path d="M98.7412 59.4803L107.468 89.4945" stroke="black" stroke-miterlimit="10"></path>
                                    </svg>
                                    <p className="detail mt-3 mb-5 text-center">
                                        Build a Following <br />
                                        Collect Feedback and Reviews <br />
                                        Share News and Updates
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="steps-content">
                                <div className="pt-3 px-4">
                                    <p className="fs-2 text-dark text-start mb-4" style={{ fontSize: '36px' }}>STEP 3</p>
                                    <hr className="w-100" />
                                </div>
                                <div className="text-center mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="212" height="122" viewBox="0 0 212 122"
                                        fill="none">
                                        <path
                                            d="M208.322 28.6759C182.691 30.3368 170.85 22.1725 165.634 17.5633C164.03 16.145 163.265 15.1933 163.265 15.1933L145.854 21.5381C146.115 21.7527 146.367 21.9766 146.628 22.1819C153.206 27.6309 159.803 31.2138 165.634 33.5651C176.962 38.1185 185.434 38.0438 185.434 38.0438C178.436 39.5367 171.774 41.916 165.634 44.7151C157.181 48.5687 149.717 53.2246 143.717 57.5167C139.518 60.5211 136.038 63.3389 133.435 65.5689C130.01 68.5174 128.098 70.4488 128.098 70.4488C128.098 70.4488 128.909 68.564 130.001 65.5689C131.886 60.3811 134.601 51.8344 135.394 43.8754C136.299 34.8154 134.694 26.5113 126.511 24.8038C124.897 24.4679 123.33 24.2813 121.781 24.2346C113.421 23.9547 106.087 27.6589 99.8635 33.1733C98.5665 34.3209 97.3255 35.5339 96.1312 36.8215C94.0599 39.0328 92.1378 41.4215 90.3556 43.8847C84.9252 51.3958 80.8571 59.5787 78.2539 65.5783C78.1513 65.8209 78.0393 66.0728 77.9367 66.306C75.8839 71.1113 74.8296 74.3396 74.8296 74.3396C75.4454 71.2979 75.9679 68.3774 76.4251 65.5783C77.0783 61.5288 77.5821 57.7313 77.9367 54.1763C78.3006 50.5001 78.5245 47.0851 78.6085 43.8941C78.7484 38.4077 78.4965 33.6118 77.9367 29.4224C77.8154 28.5266 77.6847 27.6589 77.5448 26.8192C77.2649 25.1863 76.929 23.6468 76.5557 22.2099C72.1704 5.33091 61.9068 1.43074 56.0285 0.880233C55.9726 0.880233 55.9259 0.870903 55.8699 0.861572C48.2935 0.217765 32.8888 3.50212 20.899 21.622C17.6613 26.5206 14.6755 32.4921 12.1563 39.77C1.01562 72.0257 1.01562 107.967 1.01562 107.967L2.84441 107.743L33.6072 103.983C34.7082 73.6025 43.5163 40.1059 56.0285 40.675C56.3364 40.6937 56.6537 40.7217 56.9709 40.7777C58.781 41.1042 60.1153 42.2146 61.095 43.8847C63.7636 48.4567 63.6703 57.2088 62.7279 65.5783C61.5336 76.1684 58.9863 86.1335 58.9863 86.1335C62.3453 86.4694 65.6483 86.8612 68.7461 87.2718C72.1237 87.7197 75.2681 88.1768 77.946 88.5967C83.423 89.4458 87.0246 90.1269 87.0246 90.1269C87.0806 89.1752 87.1646 88.2235 87.2672 87.2718C88.107 79.5181 90.4769 72.1003 93.6213 65.5783C95.0302 62.6671 96.5884 59.9239 98.2399 57.4234C98.7718 56.6116 99.3223 55.8278 99.8728 55.0627C103.521 50.0242 107.468 46.1241 111.041 43.8847C114.438 41.7574 117.498 41.1136 119.644 42.4105C120.223 42.7651 120.68 43.2596 121.044 43.8847C121.389 44.4912 121.632 45.2097 121.79 46.0308C122.117 47.7009 122.079 49.7723 121.79 52.077C121.277 56.1544 119.98 60.9596 118.459 65.5783C115.371 74.9835 111.396 83.5862 111.396 83.5862C113.775 84.7619 116.015 86.0308 118.049 87.2625C119.392 88.0835 120.643 88.886 121.79 89.6511C126.101 92.5435 128.807 94.8295 128.807 94.8295C130.402 92.189 132.119 89.6697 133.911 87.2625C136.971 83.1477 140.283 79.3688 143.717 75.9165C147.524 72.0817 151.489 68.6387 155.427 65.5689C158.879 62.8817 162.322 60.4838 165.634 58.3564C180.153 49.0352 192.217 44.9484 192.217 44.9484C175.562 59.728 168.76 82.14 168.76 82.14L184.883 84.6779C187.636 56.3783 211.979 43.3716 211.979 43.3716L208.312 28.6759H208.322Z"
                                            fill="#00F6FF"></path>
                                        <path
                                            d="M146.629 22.2004C152.964 27.4442 159.3 30.9525 164.973 33.2945C161.399 28.1533 156.454 23.6093 150.464 19.8678L145.854 21.5473C146.116 21.7712 146.368 21.9858 146.629 22.1911V22.2004Z"
                                            fill="#D2B6DE"></path>
                                        <path
                                            d="M56.0291 40.6749C56.337 40.6843 56.0427 40.6376 56.36 40.6936C58.1701 41.0202 59.5044 42.1305 60.4841 43.8007C63.1526 48.3726 63.0593 57.1247 62.1169 65.4942C60.9226 76.0844 58.3754 86.0494 58.3754 86.0494C61.7344 86.3853 65.6489 86.8612 68.7466 87.2717C72.1243 87.7196 75.2687 88.1768 77.9465 88.5966C83.4236 89.4457 88.6487 90.6067 88.6487 90.6067C88.7047 89.6549 88.7886 88.7032 88.8913 87.7515C89.731 79.9978 92.101 72.5801 95.2454 66.058C96.6543 63.1469 98.2125 60.4037 99.864 57.9031C100.396 57.0913 100.946 56.3076 101.497 55.5425C105.145 50.4946 109.092 46.6038 112.666 44.3645C115.836 42.3777 119.765 41.6374 121.044 43.8846C121.39 44.4911 121.632 45.2096 121.791 46.0307C122.117 47.7008 122.08 49.7722 121.791 52.0769C121.278 56.1543 119.981 60.9596 118.46 65.5782C115.371 74.9834 111.397 83.5861 111.397 83.5861C113.776 84.7618 116.015 86.0307 118.049 87.2624C119.393 88.0835 120.643 88.8859 121.791 89.651C126.101 92.5435 128.807 94.8294 128.807 94.8294C130.403 92.1889 132.12 89.6696 133.911 87.2624C136.972 83.1476 140.284 79.3687 143.718 75.9164C147.524 72.0816 151.49 68.6386 155.427 65.5688C158.88 62.8816 162.323 60.4837 165.635 58.3563C167.566 57.1154 169.451 55.9677 171.28 54.9134C171.336 53.9523 171.373 52.9913 171.345 52.0209C171.261 48.8952 170.73 45.8534 169.796 42.9329C168.388 43.5114 166.997 44.0993 165.635 44.7244C157.182 48.5779 149.717 53.2339 143.718 57.5259C139.519 60.5303 136.039 63.3482 133.435 65.5782C130.011 68.5266 129.4 69.5063 129.4 69.5063C129.4 69.5063 130.212 67.6216 131.303 64.6265C133.188 59.4387 135.903 50.8919 136.696 42.9329C137.601 33.873 134.695 26.5205 126.512 24.813C124.898 24.4771 123.33 24.2905 121.781 24.2438C113.421 23.9639 106.087 27.6682 99.864 33.1825C98.567 34.3302 97.3261 35.5525 96.1318 36.8308C94.0604 39.0421 92.1383 41.4307 90.3562 43.894C84.9258 51.4051 80.867 59.588 78.2544 65.5875C78.1518 65.8301 78.0398 66.082 77.9372 66.3153C75.8845 71.1205 74.8301 74.3489 74.8301 74.3489C75.4459 71.3071 75.9685 68.3867 76.4257 65.5875C77.0788 61.5474 77.5826 57.7405 77.9372 54.1856C78.3011 50.5093 78.525 47.0944 78.609 43.9033C78.749 38.4169 78.497 33.621 77.9372 29.4223C77.8159 28.5266 77.6853 27.6588 77.5453 26.8191C77.2654 25.1862 76.9295 23.6467 76.5563 22.2098C75.9218 19.7652 75.1567 17.6005 74.2983 15.6691C54.4149 24.1692 41.1842 39.6859 41.6414 56.9288C41.6414 57.106 41.66 57.274 41.66 57.4513C45.4389 47.1783 50.3468 40.4323 56.0104 40.6936L56.0291 40.6749Z"
                                            fill="#D2B6DE"></path>
                                        <path
                                            d="M171.345 52.0209C170.682 26.8471 141.104 7.53287 105.294 8.8858C69.483 10.2387 42.8723 30.1035 41.65 56.9101C40.8849 73.7331 50.1408 90.5934 74.0457 97.3954C70.4347 102.826 66.1893 108.769 61.4214 115.226C70.6587 112.567 82.1632 108.312 96.1124 100.092C99.658 100.297 105.163 100.139 107.701 100.045C143.512 98.6923 172.007 77.1947 171.345 52.0209Z"
                                            stroke="black" stroke-width="0.933055" stroke-miterlimit="10"></path>
                                    </svg>
                                    <p className="detail mt-3 mb-5 text-center">
                                        Nurture Relationships <br />
                                        Drive Repeat Sales <br />
                                        Personalize Offers
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 px-1 text-center">
                <h1 className="mt-5" style={{ fontSize: '65px' }}>
                    <span className="text-purple">Grow and Analyze</span> Your Audience
                </h1>
                <Button className="btnAll my-5">
                    GET STARTED <i className="fa-solid fa-rocket"></i>
                </Button>
            </section>

            <section className="py-5 px-1">
                <Container>
                    <Row className="g-5">
                        <Col md={6} className="order-2 order-md-1">
                            <img
                                src={require("../assets/img/chatbot/94ed911a-29b6-11eb-9f0c-0749278b7792.png")}
                                alt=""
                                className="img-fluid object-fit-cover"
                            />
                        </Col>
                        <Col md={6} className="my-md-auto order-1 order-md-2">
                            <h2 className="mb-4">
                                <span className="text-purple">Make Your Facebook </span>Ads Work Harder
                            </h2>
                            <p className="fs-md-3">
                                Combine Sabnode with your Facebook Ads and reduce acquisition costs by up to 9X. Use Click-to-Messenger Ads to send prospects into Messenger, where you can qualify leads, accept payments, and keep the conversation going.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 px-1">
                <Container>
                    <Row className="g-5">
                        <Col md={6} className="my-md-auto">
                            <h2>
                                <span className="text-purple">Turn Comments</span> into Commerce
                            </h2>
                            <p>
                                Automatically respond to comments on your Facebook posts with the Comments Growth Tool. Answer common questions, offer product recommendations, initiate newsletter sign-ups, and more.
                            </p>
                        </Col>
                        <Col md={6}>
                            <img
                                src={require("../assets/img/chatbot/ai-chatbot-1024x917.png")}
                                alt=""
                                className="img-fluid object-fit-cover"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 px-1">
                <Container>
                    <Row className="g-5">
                        <Col md={6} className="order-2 order-md-1">
                            <img
                                src={require("../assets/img/chatbot/cpg_experential_selling_feb_23-1018x1024.webp")}
                                alt=""
                                className="img-fluid object-fit-cover"
                            />
                        </Col>
                        <Col md={6} className="my-md-auto order-1 order-md-2">
                            <h2>
                                <span className="text-purple">Direct Customers to Your</span> Facebook Messenger Chatbot from Anywhere
                            </h2>
                            <p>
                                Use Sabnode’s Messenger URL Growth Tool to create a messenger link for your chatbot that customers can access from their preferred channel. Website. Email. Text message. Anywhere.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 px-1">
                <Container>
                    <Row className="g-5">
                        <Col md={6} className="my-md-auto">
                            <h2>
                                <span className="text-purple">Understand</span> What's Working
                            </h2>
                            <p>
                                With Sabnode insights and analytics tools, connect your customer conversations to conversions on your website or in your store.
                            </p>
                        </Col>
                        <Col md={6}>
                            <img
                                src={require("../assets/img/chatbot/guide-dap-1024x538.png")}
                                alt=""
                                className="img-fluid object-fit-cover"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="video-explain py-5 px-1">
                <Container className="text-center">
                    <h1><span className="text-purple">Drag, Drop and</span> Connect</h1>
                    <p className="my-4">
                        With Sabnode’s easy-to-use tools, you can create the customer conversations you need to achieve your Facebook Messenger marketing objectives. No coding required!
                    </p>
                    <div className="p-3 w-75 mx-auto my-5 text-center position-relative video-container">
                        <img
                            src={require("../assets/img/chatbot/email.png")}
                            className="img-fluid w-100"
                            alt="dashboard"
                            id="video-thumbnail"
                        />
                        <i
                            className="fa-solid fa-circle-play position-absolute text-info top-50 start-50 translate-middle fs-1"
                            onClick={handleShow}
                            style={{ cursor: 'pointer' }}
                            id="play-button"
                        />
                    </div>
                </Container>
            </section>

            {/* Fullscreen Video Modal */}
            <Modal
                show={showModal}
                onHide={handleClose}
                dialogClassName="modal-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="videoModalLabel">Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            className="embed-responsive-item"
                            id="youtube-video"
                            width="100%"
                            height="600"
                            src="https://www.youtube.com/embed/XHOmBV4js_E"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </Modal.Body>
            </Modal>

            <section className="py-5 px-1">
                <Container fluid className="text-center">
                    <h1><span className="text-purple">Save Time</span> with Integrations</h1>
                    <p className="d-block w-50 mx-auto mt-3">
                        Easily connect Sabnode to the eCommerce tools you use every day with
                        direct integrations to PayPal, Stripe, ActiveCampaign, Google Sheets, and 2,000+ additional apps through Zapier and Integromat.
                    </p>
                    <img
                        className="img-fluid my-4"
                        src={require('../assets/img/chatbot/Screenshot-2023-11-07-104337-1024x124.png')}
                        alt=""
                    />
                    <br />
                    <Button className="btnAll">
                        GET STARTED <i className="fa-solid fa-rocket"></i>
                    </Button>
                </Container>
            </section>

            <section className="faq container-xl container-fluid">
                <h2 className="text-center my-5 fw-bold">Frequently Asked Questions</h2>
                <Accordion id="accordionPanelsStayOpenExample" alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            What is a Facebook Messenger bot?
                        </Accordion.Header>
                        <Accordion.Body>
                            
                            A bot is a series of automated conversations that can answer common questions from your customers over Facebook Messenger. This could be to explain what your product or service does, gather information about the customer, deliver helpful content, or nurture them towards a sale.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            What can a bot do for my business?
                        </Accordion.Header>
                        <Accordion.Body>
                            Our bots allow you to automatically welcome new users, send them content, schedule messages, respond to specific keywords, and much more.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Why do I need a Messenger bot?
                        </Accordion.Header>
                        <Accordion.Body>
                            Every day it’s becoming harder to reach your audience. People open less email and social media is so noisy your organic reach is often less than 10% of your audience. Facebook Messenger bots solve this problem by providing personalized and automated conversations with your customers. It is real-time, interactive, and has 80% open rates.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            How do I create a Messenger bot?
                        </Accordion.Header>
                        <Accordion.Body>
                            You’ll need an existing Facebook Page and administrator rights to manage it. After that click on the “Get Started” button at the top of the page. <br /><br />
                            While you need a Facebook Page to get started, your Sabnode bot is not restricted to just customers on your Facebook page. Anywhere your customers can click a link – your website, in an email, on a QR code, etc., you can launch your Sabnode bot and start a conversation.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
            <Footer/>



            
        </>
    )
}

export default Chatbot;