import styled from "styled-components";
import ProductList from "../../../component/ProuductList";
import { IProduct } from "../../../interfaces";
import { useNavigate } from "react-router-dom";

interface IProps {
    data: IProduct[];
}
const TrendingProduct: React.FC<IProps> = (data) => {
    const trendingProducts = data.data;

    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <Wrapper>
            <h2 className="title">Trending Products</h2>
            <ProductList>
                {trendingProducts &&
                    trendingProducts.map((product: IProduct) => (
                        <Product
                            onClick={() => handleClick(product.id)}
                            key={product.id}
                            className="product-custom"
                        >
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src={product.images[0].url}
                                    alt={product.name}
                                />
                            </ProductImage>
                            <ProductParticular>
                                <p className="product-name">{product.name}</p>
                                <div>
                                    <span className="saled-price">
                                        ${product.price}
                                    </span>
                                    <span className="old-price">$6500</span>
                                </div>
                            </ProductParticular>
                        </Product>
                    ))}

                <ProductSaleOffList>
                    <ProductList>
                        <Product className="product-custom product-sale-off">
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src="/src/component/assets/images/trending/img4.png"
                                    alt="product"
                                />
                            </ProductImage>
                            <div className="sale-collection ">
                                <p className="title-ads">
                                    23% off in all products
                                </p>
                                <a href="" className="navigate">
                                    Shop now
                                </a>
                            </div>
                        </Product>
                        <Product className="product-custom product-sale-off">
                            <ProductImage className="product-image">
                                <img
                                    crossOrigin="anonymous"
                                    src="/src/component/assets/images/trending/img5.png"
                                    alt="product"
                                />
                            </ProductImage>
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
                            <Product className="product-list-column">
                                <ProductImage className="product-image">
                                    <img
                                        crossOrigin="anonymous"
                                        src="/src/component/assets/images/trending/img1.png"
                                        alt="product"
                                    />
                                </ProductImage>
                                <div>
                                    <p className="product-name">
                                        Executive Seat chair
                                    </p>
                                    <p className="old-price">$42.00</p>
                                </div>
                            </Product>
                            <Product className="product-list-column">
                                <ProductImage className="product-image">
                                    <img
                                        crossOrigin="anonymous"
                                        src="/src/component/assets/images/trending/img2.png"
                                        alt="product"
                                    />
                                </ProductImage>
                                <div>
                                    <p className="product-name">
                                        Executive Seat chair
                                    </p>
                                    <p className="old-price">$42.00</p>
                                </div>
                            </Product>
                            <Product className="product-list-column">
                                <ProductImage className="product-image">
                                    <img
                                        crossOrigin="anonymous"
                                        src="/src/component/assets/images/trending/img3.png"
                                        alt="product"
                                    />
                                </ProductImage>
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
const Product = styled.div`
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 361px;
    margin: 0 7px;
    position: relative;
    &:hover {
        cursor: pointer;
        background-color: #2f1ac4;
        .product-name,
        .old-price,
        .saled-price {
            color: #fff;
        }
    }
`;
const ProductImage = styled.div`
    margin: 0 auto;
    height: 236px;
    background-color: #f6f7fb;
    box-sizing: border-box;
    position: relative;
    img {
        object-fit: cover;
        width: 171px;
        max-width: 100%;
        max-height: 100%;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const ProductParticular = styled.div`
    text-align: center;
    .product-name {
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
`;

export default TrendingProduct;
