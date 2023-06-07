import {
    faInstagram,
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

function Footer() {
    return (
        <Wrapper>
            <div className="feature">
                <div className="info">
                    <h2 className="logo">Hekto</h2>
                    <Form className="sign-up">
                        <FormGroup>
                            <Input label="" placeholder="Enter Email Address" />
                        </FormGroup>
                        <FormGroup>
                            <Button>Sign Up</Button>
                        </FormGroup>
                    </Form>
                    <p>Contact Info</p>
                    <p>17 Princess Road London, Greater London NW1 8JR, UK</p>
                </div>
                <div className="categories">
                    <h2>Categories</h2>
                    <p>Laptops & Computers</p>
                    <p>Cameras & Photography</p>
                    <p>Smart Phones & Tablets</p>
                    <p>Video Games & Consoles</p>
                    <p>Waterproof Headphones</p>
                </div>
                <div className="customer-care">
                    <h2>Customer Care</h2>
                    <p>My Account</p>
                    <p>Discount</p>
                    <p>Returns</p>
                    <p>Orders History</p>
                    <p>Order Tracking</p>
                </div>
                <div className="pages">
                    <h2>Pages</h2>
                    <p>Blog</p>
                    <p>Browse the Shop</p>
                    <p>Category</p>
                    <p>Pre-Built Pages</p>
                    <p>Visual Composer Elements</p>
                    <p>WooCommerce Pages</p>
                </div>
            </div>
            <div className="social-list">
                <p>©Webecy - All Rights Reserved</p>
                <div className="social-branch">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width: 100%;
    background-color: #eeeffb;
    .feature {
        height: 479px;
        display: flex;
        justify-content: space-around;
        .logo {
            font-weight: bold;
            font-size: 3.8rem;
            margin-bottom: 31px;
        }

        h2 {
            font-weight: bold;
            margin-top: 94px;
            font-size: 2.2rem;
            color: #000000;
            margin-bottom: 42px;
        }
        p {
            margin-bottom: 21px;
            font-size: 1.6rem;
            color: #8a8fb9;
        }
    }
    .info {
        --input-height: 40px;
        --width-button: 135px;

        Input {
            height: var(--input-height);
            border: none;
            outline: none;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            width: calc(377px - var(--width-button));
        }

        .sign-up {
            display: inline-flex;
            input {
                margin: inherit;
            }
            margin-bottom: 25px;
        }
    }
    .social-list {
        background-color: #e7e4f8;
        color: #9da0ae;
        height: 53px;
        display: flex;
        margin: auto;
        p {
            margin: auto;
        }
        ul {
            display: flex;
        }
        li {
            margin-left: 10px;
        }
    }
    .social-branch {
        margin: auto;
        color: #151875;
    }
`;
const Form = styled.form``;
const FormGroup = styled.div`
    button {
        height: var(--input-height);
        width: 135px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
`;
export default Footer;
