import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
interface IFormValues {
    email: string;
    password: string;
}
function App() {
    const initialValues: IFormValues = {
        email: "",
        password: "",
    };

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required("Trường này là bắt buộc")
            .email("Vui lòng nhập email"),
        password: yup
            .string()
            .required("Trường này là bắt buộc")
            .min(4, "Tối thiểu 4 kí tự"),
    });
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
            await new Promise((resolve) => {
                console.log(1);
                setTimeout(() => {
                    resolve({});
                }, 2000);
            });
            console.log(values);
            setSubmitting(false);
        },
        validationSchema: formSchema,
    });
    return (
        <Wrapper>
            <Form className="form-container" action="" onSubmit={handleSubmit}>
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
            </Form>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    font-size: 1.8rem;
    color: black;
    .form-container {
        margin-top: 50vh;
        background-color: #ccc;
        width: 500px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    }
`;
const Form = styled.form`
    display: flex;
    margin-left: 25%;
`;
const ErrorMessage = styled.p`
  position: absolute,
  color: red
`;
const SubmitButton = styled.button`
    &:disabled {
        opacity: 0.5;
        cursor: pointer;
        font-size: 2rem;
    }
`;
export default App;
