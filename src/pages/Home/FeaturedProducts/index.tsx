import styled from "styled-components";
import Product from "../../../component/Products";
const FeaturedProduct = () => {
    return (
        <Wrapper>
            <h2 className="title">Featured Products</h2>
            <div className="product-list">
                <Product
                    src="/src/component/assets/images/img1.png"
                    alt="product"
                />
                <Product
                    src="/src/component/assets/images/img2.png"
                    alt="product"
                />
                <Product
                    src="/src/component/assets/images/img3.png"
                    alt="product"
                />
                <Product
                    src="/src/component/assets/images/img4.png"
                    alt="product"
                />
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    margin-top: 130px;

    h2 {
        margin-bottom: 48px;
        text-align: center;
        color: #1a0b5b;
        font-size: 4.2rem;
    }
    .product-list {
        margin: auto;
        width: 1135px;
        display: flex;
        justify-content: space-between;
    }
`;
export default FeaturedProduct;
