import * as Yup from 'yup';


export const PaymentDetailsSchema = Yup.object({
// If user hit submit without entering the details, required messge ("") will be shown
cardholder:Yup.string().min(3).required("Please Enter Card Holder Name"),

cardnumber:Yup.number().required("Please Enter Card Number"),

// expiry:Yup.number().required("Please Enter Card  Number"),

// cvc:Yup.number().required("Please Enter CV Number"),




})

