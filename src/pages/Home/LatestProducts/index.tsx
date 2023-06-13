import styled from "styled-components";
import Product from "../../../component/Products";
import ProductList from "../../../component/ProuductList";
const LatestProducts = ({ ...props }) => {
    return (
        <Wrapper>
            <h2 className="title">Latest Products</h2>
            <ProductList>
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest/latest1.png"
                    alt="product"
                >
                    <ProductParticular>
                        <span className="product-name">
                            Comfort Handy Craft
                        </span>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest/latest2.png"
                    alt="product"
                >
                    <ProductParticular>
                        <span className="product-name">
                            Comfort Handy Craft
                        </span>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest/latest3.png"
                    alt="product"
                >
                    <ProductParticular>
                        <span className="product-name">
                            Comfort Handy Craft
                        </span>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest/latest4.png"
                    alt="product"
                >
                    <ProductParticular>
                        <span className="product-name">
                            Comfort Handy Craft
                        </span>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest/latest5.png"
                    alt="product"
                >
                    <ProductParticular>
                        <span className="product-name">
                            Comfort Handy Craft
                        </span>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <Product
                    className="product-custom"
                    src="/src/component/assets/images/latest/latest6.png"
                    alt="product"
                >
                    <ProductParticular>
                        <span className="product-name">
                            Comfort Handy Craft
                        </span>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
            </ProductList>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    margin-top: 130px;

    .title {
        margin-bottom: 48px;
        text-align: center;
        color: #1a0b5b;
        font-size: 4.2rem;
    }

    .product-custom {
        width: calc(33% - 28px);
        box-shadow: none;
        .product-image {
            height: 270px;
        }
    }
`;
const ProductParticular = styled.div`
    display: flex;
    justify-content: space-between;
    height: 44px;
    align-items: center;
    .product-name {
        color: #151875;
        font-family: "Josefin Sans";
        font-size: 1.6rem;
        border-bottom: 2px solid #eeeffb;
        padding-bottom: 4px;
        margin-top: 4px;
    }
    .saled-price {
        color: #151875;
        font-size: 1.4rem;
    }
    .old-price {
        color: #fb2e86;
        font-size: 1.2rem;
        line-height: 14px;
        margin-left: 10px;
        text-decoration-line: line-through;
    }
`;
export default LatestProducts;
