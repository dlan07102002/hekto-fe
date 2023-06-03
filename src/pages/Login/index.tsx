import styled from "styled-components";
import Input from "../../component/Input";
import BranchImage from "./BranchIcon";
import { Link } from "react-router-dom";
function Login() {
    return (
        <>
            <Wrapper>
                <Form>
                    <h2 className="title">Login</h2>
                    <p>Please login using account detail bellow.</p>
                    <InputField>
                        <Input label="" placeholder="Email Address" />
                        <Input label="" placeholder="Password" />
                        <p>Forgot your password?</p>
                        <button>Sign in</button>
                    </InputField>
                    <div className="register-option">
                        <p>Don’t have an Account?</p>
                        <Link to="/register">Create account</Link>
                    </div>
                </Form>
            </Wrapper>
            <BranchImage />
        </>
    );
}
const Wrapper = styled.div`
    --form-width: 544px;
    width: var(--form-width);
    min-height: 474px;
    box-shadow: 0px 0px 25px 10px #f8f8fb;
    margin: 0 auto;
`;
const Form = styled.div`
    text-align: center;
    h2 {
        padding-top: 50px;
        color: black;
        font-size: 3.2rem;
        margin-top: 50px;
    }
    .register-option {
        p {
            color: #9096b2;
            margin-top: 8px;
            font-size: 1.6rem;
            display: inline-block;
        }
        a {
            text-decoration: none;
            color: #fb2e86;
            margin-left: 10px;
            cursor: pointer;
        }
        a:hover {
            opacity: 0.8;
            font-weight: 600;
        }
        text-align: center;
        width: 100%;
    }
`;
const InputField = styled.div`
    --input-width: 432px;
    margin-top: 14px;
    p {
        text-align: left;
        margin-top: 13px;
        margin-left: calc((var(--form-width) - var(--input-width) - 5px) / 2);
    }
    button {
        width: var(--input-width);
        font-size: 1.7rem;
        color: #fff;
        height: 47px;
        background-color: #fb2e86;
        border: none;
        border-radius: 3px;
        margin-top: 23px;
        margin-bottom: 20px;
    }
`;

export default Login;
//coding conventions
