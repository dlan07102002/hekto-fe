import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductList from "../../../component/ProductList";
import { IProduct } from "../../../interfaces";
import { CartIcon, HeartIcon, SearchIcon } from "../../../component/icons";
import productApi from "../../../api/product";
interface IProps {
    data: IProduct[];
}
const FeaturedProduct: React.FC<IProps> = (data): JSX.Element => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const featureProduct: IProduct[] = data.data;

    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    useEffect(() => {
        setProducts(featureProduct);
    }, [featureProduct]);

    const handleLikeItem = async (id: number, isLiked: boolean) => {
        if (isLiked) {
            productApi.unlike(id);
        } else productApi.like(id);
        setProducts(
            products.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        isLiked: Number(!product.isLiked),
                    };
                }
                return product;
            })
        );
    };

    return (
        <Wrapper>
            <h2 className="title">Featured Products</h2>

            <ProductList>
                {products &&
                    products.map((product: IProduct) => {
                        const id = product.id;
                        return (
                            <Product key={id} className="product-custom">
                                <ProductOption className="product-hover">
                                    <ul className="product-options">
                                        <li className="product-options-icon">
                                            <CartIcon />
                                        </li>
                                        <li
                                            onClick={() =>
                                                handleLikeItem(
                                                    product.id,
                                                    !!product.isLiked
                                                )
                                            }
                                            className="product-options-icon"
                                        >
                                            <HeartIcon
                                                className={
                                                    product.isLiked
                                                        ? "active"
                                                        : ""
                                                }
                                            />
                                        </li>
                                        <li className="product-options-icon">
                                            <SearchIcon />
                                        </li>
                                    </ul>
                                </ProductOption>
                                <div onClick={() => handleClick(id)}>
                                    <div className="view-detail">
                                        <span>View Details</span>
                                    </div>
                                    <ProductImage className="product-image">
                                        <img
                                            crossOrigin="anonymous"
                                            src={product.images[0].url}
                                            alt={product.name}
                                        />
                                    </ProductImage>
                                    <ProductDescription>
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
                                    </ProductDescription>
                                </div>
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
    position: relative;
    &:hover {
        cursor: pointer;
        background-color: #2f1ac4;
        .product-name,
        .product-code,
        .product-price {
            color: #fff;
        }
        .product-hover {
            display: block;
        }
        .view-detail {
            display: block;
        }
    }
    .view-detail {
        display: none;
        position: absolute;
        z-index: 2;
        margin-top: 189px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #08d15f;
        width: 94px;
        height: 29px;
        font-size: 1.2rem;
        text-align: center;
        line-height: 29px;
        border-radius: 2px;
    }
`;
const ProductOption = styled.div`
    display: none;
    position: absolute;
    background-color: transparent;
    z-index: 2;
    .product-options {
        display: flex;
        align-items: center;
    }
    .product-options-icon {
        width: 30px;
        height: 30px;
        margin-left: 16px;
        margin-top: 18px;
        position: relative;
        svg {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            path {
                fill: #1db4e7;
                /* linear-gradient(#1389FF, #1DB4E7); */
            }
        }
        .active {
            path {
                fill: #fb2e86;
            }
        }
    }
    .product-options-icon:hover {
        background-color: #eeeffb;

        border-radius: 30px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.05);

        svg {
            path {
                fill: #2f1ac4;
            }
        }
        .active {
            path {
                fill: #fb2e86;
            }
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
const ProductDescription = styled.div`
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
