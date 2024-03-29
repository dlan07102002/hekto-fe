import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import Subnav from "../../component/Header/Subnav";
import path from "../../routes/path";
import ProductList from "../../component/ProductList";
import {
    CartIcon,
    HeartIcon,
    SearchIcon,
    StarIcon,
} from "../../component/icons";
import BranchImage from "../../component/BranchIcon";
import { useState, useEffect } from "react";
import { IProduct } from "../../interfaces";
import productApi from "../../api/product";

const SearchResult: React.FC = () => {
    const [products, setProduct] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const productColor = ["#DE9034", "#E60584", "#5E37FF"];

    const query = new URLSearchParams(location.search);
    const keyword = query.get("q");

    useEffect(() => {
        if (keyword) {
            setIsLoading(true);
            productApi
                .search({
                    limit: 5,
                    page: 1,
                    order: "createdAt:desc,id:desc",
                    search: keyword,
                })
                .then((res) => {
                    if (res.data) {
                        setProduct(res.data);
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [keyword]);
    const handleClickItem = (id: number) => {
        navigate(`/product/${id}`);
    };

    const handleLikeItem = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        isLiked: boolean,
        id: number
    ) => {
        e.stopPropagation();
        if (isLiked) {
            productApi.unlike(id);
        } else productApi.like(id);
        setProduct(
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
            <Subnav path={path.searchResult} name="Shop List" />
            <Container>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : products ? (
                    <ProductList className="product_list-custom">
                        {products.map((product) => {
                            return (
                                <Product
                                    key={product.id}
                                    onClick={() => handleClickItem(product.id)}
                                >
                                    <ProductImage>
                                        <img
                                            crossOrigin="anonymous"
                                            src={product.images[0].url}
                                            alt="product"
                                        />
                                    </ProductImage>
                                    <ProductDescription>
                                        <div className="product-title">
                                            <span className="product-name">
                                                {product.name}
                                            </span>
                                            <ul className="product-color-option">
                                                {productColor.map((color) => (
                                                    <li>
                                                        <button
                                                            style={{
                                                                backgroundColor:
                                                                    color,
                                                            }}
                                                            className="product-color-item"
                                                        ></button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span className="saled-price">
                                                ${product.price}
                                            </span>
                                            <span className="old-price">
                                                $65.00
                                            </span>
                                            <span>
                                                <ul className="product-rating">
                                                    <li>
                                                        <StarIcon />
                                                    </li>
                                                    <li>
                                                        <StarIcon />
                                                    </li>
                                                    <li>
                                                        <StarIcon />
                                                    </li>
                                                    <li>
                                                        <StarIcon />
                                                    </li>
                                                    <li>
                                                        <StarIcon />
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                        <p className="product-desc">
                                            {product.description}
                                        </p>
                                        <div className="product-actions">
                                            <button className="icon-btn">
                                                <CartIcon />
                                            </button>
                                            <button
                                                onClick={(e) =>
                                                    handleLikeItem(
                                                        e,
                                                        !!product.isLiked,
                                                        product.id
                                                    )
                                                }
                                                className="icon-btn"
                                            >
                                                <HeartIcon
                                                    className={
                                                        product.isLiked
                                                            ? "active"
                                                            : ""
                                                    }
                                                />
                                            </button>
                                            <button className="icon-btn">
                                                <SearchIcon />
                                            </button>
                                        </div>
                                    </ProductDescription>
                                </Product>
                            );
                        })}
                    </ProductList>
                ) : (
                    <h1>Không có kết quả phù hợp với từ khóa</h1>
                )}
            </Container>
            <BranchImage />
        </Wrapper>
    );
};
const Wrapper = styled.div``;

const Container = styled.div`
    margin-top: 142px;
    .product_list-custom {
        flex-direction: column;
    }
`;
const Product = styled.div`
    box-shadow: none;
    display: flex;
    margin: 0 7px;
    margin-top: 70px;
`;
const ProductImage = styled.div`
    box-sizing: border-box;
    position: relative;
    background-color: transparent;
    margin: 0;
    height: 216px;
    margin-right: 32px;

    img {
        object-fit: cover;
        width: 313px;
        max-width: 100%;
        max-height: 100%;
        display: block;
    }
`;
const ProductDescription = styled.div`
    width: 590px;
    height: 236px;
    .product-title {
        display: flex;
        margin-top: 50px;
        margin-bottom: 14px;
    }
    .product-name {
        display: block;

        margin-right: 12px;
        color: #111c85;
    }
    .product-color-option {
        display: flex;
    }
    .product-color-item {
        height: 12px;
        outline: none;
        border: none;
        margin-left: 6px;
        border-radius: 50%;
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
        margin-right: 18px;
        text-decoration-line: line-through;
    }
    .product-rating {
        display: flex;
    }
    .product-desc {
        margin-top: 12px;
        color: #9295aa;
        font-family: "Lato";
        line-height: 30.92px;
    }

    .product-actions {
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 20px;
        svg {
            path {
                fill: #535399;
            }
            margin-right: 30px;
        }
        .active {
            path {
                fill: #fb2e86;
            }
        }
        svg:hover {
            opacity: 0.8;
            cursor: pointer;
        }
        .icon-btn {
            background-color: transparent;
            outline: none;
            border: none;
        }
    }
`;

export default SearchResult;
//coding conventions
