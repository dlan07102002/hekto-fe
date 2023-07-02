import styled from "styled-components";
import { useEffect, useState } from "react";

import authApi from "../../api/auth.ts";
import {
    MailIcon,
    PhoneIcon,
    ArrowDownIcon,
    UserIcon,
    HeartIcon,
    CartIcon,
} from "../icons/index.tsx";
import Navbar from "./Navbar/index.tsx";
function Header() {
    const [user, setUser] = useState<string>("");
    useEffect(() => {
        authApi.getCurrentUser().then((res) => setUser(res.data.fullName));
    }, []);
    console.log(user);
    return (
        <Wrapper>
            <Container>
                <Contact>
                    <ul>
                        <li>
                            <MailIcon />
                            <p>s.gintoki710@gmail.com</p>
                        </li>
                        <li>
                            <PhoneIcon />
                            <p>0984326966</p>
                        </li>
                    </ul>
                </Contact>
                <CustomInfo>
                    <ul>
                        <li>
                            <p>English</p>
                            <ArrowDownIcon />
                        </li>
                        <li>
                            <p>USD</p>
                            <ArrowDownIcon />
                        </li>
                        <li className="user-icon">
                            {user ? <p>{user}</p> : <p>Login</p>}
                            <UserIcon />
                        </li>
                        <li>
                            <p>Wishlist</p>
                            <HeartIcon />
                        </li>
                        <li className="cart-icon">
                            <CartIcon />
                        </li>
                    </ul>
                    <div className="product-list-added">
                        <Product>
                            <img
                                alt="product-name"
                                src="/src/component/assets/images/featured/img1.png"
                                className="product-img"
                            />
                            <div className="product-info">
                                <h3 className="product-name">Tu lanh</h3>
                                <p className="product-price">Price: $300</p>
                                <p className="product-quantity">Quantity: 3</p>
                            </div>
                        </Product>
                        <Product>
                            <img
                                alt="product-name"
                                src="/src/component/assets/images/featured/img1.png"
                                className="product-img"
                            />
                            <div className="product-info">
                                <h3 className="product-name">Tu lanh</h3>
                                <p className="product-price">Price: $300</p>
                                <p className="product-quantity">Quantity: 3</p>
                            </div>
                        </Product>
                    </div>
                </CustomInfo>
            </Container>
            <Navbar />
        </Wrapper>
    );
}
const Wrapper = styled.div`
    background-color: #7e33e0;
    width: 100%;
    position: fixed;
    z-index: 10;
    box-shadow: 0px 0px 25px 10px #f8f8fb;
`;
const Container = styled.div`
    --header-height: 44px;
    height: var(--header-height);
    width: 1135px;
    font-size: 1.6rem;
    display: flex;
    margin: auto;
    justify-content: space-between;

    ul {
        line-height: 44px;
        display: flex;
    }

    li {
        display: flex;
    }
`;

const Contact = styled.div`
    li {
        margin-left: 40px;
        display: flex;
        align-items: center;
    }

    li:first-child {
        margin-left: 0px;
    }

    svg {
        margin-right: 12px;
    }
`;
const CustomInfo = styled.div`
    position: relative;

    ul {
        display: flex;
        align-items: center;
    }

    li {
        box-sizing: border-box;
        height: var(--header-height);
        margin-left: 20px;
        display: flex;
        align-items: center;
        line-height: 1;
    }
    li > svg {
        margin-left: 5px;
    }

    .product-list-added {
        display: none;
        animation: fadeIn 0.3s ease-in-out forwards;
        box-sizing: border-box;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
        position: absolute;
        z-index: 999;
        width: 312px;
        background-color: #fff;
        right: 0;
    }
    .user-icon > svg {
        padding-bottom: 5.25px;
    }

    .cart-icon {
        padding-bottom: 5px;
    }

    .cart-icon:hover {
        cursor: pointer;
    }

    ul:has(.cart-icon:hover) ~ .product-list-added {
        display: block;
    }

    svg {
        margin-left: 4px;
    }
`;
const Product = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .product-img {
        width: 60px;
        height: 60ox;
        object-fit: cover;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
        margin-right: 20px;
    }
    .product-info {
        flex: 1;
    }
    .product-name {
        margin-top: 6px;
        color: black;
    }
    .product-price,
    .product-quantity {
        color: #767676;
        font-family: "roboto";
        font-size: 1.4rem;
        line-height: 1.5;
    }
`;
export default Header;
