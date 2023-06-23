import styled from "styled-components";
import { useEffect, useState } from "react";
import {
    faInstagram,
    faFacebook,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subnav from "../../component/Header/Subnav";
import path from "../../routes/path";
import ProductList from "../../component/ProductList";
import { IProduct } from "../../interfaces";

import {
    ArrowRight,
    CartIcon,
    HeartIcon,
    SearchIcon,
    StarIcon,
} from "../../component/icons";
import BranchImage from "../../component/BranchIcon";
import productApi from "../../api/product";
import { useParams } from "react-router-dom";
const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        if (id) {
            setIsLoading(true);
            productApi
                .show(Number(id))
                .then((res) => {
                    setProduct(res.data);
                    setRelatedProducts(res.relatedProducts);
                })
                .finally(() => setIsLoading(false));
        }
    }, [id]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Wrapper>
            <Subnav path={path.productDetail} name="Product Details" />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <Container>
                    {product && (
                        <ProductList className="product_list-custom">
                            <Product className="product">
                                {product.images.map((image, index) => {
                                    if (index === product.images.length - 1)
                                        return (
                                            <ProductImage
                                                key={image.id}
                                                className="main"
                                            >
                                                <img
                                                    crossOrigin="anonymous"
                                                    src={image.url}
                                                    alt="product"
                                                />
                                            </ProductImage>
                                        );
                                    return (
                                        <ProductImage>
                                            <img
                                                key={image.id}
                                                crossOrigin="anonymous"
                                                src={image.url}
                                                alt="product"
                                            />
                                        </ProductImage>
                                    );
                                })}
                            </Product>
                            <ProductParticular>
                                <span className="product-name">
                                    {product.name}
                                </span>
                                <div>
                                    <span className="saled-price">
                                        ${product.price}
                                    </span>
                                    <span className="old-price">$6500</span>
                                </div>
                                <p className="product-desc">
                                    {product.description}
                                </p>
                                <div className="product-actions">
                                    <span>Add to Cart</span>
                                    <HeartIcon />
                                </div>
                                <p className="product-categories">
                                    Categories:{" "}
                                </p>
                                <p className="product-tags">Tags</p>
                                <div className="product-share">
                                    <span>Share</span>
                                    <ul className="social-list">
                                        <li className="social-item">
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                            />
                                        </li>
                                        <li className="social-item">
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </li>
                                        <li className="social-item">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </li>
                                    </ul>
                                </div>
                            </ProductParticular>
                        </ProductList>
                    )}

                    <ProductInfo>
                        <div className="wrapper">
                            <ul className="product-info-options">
                                <li>Description</li>
                                <li>Additional Info</li>
                                <li>Reviews</li>
                                <li>Video</li>
                            </ul>
                            <div>
                                <h3 className="option-titles">
                                    Varius tempor.
                                </h3>
                                <p className="detail-desciption">
                                    Aliquam dis vulputate vulputate integer
                                    sagittis. Faucibus dolor ornare faucibus vel
                                    sed et eleifend habitasse amet. Montes,
                                    mauris varius ac est bibendum. Scelerisque
                                    a, risus ac ante. Velit consectetur neque,
                                    elit, aliquet. Non varius proin sed urna,
                                    egestas consequat laoreet diam tincidunt.
                                    Magna eget faucibus cras justo, tortor sed
                                    donec tempus. Imperdiet consequat, quis diam
                                    arcu, nulla lobortis justo netus dis. Eu in
                                    fringilla vulputate nunc nec. Dui, massa
                                    viverr .
                                </p>
                            </div>
                            <div className="more-detail">
                                <h3 className="option-titles">More Details</h3>
                                <ul className="more-detail-list">
                                    <li className="more-detail-item">
                                        <ArrowRight />
                                        Aliquam dis vulputate vulputate integer
                                        sagittis. Faucibus ds diam arcu, nulla
                                        lobortis justo netus dis. Eu in
                                        fringilla vulputate nunc nec. Dui, massa
                                        viverr .
                                    </li>
                                    <li className="more-detail-item">
                                        <ArrowRight />
                                        Aliquam dis vulputate vulputate integer
                                        sagittis. Faucibus ds diam arcu, nulla
                                        lobortis justo netus dis. Eu in
                                        fringilla vulputate nunc nec. Dui, massa
                                        viverr .
                                    </li>
                                    <li className="more-detail-item">
                                        <ArrowRight />
                                        Aliquam dis vulputate vulputate integer
                                        sagittis. Faucibus ds diam arcu, nulla
                                        lobortis justo netus dis. Eu in
                                        fringilla vulputate nunc nec. Dui, massa
                                        viverr .
                                    </li>
                                    <li className="more-detail-item">
                                        <ArrowRight />
                                        Aliquam dis vulputate vulputate integer
                                        sagittis. Faucibus ds diam arcu, nulla
                                        lobortis justo netus dis. Eu in
                                        fringilla vulputate nunc nec. Dui, massa
                                        viverr .
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ProductInfo>
                    <RelatedProducts>
                        <h3 className="title">Related Products</h3>
                        <div className="related-product-list">
                            {relatedProducts &&
                                relatedProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="related-product-item"
                                    >
                                        <div className="related-product-images">
                                            <img
                                                src={product.images[0].url}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="related-product-descriptions">
                                            <div className="sub-title">
                                                <p className="related-product-names">
                                                    {product.name}
                                                </p>
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
                                            </div>

                                            <p className="related-product-prices">
                                                ${product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </RelatedProducts>
                </Container>
            )}
            <BranchImage />
        </Wrapper>
    );
};
const Wrapper = styled.div``;
const Container = styled.div`
    margin-top: 142px;
    margin: auto;
    border-radius: 2px;
    .product_list-custom {
        height: 510px;
        box-shadow: 0px 0px 25px 10px #f6f4fd;
        position: relative;
    }
`;
const Product = styled.div`
    margin: 0 7px;
    box-shadow: none;
    height: 155px;

    .main {
        position: absolute;
        top: 0;
        left: 176px;
        width: 375px;
        height: 487px;
        img {
            height: 100%;
            object-fit: contain;
        }
    }
`;
const ProductImage = styled.div`
    box-sizing: border-box;
    background-color: #c4c4c4;
    margin: 0;
    height: 155px;
    margin-right: 32px;
    margin-top: 11px;
    width: 155px;
    img {
        margin: auto;
        object-fit: cover;
        width: 215px;
        max-width: 100%;
        max-height: 100%;
        display: block;
    }
`;
const ProductParticular = styled.div`
    width: 520px;
    margin-left: 400px;
    .product-name {
        display: block;
        margin-top: 50px;
        margin-bottom: 14px;
        color: #0d134e;
        font-size: 3.6rem;
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
    .product-desc {
        margin-top: 12px;
        color: #9295aa;
        font-family: "Lato";
        line-height: 30.92px;
    }
    .product-actions {
        margin-left: 58px;
        display: flex;
        align-items: center;
        margin-top: 34px;
        color: #151875;
        span {
            font-size: 1.6rem;
            margin-right: 27.5px;
        }
        svg {
            path {
                fill: #535399;
            }
            margin-right: 30px;
        }
        svg:hover {
            opacity: 0.8;
            cursor: pointer;
        }
    }
    .product-categories {
        color: #151875;
        margin-top: 16px;
        line-height: 29px;
        font-size: 1.6rem;
    }
    .product-tags {
        margin-top: 10px;
        color: #151875;
        line-height: 29px;
        font-size: 1.6rem;
    }
    .product-share {
        display: flex;
        align-items: center;
        margin-top: 10px;
        color: #151875;
        line-height: 29px;
        font-size: 1.6rem;
        span {
            margin-right: 20px;
        }
        .social-list {
            display: flex;
        }
        .social-item {
            margin-right: 15px;
            &:hover {
                cursor: pointer;
                svg {
                    path {
                        fill: #fb2e86;
                    }
                }
            }
        }
    }
`;
const ProductInfo = styled.div`
    margin-top: 130px;
    height: 649px;
    width: 100%;
    background-color: #f9f8fe;
    .wrapper {
        padding-top: 106px;
        width: 1135px;
        margin: auto;
    }
    .product-info-options {
        display: flex;
        color: #151875;
        font-size: 2.4rem;
        width: 60%;
        justify-content: space-between;
    }
    .option-titles {
        margin-top: 60px;
        margin-bottom: 14px;
        color: #151875;
        font-size: 2.2rem;
    }
    .detail-desciption,
    .more-detail-list {
        color: #a9acc6;
        font-size: 1.6rem;
        font-family: "Roboto";
    }
    .detail-desciption {
        text-align: justify;
        line-height: 29px;
    }
    .more-detail-list {
        margin-bottom: 122px;
    }
    .more-detail-item {
        margin-top: 14px;
    }
`;
const RelatedProducts = styled.div`
    margin-top: 126px;
    width: 1135px;
    margin: auto;
    margin-top: 126px;
    margin-bottom: 125px;

    .title {
        color: #101750;
        font-size: 3.6rem;
        margin-bottom: 47px;
    }
    .related-product-list {
        display: flex;
        justify-content: space-between;
    }
    .related-product-images {
        img {
            object-fit: cover;
            width: 270px;
            max-width: 100%;
            height: 340px;
            max-height: 100%;
        }
    }
    .related-product-item {
        width: 270px;
    }

    .related-product-descriptions {
        margin-top: 20px;
    }
    .sub-title {
        display: flex;
        justify-content: space-between;
    }
    .product-rating {
        display: flex;
        li {
            margin-left: 5px;
        }
    }
    .related-product-names {
        color: #151875;
        margin-right: 49.04px;
    }
    .related-product-prices {
        margin-top: 15px;

        color: #151875;
    }
`;
export default ProductDetail;

//coding conventions
