import styled from "styled-components";
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
                        <li>
                            <p>Login</p>
                            <UserIcon />
                        </li>
                        <li>
                            <p>Wishlist</p>
                            <HeartIcon />
                        </li>
                        <li>
                            <CartIcon />
                        </li>
                    </ul>
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
    margin: 0 auto;
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
    ul {
        display: flex;
    }

    li {
        height: var(--header-height);
        margin-left: 20px;
        display: flex;
        align-items: center;
    }

    svg {
        margin-left: 4px;
    }
`;

export default Header;
