import React, { useEffect } from "react";
import login from "../assets/images/splash.png";
import { Link, useNavigate  } from "react-router-dom";
import Header from '../header/Header';
import { useFormik } from "formik";
import { MoreStepSchema } from "./MoreStepSchema";
import $ from 'jquery';
import { UpdateUserbill } from "../service";


function MoreSteps() {
    const navigate =useNavigate();
// Removing white space through jquery
// Below code will remove the white space from middle of words too
// useEffect(() => {
//     $("input#space").on({
//       keydown: function(e) {
//         if (e.which === 32)
//           return false;
//       },
//       change: function() {
//         this.value = this.value.replace(/\s/g, "");
//       }
//     });
  
  
//   }, [])


useEffect(() => {
   
    $('#space').on('keydown', function(e) {
      console.log(this.value);
      if( e.which === 32 && this.value === '' ) {
        return false;
      }
    });
  }, []);

 // using formik
 const formInitialValues = {
    companyname: "",
    address: "",
    billing:""
  };
 // using formik
  const {handleSubmit, handleChange, handleBlur, touched, values, errors} = useFormik({
    initialValues: formInitialValues,
    validationSchema: MoreStepSchema,
   
   // If we hit the Login Button, the value provided by user will be stored in "values"
    onSubmit:(values)=>{
        UpdateUserbill(values).then(response => {
            if(response){
                navigate('/paymentDetails');
            }
          
          })
            .catch(error =>{
              console.log('An error occurred:',error.response.data.error.message);
            });
        console.log(values);
        localStorage.setItem("company_name",values.companyname)
        localStorage.setItem("address",values.address)
        localStorage.setItem("billing",values.billing)
            
    }
  });

  return (
    <>
    <Header/>
    <section className="main">
    <div className="row">
        <div className="col">
            <div className="create">
                <h1>Just a few<br/> more steps...</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Company name</label>
                        <input type="text" className="form-control" placeholder="Type Here"    
                        name="companyname"
                        value={values.companyname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="space"
                        />
                        {errors.companyname && touched.companyname ? (  <span className="err_msg"> {errors.companyname} </span>) : null }
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Type Here"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="space"
                        />
                        {errors.address && touched.address ? (  <span className="err_msg"> {errors.address} </span>) : null }
                    </div>
                    <div className="form-group">
                        <label>Billing address</label>
                        <input type="text" className="form-control" placeholder="Type Here"
                        name="billing"
                        value={values.billing}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="space"
                        />
                        {errors.billing && touched.billing ? (  <span className="err_msg"> {errors.billing} </span>) : null }
                    </div>
                    <button type="submit" className="btn btn-primary tpspc float-right">Next</button>
                </form>
            </div>
        </div>
        <div className="col">
            <div className="splash">
                <img src={login} alt=""/>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12" style={{paddingTop:"15px"}}>
            <Link to="/paymentDetails" className="col-md-12 btn-block" routerLinkActive="activebutton">
                <button className="btn btn-primary mx-auto" style={{width:"100%", maxWidth:"1280px"}}>Next Page of Product
                    Demo</button>
            </Link>
        </div>
    </div>

</section>
</>
  )
}

export default MoreSteps