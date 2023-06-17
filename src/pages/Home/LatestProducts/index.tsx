import styled from "styled-components";
import ProductList from "../../../component/ProuductList";
import { IProduct } from "../../../interfaces";
import { useNavigate } from "react-router-dom";

interface IProps {
    data: IProduct[];
}
const LatestProducts: React.FC<IProps> = (data) => {
    const latestProduct = data.data;
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <Wrapper>
            <h2 className="title">Latest Products</h2>
            <ProductList>
                {latestProduct &&
                    latestProduct.map((product: IProduct) => (
                        <Product
                            onClick={() => handleClick(product.id)}
                            key={product.id}
                        >
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
                                    <span className="old-price">$65.00</span>
                                </div>
                            </ProductDescription>
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
