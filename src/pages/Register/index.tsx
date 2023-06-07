import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import Input from "../../component/Input";
import BranchImage from "../../component/BranchIcon";
import { RegisterSchema } from "../../validation";
import path from "../../routes/path";
import Button from "../../component/Button";
import storage from "../../helpers/storage";
import STORAGE_KEY from "../../constants";

import authApi from "../../api/auth";
interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
function Register() {
    const navigate = useNavigate();
    const initialValues: IFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        touched,
        handleBlur,
        isSubmitting,
    } = useFormik({
        initialValues,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const { confirmPassword, ...body } = values;
                const res = await authApi.register(body);
                storage.set(STORAGE_KEY.ACCESS_KEY, res.data.accessToken);
                storage.set(STORAGE_KEY.REFRESH_KEY, res.data.refreshToken);

                navigate(path.home, { replace: true });
            } catch (err) {
                toast.error("Have an error");
            }
        },
        validationSchema: RegisterSchema,
    });
    return (
        <Wrapper>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <h2 className="title">Register</h2>
                    <p className="sub-title">
                        Please Register using account detail bellow.
                    </p>
                    <FormGroup>
                        <Input
                            label="Your Last Name"
                            value={values.lastName}
                            id="last-name"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.lastName}
                            touched={touched.lastName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            label="Your First Name"
                            value={values.firstName}
                            id="first-name"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.firstName}
                            touched={touched.firstName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            label="Email Address"
                            value={values.email}
                            id="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            touched={touched.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            label="Password "
                            value={values.password}
                            id="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password}
                            touched={touched.password}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            label="Confirm Password"
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            value={values.confirmPassword}
                            error={errors.confirmPassword}
                            touched={touched.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Sign up</Button>
                    </FormGroup>
                </Form>
                <div className="login-option">
                    <p>Already have an account ?</p>
                    <Link to="/login" className="navigate-btn">
                        Login
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
    .login-option {
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
const Form = styled.form`
    text-align: center;
    .title {
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
const FormGroup = styled.div`
    --input-width: 432px;
    margin-top: 23px;
    p {
        text-align: left;
        margin-top: 13px;
        margin-left: calc((var(--form-width) - var(--input-width) - 5px) / 2);
    }
    &:first-child {
        margin-top: 14px;
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

export default Register;
//coding conventions
