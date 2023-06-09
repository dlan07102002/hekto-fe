import styled from "styled-components";
import Product from "../../../component/Products";
const LatestProducts = () => {
    return (
        <Wrapper>
            <h2 className="title">Latest Products</h2>
            <div className="product-list">
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest1.png"
                    alt="product"
                />
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest2.png"
                    alt="product"
                />
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest3.png"
                    alt="product"
                />
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest4.png"
                    alt="product"
                />
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest5.png"
                    alt="product"
                />
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest6.png"
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
        flex-wrap: wrap;
    }
    .product-custom {
        width: calc(33% - 14px);
    }
`;
export default LatestProducts;
