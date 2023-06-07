import styled from "styled-components";

const Product = ({ ...props }) => {
    return (
        <Wrapper>
            <ProductImage>
                <img crossOrigin="anonymous" src={props.src} alt={props.alt} />
            </ProductImage>
            <ProductDetail>
                <p className="product-name">Cantilever chair</p>
                <img
                    className="product-color"
                    src="/src/component/assets/images/product-color.png"
                />
                <p className="product-code">Code - 151875</p>
                <p className="product-price">$42.00</p>
            </ProductDetail>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 10px 0px;
    width: 270px;
    height: 361px;
`;
const ProductImage = styled.div`
    margin: 0 auto;
    height: 236px;
    background-color: #f6f7fb;

    img {
        margin: auto;
        display: block;
    }
`;
const ProductDetail = styled.div`
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
export default Product;
