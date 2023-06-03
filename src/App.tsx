import styled from "styled-components";
import * as yup from "yup";
import { useFormik } from "formik";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
interface IFormValues {
    email: string;
    password: string;
}

function App() {
    const initialValues: IFormValues = {
        email: "",
        password: "",
    };

    // const formSchema = yup.object().shape({
    //     email: yup
    //         .string()
    //         .required("Trường này là bắt buộc")
    //         .email("Vui lòng nhập email"),
    //     password: yup
    //         .string()
    //         .required("Trường này là bắt buộc")
    //         .min(4, "Tối thiểu 4 kí tự"),
    // });
    // const {
    //     values,
    //     errors,
    //     handleChange,
    //     handleSubmit,
    //     touched,
    //     handleBlur,
    //     isSubmitting,
    // } = useFormik({
    //     initialValues,
    //     onSubmit: async (values, { setSubmitting }) => {
    //         await new Promise((resolve) => {
    //             console.log(1);
    //             setTimeout(() => {
    //                 resolve({});
    //             }, 2000);
    //         });
    //         console.log(values);
    //         setSubmitting(false);
    //     },
    //     validationSchema: formSchema,
    // });

    return (
        <Wrapper>
            <Routes>
                {routes.map(
                    ({ path, element: Element, layout: Layout }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        />
                    )
                )}
            </Routes>
            {/* <Form className="form-container" action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="input"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && !!errors.email && (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        className="input"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.password && !!errors.password && (
                        <ErrorMessage>{errors.password}</ErrorMessage>
                    )}
                </div>
                <div className="form-group">
                    <SubmitButton
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                    >
                        Submit
                    </SubmitButton>
                </div>
            </Form> */}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    font-size: 1.8rem;
    color: #fff;
    height: calc(100vh - 160px);
    display: flex;
    background-color: #fff;
`;
const Form = styled.form`
    font-weight: bold;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    display: flex;
    background-color: #e0d3f5;
    .form-group {
        input {
            display: block;
            width: calc(100% - 64px);
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #fff;
            padding: 0;
        }
        width: 100%;
        margin: 0 auto;
        margin-left: 32px;
        margin-bottom: 54px;
    }
`;
const ErrorMessage = styled.p`
  position: absolute,
  color: red
`;
const SubmitButton = styled.button`
    display: block;
    width: calc(100% - 64px);
    padding: 4px 0;
    color: #fff;
    font-weight: bold;
    &:disabled {
        opacity: 0.5;
        cursor: pointer;
        font-size: 2rem;
    }
`;

export default App;
