import * as Yup from 'yup';
export const LoginFormSchema = Yup.object({
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().required("Please Enter Your Password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,"Enter Strong Password including Capital letter, Special characters and numbers"),


   
})