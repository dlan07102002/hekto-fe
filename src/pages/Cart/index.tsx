import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Subnav from "../../component/Header/Subnav";
import path from "../../routes/path";

const Cart: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1);
    console.log(quantity);
    const handleIncrement = () => {
        console.log("increment");
        setQuantity((quantity) => quantity + 1);
    };

    const handleDecrement = () => {
        console.log("decrement");

        setQuantity((quantity) => quantity - 1);
    };

    return (
        <Wrapper>
            <Subnav path={path.cart} name="Shopping cart"></Subnav>
            <Container>
                <Title>
                    <ul>
                        <li className="product-column ">Product</li>
                        <li className="price-column">Price</li>
                        <li className="quantity-column">Quantity</li>
                        <li className="total-column">Total</li>
                        <li className="carts-column">Cart Totals</li>
                    </ul>
                </Title>
                <div className="flex">
                    <ProductList>
                        <Product>
                            <div className="product-column">
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
                                    <p className="product-color">
                                        Color: Brown
                                    </p>
                                    <p className="product-size">Size: XL</p>
                                </ProductDescription>
                            </div>

                            <div className="price-column">$32.00</div>
                            <div className="quantity-column">
                                <div className="quantity-change">
                                    <button
                                        onClick={handleDecrement}
                                        className="decrement-btn"
                                    >
                                        -
                                    </button>
                                    <span className="quantity-value">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={handleIncrement}
                                        className="increment-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="total-column">
                                ${32.0 * quantity}
                            </div>
                        </Product>
                    </ProductList>

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
    .product-column {
        width: 299px;
        display: flex;
    }

    .price-column {
        width: 152px;
    }

    .quantity-column {
        width: 208px;
    }

    .quantity-change {
        display: flex;
        align-items: center;
    }

    .decrement-btn,
    .increment-btn {
        cursor: pointer;
        height: 15px;
        width: 12px;
        padding: 0;
        text-align: center;
        line-height: 15px;
        border: none;
        color: #bebfc2;
        background-color: #e7e7ef;
    }

    .quantity-value {
        display: inline-block;
        background-color: #f0eff2;
        width: 27px;
        height: 15px;
        line-height: 17px;
        text-align: center;
        color: #bebfc2;
        font-size: 12px;
    }

    .carts-column {
        flex: 1;
        text-align: center;
    }
`;
const Title = styled.div`
    color: #1d3178;
    margin-bottom: 50px;
    font-size: 2rem;
    ul {
        display: flex;
    }
`;
const ProductList = styled.div`
    width: 718px;
    color: #15245e;
    font-size: 1.4rem;
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

const CartTotals = styled.div`
    width: 371px;
    height: 284px;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #f4f4fc;
    margin-left: 81px;
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
        margin-top: 34px;
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
export default Cart;
//coding conventions
