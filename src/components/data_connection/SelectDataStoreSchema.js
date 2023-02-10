import * as Yup from 'yup';


export const SelectDataStoreSchema = Yup.object({
    dataconnection2:Yup.string().min(3, 'Should be greater then 3').max(20, 'Should be less then 20').required("Please Enter Your Data Connection Name"),
    version2:Yup.string().required("Please Enter Correct Version"),
    url: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please enter website'),

   
})