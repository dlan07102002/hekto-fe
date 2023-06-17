import styled from "styled-components";
import ProductList from "../../../component/ProuductList";

const Shopex = () => {
    return (
        <Wrapper>
            <h2 className="title">What Shopex Offer!</h2>
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
                        Customers can earn back a percentage of the money they
                        spend while shopping
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
                        Make quality and customer satisfaction the number one
                        priority
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
                        Customers can get help and find answers to questions as
                        soon as they come up
                    </p>
                </Service>
            </ProductList>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    --img-height: 180px;

    .title {
        margin-top: 40px;
        margin-bottom: 48px;
        text-align: center;
        color: #1a0b5b;
        font-size: 4.2rem;
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
const Service = styled.div`
    width: calc(25% - 14px);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 320px;
    position: relative;
    margin: 0 7px;
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
export default Shopex;
