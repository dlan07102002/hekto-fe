import styled from "styled-components";
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<IProps> = ({ children, ...buttonProps }) => {
    return (
        <Wrapper>
            <button {...buttonProps}>{children}</button>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    button {
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #fb2e86;
        color: #fff;
    }
    &:hover {
        opacity: 0.8;
    }
`;
export default Button;
