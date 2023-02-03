import React from "react";
import { Link } from "react-router-dom";
import close from "../assets/images/close.png";
import icnInfo from "../assets/images/icn_info.png";
import icnRgt from "../assets/images/arw_rgt.png";
import arwlft from "../assets/images/arw_lft.png";
import MainHeader from "../header/MainHeader";


function SelectAdvOption() {

  return (
    <><MainHeader/>
<section className="project">
  <div className="row">
    <div className="col">
      <div className="datasets">
        <a href="#"><i className="fa fa-caret-left"></i> All Datasets</a>
        <h6>Hospital Readmission</h6>
        <dl className="tb-data">
          <dt>Target Variable:</dt>
          <dd>Readmited</dd>
          <dt>Industry:</dt>
          <dd>Health Care</dd>
        </dl>
        <p>Checking for usage limits...</p>
      </div>
    </div>
  </div>

 
  <div className="popup">
    <div className="dialog-box">
      <div className="popup-content">
        <a href="#" className="close">
            <img src={close} alt=""/></a>
        <h2>Create Project from Data Connection</h2>
        <form>
          <div className="form-group">
            <input type="Search" className="form-control" placeholder="Search"/>
          </div>
          <div className="para_text" >
          <p>Select a data connection or <a href="#">add a new data connection</a> 
          </p>
          <div className="count_no">
          <img src={arwlft}
              alt=""/> 0-0 of 0 <img src={icnRgt} alt=""/>
              </div>
          </div>
       

              
          <h4>
            <img src={icnInfo} alt=""/> Show Advanced Options</h4>
          <div className="clearfix">
            <a href="#" className="btn btn-primary float-right">Cancel</a>
          </div>

          <div className="row">
            <div className="col-md-12" style={{paddingTop:"15px"}}>
                <Link to="/mainLearnMore" className="col-md-12 btn-block" routerLinkActive="activebutton">
                    <button className="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                        Demo</button>
                </Link>
            </div>
        </div>

        </form>
      </div>
    </div>
  </div>
</section>
</>
  );
}

export default SelectAdvOption;
