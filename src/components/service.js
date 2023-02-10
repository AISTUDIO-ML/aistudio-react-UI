import axios from 'axios';

export const CreateUser = (values) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
      username: values.name,
      email: values.email,
      password: values.password,
      phone_no: values.phone
    })
}
export const UpdateUserbill = (values) => {
  let userId = localStorage.getItem('user_id')
  return axios
    .put(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
      id:userId,
      company_name: values.companyname,
      address: values.address,
      billing_address: values.billing
    })
}
export const UpdateUserpay = (cardholder,cardNum,cvc,expiry) => {
  let userId = localStorage.getItem('user_id')
  console.log("service date -"+expiry)
  return axios
    .put(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
      id:userId,
      card_holder_name:cardholder,
      card_number:cardNum,
      cvc: cvc,
      expiry_date:expiry
    })
}

export const LogIn = (values) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/auth/local`, {
      identifier:values.email,
      password: values.password,
    })
}
