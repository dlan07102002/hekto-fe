import styled from "styled-components";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    touched?: boolean;
}
const Input: React.FC<IProps> = ({ label, error, touched, ...inputProps }) => {
    return (
        <Wrapper>
            <input className="input" {...inputProps} placeholder={label} />
            {touched && !!error && <ErrorMessage>{error}</ErrorMessage>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    Input {
        box-sizing: border-box;
        border: 1px solid #c2c5e1;
        border-radius: 2px;
        padding-left: 16px;
        margin-top: 23px;
        width: var(--input-width);
        height: 52px;
        color: #9096b2;
        outline: none;
    }
`;
const ErrorMessage = styled.div`
    font-family: monospace;
    display: inline-block;
    color: rgb(144, 150, 178);
    position: absolute;
    font-size: 1.4rem;
    bottom: -20%;
    left: 55px;
    color: red;
    z-index: 0;
`;
export default Input;
