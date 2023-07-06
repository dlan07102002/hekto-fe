import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Subnav from "../../component/Header/Subnav";
import path from "../../routes/path";

const Payment: React.FC = () => {
    return (
        <Wrapper>
            <Subnav path={path.payment} name="Payment"></Subnav>
            <Container>
                <div className="flex">
                    <PaymentForm>
                        <div className="contact-info">
                            <h3 className="contact-title">
                                Contact information
                            </h3>
                            <input
                                type="text"
                                className="payment-input"
                                placeholder="Email or mobile phone number"
                            />
                        </div>
                        <div className="shipping-address">
                            <h3 className="shipping-address-title">
                                Shipping address
                            </h3>
                            <div className="shipping-address-form">
                                <div className="flex">
                                    <input
                                        type="text"
                                        className="payment-input name-field "
                                        placeholder="First name"
                                    />
                                    <input
                                        type="text"
                                        className="payment-input name-field"
                                        placeholder="Last name"
                                    />
                                </div>
                                <div className="address-info">
                                    <input
                                        type="text"
                                        className="payment-input"
                                        placeholder="Address"
                                    />
                                    <input
                                        type="text"
                                        className="payment-input"
                                        placeholder="Apartment suit, e.t.c (optional)"
                                    />
                                    <input
                                        type="text"
                                        className="payment-input"
                                        placeholder="City"
                                    />
                                    <input
                                        type="text"
                                        className="payment-input"
                                        placeholder="Postal Code"
                                    />
                                </div>
                            </div>
                        </div>
                    </PaymentForm>

                    <PaymentList>
                        <Product>
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src="/src/component/assets/images/featured/img1.png"
                                    alt={"product.name"}
                                />
                            </ProductImage>
                            <ProductDescription>
                                <p className="product-name">
                                    Ut diam consequat
                                </p>
                                <p className="product-color">Color: Brown</p>
                                <p className="product-size">Size: XL</p>
                            </ProductDescription>
                            <div className="product-price">$32.00</div>
                        </Product>
                        <Product>
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src="/src/component/assets/images/featured/img1.png"
                                    alt={"product.name"}
                                />
                            </ProductImage>
                            <ProductDescription>
                                <p className="product-name">
                                    Ut diam consequat
                                </p>
                                <p className="product-color">Color: Brown</p>
                                <p className="product-size">Size: XL</p>
                            </ProductDescription>
                            <div className="product-price">$32.00</div>
                        </Product>
                        <Product>
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src="/src/component/assets/images/featured/img1.png"
                                    alt={"product.name"}
                                />
                            </ProductImage>
                            <ProductDescription>
                                <p className="product-name">
                                    Ut diam consequat
                                </p>
                                <p className="product-color">Color: Brown</p>
                                <p className="product-size">Size: XL</p>
                            </ProductDescription>
                            <div className="product-price">$32.00</div>
                        </Product>
                        <Product>
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src="/src/component/assets/images/featured/img1.png"
                                    alt={"product.name"}
                                />
                            </ProductImage>
                            <ProductDescription>
                                <p className="product-name">
                                    Ut diam consequat
                                </p>
                                <p className="product-color">Color: Brown</p>
                                <p className="product-size">Size: XL</p>
                            </ProductDescription>
                            <div className="product-price">$32.00</div>
                        </Product>
                        <Product>
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src="/src/component/assets/images/featured/img1.png"
                                    alt={"product.name"}
                                />
                            </ProductImage>
                            <ProductDescription>
                                <p className="product-name">
                                    Ut diam consequat
                                </p>
                                <p className="product-color">Color: Brown</p>
                                <p className="product-size">Size: XL</p>
                            </ProductDescription>
                            <div className="product-price">$32.00</div>
                        </Product>
                        <Product>
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src="/src/component/assets/images/featured/img1.png"
                                    alt={"product.name"}
                                />
                            </ProductImage>
                            <ProductDescription>
                                <p className="product-name">
                                    Ut diam consequat
                                </p>
                                <p className="product-color">Color: Brown</p>
                                <p className="product-size">Size: XL</p>
                            </ProductDescription>
                            <div className="product-price">$32.00</div>
                        </Product>
                        <CartTotals>
                            <div className="total-pay">
                                <h3 className="title">Subtotals:</h3>
                                <span>$219.00</span>
                            </div>
                            <div className="total-pay">
                                <h3 className="title">Totals:</h3>
                                <span>$325.00</span>
                            </div>
                            <p className="checkout-note">
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className="check-icon"
                                ></FontAwesomeIcon>
                                Shipping & taxes calculated at checkout
                            </p>
                            <button className="checkout-btn">
                                Proceed to Checkout
                            </button>
                        </CartTotals>
                    </PaymentList>
                </div>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-bottom: 221px;
`;

const Container = styled.div`
    margin-top: 131px;
    width: 1170px;
    margin: auto;
`;

const PaymentForm = styled.div`
    width: 770px;
    height: 604px;
    border-radius: 3px;
    background-color: #f8f8fd;
    padding: 46px 41px 0 31px;

    .payment-input {
        display: block;
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        border-bottom: 2px solid #bfc6e0;
        padding-bottom: 14px;
        margin-bottom: 39.45px;
        font-size: 1.4rem;
        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        color: #969696;

        ::placeholder {
            color: #c1c8e1;
        }
    }

    .contact-title,
    .shipping-address-title {
        color: #1d3178;
        font-size: 1.8rem;
        font-family: Josefin Sans;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .contact-info {
        margin-bottom: 69.61px;
    }

    .contact-title {
        margin-bottom: 27px;
    }

    .shipping-address-title {
        margin-bottom: 31.5px;
    }

    .name-field:first-child {
        margin-right: 15px;
    }

    .name-field:last-child {
        margin-left: 15px;
    }

    .shipping-address-form {
        margin-bottom: 60px;
    }
`;

const Product = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e1e1e4;
    margin-bottom: 14px;
`;

const ProductImage = styled.div`
    img {
        width: 83px;
        height: 87px;
    }
`;

const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    .product-color,
    .product-size,
    .product-name {
        margin: 8px 0;
    }
    .product-color,
    .product-size {
        color: #a1a8c1;
        font-size: 1.2rem;
    }

    .product-name {
        color: #000;
        font-size: 1.4rem;
    }

    .product-color {
    }
    .product-size {
    }
`;

const PaymentList = styled.div`
    margin-left: 30px;

    .product-price {
        color: rgb(21, 36, 94);
        font-size: 1.4rem;
        flex: 1;
        text-align: end;
    }
`;

const CartTotals = styled.div`
    width: 371px;
    height: 284px;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #f4f4fc;
    .total-pay,
    .checkout-btn,
    .checkout-note {
        margin-left: 23px;
    }
    .title {
        color: #1d3178;
        font-size: 1.8rem;
    }
    .total-pay {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #e8e6f1;
        padding-bottom: 14px;
        padding-top: 34px;
        max-width: 310px;
        span {
            color: #15245e;
        }
    }
    .checkout-note {
        margin-top: 27px;
        color: #8a91ab;
        font-size: 1.2rem;
        .check-icon {
            color: #19d16f;
            margin-right: 7px;
        }
    }
    .checkout-btn {
        background: #19d16f;
        color: #f4f4fc;
        font-size: 1.4rem;
        font-family: Lato;
        font-style: normal;
        font-weight: 700;
        margin-top: 25px;
        border-radius: 3px;
        height: 40px;
        width: 100%;
        max-width: 310px;
        outline: none;
        border: none;
    }
`;
export default Payment;
//coding conventions
