import * as Yup from 'yup';


export const SignUpFormSchema = Yup.object({
// If user hit submit without entering the details, required messge ("") will be shown
name:Yup.string().min(3).required("Please Enter Your Name"),

email:Yup.string().email().required("Please Enter Your Email"),

phone:Yup.number().required("Please Enter Your Phone Number"),

password:Yup.string().required("Please Enter Your Password")
.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,"Enter Strong Password including Capital letter, Special characters and numbers"),

conpassword:Yup.string()
.required("Please Enter Your Password")
.oneOf([Yup.ref('password'),null],"Both Password must match"),

})

