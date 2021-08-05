import * as yup from "yup";


export const schema = yup.object().shape({
    firstName: yup.string().required("First Name should be required please"),
    lastName: yup.string().required(),
    email: yup.string().email("Enter a valid email").required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  export const yupTSchema = yup.object().shape({
    firstName: yup.string().required("yeyy it is requried"),
    age: yup.number().positive("yeww..oly +ve").integer("no aplas").required("&required man.."),
  });