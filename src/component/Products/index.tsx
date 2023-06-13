import styled from "styled-components";
// import { IProduct } from "../../interfaces";
// interface IProps {
//     data: IProduct;
//     props: Object;
// }
const Product = ({ ...props }) => {
    const urlPath = props.data ? props.data.images[0].url : props.src;

    return (
        <Wrapper className={props.className}>
            <ProductImage className="product-image">
                <img crossOrigin="anonymous" src={urlPath} alt={props.alt} />
            </ProductImage>
            {props.children}
        </Wrapper>
    );
};
const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 10px 0px;
    height: 361px;
    margin: 0 7px;
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default Product;
