import styled from "styled-components";
import Input from "../../component/Input";
import { Link } from "react-router-dom";
import BranchImage from "./BranchIcon";
function Register() {
    return (
        <>
            <Wrapper>
                <Form>
                    <h2 className="title">Register</h2>
                    <p>Please Register using account detail bellow.</p>
                    <InputField>
                        <Input label="" placeholder="Email Address" />
                        <Input label="" placeholder="Password" />
                        <Input label="" placeholder="Re-type Password" />

                        <button>Sign up</button>
                    </InputField>
                    <div className="login-option">
                        <p>Already have an account ?</p>
                        <Link to="/login">Login</Link>
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

    .login-option {
        p {
            color: #9096b2;
            margin-top: 8px;
            font-size: 1.6rem;
            display: inline-block;
        }
        a {
            text-decoration: none;
            color: #fb2e86;
            margin-left: 8px;
            cursor: pointer;
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

export default Register;
//coding conventions
