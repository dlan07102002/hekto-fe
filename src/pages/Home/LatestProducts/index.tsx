import styled from "styled-components";
import ProductList from "../../../component/ProductList";
import { IProduct } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import { CartIcon, HeartIcon, SearchIcon } from "../../../component/icons";
import productApi from "../../../api/product";
import { useState, useEffect } from "react";
interface IProps {
    data: IProduct[];
}
const LatestProducts: React.FC<IProps> = (data) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const latestProduct = data.data;
    const navigate = useNavigate();

    useEffect(() => {
        setProducts(latestProduct);
    }, [latestProduct]);

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    const handleLikeItem = (id: number, isLiked: boolean) => {
        if (!isLiked) {
            productApi.like(id);
        } else {
            productApi.unlike(id);
        }
        setProducts(
            products.map((product) => {
                if (product.id === id) {
                    return { ...product, isLiked: Number(!product.isLiked) };
                }
                return product;
            })
        );
    };

    return (
        <Wrapper>
            <h2 className="title">Latest Products</h2>
            <ProductList>
                {products &&
                    products.map((product: IProduct) => (
                        <Product key={product.id}>
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
                                                product.isLiked ? "active" : ""
                                            }
                                        />
                                    </li>
                                    <li className="product-options-icon">
                                        <SearchIcon />
                                    </li>
                                </ul>
                            </ProductOption>
                            <div onClick={() => handleClick(product.id)}>
                                <ProductImage>
                                    <img
                                        crossOrigin="anonymous"
                                        src={product.images[0].url}
                                        alt={product.name}
                                    />
                                </ProductImage>
                                <ProductDescription>
                                    <span className="product-name">
                                        {product.name}
                                    </span>
                                    <div>
                                        <span className="saled-price">
                                            {product.price}
                                        </span>
                                        <span className="old-price">
                                            $65.00
                                        </span>
                                    </div>
                                </ProductDescription>
                            </div>
                        </Product>
                    ))}
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
`;
const Product = styled.div`
    position: relative;
    box-shadow: none;
    height: 361px;
    width: calc(33% - 28px);
    margin: 0 7px;
    &:hover {
        cursor: pointer;
        background-color: #2f1ac4;
        .product-name,
        .old-price,
        .saled-price {
            color: #fff;
        }
        .product-hover {
            display: block;
        }
    }
`;

const ProductOption = styled.div`
    display: none;
    position: absolute;
    background-color: transparent;
    z-index: 2;
    bottom: 130px;
    .product-options {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .product-options-icon {
        width: 30px;
        height: 30px;
        margin-left: 15px;
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
    height: 270px;
    background-color: #f6f7fb;
    box-sizing: border-box;
    position: relative;
    img {
        object-fit: cover;
        max-width: 100%;
        width: 245px;
        max-height: 100%;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
const ProductDescription = styled.div`
    display: flex;
    justify-content: space-between;
    height: 44px;
    align-items: center;
    .product-name {
        margin-left: 6px;
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
        margin-right: 6px;
    }
`;
export default LatestProducts;
