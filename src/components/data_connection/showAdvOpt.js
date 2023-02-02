import React from "react";
import { Link } from "react-router-dom";
import close from "../assets/images/close.png";
import icnInfo from "../assets/images/icn_info.png";
import icnRgt from "../assets/images/arw_rgt.png";


function SelectAdvOption() {

  return (
<section class="project">
  <div class="row">
    <div class="col">
      <div class="datasets">
        <a href="#"><i class="fa fa-caret-left"></i> All Datasets</a>
        <h6>Hospital Readmission</h6>
        <dl class="tb-data">
          <dt>Target Variable:</dt>
          <dd>Readmited</dd>
          <dt>Industry:</dt>
          <dd>Health Care</dd>
        </dl>
        <p>Checking for usage limits...</p>
      </div>
    </div>
  </div>

 
  <div class="popup">
    <div class="dialog-box">
      <div class="popup-content">
        <a href="#" class="close">
            <img src={close} alt=""/></a>
        <h2>Create Project from Data Connection</h2>
        <form>
          <div class="form-group">
            <input type="Search" class="form-control" placeholder="Search"/>
          </div>
          <p>Select a data connection or <a href="#">add a new data connection</a> 
          </p><img src="assets/images/arw_lft.png"
              alt=""/> 0-0 of 0 <img src={icnRgt} alt=""/>
          <h4>
            <img src={icnInfo} alt=""/> Show Advanced Options</h4>
          <div class="clearfix">
            <a href="#" class="btn btn-primary float-right">Cancel</a>
          </div>

          <div class="row">
            <div class="col-md-12" style={{paddingTop:"15px"}}>
                <a routerLink="/screen7" class="col-md-12 btn-block" routerLinkActive="activebutton">
                    <button class="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                        Demo</button>
                </a>
            </div>
        </div>

        </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default SelectAdvOption;
