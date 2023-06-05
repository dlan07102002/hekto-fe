import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .required("This field is required")
        .email("Email is invalid")
        .max(191, "Max length is 191 characters"),
    password: yup
        .string()
        .required("This field is required")
        .min(4, "Min length is 4 characters"),
});
export const RegisterSchema = yup.object().shape({
    lastName: yup.string().required("This field is required"),
    firstName: yup.string().required("This field is required"),
    email: yup
        .string()
        .required("This field is required")
        .email("Email is invalid")
        .max(191, "Max length is 191 characters"),
    password: yup
        .string()
        .required("This field is required")
        .min(4, "Min length is 4 characters"),
    confirmPassword: yup
        .string()
        .required("This field is required")
        .oneOf([yup.ref("password")], "Password must match"),
});
