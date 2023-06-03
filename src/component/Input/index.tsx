import styled from "styled-components";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    touched?: boolean;
}
const Input: React.FC<IProps> = ({ label, error, touched, ...inputProps }) => {
    return (
        <Wrapper>
            <label htmlFor={inputProps.id}>{label}</label>
            <input className="input" {...inputProps} />
            {touched && !!error && <ErrorMessage>{error}</ErrorMessage>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    Input {
        box-sizing: border-box;
        border: 1px solid #c2c5e1;
        border-radius: 2px;
        padding-left: 16px;
        margin-top: 23px;
        width: var(--input-width);
        height: 52px;
        color: #9096b2;
    }
`;
const ErrorMessage = styled.div``;
export default Input;
