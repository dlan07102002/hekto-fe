import styled from "styled-components";

const ProductList = ({ ...props }) => {
    return <Wrapper>{props.children}</Wrapper>;
};
const Wrapper = styled.div`
    margin: auto;
    width: 1135px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1;
`;
export default ProductList;
