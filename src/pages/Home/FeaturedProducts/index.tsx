import styled from "styled-components";

import ProductList from "../../../component/ProductList";
import { IProduct } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
interface IProps {
    data: IProduct[];
}
const FeaturedProduct: React.FC<IProps> = (data): JSX.Element => {
    const featureProduct = data.data;
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);
    };
    return (
        <Wrapper>
            <h2 className="title">Featured Products</h2>

            <ProductList>
                {featureProduct &&
                    featureProduct.map((product: IProduct) => {
                        const id = product.id;
                        return (
                            <Product
                                onClick={() => handleClick(id)}
                                key={id}
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
                                    <p className="product-name">
                                        {product.name}
                                    </p>
                                    <img
                                        className="product-color"
                                        src="/src/component/assets/images/product-color.png"
                                    />
                                    <p className="product-code">
                                        {product.description}
                                    </p>
                                    <p className="product-price">
                                        ${product.price}
                                    </p>
                                </ProductParticular>
                            </Product>
                        );
                    })}
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
const Product = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 10px 0px;
    height: 361px;
    margin: 0 7px;
    &:hover {
        cursor: pointer;
        background-color: #2f1ac4;
        .product-name,
        .product-code,
        .product-price {
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
