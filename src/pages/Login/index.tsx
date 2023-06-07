import styled from "styled-components";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";

import Input from "../../component/Input";
import BranchImage from "../../component/BranchIcon";
import { LoginSchema } from "../../validation";
import path from "../../routes/path";
import Button from "../../component/Button";
import authApi from "../../api/auth";
import storage from "../../helpers/storage";
import STORAGE_KEY from "../../constants";

interface IFormValues {
    email: string;
    password: string;
}

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get("continue_url") || path.home;
    const initialValues: IFormValues = {
        email: "",
        password: "",
    };
    // Form-group thành 1 phần (input label error-mess)
    const { values, errors, handleChange, handleSubmit, touched, handleBlur } =
        useFormik({
            initialValues,
            onSubmit: async (values) => {
                try {
                    const res = await authApi.login(values);
                    storage.set(STORAGE_KEY.ACCESS_KEY, res.data.accessToken);
                    storage.set(STORAGE_KEY.REFRESH_KEY, res.data.refreshToken);
                    navigate(redirectPath, { replace: true });
                } catch (err) {
                    toast.error("Have an error");
                }
            },
            validationSchema: LoginSchema,
        });
    useEffect(() => {
        const accessToken = storage.get(STORAGE_KEY.ACCESS_KEY);
        if (accessToken) {
            navigate(redirectPath, { replace: true });
        }
    }, [redirectPath, navigate]);
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
                            id="email"
                            name="email"
                            label="Email Address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            touched={touched.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            value={values.password}
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
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
    &:first-child {
        margin-top: 14px;
    }
    margin-top: 23px;
    .sub-title {
        text-align: left;
        margin-top: 13px;
        margin-left: calc((var(--form-width) - var(--input-width)) / 2);
    }

    Button {
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
