import styled from "styled-components";
import Subnav from "../../component/Header/Subnav";
import path from "../../routes/path";

const Cart: React.FC = () => {
    return (
        <Wrapper>
            <Subnav path={path.cart} name="Shopping cart"></Subnav>
            <Container>
                <div className="product-list-shopping">
                    <div className="product-column"></div>
                    <div className="price-column"></div>
                </div>
                <div className="cart-total"></div>
            </Container>
        </Wrapper>
    );
};
const Wrapper = styled.div``;
const Container = styled.div`
    margin-top: 131px;
    display: flex;
    width: 1170px;
`;
export default Cart;
//coding conventions
