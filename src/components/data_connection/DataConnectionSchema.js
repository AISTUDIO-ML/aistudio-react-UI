import * as Yup from 'yup';


export const DataConnectionSchema = Yup.object({
    dataconnection:Yup.string().min(3, 'Should be greater then 3').max(20, 'Should be less then 20').required("Please Enter Your Data Connection Name"),
    version:Yup.string().required("Please Enter Correct Version")

   
})