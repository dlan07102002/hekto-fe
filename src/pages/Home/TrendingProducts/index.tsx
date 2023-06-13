import styled from "styled-components";
import Product from "../../../component/Products";
import ProductList from "../../../component/ProuductList";
const TrendingProduct = ({ ...props }) => {
    return (
        <Wrapper>
            <h2 className="title">Trending Products</h2>
            <ProductList>
                <Product
                    src="/src/component/assets/images/latest/latest1.png"
                    alt="product"
                    className="product-custom"
                >
                    <ProductParticular>
                        <p className="product-name">Cantilever chair</p>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <Product
                    src="/src/component/assets/images/featured/img1.png"
                    alt="product"
                    className="product-custom"
                >
                    <ProductParticular>
                        <p className="product-name">Cantilever chair</p>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <Product
                    src="/src/component/assets/images/latest/latest3.png"
                    alt="product"
                    className="product-custom"
                >
                    <ProductParticular>
                        <p className="product-name">Cantilever chair</p>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <Product
                    src="/src/component/assets/images/latest/latest4.png"
                    alt="product"
                    className="product-custom"
                >
                    <ProductParticular>
                        <p className="product-name">Cantilever chair</p>
                        <div>
                            <span className="saled-price">$42.00</span>
                            <span className="old-price">$65.00</span>
                        </div>
                    </ProductParticular>
                </Product>
                <ProductSaleOffList>
                    <ProductList>
                        <Product
                            src="/src/component/assets/images/trending/img4.png"
                            alt="product"
                            className="product-custom product-sale-off"
                        >
                            <div className="sale-collection ">
                                <p className="title-ads">
                                    23% off in all products
                                </p>
                                <a href="" className="navigate">
                                    Shop now
                                </a>
                            </div>
                        </Product>
                        <Product
                            src="/src/component/assets/images/trending/img5.png"
                            alt="product"
                            className="product-custom product-sale-off"
                        >
                            <div className="sale-collection ">
                                <p className="title-ads">
                                    23% off in all products
                                </p>
                                <a href="" className="navigate">
                                    View Collection
                                </a>
                            </div>
                        </Product>
                        <Column className="product-sale-off ">
                            <Product
                                src="/src/component/assets/images/trending/img1.png"
                                alt="product"
                                className="product-list-column"
                            >
                                <div>
                                    <p className="product-name">
                                        Executive Seat chair
                                    </p>
                                    <p className="old-price">$42.00</p>
                                </div>
                            </Product>
                            <Product
                                src="/src/component/assets/images/trending/img2.png"
                                alt="product"
                                className="product-list-column"
                            >
                                <div>
                                    <p className="product-name">
                                        Executive Seat chair
                                    </p>
                                    <p className="old-price">$42.00</p>
                                </div>
                            </Product>
                            <Product
                                src="/src/component/assets/images/trending/img3.png"
                                alt="product"
                                className="product-list-column"
                            >
                                <div>
                                    <p className="product-name">
                                        Executive Seat chair
                                    </p>
                                    <p className="old-price">$42.00</p>
                                </div>
                            </Product>
                        </Column>
                    </ProductList>
                </ProductSaleOffList>
            </ProductList>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    --img-height: 180px;
    margin-bottom: 40px;
    .title {
        margin-top: 40px;
        margin-bottom: 48px;
        text-align: center;
        color: #1a0b5b;
        font-size: 4.2rem;
    }
    .product-custom {
        width: calc(25% - 28px);
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        position: relative;
    }
`;
const ProductParticular = styled.div`
    text-align: center;
    .product-name {
        color: #151875;
        text-align: center;
        margin-top: 15px;
        font-size: 1.6rem;
        font-family: "Lato";
        font-weight: 600;
        line-height: 26px;
        margin-bottom: 8px;
    }
    .saled-price {
        color: #151875;
        font-size: 1.4rem;
    }
    .old-price {
        font-size: 1.2rem;
        line-height: 14px;
        margin-left: 10px;
        text-decoration-line: line-through;
        color: rgba(21, 24, 117, 0.3);
    }
`;

const ProductSaleOffList = styled.div`
    margin-top: 40px;
    .product-image {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        height: 270px;
    }
    .product-sale-off {
        flex: 1.5;
        width: 100%;
        height: 270px;
        &:first-child {
            flex: 2;
            .product-image {
                background-color: #fff6fb;
            }
        }
        &:nth-child(2) {
            flex: 2;
            .product-image {
                background-color: #eeeffb;
            }
        }
    }
    .title-ads {
        color: #151875;
        font-size: 2.6rem;
    }
    .sale-collection {
        position: absolute;
        position: absolute;
        top: 34px;
        left: 25px;
    }
    .navigate {
        display: block;
        margin-top: 11px;
        font-weight: 600;
        font-family: "Lato";
        color: #fb2e86;
        font-size: 1.6rem;
    }
`;
const Column = styled.div`
    box-shadow: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .product-image {
        height: 74px;
        width: 107px;
        box-shadow: none;
    }
    .product-list-column {
        height: 74px;
        box-shadow: none;
        display: flex;
        align-items: center;
    }
    .product-name {
        color: #151875;
        text-align: center;
    }
    .old-price {
        font-size: 1.2rem;
        line-height: 14px;
        margin-left: 10px;
        text-decoration-line: line-through;
        color: rgba(21, 24, 117, 0.3);
    }
`;

export default TrendingProduct;
