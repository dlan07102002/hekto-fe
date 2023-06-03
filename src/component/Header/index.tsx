import styled from "styled-components";
import {
    MailIcon,
    PhoneIcon,
    ArrowDownIcon,
    UserIcon,
    HeartIcon,
    CartIcon,
} from "../icons/index.tsx";
function Header() {
    return (
        <Wrapper>
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
                        <p>Cart</p>
                        <CartIcon />
                    </li>
                </ul>
            </CustomInfo>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    --header-height: 44px;
    font-size: 1.6rem;
    display: flex;
    width: 100%;
    height: var(--header-height);
    background-color: #7e33e0;
    justify-content: space-around;
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
        svg {
            margin: auto 10px auto 0;
        }
        margin-left: 40px;
    }
`;
const CustomInfo = styled.div`
    ul {
        display: flex;
    }
    li {
        height: var(--header-height);
        svg {
            margin: auto 4px;
        }
        margin-left: 20px;
    }
`;
export default Header;
