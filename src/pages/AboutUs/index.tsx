import styled from "styled-components";

import Subnav from "../../component/Header/Subnav";
import path from "../../routes/path";
import ProductList from "../../component/ProductList";
import Carousel from "react-multi-carousel";
import FeedBackSlider from "./FeedBackSlider";

const AboutUs = () => {
    return (
        <Wrapper>
            <Subnav path={path.aboutUs} name="About Us"></Subnav>
            <BusinessDescription>
                <div className="img-frame">
                    <img
                        src="src/component/assets/images/business_img.png"
                        alt="business image"
                    />
                </div>
                <div className="business-des">
                    <h3 className="title">
                        Know About Our Ecomerce Business, History
                    </h3>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mattis neque ultrices mattis aliquam, malesuada diam
                        est. Malesuada sem tristique amet erat vitae eget dolor
                        lobortis. Accumsan faucibus vitae lobortis quis bibendum
                        quam.
                    </p>
                    <button className="contact-btn">Contact us</button>
                </div>
            </BusinessDescription>
            <Feature>
                <h2 className="sub-title">Our Features</h2>
                <ProductList>
                    <Service>
                        <ServiceImage>
                            <img
                                crossOrigin="anonymous"
                                src="/src/component/assets/images/shopex/free-delivery.png"
                                alt="free-delivery"
                            />
                        </ServiceImage>
                        <p className="services-name">Free Delivery</p>
                        <p className="services-description">
                            Free shipping in only 3 steps
                        </p>
                    </Service>
                    <Service>
                        <ServiceImage>
                            <img
                                crossOrigin="anonymous"
                                src="/src/component/assets/images/shopex/cashback.png"
                                alt="cashback"
                            />
                        </ServiceImage>
                        <p className="services-name">Cash Back </p>
                        <p className="services-description">
                            Customers can earn back a percentage of the money
                            they spend while shopping
                        </p>
                    </Service>
                    <Service>
                        <ServiceImage>
                            <img
                                crossOrigin="anonymous"
                                src="/src/component/assets/images/shopex/premium-quality.png"
                                alt="premium-quality"
                            />
                        </ServiceImage>
                        <p className="services-name">Preminum Quality</p>
                        <p className="services-description">
                            Make quality and customer satisfaction the number
                            one priority
                        </p>
                    </Service>
                    <Service>
                        <ServiceImage>
                            <img
                                crossOrigin="anonymous"
                                src="/src/component/assets/images/shopex/24-hours-support.png"
                                alt="24-hours-support"
                            />
                        </ServiceImage>
                        <p className="services-name">24/7 Support</p>
                        <p className="services-description">
                            Customers can get help and find answers to questions
                            as soon as they come up
                        </p>
                    </Service>
                </ProductList>
            </Feature>
            <Feedback>
                <h2 className="sub-title">Our Client Say!</h2>
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="customize-carousel"
                    containerClass="container-padding-bottom"
                    dotListClass=""
                    draggable
                    focusOnSelect
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024,
                            },
                            items: 1,
                            partialVisibilityGutter: 40,
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0,
                            },
                            items: 1,
                            partialVisibilityGutter: 30,
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464,
                            },
                            items: 2,
                            partialVisibilityGutter: 30,
                        },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <FeedBackSlider
                        name="Selina Gomez"
                        path="src/component/assets/images/feed-back/customer1.png"
                        position="Ceo At Webecy Digital"
                        feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent."
                    ></FeedBackSlider>
                    <FeedBackSlider
                        name="Jack Ma"
                        path="src/component/assets/images/feed-back/customer2.png"
                        position="Ceo At Amazon.Inc"
                        feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent."
                    ></FeedBackSlider>
                    <FeedBackSlider
                        name="Forest Li"
                        path="src/component/assets/images/feed-back/customer3.png"
                        position="Ceo At Shopee"
                        feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent."
                    ></FeedBackSlider>
                </Carousel>
            </Feedback>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    --img-height: 180px;
    .sub-title {
        margin-bottom: 67px;
        color: #000;
        font-size: 4.2rem;
        font-style: normal;
        font-weight: 700;
        text-align: center;
    }

    .services-name {
        font-family: "Josefin Sans";
        font-size: 2.2rem;
        line-height: 26px;
        color: #151875;
        position: absolute;
        left: 50%;
        top: calc(var(--img-height) - 20px);
        text-align: center;
        width: 100%;
        transform: translateX(-50%);
    }

    .services-description {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 26px;
        text-align: center;
        color: rgba(26, 11, 91, 0.3);
        margin: 20px 27px 45px 27px;
    }
`;
const BusinessDescription = styled.div`
    display: flex;
    width: 1150px;
    margin: auto;
    margin-bottom: 141px;

    .img-frame {
        width: 552px;
        height: 409px;
        border-radius: 6px;
        background-color: #2b3cab;
    }

    img {
        width: 555px;
        height: 390px;
        margin-left: 15px;
    }

    .business-des {
        margin-left: 40px;
    }

    .title {
        color: #151875;
        font-size: 3.6rem;
        line-height: 48px;
        margin-bottom: 14px;
    }

    .description {
        color: #8a8fb9;
        font-family: Lato;
        font-size: 1.6rem;
        line-height: 25.6px;
    }

    .contact-btn {
        width: 145px;
        height: 44px;
        border-radius: 3px;
        background: #fb2e86;
        margin-top: 80px;
        border: none;
        color: #fff;
        font-size: 1.8rem;
        font-style: normal;
        line-height: 25.6px;
    }
`;

const Feature = styled.div`
    margin-bottom: 204px;
`;

const Service = styled.div`
    width: calc(25% - 14px);
    box-shadow: 0px 8px 40px 0px rgba(49, 32, 138, 0.05);
    height: 320px;
    position: relative;
    margin: 0 7px;

    &:after {
        position: absolute;
        display: block;
        content: "";
        bottom: 0;
        border-bottom: solid 2px #ff9100;
        transform: scaleX(0);
        transition: transform 500ms ease-in-out;
    }

    &:hover:after {
        width: 100%;
        transform: scaleX(1);
        transform-origin: 0% 50%;
    }
`;

const ServiceImage = styled.div`
    margin: 0 auto;
    background-color: transparent;
    height: var(--img-height);
    box-sizing: border-box;
    position: relative;
    img {
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Feedback = styled.div`
    box-sizing: border-box;
    background-color: #fbfbff;
    text-align: center;
    padding-top: 71px;
    max-height: 503px;
    margin-bottom: 305px;
    .react-multi-carousel-dot button {
        padding: 2px;
        border: none;
        background-color: #ff75b0;
        border-radius: 0;
        width: 18px;
        border-radius: 3px;
        height: 3px;
        box-sizing: border-box;
        margin: 0 6px 30px 6px;
    }
    .react-multi-carousel-dot--active button {
        width: 30px;
        background-color: #fb2e86;
    }
    .activated {
        color: red !important;
    }
`;
export default AboutUs;
//coding conventions
