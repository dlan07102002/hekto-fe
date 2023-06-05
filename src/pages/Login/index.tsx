import styled from "styled-components";
import Input from "../../component/Input";
import BranchImage from "../../component/BranchIcon";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../../validation";
import path from "../../routes/path";
import Button from "../../component/Button";
interface IFormValues {
    email: string;
    password: string;
}

function Login() {
    const navigate = useNavigate();
    const initialValues: IFormValues = {
        email: "",
        password: "",
    };
    // Form-group thành 1 phần (input label error-mess)

    const { values, errors, handleChange, handleSubmit, touched, handleBlur } =
        useFormik({
            initialValues,
            onSubmit: (values) => {
                console.log(values);
                navigate(path.home);
            },
            validationSchema: LoginSchema,
        });

    return (
        <Wrapper>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <h2 className="title">Login</h2>
                    <p className="sub-title">
                        Please login using account detail bellow.
                    </p>
                    <FormGroup>
                        <Input
                            value={values.email}
                            label=""
                            id="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            touched={touched.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            value={values.password}
                            label=""
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password}
                            touched={touched.password}
                        />
                        <p className="sub-title">Forgot your password?</p>
                        <Button type="submit">Sign in</Button>
                    </FormGroup>
                </Form>
                <div className="register-option">
                    <p>Don’t have an Account?</p>
                    <Link to="/register" className="navigate-btn">
                        Create account
                    </Link>
                </div>
            </Container>
            <BranchImage />
        </Wrapper>
    );
}
const Wrapper = styled.div`
    p {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 1.6rem;
    }
`;
const Container = styled.div`
    text-align: center;
    --form-width: 544px;
    width: var(--form-width);
    min-height: 474px;
    box-shadow: 0px 0px 25px 10px #f8f8fb;
    margin: 0 auto;
    .title {
        padding-top: 50px;
        color: black;
        font-size: 3.2rem;
        margin-top: 50px;
    }
    .sub-title {
        margin-top: 7px;
        color: #9096b2;
        font-size: 1.6rem;
    }
    .register-option {
        text-align: center;
        width: 100%;
        p {
            margin-top: 8px;
            color: #9096b2;
            display: inline-block;
        }
        .navigate-btn {
            text-decoration: none;
            color: #fb2e86;
            margin-left: 10px;
            cursor: pointer;
        }

        .navigate-btn:hover {
            opacity: 0.8;
            font-weight: 600;
        }
    }
`;

const Form = styled.form``;

const FormGroup = styled.div`
    --input-width: 432px;
    margin-top: 14px;

    .sub-title {
        text-align: left;
        margin-top: 13px;
        margin-left: calc((var(--form-width) - var(--input-width)) / 2);
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
const ErrorMessage = styled.div`
    color: red;
`;
export default Login;
//coding conventions
