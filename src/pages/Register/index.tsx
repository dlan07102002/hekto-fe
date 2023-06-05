import styled from "styled-components";
import Input from "../../component/Input";
import BranchImage from "../../component/BranchIcon";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../validation";
import { useFormik } from "formik";
import path from "../../routes/path";
import Button from "../../component/Button";
interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
function Register() {
    const navigate = useNavigate();
    // const initialValues: IFormValues = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    // };
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        touched,
        handleBlur,
        isSubmitting,
    } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);
            await new Promise((resolve) => {
                console.log(1);
                setTimeout(() => {
                    resolve({});
                }, 2000);
            });
            console.log(values);
            setSubmitting(false);
            navigate(path.home);
        },
        validationSchema: RegisterSchema,
    });
    console.log(values);
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
const FormGroup = styled.div`
    --input-width: 432px;
    margin-top: 14px;
    p {
        text-align: left;
        margin-top: 13px;
        margin-left: calc((var(--form-width) - var(--input-width) - 5px) / 2);
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
