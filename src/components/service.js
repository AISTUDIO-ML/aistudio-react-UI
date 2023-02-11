import axios from 'axios';

export const CreateUser = (values) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
    username: values.name,
    email: values.email,
    password: values.password,
    phone_no: values.phone
  })
}
// export const UpdateUserbill = (values) => {
//   let userId = localStorage.getItem('user_id')
//   return axios
//     .put(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
//       id:userId,
//       company_name: values.companyname,
//       address: values.address,
//       billing_address: values.billing
//     })
// }

export const UpdateUserpay = (alldata) => {
  let userId = localStorage.getItem('user_id')
  return axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}`, alldata)
}

export const LogIn = (values) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/auth/local`, {
    identifier: values.email,
    password: values.password,
  })
}
