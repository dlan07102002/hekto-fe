import styled from "styled-components";
interface IProps {
    className: string;
    children: React.ReactNode;
}
const ProductList: React.FC<IProps> = ({ className, children }) => {
    return <Wrapper className={className}>{children}</Wrapper>;
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
