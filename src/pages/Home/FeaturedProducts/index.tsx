import styled from "styled-components";
import Product from "../../../component/Products";
import ProductList from "../../../component/ProuductList";
import { IProduct } from "../../../interfaces";

const FeaturedProduct = ({ ...props }) => {
    const featureProduct = props.data;

    return (
        <Wrapper>
            <h2 className="title">Featured Products</h2>

            <ProductList>
                {featureProduct &&
                    featureProduct.map((data: IProduct) => {
                        return (
                            <Product
                                key={data.id}
                                data={data}
                                className="product-custom"
                            >
                                <ProductParticular>
                                    <p className="product-name">{data.name}</p>
                                    <img
                                        className="product-color"
                                        src="/src/component/assets/images/product-color.png"
                                    />
                                    <p className="product-code">
                                        {data.description}
                                    </p>
                                    <p className="product-price">
                                        ${data.price}
                                    </p>
                                </ProductParticular>
                            </Product>
                        );
                    })}
                {/* <Product
                    src="/src/component/assets/images/featured/img1.png"
                    alt="product"
                    className="product-custom"
                >
                    <ProductParticular>
                        <p className="product-name">Cantilever chair</p>
                        <img
                            className="product-color"
                            src="/src/component/assets/images/product-color.png"
                        />
                        <p className="product-code">Code - 151875</p>
                        <p className="product-price">$42.00</p>
                    </ProductParticular>
                </Product> */}
            </ProductList>
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
    .product-custom {
        width: calc(25% - 14px);
        .product-image {
            img {
                width: 80%;
                height: 80%;
            }
        }
    }
`;
const ProductParticular = styled.div`
    .product-name {
        color: #fb2e86;
        text-align: center;
        margin-top: 15px;
        font-size: 1.8rem;
    }

    .product-color {
        display: block;
        margin: 15px auto 12px auto;
    }
    .product-code {
        margin-top: 12px;
        color: #151875;
        font-size: 1.4rem;
        text-align: center;
    }
    .product-price {
        font-weight: 500;
        font-family: "Lato";
        margin-top: 12px;
        color: #151875;
        font-size: 1.4rem;
        text-align: center;
    }
`;
export default FeaturedProduct;
