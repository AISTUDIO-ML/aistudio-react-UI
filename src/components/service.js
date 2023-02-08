import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const createUser = (values) => {
        axios
        .post(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
          username: values.name,
          email: values.email,
          password: values.password,
          phone_no:values.phone
        })
        .then(response => {
          console.log('User profile - '+ response.data.user);
          console.log('User token - '+ response.data.jwt);
          localStorage.setItem("jwt",response.data.jwt) 
          if(response.data.jwt){
            return (
            <><Navigate to={'main'} /></>
            ) 
           }
        })
        .catch(error => {
          console.log('An error occurred:',error.response);
        });
    
}

export const logIn = (values) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/local`, {
        identifier: values.email,
        password: values.password,
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem("jwt",response.data.jwt)
       if(response.data.jwt){
        return (<><Navigate to={'main'} /></>) 
       }
    })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
    
}