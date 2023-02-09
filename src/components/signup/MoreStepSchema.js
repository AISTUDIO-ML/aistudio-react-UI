import * as Yup from 'yup';


export const MoreStepSchema = Yup.object({
// If user hit submit without entering the details, required messge ("") will be shown


// More Steps Page Schema

companyname:Yup.string().min(3).required("Please Enter Your Company Name"),
address:Yup.string().min(5).required("Please Enter Your Address"),
billing:Yup.string().required("Please Enter Your Billing Address"),

})

